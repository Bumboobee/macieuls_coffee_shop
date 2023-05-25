import { useState, useEffect, useContext } from "react";
import * as CardItem from "./style";
import ProductContext from "../../context";
import { MdModeEditOutline } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";

function Card({ idProduto, nome, preco, foto, idCategoria, descricao }) {
  const {
    currentUrl,
    us2brl,
    resetState,
    setResetState,
    handleDelete,
    openGenericModal,
  } = useContext(ProductContext);
  const [qtde, setQtde] = useState(0);
  const [priceItem, setPriceItem] = useState(preco);

  useEffect(() => {
    if (resetState) {
      setQtde(0);
      setPriceItem(preco);
      setResetState(false);
      localStorage.clear();
    }
  }, [resetState, preco, setResetState]);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem(nome));
    if (item) {
      setQtde(item.qtde);
      setPriceItem(item.priceItem);
    }
  }, [nome]);

  const handleDecrease = () => {
    if (qtde <= 1) {
      setQtde(0);
      localStorage.removeItem(nome);
    } else {
      setQtde(qtde - 1);
      setPriceItem(priceItem - preco);
      localStorage.setItem(
        nome,
        JSON.stringify({
          nome,
          priceItem: priceItem - preco,
          idCategoria,
          qtde: qtde - 1,
        })
      );
    }
  };

  const handleIncrease = () => {
    if (qtde >= 1) {
      setQtde(qtde + 1);
      setPriceItem(priceItem + preco);
      localStorage.setItem(
        nome,
        JSON.stringify({
          nome,
          priceItem: priceItem + preco,
          idCategoria,
          qtde: qtde + 1,
        })
      );
    } else {
      setQtde(1);
      localStorage.setItem(
        nome,
        JSON.stringify({ nome, priceItem: preco, idCategoria, qtde: 1 })
      );
    }
  };

  return (
    <CardItem.CardContainer>
      <CardItem.Title>{nome}</CardItem.Title>
      <CardItem.HolderImg photo={foto} data-description={descricao}>
        {currentUrl === "/" ? (
          <>
            <CardItem.Qtde>{qtde}</CardItem.Qtde>
            <CardItem.CounterWrapper>
              <CardItem.Counter>
                <CardItem.Buttom onClick={handleDecrease}>-</CardItem.Buttom>
                <span>{us2brl(priceItem)}</span>
                <CardItem.Buttom  onClick={handleIncrease}>+</CardItem.Buttom>
              </CardItem.Counter>
            </CardItem.CounterWrapper>
          </>
        ) : (
          <>
            <CardItem.ManagerPrice>{us2brl(preco)}</CardItem.ManagerPrice>

            <CardItem.ManagerActions>
              <MdModeEditOutline
                onClick={() => {
                  openGenericModal(
                    "edit",
                    idProduto,
                    nome,
                    preco,
                    foto,
                    idCategoria,
                    descricao
                  );
                }}
              />
              <GoTrashcan onClick={() => handleDelete(idProduto, nome)} />
            </CardItem.ManagerActions>
          </>
        )}
      </CardItem.HolderImg>
    </CardItem.CardContainer>
  );
}

export default Card;
