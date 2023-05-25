import NavBar from "./shared/navbar";
import Container from "./components/container";
import ModalItem from "./components/modal-order";
import GenericModal from "./shared/modal";
import Error from "./components/error";
import Login from "./components/login";
import { GlobalStyle } from "./shared/styles/global";
import { ItensProvider } from "./context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar></NavBar>
          <Container></Container>
          <GlobalStyle></GlobalStyle>
          <ModalItem></ModalItem>
          <GenericModal></GenericModal>
        </>
      ),
      errorElement: (
        <>
          <Error /> <GlobalStyle />
        </>
      ),
    },
    {
      path: "manager",
      element: (
        <>
          <Login></Login>
          <GlobalStyle />
        </>
      ),
      errorElement: (
        <>
          <Error /> <GlobalStyle />
        </>
      ),
    },
    {
      path: "kitchen",
      element: (
        <>
          <Container></Container>
          <GlobalStyle></GlobalStyle>
        </>
      ),
      errorElement: (
        <>
          <Error /> <GlobalStyle />
        </>
      ),
    },
  ]);

  return (
    <ItensProvider>
      <RouterProvider router={router} />
    </ItensProvider>
  );
}

export default App;