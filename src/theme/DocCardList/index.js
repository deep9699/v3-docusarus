/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from "react";
import clsx from "clsx";
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from "@docusaurus/theme-common";
import DocCard from "@theme/DocCard";
import { useHistory, useLocation } from "@docusaurus/router";

function DocCardListForCurrentSidebarCategory({ className }) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList(props) {
  const { items, className } = props;
  const location = useLocation();
  const { pathname } = location || {};
  console.log("location", location);
  useEffect(() => {
    console.log("pathname", pathname);
    if (pathname === "/docs/") {
      document.getElementsByTagName("aside")[0].style.display = "none";
    }
    return () => {
      document.getElementsByTagName("aside")[0].style.display = "block";
    };
  }, [pathname]);

  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section className={clsx("row", className)}>
      {filteredItems.map((item, index) => (
        <article key={index} className="col col--6 margin-bottom--lg">
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}
