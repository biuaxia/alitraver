const db = wx.cloud.database()

var home = function(a) {
	return new Promise((resolve, reject) => {
		const tabReq = db.collection('tabs')
		tabReq.get()
			.then((res) => {
				log(res)
			})
			.catch((err) => {
				log(err)
			})
	})
}

export {
	home
}
