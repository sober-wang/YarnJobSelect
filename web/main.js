var yarnjobt = new Vue({
	el: "#head_line",
	data: {
		msg: {
			User: "",
			AppType: "",
			Status: "",
			DataTime: "",
			Memory: "",
			IPAddres: "",

		},
		ShowUserInput: "",
		sList: [
			{text: "RUNNING"},
			{text: "FINISHED"},
			{text: "FAILED"},
			{text: "KILLED"}
		],
		userInputMsg:{}
	},
	methods: {
		jobSelect: function(){
			this.userInputMsg = this.msg			
			if (this.msg.IPAddres == ""){
				alert("Yarn ResourceManager 地址不能为空")
			}
			
		},
		cleanInput: function(){
			this.msg.User = ""
			this.msg.AppType = ""
			this.msg.Status = ""
			this.msg.DataTime = ""
			this.msg.Memory = ""
			this.msg.IPAddres = ""
		}
	},

})
