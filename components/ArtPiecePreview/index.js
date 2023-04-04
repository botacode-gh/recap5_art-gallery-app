import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <figure>
      <Image src={image} alt={`art piece: ${title}`} width={300} height={300} />
      <figcaption>{title}</figcaption>
      <p>
        by <cite>{artist}</cite>
      </p>
    </figure>
  );
}
