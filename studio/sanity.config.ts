import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemas";
import deskConfig, { defaultDocumentNode, singletons, previews, actions } from "./utility/desk";

export default defineConfig({
  name: 'default',
  title: 'Olive Foods Catering Co.',

  projectId: '8e816w1c',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => deskConfig(S, context),
      defaultDocumentNode,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // templates: (templates) => templates.filter(({ schemaType }) => !singletons.has(schemaType)),
  },
  document: {
    /** Defines which actions can be taken on a document */
    actions: (input, context) => singletons.has(context.schemaType) ? input.filter(({ action }) => action && actions.has(action)) : input,
    /** Creates a preview URL for specified content */
    productionUrl: async (prev, context) => {
      const { dataset, document } = context;
      const previewURL = new URL(process.env.SANITY_STUDIO_BASE_URL);

      if (previews.has(document._type)) {
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
});
