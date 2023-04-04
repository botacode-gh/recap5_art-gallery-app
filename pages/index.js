import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";

  const { data } = useSWR(url);

  return (
    <div>
      <h1>Art</h1>
      {data && <ArtPieces pieces={data} />}
    </div>
  );
}
