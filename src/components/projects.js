import * as React from 'react'
import * as styles from "../style/projects.module.css"
import { StaticImage, } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import project1 from "../images/projects/project1.jpg"
import project2 from "../images/projects/project2.jpg"
import project3 from "../images/projects/project3.jpg"
import project4 from "../images/projects/project4.jpg"
import project5 from "../images/projects/project5.jpg"
import project6 from "../images/projects/project7.jpg"
import link from "../images/icon_link.svg"

const Projects = () => (
    <section className={styles.containerProjects}>
        <div className={styles.projectContainer}>
            <img
                src={project1}
                loading="lazy"
                alt=""
                className={styles.imgProjects}
            />
            <div className={`${styles.iconType} ${styles.rightBottom}`}>
                <StaticImage
                    src="../images/projects/icon_flutter.svg"
                    loading="eager"
                    quality={100}
                    formats={["auto", "svg", "avif"]}
                    alt=""
                    placeholder='none'
                    layout="fixed"
                    className={styles.iconProjects}
                    objectFit="scale-down"
                />
            </div>
            <div className={styles.backgroundLink}>
                <div className={styles.link}>
                    Pronto...
                </div>
            </div>
        </div>
        <div className={styles.projectContainer}>
            <img
                src={project2}
                loading="lazy"
                alt=""
                className={styles.imgProjects}
            />
            <div className={`${styles.iconType} ${styles.leftBottom}`}>
                <StaticImage
                    src="../images/projects/icon_angular.svg"
                    loading="eager"
                    quality={100}
                    formats={["auto", "svg", "avif"]}
                    alt=""
                    placeholder='none'
                    objectFit="scale-down"
                    className={styles.iconProjects}
                />
            </div>
            <div className={styles.backgroundLink}>
                <Link className={styles.link} to="https://www.bipgo.com/" target="_blank">
                    <img src={link} alt="" /> Visitar
                </Link>
            </div>
        </div>
        <div className={styles.projectContainer}>
            <img
                src={project3}
                loading="lazy"
                alt=""
                className={styles.imgProjects}
            />
            <div className={`${styles.iconType} ${styles.rightTop}`}>
                <StaticImage
                    src="../images/projects/icon_wordpress.svg"
                    loading="eager"
                    quality={100}
                    formats={["auto", "svg", "avif"]}
                    alt=""
                    placeholder='none'
                    layout="fixed"
                    className={styles.iconProjects}
                    objectFit="scale-down"
                />
            </div>
            <div className={styles.backgroundLink}>
                <Link className={styles.link} to="https://corpo-medica.com/" target="_blank">
                    <img src={link} alt="" /> Visitar
                </Link>
            </div>
        </div>
        <div className={styles.projectContainer}>
            <img
                src={project4}
                loading="lazy"
                alt=""
                className={styles.imgProjects}
            />
            <div className={`${styles.iconType} ${styles.leftTop}`}>
                <StaticImage
                    src="../images/projects/icon_figma.svg"
                    loading="eager"
                    quality={100}
                    formats={["auto", "svg", "avif"]}
                    alt=""
                    placeholder='none'
                    layout="fixed"
                    className={styles.iconProjects}
                    objectFit="scale-down"
                />
            </div>
            <div className={styles.backgroundLink}>
                <Link className={styles.link} to="https://www.figma.com/file/rsOXMJBZT28xMy6sdQzJcG/PetHomie?node-id=11%3A298&t=gMvQ7C8RGV3iCeEp-1" target="_blank">
                    <img src={link} alt="" /> Explorar
                </Link>
            </div>
        </div>
        <div className={styles.projectContainer}>
            <img
                src={project5}
                loading="lazy"
                alt=""
                className={styles.imgProjects}
            />
            <div className={`${styles.iconType} ${styles.rightBottom}`}>
                <StaticImage
                    src="../images/projects/icon_laravel.svg"
                    loading="eager"
                    quality={100}
                    formats={["auto", "svg", "avif"]}
                    alt=""
                    placeholder='none'
                    layout="fixed"
                    className={styles.iconProjects}
                    objectFit="scale-down"
                />
            </div>
            <div className={styles.backgroundLink}>
                <Link className={styles.link} to="https://fullplastic.com.ec/" target="_blank">
                    <img src={link} alt="" /> Visitar
                </Link>
            </div>
        </div>
        <div className={styles.projectContainer}>
            <img
                src={project6}
                loading="lazy"
                alt=""
                className={styles.imgProjects}
            />
            <div className={`${styles.iconType} ${styles.leftBottom}`}>
                <StaticImage
                    src="../images/projects/icon_codeigniter.svg"
                    loading="eager"
                    quality={100}
                    formats={["auto", "svg", "avif"]}
                    alt=""
                    placeholder='none'
                    layout="fixed"
                    className={styles.iconProjects}
                    objectFit="scale-down"
                />
            </div>
            <div className={styles.backgroundLink}>
                <Link className={styles.link} to="https://valiente.pamartinez.com/" target="_blank">
                    <img src={link} alt="" /> Visitar
                </Link>
            </div>
        </div>
    </section>
)

export default Projects