---
trigger: model_decision
description: UI Workspace được sử dụng khi task chủ yếu liên quan đến giao diện và cấu trúc hiển thị, không yêu cầu xử lý nghiệp vụ hay dữ liệu ở mức domain.
---

# UI WORKSPACE – V2 SECTIONS

Tài liệu này định nghĩa **UI Workspace** dùng cho agent khi thực hiện các task liên quan đến **xây dựng giao diện (UI)** trong project hiện tại, dựa trên cấu trúc thư mục `src/sections/v2`.

Mục tiêu: giúp agent **hiểu đúng kiến trúc UI**, **đặt code đúng chỗ**, và **không vượt ranh giới trách nhiệm**.

---

## 1. Phạm vi (Scope)

UI Workspace chỉ áp dụng cho các task:

- Build Page View
- Build Section UI
- Build Component UI
- Chỉnh layout, markup, styling

❌ Không thuộc scope:

- Fetch API
- Business logic phức tạp
- State management ở mức domain
- Validate dữ liệu, rule nghiệp vụ

---

## 2. Mô hình tổ chức UI (UI Architecture Model)

UI trong `v2` được tổ chức theo mô hình **Feature-based + Page → Section → Component**.

Thứ tự phân cấp:

1. **Page / Domain** – Đại diện cho một trang hoàn chỉnh
2. **Section** – Một khối UI độc lập trong page
3. **Component** – Thành phần UI nhỏ phục vụ section

---

## 3. Folder Structure & Responsibility

### 3.1 Root Level – Page / Domain

**Path:**

```
src/sections/v2/<page-name>/
```

Ví dụ: `collection`, `product-detail`, `cart`

#### Cấu trúc:

```
<page-name>/
├── index.ts
├── view/
│   └── <page>-page-view.tsx
└── sections/
```

#### Trách nhiệm:

##### `index.ts`

- Entry point của page
- Chỉ export **Page View Component**

##### `view/`

- Chứa **Main Page View Component**
- Chịu trách nhiệm:
  - Layout tổng thể của page
  - Sắp xếp thứ tự các Section
  - Truyền props xuống Section

🚫 Không được:

- Fetch API
- Xử lý business logic
- Xử lý state phức tạp

---

### 3.2 Section Level – UI Block

**Path:**

```
src/sections/v2/<page-name>/sections/<section-name>/
```

#### Cấu trúc:

```
<section-name>/
├── view/
│   └── <section>-section-view.tsx
├── components/
│   ├── <component>.tsx
│   └── index.ts
└── index.ts (optional)
```

#### Trách nhiệm:

##### `view/`

- Component chính của Section
- Chịu trách nhiệm:
  - Layout nội bộ section
  - Điều phối các component con
  - Logic hiển thị đơn giản (if/else, empty state)

🚫 Không được:

- Gọi API
- Chứa business logic domain

##### `components/`

- Các component **chỉ dùng nội bộ cho section**
- Atomic / sub-components

Đặc điểm:

- Không tái sử dụng ngoài section cha
- Nhận data qua props
- UI thuần

---

## 4. Import Rules (Bắt buộc tuân thủ)

### 4.1 Page View

✅ Được import từ:

- `sections/<section-name>`

❌ Không được import từ:

- Logic layer
- Service layer

---

### 4.2 Section View

✅ Được import từ:

- `./components`
- Shared UI (nếu có, theo global rule)

❌ Không được import từ:

- API / services
- Hooks xử lý business logic

---

### 4.3 Section Components

✅ Được import từ:

- UI primitives
- Helper UI đơn giản (format, className)

❌ Không được import từ:

- Section khác
- Page khác
- API / services

---

## 5. Quy tắc tạo file & folder

- Không tạo page/section mới nếu chưa được yêu cầu
- Mỗi component:
  - 1 file `.tsx`
  - Tên file trùng tên component
- Không tạo component dùng chung trong `components/` của section
- Component mới chỉ được implement vào thư mục `src/components/v2` (trừ khi có yêu cầu đặc biệt)

---

## 6. Naming Convention

- Page View: `<page>-page-view.tsx`
- Section View: `<section>-section-view.tsx`
- Component: PascalCase
- Folder section: kebab-case

Ví dụ:

- `products-collection-section-view.tsx`
- `ProductList.tsx`

---

## 7. UI Rules bắt buộc

- Component là function component
- Props phải có type rõ ràng
- Không dùng `any`
- Không mutate props
- Không xử lý side-effect
- Ưu tiên sử dụng component trong src/components/v2/

---

## 8. Examples

### ✅ Correct

```
src/sections/v2/collection/sections/products-collection/
└── view/products-collection-section-view.tsx
```

→ Nhận data từ page, render layout

---

### ❌ Incorrect

```
products-collection-section-view.tsx
```

→ Fetch API trực tiếp trong section

---

## 9. Task Input Requirement (Khi giao task cho agent)

Khi sử dụng UI Workspace, task **phải cung cấp**:

- Target path (file/folder)
- Page / Section liên quan
- Data input (props)
- State cần xử lý (loading / empty / error nếu có)

---

## 10. Agent Self-check (Bắt buộc trước khi output)

-

---

## 11. Nguyên tắc tối thượng

> **Follow codebase hiện tại trước, best practice sau.**

Nếu có ambiguity:

- Agent phải hỏi lại
- Không tự suy đoán kiến trúc