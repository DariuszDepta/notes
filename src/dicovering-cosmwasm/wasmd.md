# wasmd

(tbd)

## Useful commands

### List all keys

Command:

```shell
wasmd keys list --keyring-backend=test
```

Output (it's an example, may differ in your case):

```text
- address: wasm104cecw2t7233tnff92nmfq4n3x9m4x46x83329
  name: alice
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A5YZRzrPqFSwp5D2xSM/FwFDQZV0RbrRYPch97jnb2e4"}'
  type: local
- address: wasm1s50tys9wvh9hnhvct4jc27wpnn56v04nlepcr9
  name: bob
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AiKdbC6+KHphU077KWUPVnNv84Zh2erSlrByzyUCHeW6"}'
  type: local
- address: wasm1my05nkttpz33actpxav6kdtgfr78nnzzh8pdgu
  name: cecil
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A4HqONgHLbbnRpqppudZg+FNK9cRy8/T/7d3SDc1IBGS"}'
  type: local
- address: wasm15dlde68zey5spp3m8xk0nxtmsd4e5a5jrgmdzg
  name: dave
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Agl5qrJKM0mljZdJep191jkkfM1fEpq7wq/RR381Uhx8"}'
  type: local
```

### Query balances

Query balances for `alice`:

```shell
wasmd query bank balances wasm104cecw2t7233tnff92nmfq4n3x9m4x46x83329
```

Output:

```text
balances:
- amount: "999750000000"
  denom: stake
pagination:
  total: "1"
```
