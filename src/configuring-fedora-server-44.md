# Configuring Fedora Server 44

## Generate SSH keys

```shell
mkdir ~/.ssh
cd ~/.ssh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## Copy keys from remote machine

```shell
ssh-copy-id user@address
```

## Install Docker

```shell
sudo dnf config-manager addrepo --from-repofile https://download.docker.com/linux/fedora/docker-ce.repo
sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
systemctl status docker
sudo usermod -aG docker $USER
docker --version
docker compose version
```
