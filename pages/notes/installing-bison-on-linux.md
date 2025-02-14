# Installing Bison on Linux

## General procedure

Head to GNU/Bison web page: https://www.gnu.org/software/bison/

Select the download source, let say GNU/FTP: http://ftp.gnu.org/gnu/bison/

Download the newest version (it was 3.8.2 at the time of writing this post):

```shell
$ wget http://ftp.gnu.org/gnu/bison/bison-3.8.2.tar.gz
```

Unpack sources:

```shell
$ tar -xzf bison-3.8.2.tar.gz
$ cd bison-3.8.2
```

Before proceeding check if **m4** is already installed, if not:

```shell
$ sudo yum install m4
```

Configure, build and install Bison from sources:

```shell
$ ./configure
$ make
$ sudo make install
```

Check the installed version:

```shell
$  bison -V
bison (GNU Bison) 3.8.2
```

## Installing newest Bison

This note describes how to install the newest version of `Bison`.

Open the `GNU Bison` website: https://www.gnu.org/software/bison/
and find the link with mirrors to download the sources.

Open the nearest mirror, e.g. http://ftp.task.gda.pl/pub/gnu/bison/

Search the newest version of Bison, e.g. http://ftp.task.gda.pl/pub/gnu/bison/bison-3.7.6.tar.gz
download it, and save in any directory, e.g. `~/Downloads`.

### Fedora

```shell
$ sudo yum uninstall bison
```

Unpack the archive:

```shell
$ cd ~/Downloads
$ tar -xzf bison-3.7.6.tar.gz
$ cd bison-3.7.6
```

The installation procedure is described in details in `INSTALL` file.

Here is the short path:

```shell
$ ./configure
$ make
$ sudo make install
```

To uninstall current version of Bison execute command:

```shell
$ sudo make uninstall
```

### Debian

```shell
$ sudo apt-get remove bison
```

Unpack the archive:

```shell
$ cd ~/Downloads
$ tar -xzf bison-3.7.6.tar.gz
$ cd bison-3.7.6
```

The installation procedure is described in details in `INSTALL` file.

Here is the short path:

```shell
$ ./configure
$ make
$ sudo make install
```

To uninstall current version of Bison execute command:

```shell
$ sudo make uninstall
```
