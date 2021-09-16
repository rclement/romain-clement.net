---
template: article.html
title: Static Data Warehouse using SQLite and Metabase
description: >-
  Does a data warehouse need to be costly? Maybe not. A quick note on using
  SQLite combined with Metabase to host and exploit a static SQL database
  easily and cheaply. This use-case is especially true for small data
  applications.
author: Romain Clement
date: 2021-05-04
tags: [data, warehouse, bi, metabase, sqlite, git]
language: en
draft: false
---

Does a data warehouse need to be costly? Maybe not. A quick note on using
[SQLite][sqlite] combined with [Metabase][metabase] to host and exploit a
static SQL database easily and cheaply. This use-case is especially true
for [small data][small-data] applications.

## Technical Details

Once an [ETL](etl) pipeline is done building an SQLite database `data.db`,
let's say using [Git Scraping][git-scraping], one can start a small Docker
Compose stack to configure Metabase, build visualizations and dashboards:

```yaml
version: '3'

services:
  metabase:
    image: metabase/metabase:v0.38.3
    volumes:
      - ./metabase.db:/metabase-data/metabase.db
      - ./data.db:/metabase-data/data.db
    ports:
      - '3000:3000'
```

To be able to deploy Metabase as a Docker container on all cloud platforms,
the web server port needs to be dynamically configured from an environment variable
named `PORT`. This is not the case with the default Docker image of Metabase,
hence the following entrypoint script `run_metabase_ext.sh`:

```bash
#!/usr/bin/env bash

set -e

if [ "$PORT" ]; then
    export MB_JETTY_PORT="$PORT"
fi

exec /app/run_metabase.sh
```

When all the pieces are put together (SQLite database `data.db`,
Metabase H2 database `metabase.db`, custom entrypoint `run_metabase_ext.sh`),
one can build a Docker image:

```dockerfile
FROM metabase/metabase:v0.38.3

COPY metabase.db /metabase-data/metabase.db
COPY data.db /metabase-data/data.db
COPY bin/run_metabase_ext.sh /app/run_metabase_ext.sh

ENTRYPOINT []
CMD ["/app/run_metabase_ext.sh"]
```

You can now deploy your static data warehouse anywhere a Docker container
is accepted (e.g. Heroku, Google Cloud Run).

Cherry on top: everything can be versioned and automated using Git!

[small-data]: https://en.wikipedia.org/wiki/Small_data 'Wikipedia - Small Data'
[sqlite]: https://sqlite.org 'SQLite'
[metabase]: https://www.metabase.com 'Metabase'
[etl]: https://en.wikipedia.org/wiki/Extract,_transform,_load 'Wikipedia - Extract, transform, load'
[git-scraping]: https://simonwillison.net/2020/Oct/9/git-scraping/ 'Simon Willison - Git Scraping'
