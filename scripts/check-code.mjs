#!/usr/bin/env node

/**
 * Code quality check script
 * Runs ESLint, Stylelint, and TypeScript type checking in parallel
 */

import { execSync } from "child_process";
import chalk from "chalk";

console.log(chalk.bold.blue("🔍 Running code quality checks...\n"));

const commands = [
  { name: "ESLint", cmd: "npm run lint" },
  { name: "Stylelint", cmd: "npm run stylelint" },
  { name: "TypeScript", cmd: "npm run type-check" },
];

let hasErrors = false;

for (const { name, cmd } of commands) {
  try {
    console.log(chalk.cyan(`Running ${name}...`));
    execSync(cmd, { stdio: "inherit" });
    console.log(chalk.green(`✅ ${name} passed!\n`));
  } catch (error) {
    console.error(chalk.red(`❌ ${name} failed!\n`));
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error(chalk.red.bold("❌ Code quality checks failed!"));
  process.exit(1);
} else {
  console.log(chalk.green.bold("✅ All code quality checks passed!"));
  process.exit(0);
}
