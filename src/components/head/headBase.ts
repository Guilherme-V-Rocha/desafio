import styled from "styled-components";
import {colors} from '@/styles/colors';

export const HeadContainer = styled.div `
    display: flex;
    width: 100%;
    height: 101px;
    background-color: ${colors.blue[600]};
    align-items: center;
    padding: 1.813rem 5.5rem 1.75rem 4.063rem ;
`

export const HeadGap = styled.div`
    display: flex;
    height: 45px;
    column-gap: 0.5rem;
`