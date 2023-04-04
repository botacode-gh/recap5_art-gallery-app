import pickRandomPiece from "../../utils/random";
import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ pieces }) {
  const randomPiece = pickRandomPiece(pieces);

  return (
    <div>
      <h2>Spotlight Piece</h2>
      <ArtPiecePreview
        imageUrl={randomPiece.imageSource}
        title={randomPiece.name}
        artist={randomPiece.artist}
      />
    </div>
  );
}
