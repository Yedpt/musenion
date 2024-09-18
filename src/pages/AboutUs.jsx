import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <PageContainer>
      <Content>
        <Section>
          <TitleSection>
            <Title>
              <span className="medium">SOBRE</span>
            </Title>{" "}
            <Title>
              <span className="bold">NOSOTROS</span>
            </Title>
          </TitleSection>
          <Paragraph>
            "¡Bello! Me Minions. Nosotro estaa pequee amarilla pepinos, con
            overol y gafas. ¡BEE DO BEE DO! Nosotro trabajaa mucho para boss
            grande, ¡grande villano! Nos gusta jugaa, baila, canta, y amaaa...
            ¡BANANA! 🍌 Nosotro viaja mooondo entero, buscaa malvado boss paaa
            servir. Keeekaa, fafa, na-na puy! Ukelele party, banana split,
            gelato! Pero, oopsie, nosotro siempre hace locura y problema. Mee
            cooopa! Haha! Nos ama amigooo y baila la "baa-naa-naa", siempre
            feliz, siempre juntos. ¡Tulaliloo ti amo! 💛 Baaa-naa-naa for life!
            Wuk wuk!"
          </Paragraph>
          <TitleSection>
            <Title>
              <span className="medium">LOS</span>
            </Title>{" "}
            <Title>
              <span className="bold">CREADORES</span>
            </Title>
          </TitleSection>
        </Section>

        <Creators>
          <Creator>
            <CreatorImage>
              <img
                src="src\assets\images\avatar-yeder.png"
                alt="Yeder Pimentel"
              />
            </CreatorImage>
            <CreatorName>
              <span className="medium">YEDER</span>{" "}
              <span className="bold">PIMENTEL</span>
            </CreatorName>
          </Creator>
          <Creator>
            <CreatorImage>
              <img
                src="src\assets\images\avatar-laura.png"
                alt="Laura de Vega"
              />
            </CreatorImage>
            <CreatorName>
              <span className="medium">LAURA</span>{" "}
              <span className="bold">DE VEGA</span>
            </CreatorName>
          </Creator>
          <Creator>
            <CreatorImage>
              <img src="src\assets\images\avatar-anca.png" alt="Anca Bacria" />
            </CreatorImage>
            <CreatorName>
              <span className="medium">ANCA</span>{" "}
              <span className="bold">BACRIA</span>
            </CreatorName>
          </Creator>
          <Creator>
            <CreatorImage>
              <img
                src="src\assets\images\avatar-mariela.png"
                alt="Mariela Adimari"
              />
            </CreatorImage>
            <CreatorName>
              <span className="medium">MARIELA</span>{" "}
              <span className="bold">ADIMARI</span>
            </CreatorName>
          </Creator>
          <Creator>
            <CreatorImage>
              <img
                src="src\assets\images\avatar-ana.png"
                alt="Ana Maria Garcia"
              />
            </CreatorImage>
            <CreatorName>
              <span className="medium">ANA MARIA</span>{" "}
              <span className="bold">GARCIA</span>
            </CreatorName>
          </Creator>
        </Creators>
      </Content>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #0c2849;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffdc59, #e2730c);
  padding: 150px 20px 100px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

const TitleSection = styled.div`
  padding-bottom: 20px;
`;

const Title = styled.h2`
  color: #0c2849;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0px;
  padding-left: 20px;

  .medium {
    font-weight: 500; /* Montserrat Medium */
  }

  .bold {
    font-weight: 700; /* Montserrat Bold */
  }
`;

const Paragraph = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  padding: 0 20px;
  max-width: 800px;
  text-align: left;
  margin-bottom: 20px;
`;

const Creators = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  justify-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const Creator = styled.div`
  text-align: center;
`;

const CreatorImage = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    background-color: #ccc; /* Placeholder background color */
  }
`;

const CreatorName = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #0c2849;

  .medium {
    font-weight: 500; /* Montserrat Medium */
  }

  .bold {
    font-weight: 700; /* Montserrat Bold */
  }
`;

export default AboutUs;
