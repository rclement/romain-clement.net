---
template: article.html
title: Python Pathlib complex glob patterns
description: >-
  Combining multiple glob patterns using Python Pathlib, with functional programming style
author: romainclement
date: 2023-09-18
tags: [python, functional-programming]
language: en
draft: true
---

!!! tip "TL;DR"
    ```python
    import itertools
    import pathlib

    mypath = pathlib.Path()
    patterns = ["*.jpg", "*.png"]

    matched = list(
        itertools.chain.from_iterable(
            mypath.glob(pattern) for pattern in patterns
        )
    )
    ```

Today I learn Python [`pathlib.Path.glob`][glob] does not support complex glob patterns such as `*.{jpg,png}`!

Let's see how it can be done. First try:

```python
import pathlib

mypath = pathlib.Path() / "tests"
matched = list(mypath.glob("*.jpg")) + list(mypath.glob("*.png"))
```

It does the job but I'm not a big fan of concataining lists as it allocates multiple list objects.
`pathlib.Path.glob` returns a generator which is an iterable. Let's see if [`itertools`][itertools] can rescue us:

```python
import itertools

matched = list(itertools.chain(mypath.glob("*.jpg"), mypath.glob("*.png")))
```

Not bad! Only a single `list` object is created out of multiple generators.
Can we go further and apply some "DRY" principle?

```python
matched = list(
    itertools.chain.from_iterable(
        mypath.glob(pattern) for pattern in ["*.jpg", "*.png"]
    )
)
```

I do not think I can do better right now. The expression given as argument to `itertools.chain.from_iterable` is a generator, itself generating a generator for each pattern using `pathlib.Path.glob`. I do like these types of constructs in Python as the whole construction chain is lazily evaluated thanks to generators, and the composability aspect to it feels very much like functional programming.

[glob]: https://docs.python.org/3/library/pathlib.html#pathlib.Path.glob "Python - pathlib"
[itertools]: https://docs.python.org/3/library/itertools.html "Python - itertools"
