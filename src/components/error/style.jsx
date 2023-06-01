import styled from 'styled-components';
import * as global_style from '../../shared/styles/global';

export const Container = styled.div`
    padding: ${global_style.padding.mobile_vertical} ${global_style.padding.mobile_horizontal};
    width: 100%;
    height: 100vh;
    /* background-color: ${global_style.grey01}; */
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    background-image: url(${props => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`