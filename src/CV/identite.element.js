import styled from 'styled-components';


export const Sec = styled.div`
    color: black;
    padding: 60px 0;
    font-size: 1.2rem;
    
    
    /* background: ${({ lightBg}) => (lightBg ? '#fff' : '#101522')}; */
`;

export const Container = styled.div`
    z-index: 1;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 991px) {
        padding-right: 0px;
        padding-left: 0px;
        max-width: 300px;
    }
`;

export const Row = styled.div`
    display: flex;
    margin: 0 0px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const Colomne = styled.div`
    margin-bottom: 15px;
    padding-bottom: 15px;
    padding-left: 1px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    text-align: center;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const Colomne2 = styled.div`
    margin-top: 15px;
    padding-bottom: 60px;
    padding-left: 0px;
    flex: 1;
    max-width: 540px;
    flex-basis: 50%;
 
    
    @media screen and (max-width: 168px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const Colomne3 = styled.div`
    padding: 2%;
    font-size: 120%;
    color: grey;
    font-family: 'Cherry Swash';
`;

export const Colomne0 = styled.div`
    padding: 2%;
    font-size: 120%;
    color: grey;
`;

export const Colomne1 = styled.div`
    font-size: 400%;
    font-weight: bold;
    padding: 20px;
`;

export const imagePDP = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
    
`;
