import * as React from "react"
import * as styles from "../style/header.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className={styles.header}>
    <div>&nbsp;</div>
    <StaticImage
        src="../images/icon_pmartinez.png"
        loading="lazy"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Pablo Martinez"
        className={styles.logo}
        placeholder='none'
        layout="fixed"
        objectFit="scale-down"
      />
       <div>&nbsp;</div>
  </header>
)

export default Header

/*
  <div className={styles.language}>EN</div>
*/