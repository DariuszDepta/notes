# Discovering Cosmos

See: <https://docs.cosmos.network>

## Prerequisites

### Install the newest version of Go

See: <https://go.dev/doc/install>

Check installed **Go** version:

```shell
go version
```

Output:

```text
go version go1.26.1 linux/amd64
```

### Install the newest version of IgniteCLI

See: <https://docs.ignite.com/welcome/install>
  
Check installed **Ignite CLI** version:

```shell
ignite version
```

Output:

```text
Ignite CLI version:             v29.9.2-dev
Ignite CLI build date:          2026-03-23T17:16:10Z
Ignite CLI source hash:         0e62049549f35d43be315e251af8429c00d90242
Ignite CLI config version:      v1
Cosmos SDK version:             v0.53.6
Buf.build version:              undefined
Your OS:                        linux
Your arch:                      amd64
Your go version:                go version go1.26.1 linux/amd64
```

### Install jq

See: <https://jqlang.github.io/jq/download>

Check installed **jq** version:

```shell
jq --version
```

Output:

```text
jq-1.8.1
```

### Install curl

See: <https://curl.se>

Check installed **curl** version:

```shell
curl --version
```

Output:

```text
curl 8.15.0 [...]
```

## Create a chain

Scaffold a chain named `disco`:

```shell
ignite scaffold chain disco
```

Output:
 
```text
⭐️ Successfully created a new blockchain 'disco'.
👉 Get started with the following commands:

 % cd disco
 % ignite chain serve

Documentation: https://docs.ignite.com
```

Follow the instructions above:

```shell
cd disco
```

```shell
ignite chain serve
```
