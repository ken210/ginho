import { match } from "./match";
import { createCustomer, createInvestor, createLoan } from "./factory";

const testCustomers: Customer[] = [
  createCustomer("Ken"),
  createCustomer("Ginho"),
  createCustomer("Papai Noel"),
  createCustomer("Coelhinho da Pascoa"),
  createCustomer("Chupa Cabra"),
];

const testInvestors: Investor[] = [
  createInvestor("Bradesco", 100000),
  createInvestor("Itau", 100000),
  createInvestor("Banco do Brasil", 100000),
  createInvestor("Santander", 100000),
  createInvestor("Caixa Economica", 100000),
];

const testLoans: Loan[] = [
  createLoan(testCustomers[0], 45000),
  createLoan(testCustomers[1], 67000),
  createLoan(testCustomers[2], 49000),
  createLoan(testCustomers[3], 39000),
  createLoan(testCustomers[4], 77000),
];

describe("match", () => {
  test("should return the correct list of matches", () => {
    expect(match(testLoans, testInvestors)).toEqual([
      {
        loan: {
          customer: {
            id: "1",
            name: "Ken",
          },
          amount: 45000,
        },
        investor: {
          id: "1",
          name: "Bradesco",
          balance: 55000,
        },
      },
      {
        loan: {
          customer: {
            id: "2",
            name: "Ginho",
          },
          amount: 67000,
        },
        investor: {
          id: "2",
          name: "Itau",
          balance: 33000,
        },
      },
      {
        loan: {
          customer: {
            id: "3",
            name: "Papai Noel",
          },
          amount: 49000,
        },
        investor: {
          id: "3",
          name: "Banco do Brasil",
          balance: 51000,
        },
      },
      {
        loan: {
          customer: {
            id: "4",
            name: "Coelhinho da Pascoa",
          },
          amount: 39000,
        },
        investor: {
          id: "3",
          name: "Banco do Brasil",
          balance: 12000,
        },
      },
      {
        loan: {
          customer: {
            id: "5",
            name: "Chupa Cabra",
          },
          amount: 77000,
        },
        investor: {
          id: "4",
          name: "Santander",
          balance: 23000,
        },
      },
    ]);
  });
});
