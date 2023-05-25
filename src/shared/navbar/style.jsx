import styled from "styled-components";
import * as global_style from '../styles/global'

export const Container = styled.nav`
    background-color: ${global_style.grey04};
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    position: fixed;
    padding: calc(${global_style.padding.mobile_horizontal} - 7px) 0;
    z-index: 10;

    @media ${global_style.device.tablet}  {
        height: 55px;
    }
` 

export const Row = styled.div`
    width: 100%;
    max-width: 1250px;
    justify-content: space-between;
    display: flex; 

    @media ${global_style.device.laptop} {
        width: 95%;
        flex-direction: row;
        align-items: center;
    }

    @media ${global_style.device.tablet} {
        display: block;
        float: right;
    }
`


export const BtnsLeft = styled.div`
    display: flex;
    gap: 10px;

    @media ${global_style.device.tablet} {
        flex-direction: column;
        position: absolute;
        top: 0;
    }
`

export const BtnsRight = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;

    @media ${global_style.device.tablet} {
        float: right;
    }
`

export const BtnTab = styled.button`
    background-color: ${global_style.grey03};
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    border-radius: ${global_style.smallborderRadius};
    border: 1px solid ${global_style.grey02};
    color: ${global_style.white01};
    padding: ${global_style.padding.mobile_horizontal};   
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: .4s ease;

    &:hover {
        background-color: transparent;
    }

    &>span {
        font-weight: 700;

        &:nth-child(1) {
            font-size: 1.8rem;
        }
    }

    @media ${global_style.device.mobileM} {
        width: 72px;
        padding: calc(${global_style.padding.default_padding} - 5px);
    }
`