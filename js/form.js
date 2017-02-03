function sendForm() {
  var HIDDEN_CLASS = 'hidden';
  var message = document.getElementById('message');
  var success = document.querySelector('.success');
  var fail = document.querySelector('.fail');
  var form = document.forms[0];
  var btn = document.getElementById('submit');
  var request = new XMLHttpRequest();
  request.open('POST', '//formspree.io/wan-xruner@mail.ru', true);
  request.setRequestHeader('accept', 'application/json');
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    var formData = new FormData(form);
    request.send(formData);
    request.onreadystatechange = function() {
      form.classList.add(HIDDEN_CLASS);
      message.classList.remove(HIDDEN_CLASS);
      if (request.readyState === 4 && request.status === 200) {
        success.classList.remove(HIDDEN_CLASS);
        fail.classList.add(HIDDEN_CLASS);
      }
      else {
        success.classList.add(HIDDEN_CLASS);
        fail.classList.remove(HIDDEN_CLASS);
      }
    }
  });
}
sendForm();
