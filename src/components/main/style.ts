import styled, { keyframes } from "styled-components";

const Typing = keyframes`
  0% {
    width: 0;
  }
  60% {
    width: 53rem;
  }
  100% {
    width: 53rem;
  }
`;

const CaretBlink = keyframes`
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
`;

const PageIn = keyframes`
  0%{
    margin-left:5rem;
  }
  100%{
    margin-left:0;
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 8rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
  animation: ${PageIn} 1s forwards;
  /* @media (max-width: 700px) {
    padding-top: 15rem;
  } */
`;

export const Section = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 3rem;
  box-sizing: border-box;
  margin-bottom:3rem;
`;

export const ProfileImg = styled.img`
  width: 90%;
  max-width: 50rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-radius: 2rem;
`;

export const WordWrap = styled.div`
  width: 90%;
  max-width: 70rem;
  height: 50rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;

export const SectionTitle = styled.p`
  font-size: 5rem;
  font-weight: 700;
  font-family: "Caveat";
`;

export const OneLinerWrap = styled.div`
  border-left: 0.4rem solid #a1d6b2;
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  @media (max-width:620px) {
    display:none;
  }
`;

export const OneLiner = styled.div`
  height: 2.5rem;
  overflow: hidden;
  font-size: 2rem;
  animation: ${Typing} 4s steps(30, end) infinite,
    ${CaretBlink} 0.75s step-end infinite;
  border-right: 0.1rem solid black;
  word-break: break-all;
  font-family: "Galmuri14";
  font-weight:bold;
  
`;
export const Description = styled.p`
  font-size: 2rem;
  margin: 1rem 0;
  line-height: 1.3;
  word-break: keep-all;
  font-weight:600;
`;
export const Contacts = styled.p`
  font-size: 1.7rem;
  margin: 1rem 0;
  line-height: 1.7;
  word-break: keep-all;
`;
export const ContactType = styled.span`
  font-weight: 700;
  font-size: 1.7rem;
  color: #4c3bcf;
`;

export const HashTagWrap = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  flex-wrap:wrap;
`;

export const HashTag = styled.p`
  font-size: 1.5rem;
  margin-right: 2rem;
  color: #4c3bcf;
`;

export const SkillWrap = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export const ImageWrap = styled.div`
  width:90%;
  max-width:50rem;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  justify-content:center;
  gap:0.4rem;
`


export const SkillTitle = styled.p`
  font-size:2rem;
  margin:2.4rem 0 1.2rem 0;
`