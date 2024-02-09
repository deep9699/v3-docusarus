import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";

export default function ChangeLogListPageWrapper(props) {
  const DisplayedData = ({ item }) => {
    console.log("item", item);
    const { formattedDate, title, authors, permalink } =
      item?.content?.metadata || {};
    return (
      <>
        <h2>
          <a href={permalink}>{title}</a>
        </h2>
        <p>{formattedDate}</p>
        <div style={{ display: "flex" }}>
          {authors.map(({ imageURL, url }) => {
            return (
              <div
                class="imageOnlyAuthorCol_uiac"
                style={{ marginRight: "10px" }}
              >
                <div class="avatar margin-bottom--sm">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="avatar__photo-link avatar__photo"
                  >
                    <img class="image_oRbT" src={imageURL} alt="dawei-wang" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  function BlogListPageContent(props) {
    const { metadata, items, sidebar } = props;
    console.log("items", items[0].content.metadata);
    return (
      <BlogLayout sidebar={sidebar}>
        <h1>Changelog </h1>
        {/* <BlogPostItems items={items} /> */}
        {items &&
          items.map((item) => {
            return (
              <div style={{ marginTop: "30px" }}>
                <DisplayedData item={item} />{" "}
              </div>
            );
          })}
        <BlogListPaginator metadata={metadata} />
      </BlogLayout>
    );
  }

  return (
    <>
      <div
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogListPage
        )}
      >
        {/* <BlogListPageMetadata {...props} /> */}
        <BlogListPageContent {...props} />
      </div>
    </>
  );
}
