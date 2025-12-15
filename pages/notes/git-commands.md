# Git useful commands

Add alias for displaying the status:

```shell
git config --global alias.s status
```

Display current configuration:

```shell
git config --list
```

Add user configuration:

```shell
git config --global user.name "Your Name"
```

```shell
git config --global user.email "name@mail.com"
```

Set pull/rebase behavior:

```shell
git config --global pull.rebase true
```

To automatically push the current branch and set the remote as upstream, set:

```shell
git config --global push.autoSetupRemote true
````

Remove remote branches from local repository, that no more exist in remote repository:

```shell
git remote prune origin
```

Delete the local branch that was pruned:

```shell
git branch -D name-of-the-branch-to-delete
```

Show all branches:

```shell
git branch -a
```

Discover the changes between two branches

```shell
git diff --name-status branch_one..branch_two
```

Compare two branches

```shell
git diff branch_one..branch_two
```

Use another identity while using multiple GitHub accounts:

```shell
git config core.sshcommand "ssh -i ~/.ssh/your_private_key -o IdentitiesOnly=yes -F /dev/null"
```
