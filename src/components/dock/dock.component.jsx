import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as Music } from '../../assets/music.svg';
import { Link } from 'react-router-dom';

const Dock = () => {
  return (
    <>
      <a href="https://github.com/michaeldit">
        <GitHub />
      </a>
      <Link to="/">
        <Music />
      </Link>
    </>
  );
};

export default Dock;
