# YubiKey

## Overview

YubiKey can be used as 2FA in GitHub, GitLab, Google Account, ... ?

> [!IMPORTANT]
> Set the PIN for each YubiKey.

## Install YubiKey manager

### Fedora

```shell
sudo dnf install ykman 
```

### macOs

```shell
brew install ykman
```

## Usage

### List connected YubiKeys

```shell
ykman list
```

Output should be similar to this:

```text
YubiKey 5C NFC (5.7.1) [OTP+FIDO+CCID] Serial: 12345678
```

### Set PIN

```shell
ykman fido access change-pin
```

### Check credentials

```shell
ykman fido credentials list
```

Output should be similar to this:

```text
Credential ID  RP ID       Username      Display name 
23478ea6...    google.com  john@doe.com  John Doe
a4bc21db...    google.com  john@doe.org  John Doe
```
