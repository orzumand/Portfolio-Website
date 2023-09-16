import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 67px;
  /* background-color: transparent; */
  position: relative;
  padding: 0px 50px;
  /* z-index: 1; */
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    z-index: 1;
  }
  a {
    text-decoration: none;
  }
  .nav {
    display: flex;
    gap: 60px;
  }
  .links {
    display: flex;
    z-index: 1;
  }
  .video1 {
    /* top: -100%; */
    left: -180px;
    height: 200px;
    position: absolute;
    z-index: 0;
    /* height: 67px; */
  }
  .video2 {
    top: -170%;
    right: -180px;
    height: 200px;
    position: absolute;
    z-index: 0;
    transform: rotate(180deg);
    /* height: 67px; */
  }
`;

export { Container };
