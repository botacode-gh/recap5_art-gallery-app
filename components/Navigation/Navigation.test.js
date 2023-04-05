import { render, screen } from "@testing-library/react";
import Navigation from ".";

describe("Navigation", () => {
  it("displays navigation links labelled 'Spotlight' and 'Pieces'", () => {
    render(<Navigation />);
    const spotlightLink = screen.getByRole("link", { name: "Spotlight" });
    const piecesLink = screen.getByRole("link", { name: "Pieces" });

    expect(spotlightLink).toBeInTheDocument();
    expect(piecesLink).toBeInTheDocument();
  });
  test;
});
