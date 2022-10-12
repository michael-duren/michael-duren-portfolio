import { useState } from 'react';

import {
  AboutContainer,
  NavContainer,
  MenuButton,
  MenuButtons,
  CloseWindowX,
  IconButton,
  MichaelImage,
} from './about.component.styles';

import michaelAvatar from '../../assets/Avatar.png';

const AboutUses = () => {
  return <h1>THIS IS WHAT I USE</h1>;
};

const AboutOverview = () => {
  return (
    <div className="content-container">
      <div className="icon-image">
        <MichaelImage src={michaelAvatar} alt="Michael Duren" />
      </div>
      <div className="content">
        <h1>
          <b>michael</b> Duren
        </h1>
        <p>Michael Duren is a front end developer and musician based</p>
        <p>out of St. Paul MN.</p>
        <p>He specializes in React.js and Sass. </p>
        <p>Currently Michael is seeking front end roles.</p>
        <p>Michaels music has been featured on Spotify and Apple</p>
        <p>music. Click the link in the dock to listen.</p>
        <br />
        <p>Currently Michael is working on learning Tailwind and React</p>
        <p>Native. </p>
      </div>
    </div>
  );
};

const About = () => {
  const [content, setContent] = useState('overview');

  const onClickOverview = () => {
    if (content === 'overview') {
      return;
    } else {
      setContent('overview');
    }
  };

  const onClickUses = () => {
    if (content === 'uses') {
      return;
    } else {
      setContent('uses');
    }
  };

  const renderAboutComponent = () => {
    switch (content) {
      case 'overview':
        return <AboutOverview />;
      case 'uses':
        return <AboutUses />;
      default:
        throw new Error(`Unhandled content ${content}, in about component`);
    }
  };

  return (
    <AboutContainer>
      <NavContainer>
        <MenuButtons>
          <MenuButton onClick={onClickOverview}>Overview</MenuButton>
          <MenuButton onClick={onClickUses}>Uses</MenuButton>
          <IconButton to="/">
            <CloseWindowX />
          </IconButton>
        </MenuButtons>
      </NavContainer>
      {renderAboutComponent()}
    </AboutContainer>
  );
};

export default About;
