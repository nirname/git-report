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

<section>
# Rules

<pre><code class="hljs nohighlight"><span class="fragment fade-out" data-fragment-index="0">git push -f</span><span class="fragment fade-up bad-rule" data-fragment-index="0">git push -f</span>
<span class="fragment fade-out" data-fragment-index="1">git push -u origin feature</span><span class="fragment fade-up ok-rule" data-fragment-index="1">git push -u origin feature</span>
<span class="fragment fade-out" data-fragment-index="2">git push -u origin feature && git rebase master</span><span class="fragment fade-up bad-rule" data-fragment-index="2">git push -u origin feature && git rebase master</span>
<span class="fragment fade-out" data-fragment-index="3">git rebase master && git push -u origin feature</span><span class="fragment fade-up ok-rule" data-fragment-index="3">git rebase master && git push -u origin feature</span>
<span class="fragment fade-out" data-fragment-index="4">git pull --rebase</span><span class="fragment fade-up ok-rule" data-fragment-index="4">git pull --rebase</span>
<span class="fragment fade-out" data-fragment-index="5">git merge --no-ff master && pull --rebase</span><span class="fragment fade-up bad-rule" data-fragment-index="5">git merge master && pull --rebase</span>
<span class="fragment fade-out" data-fragment-index="6">git rebase --abort</span><span class="fragment fade-up ok-rule" data-fragment-index="6">git rebase --abort</span>
<span class="fragment fade-out" data-fragment-index="7">git merge --abort</span><span class="fragment fade-up ok-rule" data-fragment-index="7">git merge --abort</span>
<span class="fragment fade-out" data-fragment-index="8">git reset --hard HEAD~</span><span class="fragment fade-up bad-rule" data-fragment-index="8">git reset --hard HEAD~</span>
<span class="fragment fade-out" data-fragment-index="9">git revert HEAD</span><span class="fragment fade-up bad-rule" data-fragment-index="9">git reset --hard</span>
<span class="fragment fade-out" data-fragment-index="10">git checkout '**'</span><span class="fragment fade-up bad-rule" data-fragment-index="10">git checkout '**'</span>
<span class="fragment fade-out" data-fragment-index="11">git clean -df</span><span class="fragment fade-up bad-rule" data-fragment-index="11">git clean -df</span>
<span class="fragment fade-out" data-fragment-index="12">git branch -D feature</span><span class="fragment fade-up bad-rule" data-fragment-index="12">git branch -D feature</span>
</code></pre>
</section>