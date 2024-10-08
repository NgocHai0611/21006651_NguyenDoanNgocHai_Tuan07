# ![Logo](./assets/image95.png) <h1><img src="https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430" width="30"/> 40 - 21005711 - Mai Quốc Trưởng - APINOTES</h1>

> **Bài tập 7 React Lập Trình Thiết Bị Di Động**
<h4>Sử dụng những cái sau đây:</h4>
<p>
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" />
  <img alt="Expo" src="https://img.shields.io/badge/-Expo-1B1F1B?style=flat-square&logo=expo&logoColor=white" />
  <img alt="MockAPI" src="https://img.shields.io/badge/-MockAPI-21B3D3?style=flat-square&logo=mockapi&logoColor=white" />
  <img alt="Visual Studio Code" src="https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white" />
  <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
  <img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
  <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
</p>

---

## 📋 Mục Lục

- [Giới Thiệu](#giới-thiệu)
- [Yêu Cầu](#yêu-cầu)
- [Cài Đặt](#cài-đặt)
- [Sử Dụng MockAPI](#sử-dụng-mockapi)
- [Chạy Ứng Dụng](#chạy-ứng-dụng)
- [Hướng Dẫn Chạy Project Trên VSCode](#hướng-dẫn-chạy-project-trên-vscode)
- [Liên Hệ](#liên-hệ)

---

## 🎉 Giới Thiệu

Dự án **APINOTES** là một ứng dụng quản lý ghi chú trên thiết bị di động được xây dựng bằng **React Native** và **Expo**. Ứng dụng sử dụng **MockAPI** và **Json server** để quản lý dữ liệu và cung cấp giao diện người dùng thân thiện với thiết bị di động.

![App Screenshot](./assets/demo/bai7.gif)

---

## 📌 Yêu Cầu

Trước khi bắt đầu, hãy đảm bảo rằng bạn đã cài đặt các công cụ sau:

- **Mobile Simulator**: Tải và cài đặt từ [Chrome Web Store](https://chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk).
  
  ![Mobile Simulator](https://lh3.googleusercontent.com/2j5aTV0zdY4-if24IerwQlyMyuzd4sEuWL116G5Aq3vhKT3FGX7FtQV7moRLS-P9qK23WhMVCxiHVH3CL1DJ8V04caQ=s1280-w1280-h800)
  
- **Node.js**: Tải và cài đặt từ [nodejs.org](https://nodejs.org/).

  ![Node.js](https://nodejs.org/static/images/logo.svg)

- **Git**: Tải và cài đặt từ [git-scm.com](https://git-scm.com/).

  ![Git](https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png)

---

## 🛠️ Cài Đặt

### 1. Tạo Ứng Dụng Expo

```bash
npx create-expo-app YOUR_PROJECT --template blank
cd YOUR_PROJECT
npx expo install react-dom react-native-web @expo/metro-runtime
```

### 2. Cài Đặt Navigation và Icon (FontAwesome)

```bash
npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/native-stack
```

### 3. Cài Đặt Các Thư Viện Khác

```bash
expo install expo-linear-gradient
npm install react-native-vector-icons
```

### 4. Cài Đặt JSON Server

```bash
npm install -g json-server
json-server --watch db.json --port 5000
```

### 5. Cài Đặt Axios

```bash
npm install axios
```

---

## 🛠️ Sử Dụng MockAPI

1. Truy cập [MockAPI.io](https://mockapi.io/).

   ![MockAPI](./assets/mockapiio.png)

2. **Bước 1: Đăng nhập và Tạo Dự Án Mới**

   - Đăng nhập vào MockAPI.
   - Nhấn **Create New Project**.
   - Đặt tên cho dự án: `My Notes API`.
   - Nhấn **Create Project**.

3. **Bước 2: Tạo Resource**

   - Nhấn **New Resource**.
   - Thiết lập các giá trị cần thiết cho Resource.

---

## 🚀 Chạy Ứng Dụng

```bash
npx expo start
```

---

## 🖥️ Hướng Dẫn Chạy Project Trên VSCode

1. **Clone Repository**

   ```bash
   git clone <URL_REPOSITORY>
   ```

2. **Mở Thư Mục Trong VSCode**

   - Mở VSCode.
   - Chọn **File > Open Folder** và chọn thư mục vừa clone về.

3. **Cài Đặt Dependencies**

   ```bash
   npm install
   yarn
   ```

4. **Chạy Ứng Dụng**

   ```bash
   npx expo start
   npm run web
   ```

---

## 📧 Liên Hệ

- **Email**: maiqtruong2403@gmail.com or nguyennthanhtung0900@gmail.com
- **GitHub**: [MaiQuocTruong](https://github.com/MaiQuocTruong)

---

## 🎨 Thiết Kế

![Design](./assets/demo/framework.png)

---

**Cảm ơn bạn đã sử dụng dự án này!**

---
![TY](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2dtejc1bm1nNDJrdnU0ZW1zcTFkdzlpb3VrYWNoMXA3b2h4OThsbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/scZPhLqaVOM1qG4lT9/giphy.webp)

---

### 🌟

![React](https://img.shields.io/badge/React-Native-blue)
![Expo](https://img.shields.io/badge/Expo-v51.0.0-blue)

---

