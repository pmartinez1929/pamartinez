import * as theme from "../style/theme.module.css"
import * as React from 'react'
const Subtitle = ({title, color}) => (
    <div className={theme.subtitle} style={{backgroundColor: color}} >
        {title}
    </div>
)

export default Subtitle