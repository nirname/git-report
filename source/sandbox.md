<section>
# Rules

<pre><code class="hljs nohighlight">
<span class="fragment fade-out" data-fragment-index="0">git push -f</span><span class="fragment fade-up bad-rule" data-fragment-index="0">git push -f</span>
<span class="fragment fade-out" data-fragment-index="1">git push && git rebase</span><span class="fragment fade-up bad-rule" data-fragment-index="1">git push && git rebase</span>
<span class="fragment fade-out" data-fragment-index="2">git pull --rebase</span><span class="fragment fade-up ok-rule" data-fragment-index="2">git pull --rebase</span>
</code></pre>

</section>

<section>
# Debugging

**Bisect**

```
git bisect start
git bisect bad
git bisect good master
```

```
git bisect start HEAD master
git bisect run test -f hello.txt
```
</section>

