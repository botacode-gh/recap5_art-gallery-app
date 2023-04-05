import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            imageUrl={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            year={piece.year === "unknown" ? "date unknown" : piece.year}
            genre={piece.genre}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
            slug={piece.slug}
          />
        </li>
      ))}
    </ul>
  );
}
