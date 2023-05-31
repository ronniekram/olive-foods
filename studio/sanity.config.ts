import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: 'default',
  title: 'Olive Foods Catering Co.',

  projectId: '8e816w1c',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
