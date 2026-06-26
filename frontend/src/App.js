import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Pipeline Builder</h1>
        <p>Build, connect and analyze workflow pipelines.</p>
      </header>

      <section className="toolbar-section">
        <PipelineToolbar />
      </section>

      <section className="canvas-section">
        <PipelineUI />
      </section>

      <footer className="submit-section">
        <SubmitButton />
      </footer>
    </div>
  );
}

export default App;
