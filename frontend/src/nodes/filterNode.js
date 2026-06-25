import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const FilterNode = ({ id }) => {
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
    <BaseNode title="Filter Node" handles={handles}>
      <div>Filter data stream</div>
    </BaseNode>
  );
};
