import Controls from '../controls/controls.component';

const Player = () => {
  return (
    <div className="player-container">
      <img src="../../../images/darknight.jpg" alt="stary sky" />
      <div className="player-details">
        <h2>Title</h2>
        <h3>Artist</h3>
        <div className="controls-container">
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default Player;
