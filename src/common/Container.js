import styled from 'styled-components';
import { Colors } from './Colors';

export const OuterContainer = styled.div`
    padding: 0 15vw 0 15vw;
    background-color: ${Colors.primaryColor};
    height: 100%;
    display: flex;
    justify-content: center;
`

export const InnerContainer = styled.div`
    padding: 1em 2.5em 0 2.5em;
    max-width: 1440px;
    background-color: ${Colors.whiteBackground};
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.21);
    min-height: 1000px;
`