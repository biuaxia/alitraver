const db = wx.cloud.database()
const {
	log
} = console

var home = function(collectionName) {
	return new Promise((resolve, reject) => {
		const collectionReq = db.collection(collectionName)
		collectionReq.get()
			.then((res) => {
				resolve(res)
			})
			.catch((err) => {
				reject(err)
			})
	})
}

var homeList = function(collectionName, pageNum, pageSize) {
	let finalSize = pageNum * pageSize

	log(`finalSize: ${finalSize}, pageSize: ${pageSize}`)

	return new Promise((resolve, reject) => {
		const collectionReq = db.collection(collectionName)
			.skip(finalSize)
			.limit(pageSize)
		collectionReq.get()
			.then((res) => {
				resolve(res)
			})
			.catch((err) => {
				reject(err)
			})
	})
}

var homeListCount = function(collectionName) {
	return new Promise((resolve, reject) => {
		const collectionReq = db.collection(collectionName).count()
			.then((res) => {
				resolve(res)
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export {
	home,
	homeList,
	homeListCount
}
