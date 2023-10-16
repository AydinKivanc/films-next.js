import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © 2023 - Made by&nbsp;
      <Link href="https://www.kivanc.uk" target="_blank">
        Kivanc
      </Link>
    </footer>
  );
}
