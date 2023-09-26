---
sidebar_position: 1
---

# ArithFi

ArithFi is a decentralized derivatives exchange that eliminates market makers and LPs.

ArithFi uses the SCP model (Smart contract as Counterparty) for all participants.

The development of ArithFi will be divided into three phases (Roadmap), and we are currently in phase 1.

## SCP Model

ArithFi uses the SCP (Smart contract as Counterparty) model, where the smart contract serves as the counterparty for all participants in futures, options, and other derivative transactions. This approach ensures decentralization and potentially infinite liquidity in derivative trading, thanks to blockchain's token issuance and burning mechanisms. In this process, all $ATF token holders collectively assume both risks and rewards. In contrast, traditional financial markets rely on market makers to match and execute derivative transactions, with market makers mitigating risks in the secondary market.

### SCP Model for Futures Trading

1. Users utilize $ATF as collateral. For instance, if a user opens a 10x BTC/USDT Long Position with a collateral of 1000 $ATF, the user is required to send 1000 $ATF to the smart contract (considered as burned).
2. Oracle-supplied price:
   - If the BTC/USDT price rises by 1%, the user's profit is 10%. When the user closes the order, the smart contract will issue 1100 $ATF to the user as settlement.
   - If the BTC/USDT price falls by 1%, the user incurs a loss of 10%. When the user closes the order, the smart contract will issue 900 $ATF to the user as settlement.
  
   
![SCP Model for Futures Trading](https://nftstorage.link/ipfs/bafkreick2dsenxqugh3lknwosfck5o3axn7nzshb7qxoqmlmae7pwkkdum)

### **SCP Model for Options Trading (Not Yet Launched)**

1. Users can use $ATF to purchase options. For instance, if a user buys a BTC/USDT Call Option with a strike price of 30,000 and an expiry date of December 31, 2024, priced at 2,000 $ATF, the user needs to send 2,000 $ATF to the smart contract (considered as burned) as the cost of purchasing the option.
2. Before the option's expiry, if the option's value calculated through the SCP model at that time is 3,000 $ATF, the user can sell the "BTC/USDT Call Option with a strike price of 30,000 and an expiry date of December 31, 2024" to the smart contract. The smart contract will issue 3,000 $ATF to the user as settlement.
3. At the option's expiry, if the BTC/USDT price is 35,000 at that time, the option's value for the user is 5,000 $ATF. The user needs to exercise the option, and the smart contract will issue 5,000 $ATF to the user as settlement. If the BTC/USDT price is 25,000 at the option's expiry, then the option's value for the user is 0 $ATF.

   
![SCP Model for Options Trading](https://nftstorage.link/ipfs/bafkreideq2fxtgpkeouvp6x3h6wewo7adkqzptwdoxrpvcfglz2qmgkxba)



### Features of SCP Model

The SCP model eliminates the matching and pairing steps in financial derivative transactions. Moreover, all assets based on the SCP model theoretically possess infinite liquidity. In this model, financial derivative trading no longer relies on market makers or liquidity providers (LPs). It is a non-hedging equilibrium model where all token holders collectively share the risks and rewards.
