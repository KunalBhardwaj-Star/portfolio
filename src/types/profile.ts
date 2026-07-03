export interface Profile {
    id: string;

    name: string;

    email: string;

    about: string | null;

    github_url: string | null;

    linkedin_url: string | null;

    leetcode_url: string | null;

    resume_url: string | null;

    profile_image_url: string | null;

    created_at: string;

    updated_at: string;
}