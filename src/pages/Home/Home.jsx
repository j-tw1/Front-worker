import React from "react";
import Category from '../../components/category/Category';
import Feature from '../../components/feature/Feature';
import HowToUse from '../../components/HowToUse/HowToUse';
import Whyus from '../../components/whyus/Whyus';
import Category2 from '../../components/category2/Category2';
import Worker from '../../components/worker/Worker';
import Apply from "../../components/apply/Apply";
import { useTranslation } from 'react-i18next';

function Home() {
  const [t, i18n ] = useTranslation();
  return ( 
<>
    <button onClick={() => i18n.changeLanguage('ar')} class="language-button">ar</button>
    <button onClick={() => i18n.changeLanguage('en')} class="language-button">en</button>
    <button onClick={() => i18n.changeLanguage('fr')} class="language-button">fr</button>
    <div className="register">
    {t('titleLogin')}</div>
    <Feature />
    <Apply/>
    <Category2/>
    <HowToUse/>
    <Whyus/>
    <Worker/>
    
    <Category/>

</>

   );
}

export default Home;