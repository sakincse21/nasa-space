
export default function GamePage() {
  return (
    <div className="w-full h-full mx-auto flex flex-col justify-center items-center gap-5">
        <h1
        className="text-center text-5xl overflow-hidden transition-all duration-500 w-full [filter:drop-shadow(0_0_23px_#ff3737)]"
        style={{
          color: '#ff3737',
          WebkitTextStroke: `1px #ff3737`,
        }}
      >Gravity 0.0</h1>
      <iframe
        src="/gd2/NSAC-25.html"
        width="960"
        height="600"
        style={{ border: "none" }}
        title="Gravity 0.0"
      />
    </div>
  );
}
