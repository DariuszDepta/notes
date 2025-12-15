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

```shell
brew install docker docker-desktop
```

```shell
brew install colima
```

```shell
brew services start colima
```

Restart.

The login credentials are stored in:

```text
/Users/user_name/.docker/config.json
```

## References

- [Install Docker Engine on Fedora](https://docs.docker.com/engine/install/fedora/)
