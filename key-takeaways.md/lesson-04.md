# Các kiến thức tổng hợp trong lesson 04

## 1. JavaScript Object: 
### Định nghĩa:  
Object (Đối tượng) là kiểu dữ liệu dùng để lưu trữ một tập hợp các cặp key – value (khoá – giá trị).

```js
let traiCay = new Array("Táo", "Cam", "Xoài");
```


### Quy tắc đặt tên: 
- Key thường là string, không cần đặt trong dấu ngoặc kép nếu là tên hợp lệ (không có dấu cách, ký
tự đặc biệt).
- Nếu key có dấu cách hoặc ký tự đặc biệt => "`bắt buộc đặt trong ngoặc kép`".

### Tổng kết: 

| Lệnh | Chức năng | Ví dụ
|-------|-----------|--------
| `Khai báo` | {} hoặc new Object() | let obj = { a: 1 } |
| `Truy xuất` | .key hoặc ["key"] | obj.a hoặc obj["a"]  |
| `Thêm / Sửa` | obj.key = value | obj.b = 2 |
| `Xoá` | delete obj.key | delete obj.a  |
| `Lồng nhau` | value là Object | obj.x.y.z  |



## 2. JavaScript Array 
### Định nghĩa:  
Array (Mảng) là kiểu dữ liệu dùng để lưu trữ một danh sách có thứ tự các giá trị.
```js
let xe = new Object();
xe.hang = "Toyota";
xe.mau = "Trắng";
xe.namSanXuat = 2023;
```

### Tổng kết: 

| Lệnh | Chức năng | Ví dụ
|-------|-----------|--------
| `Khai báo` | [] | let obj = let arr = [1, 2, 3] |
| `Truy xuất` | arr[index] | arr[0] => 1  |
| `Đếm phần tử` | arr.length | 3 |
| `Thêm cuối` | arr.push(val) | arr.push(4)  |
| `Xoá cuối` | arr.pop() | arr.pop()  |
| `Duyệt` | for , for...of , .forEach() | arr.forEach()  |


## 3. JavaScrip Function
### Định nghĩa:  
Function (Hàm) là một khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết lại code.

```js
function tenHam() {
// các dòng lệnh bên trong
}
function — từ khoá bắt buộc
tenHam — tên do bạn đặt
{} — thân hàm, chứa code sẽ thực thi

Ví dụ: 

function ngoiSao() {
console.log("⭐⭐⭐⭐⭐");
}
function xinChao() {
console.log("Hello World!");
}
```
### Quy tắc đặt tên: 
- Dùng camelCase: tinhTong , layDuLieu , hienThiSanPham
- Nên bắt đầu bằng động từ: tinh... , lay... , hienThi... , kiemTra...
- Tên phải diễn tả hành động mà hàm thực hiện
### Tổng kết: 

| Khái niệm | Cú pháp | Ý nghĩa
|-------|-----------|--------
| `Khai báo` | function tenHam() { ... } | Tạo hàm, chưa chạy |
| `Gọi hàm` | tenHam() | Chạy code bên trong  |
| `Tham số` | function tenHam(a, b) { ... } | "Nguyên liệu" truyền vào |
| `Trả kết quả` | return giaTriTraVe | Gửi kết quả về nơi gọi  |