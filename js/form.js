// $(window).load(function () {
//   $('input[name="is_student"]').on("change", function () {
//     btnChange();
//   });
//   btnChange();
// });

// function btnChange() {
//   if($('#is_student').prop('checked')) {
//     $('#information').show();
//   } else {
//     $('#information').hide();
//   }
// }
function nameInput() {
  var _name = document.getElementById('namedata');
  _name = document.getElementById('fname').value;
  console.log(document.getElementById('fname').value);
}



document.getElementById('submit').addEventListener('click', function(){
  alert("OK DATA");
  if(document.getElementById('fname').value == '') {
    alert("Fill Your Name");
    return false;
  }
  if(document.getElementById('lname').value == '') {
    alert("Fill Your last Name");
    return false;
  }
  if(document.getElementById('phone').value == '') {
    alert("Fill Your Phone Number");
    return false;
  }
  if(document.getElementById('email').value == '') {
    alert("Fill Your Email Address");
    return false;
  }
  if(document.getElementById('confirm_email').value !== document.getElementById('email').value) {
    alert("Please Check Your Email Address");
  }
  else {
    document.getElementById('information').style.display = block;
    return true;
  }
  console.log("OK");
  nameInput();
});

