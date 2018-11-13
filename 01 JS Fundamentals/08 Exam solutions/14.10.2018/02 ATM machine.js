function proceedCommand(comands) {
    const automatBalance = () => {
        return {
            total: 0,
            money: []
        };
    };
    const commandPattern = {
        insert: (money, balance) => {
            let moneyInserted = money.reduce((sum, amount) => {
                balance['money'].push(amount);
                return sum + amount;
            }, 0);

            balance['total'] += moneyInserted;
            console.log(`Service Report: ${moneyInserted}$ inserted. Current balance: ${balance['total']}$.`);

            return balance;
        },
        2: (money, balance) => {
            let accountBalance = +money[0];
            let toWithdraw = +money[1];

            if (accountBalance < toWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
            } else if (+balance['total'] < toWithdraw) {
                console.log('ATM machine is out of order!');
            } else {
                balance['money'] = balance['money']
                    .filter(b => b > 0)
                    .sort((a, b) => a - b < 0)
                    .map(bill => {
                        if (toWithdraw > 0 && toWithdraw >= bill) {
                            balance['total'] -= bill;
                            toWithdraw -= bill;
                            bill = 0;
                        }

                        return bill;
                    });

                console.log(`You get ${money[1]}$. Account balance: ${accountBalance - money[1]}$. Thank you!`);
            }

            return balance;
        },
        1: (money, balance) => {
            let bill = +money[0];
            let count = balance['money'].filter(b => b === bill).length;
                // .reduce((count, current) => {
                //     if (current === bill) {
                //         count++;
                //     }

                //     return count;
                // }, 0);
            
            console.log(`Service Report: Banknotes from ${bill}$: ${count}.`);
            return balance;
        }
    }

    let balance = automatBalance();

    comands.forEach(commandArgs => {
        let length = commandArgs.length;
        let commandKey = length < 2 ? 1 : length < 3 ? 2 : 'insert';

        balance = commandPattern[commandKey](commandArgs, balance);
    });
}

proceedCommand([
    [10],
    [20, 20, 50],
    [20],
    [100, 50],
    [100, 100, 500, 10, 10, 20],
    [50, 100],
    [500, 500],
    [50, 20],
    [20],
    [10]
]);

// proceedCommand([
//     [20, 5, 100, 20, 1],
//     [457, 25],
//     [1],
//     [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
//     [20, 85],
//     [5000, 4500],
// ]);