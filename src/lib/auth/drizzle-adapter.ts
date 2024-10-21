import { db } from '@/drizzle/db'
import { accounts, sessions, users, verificationTokens } from '@/drizzle/auth-schema'
import { and, eq } from 'drizzle-orm'
import type { Adapter } from 'next-auth/adapters'

export function DrizzleAdapter(): Adapter {
    return {
        async createUser(user) {
            const newUser = await db.insert(users).values(user).returning().get()
            return newUser
        },
        async getUser(id) {
            const user = await db.select().from(users).where(eq(users.id, id)).get()
            return user ?? null
        },
        async getUserByEmail(email) {
            const user = await db.select().from(users).where(eq(users.email, email)).get()
            return user ?? null
        },
        async getUserByAccount({ providerAccountId, provider }) {
            const result = await db
                .select()
                .from(users)
                .innerJoin(accounts, eq(users.id, accounts.userId))
                .where(and(eq(accounts.providerAccountId, providerAccountId), eq(accounts.provider, provider)))
                .get()
            return result?.users ?? null
        },
        async updateUser({ id, ...userData }) {
            const updatedUser = await db.update(users).set(userData).where(eq(users.id, id)).returning().get()
            return updatedUser
        },
        async deleteUser(userId) {
            await db.delete(users).where(eq(users.id, userId))
        },
        async linkAccount(account) {
            await db.insert(accounts).values(account)
        },
        async unlinkAccount({ providerAccountId, provider }) {
            await db
                .delete(accounts)
                .where(and(eq(accounts.providerAccountId, providerAccountId), eq(accounts.provider, provider)))
        },
        async createSession(session) {
            await db.insert(sessions).values(session)
            return session
        },
        async getSessionAndUser(sessionToken) {
            const result = await db
                .select({
                    session: sessions,
                    user: users,
                })
                .from(sessions)
                .where(eq(sessions.sessionToken, sessionToken))
                .innerJoin(users, eq(users.id, sessions.userId))
                .get()

            return result
                ? {
                      session: result.session,
                      user: result.user,
                  }
                : null
        },
        async updateSession({ sessionToken, ...data }) {
            const session = await db
                .update(sessions)
                .set(data)
                .where(eq(sessions.sessionToken, sessionToken))
                .returning()
                .get()
            return session ?? null
        },
        async deleteSession(sessionToken) {
            await db.delete(sessions).where(eq(sessions.sessionToken, sessionToken))
        },
        async createVerificationToken(verificationToken) {
            await db.insert(verificationTokens).values(verificationToken)
            return verificationToken
        },
        async useVerificationToken({ identifier, token }) {
            const deletedToken = await db
                .delete(verificationTokens)
                .where(and(eq(verificationTokens.identifier, identifier), eq(verificationTokens.token, token)))
                .returning()
                .get()
            return deletedToken ?? null
        },
    }
}
