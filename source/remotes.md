# Remotes

<section>

```shell
git init uchi && cd ..
```

<pre><code class="hljs nohighlight">git clone uchi<span class="fragment fade-up" data-fragment-index="0" style="color: #4dac26;"> -o source</span> local
cd local<span class="fragment fade-up" data-fragment-index="1" style="color: #5e3c99"> && git branch -m main</span>
<span class="fragment fade-up" data-fragment-index="2" style="color: #e66101">git br main --unset-upstream</span>
cat .git/config</code></pre>

<pre><code class="hljs nohighlight">[remote "<span class="fragment fade-out" data-fragment-index="0">origin</span><span class="fragment fade-up" data-fragment-index="0" style="color: #4dac26;">source</span>"]
  url = /tmp/uchi
  fetch = +refs/heads/*:refs/remotes/<span class="fragment fade-out" data-fragment-index="0">origin</span><span class="fragment fade-up" data-fragment-index="0" style="color: #4dac26;">source</span>/*
[branch "<span class="fragment fade-out" data-fragment-index="1">master</span><span class="fragment fade-up" data-fragment-index="1" style="color: #5e3c99">main</span>"]
  <span class="fragment fade-out" data-fragment-index="2">remote = <span class="fragment fade-out" data-fragment-index="0">origin</span><span class="fragment fade-up" data-fragment-index="0" style="color: #4dac26;">source</span>
  merge = refs/heads/master</code></pre></span>

</section>

<section>

```graphviz
digraph {
  graph[bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  {
    node[shape="circle" fillcolor="#e66101"]
    A -> B
  }

  {
    node[shape="rect" fillcolor="#0571b0"]
    rank="same"
    master -> B
  }
}
```

```
git clone uchi -o source local
```

```graphviz
digraph {
  graph[bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  {
    node[shape="circle" fillcolor="#e66101"]
    A -> B
  }

  {
    node[shape="rect" fillcolor="#0571b0"]
    origin_master[label="source/master"]
    master[label="main"]
  }

  {
    rank="same"
    origin_master -> B
    B -> master [dir="back"]
  }
}
```
</section>

<section>

```graphviz
digraph {
  graph[bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  {
    node[shape="circle" fillcolor="#e66101"]
    A -> B -> C
  }

  {
    node[shape="rect" fillcolor="#0571b0"]
    rank="same"
    master -> C
  }
}
```

```shell
...
```

```graphviz
digraph {
  graph[bgcolor="transparent" rankdir=LR fontname="Arial"]
  node [style="filled" fontcolor="white" fontsize=20]

  {
    node[shape="rect" fillcolor="#0571b0"]
    origin_master[label="source/master"]
    master[label="main"]
  }

  {
    node[shape="circle" fillcolor="#e66101"]
    A -> B -> D
  }


  {
    rank="same"
    origin_master -> B
  }

  {
    rank="same"
    D -> master [dir="back"]
  }
}
```
</section>

<section>

```graphviz
digraph {
  graph[bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  {
    node[shape="circle" fillcolor="#e66101"]
    A -> B -> C
  }

  {
    node[shape="rect" fillcolor="#0571b0"]
    rank="same"
    master -> C
  }
}
```

```shell
git fetch source
```

```graphviz
digraph {
  graph[bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  {
    node[shape="rect" fillcolor="#0571b0"]
    origin_master[label="source/master"]
    master[label="main"]
  }

  {
    node[shape="circle" fillcolor="#e66101"]
    A -> B -> C
    B -> D
  }


  {
    rank="same"
    origin_master -> C
  }

  {
    rank="same"
    D -> master [dir="back"]
  }
}
```
</section>


<section>

```graphviz
digraph {
  graph[bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  {
    node[shape="circle" fillcolor="#e66101"]
    A -> B -> C
  }

  {
    node[shape="rect" fillcolor="#0571b0"]
    rank="same"
    master -> C
  }
}
```

```shell
git fetch && git merge source/master
git pull source
```

```graphviz
digraph {
  graph[bgcolor="transparent" rankdir=LR]
  node [style="filled" fontcolor="white" fontsize=20]

  {
    node[shape="rect" fillcolor="#0571b0"]
    origin_master[label="source/master"]
    master[label="main"]
  }

  {
    node[shape="circle" fillcolor="#e66101"]
    A -> B -> C
    B -> D
    {C D} -> E
  }

  {
    rank="same"
    origin_master -> C
  }

  {
    rank="same"
    E -> master [dir="back"]
  }
}
```
</section>

<section>

```shell
source:destination
git push origin :topic
git push origin --delete topic
```

</section>