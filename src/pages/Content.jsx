import styles from './Content.module.css';
import { TopicTitle } from '../components/TopicTitle';

export function Content(){
    return(
        <div className={styles.content}>
            <TopicTitle title="O que é React?" subtitle="Conceito e importância"></TopicTitle>
            <ul>
                <li>O React é uma biblioteca de JavaScript para construção de interfaces altamente interativas.</li>
                <li>O Com React, os desenvolvedores podem dividir a interface do usuário em componentes reutilizáveis e declarativos, tornando o desenvolvimento mais organizado e eficiente.</li>
                <li>O que torna o React tão popular é sua abordagem de atualização eficiente da interface do usuário, onde apenas partes específicas da página são atualizadas quando o estado do aplicativo muda, resultando em uma experiência do usuário mais fluida e responsiva.</li>
            </ul>
            <br></br>
            <TopicTitle title="SSA vs SSR" subtitle="Entendendo padrões de renderização"></TopicTitle>
            <ul>
                <li><b>SSR (Server Side Rendering)</b> é o padrão de renderização mais antigo (utilizado no HTML, Wordpress, etc). Nele, o navegador solicita uma rota e todo o front end e backend estão no servidor. Então o servidor recebe a requisição, monta a página e devolve o HTML/CSS/JS. Ainda é feito dessa forma na grande maioria das aplicações web existentes. Ainda é feito dessa forma na grande maioria das aplicações web existentes.</li>
                <li><b>SPA (Single Page Application)</b> é o padrão mais atual, onde o backend não é mais responsável pela construção visual da tela, ele apenas retorna os dados, em formato JSON (Javascript Object Notation). Nesse modelo temos 2 aplicações: backend e frontend. Com isso é possível ter múltiplos frontend consumindo de um único backend.</li>
                <li>O React é frequentemente usado para criar SPAs, onde toda a aplicação é carregada inicialmente pelo navegador e o conteúdo é dinamicamente atualizado conforme o usuário interage com a aplicação.</li>
            </ul>
            <br></br>
            <TopicTitle title="Iniciando uma aplicação " subtitle="Usando Vite"></TopicTitle>
            <ul>
                <li><b>Vite</b> é uma ferramenta de construção de aplicativos web moderna e extremamente rápida, especialmente otimizada para o desenvolvimento de front-end</li>
                <li>Ao contrário de outras ferramentas de bundling como Webpack, o Vite adota uma abordagem de desenvolvimento onde arquivos são compilados e servidos sob demanda durante o desenvolvimento, proporcionando tempos de compilação quase instantâneos. Isso é alcançado aproveitando as características do ES Modules (módulos ECMAScript que substituem os bundlers) do navegador, resultando em uma experiência de desenvolvimento ágil e eficiente.</li>
                <li>Antes de começar a usar o Vite, é preciso ter o <b>Node instalado</b>  Node.js é uma plataforma de desenvolvimento de software que permite aos programadores criar aplicativos de servidor usando JavaScript, uma linguagem comumente associada ao desenvolvimento web no navegador. É recomendado instalar a versão LTS (Long Term Support) do Node.</li>
            </ul>

        </div>

    )
}