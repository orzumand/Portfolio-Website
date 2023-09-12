import React from "react";
import { Container } from "./style";

const Navbar = () => {
  return (
    <Container>
      <div className="left text">Orzumand's Portfolio</div>
      <div className="nav">
        <a href="#" className="text">
          Projects
        </a>
        <a href="#" className="text">
          Technologies
        </a>
        <a href="#" className="text">
          About me
        </a>
      </div>
      <div className="links">
        <div>g</div>
        <div>g</div>
        <div>g</div>
      </div>
    </Container>
  );
};

export default Navbar;
