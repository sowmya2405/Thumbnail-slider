import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Thumbnails } from "../ThumbnailSlider/Thumbnails";

describe("Thumbnails component", () => {
  const templates = [
    {
      id: "1",
      imageName: "Template 1",
      thumbnail: "template1.png",
      image: "image1.png",
      cost: "45.00",
      title: "Business Site Template - 7111",
      description:
        "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
    },
    {
      id: "2",
      imageName: "Template 2",
      thumbnail: "template2.png",
      image: "image2.png",
      cost: "45.00",
      title: "Business Site Template - 7111",
      description:
        "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
    },
    {
      id: "3",
      imageName: "Template 3",
      thumbnail: "template3.png",
      image: "image3.png",
      cost: "45.00",
      title: "Business Site Template - 7111",
      description:
        "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
    },
    {
      id: "4",
      imageName: "Template 4",
      thumbnail: "template4.png",
      image: "image4.png",
      cost: "45.00",
      title: "Business Site Template - 7111",
      description:
        "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
    },
    {
      id: "5",
      imageName: "Template 5",
      thumbnail: "template5.png",
      image: "image5.png",
      cost: "45.00",
      title: "Business Site Template - 7111",
      description:
        "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
    },
    {
      id: "6",
      imageName: "Template 6",
      thumbnail: "template6.png",
      image: "image6.png",
      cost: "45.00",
      title: "Business Site Template - 7111",
      description:
        "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
    },
  ];

  it("renders thumbnails", () => {
    const handleThumbnailClick = jest.fn();
    const { getAllByRole } = render(
      <Thumbnails
        templates={templates}
        selectedThumbnailIndex={0}
        handleThumbnailClick={handleThumbnailClick}
      />
    );
    const thumbnailImages = getAllByRole("img");
    expect(thumbnailImages.length).toBe(4);
  });

  it("shows the correct thumbnail text for each template", () => {
    const handleThumbnailClick = jest.fn();
    const { getByText } = render(
      <Thumbnails
        templates={templates}
        selectedThumbnailIndex={0}
        handleThumbnailClick={handleThumbnailClick}
      />
    );
    expect(getByText("Template 1")).toBeInTheDocument();
    expect(getByText("Template 2")).toBeInTheDocument();
    expect(getByText("Template 3")).toBeInTheDocument();
    expect(getByText("Template 4")).toBeInTheDocument();
  });

  it('applies the "selected" styles to the selected thumbnail', () => {
    const handleThumbnailClick = jest.fn();
    const { getByTestId } = render(
      <Thumbnails
        templates={templates}
        selectedThumbnailIndex={2}
        handleThumbnailClick={handleThumbnailClick}
      />
    );
    const selectedThumbnail = getByTestId("thumbnail-3");
    expect(selectedThumbnail).toHaveStyle("border: 4px solid #a41d0f");
    const nonSelectedThumbnail = getByTestId("thumbnail-1");
    expect(nonSelectedThumbnail).not.toHaveStyle("border: 4px solid #a41d0f");
  });

  it("calls the handleThumbnailClick callback when a thumbnail is clicked", () => {
    const handleThumbnailClick = jest.fn();
    const { getByTestId } = render(
      <Thumbnails
        templates={templates}
        selectedThumbnailIndex={0}
        handleThumbnailClick={handleThumbnailClick}
      />
    );
    const thumbnail = getByTestId("thumbnail-2");
    fireEvent.click(thumbnail);
    expect(handleThumbnailClick).toHaveBeenCalledWith(1);
  });
});
