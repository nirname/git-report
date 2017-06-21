# Revisions

<section>

```graphviz
digraph {
  node [shape=none fontsize=30 fontcolor="#3182BD"]
  bgcolor="transparent"
  { checkout show "cherry-pick" reset } -> revision
}

```

</section>

<section>

Возможные значения

<p class="fragment">
**master**
</p>

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

Выбираем перемещения **HEAD**

```bash
$ git reflog
b1713c7 HEAD@{0}: commit: Fixed env
47194bc HEAD@{1}: clone: from git@github.com:uchiru/ansible-south-africa.git
```

```bash
$ git show HEAD@{1}
```

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

  A, B, C, F[fontcolor="white"]

  A[fillcolor="#3F1E19"]
  B[fillcolor="#B91E50"]
  C[fillcolor="#7828A0"]
  D[fillcolor="#FB6A4A"]
  E[fillcolor="#F569D7"]
  F[fillcolor="#3182BD"]
  G[fillcolor="#60DBF1"]
  H[fillcolor="#61D7A0"]
  I[fillcolor="#A1EE88"]
  J[fillcolor="#EDFE74"]

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

  A, B, C, F[fontcolor="white"]

  A[fillcolor="#3F1E19" label="A = A^0"]
  B[fillcolor="#B91E50" label="B = A^ = A^1 = A~1"]
  C[fillcolor="#7828A0" label="C = A^2 = A^2"]
  D[fillcolor="#FB6A4A" label="D = A^^ = A^1^1 = A~2"]
  E[fillcolor="#F569D7" label="E = B^2 = A^^2"]
  F[fillcolor="#3182BD" label="F = B^3 = A^^3"]
  G[fillcolor="#60DBF1" label="G = A^^^ = A^1^1^1 = A~3"]
  H[fillcolor="#61D7A0" label="H = D^2 = B^^2 = A^^^2 = A~2^2"]
  I[fillcolor="#A1EE88" label="I = F^ = B^3^ = A^^3^"]
  J[fillcolor="#EDFE74" label="J = F^2 = B^3^2 = A^^3^2"]
}
```

</section>