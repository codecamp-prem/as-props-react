import { Button } from "./Button";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "flex-start",
        }}
      >
        <Button size="sm">small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
        <Button As="a" href="/" className="link">
          Link
        </Button>
      </div>
    </>
  );
}
