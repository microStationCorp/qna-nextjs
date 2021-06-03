import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export const NavContainer = styled.div`
  /* border: 2px solid black; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.24);
  padding: 3px;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NavbarItemsContainer = styled.div`
  margin-right: 10px;
`;

export const HeaderContainer = styled.div`
  margin: 10px;
  /* text-align: center; */
`;

export const HeaderText = styled.span`
  font-size: 2.5rem;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 65px;
  right: 10px;
  width: 250px;
  background-color: #d4dcd7;
  padding: 1rem;
  border-radius: 10px;
`;

export const DropDownItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0.5rem;
`;
