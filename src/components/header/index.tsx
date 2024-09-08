import { useEffect, useState } from 'react'
import * as S from './style'
import { useLocation } from 'react-router-dom';

const Header = () => {

  const [pageState, setPageState] = useState<"PROFILE"|"ACTIVITIES"|"AWARDS"|"DAYLIFE">("PROFILE");
  const location = useLocation();

  useEffect(()=>{
    if (location.pathname === "/") {
      setPageState("PROFILE");
    } else if (location.pathname === "/activities") {
      setPageState("ACTIVITIES");
    } else if (location.pathname === "/awards") {
      setPageState("AWARDS");
    } else if (location.pathname === "/daylife") {
      setPageState("DAYLIFE");
    }
  },[location.pathname]);

  return (
    <S.Container>
      <S.Title>Cher1shRXD's Portfolio</S.Title>
      <S.NavWrap>
        <S.NavItem
          to="/"
          style={
            pageState === "PROFILE"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          PROFILE
        </S.NavItem>
        <S.NavItem
          to="/activities"
          style={
            pageState === "ACTIVITIES"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          ACTIVITIES
        </S.NavItem>
        <S.NavItem
          to="/awards"
          style={
            pageState === "AWARDS"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          AWARDS
        </S.NavItem>
        <S.NavItem
          to="/daylife"
          style={
            pageState === "DAYLIFE"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          DAYLIFE
        </S.NavItem>
      </S.NavWrap>
    </S.Container>
  );
}

export default Header