# AI Toolbox Web App

A web-based toolbox that aggregates multiple AI tools under categories like Image, Video, Code, and Research. Users can interact with the tools directly without providing API keys, using Google OAuth authentication.

## Project Structure

This project is a monorepo with the following structure:

- `/frontend`: A Next.js application for the user interface.
- `/backend`: A Node.js/Express application for the API and business logic.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation and Running

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ai-toolbox-web-app
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Run the frontend development server:**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

4. **Install backend dependencies:**
   ```bash
   cd ../backend
   npm install
   ```

5. **Run the backend server:**
   ```bash
   npm start
   ```
   The backend will be running on `http://localhost:3001`.

## Tech Stack

### Frontend

- **Framework:** Next.js
- **Languages:** TypeScript
- **Styling:** Tailwind CSS
- **Libraries:** Framer Motion, Recharts, Axios

### Backend

- **Framework:** Node.js with Express
- **Database:** PostgreSQL, MongoDB (optional)
- **Authentication:** Google OAuth
