import styled from 'styled-components';

export const StageSec = styled.div`
    /* color: #fff; */
    background: #fff;
    font-size: 100%;
    /* margin: 0% 10% 10% 10% ; */
   padding: 0px;
`;

export const Row = styled.div`
    
    text-align: center;
    margin-bottom: 30px;
    font-size: 400%;
    font-weight: bold;
    padding: 20px;
`;
export const Content = styled.div`
   
    width: 100%;
    display: flex;
    @media screen and (max-width: 780px){
        display: inline;
        /* background-color: rgb(0,125,251); */
    }
`;

export const Content2 = styled.a`
    /* border: solid; */
    text-decoration: none;
    color: black;
    padding: 0px;
    margin: 35px;
    width: 100%;
    background-color: rgb(0,125,251);
    @media screen and (max-width: 780px){
        display: inline;
        /* width: 100%; */
        font-size: large;
        
    }
`;

export const Image = styled.div`
    
`;

export const Img = styled.img`
    width: 100%;
    
`;

export const Info = styled.div`
    padding: 30px;
    /* background-color: rgb(0,125,251);
    border: solid;
    border-color: white; */
`;

export const InfoTitle = styled.div`    
    font-weight:bold;
`;
export const Row2 = styled.div`
    display: flex;
    margin: 70px;
    
    @media screen and (max-width: 480px){
        display: inline;
        /* border: none;
        background-color: rgb(0,125,251); */
    }
`;


