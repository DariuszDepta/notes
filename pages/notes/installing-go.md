---
outline: 'deep'
---

# Installing Go

## Downloading

Download the newest installation version from

- https://golang.org/dl

For Linux, it could be a link:

- https://go.dev/dl/go1.23.5.linux-amd64.tar.gz


## Installing

Follow the installation instructions:

- https://go.dev/doc/install

### Fedora example

Remove the old version:

```shell
$ sudo rm -rf /usr/local/go
```

Unpack the new version:

```shell
$ sudo tar -C /usr/local -xzf go1.23.5.linux-amd64.tar.gz
```

Update the `.bash_profile`:

```bash
# Added by Go installer
export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:$HOME/go/bin
```

Restart user session or reboot.

Check the installed version:

```shell
$ go version
```

Output:

```text
go version go1.23.5 linux/amd64
```
