const db = wx.cloud.database()
const {log} = console

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

export {
	home
}
