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

## Security Notice

This project uses environment variables for sensitive data. Never commit the `.env` file to version control.
Instead:

1. Copy `.env.example` to `.env`
2. Update `.env` with your actual credentials
3. Keep `.env` local and never commit it

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tyledeclouds.git
cd tyledeclouds-consulting
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment:
```bash
cp .env.example .env
# Edit .env with your credentials
```

4. Push the database schema:
```bash
npm run db:push
```

5. Start the development server:
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