import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <>
      <h2
        style={{
          marginTop: 0,
          marginBottom: 18,
          fontSize: "18px",
        }}
      >
        Available Nodes
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        <DraggableNode type="api" label="API" />
        <DraggableNode type="email" label="Email" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="date" label="Date" />
      </div>
    </>
  );
};
