# Git server

Install Git:

```shell
sudo yum install git
```

Create user:

```shell
sudo useradd -r -m -U -d /home/git -s /bin/bash git
```

Switch to user **git**:

```shell
sudo su - git
```

Create a directory for SSH keys:

```shell
mkdir -p ~/.ssh && chmod 0700 ~/.ssh
```

Create a file for storing authorized SSH keys:

```shell
touch ~/.ssh/authorized_keys && chmod 0600 ~/.ssh/authorized_keys
```

Disable shell for `git` user:

```shell
cat /etc/shells   
which git-shell   
sudo -e /etc/shells
```

```shell
sudo chsh git -s $(which git-shell)
```

Create an empty repository, must be created under `/home/git`:

```shell
git init --bare your_repository_name.git
```

Migrate the whole repository from existing repository (e.g. on Bitbucket):

```shell
git clone --bare git@bitbucket.org:company_name/your_repository_name.git
cd your_repository_name.git
git push --mirror git@your_domain:~/your_repository_name.git
```

Clone from repository:

```shell
git clone git@your_domain:~/your_repository_name.git
```

References:

- [Git on the server](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server)
