import React from 'react';
import Feature from '../../components/feature/Feature';
import HowToUse from '../../components/HowToUse/HowToUse';
import Whyus from '../../components/whyus/Whyus';
import Apply from '../../components/apply/Apply';
import { useTranslation } from 'react-i18next';

function Home() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <Feature />
      <Apply />
      <HowToUse />
      <Whyus />
    </>
  );
}

export default Home;
