import React from "react";
import "./PortfolioItem.scss";
import Tag from "./Tag";

const renderImageSection = imageSrc => (
  <div
    className="image-container"
    style={{
      background: `url(${imageSrc})`,
      backgroundSize: "cover",
      position: "relative"
    }}
  >
    <div className="dark-layer" />
  </div>
);

const PortfolioItem = ({
  title,
  description,
  tags,
  onClick,
  imageSrc,
  demoLink,
  githubLink,
  thesisLink,
  presentationLink,
  inverted
}) => {
  return (
    <div className="PortfolioItem shadow" onClick={onClick}>
      {!inverted && renderImageSection(imageSrc)}

      <div className="content-container">
        <h2>{title}</h2>
        <p className="text-muted">{description}</p>
        <div className="tags-container">{tags.map(i => <Tag>{i}</Tag>)}</div>
        <div className="button-row">
          {githubLink && (
            <a href={githubLink} className="button button-primary button-pill" target="_blank">
              View on GitHub
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              className="button button-primary button-pill"
              target="_blank"
            >
              View Demo
            </a>
          )}
          {thesisLink && (
            <a
              href={thesisLink}
              className="button button-primary button-pill"
              target="_blank"
            >
              View Thesis
            </a>
          )}
          {presentationLink && (
            <a
              href={presentationLink}
              className="button button-primary button-pill"
              target="_blank"
            >
              View Presentation
            </a>
          )}
        </div>
      </div>

      {inverted && renderImageSection(imageSrc)}
    </div>
  );
};

export default PortfolioItem;
