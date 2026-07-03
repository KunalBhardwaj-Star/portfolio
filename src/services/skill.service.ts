import {supabase} from "../lib/supabase";
import type {Skill} from "../types/skills";

export const getSkills = async () : Promise <Skill[]> => {
    const {data , error} = await supabase
        .from("skills")
        .select("*");

    if(error) throw error;

    return data ?? [];
}

export const createSkill = async (skill : Omit<Skill, "id" | "created_at">) => {
    const {data , error} = await supabase
        .from("skills")
        .insert(skill)
        .select();

    if(error) throw error;

    return data;
}

export const updateSkill = async (id : string, skill : Partial<Omit<Skill, "id" | "created_at">>) => {
    const {data , error} = await supabase
        .from("skills")
        .update(skill)
        .eq("id", id)
        .select();

    if(error) throw error;

    return data;
}

export const deleteSkill = async (id : string) => {
    const {error} = await supabase
        .from("skills")
        .delete()
        .eq("id", id);

    if(error) throw error;
}
