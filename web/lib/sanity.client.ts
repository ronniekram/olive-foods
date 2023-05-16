import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || `production`;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const apiVersion = `2023-03-25`;
const useCdn = false;

export const sanityClient = createClient({ dataset, projectId, apiVersion, useCdn });

export const builder = imageUrlBuilder(sanityClient);

export const getClient = () => sanityClient;
