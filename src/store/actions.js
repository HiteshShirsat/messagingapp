export function setChatUser(x)
{
	return dispatch=>{
				dispatch({type:"start chat",payload:x})
				// this.history.push("/chat")
				console.log(this)
				return
			}
}
export function sendMessage(x)
{
	return dispatch=>dispatch({type:"send message",payload:x}) 
}
export function inputedit(col,val)
{
	return dispatch=>dispatch({type:"input edit",payload:{col:col,val:val}})
}
export function dropdownToggle()
{
	return dispatch=>dispatch({type:"show hide dropdown"})
}
export function selectUser(x)
{
	return dispatch=>dispatch({type:"select user",payload:x})
}
export function search(x)
{
	return dispatch=>dispatch({type:"search",payload:x})
}

export function edit(x)
{
	return dispatch=>dispatch({type:"edit",payload:x})
}

export function hidemodal(x)
{
	return dispatch=>dispatch({type:"hide modal"})
}
export function openpopup(x)
{
	return dispatch=>dispatch({type:"open popup"})
}

export function updateedit()
{

	return dispatch=>dispatch({type:"update edit"})
}
export function newContact(x)
{

	return dispatch=>dispatch({type:"new contact save",payload:x})
}
export function del(x)
{
	return dispatch=>dispatch({type:"delete contact",payload:x})
}
