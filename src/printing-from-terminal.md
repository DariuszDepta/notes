# Printing from terminal

List available printers:

```shell
lpstat -p
```

Print a PDF document with fitting to page size:

```shell
lpr -P printer_name -o fit-to-page file.pdf
```
