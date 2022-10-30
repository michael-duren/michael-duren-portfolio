import {
  MichaelImage,
  OverviewContainer,
  ImageContainer,
  ContentContainer,
} from './about-overview.component.styles';
import michaelAvatar from '../../../images/Avatar.png';

const AboutOverview = () => {
  return (
    <OverviewContainer>
      <ImageContainer>
        <MichaelImage src={michaelAvatar} alt="Michael Duren picture" />
      </ImageContainer>
      <ContentContainer>
        <h1>
          <b>michael</b> Duren
        </h1>
        <p>Michael Duren is a front end developer and musician based</p>
        out of St. Paul MN. He specializes in React.js and Sass.
        <p>Currently Michael is seeking front end roles.</p>
        <p>Michaels music has been featured on Spotify and Apple</p>
        <p>music. Click the link in the dock to listen.</p>
        <br />
        <p>Currently Michael is working on learning Tailwind and React</p>
        <p>Native. </p>
      </ContentContainer>
    </OverviewContainer>
  );
};

export default AboutOverview;
