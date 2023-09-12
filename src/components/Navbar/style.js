import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 67px;
  background-color: transparent;
  position: relative;
  padding: 0px 50px;
  /* z-index: 1; */
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  .nav {
    display: flex;
    gap: 60px;
  }
  .links {
    display: flex;
  }
`;

export { Container };
