import { render, waitFor } from "@testing-library/react";
import { ThumbnailSlider } from "../ThumbnailSlider";

describe("ThumbnailSlider", () => {
  it("should displays loading message while fetching data", () => {
    const { getByText } = render(<ThumbnailSlider />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("should displays message when no templates are found", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => [],
    } as any);
    const { getByText } = render(<ThumbnailSlider />);
    await waitFor(() =>
      expect(getByText("No templates found")).toBeInTheDocument()
    );
  });
});
