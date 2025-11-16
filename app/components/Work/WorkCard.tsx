"use client";

import {
  CardWrapper,
  Image,
  Meta,
  CardTitle,
  Description,
  Tags,
  Tag,
} from "./styles";
import { WorkProject } from "./Work.types";

interface Props {
  project: WorkProject;
}

export default function WorkCard({ project }: Props) {
  return (
    <CardWrapper href={project.url} target="_blank" rel="noopener noreferrer">
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
