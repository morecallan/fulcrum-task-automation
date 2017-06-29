$(document).ready(function(){

  const cheat = () => {
    let authCode = $("#authCode").val();
    let serialNum = $("#serialNum").val();
    if (authCode == null || authCode == undefined || authCode == "") {
      Materialize.toast("Yo fill in the auth code field.", 4000)
    } else if (serialNum == null || serialNum == undefined || serialNum == ""){
      Materialize.toast("Yo fill in the serial num field.", 4000)
    } else {
      console.log(authCode, serialNum)
      var myData = {authCode, serialNum}
      $.ajax({
        method: "POST",
        url: "./api/test",
        data: myData
      }).done(() => {
        console.log("yes")
      }).fail(() => {
        console.log("no")
      })
    }
  }

  $("#cheatButton").click(cheat)


})
