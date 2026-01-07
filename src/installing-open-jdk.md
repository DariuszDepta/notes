# Installing OpenJDK

> How to install version 25.0.1 of OpenJDK

## macOS

Download:

- <https://download.java.net/java/GA/jdk25.0.1/2fbf10d8c78e40bd87641c434705079d/8/GPL/openjdk-25.0.1_macos-aarch64_bin.tar.gz>

```shell
tar -xzvf openjdk-25.0.1_macos-aarch64_bin.tar.gz
```

```shell
sudo mv jdk-25.0.1.jdk /Library/Java/JavaVirtualMachines/
```

Check installed version:

```shell
java --version
```

Output:

```text
openjdk 25.0.1 2025-10-21
OpenJDK Runtime Environment (build 25.0.1+8-27)
OpenJDK 64-Bit Server VM (build 25.0.1+8-27, mixed mode, sharing)
```

## References

- [OpenJDK JDK 25.0.1 General-Availability Release](https://jdk.java.net/25/)
