import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, setModal }) => {
  return (
    <div className='fav-badge'  onClick={() => { setModal('LikedPhotos') }}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;