import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  console.log("pieces in ArtPieceDetailsPage():", pieces);
  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((piece) => piece.slug === slug);

  console.log("piece in ArtPieceDetailsPage:", piece);
  console.log("slug in ArtPieceDetailsPage:", slug);

  // const pieces =

  // if (router.isFallback) {
  //   <h1>Loading ([slug].js)</h1>;
  // }

  return <ArtPieceDetails piece={piece} />;
}
