# CHECKOUT

<section>
**Resolve conflicts**

```shell
git rebase master
git pull --rebase
```

```shell
git checkout --ours file.txt # feature
git checkout --theirs file.txt # master
```
</section>

<section>
**Detached**

```shell
git checkout 26c0aa12792e6344f5
```

```graphviz
digraph {
  graph[ splines=false fontname="Arial" bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  subgraph nodes {
    node [shape="circle" color="#e66101" fillcolor="#e66101"]
    A B C
  }

  { A -> B -> C }

  {
    node [shape="rect" color="#4dac26" fillcolor="#4dac26"]
    HEAD
  }

  {
    node [shape="rect" color="#0571b0" fillcolor="#0571b0"]
    master
  }

  {
    rank = same
    B -> HEAD [dir="back"]
  }

  {
    rank = same
    C -> master [dir="back"]
  }
}
```

```shell
git checkout 26c0aa12792e6344f5 -b feature
```
</section>