<section>
# Rules

<pre><code class="hljs nohighlight"><span class="fragment fade-out" data-fragment-index="0">git push -f</span><span class="fragment fade-up bad-rule" data-fragment-index="0">git push -f</span>
<span class="fragment fade-out" data-fragment-index="1">git push -u origin feature && git rebase master</span><span class="fragment fade-up bad-rule" data-fragment-index="1">git push -u origin feature && git rebase master</span>
<span class="fragment fade-out" data-fragment-index="2">git rebase master && git push -u origin feature</span><span class="fragment fade-up ok-rule" data-fragment-index="2">git rebase master && git push -u origin feature</span>
<span class="fragment fade-out" data-fragment-index="3">git pull --rebase</span><span class="fragment fade-up ok-rule" data-fragment-index="3">git pull --rebase</span>
<span class="fragment fade-out" data-fragment-index="4">git merge master && pull --rebase</span><span class="fragment fade-up bad-rule" data-fragment-index="4">git merge master && pull --rebase</span>
<span class="fragment fade-out" data-fragment-index="5">git rebase --abort</span><span class="fragment fade-up ok-rule" data-fragment-index=5>git rebase --abort</span>
<span class="fragment fade-out" data-fragment-index="6">git merge --abort</span><span class="fragment fade-up ok-rule" data-fragment-index="6">git merge --abort</span>
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

