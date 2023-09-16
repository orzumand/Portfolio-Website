import React from "react";
import { Img, Wrapper } from "./style";
import { Button } from "../Generic";
import Me from "../../assets/img/ME.JPG";
const Main = () => {
  let date = new Date();
  let year = date.getFullYear();
  const old = year - 2000;
  console.log(year);
  return (
    <Wrapper>
      <div>
        <div className="title">Hi, I'm Frontend Developer</div>
        <br />
        <pre className="subtitle">
          Remember, the most important time is now,the most important one is
          <br />
          always the one who you are with. The most important thing to do good
          <br />
          for the one who is standing at your side !
          <br />
          <br />
          <Button />
        </pre>
      </div>

      <div>{/* <Img src={Me} /> */}</div>
    </Wrapper>
  );
};

export default Main;
