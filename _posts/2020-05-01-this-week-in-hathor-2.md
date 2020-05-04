---
layout: post
title: This Week in Hathor 2
---

Hello and welcome to the second issue of This Week in Hathor! Hathor is a new architecture for tokenization, radically
simple.  This is a weekly summary of its progress and community. Want something mentioned? [Send us a pull
request](https://github.com/HathorNetwork/this-week-in-hathor){:target="_blank"}. Want to get involved? We love
contributions.

This Week in Hathor is openly developed [on
GitHub](https://github.com/HathorNetwork/this-week-in-hathor){:target="_blank"}. If you find
any errors in this week's issue, [please submit a
PR](https://github.com/HathorNetwork/this-week-in-hathor){:target="_blank"}.

This one took a bit longer than it should, while the first one was bareley publicized. For that reason it will contain
all that happened after the previous issue. Expect them to be release regularly soon.

## News & Blog Posts

- [Ethereum x Hathor: comparing token platforms](https://medium.com/hathor-network/ethereum-x-hathor-comparing-token-platforms-ca898a593477){:target="_blank"}

## Releases

- [Hathor Wallet Desktop v0.15.0](https://github.com/HathorNetwork/hathor-wallet/releases/tag/v0.15.0){:target="_blank"}
- [Hathor Core v0.34.0](https://github.com/HathorNetwork/hathor-core/releases/tag/v0.34.0){:target="_blank"}

## Call for Participation

Always wanted to contribute to open-source projects but didn't know where to start? We have selected issues that should
be easier for newcomers.

Currently there are [2 such issues](https://github.com/search?q=org%3AHathorNetwork+label%3A%22good+first+issue%22+no%3Aassignee&state=open&type=Issues){:target="_blank"}:

- hathor-wallet: [Wallet initial size can cut off some elements](https://github.com/HathorNetwork/hathor-wallet/issues/90){:target="_blank"}
- hathor-core: [There is no warning/debug log when a peer is rejected](https://github.com/HathorNetwork/hathor-core/issues/19){:target="_blank"}

## Updates from Hathor projects

23 [PRs](https://github.com/search?o=desc&q=is%3Apr+org%3AHathorNetwork+is%3Amerged+merged%3A2020-04-09..2020-05-01&s=created){:target="_blank"} +
[MRs](https://gitlab.com/groups/HathorNetwork/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged){:target="_blank"}
were merged since last issue

- hathor-core:
  - [feat: adding error code to send tokens resource errors](https://gitlab.com/HathorNetwork/hathor-python/-/merge_requests/394){:target="_blank"}
  - [fix(stratum): saner log and only add conn to pool after subscribe ](https://gitlab.com/HathorNetwork/hathor-python/-/merge_requests/389){:target="_blank"}
  - [chore: update Dockerfile to downgrade setuptools ](https://gitlab.com/HathorNetwork/hathor-python/-/merge_requests/393){:target="_blank"}
  - [feat(metrics): add transaction mining timeout counter](https://gitlab.com/HathorNetwork/hathor-python/-/merge_requests/390){:target="_blank"}
  - [feat: use real ip module in nginx](https://gitlab.com/HathorNetwork/hathor-python/-/merge_requests/388){:target="_blank"}
  - [feat(tx): Minor tx inputs and outputs validation](https://gitlab.com/HathorNetwork/hathor-python/-/merge_requests/387){:target="_blank"}
  - [feat: creating mined tokens resource ](https://gitlab.com/HathorNetwork/hathor-python/-/merge_requests/386){:target="_blank"}
  - [refactor: returning a maximum of inputs/outputs in a address history request](https://gitlab.com/HathorNetwork/hathor-python/-/merge_requests/384){:target="_blank"}
  - [feat: increase rate limit for address_history API endpoint](https://gitlab.com/HathorNetwork/hathor-python/-/merge_requests/383){:target="_blank"}
  - [chore: update aws account number on Makefile](https://gitlab.com/HathorNetwork/hathor-python/-/merge_requests/382){:target="_blank"}
- hathor-wallet:
  - [Improving UX when sending tokens splitting loading message into two steps](https://github.com/HathorNetwork/hathor-wallet/pull/112){:target="_blank"}
  - [fix: reload for address history request error and customizing message](https://github.com/HathorNetwork/hathor-wallet/pull/111){:target="_blank"}
  - [feat: add background image for loading addresses screen](https://github.com/HathorNetwork/hathor-wallet/pull/109){:target="_blank"}
  - [chore: version 0.15.0](https://github.com/HathorNetwork/hathor-wallet/pull/108){:target="_blank"}
  - [refactor: small changes to support new lib version](https://github.com/HathorNetwork/hathor-wallet/pull/105){:target="_blank"}
  - [feat: List of addresses from the wallet](https://github.com/HathorNetwork/hathor-wallet/pull/100){:target="_blank"}
- hathor-wallet-lib:
  - [fix: websocket setup might be called multiple times](https://github.com/HathorNetwork/hathor-wallet-lib/pull/70){:target="_blank"}
- hathor-wallet-mobile:
  - [fix: increasing sqlite db cursor and size limit](https://github.com/HathorNetwork/hathor-wallet-mobile/pull/58){:target="_blank"}
  - [fix(history): Loading history was too slow](https://github.com/HathorNetwork/hathor-wallet-mobile/pull/57){:target="_blank"}
  - [feat: support "whitelabel"](https://github.com/HathorNetwork/hathor-wallet-mobile/pull/56){:target="_blank"}
  - [refactor/essential-methods: move methods from screen/Dashboard.js to App.js](https://github.com/HathorNetwork/hathor-wallet-mobile/pull/55){:target="_blank"}
  - [fix: no need to save wallet data in the persistent storage](https://github.com/HathorNetwork/hathor-wallet-mobile/pull/53){:target="_blank"}
- hathor-website:
  - [chore: bumping wallet desktop version to v0.15.0](https://github.com/HathorNetwork/hathor-website/pull/21){:target="_blank"}
