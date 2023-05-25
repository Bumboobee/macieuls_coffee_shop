import styled from "styled-components";
import * as global_style from "../../shared/styles/global";

export const Container = styled.div`
  display: flex;
  background-color: ${global_style.grey00};
  border: 1px solid ${global_style.grey02};
  border-radius: ${global_style.smallborderRadius};
  color: ${global_style.white00};
  flex-direction: column;
  padding: calc(${global_style.padding.default_padding} + 10px);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: collumn;
  justify-content: space-between;
  padding-bottom: ${global_style.padding.default_padding};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FirstCollum = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const SecondColumn = styled.div`
  width: 40%;
  display: flex;
  justify-content: right;
  flex-direction: column;
  gap: 10px;
  float: right;
  text-align: right;

  @media (max-width: 768px) {
    width: 90%;
    text-align: left;
  }
`;

export const TitleHeader = styled.span`
  text-transform: uppercase;
`;

export const TitleHeaderGhost = styled.span`
  text-transform: uppercase;
  /* font-size: 1rem; */
  color: ${global_style.grey05};
`;

export const HolderHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  &:nth-child(1) {
    text-align: left;
  }
`;

export const AlertItem = styled.span`
  color: ${global_style.red00};
  font-weight: 700;

  &>svg {
    
  transition: .2s ease;
  
    &:hover {
      color: ${global_style.red01};
    }
  }
`;

export const Badge = styled.button`
  background-color: transparent;
  padding: calc(${global_style.padding.default_padding} - 5px)
    ${global_style.padding.default_padding};
  border-radius: ${global_style.smallborderRadius};
  cursor: pointer;
  white-space: nowrap;
  transition: .2s ease;

  ${props => `
    border: 1px solid ${props.color};
    color: ${props.color};
  `}

  &:hover {
    ${props => `
      background-color: ${props.color};
  `}
    color: ${global_style.black01};
  }
`;

export const DefineStatus = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid ${global_style.grey02};
  border-radius: ${global_style.smallborderRadius};
  color: ${global_style.white01};
  font-family: "Inter";
  font-size: 0.9rem;
  border-spacing: 0px !important;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const Tr = styled.tr`
  & > th {
    border-bottom: 1px solid ${global_style.grey02};
    text-align: center;
    padding: calc(${global_style.padding.default_padding} - 2px);

    &:nth-child(1) {
      text-align: left;
    }
  }

  & > td {
    border-bottom: 1px solid ${global_style.grey02};
    text-align: center;
    padding: calc(${global_style.padding.default_padding} + 5px);

    &:nth-child(1) {
      text-align: left;
    }
  }
`;
