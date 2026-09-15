# Aliases

## Fedora Linux

```shell
cd /etc/profile.d
```

```
sudo touch my-aliases.sh
```

Copy and paste to `my-aliases.sh`:

```text
alias la='ls -lAh --color=auto'
alias gits='git status'
alias gitcup='git add . && git commit -am "Updates." && git push'
alias gitcu='git add . && git commit -am "Updates."'
alias gitfap='git fetch --all --prune'
alias dkc='docker compose'
```

Restart terminal.

## macOS

```shell
cd ~
touch .aliases
```

Copy and paste to `.aliases`:

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
