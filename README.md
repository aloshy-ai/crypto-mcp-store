# Crypto MCP Store CLI

A CLI application built with bun and TypeScript that provides authentication with GitHub.

## Features

- `login` command that opens a browser for GitHub authentication
- Next.js web application with shadcn/ui for the login interface
- Secure token storage

## Installation

```bash
# Clone the repository
git clone https://github.com/aloshy-ai/crypto-mcp-store.git
cd crypto-mcp-store

# Install dependencies
bun install

# Link the CLI globally
bun link-cli
```

## Usage

```bash
# Run the login command
crypto-cli login
```

This will open a browser window for GitHub authentication.

## Development

```bash
# Run the web application
bun dev

# Run the CLI directly
bun cli
```

## Environment Setup

For GitHub OAuth to work properly, you need to set up your GitHub OAuth application and add the credentials to the project.

1. Create a GitHub OAuth application at https://github.com/settings/developers
2. Set the callback URL to `http://localhost:3000/api/auth/callback/github`
3. Update the client ID and secret in the project
