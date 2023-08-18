import React from "react";
import Feature from '../../components/feature/Feature';
import HowToUse from '../../components/HowToUse/HowToUse';
import Whyus from '../../components/whyus/Whyus';
import Apply from "../../components/apply/Apply";
import { useTranslation } from 'react-i18next';

function Home() {

  const [t, i18n ] = useTranslation();
  return ( 
  <>
      <button onClick={() => i18n.changeLanguage('ar')} class="language-button">ar</button>
      <button onClick={() => i18n.changeLanguage('en')} class="language-button">en</button>
      <button onClick={() => i18n.changeLanguage('fr')} class="language-button">fr</button>
      
      <Feature />
      <Apply/>
      <HowToUse/>
      <Whyus/>
      

  </>

   );
}

export default Home;