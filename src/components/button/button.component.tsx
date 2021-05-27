import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;

interface ButtonType {
  loadMore: () => void;
  children: string;
}

const ButtonComponent: React.FC<ButtonType> = ({ loadMore, children }) => {
  return <Button onClick={loadMore}>{children}</Button>;
};

export default ButtonComponent;
