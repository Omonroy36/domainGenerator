/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let newArr = [];

  for (let item1 in pronoun) {
    for (let item2 in adj) {
      for (let item3 in noun) {
        let nuevo = pronoun[item1] + adj[item2] + noun[item3];
        newArr.push(nuevo);
      }
    }
  }
  let mylist = "";
  for (let index in newArr) {
    mylist += `<li>${newArr[index]}.com</li>`;
  }
  document.querySelector("#generator").innerHTML = `<ul>${mylist}</ul>`;
};
