import { useState } from "react";
import { GlobalStyle } from "../../shared/styles/global";
import * as LoginStyle from "./style";
import NavBar from "../../shared/navbar";
import Container from "../container";
import ModalItem from "../modal-order";
import GenericModal from "../../shared/modal";

function Login() {
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(import.meta.env.VITE_SECRET_ANSWER);
  const [question, setQuestion] = useState(import.meta.env.VITE_SECRET_QUESTION)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
      return "Bom dia!";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Boa tarde!";
    } else {
      return "Boa noite!";
    }
  };

  const handleInputChange = (e) => {
    if (e.target.value.toLowerCase() === correctAnswer.toLowerCase()) {
      setIsAuthenticated(true);
    }

    setAnswer(e.target.value);
  };

  const welcome = `Bem vindo(a)! | ${getGreeting()}`

  return (
    <>
      {isAuthenticated === false ? (
        <>
          <LoginStyle.Container>
            <LoginStyle.Form>
              <LoginStyle.Title>{welcome}</LoginStyle.Title>

              <LoginStyle.HolderLabel>
                <LoginStyle.Label htmlFor="question">
                  {question}
                </LoginStyle.Label>
                <LoginStyle.Input
                  type="text"
                  name="question"
                  placeholder="Digite sua resposta..."
                  value={answer}
                  onChange={handleInputChange}
                />
              </LoginStyle.HolderLabel>
                <LoginStyle.Message>
                  *Responda corretamente para acessar a gerência.
                </LoginStyle.Message>
            </LoginStyle.Form>
          </LoginStyle.Container>
        </>
      ) : (
        <>
          <NavBar></NavBar>
          <Container></Container>
          <ModalItem></ModalItem>
          <GenericModal></GenericModal>
        </>
      )}
    </>
  );
}

export default Login;
