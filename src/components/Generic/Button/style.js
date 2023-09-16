import styled from "styled-components";

const Container = styled.div`
  width: 140px;
  height: 40px;
  font-size: 16px;
  border-radius: 83px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  &:not(:disabled):active {
    transform: scale(0.98);
    opacity: 0.9;
  }
  :hover {
    background-color: red;
  }
`;

export { Container };
