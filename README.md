# Tyledeclouds Consulting Website

A modern cloud consulting website built with React, Express, and PostgreSQL.

## Features

- Modern and responsive design
- Contact form functionality
- User authentication
- Cloud consulting services showcase
- PostgreSQL database integration

## Tech Stack

- Frontend: React with TypeScript
- Backend: Express.js
- Database: PostgreSQL
- Styling: Tailwind CSS with shadcn/ui components
- State Management: TanStack Query
- Form Handling: React Hook Form with Zod validation

## Prerequisites

- Node.js (v20 or higher)
- PostgreSQL database
- npm or yarn package manager

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL=postgresql://user:password@host:port/database
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=your_database
PGHOST=your_host
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tyledeclouds-consulting.git
cd tyledeclouds-consulting
```

2. Install dependencies:
```bash
npm install
```

3. Push the database schema:
```bash
npm run db:push
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## Production Build

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/     # Page components
│   │   ├── lib/       # Utilities and helpers
│   │   └── hooks/     # Custom React hooks
├── server/            # Backend Express application
│   ├── routes.ts     # API routes
│   └── storage.ts    # Database interface
├── shared/           # Shared types and schemas
└── migrations/       # Database migrations
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
