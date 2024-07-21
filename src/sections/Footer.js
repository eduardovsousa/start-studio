import React from "react";
import styled from "styled-components";

import Logo from "../assets/Svgs/star_white_48dp.svg";
import { motion } from "framer-motion/dist/framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-size: ${(props) => props.theme.fontexl};
    font-family: "Kaushan Script";
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: 2rem;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontelg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Bottom = styled.div`
  padding: 0%.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontelg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }
`;

export default function Footer() {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={Logo} alt="Star Studio" />
        <h3 data-scroll data-scroll-speed="-1">
          Star Studio
        </h3>
      </LogoContainer>

      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>home</li>
          <li onClick={() => handleScroll(".about")}>sobre</li>
          <li onClick={() => handleScroll("#shop")}>nova coleção</li>
          <li onClick={() => handleScroll(".new-arrival")}>os lançamentos</li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. Todos os direitos reservados.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Feiti com &hearts; por &nbsp;
            <a
              href="https://www.linkedin.com/in/eduardovsousa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eduardo Varela
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
}
