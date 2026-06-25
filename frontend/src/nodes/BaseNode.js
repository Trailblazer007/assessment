import { Handle } from "reactflow";

export const BaseNode = ({
  title,
  handles = [],
  children,
  width = 240,
  minHeight = 120,
}) => {
  return (
    <div
      style={{
        width,
        minHeight,
        border: "1px solid #d0d7de",
        borderRadius: "12px",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}

      <div
        style={{
          padding: "10px 12px",
          borderBottom: "1px solid #eee",
          fontWeight: 600,
        }}
      >
        {title}
      </div>

      <div
        style={{
          padding: "12px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
