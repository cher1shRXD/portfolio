import * as S from "./style";

const Main = () => {
  return (
    <S.Container>
      <S.Section>
        <S.WordWrap>
          <S.SectionTitle>Who am I?</S.SectionTitle>
          <S.OneLinerWrap>
            <S.OneLiner>
              코드에 진심을 담는 개발자, cher1shRXD 김태우입니다.
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
            <S.ContactType>학력: </S.ContactType>대구소프트웨어마이스터고등학교
            소프트웨어개발과(2027년 졸업예정)
            <br />
            <S.ContactType>Tel: </S.ContactType>+82 010-4890-1466
            <br />
            <S.ContactType>E-mail: </S.ContactType>tw080401@naver.com
          </S.Contacts>
        </S.WordWrap>
        <S.ProfileImg src="/assets/profile.JPG" />
      </S.Section>
      <S.Section style={{ justifyContent: "center", gap: "3rem",flexWrap:'wrap' }}>
        <S.WordWrap style={{height:'min-content',gap:'1rem'}}>
          <S.SectionTitle>Skills</S.SectionTitle>
          <S.HashTagWrap>
            <S.HashTag>#Wanna</S.HashTag>
            <S.HashTag>#Be</S.HashTag>
            <S.HashTag>#FullStack</S.HashTag>
          </S.HashTagWrap>
          <S.Description>
            웹 개발을 일찍 시작했기에 학교에서 리액트를 빠르게 습득하고<br />
            남들이 해보지 못한 여러가지 기술들을 해보며<br />
            아무도 가질 수 없는 값진 경험을 하는 중 입니다.
          </S.Description>
        </S.WordWrap>

        <S.SkillWrap>
          <S.SkillTitle>Front-End</S.SkillTitle>
          <S.ImageWrap>
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
            <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" />
            <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=JQuery&logoColor=white" />
            <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
            <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white" />
            <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge" />
            <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
          </S.ImageWrap>
          <S.SkillTitle>Back-End</S.SkillTitle>
          <S.ImageWrap>
            <img src="https://img.shields.io/badge/php-777BB4?style=for-the-badge&logo=PHP&logoColor=white" />
            <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=MySql&logoColor=white" />
            <img src="https://img.shields.io/badge/mariadb-003545?style=for-the-badge&logo=MariaDB&logoColor=white" />
            <img src="https://img.shields.io/badge/apache-D22128?style=for-the-badge&logo=Apache&logoColor=white" />
            <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white" />
            <img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=Linux&logoColor=white" />
            <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
            <img src="https://img.shields.io/badge/phpmyadmin-6C78AF?style=for-the-badge&logo=PhpMyAdmin&logoColor=white" />
            <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
            <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" />
            <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
          </S.ImageWrap>
        </S.SkillWrap>
      </S.Section>
    </S.Container>
  );
};

export default Main;
