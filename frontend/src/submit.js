// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      const result = await response.json();

      alert(
        `Pipeline Analysis Complete!

        Nodes: ${result.num_nodes}
        Edges: ${result.num_edges}
        Valid DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}`,
      );
    } catch (error) {
      console.error(error);

      alert("Failed to analyze pipeline.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 28px",
          borderRadius: "10px",
          fontSize: "16px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Analyze Pipeline
      </button>
    </div>
  );
};
