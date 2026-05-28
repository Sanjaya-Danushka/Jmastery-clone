import { describe, it, expect } from "vitest"
import { cn } from "@/lib/utils"
import { buildQuery } from "@/sanity/utils"

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2")
  })

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible")
  })

  it("resolves tailwind conflicts", () => {
    expect(cn("px-4", "px-6")).toBe("px-6")
  })

  it("accepts arrays", () => {
    expect(cn(["px-4", "py-2"])).toBe("px-4 py-2")
  })

  it("handles empty input", () => {
    expect(cn()).toBe("")
  })
})

describe("buildQuery", () => {
  it("builds base query with type", () => {
    const result = buildQuery({ type: "resources", page: 1 })
    expect(result).toContain('_type == "resources"')
  })

  it("includes search query condition", () => {
    const result = buildQuery({ type: "resources", query: "react", page: 1 })
    expect(result).toContain('title match "*react*"')
  })

  it("includes category filter", () => {
    const result = buildQuery({ type: "resources", category: "frontend", page: 1 })
    expect(result).toContain('category == "frontend"')
  })

  it("skips 'all' category", () => {
    const result = buildQuery({ type: "resources", category: "all", page: 1 })
    expect(result).not.toContain("category")
  })

  it("applies pagination", () => {
    const result = buildQuery({ type: "resources", page: 3, perPage: 10 })
    expect(result).toContain("[20...10]")
  })

  it("orders by creation date descending", () => {
    const result = buildQuery({ type: "resources", page: 1 })
    expect(result).toContain("order(_createdAt desc)")
  })

  it("combines multiple conditions with AND", () => {
    const result = buildQuery({ type: "resources", query: "react", category: "frontend", page: 1 })
    expect(result).toContain("&&")
  })
})
