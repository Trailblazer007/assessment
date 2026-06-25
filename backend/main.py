from collections import defaultdict, deque

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Pipeline(BaseModel):
    nodes: list
    edges: list


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


def is_dag(nodes, edges):
    graph = defaultdict(list)
    indegree = defaultdict(int)

    node_ids = {node["id"] for node in nodes}

    for node_id in node_ids:
        indegree[node_id] = 0

    for edge in edges:
        source = edge["source"]
        target = edge["target"]

        graph[source].append(target)
        indegree[target] += 1

    queue = deque(
        [node_id for node_id in node_ids if indegree[node_id] == 0]
    )

    visited = 0

    while queue:
        node = queue.popleft()
        visited += 1

        for neighbor in graph[node]:
            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(node_ids)


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag(
            pipeline.nodes,
            pipeline.edges,
        ),
    }