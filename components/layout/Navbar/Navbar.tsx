import Link from "next/link";
import { IconButton, Tooltip, Avatar, Button } from "@material-ui/core";
import { Edit, Chat, FormatListBulletedOutlined } from "@material-ui/icons";
import {
  NavContainer,
  HeaderContainer,
  HeaderText,
  NavbarItemsContainer,
  DropDownContainer,
  DropDownItemContainer,
} from "./navbar.styled";
import { FaSignInAlt } from "react-icons/fa";
import { useAuth } from "../../../hooks/useAuth";
import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../../../firebase/firebaseMain";
import Router from "next/router";

export default function Navbar() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavContainer>
        <HeaderContainer>
          <HeaderText>
            <Link href="/">QnA</Link>
          </HeaderText>
        </HeaderContainer>

        <NavbarItemsContainer>
          {user ? (
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
              <IconButton
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <Avatar
                  style={{ height: "35px", width: "35px" }}
                  alt={user?.displayName}
                  src={user?.photoURL}
                />
              </IconButton>
              {open && <DropDown data={user} />}
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

function DropDown(props: any) {
  function DropDownItem(props: React.PropsWithChildren<{}>) {
    return <DropDownItemContainer>{props.children}</DropDownItemContainer>;
  }

  return (
    <DropDownContainer>
      <DropDownItem>Hello {props.data.displayName}</DropDownItem>
      <DropDownItem>{props.data.email}</DropDownItem>
      <DropDownItem>
        <Button
          color="inherit"
          variant="outlined"
          onClick={() => {
            auth.signOut().then(() => {
              Router.replace("/");
            });
          }}
        >
          Sign Out
        </Button>
      </DropDownItem>
    </DropDownContainer>
  );
}
