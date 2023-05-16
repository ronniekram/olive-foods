import { definePreview } from "next-sanity/preview";
import { dataset, projectId } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview -- Please log in to your Sanity studio.`);
}

export const usePreview = definePreview({ projectId, dataset, onPublicAccessOnly });

// https://github.com/sanity-io/next-sanity#examples
