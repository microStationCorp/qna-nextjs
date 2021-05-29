import Link from "next/link";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { Edit, Chat, FormatListBulletedOutlined } from "@material-ui/icons";

export default function Navbar() {
  return (
    <>
      <NavContainer>
        <HeaderContainer>
          <HeaderText>
            <Link href="/">QnA</Link>
          </HeaderText>
        </HeaderContainer>

        <NavbarItemsContainer>
          <Link href="/newq">
            <IconButton>
              <Edit />
            </IconButton>
          </Link>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <FormatListBulletedOutlined />
          </IconButton>
        </NavbarItemsContainer>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.div`
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

const NavbarItemsContainer = styled.div`
  margin-right: 10px;
`;

const HeaderContainer = styled.div`
  margin: 10px;
  /* text-align: center; */
`;

const HeaderText = styled.span`
  font-size: 3rem;
`;
