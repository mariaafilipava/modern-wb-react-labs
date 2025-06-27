import "@testing-library/jest-dom";
import { vi } from "vitest";

globalThis.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
} as unknown as Storage;