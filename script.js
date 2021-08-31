"use strict";

window.addEventListener("load", start);

let inputBox = document.getElementById("input");
const output = document.getElementById("output");
let selection = document.getElementById("select").value;

let result;
// let output;

function start() {
  console.log("start");
  document.getElementById("generate").addEventListener("click", stringMethod);
}

function stringMethod() {
  console.log("stringMethod");

  selection = document.getElementById("select").value;
  inputBox = document.getElementById("input").value;

  if (selection === "firstUpper") {
    console.log("firstUpper");
    result = inputBox.substring(0, 1).toUpperCase() + inputBox.substring(1).toLowerCase();
    showOutput();
  }

  if (selection === "firstName") {
    console.log("firstName");
    result = inputBox.split(" ")[0];
    showOutput();
  }

  if (selection === "length") {
    console.log("length");
    const firstName = inputBox.split(" ")[0];
    result = firstName.length;
    showOutput();
  }

  // if (selection === "middleName") {
  //   console.log("middleName");
  //   const middleName = inputBox.split(" ")[1];
  //   result = middleName.indexOf(middleName);
  //   showOutput();
  // }

  if (selection === "filename") {
    console.log("filename");

    if (inputBox.endsWith(".jpg")) {
      result = "this input contains .jpg";
    } else if (inputBox.endsWith(".png")) {
      result = "this input contains .png";
    } else if (inputBox.endsWith("")) {
      result = "this input does not contains files";
    }
    showOutput();
  }

  if (selection === "password") {
    console.log("password");
    result = "";
    result = result.padStart(inputBox.length, "*");
    showOutput();
  }

  if (selection === "3cap") {
    console.log("3cap");
    result = inputBox.substring(0, 2).toLowerCase() + inputBox.substring(3, 4).toUpperCase() + inputBox.substring(3).toLowerCase();
    showOutput();
  }

  if (selection === "cap") {
    console.log("splitArr");
    let splitArr = inputBox.split("-");
    result = splitArr;
    showOutput();
  }
}

function showOutput() {
  output.value = result;
  //   document.querySelector("#output").value = result;
}

//
// console log(splitArr)
