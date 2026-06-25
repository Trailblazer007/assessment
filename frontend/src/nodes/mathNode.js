import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const MathNode = ({ id }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-a`,
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-b`,
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-result`,
    },
  ];

  return (
    <BaseNode title="Math Node" handles={handles}>
      <div>Perform calculations</div>
    </BaseNode>
  );
};
