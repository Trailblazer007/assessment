import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const DateNode = ({ id }) => {
  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode title="Date Node" handles={handles}>
      <div>Current date/time</div>
    </BaseNode>
  );
};
