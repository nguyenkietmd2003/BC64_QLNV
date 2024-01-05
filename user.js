function NhanVien(
  tknv,
  name,
  email,
  password,
  datepicker,
  luongCB,
  chucvu,
  gioLam
) {
  this.tknv = tknv;
  this.name = name;
  this.email = email;
  this.password = password;
  this.datepicker = datepicker;
  this.luongCB = luongCB;
  this.chucvu = chucvu;
  this.gioLam = gioLam;

  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "Xuất Sắc";
    } else if (this.gioLam >= 176) {
      return "Giỏi";
    } else if (this.gioLam >= 160) {
      return "Khá";
    } else {
      return "Trung Bình";
    }
  };
  this.tinhTongLuong = function () {
    let tongLuong = 0;
    switch (this.chucvu) {
      case "Sếp":
        tongLuong = this.luongCB * 3;
        break;
      case "Trưởng Phòng":
        tongLuong = this.luongCB * 2;
        break;
      case "Nhân Viên":
        tongLuong = this.luongCB;
        break;
      default:
        console.log("Chức vụ không hợp lệ");
    }
    return tongLuong;
  };
}
