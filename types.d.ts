type Customer = {
  id: string,
  name: string,
}

type Investor = {
  id: string,
  name: string,
  balance: number
}

type Loan = {
  customer: Customer,
  amount: number
}

type Match = {
  loan: Loan,
  investor: Investor
}
