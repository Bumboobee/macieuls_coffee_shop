import styled from "styled-components";
import * as global_style from '../styles/global'

export const Button = styled.button`
    display: flex;
    background-color:  ${props => props.background};
    border-radius: ${global_style.smallborderRadius};
    border: 1px solid  ${props => props.bordercolor};
    padding: ${global_style.padding.default_padding} 15px;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    cursor: pointer;    
    transition: .4s ease-in-out;

    &:hover {
        background-color: transparent;
        border: 1px solid ${props => props.background};

        &>span{
            color: ${props => props.color};
        }
    }

    &>span {
        &:nth-child(1) {
            font-size: 1.2rem;
        }

        font-weight: 600;
        font-size: 1.02rem;
        color:  ${props => props.color};
        align-items: center;
        display: flex;
    }

    @media ${global_style.device.mobileM} {
        &>span {
            &:nth-child(1) {
                font-size: 1rem;
            }
            font-size: 0.8rem;
        }
    }

    @media ${global_style.device.mobileL}  {
        &>span {
            &:nth-child(1) {
                font-size: .8rem;
            }
            font-size: 0.6rem;
        }
    }
`