import { experimentalStyled as styled } from "@material-ui/core/styles";

export const CompanyPageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.primary.main}
    ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100vw;
  }
`;

export const CompanyHeaderContainer = styled("div")`
  display: grid;
  width: 90%;
  padding-top: ${({ theme }) => theme.spacing(4)};
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 90%;
  margin: ${({ theme }) => theme.spacing(4)} 0;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
`;
