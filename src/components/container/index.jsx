import { useContext } from "react";
import * as ContainerItem from "./style";
import Card from "../../shared/card";
import SearchBox from "../../components/search";
import ProductContext from "../../context";
import { motion, AnimatePresence } from "framer-motion";
import OrderCard from "../order-card";

function Container() {
  const { dataItens, currentUrl, orderItens } = useContext(ProductContext);

  return (
    <ContainerItem.Container>
      {currentUrl === "/kitchen" ? (
        <>
          <ContainerItem.Row currentUrl={currentUrl}>
            <AnimatePresence>
              {orderItens.map((order) => {
                return (
                  <motion.div
                    key={order.idPedido}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OrderCard 
                      key={order.idPedido}
                      idPedido={order.idPedido}
                      produtos={order.produtos}
                      mesa={order.mesa}
                      status={order.status}
                      dataHora={order.datahora}
                      >

                    </OrderCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </ContainerItem.Row>
        </>
      ) : (
        <>
          <SearchBox
            placeholder={"Procure por nome, preço ou descrição..."}
          ></SearchBox>

          <ContainerItem.Row>
            <AnimatePresence>
              {dataItens.map((cake) => {
                return (
                  <motion.div
                    key={cake.idProduto}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      key={cake.idProduto}
                      idProduto={cake.idProduto}
                      nome={cake.nome}
                      preco={parseFloat(cake.preco)}
                      foto={cake.foto}
                      idCategoria={cake.idCategoria}
                      descricao={cake.descricao}
                    ></Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </ContainerItem.Row>
        </>
      )}
    </ContainerItem.Container>
  );
}

export default Container;
