import H3 from "../../typography/H3";
import Body from "../../typography/Body";

export default function Instructions() {
  return (
    <div>
      <H3 message="How to Play" />
      <Body message="Start with one empty hole in the centre of the board. Jump a peg over an adjacent peg into an empty hole to remove the jumped peg. You can only jump horizontally or vertically, not diagonally. Keep jumping and removing pegs until no more moves are possible. Your goal is to leave just one peg remaining in the centre of the board!" />
    </div>
  );
}
