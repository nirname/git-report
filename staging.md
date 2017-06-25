# Staging

<section>
```graphviz
digraph {
  graph[bgcolor="transparent"]
  node[fontsize=20]

  subgraph areas {
    node[shape="rect" style="filled"]
    wd [fillcolor="#f1a340" label="Working Directory"]
    sa [fillcolor="#f7f7f7" label="Staging Area"]
    rp [fillcolor="#998ec3" label="Repository"]
  }

  subgraph commands {
    node[shape="plaintext"]
    add
    commit
    reset
  }

  wd -> add [arrowhead="none"]
  add -> sa
  sa -> commit [arrowhead="none"]
  commit -> rp
  sa -> reset [dir="back"]
  reset -> rp [arrowhead="none"]
}
```
</section>

<section>
## Add

```shell
git add .
```

## Reset
```shell
git reset
```
</section>

<section>
## Remove

```shell
git rm
git add -A
git add --all
```
</section>

<section>
## Save

```shell
git status
git commit
```

```shell
git commit -m 'Here goes message'
```
</section>
