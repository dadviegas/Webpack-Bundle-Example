require('./file3.js');
require('./file1.js');
require('./file2.js');

import Point from './es6/point.es6.js';

var point1 = new Point(2,3);
var point = new Point(12,23);

var lib3 = {
  text: "i am lib file"
}


console.log(lib3.text, point.toString(), point1.toString());
