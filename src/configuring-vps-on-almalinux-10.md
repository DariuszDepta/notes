# Configuring VPS on AlmaLinux 10

> Docker is preinstalled by VPS vendor

## Change password

After logging-in for the first time to VPS as a `root`, change the password:

```shell
$ passwd
```

## Update system

```shell
$ dnf update
```

## Check Docker

```shell
$ docker --version
Docker version 29.4.0, build 9d7ad9f
```

## Install Docker Compose

Check the newest version of Docker Compose here: [https://github.com/docker/compose/releases](https://github.com/docker/compose/releases).

```shell
$ curl -L https://github.com/docker/compose/releases/download/v5.1.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
$ chmod +x /usr/local/bin/docker-compose
$ docker-compose --version
Docker Compose version v5.1.2
```

Sometimes it may be handy to use shorter name, like `dkc` to run `Docker Compose`,
in this case create a symbolic link:

```shell
$ ln -s /usr/local/bin/docker-compose /usr/bin/dkc
$ dkc --version
Docker Compose version v5.1.2 
```

## Install nginx

```shell
$ dnf install nginx
$ systemctl start nginx
$ systemctl enable nginx
$ systemctl status nginx
```

## Update firewall

```shell
$ dnf install firewalld
$ systemctl start firewalld
$ systemctl enable firewalld
$ firewall-cmd --permanent --zone=public --add-service=https --add-service=http
$ firewall-cmd --reload
```

## Install Certbot

```shell
$ dnf install epel-release
$ dnf install certbot python3-certbot-nginx
$ certbot --version
certbot 4.2.0
```

## Install Docker registry

```shell
$ docker pull registry:2
$ cd /opt
$ mkdir registry
$ cd registry
$ mkdir auth
$ mkdir certs
$ mkdir data
$ touch docker-compose.yml
```

Write the following content of the `docker-compose.yml` file in `/opt/registry` directory:

```yaml
services:
  registry:
    image: registry:2
    restart: always
    environment:
      REGISTRY_AUTH: htpasswd
      REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd
      REGISTRY_AUTH_HTPASSWD_REALM: Registry Realm
    volumes:
     - /opt/registry/data:/var/lib/registry
     - /opt/registry/certs:/certs
     - /opt/registry/auth:/auth
```

To create the password for `<user-name>`, change to `/opt/registry` directory and run:

```shell
$ dnf install httpd-tools
$ htpasswd -Bc auth/htpasswd <user-name>
```

Generate and copy certificates for `<domain-name>`:

```shell
$ certbot certonly --nginx
$ cp /etc/letsencrypt/live/<domain-name>/fullchain.pem /opt/registry/certs/
$ cp /etc/letsencrypt/live/<domain-name>/privkey.pem /opt/registry/certs/
```

Start the registry:

```shell
$ dkc up --no-start
$ dkc start
$ docker ps
```

Login to Docker registry (from client machine):

```shell
docker login -u <user-name> <domain-name>
```
