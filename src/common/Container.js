import styled from 'styled-components';
import { Colors } from './Colors';

export const OuterContainer = styled.div`
    padding: 0 200px 0 200px;
    background-color: ${Colors.primaryColor};
    height: 100%;
`

export const InnerContainer = styled.div`
    padding: 1em 2.5em 0 2.5em;
    background-color: ${Colors.whiteBackground};
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.21);
    height: 1000px;
`