import React from "react";
import styled from "styled-components";
import { Template } from ".";

interface Props {
  templates: Template[];
  selectedThumbnailIndex: number;
  handleThumbnailClick: (index: number) => void;
}

const ThumbnailsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 10px 20px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 30px;
`;

const ThumbnailImage = styled.img<{ selected: boolean }>`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 8px;
  border: ${({ selected }) => (selected ? "4px solid #a41d0f" : "none")};
  cursor: pointer;
`;

const ThumbnailText = styled.p<{ selected: boolean }>`
  background: ${({ selected }) => (selected ? "#a41d0f" : "#eee")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  -moz-border-radius: 22px;
  -webkit-border-radius: 22px;
  border-radius: 22px;
  font-weight: bold;
  font-size: 12px;
  margin: 5px auto 0 auto;
  padding: 2px 15px;
`;

export const Thumbnails: React.FC<Props> = ({
  templates,
  selectedThumbnailIndex,
  handleThumbnailClick,
}) => {
  const startIndex = Math.floor(selectedThumbnailIndex / 4) * 4;
  const endIndex = Math.min(startIndex + 3, templates.length - 1);

  return (
    <ThumbnailsContainer>
      {templates.slice(startIndex, endIndex + 1).map((template, index) => (
        <ThumbnailContainer key={template.id}>
          <ThumbnailImage
            data-testid={`thumbnail-${template.id}`}
            alt={template.title}
            src={`${process.env.REACT_APP_API_URL}/${template.thumbnail}`}
            selected={selectedThumbnailIndex === startIndex + index}
            onClick={() => handleThumbnailClick(startIndex + index)}
          />
          <ThumbnailText
            selected={selectedThumbnailIndex === startIndex + index}
          >
            {template.imageName}
          </ThumbnailText>
        </ThumbnailContainer>
      ))}
    </ThumbnailsContainer>
  );
};
