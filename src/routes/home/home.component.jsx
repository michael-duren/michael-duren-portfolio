import {
  Title,
  HomeWindowContainer,
  HomeWindowHeader,
  HomeWindowParagraph,
  LightMailLink,
  DarkMailLink,
} from './home.component.styles';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

const Home = () => {
  const { id } = useContext(ThemeContext);

  return (
    <>
      <HomeWindowContainer>
        <HomeWindowHeader>Welcome, I'm Michael</HomeWindowHeader>
        <HomeWindowParagraph>
          I'm a web developer and musician from Minneapolis MN
        </HomeWindowParagraph>
        <HomeWindowParagraph>
          This site contains my work both as a developer and musician
        </HomeWindowParagraph>
        <HomeWindowParagraph>
          To contact me please click here -&gt;
          {id === 'light' ? (
            <Link to="contact">
              <LightMailLink />
            </Link>
          ) : (
            <Link to="contact">
              <DarkMailLink />
            </Link>
          )}
        </HomeWindowParagraph>
      </HomeWindowContainer>
      <Title>
        <h1>Michael Duren</h1>
      </Title>
    </>
  );
};

export default Home;
