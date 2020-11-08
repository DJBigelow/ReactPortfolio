import { Category } from "./Category";

export interface Project {
    id: number;
    title: string;
    slug: string;
    design: string;
    dateOfCompletion: Date;
    categories: Category[];
}