import {useState} from 'react';
import styles from './Menu.module.css';
import MenuLogo from '../assets/menu-logo.svg'
import CheckActive from '../assets/check-active.svg';
import CheckInactive from '../assets/check-inactive.svg';

const defaultMenuItens = [
    {
        id: '#o-que-e-react',
        label: 'O que é react?',
        active: true,
    },
    {
        id: '#ssa-vs-ssr',
        label: 'SSA vs SSR',
        active: false,
    },
    {
        id: '#iniciando-um-projeto',
        label: 'Iniciando um projeto',
        active: false,
    },
    {
        id: '#explorando-os-arquivos',
        label: 'Explorando os arquivos',
        active: false,
    },
    {
        id: '#componentes-e-propriedades',
        label: 'Componentes e Propriedades',
        active: false,
    },
    {
        id: '#estados',
        label: 'Estados',
        active: false,
    },
    {
        id: '#bibliotecas-uteis',
        label: 'Bibliotecas úteis',
        active: false,
    }

]

export function Menu(){
    const [menuItens, setMenuItens] = useState(defaultMenuItens);

    function onItemClick(index){
        try{
            let copyMenuItens = [...defaultMenuItens];
            let indexActive = menuItens.findIndex((item)=> item.active === true);
            copyMenuItens[indexActive].active = false;
            copyMenuItens[index].active = true;
            setMenuItens(copyMenuItens);
        } catch(err){
            console.log(err);
        }
    }

    return (
        <div className={styles.menu}>
            <img src={MenuLogo}></img>
            <p>Feito com <span className={styles.heart}>&hearts;</span> por Bia Lopes</p>
            <div className={styles.itens}>
                {menuItens.map((item, index)=>{
                    let icon = item.active ? CheckActive : CheckInactive;
                    return (
                        <a className={styles.item} key={item?.id} onClick={()=> {onItemClick(index)}} href={item?.id}>
                            <img src={icon} alt="checkbox"></img>
                            <h1 style={{color: item.active ? 'var(--red' : 'var(--black'}}>{item?.label}</h1>
                        </a>
                    )
                })}

            </div>
        </div>
    )
}