
function tong() {
  //Đầu vào
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;

  //Xử lý

  var total = number1 * number2;
  var result = "<p>Lương nhân viên là: " + total + "</p>";

  //Đầu ra
  document.getElementById("showInfoTotal").innerHTML = result;

}
function trungbinh(){
  //Đầu vào
  var number3 = document.getElementById("number3").value*1;
  var number4 = document.getElementById("number4").value*1;
  var number5 = document.getElementById("number5").value*1;
  var number6 = document.getElementById("number6").value*1;
  var number7 = document.getElementById("number7").value*1;
  //Xử lý
  var trungbinh = (number3 + number4 + number5 + number6 + number7)/5;
  var Ave="<p>Trung bình cộng 5 số là "+ trungbinh + "</p>";
  //Đầu ra
  document.getElementById("showAve").innerHTML = Ave;

}
function money(){
//Đầu vào
var number8=document.getElementById("number8").value*1;
//Xử lý
var tien = number8 * 23500;
var quydoi = "<p> Tiền quy đổi là " + new Intl.NumberFormat('vn-VN').format(tien) + "</p>"
//Đầu ra
document.getElementById("showInfoMoney").innerHTML = quydoi;
}
function chuvidientich(){
  // Đầu vào
  var number9=document.getElementById("number9").value*1;
  var number10=document.getElementById("number10").value*1;
  //Xử lý
  var CV = (number9 + number10)*2;
  var DT = number10 * number10;
  var chuvidientich ="<p> Chu vi là " + CV +  "<p>" + " Diện tích là " + DT + "</p>";
  // Đầu ra
  document.getElementById("showInfoCVDT").innerHTML = chuvidientich;
}
function kyso(){
  // Đầu vào 
  var number11=document.getElementById("number11").value*1;
  // Xử lý
  var hangChuc =Math.floor(number11%100/10);
  var hangDV =number11%10;
  var tongkyso= hangChuc + hangDV;
  var ketqua = "<p> Tổng 2 ký số là: " + tongkyso + "</p>";
  //Đầu ra
  document.getElementById("showInfoKySo").innerHTML = ketqua;
}