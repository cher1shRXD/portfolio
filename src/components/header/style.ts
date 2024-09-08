import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width:100vw;
  height:8rem;
  position:fixed;
  top:0;
  left:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  padding: 0 3rem;
  background-color:white;
  @media (max-width:700px) {
    height:15rem;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    padding:0;
  }
`
export const Title = styled.p`
  font-size: 3.5rem;
  font-family: "Caveat";
`;
export const NavWrap = styled.div`
  width:95%;
  max-width:32rem;
  height:4rem;
  border-radius:100rem;
  box-shadow:0.1rem 0.1rem 1rem 0.1rem #F1F1F1;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
`
export const NavItem = styled(Link)`
  width:8rem;
  height:4rem;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.3rem;
  cursor: pointer;
  color:black;
  text-decoration:none;
  transition:all 0.5s;
`