import './CSS/Header.css';
import LogoImage from './Assets/Logo.png';
let React = require('react')


function Header(){
    return(
        <header className='header'>
        <img src={LogoImage} alt="Minha Figura"></img>
        <h1 className="titulo">Links Importantes</h1>
        <p className="paragrafo">Clique nos cards para ser <strong className="strong">redirecionado!</strong></p>
        </header>
        
    )

    

}

export default Header;