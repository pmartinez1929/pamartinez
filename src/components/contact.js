import * as React from 'react'
import * as styles from "../style/contacts.module.css"
import * as theme from "../style/theme.module.css"
import { Link } from 'gatsby'

import iconWhatsapp from "../images/icon_whatsapp.svg"
import iconCalendar from "../images/icon_calendar.svg"
import iconEmail from "../images/icon_email.svg"
import circles from "../images/circles.svg"

const Contacts = () => (
    <section className={theme.sectionPage}>
       <div className={theme.circleContact1}>
            <img src={circles} alt='' className={theme.circlesDecoration} />
        </div>
        <section className={styles.containerContacts}>
            <h2>¿Tienes una idea?</h2>
            <h3>conecta</h3>
            <p>Conversemos como una idea se puede convertir en una solución digital y como poder llegar a lograrlo.</p>
            <Link className={styles.contactButton}
                to='https://api.whatsapp.com/send?phone=593995027973' 
                target="_blank"
            >
                <div className={styles.iconContact}>
                    <img src={iconWhatsapp} alt='Whatsapp'/>
                </div>
                <div className={theme.buttonGreen}>Contactame al Whatsapp</div>
            </Link>
            <Link 
                target="_blank"
                to="https://calendly.com/pmartinez1929/reunion"
                className={styles.contactButton}>
                <div className={styles.iconContact}>
                    <img src={iconCalendar} alt='Calendar'/>
                </div>
                <div className={theme.buttonGreen}>Agenda una reunión (gratuita)</div>
            </Link>
            <Link
                target="_blank"
                to="mailto:pmartinezesp@outlook.com" 
                className={styles.contactButton}>
                <div className={styles.iconContact}>
                    <img src={iconEmail} alt='Email'/>
                </div>
                <div className={theme.buttonGreen}>Escribe un correo electrónico</div>
            </Link>
        </section>
        <div className={theme.circleContact2}>
            <img src={circles} alt='' className={theme.circlesDecoration} />
        </div>
    </section>
)

export default Contacts
