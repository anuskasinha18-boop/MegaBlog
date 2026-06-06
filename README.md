# MegaBlog

A fully featured, premium blogging platform built with React, Redux Toolkit, Appwrite, and TinyMCE.

## 🚀 Features

- **Authentication System**: Secure user login and registration powered by Appwrite.
- **Rich Text Editor**: Seamless post creation and editing using TinyMCE.
- **State Management**: Scalable global state handled with Redux Toolkit.
- **Premium UI/UX**: Completely bespoke design system using modern Vanilla CSS with glassmorphism, dynamic micro-animations, and a sleek dark theme.
- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Database Integration**: Posts and image assets managed via Appwrite Database and Storage.

## 🛠️ Technologies Used

- **Frontend**: React, React Router, React Hook Form
- **State Management**: Redux Toolkit
- **Backend/BaaS**: Appwrite (Authentication, Databases, Storage)
- **Editor**: TinyMCE
- **Styling**: Vanilla CSS (Custom Design System)
- **Build Tool**: Vite

## ⚙️ Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/anuskasinha18-boop/MegaBlog.git
   cd MegaBlog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add your Appwrite credentials:
   ```env
   VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
   VITE_ARRWRITE_PROJECT_ID="your-project-id"
   VITE_ARRWRITE_DATABASE_ID="your-database-id"
   VITE_ARRWRITE_COLLECTION_ID="your-collection-id"
   VITE_ARRWRITE_BUCKET_ID="your-bucket-id"
   VITE_TINYMCE_API_KEY="your-tinymce-api-key"
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📝 License
This project is open-source and available under the MIT License.
