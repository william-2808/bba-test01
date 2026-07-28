# Key Takeaways - Lesson 02

## Git

Git giúp quản lý lịch sử thay đổi của code.

## Các vùng trong Git

- Working Directory
- Staging Area
- Repository

## Các lệnh cơ bản

### `git init`

Khởi tạo Git cho project.

### `git add <file_1> <file_2>`

Thêm file vào vùng staging.

### `git add .`

Thêm tất cả file thay đổi vào vùng staging.

### `git commit -m "message"`

Lưu thay đổi thành một version mới.

### `git log`

Kiểm tra lịch sử commit.

---

## Workflow

```text
Working Directory
=>
   git add
=>
 Staging Area
=>
 git commit
=>
  Repository
```

## Summary

| Lệnh | Chức năng |
|-------|-----------|
| `git init` | Khởi tạo Git cho project |
| `git add` | Thêm file vào Staging Area |
| `git commit` | Tạo version mới |
| `git log` | Xem lịch sử commit |