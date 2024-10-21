import { relations } from 'drizzle-orm'
import { pgTable, text, uuid, timestamp, jsonb, varchar } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'
import * as auth from './auth-schema'

// Common Timestamps
const createdAt = timestamp('created_at', { withTimezone: true }).notNull().defaultNow()
const updatedAt = timestamp('updated_at', { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())

// Enums
const ProfileCategory = ['Creator', 'Project', 'Community', 'Event'] as const
const InterestArea = [
    'Art & Creativity',
    'Spiritual & Consciousness',
    'Cosmopolitan Relations',
    'Holistic Education',
    'Integrative Biological Medicine',
    'New Economies',
    'Supra Technology & Production',
    'Planetary Culture',
    'Communications',
    'Regenerative Agriculture',
    'Sustainable Habitat',
    'Renewable Energies',
    'United Areas',
] as const
const GiveOrReceive = ['Give', 'Receive'] as const

// Profile Table
export const ProfileTable = pgTable('profiles', {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: text('user_id')
        .notNull()
        .references(() => auth.users.id, { onDelete: 'cascade' }),
    walletAddress: varchar('wallet_address', { length: 256 }).notNull().unique(),
    avatarUrl: text('avatar_url').notNull(),
    username: varchar('username', { length: 256 }).notNull().unique(),
    bio: text('bio').notNull().default(''),
    profileCategory: varchar('profile_category', { length: 50, enum: ProfileCategory }).notNull(),
    participate: varchar('give_or_receive', { length: 10, enum: GiveOrReceive }).notNull(),
    interestAreas: text('interest_areas').array().notNull(),
    startTime: timestamp('start_time', { withTimezone: true }),
    endTime: timestamp('end_time', { withTimezone: true }),
    location: jsonb('location'),
    createdAt,
    updatedAt,
})

// Schemas
export const insertProfileSchema = createInsertSchema(ProfileTable, {
    profileCategory: z.enum(ProfileCategory),
    participate: z.enum(GiveOrReceive),
    interestAreas: z.array(z.enum(InterestArea)),
    location: z
        .object({
            latitude: z.number(),
            longitude: z.number(),
        })
        .optional(),
})

export const selectProfileSchema = createSelectSchema(ProfileTable)

// Relations
export const profileRelations = relations(ProfileTable, ({ one }) => ({
    user: one(auth.users, {
        fields: [ProfileTable.userId],
        references: [auth.users.id],
    }),
}))

// Types
export type ProfileType = z.infer<typeof selectProfileSchema>
export type NewProfileType = z.infer<typeof insertProfileSchema>

export { auth }
