// import { render, screen } from "@testing-library/react";
// import ArtPieces from ".";
// import mockRouter from "next-router-mock";

// jest.mock("next/router", () => {
//   const push = jest.fn();
//   const replace = jest.fn();

//   return {
//     useRouter: () => ({
//       push,
//       replace,
//     }),
//     push,
//     replace,
//   };
// });

// const mockPieces = [
//   {
//     slug: "orange-red-and-green",
//     artist: "Steve Johnson",
//     name: "Orange Red and Green Abstract Painting",
//     imageSource:
//       "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
//     year: "2018",
//     genre: "Abstract Painting",
//     colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
//     dimensions: {
//       height: 2432,
//       width: 1920,
//       type: "jpg",
//     },
//   },
//   {
//     slug: "blue-and-red",
//     artist: "Jung-Hua Lui",
//     name: "Blue and Red",
//     imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
//     year: "2019",
//     genre: "Abstract Painting",
//     colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
//     dimensions: {
//       height: 2560,
//       width: 1920,
//       type: "jpg",
//     },
//   },
// ];

// describe("ArtPieces", () => {
//   beforeAll(() => {
//     mockRouter.push("/");
//   });

//   it("displays all art pieces as a list", () => {
//     const { getAllByRole } = render(<ArtPieces pieces={mockPieces} />);

//     const listItems = getAllByRole("listitem");
//     expect(listItems).toBeInTheDocument();
//     expect(listItems).toHaveLength(mockPieces.length);
//   });

//   // it("displays each piece's image, title, and artist", () => {
//   //   const { container } = render(<ArtPieces pieces={mockPieces} />);
//   //   const listItems = container.querySelectorAll("li");

//   //   listItems.forEach((item, index) => {
//   //     const imageElement = item.querySelector("Image");
//   //     const titleElement = item.querySelector("figcaption");
//   //     const artistElement = item.querySelector("cite");

//   //     expect(imageElement).toHaveAttribute(
//   //       "src",
//   //       mockPieces[index].imageSource
//   //     );
//   //     expect(titleElement).toHaveTextContent(mockPieces[index].name);
//   //     expect(artistElement).toHaveTextContent(mockPieces[index].artist);
//   //   });
//   // });
// });

// // describe("ArtPiecePreview", () => {
// //   it("displays the art piece's image, title, and artist", () => {
// //     const mockPiece = mockPieces[0];
// //     const { container } = render(
// //       <ArtPiecePreview
// //         imageUrl={mockPiece.imageSource}
// //         title={mockPiece.name}
// //         artist={mockPiece.artist}
// //       />
// //     );
// //     const imageElement = container.querySelector("img");
// //     const titleElement = container.querySelector("figcaption");
// //     const artistElement = container.querySelector("cite");

// //     expect(imageElement).toHaveAttribute("src", mockPiece.imageSource);
// //     expect(titleElement).toHaveTextContent(mockPiece.name);
// //     expect(artistElement).toHaveTextContent(mockPiece.artist);
// //   });
// // });
