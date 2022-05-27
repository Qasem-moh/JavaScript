/**
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");
let myImage = document.createElement("img");

myImage.setAttribute("src", "https://th.bing.com/th/id/OIP.b8Ex-dm0XQVmfpByU1AeQgHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7");
myImage.className="image";

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = "product";
myMainElement.appendChild(myImage);
document.body.appendChild(myMainElement);