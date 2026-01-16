# Perfect SSG

**Requirements for building perfect static site generator**

> [!NOTE]
> Sometime in the future, when AI can really take the requirements as an input and return a working system as an output.

## Code blocks

### Syntax highlighting

Code blocks are text blocks wrapped around by strings of 3 backticks, like this:

````md
```rust
#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {
    #[returns(ResolveRecordResponse)]
    ResolveRecord { name: String },
}

#[cw_serde]
pub struct ResolveRecordResponse {
    pub address: Option<String>,
}
```
````

Supported languages:
- Rust
- Java
- C
- C++
- ...

### Diff highlighting

There should be a possibility to highlight lines marked with `+` and `-` characters, like in `diff` tool.
This should be possible also when standard syntax highlighting is used.

````md
```rust diff 
- use cosmwasm_schema::cw_serde;
+ use cosmwasm_schema::{cw_serde, QueryResponses};
```
````

Line starting with `+` character (first character in line) should be highlighted using green background
color (exact color and transparency should be configurable). Highlighting should be applied
starting from `+` up to the end of the text (not line!). This way it should nicely work with line highlighting.

The same applies to lines starting with `-`, but the background color must be obviously red (configurable).

Diff highlighting should simply work without specifying any syntax highlighting.

```diff
- remove this line
+ add this line
```

- Syntax highlighting should also work for _inline_ code blocks, like: `canonical_addr.as_slice()`
