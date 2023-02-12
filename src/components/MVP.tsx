import React from 'react';

export const MVP = () => {
  const player = {
    id: 2,
    name: 'Michael Jordan, CHI',
    team: 'Chicago Bulls',
    GP: 4,
    MIN: 45,
    PTS: 65,
    FG: 25,
  };

  return (
    <div className="mvp">
      <div className="mvp__player">
        <h2 className="mvp__player__title">MVP PLAYER</h2>
        <h1 className="mvp__player__name">{player.name}</h1>
      </div>
      <div className="mvp__info">
        <div className="mvp__info__item">
          TEAM
          <div className="mvp__info__item__info">{player.team}</div>
        </div>
        <div className="mvp__info__item">
          GP
          <div className="mvp__info__item__info">{player.GP}</div>
        </div>
        <div className="mvp__info__item">
          MIN
          <div className="mvp__info__item__info">{player.MIN}</div>
        </div>
      </div>
      <div className="mvp__info">
        <div className="mvp__info__item">
          PTS
          <div className="mvp__info__item__info">{player.PTS}</div>
        </div>
        <div className="mvp__info__item">
          FG%
          <div className="mvp__info__item__info">{player.FG}</div>
        </div>
      </div>
    </div>
  );
};
