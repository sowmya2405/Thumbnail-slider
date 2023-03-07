import { fireEvent, render } from "@testing-library/react";
import { NavigationButtons } from "../ThumbnailSlider/NavigationButtons";

describe("NavigationButtons component", () => {
  it("renders without crashing", () => {
    render(
      <NavigationButtons
        selectedThumbnailIndex={0}
        totalTemplates={5}
        handlePreviousClick={() => {}}
        handleNextClick={() => {}}
      />
    );
  });
  it("calls handlePreviousClick when the previous button is clicked", () => {
    const handlePreviousClickMock = jest.fn();
    const { getByAltText } = render(
      <NavigationButtons
        selectedThumbnailIndex={1}
        totalTemplates={5}
        handlePreviousClick={handlePreviousClickMock}
        handleNextClick={() => {}}
      />
    );

    fireEvent.click(getByAltText("Previous"));
    expect(handlePreviousClickMock).toHaveBeenCalledTimes(1);
  });
  it("calls handleNextClick when the next button is clicked", () => {
    const handleNextClickMock = jest.fn();
    const { getByAltText } = render(
      <NavigationButtons
        selectedThumbnailIndex={1}
        totalTemplates={5}
        handlePreviousClick={() => {}}
        handleNextClick={handleNextClickMock}
      />
    );

    fireEvent.click(getByAltText("Next"));
    expect(handleNextClickMock).toHaveBeenCalledTimes(1);
  });
  it("disables the previous button when selectedThumbnailIndex is 0", () => {
    const handlePreviousClickMock = jest.fn();
    const { getByAltText } = render(
      <NavigationButtons
        selectedThumbnailIndex={0}
        totalTemplates={5}
        handlePreviousClick={handlePreviousClickMock}
        handleNextClick={() => {}}
      />
    );

    fireEvent.click(getByAltText("Previous"));
    expect(handlePreviousClickMock).toHaveBeenCalledTimes(0);
  });

  it("disables the next button when selectedThumbnailIndex is equal to totalTemplates - 1", () => {
    const handleNextClickMock = jest.fn();
    const { getByAltText } = render(
      <NavigationButtons
        selectedThumbnailIndex={4}
        totalTemplates={5}
        handlePreviousClick={() => {}}
        handleNextClick={handleNextClickMock}
      />
    );

    const nextButton = getByAltText("Next") as HTMLImageElement;
    expect(handleNextClickMock).toHaveBeenCalledTimes(0);
  });
});
