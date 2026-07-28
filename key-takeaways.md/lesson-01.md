# Các kiến thức tổng hợp trong lesson 01

## 1. Git & GitHub: 
### Định nghĩa:  
- Git: quản lý source code
-GitHub: chia sẻ code, làm việc nhóm

### Cấu hình Git:  
```js
Trước khi làm việc với Git, cần một số cấu hình mặc định:
● Config username (tên người dùng):
○ git config --global user.name “<tên bạn>”
● Config email (địa chỉ email):
○ git config --global user.email “<email của bạn>”
● Config branch default (nhánh mặc định):
○ git config --global init.defaultBranch main
```

## 2. Cài đặt playwright: 

- Tạo thư mục: demo_1
- Mở thư mục = terminal git bash 
- Chạy lệnh: npm init playwright@latest 
- Ấn enter liên tục


### 3. Đưa code lên GitHub: 

#### Trước khi làm việc với Git, cần một số cấu hình mặc định:
##### Khởi tạo repo local:
- git init
##### Tạo repo GitHub và liên kết tới repo local:
- git remote add origin <url>
##### Thêm file vào staging
- git add .
##### Commit file
- git commit -m ”<message>”
##### Push code
- git push origin main