class ValidAdapter {
	validReturnValue(returnValue, error){
		error ? 
				returnValue.json({"msg":"error"}):
		 		returnValue.json({"msg":"ok"})
	}
}

export default ValidAdapter