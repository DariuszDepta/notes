# Renaming Rust tests or benchmarks

To rename Rust tests or benchmarks use [**renumber**][renumber] crate.

## Installation

```shell
cargo install renumber
```

## Usage

```shell
renumber file_name_with_tests_or_benchmarks
```

## Integration with JetBrains tools

Open **Settings** | **Tools** | **External Tools** window.
 
Add a new configuration as shown below:

![renumber-1](./renumber-1.webp)

Add new keyboard shortcut:

![renumber-2](./renumber-2.webp)

Accept changes:

![renumber-3](./renumber-3.webp)

[renumber]: https://crates.io/crates/renumber
