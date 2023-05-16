import type { DefaultDocumentNodeResolver, StructureBuilder, StructureResolverContext } from "sanity/desk";
import type { SanityDocument } from "sanity";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import Iframe from "sanity-plugin-iframe-pane";

import { FiInfo, FiGlobe, FiArchive } from "react-icons/fi";

/** Actions an editor is able to take on a singleton document */
export const actions = new Set([`publish`, `discardChanges`, `restore`]);

/** Schema types that are singletons */
export const singletons = new Set([`about`, `site`]);

/** Document types with previews */
export const previews = new Set([`about`, `project`]);

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

export const deskConfig = (S: StructureBuilder, context: StructureResolverContext ) =>
  S.list().title(`Content`)
  .items([
    S.listItem().title(`About Me`).id(`about`)
    .child(
      S.document().schemaType(`about`).documentId(`about`)
      .views([
        S.view.form(),
        S.view.component(Iframe).options({ url: (doc: SanityDocument) => doc?.productionUrl }).title(`Preview`),
      ])
    ).icon(FiInfo),
    S.divider(),
    S.listItem().title(`Site Details`).id(`site`)
    .child(
      S.document().schemaType(`site`).documentId(`site`)
      .views([S.view.form()])
    ).icon(FiGlobe),
    S.divider(),
    orderableDocumentListDeskItem({ type: `project`, title: `Project`, icon: FiArchive, S, context }),
  ])
