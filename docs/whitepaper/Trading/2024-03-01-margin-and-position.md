---
slug: margin-and-position
title: Margin and position 

tags: ['Article']
---

## Margin-M

When opening a position, participants need to choose the direction of the position: long or short. They must decide on the leverage ratio (L) at the time of opening, which also determines the margin ratio. Finally, they need to decide on the amount of margin (M) they wish to post.

If a participant chooses to add additional margin (Ma) at time t (additional margin can be added multiple times), their margin balance becomes:

![333.png](https://nftstorage.link/ipfs/bafkreidkwgsxnqoj3jihvsjfu3n7smc65hnef7qpqop7bm2sf5cml6ijdy)

Where:
M_0 represents the initial margin.
Ma represents the additional margin added.

Adding additional margin does not change the direction of the position (long or short), the opening price, or the leverage ratio. However, it does change the margin ratio of the position and the liquidation price.

## PositionValue - v

The calculation of position size (Q) is as follows:

![333.png](https://nftstorage.link/ipfs/bafkreieqskmrcslmvwsb2iaco2naqbl7sbffl3f4rnvct4pgphrmgqqsr4)

Where:
- M_0 represents the initial margin.
- L represents the futures leverage ratio (L=1,2,...,50).

The value of position value (v) at time t is calculated as follows:

![333.png](https://nftstorage.link/ipfs/bafkreicubujg5gkeeyzwui4r2eqjqwcnsplalofavisrmrmzyqrdv6544e)

Where:
- The superscript L/S denotes long/short positions.
- The subscript t denotes the moment at time t.
- Q represents the position size.
- S_t represents the price of the underlying asset at time t (≥ 0).
- v represent the position value of the order

For the total value of long and short positions of a single asset (V) at time t, the calculations are as follows:

![333.png](https://nftstorage.link/ipfs/bafkreif7aoddv4pvtdubrtu5nyg56viuh5gaqidm6qtq7slh2tmqi4hv2y)

Where:
- The superscript L/S denotes long/short positions.
- The subscript t denotes the moment at time t.
- V represents the total position value of long/short for a single asset.

