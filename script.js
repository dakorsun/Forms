//Notification loader blanks

function leftTipCreate(node, content) {
  var parent = node.parentNode;
  var leftTip = document.createElement('div');
  var leftTipChild = document.createElement('div');

  parent.insertBefore(leftTip, node);
  leftTip.appendChild(leftTipChild);
  
  leftTip.setAttribute('class', 'leftTip');
  leftTipChild.setAttribute('class', 'leftTipChild');
  leftTip.innerHtml = content;
};



function checkFilledPseudo (field) {

  console.log('sasi');


  field.addEventListener('blur', checkFilled(field))

};

function checkFilled (field) {

console.log('eщe sasi');

  if(!field.innerHTML) {
    leftTipCreate(field, 'Fill that field')
    field.style.border = '2px solid #d06357';
  };

};

  
function validate(){



};

var userName = document.getElementById('userName'),
    userPassword = document.getElementById('userPassword'),
    userPasswordConfirm = document.getElementById('userPasswordConfirm'),
    logIn = document.getElementById('logIn');


userName.addEventListener('focus', checkFilledPseudo(userName));
userPassword.addEventListener('focus', checkFilledPseudo(userPassword));
userPasswordConfirm.addEventListener('focus', checkFilledPseudo(userPasswordConfirm));
logIn.addEventListener('focus', validate());




// function focus() {
// console.log('cu cu');
// };
// userName.addEventListener('focus', focus);
