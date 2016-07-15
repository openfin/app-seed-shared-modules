/**
 * Created by grahamclapham on 14/07/16.
 */

import 'core-js';
import HeaderVanilla from '../js/vanilla_conmponents/vanilla-header.js';
// The compiled sass files
require  ("../sass/entry.scss");


document.addEventListener("DOMContentLoaded", ()=>{
   console.log("Here is the child window - loaded");

   let _header = HeaderVanilla.create({text:"This is the new text..."});
   _header.render(document.querySelector('#vanilla-header'));
});


