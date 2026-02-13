# WhatsApp API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

A powerful REST API built with NestJS for managing WhatsApp conversations, messages, and user information. This project leverages the [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) library to provide seamless integration with WhatsApp's web client.

## Features

- ✅ **QR Code Generation** - Generate QR codes for WhatsApp authentication
- 💬 **Message Management** - Retrieve and manage messages from chats
- 🗨️ **Chat Management** - Access chat information and history
- 👤 **User Management** - Handle user-related operations
- 🔌 **WebSocket Support** - Real-time updates through WebSocket connections
- 🔐 **Authentication** - QR code-based authentication with WhatsApp
- 📝 **Validation** - Built-in request/response validation using class-validator
- 🏗️ **Modular Architecture** - Clean, scalable module-based structure

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nest-whatsapp-api
```

2. Install dependencies:
```bash
npm install
```

## Configuration

Environment variables and configuration are handled through NestJS ConfigModule. The application loads configurations from:
- `global.config.ts` - Global application settings
- `whatsapp.js.config.ts` - WhatsApp-specific configurations

Default server port: **3000** (configurable via environment variables)

## Running the Application

### Development Mode
```bash
npm run start:dev
```
Runs the application in watch mode with automatic reload on file changes.

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```
Starts the application with debugging enabled.

### Standard Mode
```bash
npm run start
```

## API Endpoints

All endpoints are prefixed with `/api`

### QR Code Generation
- **GET** `/api/qr/generate` - Generate and retrieve WhatsApp QR code for authentication

### Messages
- **GET** `/api/message/messages/:chatId` - Retrieve all messages from a specific chat

### Chats
- **GET** `/api/chat` - Chat management endpoints (in development)

### Users
- **GET** `/api/user` - User management endpoints (in development)

## Project Structure

```
src/
├── api/                          # API routes and controllers
│   ├── chat/                     # Chat module
│   │   ├── chat.controller.ts
│   │   ├── chat.service.ts
│   │   └── chat.module.ts
│   ├── message/                  # Message module
│   │   ├── message.controller.ts
│   │   ├── message.service.ts
│   │   ├── message.module.ts
│   │   └── dto/                  # Data transfer objects
│   ├── qr/                       # QR Code module
│   │   ├── qr.controller.ts
│   │   ├── qr.service.ts
│   │   └── qr.module.ts
│   ├── user/                     # User module
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   └── user.module.ts
│   └── api.module.ts
├── common/                       # Shared utilities and configuration
│   └── config/
│       ├── global.config.ts
│       └── whatsapp.js.config.ts
├── websocket/                    # WebSocket module for real-time features
│   └── websocket.module.ts
├── whatsapp-js/                  # WhatsApp integration layer
│   ├── whatsapp.js.events.ts
│   ├── whatsapp.js.service.ts
│   └── whatsapp.js.module.ts
├── app.module.ts                 # Root application module
└── main.ts                       # Application entry point
```

## Scripts

```bash
# Code formatting
npm run format

# Linting with auto-fix
npm run lint

# Unit tests
npm run test

# Test watch mode
npm run test:watch

# Test coverage
npm run test:cov

# E2E tests
npm run test:e2e

# Run tests in debug mode
npm run test:debug
```

## Technologies Used

- **NestJS v11** - Progressive Node.js framework
- **TypeScript v5** - Static typing for JavaScript
- **whatsapp-web.js v1.34** - WhatsApp Web client automation
- **class-validator & class-transformer** - Validation and transformation
- **Jest** - Testing framework
- **ESLint & Prettier** - Code quality and formatting

## Development

### Code Quality
The project includes ESLint and Prettier configurations for maintaining code quality:
- Run `npm run lint` to check for style issues
- Run `npm run format` to automatically format code

### Testing
- Unit tests: `npm run test`
- Test coverage: `npm run test:cov`
- E2E tests: `npm run test:e2e`

## QR Code Authentication

When you start the application:
1. The WhatsApp client will generate a QR code
2. The QR code is saved to `qr-code.txt` in the project root
3. Use the `/api/qr/generate` endpoint to retrieve the QR code
4. Scan the QR code with your WhatsApp app to authenticate

## Running Tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## API Usage Examples

### Get QR Code
```bash
curl http://localhost:3000/api/qr/generate
```

Response:
```json
{
  "qrCode": "...",
  "updatedAt": "2/13/2026, 10:30:45 AM",
  "createdAt": "2/13/2026, 10:25:30 AM"
}
```

### Get Messages by Chat ID
```bash
curl http://localhost:3000/api/message/messages/123456789@c.us
```

## Key Components

### WhatsappJsService
Core service for WhatsApp Web.js integration, handling:
- Client initialization and authentication
- QR code generation and management
- Event handling and status tracking

### Message Service
Manages message retrieval and operations for chats:
- Fetch messages by chat ID
- Message filtering and sorting

### Configuration
The application uses NestJS ConfigModule for centralized configuration management:
- Global settings (port, environment)
- WhatsApp-specific settings

## Important Notes

1. **Authentication**: The WhatsApp session is maintained through the QR code in `qr-code.txt`. Keep this file safe.
2. **WhatsApp Web.js Limitation**: This library simulates a browser session. Use responsibly and in accordance with WhatsApp's Terms of Service.
3. **Session Persistence**: Sessions are stored in the local file system. For production, consider implementing session persistence.

## Troubleshooting

### QR Code Not Generating
- Ensure WhatsApp is properly configured in the config files
- Check that the `qr-code.txt` file has write permissions
- Verify that the WhatsappJsModule is properly initialized

### Messages Not Retrieving
- Confirm that you're authenticated (QR code scanned)
- Verify the chat ID format (should be in WhatsApp's format)
- Check that the chat exists in your WhatsApp account

### Port Already in Use
If port 3000 is already in use, configure a different port through environment variables or the global configuration file.

## Future Enhancements

- [ ] Extended chat management endpoints
- [ ] Message sending functionality
- [ ] User profile management
- [ ] Database integration for message caching
- [ ] Advanced filtering and search capabilities
- [ ] Rate limiting and authentication middleware
- [ ] Docker containerization
- [ ] Comprehensive API documentation with Swagger

## Contributing

This project is open for contributions! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

## Troubleshooting & Support

For issues and detailed troubleshooting:
- Check the [whatsapp-web.js documentation](https://docs.sayonbot.com/whatsapp-web.js/)
- Review NestJS documentation at [https://docs.nestjs.com](https://docs.nestjs.com)
- Check GitHub issues in this repository

## License

This project is licensed under the UNLICENSED license.

## Disclaimer

This project is not officially affiliated with WhatsApp LLC or Meta Platforms. Use this library responsibly and in accordance with WhatsApp's Terms of Service. The maintainers are not liable for any misuse of this library.
