import React from "react";
import "./App.css";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import Eu from "../src/img/Eu.jpeg";
import Email from "../src/img/Email.png";
import Gps from "../src/img/Gps.png";
import Investimentos from "../src/img/Investimentos.jpg";
import Barbeiro from "../src/img/Barbeiro.png";

import styled from "styled-components";

const CardGrandeEstilizacao = styled.div`
  .bigcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
  }

  .bigcard-container > img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
  }

  .bigcard-container h4 {
    margin-bottom: 15px;
  }

  .bigcard-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
  }
`;

const ImagemButtonEstilizacao = styled.div`
  .image-button-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
  }

  .image-button-container > img {
    width: 30px;
    margin-right: 10px;
  }
`;

const CardPequenoEstilizacao = styled.div`
  .littlecard-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    height: 50px;
    width: 550px;
  }

  .littlecard-container > img {
    width: 30px;
    margin: 0px 20px;
    border-radius: 20%;
  }

  .littlecard-container h4 {
    margin-right: 10px;
  }

  .littlecard-container > div {
    display: flex;
    justify-content: flex-start;
  }
`;

function App() {
  return (
    <div className="App">
      <CardGrandeEstilizacao className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Eu}
          nome="Guilherme"
          descricao="Oi, me chamo Guilherme. Atualmente sou aluno de Web Dev FullStack na Labenu da turma Maryam. "
        />

        <ImagemButtonEstilizacao>
          <ImagemButton
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
            texto="Ver mais"
          />
        </ImagemButtonEstilizacao>
      </CardGrandeEstilizacao>

      <CardPequenoEstilizacao className="littlecard-container">
        <CardPequeno
          imagem={Email}
          texto="e-mail:"
          descricao="guilhermesm10@hotmail.com"
        />
      </CardPequenoEstilizacao>
      <br />
      <CardPequenoEstilizacao className="littlecard-container">
        <CardPequeno
          imagem={Gps}
          texto="Endereço:"
          descricao="Rua do Desespero 666"
        />
      </CardPequenoEstilizacao>

      <CardGrandeEstilizacao className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={Investimentos}
          nome="ALTSSET"
          descricao="Prospecção de cliente e suporte na hora de diversificar seus investimentos!"
        />

        <CardGrande
          imagem={Barbeiro}
          nome="BARBEIRO"
          descricao="Barbeiro autônomo durante um curto período de tempo."
        />
      </CardGrandeEstilizacao>

      <ImagemButtonEstilizacao className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </ImagemButtonEstilizacao>
    </div>
  );
}

export default App;
