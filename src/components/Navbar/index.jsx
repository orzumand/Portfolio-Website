import React from "react";
import { Container } from "./style";
// import Button from "../Generic/Button";
// import smoke from "../../assets/video/smoke.mp4";

const Navbar = () => {
  return (
    <Container>
      {/* <video className="video1" loop autoPlay muted src={smoke}></video>
      <video className="video2" loop autoPlay muted src={smoke}></video> */}
      <div className="left text">Orzumand's Portfolio</div>
      <div className="nav">
        <a href="#/" className="text">
          Projects
        </a>
        <a href="#/" className="text">
          Technologies
        </a>
        <a href="#/" className="text">
          About me
        </a>
      </div>
      <div className="links">
        <div>g</div>
        <div>g</div>
        <div>g</div>
      </div>
      {/* <Button /> */}
    </Container>
  );
};

export default Navbar;
