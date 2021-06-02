import Link from "next/link";
import { IconButton, Tooltip } from "@material-ui/core";
import {
  Edit,
  Chat,
  FormatListBulletedOutlined,
  AccountCircleOutlined,
} from "@material-ui/icons";
import { useContext, useState } from "react";
import {
  NavContainer,
  HeaderContainer,
  HeaderText,
  NavbarItemsContainer,
} from "./navbar.styled";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext, ContextI } from "../../../context/authContext";

export default function Navbar() {
  const { auth } = useContext(AuthContext) as ContextI;

  return (
    <>
      <NavContainer>
        <HeaderContainer>
          <HeaderText>
            <Link href="/">QnA</Link>
          </HeaderText>
        </HeaderContainer>

        <NavbarItemsContainer>
          {auth ? (
            <>
              <Link href="/newq">
                <Tooltip title="New Query">
                  <IconButton>
                    <Edit />
                  </IconButton>
                </Tooltip>
              </Link>
              <Link href="/replies">
                <Tooltip title="Replies">
                  <IconButton>
                    <Chat />
                  </IconButton>
                </Tooltip>
              </Link>
              <Link href="/timeline">
                <Tooltip title="Timeline">
                  <IconButton>
                    <FormatListBulletedOutlined />
                  </IconButton>
                </Tooltip>
              </Link>
              <Link href="/user">
                <Tooltip title="Avatar">
                  <IconButton>
                    <AccountCircleOutlined />
                  </IconButton>
                </Tooltip>
              </Link>
            </>
          ) : (
            <Link href="/login">
              <Tooltip title="Sign In">
                <IconButton>
                  <FaSignInAlt />
                </IconButton>
              </Tooltip>
            </Link>
          )}
        </NavbarItemsContainer>
      </NavContainer>
    </>
  );
}
