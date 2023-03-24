import styled from 'styled-components';

export const toolContainer = styled.div`
    margin-bottom: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
`

export const toolInfo = styled.div`
    width: 160px;
    margin: 55px;
    height: 80px;
    border: solid 1px black;
`