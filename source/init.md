# Configuring
<section>

Первоначальная настройка **Git**

```shell
git config --global user.name "Nikolay Rozhkov"
git config --global user.email rozhkov@uchi.ru
```

Внешиние утилиты

```
git config --global diff.tool meld
git config --global difftool.prompt false
git config --global core.editor /usr/bin/vim
```
</section>

<section>
External **diff**

```ini
[diff]
  tool = meld
[difftool]
  path = meld
  prompt = false
```
External **editor**

```ini
[core]
  editor = /usr/bin/vim
```
</section>

<section>
**Init**

Инициализировать новый проект c **Git**

```bash
git init new-project
git init new-project --bare
```

Добавить существуй проект в **Git**

```shell
cd existing-project
git init
git init .
```
</section>