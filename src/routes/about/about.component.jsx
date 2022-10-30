import { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  AboutContainer,
  NavContainer,
  MenuButton,
} from './about.component.styles';
import CloseWindowButton from '../../components/close-window/close-window.component';

import AboutOverview from './about-overview/about-overview.component';
import AboutUses from './about-uses/about-uses.component';

const About = () => {
  const [content, setContent] = useState('overview');
  const { id } = useContext(ThemeContext);

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
        <MenuButton onClick={onClickOverview}>Overview</MenuButton>
        <MenuButton onClick={onClickUses}>Uses</MenuButton>
        <CloseWindowButton id={id} />
      </NavContainer>
      {renderAboutComponent()}
    </AboutContainer>
  );
};

export default About;
