import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

export const env = createEnv({
    emptyStringAsUndefined: true,
    server: {
        DATABASE_URL: z.string().url(),
        AUTH_SECRET: z.string(),
    },
    experimental__runtimeEnv: process.env,
})
