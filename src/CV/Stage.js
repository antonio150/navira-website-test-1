import React,{useEffect} from 'react'
import styled from 'styled-components'
import voiture from '../images/stock.jpg'
import Minili from '../images/Minili.jpg'
import meteo from '../images/meteo1.jpg'
import meteo2 from '../images/vente.jpg'

// import counterpart from 'counterpart';
// import Translate from 'react-translate-component';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
    StageSec,
    Row,
    Row2

} from './Stage.element';

export const Date = styled.div`

`

export const ThemeProjet = styled.div`
    
`
export const Theme1 = styled.div`
    background-image: url(${Minili});
    width: 700px;
    height: 400px;
    background-size:contain;
    background-repeat: no-repeat;
    margin-right: 50px;
    
    &:hover{
        
    }
`
export const Theme2 = styled.div`
    background-image: url(${voiture});
    width: 700px;
    height: 400px;
    background-size:contain;
    background-repeat: no-repeat;
`
export const Theme3 = styled.div`
    background-image: url(${meteo});
    width: 700px;
    height: 400px;
    background-size:contain;
    background-repeat: no-repeat;
    margin-right: 50px;
`
export const Theme4 = styled.div`
    background-image: url(${meteo2});
    width: 700px;
    height: 400px;
    background-size:contain;
    background-repeat: no-repeat;
`



const Stage = () => {

    
    useEffect(() => {
        Aos.init({ once : true });
    }, [])
   
    return (
        <>
        <StageSec>
            <Row>
                Petit Projet
            </Row>
            
            <Row2>
                <Theme1 data-aos="zoom-in" data-aos-delay="100" data-aos-offset="200">
                   
                    {/* <Date>
                        2020 - 2021
                    </Date> */}
                    <ThemeProjet>
                        Minimum Ligne: Recherche le plus petit valeur de chaque ligne de tableau
                    </ThemeProjet>
                    
                </Theme1>

                <Theme2 data-aos="zoom-in" data-aos-delay="100" data-aos-offset="200">
                    {/* <Date>
                        2019 - 2020
                    </Date> */}
                    <ThemeProjet>
                        Gestion de Stock: Ajout, Modification, Suppression, Affichage des stock, etude et suivie de mouvement de stock
                    </ThemeProjet>
                </Theme2>
            </Row2>
            <Row2>
                <Theme3 data-aos="zoom-in" data-aos-delay="100" data-aos-offset="200">
                    {/* <Date>
                        2018 - 2019
                    </Date> */}
                    <ThemeProjet>
                        Application Météo: Affichage de temperature en degré Celsius et en Fahrenheit d'un région
                    </ThemeProjet>
                </Theme3>

                <Theme4 data-aos="zoom-in" data-aos-delay="100" data-aos-offset="200">
                    {/* <Date>
                        2017 - 2018
                    </Date> */}
                    <ThemeProjet>
                        Géstion de vente: Ajout, Suppréssion, Modification et affichage de liste de vente
                    </ThemeProjet>
                </Theme4>

                
            </Row2>
            
        </StageSec>
            
        </>
    )
}

export default Stage
