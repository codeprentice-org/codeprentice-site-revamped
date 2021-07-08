export type User = {
    _id: string;
    email: string;
    username: string;
    name: string;
    ROLE: string;
    projects: string[];
    bio: string;
    github_link?: string;
    facebook_link?: string;
    linkedin_link?: string;
    instagram_link?: string;
}