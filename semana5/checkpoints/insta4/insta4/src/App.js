import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    arrayPost: [
      {
        nomeUsuari: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuari: "Maluquinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuari: "Doidinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
    ],
  };

  render() {
    const listaDeComponentes = this.state.arrayPosts.map((componente) => {
      return (<Post {...componente} />)
    });

    return (
      <MainContainer>
        (listaDeComponentes)
      </MainContainer>
    );

export default App;
