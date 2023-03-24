import React, { useEffect } from 'react'
import styled from 'styled-components'
import voit from '../images/voit.jpg'
import wifi from '../images/wifi.jpg'

export const Body = styled.div`
    margin: 70px;
`

export const Title = styled.div`
    text-align: center;
    margin-bottom: 30px;
    font-size: 400%;
    font-weight: bold;
    padding: 20px;
`

export const Content = styled.div`
    display: flex;
`
export const Content1 = styled.div`
    background-image: url(${voit});
    
    /* filter: brightness(50%); */
    /* opacity: 1; */
    color: white;
    font-size: large;
    width: 700px;
    height: 350px;
    background-size:contain;
    background-repeat: no-repeat;
    margin-right: 20px;

    &:hover{
        background-image: linear-gradient(rgba(0, 0, 0, 0.927),rgba(0, 0, 0, 0.5)) , url(${voit});
    }
`
export const Content2 = styled.div`

    background-image: url(${wifi});
    color: white;
    font-size: large;
    width: 700px;
    height: 350px;
    background-size:contain;
    background-repeat: no-repeat;

    &:hover{
        background-image: linear-gradient(rgba(0, 0, 0, 0.927),rgba(0, 0, 0, 0.5)) , url(${wifi});
    }
`
export const Title_Content1 = styled.div`
    font-weight: bold;
    font-size: 22px;
    padding-bottom:15px;

`

export const Title_Content2 = styled.div`
    font-weight: bold;
    font-size: 22px;
    padding-bottom:40px;

`

export const Stage2 = () => {


    return(
        <Body>
        
    
            <Title>
                STAGE
            </Title>

            <Content>
                <Content1>

                    <Title_Content1>
                        2018-2019 :
                        GESTION DE RESERVATION DES VOITURES AU SEINS DE LA SOCIETE REFRIGEPECHE
                    </Title_Content1>

                    La reservation de voiture permet d'utiliser un véhicule dans un moment précis. 
                    Ainsi, un agenda doit être créée pour qu'ils puissent gérer son emploi du temp. Mais le fait de réservé
                    un véhicule en manuscrite provoque le stockage de plusieurs papiers par rapport à la réservation
                    en ligne qui n'a pas bésoins de papier. Et désormais, la mise en place d'une réservation numérique
                    est recommandée dans la société REFRIGEPECHE.
                </Content1>
                <Content2>
                    <Title_Content2>
                        2017-2018 :
                        INSTALLATION ET SECURISATION DE WIFI
                    </Title_Content2>

                    Dans le monde actuel, où le système d'information joue un rôle capital, la plupart des entreprises et 
                    organismes privés ou gouvernementaux ne peuvent se passer du vaste réseau informatique qui est l'internet. 
                    Nombreux sont les risques de sécurité liés à ce dernier. En effet, face à ces risques, des besoins de sécurités et une bonne qualité
                    de service s'imposent. D'où l'importance de sécurisation du réseau locale du personnel l'AUXIMAD. 

                </Content2>

               

            </Content>
        </Body>
    );
}