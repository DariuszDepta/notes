# Git useful commands

## Add alias for displaying the status

```shell
git config --global alias.s status
```

## Display current configuration

```shell
git config --list
```

## Add user configuration

```shell
git config --global user.name "Your Name"
```

```shell
git config --global user.email "name@mail.com"
```

## Set pull/rebase behavior

```shell
git config --global pull.rebase true
```

## Set the remote as upstream:

```shell
git config --global push.autoSetupRemote true
````

## Remove remote branches from local repository

```shell
git remote prune origin
```

## Delete the local branch that was pruned

```shell
git branch -D name-of-the-branch-to-delete
```

## Show all branches

```shell
git branch -a
```

## Discover changes between two branches

```shell
git diff --name-status branch_one..branch_two
```

## Compare two branches

```shell
git diff branch_one..branch_two
```

## Use another identity

```shell
git config core.sshcommand "ssh -i ~/.ssh/your_private_key -o IdentitiesOnly=yes -F /dev/null"
```

## Remove last commit

```shell
git reset --hard HEAD^
```

```shell
git push origin -f
```

## Working with remotes

### View existing remotes

```shell
git remote
```

or with showing URLs:

```shell
git remote -v
```

### Add a remote

```shell
git remote add <name> <url>
```

e.g.:

```shell
git remote add private https://github.com/username/private_repo.git
```

### Remove a remote

```shell
git remote remove <name>
```

### Rename a remote

```shell
git remote rename <old-name> <new-name>
```

### Change remote URL

```shell
git remote set-url <name> <new-url>
```

### Example usage

```shell
git remote add private https://github.com/username/private_repo.git
git push -u private main
```

> [!TIP]
> `-u`, `--set-upstream`
> 
> For every branch that is up to date or successfully pushed, add upstream (tracking) reference,
> used by argument-less git-pull and other commands.
