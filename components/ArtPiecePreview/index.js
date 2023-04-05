import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPiecePreview({ piece, type = "default" }) {
  const router = useRouter();
  const { dimensions, imageSource, name, artist, slug, year, genre } = piece;

  let imageSize;
  let infoDisplay;

  if (type === "details") {
    imageSize = 0.3;
    infoDisplay = (
      <>
        <div>
          <cite>{name}</cite> ({year === "unknown" ? "date unknown" : year})
        </div>
        <div>{genre}</div>
      </>
    );
  } else if (type === "spotlight") {
    imageSize = 0.25;
    infoDisplay = (
      <>
        <div>
          <cite>
            <Link href={{ pathname: "/art-pieces/[slug]", query: { slug } }}>
              {name}
            </Link>
          </cite>{" "}
        </div>
      </>
    );
  } else {
    imageSize = 0.15;
    infoDisplay = (
      <>
        <div>
          <cite>
            <Link href={{ pathname: "/art-pieces/[slug]", query: { slug } }}>
              {name}
            </Link>
          </cite>{" "}
        </div>
      </>
    );
  }

  return (
    <figure>
      <Image
        src={imageSource}
        alt={`art piece: ${name}`}
        width={dimensions.width * imageSize}
        height={dimensions.height * imageSize}
      />
      <figcaption>
        <div>
          <strong>{artist}</strong>
        </div>
        <div>{infoDisplay}</div>
      </figcaption>
      {type === "details" && (
        <button onClick={() => router.push("/art-pieces/")}>
          &larr; All Pieces
        </button>
      )}
    </figure>
  );
}
