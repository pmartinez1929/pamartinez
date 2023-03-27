
import * as React from 'react'
import Subtitle from "./subtitle"
import * as styles from "../style/about.module.css"
import * as theme from "../style/theme.module.css"
import { StaticImage, } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import circles from "../images/circles_red.svg"

const About = () => (
    <div className={theme.sectionPage}>
        <section className={styles.about}>
            <div className={theme.circleAbout1}>
                <img src={circles} alt='' className={theme.circlesDecoration} />
            </div>
            <Subtitle title="Quien soy" color="var(--color-2)"/>
            <section className={styles.aboutMe}>
                <div className={styles.profileImage}>
                    <StaticImage
                        src="../images/profile.jpg"
                        loading="eager"
                        quality={100}
                        formats={["auto", "jpg", "avif"]}
                        alt="Pablo Martinez"
                        placeholder='none'
                        layout="fixed"
                        className={styles.image}
                        objectFit="scale-down"
                    />
                </div>
                <div className={styles.aboutText}>
                    <h3 className={theme.h3Title}>
                        Soy Pablo Martínez he trabajado aproximadamente 8 años como desarrollador Front-end para diferentes marcas. Actualmente me encuentro trabajando para Bipgo
                    </h3>
                    <p>
                       Persona curiosa y autodidacta que busca ayudar a comprender cuales son las necesidades de una idea, y como esta puede hacerse realizad a través de un producto digital.
                    </p>
                </div>
                <div className={styles.buttonSocial}>
                    <Link className={theme.buttonGreen} to="https://www.linkedin.com/in/pmartinezesp/" target="_blank">LinkedIn</Link>
                    <span className={theme.separator}>&nbsp;</span>
                    <Link className={theme.buttonGreen} to="https://github.com/pmartinez1929" target="_blank">GitHub</Link>
                    <span className={theme.separator}>&nbsp;</span>
                    <Link className={theme.buttonGreen} to="https://www.instagram.com/intuyo.dev/" target="_blank">Instagram</Link>
                </div>
            </section>
            <section className={styles.interest}>
                <div className={styles.sectionInterest}>
                    <TitleInterest title="Desarrollo" subtitle="digital" direction="right" icon="web"/>
                    <h3 className={theme.h3Title}>He trabajado con varios frameworks Javascript.</h3>
                    <p>Desarrollo web</p>
                    <p>Desarrollo de aplicaciones móviles</p>
                </div>
                <div className={styles.sectionInterest}>
                    <TitleInterest title="Diseño" subtitle="UX" direction="left" icon="ux"/>
                    <h3 className={theme.h3Title}>Utilizo Figma para prototipar y testear.</h3>
                    <p>Prototipado y arquitectura</p>
                    <p>Diseño UI y diseño de interacción</p>
                    <p>Investigación y testeo</p>
                </div>
            </section>
            <div className={styles.center}>
                <Subtitle title="He trabajado" color="var(--color-2)"/>
            </div>
            <section className={styles.works}>
                <div>
                    <StaticImage
                        src="../images/company/bipgo.svg"
                        loading="eager"
                        quality={100}
                        formats={["auto", "svg", "avif"]}
                        alt="Pablo Martinez"
                        placeholder='none'
                        layout="fixed"
                        className={styles.image}
                        objectFit="scale-down"
                    />
                </div>
                <div>
                    <StaticImage
                        src="../images/company/herrera.png"
                        loading="eager"
                        quality={100}
                        formats={["auto", "svg", "avif"]}
                        alt="Pablo Martinez"
                        placeholder='none'
                        layout="fixed"
                        className={styles.image}
                        objectFit="scale-down"
                    />
                </div>
                <div>
                    <StaticImage
                        src="../images/company/corpomedica.png"
                        loading="eager"
                        quality={100}
                        formats={["auto", "svg", "avif"]}
                        alt="Pablo Martinez"
                        placeholder='none'
                        layout="fixed"
                        className={styles.image}
                        objectFit="scale-down"
                    />
                </div>
                <div>
                    <StaticImage
                        src="../images/company/maret.svg"
                        loading="eager"
                        quality={100}
                        formats={["auto", "svg", "avif"]}
                        alt="Pablo Martinez"
                        placeholder='none'
                        layout="fixed"
                        className={styles.image}
                        objectFit="scale-down"
                    />
                </div>
                <div>
                    <StaticImage
                        src="../images/company/verde.svg"
                        loading="eager"
                        quality={100}
                        formats={["auto", "svg", "avif"]}
                        alt="Pablo Martinez"
                        placeholder='none'
                        layout="fixed"
                        className={styles.image}
                        objectFit="scale-down"
                    />
                </div>
            </section>
        </section>
        <div className={theme.circleAbout2}>
                <img src={circles} alt='' className={theme.circlesDecoration} />
        </div>
    </div>

)

export default About

const TitleInterest = ({title, subtitle, direction, icon}) => {

    const textDirection = direction === 'left' ? styles.left : styles.right;
    const iconDirection = direction === 'left' ? styles.iconRight : styles.iconLeft;
    
    return (
        <div className={`${styles.titleInterest} ${textDirection}`}>
          <div className={`${styles.iconContainer} ${iconDirection}`}>
                { icon === 'web' ? 
                    <StaticImage
                        src="../images/icon_web.svg"
                        loading="eager"
                        quality={100}
                        formats={["auto", "jpg", "avif"]}
                        alt="Pablo Martinez"
                        placeholder='none'
                        layout="fixed"
                        className={styles.image}
                        objectFit="scale-down"
                    />
                :<StaticImage
                    src="../images/icon_ux.svg"
                    loading="eager"
                    quality={100}
                    formats={["auto", "jpg", "avif"]}
                    alt="Pablo Martinez"
                    placeholder='none'
                    layout="fixed"
                    className={styles.image}
                    objectFit="scale-down"
                />}
          </div>
          <h5>{title}</h5>
          <h6>{subtitle}</h6>
        </div>
    );

}
