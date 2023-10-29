# The Three Stages of Engineering

## Summary

Most if not all engineering projects go through three stages: under-engineering, over-engineering, just-right-engineering. This is what I found out looking back at my first ten years of experience as a professional software engineer in various organisations and industries.

In this talk, we will first illustrate those stages from common experiences with projects in application development, data engineering and data science. We will then try to give a somewhat formal view of the problem. And finally we will look at ways to reflect on these thoughts to approach new and existing projects with a calmer attitude.

## Content

Examples:

- Application development:
    1. Build a rapid prototype / POC / MVP using on-the-shelf components combined into a monolith, without thinking about architecture, domain boundaries and responsibility
    2. Re-build the prototype to a full-fledge production ready version, using state-of-the-art methodologies (microservices, all database types, serverless, kubernetes, etc.)
    3. Re-build the production version to a leaner one, using a monolithic but modular approach, combining best of both worlds

- Data engineering:
    1. Put everything into a single database, no thoughful schema, do not understand SQL, change everything every 2 weeks
    2. Use every single database type available (relational, document, key-value, columnar, graph) whenever the opportunity presents itself... oh and of course having a data lake and a full-blown data warehouse on the side for analytics purposes
    3. Use one main database for 80% of needs, understand document databases are mostly useless thanks to JSON support in RDBMS, and use one main database for analytics purposes

- Data science:
    1. Train off-the-shelf either classification machine learning models such as gradient-boosted and random forests
    2. Train state-of-the-art deep learning models from scratch, wasting hours and dollars into costly workflows and infrastructure
    3. Understand the issue lies within the data itself, perform extensive feature engineering guided from human expertise and feedback, and choose an appropriate modelling method be it classical machine learning or transfert learning with the appropriate base neural network

- Education / Learning (active learning principles):
    1. Imitate / copy-paste content as-is to build something without really understanding the underlying concepts
    2. Rebuild by adapting exiting content to the issue at hand (start to get a grasp)
    3. Transpose the knowledge to build from scratch with a better understanding

Formal definition:

- Close to under-fitting / over-fitting / just-right-fitting concepts in machine learning
- Chart:
    - x is time, y is complexity
    - under-engineering: curve plateau in the lower end of complexity, t1
    - over-engineering: curve plateau in the lower end of complexity, t2
    - just-right-engineering: curve asymptote to the middle of the complexity scale, t3
- Philosiphical relationship to the _Om_ Indu symbol
- Hypothesis : every endeavour is bound to pass through 3 steps to attain a balance of success / complexity / understanding
- Meta idea: "this presentation has taken 3 attempts / reboots to achieve the current version"
    - 1st step: initial draft on a plane, the core idea is here (diagram) but still a bit blurry
    - 2nd step: lots of use-case modelling and trying to overthink the concept
    - 3rd step: simplify things, use a canvas-based story-telling with a hint of philosophical thinking

## References

- ["under-engineering, over-engineering, right-engineering", Martijn Faassen](https://blog.startifact.com/posts/older/under-engineering-over-engineering-right-engineering/)
