import React from "react";
import styled from "styled-components";
import { Template } from ".";

interface Props {
  selectedTemplate: Template;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const LargeImage = styled.img`
  height: 360px;
  width: 430px;
  margin-right: 8px;
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 1px solid #ddd;
  text-align: left;
  width: 250px;
  p {
    border-top: 1px solid #ddd;
    font-size: 12px;
    margin: 0;
    margin-bottom: 10px;
  }
  strong {
    background: #555;
    color: #fff;
    font-size: 10px;
    font-weight: normal;
    padding: 2px 5px;
    text-transform: uppercase;
  }
`;

export const LargeImageWithMetadata: React.FC<Props> = ({
  selectedTemplate,
}) => {
  const { title, description, cost, id, thumbnail, image } = selectedTemplate;
  return (
    <Container>
      <LargeImage
        data-testid="img"
        alt={selectedTemplate.title}
        src={`${process.env.REACT_APP_API_URL}/${selectedTemplate.image}`}
      />
      <Metadata data-testid="metadata">
        <p>
          <strong>Title</strong> {title}
        </p>
        <p>
          <strong>Description</strong> {description}
        </p>
        <p>
          <strong>Cost</strong> ${cost}
        </p>
        <p>
          <strong>ID #</strong> {id}
        </p>
        <p>
          <strong>Thumbnail File</strong> {thumbnail}
        </p>
        <p>
          <strong>Large Image File</strong> {image}
        </p>
      </Metadata>
    </Container>
  );
};
