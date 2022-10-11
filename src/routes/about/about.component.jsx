import { AboutContainer, MichaelImage } from './about.component.styles';

import michaelAvatar from '../../assets/Avatar.png';

const About = () => {
  return (
    <AboutContainer>
      <div className="nav-container">
        <div className="menu-buttons">
          <button>Overview</button>
          <button>Uses</button>
        </div>
        <div className="home-button">
          <button className="x-button">X</button>
        </div>
      </div>
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
    </AboutContainer>
  );
};

export default About;
