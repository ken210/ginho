let currentUserId = 0
export function createCustomer (name: string): Customer {
  currentUserId++

  return {
    id: currentUserId.toString(),
    name
  }
}


let currentInvestorId = 0
export function createInvestor (name: string, balance: number): Investor {
  currentInvestorId++

  return {
    id: currentInvestorId.toString(),
    name,
    balance
  }
}

export function createLoan(customer: Customer, amount: number): Loan {
  return {
    customer,
    amount
  }
}

export function createMatch(loan: Loan, investor: Investor): Match {
  return {
    loan,
    investor
  }
}
