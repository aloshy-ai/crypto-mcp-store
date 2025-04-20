#!/usr/bin/env bun
import { Command } from 'commander';
import { login } from './commands/login';

const program = new Command();

program
  .name('crypto-cli')
  .description('CLI for crypto MCP operations')
  .version('0.1.0');

program
  .command('login')
  .description('Login with GitHub')
  .action(login);

program.parse(process.argv);