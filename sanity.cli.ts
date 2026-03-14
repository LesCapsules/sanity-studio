import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'capsules',
  api: {
    projectId: '9xyjnlvq',
    dataset: 'production',
  },
  deployment: {
    appId: '40a1fce6925b94066b54796c',
  },
})
