"use client";

import {
  CardWrapper,
  ImageContainer,
  Image,
  ContentContainer,
  Meta,
  CardTitle,
  Description,
  Tags,
  Tag,
  ViewProject,
} from "./styles";
import { WorkProject } from "./Work.types";

interface Props {
  project: WorkProject;
  className?: string;
}

const WorkCard = ({ project, className }: Props) => {
  return (
    <CardWrapper
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className || ""}
    >
      <ImageContainer className="image-container">
        <Image src={project.image} alt={project.title} className="card-image" />
      </ImageContainer>

      <ContentContainer className="content-container">
        <Meta>
          {project.date} • {project.category}
        </Meta>

        <CardTitle>{project.title}</CardTitle>

        <Description>{project.description}</Description>

        <Tags>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>

        <ViewProject className="view-project">
          Acessar Projeto
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </ViewProject>
      </ContentContainer>
    </CardWrapper>
  );
};

export default WorkCard;
