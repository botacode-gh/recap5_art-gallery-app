export default function pickRandomPiece(pieces) {
  const numberOfPieces = pieces.length;
  const randomIndex = Math.floor(Math.random() * numberOfPieces);

  return pieces[randomIndex];
}
