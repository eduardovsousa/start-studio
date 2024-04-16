import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  };
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  width: 65%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;


const Shop = () => {
  return (
    <Section>
      <Title data-scroll data-scroll-speed="-1">
        Nova coleção
      </Title>
      <Left>
        <p>
          A nova coleção está sendo desenvolvida no Brasil. Criamos nossos
          produtos com materiais da melhor qualidade, incluindo a utilização de
          alguns tecidos puros para confeccionar nossos produtos. Todos os
          produtos são confeccionados com os melhores materiais, desde o melhor
          algodão até os melhores tecidos.
          <br />
          <br />
          Temos muitas opções de roupas diferentes, como sapatos, jaquetas e
          vestidos. Não apenas roupas, mas também fornecemos joias exclusivas. É
          ótimo para nós carregarmos nossas roupas novas por todo o país e
          parecermos diferentes.
        </p>
      </Left>
      <Right>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
      </Right>
    </Section>
  );
};

export default Shop;
