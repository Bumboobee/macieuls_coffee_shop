import styled from "styled-components";
import * as global_style from '../styles/global'

export const CardContainer = styled.div`
     width: 270px;
     border: 1px solid ${global_style.grey02};
     border-radius: ${global_style.smallborderRadius};
     position: relative;

     @media ${global_style.device.mobileM} {
        width: 100%;
    }
`

export const Title = styled.div`
     background-color: ${global_style.grey04};
     border-radius: ${global_style.smallborderRadius} ${global_style.smallborderRadius} 0 0;
     padding: ${global_style.padding.default_padding};
     color: ${global_style.white01};
     font-family: 'Montserrat';
`

export const HolderImg = styled.div`
    background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 70%), url(${props => props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    height: 200px;
    background-position: center;
    border-radius: 0 0 ${global_style.smallborderRadius} ${global_style.smallborderRadius};
    position: relative;
    padding: ${global_style.padding.default_padding};
    font-family: 'Inter';

    @media ${global_style.device.mobileM} {
        height: 270px;
    }

    &:hover::before {
        content: attr(data-description);
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.7);
        box-sizing: border-box;
        width: 100%;
        height: 0;
        font-size: clamp(0.8rem, 2.4vw, 1rem);
        text-align: justify;
        padding: ${global_style.padding.default_padding} calc(${global_style.padding.default_padding} + 15px);
        line-height: 1.7;
        display: flex;
        align-items: flex-start;
        transition: height 8s ease;
        transform: translateY(100%);
        color: ${global_style.white01};
    }

    &:hover::before {
    height: 100%;
    transform: translateY(0%);
    }
`;

export const CounterWrapper = styled.div`
    position: relative;
    height: 100%;

`

export const Counter = styled.div`
    background-color: ${global_style.grey04};
    border: 1px solid ${global_style.grey02};
    border-radius: ${global_style.smallborderRadius};
    position: absolute;
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    color: ${global_style.white01};
    bottom: 1px;
    align-self: center;
    padding: calc(${global_style.padding.default_padding} - 3px);
    align-items: center;
`

export const Qtde = styled.div`
    position: absolute;
    background-color: ${global_style.grey04};
    color: ${global_style.white00};
    border: 1px solid ${global_style.grey02};
    border-radius: ${global_style.smallborderRadius};
    right: 10px;
    padding: 0 ${global_style.padding.default_padding};
`

export const ManagerPrice = styled.div`
    display: flex;
    position: absolute;
    bottom: 0px;
    background-color: ${global_style.green00};
    left: 0;
    padding: calc(${global_style.padding.default_padding} - 5px) ${global_style.padding.default_padding};
    border-radius: 0px ${global_style.smallborderRadius} 0px 0px;
    border-top: 0.5px solid white;
    border-right: 0.5px solid white;
    color: ${global_style.white00};
`

export const ManagerActions = styled.div`
    background-color: ${global_style.grey04};
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: ${global_style.padding.default_padding};
    gap: 20px;
    border-left: 1px solid ${global_style.grey02};
    border-top: 1px solid ${global_style.grey02};
    border-radius: ${global_style.smallborderRadius} 0px 0px 0px;

    &:nth-child(2) {
        cursor: pointer;
    }

    &:nth-child(2) > svg:first-child {
        color: ${global_style.green00};
        transition: .2s ease;
    
        &:hover {
            color: ${global_style.yellow00};
        }
    }

    &:nth-child(2) > svg:last-child {
        color: ${global_style.red00};
        transition: .2s ease;
    
        &:hover {
            color: ${global_style.red01};
        }
    }
`

export const Buttom = styled.button`
    outline: none;
    background-color: ${global_style.grey03};
    color: ${global_style.white00};
    border: 1px solid ${global_style.grey02};
    border-radius: ${global_style.smallborderRadius};
    padding: calc(${global_style.padding.default_padding} - 5px) ${global_style.padding.default_padding};
    cursor: pointer;
    transition: .2s ease;

    &:hover {
        background-color: ${global_style.grey04}
    }
`