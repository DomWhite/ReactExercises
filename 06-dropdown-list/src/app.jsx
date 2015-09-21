var React = require('react'); //this is NPM-style syntax
var Dropdown = require('./dropdown'); //I've made this component therefor path syntax is needed

//this is the props object to pass in
//structure of options = { thumbnailData: [{},{}] }
var options = {
  title: 'Choose a dessert', // what should show up on button to open/close the dropdown
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};


// React, render this class (instantiate class)
var element = React.createElement(Dropdown, options); //only the instantiated 'element' (or class) can be rendered

// React, after you render this class, place it in my body tag
React.render(element, document.querySelector('.container') );