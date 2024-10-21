import { pgTable, text, timestamp, primaryKey } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const users = pgTable('users', {
    id: text('id').notNull().primaryKey(),
    name: text('name'),
    email: text('email').notNull(),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    image: text('image'),
})

export const accounts = pgTable(
    'accounts',
    {
        userId: text('userId')
            .notNull()
            .references(() => users.id, { onDelete: 'cascade' }),
        type: text('type', { enum: ['oauth', 'email', 'credentials'] }).notNull(),
        provider: text('provider').notNull(),
        providerAccountId: text('providerAccountId').notNull(),
        refresh_token: text('refresh_token'),
        access_token: text('access_token'),
        expires_at: timestamp('expires_at', { mode: 'date' }),
        token_type: text('token_type'),
        scope: text('scope'),
        id_token: text('id_token'),
        session_state: text('session_state'),
    },
    account => ({
        compoundKey: primaryKey(account.provider, account.providerAccountId),
    }),
)

export const sessions = pgTable('sessions', {
    sessionToken: text('sessionToken').notNull().primaryKey(),
    userId: text('userId')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
})

export const verificationTokens = pgTable(
    'verificationToken',
    {
        identifier: text('identifier').notNull(),
        token: text('token').notNull(),
        expires: timestamp('expires', { mode: 'date' }).notNull(),
    },
    vt => ({
        compoundKey: primaryKey(vt.identifier, vt.token),
    }),
)

// Schemas for users
export const insertUserSchema = createInsertSchema(users, {
    email: z.string().email(),
    emailVerified: z.date().nullable(),
})

export const selectUserSchema = createSelectSchema(users)

// Schemas for accounts
export const insertAccountSchema = createInsertSchema(accounts, {
    type: z.enum(['oauth', 'email', 'credentials']),
    expires_at: z.date().nullable(),
})

export const selectAccountSchema = createSelectSchema(accounts)

// Schemas for sessions
export const insertSessionSchema = createInsertSchema(sessions, {
    expires: z.date(),
})

export const selectSessionSchema = createSelectSchema(sessions)

// Schemas for verification tokens
export const insertVerificationTokenSchema = createInsertSchema(verificationTokens, {
    expires: z.date(),
})

export const selectVerificationTokenSchema = createSelectSchema(verificationTokens)
