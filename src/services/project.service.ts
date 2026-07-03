import { supabase } from "../lib/supabase";
import type { Project } from "../types/project";

export async function getProjects(): Promise<Project[]> {
    const { data, error } = await supabase
        .from("projects")
        .select("*");

    if (error) throw error;

    return data ?? [];
}

export async function createProject(
    project: Omit<Project, "id" | "createdAt" | "updatedAt">
) {
    const { data, error } = await supabase
        .from("projects")
        .insert(project)
        .select();

    if (error) throw error;

    return data;
}

export async function updateProject(
    id: string,
    project: Partial<Omit<Project, "id" | "createdAt" | "updatedAt">>
) {
    const { data, error } = await supabase
        .from("projects")
        .update(project)
        .eq("id", id)
        .select();

    if (error) throw error;

    return data;
}

export async function deleteProject(id: string) {
    const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", id);

    if (error) throw error;
}