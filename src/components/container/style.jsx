import styled from "styled-components";
import * as global_style from '../../shared/styles/global'

export const Container = styled.div`
    width: 100%;
    max-width: 1250px;
    padding-top: 120px;
    margin: 0 auto;

    @media ${global_style.device.mobileM} {
        grid-template-columns: repeat(auto-fill, 100%);
        padding-top: 92px;
    }

    @media ${global_style.device.laptop} {
        width: 95%;
    }
`

export const Row = styled.div`
    display: grid;
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
    grid-template-columns: ${props =>
    props.currentUrl === "/kitchen"
      ? "repeat(auto-fill, 100%)"
      : "repeat(auto-fill, 270px)"};
    grid-gap: 20px;
    padding-top: calc(${global_style.padding.default_padding} + 10px);
    justify-content: space-between;

    @media ${global_style.device.laptop} {
        width: 100%;
    }

    @media ${global_style.device.mobileM} {
        height: 55px;
        grid-template-columns: repeat(auto-fill, 100%);
    }
`