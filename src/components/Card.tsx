import React from 'react';

type Props = {
  name: string
  team: string
};

export const Card: React.FC<Props> = ({
  name, team,
}) => {
  return (
    <div>
      <h2 className="card__name">
        {name}
      </h2>
      <strong>
        {team}
      </strong>
    </div>
  );
};
