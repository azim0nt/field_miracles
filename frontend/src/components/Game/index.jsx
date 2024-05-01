import './style.scss'
// надписи и цвета на секторах

function Game() {

  return (
    <>
      <div className="game-container">
        <div className="game">
          <button className='eightbit-btn proceed'>
            Вращать
          </button>
          <span className="arrow"></span>
          <div className="container">
            <div className='one'>1</div>
            <div className="two">2</div>
            <div className="three">3</div>
            <div className="four">4</div>
            <div className="five">5</div>
            <div className="six">6</div>
            <div className="seven">7</div>
            <div className="eight">8</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;