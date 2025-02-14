# Task file template for Rust projects

```yaml
version: '3'

silent: true

tasks:

  build:
    desc: Builds in debug mode
    cmds:
      - cmd: cargo build

  clean:
    desc: Cleans all targets
    cmds:
      - cmd: cargo clean

  cov:
    desc: Generates code coverage report
    cmds:
      - cmd: cargo llvm-cov --no-cfg-coverage --no-cfg-coverage-nightly --workspace --html
      - cmd: echo -e "\n\e[1;32mOpen coverage report\x3A\e[0m file:///$(pwd)/target/llvm-cov/html/index.html\n"

  doc:
    desc: Generates documentation
    cmds:
      - cmd: cargo doc --no-deps

  doc-open:
    desc: Generates documentation and opens it in browser
    cmds:
      - cmd: cargo doc --no-deps --open

  test:
    desc: Runs tests in debug mode
    cmds:
      - cmd: cargo test

  clippy:
    desc: Runs clippy for all targets
    cmds:
      - cmd: cargo clippy --all-targets

  fmt:
    desc: Runs code formatter
    cmds:
      - cmd: cargo +nightly fmt

  help:
    desc: Runs short help option
    cmds:
      - cmd: cargo run -- -h

  help-long:
    desc: Runs long help option
    cmds:
      - cmd: cargo run -- --help

  install:
    desc: Builds and installs release version
    cmds:
      - cmd: cargo +stable install <name> --path=. --force
```
