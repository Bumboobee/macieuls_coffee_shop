import { useState, useContext } from "react";
import Modal, { setAppElement } from "react-modal";
import ProductContext from "../../context";
import * as global_style from "../styles/global";
import * as ModalStyle from "./style";
import Button from "../button";
import { GiCancel } from "react-icons/gi";

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

setAppElement("#root");

function GenericModal() {
  const {
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
    handleSubmitGenericForm
  } = useContext(ProductContext);

  return (
    <Modal
      isOpen={genericModalIsOpen}
      onRequestClose={closeGenericModal}
      style={customStyles}
    >
      <ModalStyle.Header>
        {modalHeader}
        <ModalStyle.CloseBtn onClick={closeGenericModal}>X</ModalStyle.CloseBtn>
      </ModalStyle.Header>

      <ModalStyle.Form>
        <ModalStyle.HolderInputs>
          <ModalStyle.Divider>
            <ModalStyle.HolderLabel>
              <ModalStyle.Label htmlFor="name">Nome</ModalStyle.Label>
              <ModalStyle.Input
                type="text"
                name="name"
                placeholder="Digite o nome do Produto"
                value={nome}
                onChange={handleNameChange}
                required
                maxLength={50}
              />
            </ModalStyle.HolderLabel>

            <ModalStyle.HolderLabel>
              <ModalStyle.Label htmlFor="value">Valor</ModalStyle.Label>
              <ModalStyle.Input
                type="number"
                name="value"
                placeholder="Digite o valor do Produto"
                min={0}
                value={preco}
                onChange={handleValueChange}
                required
                step={0.01}
                maxLength={6}
                max={999.99}
              />
            </ModalStyle.HolderLabel>

            <ModalStyle.HolderLabel>
              <ModalStyle.Label htmlFor="restriction">
                Qual o tipo do item?
              </ModalStyle.Label>
              <ModalStyle.Select
                value={idCategoria}
                onChange={handleCategoryChange}
              >
                <option value={1}>Bolo</option>
                <option value={2}>Café</option>
              </ModalStyle.Select>
            </ModalStyle.HolderLabel>
          </ModalStyle.Divider>

          <ModalStyle.Divider>
            <ModalStyle.HolderLabel>
              <ModalStyle.Label htmlFor="photo">Foto</ModalStyle.Label>
              <ModalStyle.Input
                type="url"
                name="photo"
                placeholder="Digite a url da foto"
                value={foto}
                onChange={handlePhotoUrl}
                required
                maxLength={500}
              />
            </ModalStyle.HolderLabel>
          </ModalStyle.Divider>

          <ModalStyle.Divider>
            <ModalStyle.HolderLabel>
              <ModalStyle.Label htmlFor="description">
                Descricao
              </ModalStyle.Label>
              <ModalStyle.TextArea
                type="text"
                name="description"
                placeholder="Digite a descrição do Produto"
                value={descricao}
                onChange={handleDescription}
                maxLength={90}
              />
            </ModalStyle.HolderLabel>
          </ModalStyle.Divider>
        </ModalStyle.HolderInputs>

        <ModalStyle.HolderBtns>
          <ModalStyle.BtnLeft>
            <Button
              icon={<GiCancel />}
              text={"Cancelar"}
              bordercolor={global_style.red00}
              background={global_style.red00}
              color={global_style.white01}
              onClick={closeGenericModal}
            ></Button>

            <Button
              icon={modalIcon}
              text={`${modalText} Item`}
              bordercolor={global_style.white00}
              background={global_style.green00}
              color={global_style.white00}
              type={"button"}
              onClick={(event) => handleSubmitGenericForm(event, modalType)}
            ></Button>
          </ModalStyle.BtnLeft>
        </ModalStyle.HolderBtns>
      </ModalStyle.Form>
    </Modal>
  );
}

export default GenericModal;
