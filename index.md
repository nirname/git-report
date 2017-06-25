<section>
# Git

## Part 1
</section>

<section>
# Init

<section>
Первоначальная настройка **Git**

```shell
git config --global user.name "Nikolay Rozhkov"
git config --global user.email rozhkov@uchi.ru
```
</section>

<section>
Инициализировать новый проект c **Git**

```bash
git init new-project
```

Добавить существуй проект в **Git**

```bash
cd existing-project
git init
git init .
```
</section>
</section>

<section>
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

</section>

<section>
# Undo

Изменение последнего коммита

```shell
git commit --amend
```

Отмена изменений файла

```shell
git checkout -- hello.txt
```

</section>

<section>
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
Слияние **fast forward, "Перемотка"**

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

</section>

<section>
# Git

## Part 2
</section>

<section>
# CHECKOUT

<section>
```
-b
--ours
--theirs
```
</section>

<section>
### Detached

```
git checkout 26c0aa12792e6344f5cc46718631f270b5fbb9b2
```
</section>
</section>

<section>
# Revisions

<section>

```graphviz
digraph {
  esep=1
  bgcolor="transparent"
  node [shape=none fontsize=30 fontcolor="#3182BD"]
  { checkout show "cherry-pick" reset } -> revision
}

```

```bash
$ git show ???
```

</section>

<section>
Возможные значения

**master**

<p class="fragment">
**v1**
</p>

<p class="fragment">
**b1713c7**
</p>

<p class="fragment">
**b1713c7**
</p>
</section>

<section>
Возможные значения

HEAD**@{0}**

<p class="fragment">
HEAD**^**
</p>

<p class="fragment">
HEAD**~**
</p>

</section>

<section>
Выбираем **SHA**

```shell
$ git log
commit b1713c78427b728a2d981981dccb5d6e398b66a6
Author: Nikolay Rozhkov <rozhkov@uchi.ru>
Date:   Wed Jun 21 19:20:54 2017 +0300

    Fixed env

commit 47194bcc4a1413360b42a15f1067605162f58d29
Author: vbratkev <bratkevich.v@gmail.com>
Date:   Tue Jun 20 15:15:26 2017 +0300

    Fix deploy
```

</section>

<section>
Выбираем перемещения **HEAD**

```shell
$ git reflog
b1713c7 HEAD@{0}: commit: Fixed env
47194bc HEAD@{1}: clone: from git@github.com:uchiru/ansible-south-africa.git
```

```shell
$ git show HEAD@{1}
```

</section>

<section>
Выбираем **родителей**

`HEAD^n` **n-й родитель**

<p class="fragment">
`HEAD~n` **n 1-x родителей**
</p>

<p class="fragment">
`HEAD^1^1 == HEAD~2`
</p>
</section>

<section>
Выбираем **родителей**

`HEAD^ == HEAD^1`

`HEAD~ == HEAD~1`

`HEAD  == HEAD^0 == HEAD~0`
</section>

<section>
Выбираем родителей

```graphviz
digraph revisions {
  bgcolor="transparent"
  node [shape="circle" fillcolor="#92B6E6" style=filled]
  { G, H } -> D
  { I, J } -> F
  { D, E, F } -> B
  F -> C
  { B, C } -> A

  A, B, C, I, J[fontcolor="white"]

  A[fillcolor="#40004b"]
  B[fillcolor="#762a83"]
  C[fillcolor="#9970ab"]
  D[fillcolor="#c2a5cf"]
  E[fillcolor="#e7d4e8"]
  F[fillcolor="#d9f0d3"]
  G[fillcolor="#a6dba0"]
  H[fillcolor="#5aae61"]
  I[fillcolor="#1b7837"]
  J[fillcolor="#00441b"]

}
```

</section>

<section>
Выбираем родителей

```graphviz
digraph revisions {
  bgcolor="transparent"
  node [shape="box" fillcolor="#92B6E6" style="rounded,filled"]
  { G, H } -> D
  { I, J } -> F
  { D, E, F } -> B
  F -> C
  { B, C } -> A

  A, B, C, I, J[fontcolor="white"]

  A[fillcolor="#40004b" label="A = A^0"]
  B[fillcolor="#762a83" label="B = A^ = A^1 = A~1"]
  C[fillcolor="#9970ab" label="C = A^2 = A^2"]
  D[fillcolor="#c2a5cf" label="D = A^^ = A^1^1 = A~2"]
  E[fillcolor="#e7d4e8" label="E = B^2 = A^^2"]
  F[fillcolor="#d9f0d3" label="F = B^3 = A^^3"]
  G[fillcolor="#a6dba0" label="G = A^^^ = A^1^1^1 = A~3"]
  H[fillcolor="#5aae61" label="H = D^2 = B^^2 = A^^^2 = A~2^2"]
  I[fillcolor="#1b7837" label="I = F^ = B^3^ = A^^3^"]
  J[fillcolor="#00441b" label="J = F^2 = B^3^2 = A^^3^2"]
}
```

</section>
</section>

