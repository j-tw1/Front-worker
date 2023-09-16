// import React from 'react';
// import OuvrierSideBar from './OuvrierSideBar/OuvrierSideBar';
// import OuvrierDashboard from './OuvrierDashboard/OuvrierDashboard';
// import OuvrierReviews from './OuvrierReviews/OuvrierReviews';
// import OuvrierOrders from './OuvrierOrders/OuvrierOrders';
// import OuvrierNav from './OuvrierNav/OuvrierNav';

// function OuvrierContent() {
//   return (
//     <div id="layoutSidenav">
//       <OuvrierNav />
//       <OuvrierSideBar />

//       <OuvrierDashboard />
//     </div>
//   );
// }

// export default OuvrierContent;

import React, { useState } from 'react';
import OuvrierSideBar from './OuvrierSideBar/OuvrierSideBar';
import OuvrierDashboard from './OuvrierDashboard/OuvrierDashboard';
import OuvrierReviews from './OuvrierReviews/OuvrierReviews';
// import OuvrierMessages from './OuvrierMessages/OuvrierMessages';
import OuvrierOrders from './OuvrierOrders/OuvrierOrders'; // Import your Orders component
import OuvrierNav from './OuvrierNav/OuvrierNav';
import MyProfile from './MyProfile/MyProfile';
import MyMessages from './MyMessages/MyMessages';

function OuvrierContent() {
  const [selectedOption, setSelectedOption] = useState('dashboard'); // Initialize with 'dashboard'

  // Function to handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Render the appropriate content based on the selected option
  let dashboardContent;

  if (selectedOption === 'dashboard') {
    dashboardContent = <OuvrierDashboard />;
  } else if (selectedOption === 'orders') {
    dashboardContent = <OuvrierOrders />;
  } else if (selectedOption === 'reviews') {
    dashboardContent = <OuvrierReviews />;
  }else if (selectedOption === 'profile') {
    dashboardContent = <MyProfile />;
  }else if (selectedOption === 'messages') {
    dashboardContent = <MyMessages />;
  }

  return (
    <div id="layoutSidenav">
      <OuvrierNav />
      <OuvrierSideBar
        onOptionClick={handleOptionClick}
        selectedOption={selectedOption}
      />
      {dashboardContent}
    </div>
  );
}

export default OuvrierContent;
