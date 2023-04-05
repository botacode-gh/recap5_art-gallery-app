import pickRandomPiece from "../../utils/random";
import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ pieces }) {
  const randomPiece = pickRandomPiece(pieces);

  return (
    <div>
      <h1>Spotlight Piece</h1>
      <ArtPiecePreview piece={randomPiece} type="spotlight" />
    </div>
  );
}
