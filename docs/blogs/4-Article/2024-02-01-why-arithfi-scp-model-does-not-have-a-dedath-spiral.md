---
slug: why-arithfi-scp-model-does-not-have-a-death-spiral
title: Why ArithFi's SCP Model Does NOT have a death spiral?

tags: ['Article']

---

![1](https://nftstorage.link/ipfs/bafybeidlpndmb5ue2egy7skfvr6ogybi7nbnqkl5faocjrpx6vovfb4xaq)

The SCP (Smart-contract Counterparty) model employed by ArithFi has been designed to avoid the so-called “death spiral” that can occur in certain financial systems. A death spiral typically arises when a possitive feedback loop is triggered by the devaluation of a platform’s native token, leading to further sell-offs and continued devaluation.

In some models, users’ profit and loss (PnL) are directly tied to the price of the platform’s native token paired with a stablecoin (e.g., LUNA/USDT). In such a scenario, if a significant user makes a profit and decides to sell a large amount of the token, it could cause the token’s price to decrease sharply — say by 10%. If other users’ PnL is calculated in USDT, a decrease in the LUNA token’s price would mean that more LUNA would need to be settled to these users to represent the same USDT profit. This could result in a death spiral, where the increase in token supply on the market from settlements causes further price drops and subsequently more settlements.

However, ArithFi’s SCP model mitigates this risk in the following ways:

1. The PnL for users is not directly linked to the ATF/USDT price, so a drop in the price of ATF due to one user’s profit-taking does not automatically increase the settlement amount for other users.

2. If the price of ATF does drop, say by 10%, it’s up to individual users to decide whether to sell their ATF or hold onto it. This decision-making process is similar to the one investors make with other cryptocurrencies like ETH. Just because the price of ETH drops doesn’t necessarily compel all users to sell, and the same applies to ATF.

3. ArithFi’s SCP model is designed to isolate the impact of individual users’ trading decisions from the broader token economics, thereby preventing a single large sell-off from spiraling into a systemic issue.

In summary, ArithFi’s SCP model is structured to prevent a death spiral by decoupling individual users’ profits and sales from the token’s overall price stability. This design choice aims to create a more resilient ecosystem that can withstand the volatility inherent in cryptocurrency markets without triggering a negative feedback loop.
