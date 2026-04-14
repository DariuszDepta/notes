# Configuring VPS on AlmaLinux 10 with Docker

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

Sometimes it may be handy to use shorter name, like `dkc` to run `Docker Compose`, so create a symlink:

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
```

## Update firewall

```shell
$ dnf install firewalld
systemctl start firewalld
systemctl enable firewalld
firewall-cmd --permanent --zone=public --add-service=https --add-service=http
firewall-cmd --reload
```

## Install Certbot

```shell
yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install certbot python3-certbot-nginx
certbot certonly --nginx
```

## Install Docker registry

```shell
docker pull registry:2
cd /opt
mkdir registry
cd registry
mkdir auth
mkdir certs
mkdir data
touch docker-compose.yml
```

Content of the `docker-compose.yml` file

```yaml
version: '3'

services:

  registry:
    restart: always
    image: registry:2
    ports:
     - "port_number:5000"
    environment:
      REGISTRY_AUTH: htpasswd
      REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd
      REGISTRY_AUTH_HTPASSWD_REALM: Registry Realm
    volumes:
     - /opt/registry/data:/var/lib/registry
     - /opt/registry/certs:/certs
     - /opt/registry/auth:/auth
```

Create password file, change to `/opt/registry` directory:

```shell
yum install httpd-tools
docker run --entrypoint htpasswd httpd:2 -Bbn user password > auth/htpasswd ; history -d $(history 1)
```

Generate and copy certificates:

```shell
certbot certonly --nginx
cp /etc/letsencrypt/live/domain_name/fullchain.pem /opt/registry/certs/
cp /etc/letsencrypt/live/domain_name/privkey.pem /opt/registry/certs/
```

Run the registry

```shell
dkc up --no-start
dkc start
docker ps
```

Login to Docker registry

```shell
docker login -u user_name domain_name
```
