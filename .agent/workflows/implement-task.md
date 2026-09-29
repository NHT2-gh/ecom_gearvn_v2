---
description: Workflow phân tích yêu cầu, tra cứu rules và lập kế hoạch implement chi tiết (Implementation Plan).
---

# Workflow: Implement Task Planning

Workflow này được thiết kế để đảm bảo mọi yêu cầu coding đều tuân thủ chặt chẽ các guide đã thiết lập (`code-ui-guide`, `logic-implementation-guide`, `api-structure-guide`).

Agent sẽ không viết code ngay lập tức. Thay vào đó, Agent sẽ phân tích, lập kế hoạch và yêu cầu review trước.

## Step 1: Phân tích Yêu cầu & Xác định Context

Đọc request của user và xác định loại task (Domain):

1.  **UI Task**: Liên quan đến giao diện, CSS, layout, component hiển thị.
    *   *Guide cần đọc*: `.agent/rules/code-ui-guide.md`
2.  **Logic Task**: Hook, State Management, xử lý dữ liệu.
    *   *Guide cần đọc*: `.agent/rules/logic-implementation-guide.md`
3.  **API/Network Task**: Gọi API, Server Actions, Services.
    *   *Guide cần đọc*: `.agent/rules/api-structure-guide.md`
4.  **Mixed Task**: Kết hợp nhiều loại trên.
    *   *Đọc tất cả guide liên quan.*

## Step 2: Tra cứu Rules (Rules Lookup)

Sử dụng tool `view_file` để đọc nội dung các file guide đã xác định ở Step 1.
*Lưu ý: Phải đọc kỹ các phần "Responsibility", "Folder Structure", và "Rules".*

## Step 3: Lập Kế hoạch (Implementation Plan)

Dựa trên yêu cầu và rules đã đọc, hãy soạn thảo một **Implementation Plan** theo template dưới đây.

**Lưu ý quan trọng**:
*   Xác định đúng **Target Location** (folder/file) theo quy chuẩn Folder Structure.
*   Liệt kê **Rule Reminder** cụ thể trích xuất từ guide (VD: "Không gọi API trong UI View").
*   Tạo **Self-check checklist** cụ thể cho task.

### Template Bắt buộc

```markdown
# IMPLEMENTATION PLAN

### WORKSPACE
(UI WORKSPACE / LOGIC WORKSPACE / API WORKSPACE / MIXED)

### TARGET LOCATION
(Danh sách các file/folder chính sẽ được tạo hoặc chỉnh sửa)
- src/...

### TASK SUMMARY
(Mô tả tóm tắt task cần làm)

### TECHNICAL APPROACH
(Cách tiếp cận kỹ thuật, áp dụng pattern nào trong guide? VD: Custom Hook, Server Action, Adapter Pattern...)

### RULE REMINDER
(Các quy tắc quan trọng nhất từ guide cần ghi nhớ cho task này)
- [Rule 1 từ guide]
- [Rule 2 từ guide]

### STEP-BY-STEP PLAN
1. [ ] ...
2. [ ] ...

## Self-check before output
(Checklist để agent tự kiểm tra trước khi finish task)
- [ ] File đặt đúng folder structure
- [ ] Tuân thủ naming convention
- [ ] Import đúng tầng (Layer)
- [ ] ...
```

## Step 4: Chờ Phản hồi (User Review)

Gửi Implementation Plan cho user và **DỪNG LẠI** chờ xác nhận (hoặc feedback điều chỉnh).
Tuyệt đối không viết code implement khi chưa có sự đồng ý của User.

## Step 5: Thực thi (Implementation)

Sau khi User đồng ý:
1.  Thực hiện lần lượt các bước trong **STEP-BY-STEP PLAN**.
2.  Sau khi viết code mỗi file, tự kiểm tra lại với mục **Self-check**.
