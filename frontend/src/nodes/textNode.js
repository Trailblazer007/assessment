import { useState, useMemo } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const variableHandles = useMemo(() => {
    const matches = currText.match(/\{\{(.*?)\}\}/g) || [];

    const cleanVars = matches
      .map((v) => v.replace("{{", "").replace("}}", "").trim())
      .filter((v) => /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(v));

    return [...new Set(cleanVars)];
  }, [currText]);

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
    },
    ...variableHandles.map((v, index) => ({
      type: "target",
      position: Position.Left,
      id: `${id}-${v}`,
      style: {
        top: 50 + index * 25,
      },
    })),
  ];

  const lines = currText.split("\n");
  const longestLine = Math.max(...lines.map((line) => line.length), 20);

  const nodeWidth = Math.min(Math.max(longestLine * 8, 240), 600);

  const textareaHeight = Math.max(lines.length * 24, 80);

  return (
    <BaseNode
      title="Text Node"
      handles={handles}
      width={nodeWidth}
      minHeight={textareaHeight + 90}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <label>Text:</label>

        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            width: "100%",
            height: `${textareaHeight}px`,
            resize: "none",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        />

        {variableHandles.length > 0 && (
          <div
            style={{
              fontSize: "12px",
              opacity: 0.7,
            }}
          >
            Variables: {variableHandles.join(", ")}
          </div>
        )}
      </div>
    </BaseNode>
  );
};
