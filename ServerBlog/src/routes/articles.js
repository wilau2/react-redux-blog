import express from  'express'
  
let router = express.Router();

const articleCollectionName = 'articles';

router.get('/', function(request, response) {
  //TBD
  console.log("not implemented yet")
  console.log("will2")
});

router.post('/', function(request, response) {
 	//TBD
  console.log("not implemented yet")
});

router.put('/:id', function(request, response) {
 	//TBD
  console.log("not implemented yet")
  console.log("asd")
});

export default router
