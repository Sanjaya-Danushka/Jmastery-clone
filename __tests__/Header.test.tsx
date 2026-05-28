import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Header from "@/components/Header"

describe("Header", () => {
  it("renders query results heading", () => {
    render(<Header type="Resources" query="react" category="" />)
    expect(screen.getByText(/react/i)).toBeDefined()
  })

  it("renders category heading", () => {
    render(<Header type="Resources" query="" category="frontend" />)
    expect(screen.getByText(/frontend/i)).toBeDefined()
  })

  it("renders query and category together", () => {
    render(<Header type="Resources" query="react" category="frontend" />)
    expect(screen.getByText(/react/i)).toBeDefined()
    expect(screen.getByText(/frontend/i)).toBeDefined()
  })

  it("renders fallback for empty query and category", () => {
    render(<Header type="Resources" query="" category="" />)
    expect(screen.getByText(/No Results/i)).toBeDefined()
  })
})
