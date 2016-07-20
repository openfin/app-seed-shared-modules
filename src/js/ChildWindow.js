/**
 * Created by grahamclapham on 14/07/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../js/components/common-header.js';

import 'core-js';
import HeaderVanilla from '../js/vanilla_conmponents/vanilla-header.js';
// The compiled sass files
require  ("../sass/entry.scss");


document.addEventListener("DOMContentLoaded", ()=>{
   console.log("Here is the child window - loaded");

   ReactDOM.render(
       (
           <div>
              <Header headline ={"Child window headline"} subHeadline={'Child window subHeadline'}/>
           </div>
       ),
       document.querySelector('#content')
   );

   let _header = HeaderVanilla.create({text:"This is the new text..."});
   _header.render(document.querySelector('#vanilla-header'));
});


