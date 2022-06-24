type SquareProps = {
  value: SquareState;
  onClick: ()=>void;
}

export type SquareState = 'O' | 'X' | null;

export const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      { props.value }
    </button>
  );
}