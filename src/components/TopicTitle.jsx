/* eslint-disable react/prop-types */

import styles from './TopicTitle.module.css'

export function TopicTitle({title, subtitle, id}){
    return (
        <section className={styles.header} id={id}> 
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </section>
    )
}

