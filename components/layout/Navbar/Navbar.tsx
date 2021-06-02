import Link from "next/link";
import { IconButton, Tooltip, Avatar } from "@material-ui/core";
import { Edit, Chat, FormatListBulletedOutlined } from "@material-ui/icons";
import {
  NavContainer,
  HeaderContainer,
  HeaderText,
  NavbarItemsContainer,
} from "./navbar.styled";
import { FaSignInAlt } from "react-icons/fa";
import { useAuth } from "../../../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();
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
              <Link href="/user">
                <Tooltip title={user?.displayName}>
                  <IconButton>
                    <Avatar
                      style={{ height: "35px", width: "35px" }}
                      alt={user?.displayName}
                      src={user?.photoURL}
                    />
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
