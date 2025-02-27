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

## Development Setup

The project includes development-safe database credentials in .env that work out of the box:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/tyledeclouds
PGUSER=postgres
PGPASSWORD=postgres
```

These credentials are safe for local development. For production deployment:

1. Use different, secure credentials
2. Set up environment variables in your deployment platform
3. Never share production credentials

## Production Deployment

When deploying to production:

1. Create a new PostgreSQL database with secure credentials
2. Set environment variables in your deployment platform:
   - Use secure, unique passwords
   - Use proper host configurations
   - Enable SSL if available
3. Keep production credentials secure and separate from development

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