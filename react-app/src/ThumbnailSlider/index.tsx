import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LargeImageWithMetadata } from "./LargeImageWithMetadata";
import { NavigationButtons } from "./NavigationButtons";
import { Thumbnails } from "./Thumbnails";

export interface Template {
  title: string;
  id: string;
  imageName: string;
  cost: string;
  description: string;
  thumbnail: string;
  image: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 50%;
  margin: 0 auto;

  background: #fff;
  border: 1px solid #ccc;
  -webkit-box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  padding: 25px;
`;

export const ThumbnailSlider: React.FC = ({}) => {
  const [loading, setLoading] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] =
    useState<number>(0);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/templates`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => setTemplates(res))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const handleThumbnailClick = (index: number) => {
    setSelectedThumbnailIndex(index);
  };

  const handlePreviousClick = () => {
    if (selectedThumbnailIndex > 0) {
      setSelectedThumbnailIndex(selectedThumbnailIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (selectedThumbnailIndex < templates.length - 1) {
      setSelectedThumbnailIndex(selectedThumbnailIndex + 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!templates.length) {
    return <div>No templates found</div>;
  }

  return (
    <Container>
      <LargeImageWithMetadata
        selectedTemplate={templates[selectedThumbnailIndex]}
      />
      <Thumbnails
        templates={templates}
        selectedThumbnailIndex={selectedThumbnailIndex}
        handleThumbnailClick={handleThumbnailClick}
      />
      <NavigationButtons
        selectedThumbnailIndex={selectedThumbnailIndex}
        totalTemplates={templates.length}
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
      />
    </Container>
  );
};
