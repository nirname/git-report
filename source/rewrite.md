# Rewrite

<section>
**Revert**


```shell
git revert HEAD~1
```

```graphviz
digraph {
  graph[splines=false fontname="Arial" bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  subgraph nodes {
    node [shape="circle"]
    {
      node [color="#e66101" fillcolor="#e66101"]
      A C
    }
    {
      node [color="#5e3c99" fillcolor="#5e3c99"]
      B
    }
    {
      node [color="#5e3c99" penwidth=2 fontcolor="#5e3c99" fillcolor="#5e3c99" style=dashed]
      "-B"
    }
  }

  subgraph labels {
    node [shape="rect"]
    {
      node[color="#4dac26" fillcolor="#4dac26"]
      HEAD
    }
    {
      node[color="#4dac26" fillcolor="#4dac26" fontcolor="#4dac26" fillcolor="#4dac26" style=dashed penwidth=2]
      "HEAD'"
    }
    {
      node[color="#0571b0" fillcolor="#0571b0"]
      feature
    }
    {
      node[color="#0571b0" fillcolor="#0571b0" fontcolor="#0571b0" fillcolor="#0571b0" style=dashed penwidth=2]
      "feature'"
    }
  }

  A -> B -> C -> "-B"
  B:ne -> "-B":nw

  {
    rank = same
    C -> feature -> HEAD [dir=back]
  }

  {
    rank = same
    "-B" -> "feature'" -> "HEAD'" [dir=back]
  }

}
```
</section>

<section>

```
git checkout feature && git rebase master
```

```graphviz
digraph {
  graph[splines=false fontname="Arial" bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  subgraph nodes {
    node [shape="circle"]
    {
      node [color="#e66101" fillcolor="#e66101"]
      B C
    }
    {
      node [color="#5e3c99" fillcolor="#5e3c99"]
      D E
    }
    {
      node [color="#5e3c99" penwidth=2 fontcolor="#5e3c99" fillcolor="#5e3c99" style=dashed]
      "D'" "E'"
    }
    {
      node [color="#018571" fillcolor="#018571"]
      G
    }
    {
      node [color="#e66101" fillcolor="#e66101"]
    }
    F [style="invisible"]
  }

  subgraph labels {
    node [shape="rect"]
    {
      node[color="#4dac26" fillcolor="#4dac26"]
      HEAD
    }

    {
      node[color="#4dac26" fillcolor="#4dac26" fontcolor="#4dac26" style=dashed penwidth=2]
      "HEAD'"
    }

    {
      node[color="#0571b0" fillcolor="#0571b0"]
      master feature
    }
    {
      node[color="#0571b0" fillcolor="#0571b0" fontcolor="#0571b0" style=dashed penwidth=2]
      "feature'"
    }
  }

  { B -> C }
  { C -> D -> E }
  { E -> F [style=invis] }
  { C -> G -> "D'" -> "E'" }

  {
    rank = same
    D -> G [style=invis]
    G -> master [dir=back]
  }

  {
    rank = same
    HEAD -> feature -> E
    E -> "D'" [style=invis]
  }

  {
    rank = same
    F "E'" -> "feature'" -> "HEAD'"[dir="back"]
  }

  D -> "D'"
  E -> "E'"

}
```
</section>

<section>
**Interactive Rebase**

```
git co -b before-rebase
for i in `seq 10 30`; do echo $i > $i && git add . && git cm -m$i ; done
git co -b after-rebase
git rebase -i HEAD~21 # master
```

```
# Rebase cc9a7b9..10cf5fa onto cc9a7b9 (21 command(s))
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
```
</section>

<section>

```shell
git cherry-pick cc9a7b9
```

```graphviz
digraph {
  graph[splines=false fontname="Arial" bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  subgraph nodes {
    node [shape="circle"]
    {
      node [color="#e66101" fillcolor="#e66101"]
      C
    }
    {
      node [color="#5e3c99" fillcolor="#5e3c99"]
      D
    }
    {
      node [color="#8E8E8E" fillcolor="#8E8E8E"]
      E
    }
    {
      node [color="#5e3c99" penwidth=2 fontcolor="#5e3c99" fillcolor="#5e3c99" style=dashed]
      "D'"
    }
    {
      node [color="#018571" fillcolor="#018571"]
      G
    }
    {
      node [color="#e66101" fillcolor="#e66101"]
    }
  }

  subgraph labels {
    node [shape="rect"]
    {
      node[color="#4dac26" fillcolor="#4dac26"]
      HEAD
    }

    {
      node[color="#0571b0" fillcolor="#0571b0"]
      master feature
    }
    {
      node[color="#0571b0" fillcolor="#0571b0" style=dashed fontcolor="#0571b0" penwidth=2]
      "master'"
    }
  }

  { C -> D -> E }
  { C -> G -> "D'" }

  {
    rank = same
    D -> G [style=invis]
    G -> master [dir=back]
  }

  {
    rank = same
    HEAD -> feature -> E
    E -> "D'" [style=invis]
  }

  D -> "D'"
  {
    rank = same
    "D'" -> "master'" [dir=back]
  }

}
```
</section>