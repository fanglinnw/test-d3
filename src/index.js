console.log(`I'm a silly entry point`);
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

iAmJavascriptES6();
import * as d3 from 'd3';

const square = d3.selectAll("rect");
square.style("fill", "orange");

var data = [4, 8, 15, 16, 23, 42];



