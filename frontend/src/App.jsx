import React from 'react';
import './App.scss';
import PhotoListItem from './components/PhotoListItem';


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(null);
  return (
    <div className="App">
      {photos.map((_, index) => (
        <PhotoListItem
          className='photo-list'
          key={sampleDataForPhotoListItem.id + index}
          sampleDataForPhotoListItem={sampleDataForPhotoListItem}
        />
      ))}
    </div>
  );
};

export default App;
