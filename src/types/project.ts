export interface Project {
    id: string;
    title: string;
    description: string | null;

    github_url: string | null;
    live_url: string | null;
    image_url: string | null;

    tech_stack: string[] | null;

    featured: boolean;

    created_at: string;
    updated_at: string;
}