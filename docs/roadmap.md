---
sidebar_position: 4
---

# Roadmap

## **Phase 1 - Bachelier Phase**

Blockchain technology exhibits the characteristic of increasing marginal costs. Therefore, it is not economically feasible to use Layer1 for commodities and services, as blockchain excels in asset issuance and settlement (see reference article).

ArithFi is dedicated to creating a new class of on-chain assets. In the initial phase of the project, we will provide trading services using servers and utilize blockchain for asset issuance and settlement. This approach lowers the barrier to entry for early users, providing them with a user experience similar to centralized exchanges.

In the first phase, we primarily offer futures services, and due to the characteristics of the SCP model, we can cost-effectively introduce many Real World Assets (RWAs), meeting a wider range of user needs and spreading the project's philosophy to more users.

## **Phase 2 - Ito Phase**

Once daily active users surpass 1000, we will initiate our Layer2 plan. ArithFi will build a dedicated Layer2 on Ethereum to enhance decentralization and resistance to censorship.

ArithFi's Layer2 will employ Layer2 technology that supports dedicated channels. These channels ensure that transactions can be confirmed in specific blocks, providing certainty for the settlement timing of on-chain financial products. Existing on-chain financial products often suffer from uncertain settlement timings, as transactions to be confirmed may be delayed due to congestion or malicious attacks. ArithFi aims to address this issue with its in-house Layer2 solution, positioning it as a crucial infrastructure for on-chain derivatives trading.

## **Phase 3 - Doob Phase**

Following the construction of ArithFi's Layer2, we will create M-Function based on smart contracts. M-Function is a function library combination similar to Ethereum's Virtual Machine (EVM). Each M-Function is configured within a smart contract, allowing anyone to build various financial products, such as futures, options, and other derivatives, based on M-Function and the information flow from oracles.

M-Function inherits Ethereum's essence. EVM is essentially a combination of basic code, which can be invoked by paying a certain amount of gas. The income for each product on M-Function can be considered as a linear combination of some basic income functions. These basic income functions can be obtained by paying a certain cost, which is the discounted value of this income. The underlying logic of M-Function is the same as EVM, which means that all EVM developments can be implemented on M-Function.

Financial products built on M-Function theoretically have infinite supply, meeting the needs of many niche users and creating financial derivatives that are either non-existent or extremely scarce in the market.

Considering the resource limitations of smart contracts, we will selectively define some basic function clusters. In general, polynomial functions, exponential functions, logarithmic functions, and most value functions are frequently used in reality. We will design basic function clusters based on these commonly used functions. Each basic function corresponds to a stochastic cost, which must be paid when calling that function. By composing the necessary function combinations, contracts can be generated through simple interactions, enabling continuous implementation of stochastic trades for expressions.

M-Function can expand the basic function library according to the needs of the on-chain world, thus expanding the application scope of ATF (ArithFi Token).
