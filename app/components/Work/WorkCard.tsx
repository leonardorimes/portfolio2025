"use client";

import { forwardRef } from "react";
import {
  CardWrapper,
  Image,
  Meta,
  CardTitle,
  Description,
  Tags,
  Tag,
  OpenButton,
} from "./styles";
import { WorkProject } from "./Work.types";

interface Props {
  project: WorkProject;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const WorkCard = forwardRef<HTMLAnchorElement, Props>(
  ({ project, className, onClick, isActive }, ref) => {
    return (
    <CardWrapper
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      ref={ref}
      onClick={onClick}
      data-active={
        isActive === undefined ? undefined : isActive ? "true" : "false"
      }
    >
      {isActive && <OpenButton>Clique para abrir o projeto</OpenButton>}

      <Image src={project.image} alt={project.title} />

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
    </CardWrapper>
  );
  }
);

WorkCard.displayName = "WorkCard";

export default WorkCard;
