'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var articleCollectionName = 'articles';

router.get('/', function (request, response) {
  //TBD
  console.log("not implemented yet");
  console.log("will2");
});

router.post('/', function (request, response) {
  //TBD
  console.log("not implemented yet");
});

router.put('/:id', function (request, response) {
  //TBD
  console.log("not implemented yet");
  console.log("asd");
});

exports.default = router;