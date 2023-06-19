import type {
  DefaultDocumentNodeResolver,
  StructureBuilder,
  StructureResolverContext
} from "sanity/desk";
import type { SanityDocument } from "@sanity/client";
import Iframe from "sanity-plugin-iframe-pane";

import {
  FaRegNewspaper,
  FaHome,
  FaHandHoldingHeart
} from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import {
  BsFillCalendar2CheckFill,
  BsFillPersonLinesFill,
  BsUiRadiosGrid,
  BsFillBagHeartFill
} from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import { GiAbstract042 } from "react-icons/gi";

/** Actions an editor is able to take on a singleton document */
export const actions = new Set([`publish`, `discardChanges`, `restore`]);

/** A set of all singleton objects & documents in the schema */
export const singletons = new Set([
  `catering`,
  `home`,
  `services`,
  `boards`,
  `horD`,
  `lunch`,
  `family`,
  `weekly`,
]);

export const previews = new Set([
  `catering`,
  `boards`,
  `horD`,
  `lunch`,
  `family`,
  `weekly`,
]);

/** Document types that should have previews */

const previewURL = (doc: SanityDocument) => {
  const { _type, slug } = doc;
  if (slug) return `${process.env.SANITY_STUDIO_PREVIEW_URL}?type=${_type}&slug=${slug.current}`;
  if (!slug && _type !== `home`) return `${process.env.SANITY_STUDIO_PREVIEW_URL}?type=${_type}`;
  return process.env.SANITY_STUDIO_PREVIEW_URL;
};

/** Function to create singleton document in desk tool */
const singletonListItem = (S: StructureBuilder, typeName: string, hasPreview: boolean, title: string) => {
  if (hasPreview) return S.listItem().title(title ?? typeName).id(typeName).child(S.document().schemaType(typeName).documentId(typeName).views([
    S.view.form(),
    S.view.component(Iframe).options({ url: (doc: SanityDocument) => previewURL(doc) }).title(`Preview`),
  ]));
  return S.listItem().title(title ?? typeName).id(typeName).child(S.document().schemaType(typeName).documentId(typeName));
};

const singletonItems = (S: StructureBuilder) => {
  return [
    S.listItem()
    .title(`Pages`)
    .child(
      S.list().id(`main`).items([
        singletonListItem(S, `home`, false, `Home`).icon(FaHome),
        singletonListItem(S, `catering`, true, `Catering`).icon(BsFillBagHeartFill),
        singletonListItem(S, `services`, false, `Meal Services`).icon(FaHandHoldingHeart),
      ]),
    ).icon(FaRegNewspaper),
    S.divider(),
    S.listItem()
    .title(`Menus`)
    .child(
      S.list().id(`menu`).items([
        singletonListItem(S, `boards`, true, `Charcuterie Boards`).icon(GiAbstract042),
        singletonListItem(S, `horD`, true, `Hors d'oeuvres`).icon(BsUiRadiosGrid),
        singletonListItem(S, `lunch`, true, `Lunch`).icon(MdFastfood),
        singletonListItem(S, `family`, true, `Family Style`).icon(BsFillPersonLinesFill),
        singletonListItem(S, `weekly`, true, `Weekly`).icon(BsFillCalendar2CheckFill),
      ]),
    ).icon(BiFoodMenu),
  ];
};

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S: StructureBuilder, { schemaType }) => {
  switch (schemaType) {
    case `project`:
      return S.document().views([
        S.view.form(),
        S.view.component(Iframe).options({ url: (doc: SanityDocument) => doc?.productionUrl }).title(`Preview`),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

const deskConfig = (S: StructureBuilder, context: StructureResolverContext) => S.list().title(`Content`).items([
  ...singletonItems(S),
  S.divider(),
  ...S.documentTypeListItems().filter((listItem) => listItem.getId() ! === `testimonial`,)
]);

export default deskConfig;
