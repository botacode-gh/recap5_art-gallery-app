import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieceDetails({ piece }) {
  return (
    <>
      <ArtPiecePreview piece={piece} type="details" />
    </>
  );
}
