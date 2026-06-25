import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const EmailNode = ({ id }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-input`,
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode title="Email Node" handles={handles}>
      <div>Send email action</div>
    </BaseNode>
  );
};
