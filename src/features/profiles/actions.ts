'use server'

import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { ProfileTable, insertProfileSchema, selectProfileSchema, ProfileType, NewProfileType } from '@/drizzle/schema'
import { db } from '@/drizzle/db'

export const getProfiles = async (): Promise<ProfileType[]> => {
    const profiles = await db.select().from(ProfileTable)
    return selectProfileSchema.array().parse(profiles)
}

export const getProfileById = async (id: string): Promise<ProfileType | null> => {
    const [profile] = await db.select().from(ProfileTable).where(eq(ProfileTable.id, id))
    return profile ? selectProfileSchema.parse(profile) : null
}

export const createProfile = async (data: NewProfileType): Promise<ProfileType> => {
    const validatedData = insertProfileSchema.parse(data)
    const [profile] = await db.insert(ProfileTable).values(validatedData).returning()
    revalidatePath('/profiles')
    return selectProfileSchema.parse(profile)
}

export const updateProfile = async (id: string, data: Partial<NewProfileType>): Promise<ProfileType> => {
    const validatedData = insertProfileSchema.partial().parse(data)
    const [updatedProfile] = await db.update(ProfileTable).set(validatedData).where(eq(ProfileTable.id, id)).returning()
    revalidatePath(`/profiles/${id}`)
    return selectProfileSchema.parse(updatedProfile)
}

export const deleteProfile = async (id: string): Promise<void> => {
    await db.delete(ProfileTable).where(eq(ProfileTable.id, id))
    revalidatePath('/profiles')
}
