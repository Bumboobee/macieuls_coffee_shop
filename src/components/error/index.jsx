import { useContext } from "react";
import { Link } from "react-router-dom";
import { red00 } from "../../shared/styles/global";
import ProductContext from "../../context";
import * as global_style from "../../shared/styles/global";
import Button from "../../shared/button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as ErrorStyle from "./style";
import imgError from "../../../public/assets/images/want_coffe_error.png";

function Error() {
  const { setCurrentUrl } = useContext(ProductContext);
  return (
    <>
      <ErrorStyle.Container background={imgError}>
        <Link
          style={{
            textDecoration: "none",
            color: `${global_style.grey03}`,
            position: 'absolute',
            bottom: '20px',
            right: '100px'
          }}
          to="/"
        >
          <Button
            icon={<AiOutlineArrowLeft />}
            text={"Voltar para o início"}
            bordercolor={global_style.yellow00}
            background={global_style.yellow00}
            color={global_style.grey03}
            onClick={() => {
              setCurrentUrl("/");
            }}
          ></Button>
        </Link>
      </ErrorStyle.Container>
    </>
  );
}

export default Error;
