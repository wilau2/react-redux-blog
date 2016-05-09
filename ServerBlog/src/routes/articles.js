import express from  'express'
import ArticleAdapter from '../adapters/articleAdapter'
  
let router = express.Router();

let articleAdapter = new ArticleAdapter()

router.get('/', (request, response) => {
  articleAdapter.fetch(response);
});

router.post('/', (request, response) => {
  articleAdapter.add(request.body, response);
});

router.put('/:id', (request, response) => {
 	articleAdapter.update(request.params.id, request.body, response)
});

export default router
