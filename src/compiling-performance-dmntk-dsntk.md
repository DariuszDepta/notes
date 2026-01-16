# Compiling performance

Comparison of the compiling performance using different processors and operating systems.

> [!NOTE]
> All numbers in results are given in seconds.

## Tested crates

```shell
cargo install dmntk --force
```

```shell
cargo install dsntk --force
```

## Tested versions

|  [dmntk]   |  [dsntk]   |
|:----------:|:----------:|
| **v0.3.7** | **v0.2.0** |

## macOS

### M4 Pro

macOS Tahoe 26.2, M4 Pro (12 cores), 64GB unified memory

|        [dmntk] |        [dsntk] |
|---------------:|---------------:|
|          24.98 |          27.44 |
|          24.66 |          26.60 |
|          25.16 |          26.35 |
|          25.03 |          26.72 |
|          25.14 |          26.63 |
|          25.86 |          27.59 |
|          25.41 |          26.50 |
|          25.92 |          26.71 |
|          24.93 |          26.28 |
|          24.95 |          26.34 |
| avg: **25.20** | avg: **26.72** |


[dmntk]: https://crates.io/crates/dmntk
[dsntk]: https://crates.io/crates/dsntk

## Fedora Linux 43

### Intel Core® i5

Intel Core® i5-8500T (6 cores), CPU@2.1GHz, 32GB DDR4@2666MT/s

|       [dmntk] |       [dsntk] |
|--------------:|--------------:|
|          89.0 |          93.0 |
|          92.0 |          90.0 |
|          89.0 |          91.0 |
|          89.0 |          92.0 |
|          89.0 |          91.0 |
|          89.0 |          90.0 |
|          92.0 |          90.0 |
|          88.0 |          91.0 |
|          90.0 |          92.0 |
|          89.0 |          90.0 |
| avg: **89.6** | avg: **91.0** |                                    

### Intel Core® i7 (tbd)

Intel Core® i7-6700 (4 cores), CPU@3.4GHz, 32GB DDR4@2133MT/s

|      [dmntk] |      [dsntk] |
|-------------:|-------------:|
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
| avg: **0.0** | avg: **0.0** |

### AMD Ryzen 7 (tbd)

|      [dmntk] |      [dsntk] |
|-------------:|-------------:|
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
|          0.0 |          0.0 |
| avg: **0.0** | avg: **0.0** |

## Useful commands

Check memory details:

```shell
sudo dmidecode --type memory
```

Check processor details:

```shell
lscpu
```

Clear swap disk:

```shell
sudo swapoff -a
```

```shell
sudo swapon -a
```

A loop for executing tests quasi-automatically:

```shell
for i in $(seq 1 12);
do
  cargo install dmntk --force 2>&1 | grep Finished
done
```

And some helpful Erlang code snippet:

```erlang
A = [89.0,92.0,89.0,89.0,89.0,89.0,92.0,88.0,90.0,89.0].
AvgA = lists:foldl(fun(X, Sum) -> X + Sum end, 0, A) / length(A).
```
