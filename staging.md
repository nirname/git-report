# Staging

<section>
```graphviz
digraph {
  bgcolor="transparent"
  node[shape="rect" style="filled" fontsize=20]
  edge[fontsize=20]

  "working directory" -> "staging area" [label="   add"]
  "staging area" -> repository [label="   commit"]

  "working directory" [fillcolor="#f1a340"]
  "staging area"      [fillcolor="#f7f7f7"]
  repository          [fillcolor="#998ec3"]
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
