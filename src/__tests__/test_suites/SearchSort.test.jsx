import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, test, expect } from "vitest";

import Search from "../../components/Search";
import Sort from "../../components/Sort";

describe("Search and Sort", () => {
  test("calls setSearch when user types", async () => {
    const setSearch = vi.fn();

    render(<Search setSearch={setSearch} />);

    const input = screen.getByPlaceholderText(
      /search your recent transactions/i
    );

    await userEvent.type(input, "rent");

    expect(setSearch).toHaveBeenCalled();
  });

  test("calls onSort when selection changes", async () => {
    const onSort = vi.fn();

    render(<Sort onSort={onSort} />);

    const select = screen.getByRole("combobox");

    await userEvent.selectOptions(select, "category");

    expect(onSort).toHaveBeenCalledWith("category");
  });
});