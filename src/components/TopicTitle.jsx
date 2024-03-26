/* eslint-disable react/prop-types */

import styles from './TopicTitle.module.css'

export function TopicTitle({title, subtitle}){
    return (
        <div className={styles.header}> 
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}

