import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
//import DataItens from "../data/data";
import OrderItens from "../data/order";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
const ProductContext = createContext();

export const ItensProvider = ({ children }) => {
  //const [initialData, setInitialData] = useState(DataItens)
  const [currentUrl, setCurrentUrl] = useState("");
  const [initialData, setInitialData] = useState([]);
  const [cakeItens, setCakeItens] = useState(
    initialData.filter((item) => item.idCategoria === "1")
  );
  const [coffeeItens, setCoffeeItens] = useState(
    initialData.filter((item) => item.idCategoria === "2")
  );
  const [dataItens, setDataItens] = useState(cakeItens);
  const [resetState, setResetState] = useState(false);
  const [modalOrderIsOpen, setModalOrderIsOpen] = useState(false);
  const [genericModalIsOpen, setGenericModaIsOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState("");
  const [modalText, setModalText] = useState("");
  const [modalIcon, setModalIcon] = useState("");
  const [modalType, setModalType] = useState("");
  const [order, setOrder] = useState([]);
  const [amount, setAmount] = useState(0);
  const [idProduto, setId] = useState("");
  const [idCategoria, setcategory] = useState("1");
  const [nome, settitle] = useState("");
  const [preco, setprice] = useState("");
  const [foto, setphoto] = useState("");
  const [descricao, setdescription] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [currentTab, setCurrentTab] = useState(1);

  const [orderItens, setOrderItens] = useState(OrderItens);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${
          import.meta.env.VITE_API_URL_LIST_ALL + import.meta.env.VITE_API_TOKEN
        }`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setInitialData(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        
        handleSwal(
          "Algo deu errado!",
          "",
          `<h5>Não foi possível carregar os produtos, contate o setor de TI</h5>`,
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
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCakeItens(initialData.filter((item) => item.idCategoria === "1"));
    setCoffeeItens(initialData.filter((item) => item.idCategoria === "2"));
    setDataItens(initialData.filter((item) => item.idCategoria === "1"));
  }, [initialData]);

  useEffect(() => {
    const filteredItems = initialData.filter(
      (item) =>
        (item.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.preco.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.descricao.toLowerCase().includes(searchValue.toLowerCase())) &&
        item.idCategoria === currentTab.toString()
    );

    setDataItens(filteredItems);
  }, [initialData, searchValue, currentTab]);

  useEffect(() => {
    setCurrentUrl(window.location.pathname);
    const urlParts = window.location.pathname.split("/");
    setCurrentUrl("/" + urlParts[1]);
  }, []);

  const fetchData = async () => {
    try {
      const url = `${
        import.meta.env.VITE_API_URL_LIST_ALL + import.meta.env.VITE_API_TOKEN
      }`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setInitialData(data);
    } catch (error) {
      console.error("Error fetching data:", error);

      handleSwal(
        "Algo deu errado!",
        "",
        `<h5>Não foi possível carregar os produtos, contate o setor de TI</h5>`,
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
    }
  };

  const openModalOrder = () => {
    setModalOrderIsOpen(true);
    //get the all items that are in the local storage, alredy update :)
    const items = Object.values(localStorage);
    const orders = items.map((item) => JSON.parse(item));
    setOrder(orders);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const closeModal = () => {
    setModalOrderIsOpen(false);
  };

  const openGenericModal = (
    type,
    idProduto,
    nome,
    preco,
    foto,
    idCategoria,
    descricao
  ) => {
    if (type === "add") {
      setModalHeader("Adicionar Produto");
      setModalText("Adicionar");
      setModalIcon(<AiOutlineCheckCircle />);
    } else {
      setModalHeader("Editar Produto");
      setModalText("Editar");
      setModalIcon(<AiOutlineCheckCircle />);
      handleLoadEdit(idProduto, nome, preco, idCategoria, foto, descricao);
    }
    setModalType(type);
    setGenericModaIsOpen(true);
  };

  const closeGenericModal = () => {
    setGenericModaIsOpen(false);

    setId("");
    setcategory("1");
    settitle("");
    setprice("");
    setphoto("");
    setdescription("");
  };

  const handleCake = (btn) => {
    setDataItens(cakeItens);
    setCurrentTab(1);
  };

  const handleCoffee = (btn) => {
    setDataItens(coffeeItens);
    setCurrentTab(2);
  };

  const us2brl = (value) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const isUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      handleSwal(
        "Url Inválida",
        "Não conseguimos encontrar a url digitada, está correta?",
        "",
        "warning",
        "Verificar",
        "",
        false,
        true,
        "",
        "",
        "",
        "#FAE69E"
      );
      return false;
    }
  };

  const handleReset = (component) => {
    if (component === "navBar") {
      handleSwal(
        "Limpar Pedidos?",
        "Essa ação não pode ser revertida!",
        "",
        "warning",
        "Sim, Limpar!",
        "Cancelar",
        true,
        true,
        "",
        "",
        () => {
          setResetState(true);
          setTimeout(() => setResetState(false), 0);
        },
        "#FAE69E"
      );
    } else {
      setResetState(true);
      setTimeout(() => setResetState(false), 0);
    }
  };

  const handleCategoryChange = (event) => {
    setcategory(event.target.value);
  };

  const handleNameChange = (event) => {
    settitle(event.target.value);
  };

  const handleValueChange = (event) => {
    setprice(event.target.value);
  };

  const handlePhotoUrl = (event) => {
    setphoto(event.target.value);
  };

  const handleDescription = (event) => {
    setdescription(event.target.value);
  };

  const handleDelete = (idProduto, product) => {
    const URL_DELETE_PRODUCT = `${import.meta.env.VITE_API_URL_DEFAULT}?token=${import.meta.env.VITE_API_TOKEN}&idProduto=${idProduto}&method=DELETE`;

    handleSwal(
      "Remover Produto?",
      "",
      `<h5>${product} será removido</h5>`,
      "warning",
      "Sim, Remover!",
      "Cancelar",
      true,
      true,
      "",
      "",
      () => {
        axios
          .get(URL_DELETE_PRODUCT)
          .then((response) => {
            console.log(initialData)
            console.log(response.status);
            const updatedData = initialData.filter((product) => product.idProduto !== idProduto);
            setInitialData(updatedData);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      "#FAE69E"
    );
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    if (
      nome.length === 0 ||
      idCategoria.length === 0 ||
      preco.length === 0 ||
      foto.length === 0
    ) {
      handleSwal(
        "Campo(s) vazio!",
        "Preencha todos os campos para editar o produto!",
        "",
        "warning",
        "OK",
        "",
        false,
        true,
        true,
        "",
        "",
        "#FAE69E"
      );
      return;
    }

    if (!isUrl(foto)) {
      return;
    }

    if (
      nome.length > 50 ||
      idCategoria.length > 5 ||
      preco.length > 6 ||
      foto.length > 500 ||
      descricao.length > 190
    ) {
      handleSwal(
        "Ops!",
        "",
        `<h5>Tamanho máximo de caracteres excedido!</h5>`,
        "warning",
        "",
        "Cancelar",
        false,
        false,
        "",
        2500,
        "",
        "#FAE69E"
      );
      return;
    }

    parseFloat(preco);
    const newProduct = {
      nome,
      idCategoria,
      preco,
      descricao,
      foto,
    };

    newProduct.token = import.meta.env.VITE_API_TOKEN;

    axios
      .post(import.meta.env.VITE_API_URL_DEFAULT, newProduct, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        response.status === 201
          ? (fetchData(),

            closeGenericModal(),

            handleSwal(
              "Produto criado com sucesso!",
              "",
              `<h5>O produto ${nome} já está disponível.</h5>`,
              "success",
              "",
              "",
              false,
              false,
              "top-right",
              1500,
              "",
              "#0FA37F"
            ))
          : handleSwal(
              "Algo deu errado!",
              "",
              `<h5>Não foi possível criar o produto ${nome}, contate o setor de TI</h5>`,
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
          `<h5>Não foi possível carregar os produtos, contate o setor de TI</h5>`,
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
  };

  const handleLoadEdit = (
    idProduto,
    nome,
    preco,
    idCategoria,
    foto,
    descricao
  ) => {
    setcategory(idCategoria);
    settitle(nome);
    setprice(preco);
    setphoto(foto);
    setId(idProduto);
    setdescription(descricao);
  };

  const handleEditProduct = (event) => {
    event.preventDefault();

    if (
      nome.length === 0 ||
      idCategoria.length === 0 ||
      preco.length === 0 ||
      foto.length === 0
    ) {
      handleSwal(
        "Campo(s) vazio!",
        "Preencha todos os campos para editar o produto!",
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
      return;
    }

    if (!isUrl(foto)) {
      return;
    }

    if (
      nome.length > 50 ||
      idCategoria.length > 5 ||
      preco.length > 6 ||
      foto.length > 500 ||
      descricao.length > 190
    ) {
      handleSwal(
        "Ops!",
        "",
        `<h5>Tamanho máximo de caracteres excedido!</h5>`,
        "warning",
        "",
        "Cancelar",
        false,
        false,
        "",
        2500,
        "",
        "#FAE69E"
      );
      return;
    }

    const editedProduct = {
      nome,
      idCategoria,
      descricao,
      foto,
      preco,
    };

    const editedContainer = {      
      idProduto: idProduto,      
      token: import.meta.env.VITE_API_TOKEN,
      produto: JSON.stringify(editedProduct),
    }

    const URL_UPDATE = `${import.meta.env.VITE_API_URL_DEFAULT}?method=PUT`;

    axios
      .post(URL_UPDATE, editedContainer, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        response.status === 204
          ? (
            fetchData(),
            
            closeGenericModal(),
            
            handleSwal(
              "Produto editado com sucesso!",
              "",
              `<h5>O produto ${nome} foi atualizado!.</h5>`,
              "success",
              "",
              "",
              false,
              false,
              "top-right",
              1500,
              "",
              "#0FA37F"
            ))
          : handleSwal(
              "Algo deu errado!",
              "",
              `<h5>Não foi possível editar o produto ${nome}, contate o setor de TI</h5>`,
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
          `<h5>Não foi possível editar o produto ${nome}, contate o setor de TI</h5>`,
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
  };

  const handleSubmitGenericForm = (event, type) => {
    if (type === "add") {
      console.log("add");
      handleAddProduct(event);
    } else {
      handleEditProduct(event);
    }
  };

  const handleSwal = (
    title,
    text,
    html,
    icon,
    confirmButtonText,
    cancelButtonText,
    showCancelButton,
    showConfirmButton,
    position,
    timer,
    callback,
    iconColor
  ) => {
    Swal.fire({
      title: title,
      text: text,
      html: html,
      icon: icon,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      reverseButtons: true,
      color: "#ECECF1",
      iconColor: iconColor,
      background: "#272830",
      confirmButtonColor: "#0FA37F",
      cancelButtonColor: "#BB4549",
      showCancelButton: showCancelButton,
      showConfirmButton: showConfirmButton,
      position: position,
      timer: timer,
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
    });
  };

  const handleDeleteOrder = (idOrder, table) => {
    handleSwal(
      "Remover Pedido?",
      "",
      `<h5>Pedido ${idOrder} será removido</h5>`,
      "warning",
      "Sim, Remover!",
      "Cancelar",
      true,
      true,
      "",
      "",
      () => {
        setOrderItens(orderItens.filter((item) => item.idPedido !== idOrder));
      },
      "#FAE69E"
    );
  };

  const handleDeleteSingleItemOrder = (idOrder, nameProduto) => {
    handleSwal(
      "Remover este Item?",
      "",
      `<h5>O item ${nameProduto} será removido do pedido ${idOrder}</h5>`,
      "warning",
      "Sim, Remover!",
      "Cancelar",
      true,
      true,
      "",
      "",
      () => {
        setOrderItens((prevOrderItems) => {
          const updatedItems = prevOrderItems.map((orderItem) => {
            if (orderItem.idPedido === idOrder) {
              const updatedProdutos = orderItem.produtos.filter(
                (produto) => produto.nome !== nameProduto
              );
              return { ...orderItem, produtos: updatedProdutos };
            }
            return orderItem;
          });
          return updatedItems;
        });
      },
      "#FAE69E"
    );
  };

  return (
    <ProductContext.Provider
      value={{
        currentUrl,
        setCurrentUrl,
        dataItens,
        handleCake,
        handleCoffee,
        us2brl,
        handleReset,
        resetState,
        setResetState,
        openModalOrder,
        closeModal,
        modalOrderIsOpen,
        order,
        amount,
        setAmount,
        handleDelete,
        openGenericModal,
        genericModalIsOpen,
        closeGenericModal,
        isUrl,
        handleCategoryChange,
        handleNameChange,
        handleValueChange,
        handlePhotoUrl,
        handleDescription,
        idCategoria,
        nome,
        preco,
        foto,
        descricao,
        modalIcon,
        modalText,
        modalHeader,
        modalType,
        handleSubmitGenericForm,
        setId,
        handleSwal,
        handleSearchInputChange,
        orderItens,
        handleDeleteOrder,
        handleDeleteSingleItemOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
