import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [likeButton,setLikeButton] = useState(false);

  const handleClick = () => {
    // console.log('hearted');
    likeButton? setLikeButton(false) : setLikeButton(true);
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className="photo-list__fav-icon-svg">
        <FavIcon selected={likeButton}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;