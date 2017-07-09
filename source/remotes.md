# Remotes

<section>

<pre><code class="hljs nohighlight">git init uchi
git clone uchi<span class="fragment fade-up" data-fragment-index="1" style="color: #329222;"> -o source</span> local
cd local <span class="fragment fade-up" data-fragment-index="1" style="color: #329222;">&& git branch -m main</span>
cat .git/config</code></pre>

```ini
[remote "source"]
  url = /tmp/uchi
  fetch = +refs/heads/*:refs/remotes/source/*
[branch "main"]
  remote = source
  merge = refs/heads/master
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
git merge source/master
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

```
$ git br main --unset-upstream
```

```
[remote "source"]
  url = /tmp/uchi
  fetch = +refs/heads/*:refs/remotes/source/*
[branch "main"]
```
</section>

<section>

```
origin/master
```

```
git clone -o custom
custom/master
```


```
git remote add origin git@github.com:uchiru/repo
```
</section>

<section>

```
source:destination
git push origin :topic
```

</section>