import { MichaelImage } from './about-overview.component.styles';
import michaelAvatar from '../../../images/Avatar.png';

const AboutOverview = () => {
  return (
    <div className="content-container">
      <div className="icon-image">
        <MichaelImage src={michaelAvatar} alt="Michael Duren picture" />
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

export default AboutOverview;
