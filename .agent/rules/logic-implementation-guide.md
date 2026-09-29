---
trigger: model_decision
description: Hướng dẫn này mô tả các nguyên tắc và pattern chuẩn để implement logic trong dự án, đảm bảo tính nhất quán, hiệu suất và dễ bảo trì.
---

# LOGIC IMPLEMENTATION Guide

## 1. Kiến trúc Tổng quan (Layered Architecture)
Hệ thống tuân theo mô hình phân lớp như sau:
`UI (View)` -> `Custom Hook` -> `Data Layer (Query/State)` -> `Network Layer (Action/Service)` -> `Adapter` -> `Model`

## 2. UI & Component Logic
- **View Components**: Chỉ chứa logic hiển thị (render logic). Không viết logic xử lý dữ liệu phức tạp trực tiếp trong View.
- **Custom Hooks**: Tách biệt logic nghiệp vụ ra khỏi UI.
  - Ví dụ: Logic lọc sản phẩm nên nằm trong `useProductFilter`, không nằm trong `ProductsCollectionView`.
  - Hook nên trả về data và action handlers (ví dụ: `filters`, `updateFilter`, `clearFilters`).

## 3. State Management
- **Server State**: Sử dụng **TanStack Query (React Query)** cho mọi dữ liệu từ server.
  - Không lưu data API vào `useState` hay Redux/Zustand trừ khi cần biến đổi đặc biệt.
  - Sử dụng `useUnknownQuery` hoặc `useInfiniteQuery`.
- **Client Global State**: Sử dụng **Zustand** cho state toàn cục (Cart, Auth, UI Settings).
- **Local State**: Sử dụng `useState`/`useReducer` cho state cục bộ của component.
- **URL State**: Đồng bộ state quan trọng (Filters, Search Query, Tabs) lên URL để hỗ trợ share link và reload.

## 4. Data Processing (Adapter Pattern)
Luôn sử dụng **Adapter** để chuyển đổi dữ liệu từ API Response sang Domain Model trước khi đưa vào component.
- **Quy tắc**:
  - `*.response.ts`: Định nghĩa kiểu dữ liệu trả về nguyên bản từ API.
  - `src/types/v2/*.ts`: Định nghĩa kiểu dữ liệu chuẩn dùng trong App.
  - `sw/adapters/*.adapter.ts`: Hàm chuyển đổi `Response -> Model`.
- **Lợi ích**: Giúp UI không bị gãy khi API thay đổi cấu trúc, chỉ cần sửa Adapter.

## 5. Performance
- Sử dụng **Server Actions** cho các tác vụ nặng hoặc cần SEO.
- Hạn chế Client-side Fetching cho dữ liệu quan trọng ban đầu (dùng `initialData` trong React Query).