---
slug: arithfi-article-Nov27
title: Prerequisites for Effective Algorithmic Finance
tags: ['Article']

---
![file](https://nftstorage.link/ipfs/bafkreie7iic5ag76v3fqzbzpt5urzi2slkowejbmblzo3fnydjxlfqtirq)

People generally hope that algorithms on the blockchain can generate financial services and products entirely. This vision has consistently attracted entrepreneurs in the blockchain sector, encompassing projects such as algorithmic stablecoins, automated market makers, and algorithmic lending. However, these projects can hardly be called successful algorithmic finance; not only are they limited in scale, but their intrinsic designs also have some issues. The following is a summary of these issues.

Firstly, from a system design perspective, many projects are overly simplistic. They rely solely on functional relationships to define the foundation of the entire project without considering the game structure as the core of the project. For example, the design of Dai involves only a simple collateralization function relationship. Although, on the surface, everyone appears to collateralize Ethereum at the same discount, in reality, the Dai generated at different times carries different risk structures. If a second Dai contract were to emerge, it might cause people to abandon the previous project. A proper design for algorithmic finance should construct the entire system as a game, similar to how Bitcoin is a large-scale computational power contest, with miners competing for the right to mine Bitcoin.

Secondly, due to the predictability of the information flow used or because the transaction functions are not martingales (a type of stochastic process), the fairness of transactions cannot be guaranteed. For instance, the functions used by some projects, such as xy=k or Compound's interest rate function, clearly have the potential for arbitrage, which can lead to losses for liquidity providers. The correct approach is to use a genuinely random information flow and ensure that the transaction function for each transaction is a martingale, i.e., a fair function. Only systems designed in this way have the potential to remain stable and tend towards convergence.

Furthermore, the price should not be directly linked to the supply amount, as this can trigger a cyclic effect leading to system collapse. In many algorithmic stablecoin projects, the supply amount is directly related to the price variable, and the information exchange is too simplistic and rapid, prone to a death spiral from which recovery is difficult. Most algorithmic stablecoin projects have failed for this reason, including the Luna project, which shocked the industry and confirmed this logic. Regardless of whether there is strong capital support, this model is doomed to fail.

Lastly, there needs to be at least one game variable that is derived from actual demand and willingness to pay for value. As mentioned earlier, if everyone in the Luna project attempts to arbitrage, then who is providing the value? Without a clear source of profit, the system cannot be sustained. This issue plagues many DeFi projects, and even most public chain projects lack a clear source of value and contributors. This makes the projects unsustainable, leading to eventual collapse or, at the very least, marginalization.
