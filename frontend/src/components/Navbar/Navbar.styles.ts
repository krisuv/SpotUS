import styled from "@emotion/styled";
import { spotUSTheme as theme } from "../../assets";

export const Header = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 4),
})

export const Nav = styled('nav')({
  '& :not(:last-child)': {
    marginRight: theme.spacing(2)
  }
})