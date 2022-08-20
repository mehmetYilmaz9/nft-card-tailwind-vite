import { useState } from 'react'

import imgEye from './images/icon-view.svg';
import imgEth from "./images/image-equilibrium.jpg"
import logoEth from "./images/icon-ethereum.svg"
import logoClock from "./images/icon-clock.svg"
import logoAvatar from "./images/image-avatar.png"


function App() {
  return (
   
<body class ="flex justify-center	items-center font-['Outfit'] p-25 min-h-screen bg-veryDarkBlueMainBG 	">

<div class="max-w-xs mx-8 p-5 shadow-2xl rounded-lg bg-veryDarkBlueCardBG  ">


  <div class="group block relative	overflow-hidden	cursor-pointe">
    <a href="#" class="rounded-md overflow-hidden">
      <div class="invisible group-hover:visible absolute inset-0 bg-cyan/60">
        <img
          src={imgEye}
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="eye"
        />
      </div>
      <img src={imgEth} alt="equilibrium" />
    </a>
  </div>

  <div class="my-2  text-softBlue">
    <div class="my-3 text-white">
      <a href="#"><h1 class="font-semibold hover:text-cyan">Equilibrium #3429</h1> </a> 
    </div>
   
    <div class="my-3 ">
      <p class="font-light">Our Equilibrium collection promotes balance and calm.</p>
    </div>
    
    <div class="flex justify-between font-normal my-3" >
      <div class="flex items-center font-semibold text-cyan ">
        <img class="mr-2" src={logoEth} />
        <p>0.041 ETH</p> 
      </div>
     
      <div class="flex items-center">
        <img class="mr-2" src={logoClock} />
        <p>3 days left</p>
      </div>
    </div>
  </div>

  <div class="flex items-center border-t-2 py-3 border-veryDarkBlueLine text-softBlue">
    <img class="h-9 mr-3 border-solid border-2 border-white rounded-full " src={logoAvatar} />
    <p class="font-light	"> Creation of <a href="#"><span class="text-white hover:text-cyan ">Jules Wyvern</span></a></p>
  </div>

</div>

</body>
  )
}

export default App
