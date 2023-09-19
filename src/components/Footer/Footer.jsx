// import React from 'react';
// import './Footer.css'; // Import the CSS file
// import { useTranslation } from 'react-i18next';

// function Footer() {
//   const [t, i18n] = useTranslation();
//   return (
//     <footer className="footer">
//       {' '}
//       {/* Use className to apply the styles */}
//       <div className="container">
//         <p>&copy; 2023 Your Company Name</p>

//         <button
//           onClick={() => i18n.changeLanguage('ar')}
//           class="language-button"
//         >
//           ar
//         </button>
//         <button
//           onClick={() => i18n.changeLanguage('en')}
//           class="language-button"
//         >
//           en
//         </button>
//         <button
//           onClick={() => i18n.changeLanguage('fr')}
//           class="language-button"
//         >
//           fr
//         </button>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';
import './Footer.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';

function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Your Company Name</p>

        <div className="language-links">
          <a
            onClick={() => i18n.changeLanguage('ar')}
            className="language-link"
          >
            Arabic
          </a>
          <a
            onClick={() => i18n.changeLanguage('en')}
            className="language-link"
          >
            English
          </a>
          <a
            onClick={() => i18n.changeLanguage('fr')}
            className="language-link"
          >
            French
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
