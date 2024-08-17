import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import { frFRLocale } from '@sanity/locale-fr-fr'
import schemas from './schemas/schema'

export default defineConfig({
  title: 'Les Capsules',
  projectId: '9xyjnlvq',
  dataset: 'production',
  plugins: [structureTool(), media(), frFRLocale()],

  schema: {
    types: schemas,
  },
})
