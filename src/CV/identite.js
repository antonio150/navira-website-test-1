import React from 'react';
import pdp from '../images/pdp.jpg';

import {Sec, Container, Row, Colomne, Colomne0, Colomne1, Colomne2, Colomne3, Img } from './identite.element' ;

const Vitae = () => {
    return(
        <>
            <Sec>
            <link href='https://fonts.googleapis.com/css?family=Cherry Swash' rel='stylesheet'></link>
                <Container>

                    <Row>
                       
                        <Colomne>

                            <Colomne2>
                                <Colomne0>
                                    ANDRIANAVALONA Yves Antonio Rollande
                                </Colomne0>
                                <Colomne1>
                                    Developpeur Web
                                </Colomne1>
                                
                                <Colomne3>
                                        Au cours de 5 années passé, en tant que developpeur web, j'ai 
                                        fait mon stage au seins de grande Entreprise suivie des petites projet au 
                                        seins de l'Ecole Nationale Informatique qui m'ont permis d'améliorer
                                        mes compétences pour repondre aux besoins des clients.
                                </Colomne3>
                                   
                                
                            </Colomne2>
                           
                        </Colomne>

                        <Colomne>
                            <imagePDP>
                                <Img src={pdp} />
                            </imagePDP>
                        </Colomne>

                    </Row>
                   
                </Container>
            </Sec>

        </>
    )
}

export default Vitae;