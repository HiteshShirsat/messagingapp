const intial={
	users:require("./users"),
	messages:require("./messages"),
	user:{},
	modal:false,
	popup:"bad",
	message:"",
	status:false,
	showdropdown:false,
	f1:"",
	editUser:{id:0,name:"",email:""},
	chatuser:{},
}

const reducer=function(state=intial,action){
	switch(action.type)
	{
		case "show hide dropdown":
			return {
				...state,
				showdropdown:!state.showdropdown
			}
		case "select user":
			return {
				...state,
				user:action.payload,
				showdropdown:false,
				modal:false,
				popup:"bad",
			}
		case "search":
			return {
				...state,
				f1:action.payload,
				showdropdown:false,
				modal:false,
				popup:"bad",
			}
		case "edit":
			return {
				...state,
				editUser:action.payload,
				showdropdown:false,
				modal:true,
				popup:"good",
			}
		case "hide modal":
			return {
				...state,
				editUser:{id:0,name:"",email:"",phone:""},
				showdropdown:false,
				popup:"bad",
				modal:false
			}
		case "open popup":
			return {
				...state,
				editUser:{},
				showdropdown:false,
				popup:"good",
				modal:false
			}
			
		case "input edit":
			return {
				...state,
				editUser:{...state.editUser,[action.payload.col]:action.payload.val}
			}
		case "update edit":
			return {
				...state,
				users:state.users.map(x=>x.id===state.editUser.id?(state.editUser):x),
				editUser:{id:0,name:"",email:"",phone:""},
				modal:false,
				popup:"good",
				showdropdown:false
			}
			
		case "new contact save":
			return {
				...state,
				users:state.users.concat([action.payload]),
				editUser:{id:0,name:"",email:"",phone:""},
				modal:false,
				popup:"bad",
				showdropdown:false
			}
		case "delete contact":
			return {
				...state,
				users:state.users.filter(x=>x.id!==action.payload),
				modal:false,
				popup:"bad",
				showdropdown:false,
				user:state.users.length>0?(state.user):{id:0,name:"",email:"",phone:""}
			}
			
		case "start chat":
			return {
				...state,
				chatuser:action.payload
			}
			
		case "send message":
			console.log(action.type,state.messages,action.payload)	
			return {
				...state,
				messages:[...state.messages,{id:state.messages.length+1,from:state.user.id,to:state.chatuser.id,message:action.payload}]
			}
			
			
			
			
		default:
			return state
	}
}
export default reducer;