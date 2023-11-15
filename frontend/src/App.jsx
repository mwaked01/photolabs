import React, { useState, useEffect } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState('off');

  return (
    <div className="App">
      <HomeRoute toggleModal={setModal} />
      {modal !== 'off' && <PhotoDetailsModal toggleModal={setModal} modal={modal} />}
    </div>
  );
};

export default App;
