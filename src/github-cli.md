# Working with GitHub CLI

## Listing projects

```shell
gh project list --owner <OWNER>
```

Example:

```shell
gh project list --owner CosmWasm
```

Output:

```text
NUMBER  TITLE    STATE  ID                  
18      Backlog  open   PVT_kwDOAxqsQs4BMFiU
15      Q1.2026  open   PVT_kwDOAxqsQs4BKc_6
```

## Listing project items

```shell
gh project item-list <PROJECT_NUMBER> --owner <OWNER> --limit <LIMIT>
```

Example:

```shell
gh project item-list 15 --owner CosmWasm --limit 10
```

Output:

```text
TYPE         TITLE                                                                                  NUMBER  REPOSITORY                 ID                          
Issue        Update details of CWA-2005-007                                                         86      CosmWasm/advisories        PVTI_lADOAxqsQs4BKc_6zgkdr3w
Issue        Review `Heap profiling` page                                                           2       CosmWasm/maintainers       PVTI_lADOAxqsQs4BKc_6zgigNsc
Issue        Optimize `Poseidon Hash` Implementation in CosmWasm Contracts                          2575    CosmWasm/cosmwasm          PVTI_lADOAxqsQs4BKc_6zgigPzc
Issue        error: linking with `cc` failed: exit status: 1;  rustc 1.91.1 (ed61e7d7e 2025-11-07)  2563    CosmWasm/cosmwasm          PVTI_lADOAxqsQs4BKc_6zgigP6w
Issue        Compiling `cosmwasm-check` breaks for Rust 1.89.0                                      2543    CosmWasm/cosmwasm          PVTI_lADOAxqsQs4BKc_6zgigP-4
Issue        Rust 1.87 requires bulk-memory proposal                                                2485    CosmWasm/cosmwasm          PVTI_lADOAxqsQs4BKc_6zgigQGI
PullRequest  Update to Wasmer 6.0.0-beta.1                                                          2441    CosmWasm/cosmwasm          PVTI_lADOAxqsQs4BKc_6zgigQbw
Issue        Bulk Memory Validation Error with wasmvm v3.0.0 and wasmd v0.61.0                      2316    CosmWasm/wasmd             PVTI_lADOAxqsQs4BKc_6zgigV38
Issue        Hosting website's server configuration                                                 3       CosmWasm/cosmwasm-website  PVTI_lADOAxqsQs4BKc_6zgihJ1g
Issue        Update GitHub actions to the newest versions                                           2578    CosmWasm/cosmwasm          PVTI_lADOAxqsQs4BKc_6zgihU34
```
