import {useState} from 'react';
import styles from './Menu.module.css';
import MenuLogo from '../assets/menu-logo.svg'
import CheckActive from '../assets/check-active.svg';
import CheckInactive from '../assets/check-inactive.svg';

const defaultMenuItens = [
    {
        id: 'o-que-e-react',
        label: 'O que é react?',
        active: true,
    },
    {
        id: 'ssa-vs-ssr',
        label: 'SSA vs SSR',
        active: false,
    },
    {
        id: 'iniciando-um-projeto',
        label: 'Iniciando um projeto',
        active: false,
    },
    {
        id: 'explorando-os-arquivos',
        label: 'Explorando os arquivos',
        active: false,
    },
    {
        id: 'componentes',
        label: 'Componentes',
        active: false,
    },
    {
        id: 'propriedades',
        label: 'Propriedades',
        active: false,
    },
    {
        id: 'estados',
        label: 'Estados',
        active: false,
    },
    {
        id: 'bibliotecas-legais',
        label: 'Bibliotecas legais',
        active: false,
    }

]

export function Menu(){
    const [menuItens, setMenuItens] = useState(defaultMenuItens);

    function onItemClick(index){
        try{
            let copyMenuItens = [...defaultMenuItens];
            copyMenuItens[0].active = false;
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
                        <div className={styles.item} key={item?.id} onClick={()=> {onItemClick(index)}}>
                            <img src={icon} alt="checkbox"></img>
                            <h1>{item?.label}</h1>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}