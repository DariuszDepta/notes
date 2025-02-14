# Installing Node/NPM/NVM

Check installed version of **node**:

```shell
$ node -v
```

Check installed version of **npm**:

```shell
$ npm -v
```

Check installed version of **nvm**:

```shell
$ nvm -v
```

## NVM

Install **nvm**:

```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

or

```shell
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

See: https://github.com/nvm-sh/nvm

Output:

```text
=> Compressing and cleaning up git repository

=> Appending nvm source string to /home/user/.bashrc
=> Appending bash_completion source string to /home/user/.bashrc
=> You currently have modules installed globally with `npm`. These will no
=> longer be linked to the active version of Node when you install a new node
=> with `nvm`; and they may (depending on how you construct your `$PATH`)
=> override the binaries of modules installed with `nvm`:

/usr/local/lib
└── npm-check-updates@17.1.14
=> If you wish to uninstall them at a later point (or re-install them under your
=> `nvm` node installs), you can remove them from the system Node as follows:

     $ nvm use system
     $ npm uninstall -g a_module

=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## Node

Install **node** version you need:

```shell
$ nvm install v18.16.0
```

Install the latest LTS release of Node.js:

```shell
$ nvm install --lts
```

List all available versions to install:

```shell
$ nvm ls-remote
```

## NPM

Install the latest version:

```shell
$ npm install -g npm@latest
```

## [npmjs](https://www.npmjs.com)

To add user for logging in [npmjs](https://www.npmjs.com) 

```shell
$ npm adduser
```

and follow the instructions in the browser.

Publish package:

```shell
$ npm publish
```
