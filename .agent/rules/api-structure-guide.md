---
trigger: model_decision
description:  **API & Network Guide** dùng cho agent khi thực hiện các task liên quan đến **tương tác API và Network** trong hệ thống.
---

# API & NETWORK GUIDE

Mục tiêu: giúp agent **hiểu đúng luồng dữ liệu**, **chọn đúng phương thức gọi API**, và **đảm bảo hiệu năng cũng như bảo mật**.

---

## 1. Phạm vi (Scope)

Tài liệu này áp dụng cho các task:

- Tích hợp API mới
- Refactor logic gọi API
- Xử lý dữ liệu từ Server
- Định nghĩa Type và Interface cho API

❌ Không thuộc scope:

- Xử lý UI hiển thị
- Logic state đơn giản ở UI (toggle, input handling)

---

## 2. Mô hình Network (Network Architecture Model)

Chúng ta sử dụng mô hình **Hybrid** kết hợp giữa Client-side Service và Server Actions.

1. **Server Actions** (Backend-for-Frontend): Ưu tiên cho SEO, logic phức tạp, bảo mật.
2. **Client Services** (Axios): Dùng cho tương tác realtime, tracking, legacy code.

---

## 3. Folder Structure & Responsibility

### 3.1 Server Actions

**Path:** `src/lib/server-actions/`

- **Trách nhiệm**: Gọi API từ Next.js Server.
- **Thích hợp cho**:
  - Dữ liệu cần SEO (build time/server render).
  - Parallel fetching để giảm waterfall.
  - Giấu token/logic nhạy cảm.

### 3.2 Client Services

**Path:** `src/services/`

- **Trách nhiệm**: Gọi API trực tiếp từ Browser.
- **Cấu trúc**: Kế thừa `apiService` (Axios wrapper).
- **Thích hợp cho**: User interactions (Add to cart), Client-only fetiching.

### 3.3 Types & Adapters

- **Response Types**: `src/types/response/{entity}.response.ts`
- **Adapters**: `src/adapters/{entity}.adapter.ts`

---

## 4. API Call Flow chuẩn (Standard Workflow)

1. **Define Type**: Khai báo Interface cho Response trong `src/types/response`.
2. **Implement Service/Action**:
   - Server Action: `src/lib/server-actions`
   - Client Service: `src/services`
3. **Data Transformation**: Gọi Adapter để clean data.
4. **Wrap in Hook**: Tạo Custom Hook trong `src/hooks/queries` dùng React Query.
5. **Consume in UI**: Component gọi Hook, nhận `data`, `isLoading`, `error`.

---

## 5. Quy tắc Import (Import Rules)

✅ **Được import**:
- Service/Action vào Hook.
- Adapter vào Service/Action.
- Response Type vào Service/Action.

❌ **Không được import**:
- Service/Action trực tiếp vào UI Component (trừ trường hợp mutation đặc biệt, nhưng ưu tiên qua Hook).
- UI Component vào Service.

---

## 6. Naming Convention

- **Files**:
  - Service: `src/services/{entity}.api.ts`
  - Action: `src/lib/server-actions/{entity}.action.ts`
  - Type: `src/types/response/{entity}.response.ts`
- **Functions**:
  - Service: `get...`, `post...` (VD: `getProductsCollection`)
  - Server Action: `...ServerAction` (VD: `getProductsCollectionServerAction`)
  - Hook: `use...` (VD: `useProductsCollection`)

---

## 7. Error Handling

- **Server Action**: Phải catch error và trả về object error chuẩn hoặc throw để React Query bắt.
- **Axios Interceptor**: `src/utils/axios.ts` đã xử lý lỗ HTTP cơ bản (401, 500).

---

## 8. Examples

### ✅ Correct

**Hook (`use-products.ts`):**
```ts
export function useProductsCollection(slug) {
  return useQuery({
    queryKey: ['products', slug],
    queryFn: () => getProductsCollectionServerAction(slug)
  });
}
```

### ❌ Incorrect

**UI Component:**
```tsx
const data = await getProductsCollectionServerAction(slug); // Không gọi trực tiếp trong Component nếu không phải Server Component
```

---

## 9. Nguyên tắc tối thượng

> **Luôn thông qua Adapter và Custom Hook. Không gọi API raw trong UI.**

Nếu có ambiguity:
- Agent phải hỏi lại
- Không tự ý bỏ qua lớp Adapter