var yarnjobt = new Vue({
	el: "#head_line",
	data: {
		msg: {
			User: "",
			AppType: "",
			Status: "",
			DataTime: "",
			Memory: "",
			Env: "",

		},
		ShowUserInput: "",
		typeList: [
				{text: "Spark"},
				{text: "Flink"},
				{text: "MapReduce"}
		],
		sList: [
			{text: "RUNNING"},
			{text: "FINISHED"},
			{text: "FAILED"},
			{text: "KILLED"}
		],
		envList:[
			{text: "Dev"},
			{text: "Qa"},
			{text: "Pro"}
		],
		tableHead: [
		{User: "用户名",AppType: "应用类型",DataTime: "时间",Memory: "内存使用",Env: "环境"}
		],
		userInputMsg:[],
		responseMsg: []
	},
	methods: {
		jobSelect: function(){
			var p = /[a-zA-Z]/i;
			switch(true) {
				case (this.msg.User == ""):
					alert("[ ERROR ] 用户不能为空")
					console.log(this.msg)
					this.cleanInput()
					break
				case (this.msg.Env == ""):
					alert("[ ERROR ]Yarn ResourceManager 环境不能为空")
					this.cleanInput()
					break
				case (p.test(this.msg.Memory)):
					alert("[ ERROR ] Memory 不能包含字母")
					this.cleanInput()
					break
				default:
					alert("Welcome to Yarn Select Job")
					console.log(this.msg)
					this.userInputMsg.push(this.msg)
			}
			var userInputDate = new Date(this.msg.DataTime).getTime()
			console.log("This is now time :" + userInputDate)
			
			axios
				.get("/selectApp/?env=" + this.msg.Env)
				.then(function(response){
					console.log(response.data)
					this.responseMsg = response.data['app']
					console.log(this.responseMsg)
					})
		},
		cleanInput: function(){
			this.msg.User = ""
			this.msg.AppType = ""
			this.msg.Status = ""
			this.msg.DataTime = ""
			this.msg.Memory = ""
			this.msg.Env = ""

			this.userInputMsg = []
		},

	}

})
