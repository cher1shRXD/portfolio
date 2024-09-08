import * as S from './style'

const Main = () => {
  return (
    <S.Container>
      <S.Section>
        <S.WordWrap>
          <S.SectionTitle>Who am I?</S.SectionTitle>
          <S.OneLinerWrap>
            <S.OneLiner>
              코드에 진심을 담는 개발자, cher1shRXD 김태우 입니다.
            </S.OneLiner>
          </S.OneLinerWrap>
          <S.Description>
            React.js와 TypeScript를 기반으로 한 웹 개발을 하고 있으며,
            <br />
            다양한 경험을 바탕으로 한 개발 센스가 뛰어난 것이 저의 장점 입니다.{" "}
            <br />
            또한, 많은 팀 프로젝트에 참가 하며 팀 내 커뮤니케이션 능력을
            키워왔습니다.
          </S.Description>
          <S.Contacts>
            <S.ContactType>학력: </S.ContactType>대구소프트웨어마이스터고등학교 소프트웨어개발과(2027년
            졸업예정)
            <br />
            <S.ContactType>주소: </S.ContactType>경상남도 합천군 합천읍 옥산로 19 수성오바드빌 501호
            <br />
            <S.ContactType>Tel: </S.ContactType>+82 010-4890-1466
            <br />
            <S.ContactType>E-mail: </S.ContactType>tw080401@naver.com
          </S.Contacts>
          <S.HashTagWrap>
            <S.HashTag>#Frontend Developer</S.HashTag>
            <S.HashTag>#React.js</S.HashTag>
            <S.HashTag>#TypeScript</S.HashTag>
          </S.HashTagWrap>
        </S.WordWrap>
        <S.ProfileImg src="/assets/profile.JPG" />
      </S.Section>
      <S.Section>adg</S.Section>
    </S.Container>
  );
}

export default Main