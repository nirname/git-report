# Branches

<section>
Список веток

```shell
$ git branch
* master
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
    C -> master -> HEAD [dir="back"]
  }
}
```
</section>

<section>
Создание ветки

```shell
git branch feature
```

Переключение

```shell
git checkout feature
```

Сокращённо

```shell
git checkout -b feature
```
</section>

<section>
Новая ветка

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
    master feature
  }

 {
    rank = same
    C -> master [dir="back"]
  }

  {
    rank = same
    HEAD -> feature -> C
  }

}
```
</section>

<section>
Разработка

```graphviz
digraph {
  graph[ splines=false fontname="Arial" bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  subgraph nodes {
    node [shape="circle"]
    {
      node [color="#e66101" fillcolor="#e66101"]
      A B C
    }
    {
      node [color="#5e3c99" fillcolor="#5e3c99"]
      D E
    }
  }

  { A -> B -> C -> D -> E }

  {
    node [shape="rect" color="#4dac26" fillcolor="#4dac26"]
    HEAD
  }

  {
    node [shape="rect" color="#0571b0" fillcolor="#0571b0"]
    master feature
  }

 {
    rank = same
    C -> master [dir="back"]
  }

  {
    rank = same
    HEAD -> feature -> E
  }
}
```
</section>

<section>
Слияние **fast-forward, "Перемотка"**

```shell
git checkout master
git merge feature
```

```graphviz
digraph {
  graph[ splines=false fontname="Arial" bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  subgraph nodes {
    node [shape="circle" color="#e66101" fillcolor="#e66101"]
    {
      node [color="#e66101" fillcolor="#e66101"]
      A B C
    }
    {
      node [color="#5e3c99" fillcolor="#5e3c99"]
      D E
    }
  }

  { A -> B -> C }
  { C -> D -> E }

  {
    node [shape="rect" color="#4dac26" fillcolor="#4dac26"]
    HEAD
  }

  {
    node [shape="rect" color="#0571b0" fillcolor="#0571b0"]
    master feature
  }

  {
    rank = same
    feature -> E
    E -> master -> HEAD [dir = "back"]
  }
}
```
</section>

<section>
Слияние **--no-ff**

```shell
git checkout master
git merge --no-ff feature
```

```graphviz
digraph {
  graph[ splines=false fontname="Arial" bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  subgraph nodes {
    node [shape="circle"]
    {
      node [color="#e66101" fillcolor="#e66101"]
      A B C
    }
    {
      node [color="#5e3c99" fillcolor="#5e3c99"]
      D E
    }
    {
      node [color="#e66101" fillcolor="#e66101"]
      F
    }
  }

  { A -> B -> C -> F }
  { C -> D -> E -> F }

  {
    node [shape="rect" color="#4dac26" fillcolor="#4dac26"]
    HEAD
  }

  {
    node [shape="rect" color="#0571b0" fillcolor="#0571b0"]
    master feature
  }

  {
    rank = same
    F -> master -> HEAD [dir="back"]
  }

  {
    rank = same
    feature -> E
  }
}
```
</section>

<section>
Слияние при наличии других коммитов

```graphviz
digraph {
  graph[ splines=false fontname="Arial" bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  subgraph nodes {
    node [shape="circle"]
    {
      node [color="#e66101" fillcolor="#e66101"]
      A B C
    }
    {
      node [color="#5e3c99" fillcolor="#5e3c99"]
      D E
    }
    {
      node [color="#018571" fillcolor="#018571"]
      G
    }
    {
      node [color="#e66101" fillcolor="#e66101"]
      F
    }
  }

  { A -> B -> C -> G -> F }
  { C -> D -> E -> F }

  {
    node [shape="rect" color="#4dac26" fillcolor="#4dac26"]
    HEAD
  }

  {
    node [shape="rect" color="#0571b0" fillcolor="#0571b0"]
    master feature
  }

  {
    rank = same
    G D
  }

  {
    rank = same
    F -> master -> HEAD [dir="back"]
  }

  {
    rank = same
    feature -> E
  }
}
```
</section>
