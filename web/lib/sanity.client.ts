import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { projectId, dataset, apiVersion, useCdn } from "./sanity.api";

import queries, {
  CateringPage,
  ServicesPage,
  HomePage,
  BoardMenu,
  FamilyMenu,
  HorDMenu,
  LunchMenu
} from "./sanity.queries";


export const sanityClient = createClient({ dataset, projectId, apiVersion, useCdn });

export const builder = imageUrlBuilder(sanityClient);

export const getClient = () => sanityClient;

const client = getClient();


//! ----------> GETTERS <----------
export async function getCateringPage(): Promise<CateringPage[]> {
  return (await client.fetch(queries.cateringPageQuery)) || [];
};

export async function getServicesPage(): Promise<ServicesPage[]> {
  return (await client.fetch(queries.servicePageQuery)) || [];
};

export async function getHomePage(): Promise<HomePage[]> {
  return (await client.fetch(queries.homePageQuery)) || [];
};

export async function getBoardMenu(): Promise<BoardMenu[]> {
  return (await client.fetch(queries. boardMenuQuery)) || [];
};

export async function getFamilyMenu(): Promise<FamilyMenu[]> {
  return (await client.fetch(queries.familyMenuQuery)) || [];
};

export async function getHorDMenu(): Promise<HorDMenu[]> {
  return (await client.fetch(queries.horDMenuQuery)) || [];
};

export async function getLunchMenu(): Promise<LunchMenu[]> {
  return (await client.fetch(queries.lunchMenuQuery)) || [];
};
