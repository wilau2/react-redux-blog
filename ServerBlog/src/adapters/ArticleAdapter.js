import mongojs from 'mongojs'
import ValidAdapter from './ValidAdapter'

const url = 'mongodb://localhost:27017/blog';
const articleCollectionName = 'articles';

class ArticleAdapter extends ValidAdapter {
	
	constructor(){
		super()
		this.db = mongojs(url, [articleCollectionName])
		this.validReturnValue.bind(this)
	}

	fetch(returnValue){
		this.db.articles.find((err, docs) => 
			this.validReturnValue(returnValue.json(docs), err)
		)
	}

	add(articleBody, returnValue){
		this.db.articles.insert(articleBody, (err) =>
			this.validReturnValue(returnValue, err)
		)
	}

	update(articleId, articleBody, returnValue){
		this.bd.articles.update({articleId: articleId}, {$set: articleBody}, {upsert: true}, (err) =>
			this.validReturnValue(returnValue, err)
		)
	}

}

export default ArticleAdapter