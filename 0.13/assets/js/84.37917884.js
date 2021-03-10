(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{682:function(e,t,n){"use strict";n.r(t);var s=n(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"cw4-stake"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cw4-stake"}},[e._v("#")]),e._v(" CW4 Stake")]),e._v(" "),n("p",[e._v("This is a second implementation of the "),n("RouterLink",{attrs:{to:"/cw-plus/cw4/01-spec.html"}},[e._v("cw4 spec")]),e._v(".\nIt fulfills all elements of the spec, including the raw query lookups,\nand is designed to be used as a backing storage for\n"),n("RouterLink",{attrs:{to:"/cw-plus/cw3/01-spec.html"}},[e._v("cw3 compliant contracts")]),e._v(".")],1),e._v(" "),n("p",[e._v("It provides a similar API to ["),n("code",[e._v("cw4-group")]),e._v("] (which handles elected membership),\nbut rather than appointing members (by admin or multisig), their\nmembership and weight are based on the number of tokens they have staked.\nThis is similar to many DAOs.")]),e._v(" "),n("p",[e._v("Only one denom can be bonded with both "),n("code",[e._v("min_bond")]),e._v(" as the minimum amount\nthat must be sent by one address to enter, as well as "),n("code",[e._v("tokens_per_weight")]),e._v(",\nwhich can be used to normalize the weight (eg. if the token is uatom\nand you want 1 weight per ATOM, you can set "),n("code",[e._v("tokens_per_weight = 1_000_000")]),e._v(").")]),e._v(" "),n("p",[e._v("There is also an unbonding period ("),n("code",[e._v("Duration")]),e._v(') which sets how long the\ntokens are frozen before being released. These frozen tokens can neither\nbe used for voting, nor claimed by the original owner. Only after the period\ncan you get your tokens back. This liquidity loss is the "skin in the game"\nprovided by staking to this contract.')]),e._v(" "),n("h2",{attrs:{id:"init"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[e._v("#")]),e._v(" Init")]),e._v(" "),n("p",[n("strong",[e._v("TODO")])]),e._v(" "),n("p",[e._v("To create it, you must pass in a list of members, as well as an optional\n"),n("code",[e._v("admin")]),e._v(", if you wish it to be mutable.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"cHViIHN0cnVjdCBJbml0TXNnIHsKICAgIC8vLyBkZW5vbSBvZiB0aGUgdG9rZW4gdG8gc3Rha2UKICAgIHB1YiBzdGFrZTogU3RyaW5nLAogICAgcHViIHRva2Vuc19wZXJfd2VpZ2h0OiB1NjQsCiAgICBwdWIgbWluX2JvbmQ6IFVpbnQxMjgsCiAgICBwdWIgdW5ib25kaW5nX3BlcmlvZDogRHVyYXRpb24sCn0K"}}),e._v(" "),n("p",[e._v("Members are defined by an address and a weight. This is transformed\nand stored under their "),n("code",[e._v("CanonicalAddr")]),e._v(", in a format defined in\n"),n("RouterLink",{attrs:{to:"/cw-plus/cw4/01-spec.html#raw"}},[e._v("cw4 raw queries")]),e._v(".")],1),e._v(" "),n("p",[e._v("Note that 0 "),n("em",[e._v("is an allowed weight")]),e._v(". This doesn't give any voting rights,\nbut it does define this address is part of the group, which may be\nmeaningful in some circumstances.")]),e._v(" "),n("p",[e._v("The weights of the members will be computed as the funds they send\n(in tokens) divided by "),n("code",[e._v("tokens_per_weight")]),e._v(", rounded down to the nearest\nwhole number (i.e. using integer division). If the total sent is less than\n"),n("code",[e._v("min_bond")]),e._v(", the stake will remain, but they will not be counted as a\nmember. If "),n("code",[e._v("min_bond")]),e._v(" is higher than "),n("code",[e._v("tokens_per_weight")]),e._v(", you cannot\nhave any member with 0 weight.")]),e._v(" "),n("h2",{attrs:{id:"messages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),n("p",[e._v("Most messages and queries are defined by the\n"),n("RouterLink",{attrs:{to:"/cw-plus/cw4/01-spec.html"}},[e._v("cw4 spec")]),e._v(". Please refer to it for more info.")],1),e._v(" "),n("p",[e._v("The following messages have been added to handle un/staking tokens:")]),e._v(" "),n("p",[n("code",[e._v("Bond{}")]),e._v(" - bond all staking tokens sent with the message and update membership weight")]),e._v(" "),n("p",[n("code",[e._v("Unbond{tokens}")]),e._v(" - starts the unbonding process for the given number\nof tokens. The sender immediately loses weight from these tokens,\nand can claim them back to his wallet after "),n("code",[e._v("unbonding_period")])]),e._v(" "),n("p",[n("code",[e._v("Claim{}")]),e._v(' -  used to claim your native tokens that you previously "unbonded"\nafter the contract-defined waiting period (eg. 1 week)')]),e._v(" "),n("p",[e._v("And the corresponding queries:")]),e._v(" "),n("p",[n("code",[e._v("Claims{address}")]),e._v(" - Claims shows the tokens in process of unbonding\nfor this address")]),e._v(" "),n("p",[n("code",[e._v("Staked{address}")]),e._v(" - Show the number of tokens currently staked by this address.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);