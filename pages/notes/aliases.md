# Aliases

## Fedora Linux

```shell
cd /etc/profile.d
touch my-aliases.sh
```

Copy/paste to `my-aliases.sh`:

```text
alias la='ls -lAh --color=auto'
alias gitcup='git add . && git commit -am "Updates." && git push'
alias gitcu='git add . && git commit -am "Updates."'
alias gitfap='git fetch --all --prune'
```

Restart terminal.

## macOs

```shell
cd ~
touch .aliases
```

Copy/paste to `~/.aliases`:

```text
alias la='ls -lAh --color=auto'
alias gitcup='git add . && git commit -am "Updates." && git push'
alias gitcu='git add . && git commit -am "Updates."'
alias gitfap='git fetch --all --prune'
```

Add this line to `~/.zshenv`:

```shell
[ -f ~/.aliases ] && source ~/.aliases
```

Restart terminal.