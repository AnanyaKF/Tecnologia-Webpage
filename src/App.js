import React from 'react';
import NavBar from './components/Header'; // Adjust the path based on your directory structure
import MyComponent from './pages/Home';




const App = () => {
  return (
    <div>
      <NavBar />
      <MyComponent/>
     

      {/* Other components and content */}
    </div>
  );
};

export default App;