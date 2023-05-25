import { useState, useContext } from "react";
import * as Style from "./style";
import { GoTrashcan } from "react-icons/go";
import * as global_style from "../../shared/styles/global";
import ProductContext from "../../context";

function OrderCard({ idPedido, produtos, mesa, status, dataHora }) {
  const { handleDeleteOrder, handleDeleteSingleItemOrder } =
    useContext(ProductContext);
  const [statusOrder, setStatusOrder] = useState(status);
  const [statusColor, setStatusColor] = useState(global_style.green00);

  const handleStatus = (event, itemColor) => {
    setStatusOrder(event.target.textContent);
    setStatusColor(itemColor);
  };

  return (
    <Style.Container>
      <Style.CardHeader>
        <Style.FirstCollum>
          <Style.HolderHeader>
            <Style.TitleHeader>
              PEDIDO:
              <Style.AlertItem> {idPedido}</Style.AlertItem>
            </Style.TitleHeader>
            <Style.TitleHeader>
              MESA:
              <Style.AlertItem> {mesa}</Style.AlertItem>
            </Style.TitleHeader>
          </Style.HolderHeader>

          <Style.HolderHeader>
            <Style.TitleHeaderGhost>STATUS</Style.TitleHeaderGhost>
            <Style.Badge color={statusColor} style={{ cursor: "default" }}>
              {statusOrder.toUpperCase()}
            </Style.Badge>
          </Style.HolderHeader>

          <Style.HolderHeader>
            <Style.TitleHeaderGhost>REMOVER</Style.TitleHeaderGhost>
            <Style.AlertItem>
              <GoTrashcan
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
                onClick={() => handleDeleteOrder(idPedido, mesa)}
              />
            </Style.AlertItem>
          </Style.HolderHeader>
        </Style.FirstCollum>

        <Style.SecondColumn>
          <Style.TitleHeader>DEFINIR STATUS</Style.TitleHeader>
          <Style.DefineStatus>
            <Style.Badge
              color={global_style.green00}
              onClick={(event) => handleStatus(event, global_style.green00)}
            >
              ABERTO
            </Style.Badge>
            <Style.Badge
              color={global_style.yellow00}
              onClick={(event) => handleStatus(event, global_style.yellow00)}
            >
              EM PROGRESSO
            </Style.Badge>
            <Style.Badge
              color={global_style.red00}
              onClick={(event) => handleStatus(event, global_style.red00)}
            >
              FECHADO
            </Style.Badge>
          </Style.DefineStatus>
        </Style.SecondColumn>
      </Style.CardHeader>

      <Style.Table>
        <thead>
          <Style.Tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Restrição</th>
            <th>Remover</th>
          </Style.Tr>
        </thead>
        <tbody>
          {produtos.map((item) => (
            <Style.Tr key={item.nome}>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td></td>
              <td>
                <GoTrashcan
                  style={{ fontSize: "1.2rem", cursor: "pointer", color: global_style.red00 }}
                  onClick={() =>
                    handleDeleteSingleItemOrder(idPedido, item.nome)
                  }
                />
              </td>
            </Style.Tr>
          ))}
        </tbody>
      </Style.Table>
    </Style.Container>
  );
}

export default OrderCard;