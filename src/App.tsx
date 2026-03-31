import "./index.css";

type CSSVariables = {
  [key: `--${string}`]: string | number;
};

function App() {
  const LENGTH = 3;

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="wrapper">
        {new Array(LENGTH).fill(0).map((_, i) => (
          <div
            className="card"
            key={i}
            style={
              { "--index": LENGTH - 1 - i } as React.CSSProperties &
                CSSVariables
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
