# Using `pass` tool in Fedora

## Installation

```shell
sudo dnf install pass
```

```shell
sudo dnf install gnupg2
```

## Setup

Check is any keys already exist:

```shell
gpg --list-keys
```

Output:

```text
gpg: directory '~/.gnupg' created
gpg: ~!/.gnupg/trustdb.gpg: trustdb created
```

The `~/.gnugpg` directory should look like this:

```shell
tree .gnugpg
``` 

Output:

```text
.
├── common.conf
├── public-keys.d
│   ├── pubring.db
│   └── pubring.db.lock
└── trustdb.gpg

2 directories, 4 files
```

If `public-keys.d` directory does not exist, then run:

```shell
gpg -K
```

Generate new GPG key:

```shell
gpg --generate-key
```

Initialize your password store with generated GPG key.

```shell
pass init GPG-ID
```

where `GPG-ID` is the email address of your generated GPG key. 

Output:

```text
Password store initialized for GPG-ID
```

## References

- <https://fedoramagazine.org/using-pass-to-manage-your-passwords-on-fedora/>
