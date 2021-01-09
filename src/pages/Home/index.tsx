import React from 'react';
import { Link } from 'react-router-dom';
import ImgPerfil from '../../assets/img/Perfil.png';
import ImgSobre from '../../assets/img/Sobre.png';
import ImgExperiencias from '../../assets/img/Experiencias.png';
import ImgLinkedIn from '../../assets/img/LinkedIn.png';
import ImgLattes from '../../assets/img/Lattes.png';
import ImgBlackFex from '../../assets/img/BlackFex.png';
import './index.css';

export default function Home() {
  return (
    <div className="page-home">
        <img src={ImgBlackFex} alt="Feito por: BlackFex" className="blackfex-logo" />
        <div className="perfil">
            <img src={ImgPerfil} alt="Caique Correa" />
            <p className="nome">CAIQUE CORREA</p>
            <p className="cargo">Graduando em Psicologia</p>
        </div>
        <div className="botoes-container">
            <div className="linha">
                <Link to="/sobre" className="btn"><img src={ImgSobre} alt="Sobre" />Sobre</Link>
                <Link to="/experiencias" className="btn"><img src={ImgExperiencias} alt="Sobre" />Experiências acadêmicas</Link>
            </div>
            <div className="linha">
                <a href="https://www.linkedin.com/in/caique-correa/" target="_blank" rel="noreferrer" className="btn"><img src={ImgLinkedIn} alt="Sobre" />LinkedIn</a>
                <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2154675Y6" target="_blank" rel="noreferrer" className="btn"><img src={ImgLattes} alt="Sobre" />Currículo Lattes</a>
            </div>
        </div>
    </div>
  );
}