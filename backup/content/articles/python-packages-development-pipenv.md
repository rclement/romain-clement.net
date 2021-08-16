---
title: Python packages development using Pipenv
summary: >-
  I have been using Pipenv for Python applications since 2018 quite successfully.
  However, when developing Python packages, things can get trickier. This is a
  quick note on how I resolve this situation.
author: romainclement
tags: [programming, python]
language: en
published: 2021-05-05
draft: false
---

I have been using [Pipenv][pipenv] for Python applications since 2018 quite
successfully. However, when developing Python packages, things can get trickier.
This is a quick note on how I resolve this situation.

When starting the development of a Python package, we can setup our Python
environment using `pipenv`:

```bash
pipenv install --dev --python 3.8
```

Let's add the now standard `setup.py` configuration file. Let's say our new
package is using `requests` as a runtime dependency and `pytest` as a test
dependency:

```python
from setuptools import setup

setup(
    name="my-package",
    description="A great Python package",
    author="Romain Clement",
    license="Apache License, Version 2.0",
    version="1.0.0",
    packages=["my_package"],
    install_requires=["requests"],
    extras_require={"test": ["pytest"]},
    tests_require=["my-package[test]"],
)
```

We can now modify our `Pipfile` to instruct to use the current package as a dev
dependency:

```toml
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[packages]

[dev-packages]
my-package = {editable = true, path = ".", extras = ["test"]}

[requires]
python_version = "3.8"
```

And update your environment with `pipenv install -d`: it will automatically install
all the requirements specified in `setup.py` on besides the ones in `Pipfile`.

This setup allows the _DRY_ pattern: specify package requirements in `setup.py`,
specify development environment and requirements in `Pipfile` (Python version,
code coverage, linting, formatter). As simple as that!

I have recently used this pattern when starting the development of
[`datasette-dashboards`][datasette-dashboards], a plugin to generate data dashboards
in [`datasette`][datasette].

[pipenv]: https://pipenv.pypa.io 'Pipenv'
[datasette-dashboards]: https://github.com/rclement/datasette-dashboards 'datasette-dashboards'
[datasette]: https://datasette.io 'Datasette'
