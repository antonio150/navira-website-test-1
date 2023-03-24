import React from 'react'
import styled from 'styled-components';
import { Container } from '../globalStyles';

export const FormatSec = styled.div`
    color: #fff;
    background: ${({ lightBg}) => (lightBg ? '#fff' : '#101522')};
    font-size: 100%;
    padding: 13% 1% 10% 1% ;
    @media screen and (max-width: 991px){
        
    }
`;

export const Row = styled.div`

`;

export const Columne = styled.div`
    display:  flex;
    margin: 2% 2% 0% 0%;
    padding: 2% 2% 0% 0%;

        @media screen and (max-width: 991px){
            display: grid;
            margin: 2% 2% 0% 0%;
            padding: 2% 2% 0% 0%;
        }
`;

export const Titre = styled.div`
    font-size: 2.2rem;
    padding: 0% 0% 4% 0%;
`;

export const Date = styled.div`
    
    font-weight: bold;
`;

export const Value = styled.div`
display:  grid;
text-align: justify;
`;

export const Diplome = styled.div`

`;


const formation = () => {
    return (
        <>
            <FormatSec>
                <Container>
                    <Row>
                        <Titre>
                            FORMATION ET DIPLOME OBTENUE 
                        </Titre>

                        <Columne>
                        
                        <Date>
                            2019 - 2020 :
                        </Date>
                        <Value>
                            Première année de formation de Master professionnelle à l'Ecole Nationale d'Informatique 
                            de l'Université de Fianarantsoa
                        </Value>
                        
                        </Columne>
                        
                        <Columne>
                        <Date>
                            2018 - 2019 :
                        </Date>   
                        <Value>
                            Troisième année de formation de Licence professionnelle à l'Ecole Nationale d'Informatique 
                            de l'Université de Fianarantsoa
                            <Diplome><b>Diplôme obtenue :</b> Licence</Diplome>
                        </Value>                     
                         
                        </Columne>
                        
                        <Columne>
                        <Date>
                            2017 - 2018 :
                        </Date>  
                        <Value>
                            Deuxième année de formation de Licence professionnelle à l'Ecole Nationale d'Informatique 
                            de l'Université de Fianarantsoa
                        </Value>
                         
                        </Columne>
                        
                        <Columne>
                        <Date>
                            2016 - 2017 :
                        </Date> 
                        <Value>
                            Première année de formation de Licence professionnelle à l'Ecole Nationale d'Informatique
                            de l'Université de Fianarantsoa
                        </Value> 
                         
                        </Columne>

                        <Columne>
                        <Date>
                            2015 - 2016 :
                        </Date> 
                        <Value>
                            Terminale C à Lycée Jacque Rabemananjara
                            <Diplome><b>Diplôme obtenue :</b> Baccalauréat Série C</Diplome> 
                        </Value>
                         
                        </Columne>
                       
                        
                    </Row>
                </Container>
            </FormatSec>
        </>
    )
}

export default formation
