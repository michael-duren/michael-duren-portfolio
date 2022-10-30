import { UsesContainer } from './about-uses.component.styles';

const AboutUses = () => {
  return (
    <UsesContainer>
      <h1>michael Uses</h1>
      <ul>
        <li>
          <b>computer</b> <span>MacBook Pro, Mac Mini</span>
        </li>
        <li>
          <b>editor</b> &nbsp;{' '}
          <span>
            Visual Studio Code,
            <br /> Night Owl Theme, <br />
            Operator Mono
          </span>
        </li>
        <li>
          <b>terminal</b> &nbsp; <span>iterm2, zsh</span>
        </li>
        <li>
          <b>framework</b> &nbsp; <span>React</span>
        </li>
        <li>
          <b>browser</b> &nbsp; <span>Firefox Developer</span>
        </li>
      </ul>
    </UsesContainer>
  );
};

export default AboutUses;
