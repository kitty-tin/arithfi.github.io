---
slug: Introduction-to-ArithFi-Futures-Funding-Rates
title: Introduction to ArithFi Futures Funding Rates

tags: ['guild']
---


## 1.What is the ArithFi Futures Funding Rate?
The funding rate in ArithFi is a cash flow compensation or penalty exchanged between holders of long and short positions, which is directly reflected in the profit and loss of the positions. ArithFi's funding rate is a dynamic rate calculated over time based on the ratio of long to short positions. When the ArithFi market has more long positions than short positions, the funding rate for long positions is positive, and negative for short positions. In this case, long positions will pay the funding rate, while short positions will receive compensation. Conversely, when the ArithFi market has more short positions than long positions, the funding rate for long positions is negative, and positive for short positions. Long positions will receive compensation, and short positions will pay the funding rate. The amount of funding rate payment or compensation is calculated based on the value of each trader's own positions.

## 2.Why does ArithFi have the funding rate?
ArithFi has built a relatively independent trading market using the SCP (Smart-contract Counterparty) trading model. ArithFi employs Oracle quotes to offer futures trading services. To prevent attackers from arbitraging within ArithFi through price attacks on the price sources, ArithFi utilizes the funding rate to balance the system's long-short ratio, thereby increasing the cost of arbitrage for attackers and enhancing the robustness of the ArithFi system.

## 3.How are the funding rates calculated on ArithFi?
The funding rate algorithm is as follows:

a.For each asset pair, whenever there is a change in positions: opening, closing (including forced liquidation), the dynamic funding rate is accumulated over time based on the ratio of long to short positions, with the formula as follows:

![file](https://github.com/ArithFi/arithfi.github.io/assets/111032731/db320da7-dc2a-4765-a818-a995ff2b67b1)


Where:
- The superscript L/S denotes long/short.
- The subscript i represents the moment in time i.
- R represents the cumulative funding rate.
- M represents the position (the sum of the initial margin of the open orders multiplied by the leverage).
- r0 represents the base funding rate, a constant (0.0003 for ETH & BTC, 0.0005 for others).
- c represents the maximum funding rate, a constant (0.002 for ETH & BTC, 0.005 for others).
- Δt represents the time interval from moment i to i+1 (in seconds).

b.Assuming a user opens a position at moment i and closes it at moment j, the funding rate is calculated as follows:

![file](https://github.com/ArithFi/arithfi.github.io/assets/111032731/71ccff9a-c348-4ee6-bd80-281bbc8abfc3)

Where:
- μT represents the rate of the funding rate that should be charged to the target position

c.The funding amount for a user is calculated using the following formula:

![file](https://github.com/ArithFi/arithfi.github.io/assets/111032731/53390b32-97e4-4eee-86be-a16d25b70f1c)

Where:
- F represents the Funding Amount.
- PV represents the Position Value.

