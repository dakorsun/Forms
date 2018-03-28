//Notification loader blanks

var leftTipCreate = function (node, content) {
  var parent = node.parentNode;
  var leftTip = document.createElement('div');
  var leftTipChild = document.createElement('div');

  parent.insertBefore(leftTip, node);
  leftTip.appendChild(leftTipChild);
  
  leftTip.setAttribute('class', 'leftTip');
  leftTipChild.setAttribute('class', 'leftTipChild');
  leftTip.innerHtml = content;
};



var checkFilledPseudo = function () {

  console.log('sasi');


  this.addEventListener('blur', checkFilled);

};

var checkFilled = function () {

console.log('eщe sasi');

  if(!this.innerHTML) {
    leftTipCreate(this, 'Fill that field')
    this.style.border = '2px solid #d06357';
  };

};

  
function validate(){




};

var userName = document.getElementById('userName'),
    userPassword = document.getElementById('userPassword'),
    userPasswordConfirm = document.getElementById('userPasswordConfirm'),
    logIn = document.getElementById('logIn');


userName.addEventListener('focus', checkFilledPseudo);
userPassword.addEventListener('focus', checkFilledPseudo);
userPasswordConfirm.addEventListener('focus', checkFilledPseudo);
logIn.addEventListener('focus', validate());



// function focus() {
// console.log('cu cu');
// };
// userName.addEventListener('focus', focus);
