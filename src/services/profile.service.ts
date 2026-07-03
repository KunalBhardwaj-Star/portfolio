import { supabase } from "../lib/supabase";
import type { Profile } from "../types/profile";

export async function getProfile(): Promise<Profile | null> {
    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .single();

    if (error) throw error;

    return data;
}

export async function updateProfile(
    profile: Partial<Omit<Profile, "id" | "createdAt" | "updatedAt">>
) {
    const { data, error } = await supabase
        .from("profiles")
        .update(profile)
        .select();

    if (error) throw error;

    return data;
}

export async function createProfile(
    profile: Omit<Profile, "id" | "createdAt" | "updatedAt">
) {
    const { data, error } = await supabase
        .from("profiles")
        .insert(profile)
        .select();

    if (error) throw error;

    return data;
}

export async function deleteProfile(id: string) {
    const { error } = await supabase
        .from("profiles")
        .delete()
        .eq("id", id);

    if (error) throw error;
}
