# Opinionated crate maintenance

## Files to ignore

Minimal `.gitignore` content:

```gitignore
.idea/
target/
book/
.DS_Store
```

## Code formatting

Minimal `rustfmt.toml` content:

```toml
imports_granularity = "Module"
tab_spaces = 2
max_width = 180
```

To format Rust code, run:

```shell
cargo +nightly fmt
```

or using [taskcmd] definition: 

```text
  .fmt
    .desc Runs code formatter
    .cmd cargo +nightly fmt
```

---

## Licenses

To add licenses, run:

```shell
magg licenses
```

## Code of conduct

To add a code of conduct, run:

```shell
magg code-of-conduct
```

**Topics to cover**


- Code coverage
- README.md
  - badges
  - licensing
  - overview
  - auto-generating
- Made by human
- `docs` directory
- `manual` directory
- Publishing manual
- Semantic versioning
- Changelog

[taskcmd]: https://crates.io/crates/taskcmd
