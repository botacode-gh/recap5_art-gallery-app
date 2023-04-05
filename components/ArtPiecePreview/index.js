import Link from "next/link";
import Image from "next/image";

export default function ArtPiecePreview({ piece }) {
  const { dimensions, imageSource, name, artist, slug } = piece;

  return (
    <figure>
      <Image
        src={imageSource}
        alt={`art piece: ${name}`}
        width={dimensions.width * 0.2}
        height={dimensions.height * 0.2}
      />
      <figcaption>
        <div>
          <strong>{artist}</strong>
        </div>
        <div>
          <cite>
            <Link href={{ pathname: "/art-pieces/[slug]", query: { slug } }}>
              {name}
            </Link>
          </cite>{" "}
        </div>
      </figcaption>
    </figure>
  );
}
