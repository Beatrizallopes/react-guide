import styles from './Content.module.css';
import { TopicTitle } from '../components/TopicTitle';

export function Content(){
    return(
        <div className={styles.content}>
            <TopicTitle title="O que é React?" subtitle="Conceito e importância"></TopicTitle>
            <ul>
                <li>O React é uma biblioteca de JavaScript para construção de interfaces altamente interativas.</li>
            </ul>
            <p></p>
        </div>

    )
}