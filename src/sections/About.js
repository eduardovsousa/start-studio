import React from "react";
import styled from "styled-components";

import img1 from '../assets/Images/1.webp'
import img2 from '../assets/Images/2.webp'
import img3 from '../assets/Images/3.webp'

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;

const Right = styled.div`
  width: 50%;
  position: relative;


  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }

  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Sobre nós
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Somos um estúdio de moda baseado no Brasil. Criamos designs exclusivos
        que vão te impressionar. Também desenhamos peças de joalharia
        exclusivas. A moda é uma ARTE que não pode ser compreendida por todos.
        <br />
        <br />
        Estamos muito dedicados a fazer nossos produtos. Oferecemos produtos
        exclusivos e criativos para uma ampla gama de pessoas. Temos uma
        variedade de estilos, mas para a maioria das pessoas todas as opções
        estão na caixa. Somos especializados em fazer coisas que te fazem feliz.
        <br />
        <br />
        Nós nos esforçamos para desenvolver nossa visão. Como marca de moda,
        fazemos o nosso melhor para criar experiências incríveis para todas as
        pessoas. Estamos sempre procurando fazer algo que seja fácil para todos.
      </Left>
      <Right>
        <img src={img1} alt="Sobre nós" />
        <img
          data-scroll
          data-scroll-speed="5"
        src={img2} className="small-img-1" alt="Sobre nós" />
        <img
          data-scroll
          data-scroll-speed="-2"
        src={img3} className="small-img-2" alt="Sobre nós" />
      </Right>
    </Section>
  );
};

export default About;
