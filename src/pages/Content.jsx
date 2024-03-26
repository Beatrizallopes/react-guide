import styles from './Content.module.css';
import { TopicTitle } from '../components/TopicTitle';
import ExampleExploringFiles from '../assets/example-exploring-files.png'
import ExampleComponents from '../assets/example-components.png';
import ExampleStates from '../assets/example-states.png';
import Explanation_1 from '../assets/explanation-1.svg';
import Explanation_2 from '../assets/explanation-2.svg';
import Explanation_3 from '../assets/explanation-3.svg';
import Explanation_4 from '../assets/explanation-4.svg';
import Explanation_5 from '../assets/explanation-5.svg';
import { Table } from "antd";

const columns = [
    {
        title: 'Biblioteca',
        dataIndex: 'name',
        key: 'name', 
    },
    {
        title: 'Utilidade',
        dataIndex: 'function',
        key: 'function', 
    },
    {
        title: 'Site oficial',
        dataIndex: 'link',
        key: 'link', 
        render: (text) => <a href={text} target="_blank" >{text}</a>,
    }
]

const librariesData = [
    {
        name: 'Date-fns',
        function: 'Manipulação de datas e horas em JavaScript',
        link: 'https://date-fns.org'
    },
    {
        name: 'Recharts',
        function: 'Gráficos e visualizações de dados em React',
        link: 'recharts.org',
    },
    {
        name: 'Material UI',
        function: 'Biblioteca de componentes para React',
        link:'material-ui.com',
    },
    {
        name: 'Ant Design',
        function: 'Sistema de design de UI para React',
        link: 'ant.design',
    },
    {
        name:'React Router',
        function: 'Roteamento de aplicativos em React',
        link: 'reactrouter.com',
    },
    {
        name: 'Axios',
        function: 'Cliente HTTP para fazer requisições',
        link: 'axios-http.com',
    }
]

export function Content(){
    return(
        <div className={styles.content}>
            <TopicTitle title="O que é React?" subtitle="Conceito e importância" id="o-que-e-react"></TopicTitle>
            <div className={styles.row}>
                <ul>
                    <li>O React é uma biblioteca de JavaScript para construção de interfaces altamente interativas.</li>
                    <li>O Com React, os desenvolvedores podem dividir a interface do usuário em componentes reutilizáveis e declarativos, tornando o desenvolvimento mais organizado e eficiente.</li>
                    <li>O que torna o React tão popular é sua abordagem de atualização eficiente da interface do usuário, onde apenas partes específicas da página são atualizadas quando o estado do aplicativo muda, resultando em uma experiência do usuário mais fluida e responsiva.</li>
                </ul>
                <img src={Explanation_1}></img>
            </div>
            <br></br>
            <TopicTitle title="SSA vs SSR" subtitle="Entendendo padrões de renderização" id="ssa-vs-ssr"></TopicTitle>
            <ul>
                <li><b>SSR (Server Side Rendering)</b> é o padrão de renderização mais antigo (utilizado no HTML, Wordpress, etc). Nele, o navegador solicita uma rota e todo o front end e backend estão no servidor. Então o servidor recebe a requisição, monta a página e devolve o HTML/CSS/JS. Ainda é feito dessa forma na grande maioria das aplicações web existentes. Ainda é feito dessa forma na grande maioria das aplicações web existentes.</li>
                <li><b>SPA (Single Page Application)</b> é o padrão mais atual, onde o backend não é mais responsável pela construção visual da tela, ele apenas retorna os dados, em formato JSON (Javascript Object Notation). Nesse modelo temos 2 aplicações: backend e frontend. Com isso é possível ter múltiplos frontend consumindo de um único backend.</li>
                <li>O React é frequentemente usado para criar SPAs, onde toda a aplicação é carregada inicialmente pelo navegador e o conteúdo é dinamicamente atualizado conforme o usuário interage com a aplicação.</li>
            </ul>
            <br></br>
            <TopicTitle title="Iniciando um projeto " subtitle="Usando Vite" id="iniciando-um-projeto"></TopicTitle>
            <div className={styles.row}>
            <ul>
                <li><b>Vite</b> é uma ferramenta de construção de aplicativos web moderna e extremamente rápida, especialmente otimizada para o desenvolvimento de front-end</li>
                <li>Ao contrário de outras ferramentas de bundling como Webpack, o Vite adota uma abordagem de desenvolvimento onde arquivos são compilados e servidos sob demanda durante o desenvolvimento, proporcionando tempos de compilação quase instantâneos. Isso é alcançado aproveitando as características do ES Modules (módulos ECMAScript que substituem os bundlers) do navegador, resultando em uma experiência de desenvolvimento ágil e eficiente.</li>
                <li>Antes de começar a usar o Vite, é preciso ter o <b>Node instalado</b>  Node.js é uma plataforma de desenvolvimento de software que permite aos programadores criar aplicativos de servidor usando JavaScript, uma linguagem comumente associada ao desenvolvimento web no navegador. É recomendado instalar a versão LTS (Long Term Support) do Node.</li>
                <li>Também é importante instalar o Vite na sua máquina.</li>
            </ul>
            <img src={Explanation_2}></img>
            </div>
            <div className={styles.buttons}>
            <a href="https://nodejs.org/en/download/current" target="_blank">
                <button>Site oficial do Node</button>
            </a>
            <a href="https://vitejs.dev/guide/" target="_blank">
                <button>Site oficial do Vite</button>
            </a>
            </div>
            <br></br>
            <TopicTitle title="Explorando os arquivos" subtitle="Explorando a estrutura de pastas e arquivos" id="explorando-os-arquivos"></TopicTitle>
            <ul>
                <li>A estrutura básica do projeto é assim:</li>
                <img src={ExampleExploringFiles}></img>
            </ul>
            <div className={styles.row}>
            <ul>
                <li>O primeiro arquivo a ser carregado é o <b>index.html</b>. Observa-se que dentro do body só tem uma div e um script do tipo “module”. Isso é porque o Vite usa os ECMs scripts nativos do navegador. Além disso, ele indica que o primeiro arquivo que a aplicação vai rodar é o <b>main.jsx</b>.</li>
                <li>No arquivo main.jsx primeiro importa-se o pacote <b>React</b>, que é responsável pelo coração da aplicação, que tem as funcionalidades compartilhadas entre todos os tipos de aplicação com React: mobile, VR, TV, desktop, etc... </li>
                <li>Depois importa o <b>React-dom</b>, que conecta o React puro com a <b>DOM (Document Object Model)</b> que é a representação do nosso HTML usando o Javascript. Ou seja, está integrando o React para funcionar no navegador (ambiente web).</li>
                <li>Ele utiliza o método createRoot do <b>ReactDOM</b>, indicando qual o elemento raiz da nossa página HTML (nesse caso a div com id chamado “root” que está no body do arquivo index.html. Assim, o React vai criar todo o html, javascript e css da aplicação dentro desse elemento.</li>
            </ul>
            <img src={Explanation_3} style={{minHeight:'11rem'}}></img>
            </div>        
            <br></br>
            <TopicTitle title="Componentes e Propriedades" subtitle="Agilidade na criação e praticidade na manutenção" id="componentes-e-propriedades"></TopicTitle>
            <div className={styles.row}>
                <ul>
                    <li>Vamos agora ver o que são <b>componentes</b>. Esse conceito é muito importante e utilizado em todas as bibliotecas frontend (se não igual, muito parecido).</li>
                    <li>Componentes são pedacinhos da aplicação que a gente consegue desacoplar e reutilizar em diversas partes do código. Ele é uma função que retorna HTML.</li>
                    <li>Todos os componentes da aplicação React precisam ter extensão <b>jsx (javascript + xml)</b>. Onde xml é a sintaxe do html (markup language).</li>
                    <img src={ExampleComponents}></img>
                    <li>O segundo conceito mais importante são <b>propriedades</b> que são informações que a gente pode passar para os componentes.</li>
                    <li>Em React, as propriedades (props) são utilizadas para passar dados de um componente pai para um componente filho.</li>
                    <li> Esses dados podem incluir qualquer tipo de informação, desde texto simples até objetos complexos. As props permitem que os componentes sejam configuráveis e reutilizáveis, já que um componente pode receber diferentes conjuntos de props e renderizar de maneira dinâmica com base nesses dados</li>
                </ul>
                <img src={Explanation_4} ></img>
            </div>
          
            <br></br>
            <TopicTitle title="Estados" subtitle="Atualização dinâmica de componentes" id="estados"></TopicTitle>
            <div className={styles.row}>
                <ul>
                    <li>O <b>estados</b> são variáveis que eu quero que o componente monitore. Ou seja, quando eu quero que o React mostre algo quando a minha variável mudar, eu uso estados.</li>
                    <li>Para isso, se utiliza da função <b>useState()</b>, que retorna um array de 2 posições: a variável e uma função utilizada para mudar o valor da variável. Nessa função eu tenho que colocar o novo valor completo e não só o que eu quero alterar.</li>
                    <li>Graças à <b>imutabilidade</b> dos estados, quando queremos alterar uma variável,  não alteramos o valor de uma variável na memória mas sim criamos um valor (novo espaço na memória). Isso deixa a aplicação mais performática.</li>
                    <img src={ExampleStates}></img>
                </ul>
                <img src={Explanation_5} style={{minHeight:'12rem'}}></img>
            </div>
            <br></br>
            <TopicTitle title="Bibliotecas úteis" subtitle="Bibliotecas úteis para o desenvolvimento" id="bibliotecas-uteis"></TopicTitle>
            <Table 
                dataSource={librariesData} 
                columns={columns}
                pagination={false}
                size="small"
               />
               <br></br>
            <ul>
                <li>Essa tabela foi feita utilizando a biblioteca Ant Design :)</li>
            </ul>

        </div>

    )
}