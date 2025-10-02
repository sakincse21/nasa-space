export default function GamePage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🎮 My Godot Game</h1>
      <iframe
        src="/godot/iss_sim.html"
        width="960"
        height="600"
        style={{ border: "none" }}
        title="Godot Game"
      />
    </div>
  );
}
