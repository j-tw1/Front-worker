import React from "react";
import Category from '../../components/category/Category';
import Feature from '../../components/feature/Feature';
import HowToUse from '../../components/HowToUse/HowToUse';
import Whyus from '../../components/whyus/Whyus';
import Category2 from '../../components/category2/Category2';
import Worker from '../../components/worker/Worker';
import Apply from "../../components/apply/Apply";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";
import Slide from "../../components/slide/Slide"


function Home() {
  return ( 
<>
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