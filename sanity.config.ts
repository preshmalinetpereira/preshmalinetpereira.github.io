import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { codeInput } from "@sanity/code-input";
import { projectId, dataset } from "./lib/env.api";
import {richDate} from '@sanity/rich-date-input'

export default defineConfig({
  name: 'linetpreshma',
  title: 'linet.vercel.app',
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool(), visionTool(), codeInput(), richDate()],
  schema: { types: schemaTypes },
})
