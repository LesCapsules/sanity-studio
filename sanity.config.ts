import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { media } from 'sanity-plugin-media'
import schemas from './schemas/schema'

export default defineConfig({
  title: 'Les Capsules',
  projectId: '9xyjnlvq',
  dataset: 'production',
  plugins: [deskTool(), media()],

  schema: {
    types: schemas,
  },
})
