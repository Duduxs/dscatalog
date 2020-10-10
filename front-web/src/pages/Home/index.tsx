import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as MainImage} from '../../core/assets/imgs/main-image.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <div className="row home-content card-base border-radius-20">
            <div className="col-6">
                <h1 className="home-title">Conheça o melhor <br />catálogo de produtos</h1>
                <p className="home-p">
                    Ajudaremos você a encontrar os melhores <br /> produtos disponíveis do mercado.
                </p>
                <NavLink to="/catalog">
                <ButtonIcon text="INICIE AGORA A SUA BUSCA" />
                </NavLink>
            </div>
            <div className="col-6">
                <MainImage className="home-image" />
            </div>
        </div>
    </div>
);

export default Home;