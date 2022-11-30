import React from 'react';
import StarFull from '../../assets/svg/star.svg';
import StarHalf from '../../assets/svg/star_half.svg';
import StarEmpty from '../../assets/svg/star_empty.svg';
import {StarArea, StarView, StarText} from './styled';

const Stars = ({stars, showNumber}) => {
  let star = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let left = stars - floor;

  for (var i = 0; i < floor; i++) {
    star[i] = 2;
  }
  if (left > 0) {
    star[i] = 1;
  }

  return (
    <StarArea>
      {star.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <StarEmpty width="18" height="18" fill="#FF9200" />}
          {i === 1 && <StarHalf width="18" height="18" fill="#FF9200" />}
          {i === 2 && <StarFull width="18" height="18" fill="#FF9200" />}
        </StarView>
      ))}
      {showNumber && <StarText>{stars}</StarText>}
    </StarArea>
  );
};

export default Stars;
