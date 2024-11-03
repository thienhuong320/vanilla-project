import { resolve } from 'path'; 
import { defineConfig } from 'vite';
// Cấu hình Vite
export default defineConfig({
  resolve: {
    alias: {
      '@':resolve(__dirname,"src"), // Định nghĩa alias, ví dụ dùng '@' thay cho thư mục 'src'
    },
  },
});
