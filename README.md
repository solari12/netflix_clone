# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Vite React là gì?
Vite là một công cụ xây dựng (build tool) giúp tạo ứng dụng React nhanh hơn so với create-react-app (CRA). Nó được thiết kế để tăng tốc quá trình phát triển nhờ vào:
 - Khởi động nhanh hơn với server phát triển (dev server) cực nhanh
 - Hot Module Replacement (HMR) giúp cập nhật code ngay lập tức mà không cần reload trang
 - Build nhanh hơn nhờ sử dụng ESBuild để biên dịch code