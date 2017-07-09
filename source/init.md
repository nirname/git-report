<section>
# Configuring

Первоначальная настройка **Git**

```shell
git config --global user.name "Nikolay Rozhkov"
git config --global user.email rozhkov@uchi.ru
```

External **diff**

```ini
[diff]
  tool = meld
[difftool]
  path = meld
  prompt = false
```
</section>

<section>
# Init

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