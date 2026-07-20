import { createApp } from '@/app'
import { env } from '@/config/env'

const app = createApp()

app.listen(env.port, () => {
  console.log(`Cell Biology API server running on http://localhost:${env.port}`)
  console.log(`Environment: ${env.nodeEnv}`)
  console.log(`Accepting requests from: ${env.clientOrigin}`)
})