import styled from "styled-components";

const Wrapper = styled.div`
  gap: 120px;
  display: flex;
  position: absolute;
  color: antiquewhite;
  z-index: 2;
  /* height: 2000px; */
  background-color: transparent;
  width: 100%;
  margin-top: 40px;
  padding: 90px 80px;
  /* border: 2px solid white; */
  height: 500px;
  .subtitle {
    color: #bcbcbc;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    user-select: none;
    line-height: 1.8;
    padding-left: 20px;
  }
`;
const Img = styled.img`
  /* transform: rotate(270deg); */
  height: 400px;
  object-fit: cover;
  border: 10px solid grey;
  border-radius: 15%;
`;

export { Wrapper, Img };
