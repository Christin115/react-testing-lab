import { render, screen } from "@testing-library/react";
import TransactionsList from "../../components/TransactionsList";

describe("Display Transactions", () => {
  test("displays transactions on startup", () => {
    const transactions = [
      {
        id: "1",
        date: "2019-12-01",
        description: "Paycheck from Bob's Burgers",
        category: "Income",
        amount: 1000,
      },
      {
        id: "2",
        date: "2019-12-01",
        description: "South by Southwest Quinoa Bowl at Fresh & Co",
        category: "Food",
        amount: -10.55,
      },
    ];

    render(<TransactionsList transactions={transactions} />);

    expect(
      screen.getByText("Paycheck from Bob's Burgers")
    ).toBeInTheDocument();

    expect(
      screen.getByText("South by Southwest Quinoa Bowl at Fresh & Co")
    ).toBeInTheDocument();
  });
});