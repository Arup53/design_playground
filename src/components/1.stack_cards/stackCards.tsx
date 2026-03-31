import "../../index.css";
type CSSVariables = {
  [key: `--${string}`]: string | number;
};

const StackCards = () => {
  const LENGTH = 3;
  return (
    <div className="wrapper">
      {new Array(LENGTH).fill(0).map((_, i) => (
        <div
          className="card"
          key={i}
          style={
            { "--index": LENGTH - 1 - i } as React.CSSProperties & CSSVariables
          }
        />
      ))}
    </div>
  );
};

export default StackCards;
