const userName = document.getElementById('userName'),
    userPassword = document.getElementById('userPassword'),
    userPasswordConfirm = document.getElementById('userPasswordConfirm'),
    logIn = document.getElementById('logIn');


function checkContent() {
	
	if(!this.value){
		if(this == userPasswordConfirm){
			showLeftTip(this, 'Passwords not match')
		} 	else {
				showLeftTip(this, 'Fill that field');
		};
	}		else {

	}

};

function showLeftTip(node, content){
	var leftTip = node.parentNode.getElementsByClassName('leftTip')[0];
	leftTip.style.display = 'inline-block';
	leftTip.firstElementChild.innerHTML = content;
  node.style.border = '2px solid #d06357'
};

function hideLeftTip(){
	var leftTip = this.parentNode
		.getElementsByClassName('leftTip')[0];
	leftTip.style.display = 'none';
    this.style.border = '2px solid grey';
}

userName.addEventListener('blur', checkContent);
userPassword.addEventListener('blur', checkContent);
userPasswordConfirm.addEventListener('blur', checkContent);

userName.addEventListener('focus', hideLeftTip);
userPassword.addEventListener('focus', hideLeftTip);
userPasswordConfirm.addEventListener('focus', hideLeftTip);

