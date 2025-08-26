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

## What's a Data Lakehouse?

---

## Why not Spark?

---

## Getting started with Python

---

## Introducing `Laketower`

---

## Conclusion

---

## References

---

## Romain CLEMENT

![bg right width:80%](face.png)

**Datalpia**
Building solutions for data teams

Meetup Python Grenoble co-organizer

🌐 [romain-clement.net](https://romain-clement.net)
🔗 [linkedin.com/in/romainclement](https://www.linkedin.com/in/romainclement)