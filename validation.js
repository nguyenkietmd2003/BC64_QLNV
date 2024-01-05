function checkEmailValue(value, errorId) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var checkEmail = regexEmail.test(value);
  if (checkEmail) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML =
      "Vui lòng nhập đúng định dạng email";
    return false;
  }
}
function checkEmptyValue(value, errorId) {
  if (value) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML = "Vui Lòng Không Bỏ Trống";
    return false;
  }
}

function checkName(value, errorId) {
  const regex = /^[a-zA-Z]+$/;
  var checkHoTen = regex.test(value);
  if (checkHoTen) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML =
      "Vui Lòng Nhập Lại (Tài khoản chỉ chứa chữ cái và không có khoảng trắng)";
    return false;
  }
}
function checkTaiKhoan(value, errorId) {
  const regex = /^[a-zA-Z]*\d{0,6}$/;
  var checkTaiKhoan = regex.test(value);
  if (checkTaiKhoan) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML =
      "Vui lòng nhập lại (Tài Khoản chỉ tối đa 6 ký tự số và không có khoảng trắng)";
    return false;
  }
}
function checkMatKhau(value, errorId) {
  const regex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,10}$/;

  var checkMatKhau = regex.test(value);
  if (checkMatKhau) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML =
      "Vui lòng nhập lại (Mật Khẩu từ 6 đến 10 kí tự, phải có 1 số,1 chữ in hoa,1 kí tự đặt biệt)";
    return false;
  }
}
function checkDate(value, errorId) {
  const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

  var checkdate = regex.test(value);
  if (checkdate) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML =
      "Vui lòng Chọn Lại (Định dạng mm/dd/yyyy)";
    return false;
  }
}
function checkSalary(value, errorId) {
  var luong = value * 1;
  if (luong >= 1000000 && luong <= 20000000) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML =
      "Vui lòng Nhập Lại (Số Trong Khoảng 1.000.000 đến 20.000.000)";
    return false;
  }
}
function checkTimes(value, errorId) {
  var giolam = value * 1;
  if (giolam >= 80 && giolam <= 200) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML =
      "Vui lòng Nhập Lại (Số Trong Khoảng 80 đến 200)";
    return false;
  }
}
