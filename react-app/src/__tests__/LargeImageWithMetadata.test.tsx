import React from "react";
import { render } from "@testing-library/react";
import { LargeImageWithMetadata } from "../ThumbnailSlider/LargeImageWithMetadata";
import { Template } from "../ThumbnailSlider";

const selectedTemplate: Template = {
  title: "Test Template",
  id: "123",
  cost: "50",
  description: "A test template",
  thumbnail: "thumbnail.jpg",
  image: "image.jpg",
  imageName: "image name",
};

describe("LargeImageWithMetadata", () => {
  test("renders without crashing", () => {
    render(<LargeImageWithMetadata selectedTemplate={selectedTemplate} />);
  });
  test("displays the correct metadata", () => {
    const screen = render(
      <LargeImageWithMetadata selectedTemplate={selectedTemplate} />
    );
    const titleElement = screen.getByText("Test Template");
    expect(titleElement).toBeInTheDocument();
    const descriptionElement = screen.getByText("A test template");
    expect(descriptionElement).toBeInTheDocument();
    const costElement = screen.getByText("$50");
    expect(costElement).toBeInTheDocument();
    const idElement = screen.getByText("123");
    expect(idElement).toBeInTheDocument();
    const thumbnailElement = screen.getByText("thumbnail.jpg");
    expect(thumbnailElement).toBeInTheDocument();
    const imageElement = screen.getByText("image.jpg");
    expect(imageElement).toBeInTheDocument();
  });
  test("displays the correct image source", () => {
    const screen = render(
      <LargeImageWithMetadata selectedTemplate={selectedTemplate} />
    );
    const imageElement = screen.getByTestId("img");
    expect(imageElement).toHaveAttribute(
      "src",
      `${process.env.REACT_APP_API_URL}/${selectedTemplate.image}`
    );
  });
  test("has the correct metadata styles", () => {
    const screen = render(
      <LargeImageWithMetadata selectedTemplate={selectedTemplate} />
    );
    const metadataElement = screen.getByTestId("metadata");
    expect(metadataElement).toHaveStyle(`
      display: flex;
      flex-direction: column;
      align-items: start;
      border-bottom: 1px solid #ddd;
      text-align: left;
      width: 250px;
    `);
  });
});
