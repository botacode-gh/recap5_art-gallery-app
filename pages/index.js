import Spotlight from "../components/Spotlight";

export default function SpotlightPage({ pieces }) {
  return (
    <div>
      {pieces && (
        <>
          <Spotlight pieces={pieces} />
        </>
      )}
    </div>
  );
}
