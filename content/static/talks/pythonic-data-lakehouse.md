---
marp: true
header: "You Don’t Need Spark for That: Pythonic Data Lakehouse Workflows"
footer: "Romain Clement - PyData Paris 2025"
paginate: true
theme: default
---

<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: false -->

# You Don’t Need Spark for That: Pythonic Data Lakehouse Workflows

> **Romain Clement**

> PyData Paris 2025
> 30 September 2025

<!--
Have you ever spun up a Spark cluster just to update three rows in a Delta table? In this talk, we’ll explore how modern Python libraries can power lightweight, production-grade Data Lakehouse workflows—helping you avoid over-engineering your data stack.

-

Spark is great—until you realize you're using a distributed system to process 50MB of data. If that sounds familiar, you might be suffering from “premature Sparkification”: a common phenomenon where data teams reach for big data tools to process small- and medium-sized workloads.

In this talk, we’ll explore how Data Lakehouse formats like Delta Lake and Apache Iceberg, once tied to massive Spark jobs, have now gone lightweight. Thanks to open-source projects such as delta-rs and pyiceberg, you can get ACID tables, time travel, and schema enforcement—using just Python.

We’ll cover:

- A quick overview of Data Lakehouse architecture and its benefits
- The trade-offs between Spark-based stacks and Python-native ones
- How to read, write, and query Lakehouse tables in Python
- Integrations with modern tools like DuckDB for querying and prototyping

You’ll leave with:

- A clear sense of when (and when not) to use Lakehouse formats
- A starting point for working with Delta Lake and Iceberg using Python alone
- Strategies to simplify your data workflows without losing critical features

This talk is for: Data engineers, ML engineers, and tech leads frustrated by unnecessary complexity in their stack—and looking for lightweight, Pythonic alternatives that just work.

No Spark required. No cluster provisioning. Just clean, pragmatic tooling for people who want to get things done.
 -->

---

<!--

First you breath.

"
So... I've been to the Lakehouse.

There were many fishers around the lake.
Among them, I noticed two breed of fishers.

The first one comes early in the morning, settle 3 highly featured <cannes à peche> on the bank, handle with advanced electronic gear providing real-time insights of the submarine activity. This one stays the whole hanging around, waiting for the gear to alert him there is a catch!

The second one comes at the end of the day, a single <canne a peche> at the hand, looks quickly around the lake to spot where the submarine might be the strongest (he knows his favorite places) and settles for an hour.

Guess who brings the most fish? Most probably they bring home the same amount, but they have settle for different strategies.
"

Picture of a Lakehouse
 -->

---

## What's a Data Lakehouse?

Term coined by James Dixon (2017), popularized by **Databricks** and **Snowflake**

Bridge gap between **Data Lakes** and **Data Warehouses**

Optimized for analytical workloads

Decouple storage and compute for cost optimization

Overcome data governance difficulties in data lakes

Brings some of the strong guarantees of data warehouses

<!-- _Schema-on-Read_ vs _Schema-on-Write_ -->

<!--
TODO:
- feature comparison table instead?
- illustration?
-->

---

### Data Lakehouse Features

<!--
TODO:
- diagram with parquet files + metadata on storage, query engine on compute (cloud, local)
-->

Scalable storage

Scalable compute

ACID transactions

Schema enforcement & evolution

Time-travel

Snapshots / branches

---

### Brief History of Data Lakehouse Formats

<!--
TODO:
- timeline diagram
 -->

(2017) Hudi (Uber then Apache Foundation)

(2018) Iceberg (Netflix then Apache Foundation)

(2019) Delta Lake (Databricks then Linux Foundation)

(2025) DuckLake (DuckDB Foundation)

**Open Table Formats!**

---

## Data format example (Delta)

<!--
Combination of Parquet files and a transaction log (JSON files here)

Immutable Parquet files

Support for Hive-style partitioning of Parquet files

New versions create new Parquet files

Transaction log allows a query engine to know which Parquet files to look for a given version, given partitions, given columns, given values

This layout provides the following benefits:
- Parquet files provides data compression for cost efficient storage, and as a columnar format provides column projection/pruning optimization
- The transaction log provides query engines metadata and statistics to know where to get the relevant data, especially important for query optimizations such as file-skipping and predicate push-downs
- Partitioning allows query engine to perform other optimizations such as filter push-downs

Of course, vaccuming capabilities are in place to tidy-up or archive old data if needed.

And if the "small file problem" appear, compaction procedures are provided by the compatible client.


TODO (where/when?): illustrate/demo parquet files content and transaction log being created when performing table creation, data append, data merge, data overwrite, row deletion operations to better understand how it works
-->

```
table_name
|-- _delta_log
|   |-- 00000000000000000000.json
|   |-- 00000000000000000001.json
|   |-- 00000000000000000002.json
|-- partition=1
    |-- part-00001-1a31a393-6db6-4d1a-bf4e-81ea061ff8cd-c000.snappy.parquet
|-- partition=2
    |-- part-00001-5af77102-9207-4c89-aaf6-37e1f815ec26-c000.snappy.parquet
    |-- part-00001-b11bab55-43d0-4d05-ae88-5b9481ae57db-c000.snappy.parquet
```

**Parquet files + Metadata !**

---

## Why (not) Spark?

Designed for big data workloads (>= 1TB)

Cluster infrasture operations

JVM overhead

Cumbersome local development

What about small/medium-scale data?

<!-- (Modern Data Stack) -->

<!--
De-facto distributed system for big data workloads for the past 15 years

Even when dealing with big data on storage, in some cases a processing pipeline is running on a very small subset of the data not requiring computing clusters

Except if using a managed Spark service such as Databricks, operating a Spark cluster is no small feat.

Small to medium-scale data:
- why not benefit from storage cost efficient solutions also?
- important job processing latency because of Spark design with job scheduling (even on a SingleNode setup)
- good to have lightweight alternatives

Easier for non data-engineering teams (e.g. data science)

Start small, scale when needed
-->

---

## Getting started with Python

- Delta Lake: `deltalake`, `polars`, `duckdb`
- Iceberg: `pyiceberg`, `polars`, `duckdb`
- Hudi: `hudi`, `polars`, `duckdb`
- DuckLake: `duckdb`

<!--
For the past few years, the Python ecosystem regarding data lakehouse formats has expanded greatly!

Many choices are available for all four main formats, from low-level tables management (deltalake/delta-rs, pyiceberg, hudi) to dataframe oriented abstractions such as Polars.

One special mention for DuckDB:
- first of all, it shows impressive single node performance, heavily multithreaded and supports for out-of-core processing allowing to get in the big data realm
- it can be used from the CLI and from the Python binding,
- it supports also all major Lakehouse tables formats through extensions,
- but some features are yet to be implemented as of September 2025 (such as writing to tables and time-travel)

As you can see, when starting a new lakehouse-based project, there is no reason Spark has to be the default choice for Python workloads in 2025!

Let's see that in action! We'll be focusing here on Delta Lake, as this is probably the easiest format to get started with. But keep in mind all the following snippets can easily be adapted for all other formats as they share strong usage similarity.
-->

---

## Example Delta with `deltalake`

<!-- read table -->

<!-- write table -->

<!-- time travel -->

<!-- batch mode -->

<!-- access through unity catalog -->

---

## Example Delta with `polars`

---

## Example Delta with `duckdb`

<!-- delta_scan -->

<!-- iceberg_scan -->

<!-- register arrow input datasets from deltalake/pyiceberg then query them -->

---

## Introducing `laketower`

Local-first utility Python app (CLI + Web)

Simple management for lakehouse tables

Only support Delta for now, more to come

OSS Apache-2 licensed

Get started: `uvx laketower`

---

## Conclusion

---

## References

- [Evolution to the Data Lakehouse](https://www.databricks.com/blog/2021/05/19/evolution-to-the-data-lakehouse.html)
- [Explaining the History of Data Lakehouse](https://dev.to/pkutaj/explaining-the-history-of-data-lakehouse-504a)
- [Understanding Open Table Formats](https://delta.io/blog/open-table-formats/)
- [Deltalake Python](https://delta-io.github.io/delta-rs/)
- [PyIceberg`](https://py.iceberg.apache.org/)
- [DuckLake](https://ducklake.select/)
- [Hudi Python/Rust](https://hudi.apache.org/docs/python-rust-quick-start-guide)

---

## Romain CLEMENT

![bg right width:80%](face.png)

**Datalpia**
Building solutions for data teams

Meetup Python Grenoble co-organizer

🌐 [romain-clement.net](https://romain-clement.net)
🔗 [linkedin.com/in/romainclement](https://www.linkedin.com/in/romainclement)

---

# Questions ?

Thank you!

<!--
Anticipate questions:

 -->

 ---

<!--
Mermaid integration from:
https://github.com/marp-team/marp-core/issues/139#issuecomment-2210529293
 -->
<style>
  img.mermaid-100h {
    max-height: 100%;
  }
</style>

<script src="https://unpkg.com/mermaid/dist/mermaid.min.js"></script>
<script>
  // Replaces <pre class="mermaid"> blocks with <img> blocks, to make mermaid render properly.
  // Preserves classes and styling so they can be used to fix sizing if necessary.

  mermaid.initialize({ startOnLoad: false });

  window.addEventListener('load', async function () {
    const mermaidEls = document.querySelectorAll('pre.mermaid');

    for (const el of mermaidEls) {
      const { svg } = await mermaid.render('asd', el.textContent);

      const img = document.createElement('img');
      img.setAttribute('src', `data:image/svg+xml;base64,${btoa(svg)}`);
      img.setAttribute('class', el.getAttribute('class'));
      img.setAttribute('style', el.getAttribute('style') || '');

      el.parentNode.replaceChild(img, el);
    }
  });
</script>

<pre class="mermaid mermaid-100h">
  graph LR;
  Serveur1 --> Services1;
  Serveur2 --> Services2;
  Serveur3 --> Services3;
  Serveur4 --> Services4;
  Services1 --> SchemasNormaux;
  Services2 --> SchemasNormaux;
</pre>