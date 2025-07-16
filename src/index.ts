import PostalMime from "postal-mime"

import type { Env } from "./types"

export default {
  async email(message: ForwardableEmailMessage, env: Env): Promise<void> {
    try {
      const email = await PostalMime.parse(message.raw)
      // eslint-disable-next-line no-console
      console.log("Parsed email:", JSON.stringify(email, null, 2))
    } catch (error) {
      console.error(error)
    }
  },
}
