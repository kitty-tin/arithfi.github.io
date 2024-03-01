---
slug: PNL-and-Liquidation
title: PNL and Liquidation

tags: ['guild']
---

## Profit and Loss (PNL)
### Unrealized PNL (Unpnl)
After a participant opens a position in crypto futures at time i, the PNL for that position at any subsequent time t (t ∈ [0, T)) before closing is referred to as Unrealized PNL (Unpnl). The formula for Unpnl at time t is as follows:

###### ![](https://nftstorage.link/ipfs/bafkreih3tpduqfvmq25eoojzhcg4475vicq5pirj33k2g7h2xi7iovba2e)

Where:
- The superscript L/S denotes long/short positions.
- The subscript t denotes the moment at time t.
- S_t represents the price of the underlying asset at time t (≥ 0).
- Q represents the position size.
- F_i,t represents the funding rate amount to be collected or compensated at time t for the position opened at time i.

### Realized PNL (pnl)
After a participant opens a position in crypto futures at time i and chooses to close it at time T, the corresponding pnl is calculated as follows:

###### ![](https://nftstorage.link/ipfs/bafkreidk7und7fxhemlo3gptnyg2xc2vgynzcbvixove25m2ya7xwltsmm)

Where:
- The superscript L/S denotes long/short positions.
- S_T represents the price of the underlying asset at time T (≥ 0).
- Q represents the position size.
- F_i,T represents the funding rate amount to be collected or compensated at time T for the position opened at time i.

## Liquidation Price (Liq)
After opening a position in cryptocurrency futures, the participant can choose to close their position at any subsequent time t (t ∈ [0, T)). The net asset value of the position at time t (the amount received after closing the position at time t) is calculated as follows:

###### ![](https://nftstorage.link/ipfs/bafkreigmnsm3zjpxksuguw2jxknziscbvn5f3r3kzr6yplpa2f4peohyeu)

Where:
- The superscript L/S denotes long/short positions.
- M_t represents the margin balance at time t (≥ 0).
- Unpnl_t denotes the unrealized PNL at time t.

The system's maintenance margin level (liquidation threshold) is defined as:
###### ![](https://nftstorage.link/ipfs/bafkreiaxl5ahnq32gw2mlyppid7pmm34zqwasruhdda3v5xvxvysnarp4u)

Where:
- a is the minimum residual balance parameter in the system, currently set to 15.
- m is the maintenance margin ratio, currently set at 0.5%.

Therefore, the liquidation price formula at time t is as follows:

###### ![](https://nftstorage.link/ipfs/bafkreih5iklxl4khxxjo6efo2h7wuxtr7qnvjhnrwo2tb7jil5uw7sh4cm)

Where:
- The superscript L/S denotes long/short positions.
- S_0 represents the price of the underlying asset at time 0 (opening price).
- Mm represents the maintenance margin.
- Q represents the position size.
- F_i,t represents the funding rate amount to be collected or compensated at time t for the position opened at time i.
- M_t represents the margin balance at time t (≥ 0).



