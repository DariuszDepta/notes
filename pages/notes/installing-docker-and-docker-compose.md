# Installing Docker and Docker Compose

## Fedora Linux

```shell
sudo dnf -y install dnf-plugins-core
```

```shell
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

```shell
sudo dnf install docker-ce docker-ce-cli containerd.io
```

```shell
sudo systemctl start docker
```

```shell
sudo systemctl enable docker
```

Add a user to **docker** group:

```shell
sudo groupadd docker
```

```shell
sudo usermod -aG docker $USER
```

```shell
newgrp docker
```

## macOS

### Install Docker

```shell
brew install docker
```

```shell
brew install colima
```

```shell
brew services start colima
```

Restart.

Check the installed Docker version:

```shell
docker --version
```

Output:

```text
Docker version 29.1.2, build 890dcca
```

The login credentials are stored in:

```text
/Users/user_name/.docker/config.json
```

It is not a safe way to sore credentials, anyway, after modifying this file run:

```shell
colima restart
```

### Install Docker Compose

```shell
brew install docker-compose
```

Update `.docker/config.json` file, add the following entry:

```text
  "cliPluginsExtraDirs": [
    "/opt/homebrew/lib/docker/cli-plugins"
  ]
```

```shell
colima restart
```

Check the installed version:

```shell
docker-compose version
```
Output:

```text
Docker Compose version 5.0.0
```

## References

- [Install Docker Engine on Fedora](https://docs.docker.com/engine/install/fedora/)
