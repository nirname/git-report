# Staging

<section>
**Add**

```shell
git add .
```

**Reset**
```shell
git reset
```
**Remove**

```shell
git rm
git add -A
git add --all
```
</section>

<section>
## Commit

```shell
git status
git commit
```

```shell
git commit -m 'Here goes message'
```
</section>

<section>
## Undo

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
![Staging](assets/staging.svg)
</section>