var yarnjobt = new Vue({
	el: "#head_line",
	data: {
		msg: {
			User: "",
			AppType: "",
			Status: "",
			DataTime: "",
			Memory: "",
			IPAddres: ""
		},
		T: ""
	},
	methods: {
		job_select: function(){
			//console.log(this.msg)
			this.T = "应用所属用户：" + this.msg.User + "     " + "应用类型：" + this.msg.AppType
			
		}
	}
})

