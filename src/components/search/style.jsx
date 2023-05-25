import styled from "styled-components";
import * as global_style from '../../shared/styles/global'

export const Container = styled.div`
    /* background-color: blue; */
    float: right;
    display: flex;
    width: 270px;
`

export const Input = styled.input`
    color: ${global_style.white00};
    border: 1px solid ${global_style.grey02};
    padding: ${global_style.padding.default_padding};
    background-color: transparent;
    border-radius: ${global_style.smallborderRadius};
    width: 100%;

    &::placeholder {
        color: ${global_style.grey05};
    }
`