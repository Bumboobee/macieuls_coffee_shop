import styled from "styled-components";
import * as global_style from "../../shared/styles/global";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  background-color: ${global_style.grey04};
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: ${global_style.padding.mobile_horizontal};
  gap: 40px;
  border-radius: ${global_style.smallborderRadius};
  border: 1px solid ${global_style.grey01};;
  color: ${global_style.white01};
`;

export const Title = styled.span`
  font-weight: 800;
  color: ${global_style.green00};
`;

export const HolderLabel = styled.div`
  display: grid;
  grid-gap: 20px;
  color: ${global_style.white01};
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-family: "Inter";
  line-height: 1.5;
`;

export const Input = styled.input`
  color: ${global_style.white00};
  border: 1px solid ${global_style.grey02};
  padding: ${global_style.padding.default_padding};
  background-color: transparent;
  border-radius: ${global_style.smallborderRadius};
  width: 100%;
  max-width: 100%;
  outline: none;

  &::placeholder {
    color: ${global_style.grey05};
  }

  &:focus {
    border: 1px solid ${global_style.green00};
  }
`;

export const Message = styled.span`
  color: ${global_style.yellow00};
  font-size: .8rem;
  font-weight: 700;
`;
