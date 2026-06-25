import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const APINode = ({ id }) => {
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
    <BaseNode title="API Node" handles={handles}>
      <div>Fetch data from API</div>
    </BaseNode>
  );
};
