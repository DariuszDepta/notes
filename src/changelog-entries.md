# Changelog entries

The script shown below generates useful changelog entries for issues and PRs
assigned to specific milestone in GitHub repository:

```bash
#!/usr/bin/env bash

MILESTONE="$1"
REPOSITORY="$2"

names() {
  gh "$1" list --search "milestone:$MILESTONE" \
               --state all \
               --repo $REPOSITORY \
               --json number,title \
               --template '{{range .}}{{printf "- %s ([#%v])\n" .title .number}}{{end}}'
}

links() {
  gh "$1" list --search "milestone:$MILESTONE" \
               --state all \
               --repo $REPOSITORY \
               --json number,url \
               --template '{{range .}}{{printf "[#%v]: %s\n" .number .url}}{{end}}'
}

printf "\nISSUES:\n\n"
names issue
printf "\nPULL REQUESTS:\n\n"
names pr
printf "\nISSUES:\n\n"
links issue
printf "\nPULL REQUESTS:\n\n"
links pr
printf "\n"
```

To use this script, you need to be logged in to GitHub using `gh`.

```shell
touch chlog.sh
```

```shell
chmod +x chlog.sh
```

(paste the content of the script to `chlog.sh` file)

Run the script:

```shell
./chlog.sh 3.0.3 cosmwasm/cosmwasm
```

Example output:

```text

ISSUES:

- Update MIGRATING.md for version 3.0.x ([#2594])
- Fix typos ([#2579])
- Update GitHub actions to the newest versions ([#2578])
- Update CHANGELOG.md for v3.0.2 ([#2577])
- cargo install cosmwasm-check fails to compile ([#2536])

PULL REQUESTS:

- Updated CHANGELOG with unreleased issues and PRs ([#2603])
- Fixed typos. ([#2602])
- Updated Telegram link ([#2601])
- docs(README): fix the community link to Telegram and add a link to the CosmWasm icon ([#2597])
- Updated MIGRATING.md ([#2595])
- chore: fix some typos ([#2591])
- core: assert BLS12-381 generator length invariants ([#2586])
- Improved development scripts ([#2581])
- Fix articles in `Int` type comments ([#2576])
- CI: migrate workflows to checkout v6 ([#2564])
- chore: fix some comments ([#2562])
- doc: fix  typos ([#2561])
- docs: fix minor grammar ([#2560])
- chore: fix some typos and inaccuracies ([#2559])
- Fix typo ([#2558])
- chore: fix typo in README.md ([#2556])
- ci: upgrade GitHub Action to download-artifact@v5 ([#2555])
- docs: fix typos ([#2554])
- chore: fix minor typos ([#2551])
- chore: fix minor typos ([#2550])
- Correct minor grammar mistakes ([#2549])
- docs: fix typo ([#2547])
- Moved MSRV.md to Wiki ([#2546])
- Moved CHECKS.md content to Wiki ([#2545])
- Updated schemas ([#2544])
- chore: fix typos in function names ([#2542])
- fix: grammar issues in contracts and IBC code comments ([#2541])
- chore: Remove duplicate words to make the comments more readable ([#2540])

ISSUES:

[#2594]: https://github.com/CosmWasm/cosmwasm/issues/2594
[#2579]: https://github.com/CosmWasm/cosmwasm/issues/2579
[#2578]: https://github.com/CosmWasm/cosmwasm/issues/2578
[#2577]: https://github.com/CosmWasm/cosmwasm/issues/2577
[#2536]: https://github.com/CosmWasm/cosmwasm/issues/2536

PULL REQUESTS:

[#2603]: https://github.com/CosmWasm/cosmwasm/pull/2603
[#2602]: https://github.com/CosmWasm/cosmwasm/pull/2602
[#2601]: https://github.com/CosmWasm/cosmwasm/pull/2601
[#2597]: https://github.com/CosmWasm/cosmwasm/pull/2597
[#2595]: https://github.com/CosmWasm/cosmwasm/pull/2595
[#2591]: https://github.com/CosmWasm/cosmwasm/pull/2591
[#2586]: https://github.com/CosmWasm/cosmwasm/pull/2586
[#2581]: https://github.com/CosmWasm/cosmwasm/pull/2581
[#2576]: https://github.com/CosmWasm/cosmwasm/pull/2576
[#2564]: https://github.com/CosmWasm/cosmwasm/pull/2564
[#2562]: https://github.com/CosmWasm/cosmwasm/pull/2562
[#2561]: https://github.com/CosmWasm/cosmwasm/pull/2561
[#2560]: https://github.com/CosmWasm/cosmwasm/pull/2560
[#2559]: https://github.com/CosmWasm/cosmwasm/pull/2559
[#2558]: https://github.com/CosmWasm/cosmwasm/pull/2558
[#2556]: https://github.com/CosmWasm/cosmwasm/pull/2556
[#2555]: https://github.com/CosmWasm/cosmwasm/pull/2555
[#2554]: https://github.com/CosmWasm/cosmwasm/pull/2554
[#2551]: https://github.com/CosmWasm/cosmwasm/pull/2551
[#2550]: https://github.com/CosmWasm/cosmwasm/pull/2550
[#2549]: https://github.com/CosmWasm/cosmwasm/pull/2549
[#2547]: https://github.com/CosmWasm/cosmwasm/pull/2547
[#2546]: https://github.com/CosmWasm/cosmwasm/pull/2546
[#2545]: https://github.com/CosmWasm/cosmwasm/pull/2545
[#2544]: https://github.com/CosmWasm/cosmwasm/pull/2544
[#2542]: https://github.com/CosmWasm/cosmwasm/pull/2542
[#2541]: https://github.com/CosmWasm/cosmwasm/pull/2541
[#2540]: https://github.com/CosmWasm/cosmwasm/pull/2540

```
