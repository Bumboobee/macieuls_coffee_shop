import { useState, useEffect, useContext } from "react";
import Modal, { defaultStyles, setAppElement } from "react-modal";
import ProductContext from "../../context";
import * as global_style from "../../shared/styles/global";
import * as ModalStyle from "./style";
import Button from "../../shared/button";
import { GiCancel } from "react-icons/gi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import { stringify } from "uuid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: `${global_style.grey03}`,
    border: "none",
  },
};

defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.8)";
defaultStyles.overlay.zIndex = 10;

setAppElement("#root");

function ModalItem() {
  const {
    us2brl,
    closeModal,
    modalOrderIsOpen,
    order,
    setAmount,
    amount,
    handleReset,
    handleSwal,
  } = useContext(ProductContext);
  const [restriction, setRestriction] = useState("NAO");
  const [tableNumber, setTableNumber] = useState("");
  const [specifyRestriction, setSpecifyRestriction] = useState("");
  const [waiterCode, setWaiterCode] = useState("");
  let orderToSend = [];

  useEffect(() => {
    const newAmount = order.reduce((total, item) => total + item.priceItem, 0);
    setAmount(newAmount);
  }, [order]);

  const handleSelectChange = (event) => {
    setRestriction(event.target.value);
  };

  const handleTableChange = (event) => {
    setTableNumber(event.target.value);
  };

  const handleSpecifyRestrictionChange = (event) => {
    setSpecifyRestriction(event.target.value);
  };

  const handleWaiterChange = (event) => {
    setWaiterCode(event.target.value);
  };

  const sendOrder = (event) => {
    event.preventDefault();

    if (tableNumber.length === 0 || waiterCode.length === 0) {
      handleSwal(
        "Campo(s) vazio!",
        "Preencha todos os campos para enviar o pedido!",
        "",
        "warning",
        "OK",
        "",
        false,
        true,
        "",
        "",
        "",
        "#FAE69E"
      );
    } else if (order.length === 0) {
      handleSwal(
        "Nenhum pedido encontrado!",
        "Pareçe que não a nenhum pedido adicionado, adicone ao menos um item para enviar o pedido!",
        "",
        "warning",
        "OK",
        "",
        false,
        true,
        "",
        "",
        "",
        "#FAE69E"
      );
    } else {
      order.map((item) => {
        let data = {};
        data["nome"] = item.nome;
        data["quantidade"] = item.qtde.toString();

        orderToSend.push(data);
      });

      console.log("mesa", tableNumber);
      console.log("total", amount);
      console.log("pedido", orderToSend);
      
      const pedido = {
        token: import.meta.env.VITE_API_TOKEN,
        mesa: tableNumber,
        total: amount.toString(),
        pedido: JSON.stringify([...orderToSend])
      };
      console.log(pedido)
      //send data do api
      axios
      .post(import.meta.env.VITE_API_URL_PEDIDO, pedido, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        response.status === 201
          ? (
            handleReset("modal"),

            closeModal(),

            handleSwal(
              "Pedido enviado com sucesso!",
              "",
              `<h5>A cozinha já recebeu o pedido da mesa ${tableNumber}, em pouco tempo estará pronto.</h5>`,
              "success",
              "",
              "",
              false,
              false,
              "top-right",
              4500,
              "",
              "#0FA37F"
            )
            )
          : handleSwal(
              "Algo deu errado!",
              "",
              `<h5>Não foi possível enviar o pedido da mesa ${tableNumber}, contate o setor de TI</h5>`,
              "error",
              "",
              "Cancelar",
              false,
              false,
              "",
              2500,
              "",
              "#BB4549"
            );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);

        handleSwal(
          "Algo deu errado!",
          "",
          `<h5>Não foi possível enviar os pedidos, contate o setor de TI</h5>`,
          "error",
          "",
          "Cancelar",
          false,
          false,
          "",
          2500,
          "",
          "#BB4549"
        );
      });
    }

    return false;
  };

  return (
    <Modal
      isOpen={modalOrderIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <ModalStyle.Header>
        Finalizar Pedido
        <ModalStyle.CloseBtn onClick={closeModal}>X</ModalStyle.CloseBtn>
      </ModalStyle.Header>

      <ModalStyle.Form>
        <ModalStyle.HolderInputs>
          <ModalStyle.HolderLabel>
            <ModalStyle.Label htmlFor="table">Número da Mesa</ModalStyle.Label>
            <ModalStyle.Input
              type="number"
              name="table"
              placeholder="Digite o número da mesa"
              value={tableNumber}
              onChange={handleTableChange}
              min="0"
            />
          </ModalStyle.HolderLabel>

          <ModalStyle.HolderLabel>
            <ModalStyle.Label htmlFor="restriction">
              Restrição?
            </ModalStyle.Label>
            <ModalStyle.Select
              value={restriction}
              onChange={handleSelectChange}
            >
              <option value="SIM">SIM</option>
              <option value="NAO">NAO</option>
            </ModalStyle.Select>
          </ModalStyle.HolderLabel>

          {restriction === "SIM" && (
            <ModalStyle.HolderLabel>
              <ModalStyle.Label htmlFor="especfy-restriction">
                Especifique a restrição
              </ModalStyle.Label>
              <ModalStyle.Input
                type="text"
                name="especfy-restriction"
                placeholder="Digite a restrição"
                value={specifyRestriction}
                onChange={handleSpecifyRestrictionChange}
              />
            </ModalStyle.HolderLabel>
          )}

          <ModalStyle.HolderLabel>
            <ModalStyle.Label htmlFor="waiter">Código garçom</ModalStyle.Label>
            <ModalStyle.Input
              type="number"
              name="waiter"
              placeholder="Digite o código do garçom"
              value={waiterCode}
              onChange={handleWaiterChange}
              min="0"
            />
          </ModalStyle.HolderLabel>
        </ModalStyle.HolderInputs>

        <ModalStyle.Table>
          <thead>
            <ModalStyle.Tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Restrição</th>
              <th>Total</th>
            </ModalStyle.Tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <ModalStyle.Tr key={item.nome}>
                <td>{item.nome}</td>
                <td>{item.qtde}</td>
                <td></td>
                <td>{us2brl(item.priceItem)}</td>
              </ModalStyle.Tr>
            ))}
          </tbody>
        </ModalStyle.Table>

        <ModalStyle.HolderBtns>
          <ModalStyle.BtnLeft>
            <Button
              icon={<GiCancel />}
              text={"Cancelar"}
              bordercolor={global_style.red00}
              background={global_style.red00}
              color={global_style.white01}
              onClick={closeModal}
            ></Button>

            <Button
              icon={<AiOutlineCheckCircle />}
              text={`Confirmar: ${us2brl(amount)}`}
              bordercolor={global_style.white00}
              background={global_style.green00}
              color={global_style.white00}
              onClick={(event) => sendOrder(event)}
              type={"button"}
            ></Button>
          </ModalStyle.BtnLeft>
        </ModalStyle.HolderBtns>
      </ModalStyle.Form>
    </Modal>
  );
}

export default ModalItem;
