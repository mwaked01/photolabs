import React, { useCallback } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // const [likeButton,setLikeButton] = useState('');
  const { photo, onFavClick, likeButton } = props;

  const handleLikeClick = () => {
    onFavClick(photo);
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleLikeClick} className="photo-list__fav-icon-svg">
        <FavIcon selected={likeButton} />
      </div>
    </div>
  );
}

export default PhotoFavButton;