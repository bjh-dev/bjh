import S from '@sanity/desk-tool/structure-builder';
import {
  GoSettings,
  GoMortarBoard,
  GoFile,
  GoGift,
  GoFlame,
} from "react-icons/go";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(GoSettings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Posts")
        .schemaType("post")
        .icon(GoMortarBoard)
        .child(S.documentTypeList("post").title("Post")),
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .icon(GoFile)
        .child(S.documentTypeList("page").title("Page")),
      S.listItem()
        .title("Services")
        .schemaType("service")
        .icon(GoGift)
        .child(S.documentTypeList("service").title("Service")),
      S.listItem()
        .title("Portfolios")
        .schemaType("portfolio")
        .icon(GoFlame)
        .child(S.documentTypeList("portfolio").title("Portfolio Work")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "post", "page", "service", "portfolio"].includes(
            listItem.getId()
          )
      ),
    ]);
