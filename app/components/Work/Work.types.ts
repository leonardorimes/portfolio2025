export interface WorkProject {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  category?: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}
