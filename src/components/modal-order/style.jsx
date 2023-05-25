import styled from "styled-components";
import * as global_style from '../../shared/styles/global'

export const Header = styled.div`
    border-bottom: 1px solid ${global_style.grey02};
    padding-bottom: ${global_style.padding.default_padding};
    display: flex;
    justify-content: space-between;
    color: ${global_style.white00};
    font-weight: 700;
    font-family: 'Inter';
`

export const CloseBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    outline: none;
    border: none;
    background-color: transparent;
    color: ${global_style.white00};
    cursor: pointer;
`

export const Form = styled.form`
    display: grid;
    grid-gap: 20px;
`

export const HolderInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    padding-top: calc(${global_style.padding.default_padding} + 10px);
    flex-direction: row;

    @media ${global_style.device.tabletL} {
        flex-direction: column;
    }
`

export const HolderLabel = styled.div`
    display: grid;
    grid-gap: 5px;
    color: ${global_style.white01};

    &:nth-child(1) {
        width: 280px;

        &>input {
            max-width: inherit;
        }
    }

    &:nth-child(2) {
        width: 80px;

        &>input {
            max-width: inherit;
        }
    }
    
    &:nth-child(3) {
        width: 370px;

        &>input {
            max-width: inherit;
        }
    }

    &:nth-child(4) {
        width: 230px;

        &>input {
            max-width: inherit;
        }
    }

    &:nth-child(2n-1), &:nth-child(3n) {
        @media ${global_style.device.tabletL}  {   
            width: 100%;
        }
    }

`

export const Label = styled.label`
    font-size: .8rem;
    font-family: 'Inter';
`

export const Input = styled.input`
    color: ${global_style.white00};
    border: 1px solid ${global_style.grey02};
    padding: ${global_style.padding.default_padding};
    background-color: transparent;
    border-radius: ${global_style.smallborderRadius};
    width: 100%;
    max-width: 200px;
    outline: none;

    &::placeholder {
        color: ${global_style.grey05};
    }
`

export const Select = styled.select`
    color: ${global_style.white00};
    border: 1px solid ${global_style.grey02};
    padding: ${global_style.padding.default_padding};
    background-color: transparent;
    border-radius: ${global_style.smallborderRadius};
    width: 100%;
    max-width: 200px;
    outline: none;

    &::placeholder {
        color: ${global_style.grey01};
    }
`
export const Table = styled.table`
    width: 100%;
    border: 1px solid ${global_style.grey02};
    border-radius: ${global_style.smallborderRadius};
    color: ${global_style.white01};
    font-family: 'Inter';
    font-size: .9rem;
    border-spacing: 0px !important;
`

export const Tr = styled.tr`
    &>th {
        border-bottom: 1px solid ${global_style.grey02};
        text-align: center;
        padding: calc(${global_style.padding.default_padding} - 2px);

        &:nth-child(1) {
            text-align: left;
        }
    }

    &>td {
        border-bottom: 1px solid ${global_style.grey02};
        text-align: center;
        padding: calc(${global_style.padding.default_padding} - 2px);

        &:nth-child(1) {
            text-align: left;
        }
    }
`

export const HolderBtns = styled.div`
    width: 100%;
    justify-content: end;
    display: flex;

`

export const BtnLeft = styled.div`
    display: flex;
    gap: 10px;
`