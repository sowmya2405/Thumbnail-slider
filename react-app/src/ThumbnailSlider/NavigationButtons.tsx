import React from "react";
import styled from "styled-components";

interface Props {
  handlePreviousClick: () => void;
  handleNextClick: () => void;
  selectedThumbnailIndex: number;
  totalTemplates: number;
}

const PreviousOrNextButton = styled.img<{ disabled: boolean }>`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-right: 8px;
  border: "2px solid blue";
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  margin-top: 20px;
`;

export const NavigationButtons: React.FC<Props> = ({
  selectedThumbnailIndex,
  totalTemplates,
  handleNextClick,
  handlePreviousClick,
}) => {
  const previousDisabled = selectedThumbnailIndex <= 0;
  const nextDisabled = selectedThumbnailIndex >= totalTemplates - 1;
  return (
    <div>
      <PreviousOrNextButton
        alt="Previous"
        disabled={previousDisabled}
        onClick={previousDisabled ? undefined : handlePreviousClick}
        src={require("../images/previous.png")}
      />
      <PreviousOrNextButton
        alt="Next"
        disabled={nextDisabled}
        onClick={nextDisabled ? undefined : handleNextClick}
        src={require("../images/next.png")}
      />
    </div>
  );
};
