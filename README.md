# ResuMate

ResuMate is a modern resume builder application built with React, TypeScript, and Vite, featuring a beautiful UI powered by shadcn/ui components.

## 🚀 Features

- **Modern UI Components**: Utilizing shadcn/ui for a consistent and beautiful design system
- **ATS Evaluation**: Analyze your resume for ATS compatibility
- **Resume Builder**: Intuitive interface for creating professional resumes
- **Multiple Templates**: Choose from various resume templates
- **Profile Management**: Save and manage your resume profiles
- **Download Options**: Export your resume in multiple formats
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Supabase Integration**: Secure data storage and authentication

## 🛠️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Backend/Auth**: Supabase
- **Form Handling**: React Hook Form
- **Date Handling**: date-fns
- **Icons**: Lucide React

## 📦 Project Structure

```
src/
├── components/         # UI components
│   ├── Navigation.tsx # Main navigation component
│   └── ui/           # shadcn/ui components
├── hooks/             # Custom React hooks
├── lib/              # Utilities and configurations
├── pages/            # Main application pages
└── styles/           # Global styles and themes
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/imjayjoshi/ResuMate.git
cd ResuMate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages

- **Home**: Landing page with main features
- **Builder**: Interactive resume builder interface
- **Templates**: Browse and select resume templates
- **ATS Evaluation**: Check resume ATS compatibility
- **Profile**: User profile management
- **Download**: Export options for created resumes

## 🎯 Features in Detail

### Resume Builder
- Drag-and-drop interface
- Real-time preview
- Multiple section types
- Custom formatting options

### ATS Evaluation
- Keyword analysis
- Format compatibility check
- Improvement suggestions

### Profile Management
- Save multiple resumes
- Version history
- Cloud storage integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- shadcn/ui for the beautiful component library
- Radix UI for accessible primitives
- Supabase for backend services