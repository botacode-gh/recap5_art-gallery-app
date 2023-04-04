import Image from "next/image";

export default function ArtPiecePreview({ imageUrl, title, artist }) {
  return (
    <figure>
      <Image
        src={imageUrl}
        alt={`art piece: ${title}`}
        width={300}
        height={300}
      />
      <figcaption>{title}</figcaption>
      <span>
        by <cite>{artist}</cite>
      </span>
    </figure>
  );
}
