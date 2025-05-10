import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Base configurations from Next.js and TypeScript
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ),
  
  // Global settings
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    
    // Merged parser options
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    
    // Merged plugins - using object format for flat config
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "prettier": prettierPlugin,
    },
    
    // Merged rules from all configurations
    rules: {
      // Prettier integration
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      
      // React specific rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": ["error", { 
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "error",
      
      // General rules
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      
      // Accessibility rules
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          "components": ["Link"],
          "specialLink": ["hrefLeft", "hrefRight"],
          "aspects": ["invalidHref", "preferButton"]
        }
      ]
    },
  },
  
  // Ignore patterns
  {
    ignores: ["node_modules", ".next", "out", "public"],
  }
];
