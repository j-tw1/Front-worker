import React from 'react';
import Feature from '../../components/feature/Feature';
import HowToUse from '../../components/HowToUse/HowToUse';
import Whyus from '../../components/whyus/Whyus';
import Apply from '../../components/apply/Apply';
import { useTranslation } from 'react-i18next';
import Home2 from '../../components/home2/Home2';

function Home() {
  const [t, i18n] = useTranslation();
  return (
    <>
    <Home2/>
      <Feature />
      <Apply />
      <HowToUse />
      <Whyus />
    </>
  );
}

export default Home;
