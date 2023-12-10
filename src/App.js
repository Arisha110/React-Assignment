import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useState } from "react";
import Gannt from './components/Gannt';
import LeftNav from './components/LeftNav';
import TopNav from './components/TopNav';
import BurgerSingh from './components/BurgerSingh';
import CategorySection from './components/CategorySection';


const App = () => {

  return (

    <div className='w-[100%] h-[100vh]  xl:flex xl:overflow-y-hidden '>
      <LeftNav />
      <CategorySection />

      <div className='mx-2 xl:mr-3 flex flex-col gap-[2rem]'>
        <TopNav />
        <BurgerSingh />
        <Gannt />
      </div>

    </div>
  );
}

export default App;
