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