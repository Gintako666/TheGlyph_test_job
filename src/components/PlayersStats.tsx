import React from 'react';
import { useAppSelector } from '../hooks/reduxHooks';
import { MVP } from './MVP';

export const PlayersStats = () => {
  const activePlayers = useAppSelector(state => state.ActivePlayers);

  return (
    <div className="players-stats">
      <h1 className="players-stats__title">
        NBA
        <br />
        players board
      </h1>
      <ul className="players-stats__list">
        <li className="players-stats__list__item players-stats__list__item--titles">
          <strong className="players-stats__list__item__title players-stats__list__item__info--name">
            name
          </strong>
          <strong className="players-stats__list__item__title players-stats__list__item__info--name">
            team
          </strong>
          <strong className="players-stats__list__item__title">
            GP
          </strong>
          <strong className="players-stats__list__item__title">
            MIN
          </strong>
          <strong className="players-stats__list__item__title">
            PTS
          </strong>
          <strong className="players-stats__list__item__title">
            FG
          </strong>
        </li>
        {activePlayers.map(player => {
          const {
            id, name, team, GP, MIN, PTS, FG,
          } = player;

          return (
            <li className="players-stats__list__item players-stats__list__item--player" key={id}>
              <strong className="players-stats__list__item__info players-stats__list__item__info--name">
                {name}
              </strong>
              <strong className="players-stats__list__item__info players-stats__list__item__info--name">
                {team}
              </strong>
              <strong className="players-stats__list__item__info">
                {GP}
              </strong>
              <strong className="players-stats__list__item__info">
                {MIN}
              </strong>
              <strong className="players-stats__list__item__info">
                {PTS}
              </strong>
              <strong className="players-stats__list__item__info">
                {FG}
                %
              </strong>
              <div className="players-stats__list__item__line"></div>
            </li>
          );
        })}
      </ul>
      <MVP />
    </div>
  );
};
