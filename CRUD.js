var arrNhanVien = [];
document.getElementById("btnThem").onclick = function () {
  document.getElementById("email").readOnly = false;
  clearForm();
};
function clearForm() {
  var form = document.getElementById("form");
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (
      element.tagName.toLowerCase() === "input" ||
      element.tagName.toLowerCase() === "select"
    ) {
      if (
        element.type === "text" ||
        element.type === "email" ||
        element.tagName.toLowerCase() === "select"
      ) {
        element.value = "";
      }
    }
  }
}
function getValueUser(event) {
  var arrInput = document.querySelectorAll("form input,form select");
  var arrError = document.querySelectorAll("form span.sp-TB");
  var nhanVien = new NhanVien();
  var isValid = true;
  console.log(arrError);
  for (var i = 0; i < arrInput.length; i++) {
    switch (arrInput[i].id) {
      case "tknv":
        isValid &=
          checkEmptyValue(arrInput[i].value, arrError[i].id) &&
          checkTaiKhoan(arrInput[i].value, arrError[i].id);
        console.log(isValid);
        break;
      case "email":
        isValid &=
          checkEmptyValue(arrInput[i].value, arrError[i].id) &&
          checkEmailValue(arrInput[i].value, arrError[i].id);
        break;
      case "name":
        isValid &=
          checkEmptyValue(arrInput[i].value, arrError[i].id) &&
          checkName(arrInput[i].value, arrError[i].id);
        break;
      case "password":
        isValid &=
          checkEmptyValue(arrInput[i].value, arrError[i].id) &&
          checkMatKhau(arrInput[i].value, arrError[i].id);
        break;
      case "datepicker":
        isValid &=
          checkEmptyValue(arrInput[i].value, arrError[i].id) &&
          checkDate(arrInput[i].value, arrError[i].id);
        break;
      case "luongCB":
        isValid &=
          checkEmptyValue(arrInput[i].value, arrError[i].id) &&
          checkSalary(arrInput[i].value, arrError[i].id);
        break;
      case "chucvu":
        isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
        break;
      case "gioLam":
        isValid &=
          checkEmptyValue(arrInput[i].value, arrError[i].id) &&
          checkTimes(arrInput[i].value, arrError[i].id);
        break;
      default:
        break;
    }
    var id = arrInput[i].id;
    console.log(arrInput[i].id + "///////////////");
    nhanVien[id] = arrInput[i].value;
  }
  if (isValid) {
    return nhanVien;
  }
}
document.getElementById("btnThemNV").onclick = function () {
  var nhanVien = getValueUser();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    clearForm();
    luuDuLieuStorage("arrNhanVien", arrNhanVien);
    hienThiDuLieu();
  }
};
function hienThiDuLieu(arr) {
  if (arr == undefined) {
    arr = arrNhanVien;
  }
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    var newNhanVien = new NhanVien();
    nhanVien = Object.assign(newNhanVien, nhanVien);
    content += `
    <tr>
      <td>${nhanVien.tknv}</td>
      <td>${nhanVien.name}</td>
      <td>${nhanVien.email}</td>
      <td>${nhanVien.datepicker}</td>
      <td>${nhanVien.chucvu}</td>
      <td>${nhanVien.tinhTongLuong()}</td>
      <td>${nhanVien.xepLoai()}</td>
      <td>
      <button onclick="xoaDuLieuNhanVien('${
        nhanVien.email
      }')" class="btn btn-danger">Xoá</button>
      <button data-target="#myModal" data-toggle="modal" onclick="getInfoUser('${
        nhanVien.email
      }')"  class="btn btn-warning ml-3">Sửa</button>
    </td>
    </tr>
    `;
  }
  //
  //
  document.getElementById("tableDanhSach").innerHTML = content;
}
function luuDuLieuStorage(key, value) {
  var stringValue = JSON.stringify(value);
  localStorage.setItem("arrNhanVien", stringValue); //key
}
function layDuLieuLocalStorage(key) {
  var dataLocal = localStorage.getItem("arrNhanVien");
  if (dataLocal) {
    var convertData = JSON.parse(dataLocal);
    arrNhanVien = convertData;
    hienThiDuLieu();
  } else {
  }
}
function xoaDuLieuNhanVien(email) {
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].email == email) {
      index = i;
    }
  }
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    luuDuLieuStorage("arrNhanVien", arrNhanVien);
    hienThiDuLieu();
  }
}
layDuLieuLocalStorage();

function getInfoUser(email) {
  var nhanVienIndex = {};
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    if (nhanVien.email == email) {
      nhanVienIndex = nhanVien;
    }
  }
  var arrInput = document.querySelectorAll("form input, form select");
  console.log(arrInput);
  for (var z = 0; z < arrInput.length; z++) {
    var htmlDom = arrInput[z];
    var id = htmlDom.id;
    htmlDom.value = nhanVienIndex[id];
  }

  document.getElementById("email").readOnly = true;
}
function updateValueUser() {
  var nhanVien = getValueUser();
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (nhanVien.email == arrNhanVien[i].email) {
      arrNhanVien[i] = nhanVien;
    }
  }
  luuDuLieuStorage("arrNhanVien", arrNhanVien);
  clearForm();
  hienThiDuLieu();
}
document.getElementById("btnCapNhat").onclick = updateValueUser;
