import type { StructureBuilder, StructureResolverContext } from "sanity/desk";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";

import schemas from "./schemas"
import { defaultDocumentNode, deskConfig, singletons, actions, previews } from "./utils/desk";

export default defineConfig({
  name: `default`,
  title: `Piper Olsen Portfolio`,

  projectId: `a34r16vo`,
  dataset: `production`,

  plugins: [
    deskTool({
      defaultDocumentNode,
      structure: (S: StructureBuilder, context: StructureResolverContext) => deskConfig(S, context),
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemas,
    templates: (templates) => templates.filter(({ schemaType }) => !singletons.has(schemaType)),
  },
  document: {
    /** Defines which actions can be taken on a document */
    actions: (input, context) => singletons.has(context.schemaType) ? input.filter(({ action }) => action && actions.has(action)) : input,
        /** Creates a preview URL for specified content */
    productionUrl: async (prev, context) => {
      const { dataset, document } = context;

      if (previews.has(document._type)) {
        const previewURL = new URL(process.env.SANITY_STUDIO_BASE_URL);
        previewURL.pathname = `/api/preview`;
        previewURL.searchParams.append(`secret`, process.env.SANITY_STUDIO_API_TOKEN);
        document?.slug && previewURL.searchParams.append(`slug`, document?.slug?.current)
        previewURL.searchParams.append(`schemaType`, document?._type);
        previewURL.searchParams.append(`dataset`, dataset);
        return previewURL.toString();
      }
      return prev;
    },
  }
})
