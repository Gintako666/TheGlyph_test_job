/* eslint-disable no-console */
import classNames from 'classnames';
import React from 'react';
import players from '../api/players.json';
import { actions as ActivePlayersActions } from '../features/ActivePlayers';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';

export const PlayerList = () => {
  const dispatch = useAppDispatch();
  const ActivePlayers = useAppSelector(state => state.ActivePlayers);

  console.log(ActivePlayers);

  return (
    <div className="player-list">
      <h2 className="player-list__title">Pick one of the player</h2>
      <ul className="player-list__list">
        {players.map(item => {
          const { name, team, id } = item;
          const activePlayer = ActivePlayers.some(player => player.id === id);

          return (
            <li key={id}>
              <button
                type="button"
                className={classNames(
                  'card',
                  { 'card--active': activePlayer },
                )}
                onClick={() => {
                  if (!activePlayer) {
                    dispatch(ActivePlayersActions.add(item));
                  } else {
                    dispatch(ActivePlayersActions.remove(item));
                  }
                }}
              >
                <h2 className="card__name">
                  {name}
                </h2>
                <strong className="card__team">
                  {team}
                </strong>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
