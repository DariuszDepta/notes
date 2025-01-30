---
outline: 'deep'
---

[crates.io]: https://crates.io

# Changing crate owner

::: tip
You have to be logged-in to [crates.io] registry before executing any of the following commands.
:::

## Adding owner (user)

```shell
$ cargo owner --add login crate_name
```

For example, to add an owner [DariuszDepta](https://github.com/DariuszDepta) to crate [antex](https://crates.io/crates/antex), type:

```shell
$ cargo owner --add DariuszDepta antex
```

## Adding owner (team)

```shell
$ cargo owner --add github:organization:team crate_name
```

For example, to add a **core** team of [EngosSoftware](https://github.com/EngosSoftware) organization as an owner
to crate [antex](https://crates.io/crates/antex), type:

```shell
$ cargo owner --add github:EngosSoftware:core antex
```

## Removing owner (user)

```shell
$ cargo owner --remove login crate_name
```

For example, to remove an owner [DariuszDepta](https://github.com/DariuszDepta) from crate [antex](https://crates.io/crates/antex), type:

```shell
$ cargo owner --remove DariuszDepta antex
```

## Removing owner (team)

For example, to remove a **core** team of [EngosSoftware](https://github.com/EngosSoftware) organization from being
an owner of the crate [antex](https://crates.io/crates/antex), type:

```shell
$ cargo owner --remove github:EngosSoftware:core antex
```
