import { Avatar, Rating } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";

//@deprecated
export const UserCardContainer = styled("div")`
  display: grid;
  width: 70% !important;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "picture name"
    "picture role"
    "picture email";
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.2) + " " + theme.spacing(2)};
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: grid;
    width: 100%;
    grid-template-columns: 60px repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "picture name role email";
  }
`;

export const UserNameStyled = styled("div")`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: bold;
  grid-area: name;
`;

export const UserRoleStyled = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  grid-area: role;
`;

export const UserPictureStyled = styled(Avatar)`
  grid-area: picture;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
  font-size: 16px;
`;

export const UserEmailStyled = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  grid-area: email;
`;

