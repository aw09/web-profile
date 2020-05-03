import React from "react";
import cx from "classnames";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    // flex desk fixed
    <nav class={cx(styles.flex, styles.desk, styles.fixed)}>
      <div class={cx(styles.linkWrap)}>
        <div class={cx(styles.pageLink)} dest="home">
          home
        </div>
        <div class={cx(styles.pageLink, styles.active)} dest="about">
          about
        </div>
        <div class={cx(styles.pageLink)} dest="portfolio">
          portfolio
        </div>
        <div class={cx(styles.pageLink)} dest="contact">
          contact
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
