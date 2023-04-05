import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ piece }) {
  const router = useRouter();

  const { dimensions, imageSource, name, artist, year, genre } = piece;

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
          <cite>{name}</cite> ({year === "unknown" ? "date unknown" : year})
        </div>
        <div>{genre}</div>
      </figcaption>
      <button onClick={() => router.push("/art-pieces/")}>
        &larr; All Pieces
      </button>
    </figure>
  );
}
