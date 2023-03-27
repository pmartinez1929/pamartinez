import { Link } from 'gatsby'
import * as React from 'react'
import * as styles from "../style/banner.module.css"
import * as theme from "../style/theme.module.css"
import { StaticImage } from "gatsby-plugin-image"
import Subtitle from './subtitle'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import iconIntuyo from "../images/icon_intuyo.svg"
import { graphql } from 'gatsby'

const Banner = () => {
    const { t } = useTranslation();

    return (
        <>
             <section className={styles.container}>
                <h1 className={styles.h1}>{t('Desarrollador Front-end')}</h1>
                <h2 className={styles.h2}><span>&</span>&nbsp;diseñador UX</h2>
                <div className={styles.sectionText}>
                    <p>Ideando productos digitales centrados en los objetivos del usuario. La importancia de un buen diseño parte de una necesidad, analiza, prototipa, ejecuta. </p>
                    <Link 
                        to='https://api.whatsapp.com/send?phone=593995027973' 
                        target="_blank"
                        className={theme.buttonRed}>
                            Cont&aacute;ctanos
                    </Link>
                </div>
            </section>
            <section className={styles.intuyo}>
                <div className={styles.squareIntuyo}>
                    <div className={styles.headerIntuyo}>
                        <Subtitle title="Entusiasta de" color="var(--color-5)"/>
                        <img src={iconIntuyo} alt="Intuyo" />
                    </div>
                    <p>La idea de Intuyo es analizar, idear y mejorar la experiencia de usuarios en entornos digitales. Permitiendo crear sistemas digitales que cumplan con el objetivo del negocio y que estén orientados a usuarios finales.</p>
                    <StaticImage
                            src="../images/text_intuyo.svg"
                            loading="eager"
                            quality={100}
                            formats={["auto", "svg", "avif"]}
                            alt="Pablo Martinez"
                            className={styles.logo}
                            objectFit="scale-down"
                            placeholder='none'
                            layout="fixed"
                        />
                </div>
            </section>
        </>
       
        
    )
}

export default Banner

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;