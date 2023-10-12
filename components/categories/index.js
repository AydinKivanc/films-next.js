"use client";
import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Categories({ categories }) {
  const categoriesPerPage = 5; // Her sayfada görüntülenecek kategori sayısı

  const pages = [];
  for (let i = 0; i < categories.length; i += categoriesPerPage) {
    pages.push(categories.slice(i, i + categoriesPerPage));
  }

  return (
    <Carousel showArrows={false} showStatus={false} showThumbs={false}>
      {pages.map((page, pageIndex) => (
        <div key={pageIndex} className={styles.categoriesContainer}>
          <div key={pageIndex} className={styles.categories}>
            {page.map((category) => (
              <Link
                key={category.id}
                className={styles.category}
                href={`/${category.id}`}
              >
                <div className={styles.name}>{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export { Categories };
