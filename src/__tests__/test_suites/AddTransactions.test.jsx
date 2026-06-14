import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import AddTransactionForm from "../../components/AddTransactionForm";

describe("Add Transaction", () => {
  test("renders transaction form", () => {
    render(
      <AddTransactionForm postTransaction={vi.fn()} />
    );

    expect(
      screen.getByPlaceholderText(/description/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/category/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/amount/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /add transaction/i,
      })
    ).toBeInTheDocument();
  });
});