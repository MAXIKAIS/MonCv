/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
require('../scss/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
const $ = require('bootstrap');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

// fonction pour afficher mon nom
var i=0;
var mytext="Developpeur Web & Mobile Junior";
var mytextelem=document.getElementById("subtitle");
var mycurrenttext="";
function myFunction () {
    if (i<mytext.length) {
        setTimeout(function(){
            mycurrenttext=mycurrenttext+mytext[i];
            mytextelem.textContent=mycurrenttext;
            i++;
            myFunction();
        },200);
    }
}
myFunction ();
