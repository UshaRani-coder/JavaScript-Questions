const personAccount = {
    firstName:"Riya",
    lastName:"Varma",
    incomes:{job:50000,
             sideHustle:10000,
             investment:5000,
             youtube:30000},
    expenses:{rent:20000,
              groceries:10000,
              pets:7000,
              electricity:2000},
    totalIncome:function(){
         let totalIncomeCount = 0;
         let values = Object.values(this.incomes);
        for(let i of values){
        totalIncomeCount += i ;
           }
           return totalIncomeCount;
    },
    totalExpense:function(){
        let totalExpenseCount = 0;
        let values = Object.values(this.expenses);
        for(let i of values){
            totalExpenseCount += i;
        }
        return totalExpenseCount;
    },
    addIncome:function(){
     return personAccount.incomes.trading = 10000 ;
        
    },
    addExpense:function(){
        personAccount.expenses.gym = 3000 ;
    },
    accountBalance:function(){
        let bal = ((this.totalIncome()) - (this.totalExpense()));
        return bal;
    },
    accountInfo:function(){
        console.log(`Username : ${this.firstName} ${this.lastName} , Total Income : ${this.totalIncome()}  Total Expenses : ${this.totalExpense()} Account Balance : ${this.accountBalance()}`);
    }

}
personAccount.addIncome();
personAccount.addExpense();
personAccount.accountInfo();
