import { useContext } from "react";
import * as NavItem from "./style";
import Button from "../button";
import * as global_style from "../styles/global";
import { GiCakeSlice } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import { FiUserMinus } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { CgAdd } from "react-icons/cg";
import { BiEraser } from "react-icons/bi";
import ProductContext from "../../context";
import { Link } from "react-router-dom";

function NavBar() {
  const {
    currentUrl,
    setCurrentUrl,
    handleCake,
    handleCoffee,
    handleReset,
    openModalOrder,
    openGenericModal,
  } = useContext(ProductContext);

  return (
    <NavItem.Container>
      <NavItem.Row>
        <NavItem.BtnsLeft>
          <NavItem.BtnTab onClick={() => handleCake("Bolos")}>
            <span>
              <GiCakeSlice />
            </span>
            <span>Bolos</span>
          </NavItem.BtnTab>
          <NavItem.BtnTab onClick={() => handleCoffee("Cafés")}>
            <span>
              <CiCoffeeCup />
            </span>
            <span>Cafés</span>
          </NavItem.BtnTab>
        </NavItem.BtnsLeft>

        <NavItem.BtnsRight>
          {currentUrl === "/" ? (
            <>
              <Button
                icon={<BiEraser />}
                text={"Limpar Pedido"}
                bordercolor={global_style.grey02}
                background={global_style.grey03}
                color={global_style.white01}
                onClick={() => handleReset("navBar")}
              ></Button>
              <Button
                icon={<MdAttachMoney />}
                text={"Finalizar Pedido"}
                bordercolor={global_style.white01}
                background={global_style.green00}
                color={global_style.white01}
                onClick={() => {
                  openModalOrder();
                }}
              ></Button>
            </>
          ) : (
            <>
              <Button
                icon={<CgAdd />}
                text={"Adicionar Produto"}
                bordercolor={global_style.white01}
                background={global_style.green00}
                color={global_style.white01}
                onClick={() => {
                  openGenericModal("add");
                }}
              ></Button>
              <Link
                style={{
                  textDecoration: "none",
                  color: `${global_style.grey03}`,
                }}
                to="/"
              >
                <Button
                  icon={<FiUserMinus />}
                  text={"Visão do Garçom"}
                  bordercolor={global_style.yellow00}
                  background={global_style.yellow00}
                  color={global_style.grey03}
                  onClick={() => {
                    setCurrentUrl("/");
                  }}
                ></Button>
              </Link>
            </>
          )}
        </NavItem.BtnsRight>
      </NavItem.Row>
    </NavItem.Container>
  );
}

export default NavBar;
