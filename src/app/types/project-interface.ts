export interface Project {
    projectId: number;
    projectTitle: string;
    projectDescription: string;
    technologies: string[];
    thumbnail: string;
    linkToLive: string | null;
    linkToRepo: string | null;
}