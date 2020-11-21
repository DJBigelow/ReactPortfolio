import { Category } from "./Category";

export class Project {
    id: number;
    title: string;
    slug: string;
    design: string;
    dateOfCompletion: Date;
    categories: Category[];
    isActive: boolean;

    constructor(id: number,
                title: string,
                slug: string,
                design: string,
                dateOfCompletion: Date,
                categories: Category[],
                isActive: boolean,) 
    {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.design = design;
        this.dateOfCompletion = dateOfCompletion;
        this.categories = categories;
        this.isActive = isActive;
    }
}