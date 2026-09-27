---
marp: true
footer: "Data Science and Engineering: We Were on a Break! - Romain Clement - Compute! Paris 2026"
paginate: true
theme: default
class: invert
backgroundColor: "#0f172a"
color: "#f1f5f9"

---

<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: false -->

![bg](./compute-paris-2026-datascience-engineering/cover.png)

<div class="shade"></div>

# Data Science and Engineering:<br><span class="punchline">We Were on a Break!</span>

<div class="band">
<span><strong>Romain Clement · Datalpia</strong></span>
<span>Compute! Paris 2026 · November 26th 2026</span>
</div>

<style scoped>
.shade { position: absolute; inset: 0; background: radial-gradient(ellipse 85% 45% at 0% 0%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 55%, transparent 100%), linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 20%); }
h1 .punchline { color: #ffd166; }
h1 { position: absolute; top: 40px; left: 60px; margin: 0; color: white; font-size: 56px; line-height: 1.2; text-shadow: 0 3px 12px rgba(0,0,0,0.9); }
.band { position: absolute; left: 60px; right: 60px; bottom: 36px; display: flex; justify-content: space-between; color: white; font-size: 30px; text-shadow: 0 2px 8px rgba(0,0,0,0.9); }
</style>

---

## ✨️ Once upon a time...

* <img src="./compute-paris-2026-datascience-engineering/imdb_ross_rachel_teens.png" style="position: absolute; left: 280px; top: 130px; width: 720px;">
* <img src="./compute-paris-2026-datascience-engineering/wikimedia_cpp.png" style="position: absolute; left: 400px; top: 200px; width: 115px;">
* <img src="./compute-paris-2026-datascience-engineering/wikimedia_matlab.png" style="position: absolute; left: 690px; top: 150px; width: 140px;">
* <span class="angry" style="position: absolute; left: 560px; top: 300px; font-size: 90px; line-height: 1;">💥</span>

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
li { list-style: none; }
.angry { animation: throb 0.9s ease-in-out infinite; transform-origin: center; }
@keyframes throb {
  0%, 100% { transform: scale(1) rotate(0deg); }
  15% { transform: scale(1.3) rotate(-8deg); }
  30% { transform: scale(0.95) rotate(6deg); }
  45% { transform: scale(1.2) rotate(-5deg); }
  60% { transform: scale(1) rotate(0deg); }
}
</style>

<!--
Let's go back in time almost 15 years ago ...

I started my professionnal life as a software engineer integrating signal processing algorithms and machine learning models in embedded devices, working mainly in C++ and assembly.

One of the major aspects of the job was to take MATLAB notebooks from a Data Science team, port it to C++, and when needed optimize some it in assembly. When something was not behaving right in the algorithm itself, iterating in this context was not easy to meet production requirements.

Needless to say, it was not love at first sight, the early days of collaboration between data science and engineering were a bit rough as you can imagine...
 -->

---

## 🐍️ The snake comes along

* <img src="./compute-paris-2026-datascience-engineering/imdb_ross_rachel_kiss.png" style="position: absolute; left: 280px; top: 130px; width: 720px;">
* <img src="./compute-paris-2026-datascience-engineering/wikimedia_python.png" style="position: absolute; left: 640px; top: 240px; width: 100px;">
* <img src="./compute-paris-2026-datascience-engineering/wikimedia_python.png" style="position: absolute; left: 530px; top: 200px; width: 100px;">
* <span class="heart" style="position: absolute; left: 570px; top: 380px; font-size: 100px; line-height: 1;">❤️</span>

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
li { list-style: none; }
.heart { animation: heartbeat 1.2s ease-in-out infinite; transform-origin: center; }
@keyframes heartbeat {
  0%, 40%, 100% { transform: scale(1); }
  10% { transform: scale(1.25); }
  20% { transform: scale(1); }
  30% { transform: scale(1.18); }
}
</style>

<!--
A few years later, Data science teams of the industry started to embrace the Python data ecosystem.

Engineering teams also started to adopt the Python ecosystem, especially when developing products without hard realtime constraints.

The love story started to take off!

Unified tooling meant breaking down silos between data science and engineering teams,
yielding to faster iterations between research and engineering,
benefitting from a single programming language with native library bindings for performance tuning,
reducing time to production from months to days,
offering new opportunities for automations,
all of that in a free software ecosystem ensuring extensive community support and longevity.

The future was bright! Right? Right?...
-->

---

## 💔 Every love story comes to an end

* <img src="./compute-paris-2026-datascience-engineering/imdb_friends_wwoab.png" style="position: absolute; left: 280px; top: 130px; width: 720px;">
* <img src="./compute-paris-2026-datascience-engineering/wikimedia_python.png" style="position: absolute; left: 530px; top: 280px; width: 120px;"><img src="./compute-paris-2026-datascience-engineering/wikimedia_python.png" style="position: absolute; left: 680px; top: 280px; width: 120px;"><span class="heart" style="position: absolute; left: 600px; top: 440px; font-size: 110px; line-height: 1;">💔</span>
* <span class="note eng" style="left: 25px; top: 110px; transform: rotate(-4deg);">Please stop sending me `untitled.ipynb`</span>
* <span class="note ds" style="left: 1020px; top: 105px; transform: rotate(4deg);">Works in my notebook, you can deploy it</span>
* <span class="note eng" style="left: 30px; top: 215px; transform: rotate(3deg);">What is this 4 GB pickle file?</span>
* <span class="note ds" style="left: 1020px; top: 200px; transform: rotate(-3deg);">Just need a GPU and 64 GB of RAM</span>
* <span class="note eng" style="left: 25px; top: 310px; transform: rotate(-3deg);">Why do you need `matplotlib` for inference?</span>
* <span class="note ds" style="left: 1020px; top: 290px; transform: rotate(4deg);">We don't write tests, this is R&D</span>
* <span class="note eng" style="left: 30px; top: 420px; transform: rotate(4deg);">The model takes 30 seconds per request</span>
* <span class="note ds" style="left: 1020px; top: 380px; transform: rotate(-4deg);">`model_final_v2_FINAL_really.pkl` is on Sharepoint</span>
* <span class="note eng" style="left: 25px; top: 510px; transform: rotate(-4deg);">Is this reproducible?</span>
* <span class="note ds" style="left: 1020px; top: 485px; transform: rotate(3deg);">The data changed, nobody told us</span>
* <span class="note ds" style="left: 1020px; top: 580px; transform: rotate(-3deg);">I like CSVs and Excel 📊</span>
* <span class="note eng" style="left: 30px; top: 590px; transform: rotate(3deg);">Do you have a `Dockerfile`? 🐳</span>

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
li { list-style: none; }
.note { position: absolute; display: block; width: 235px; font-size: 24px; font-weight: bold; line-height: 1.2; overflow-wrap: anywhere; }
.eng { color: #7cc4fa; }
.ds { color: #ffab7a; }
.heart { animation: heartbeat 1.2s ease-in-out infinite; transform-origin: center; }
@keyframes heartbeat {
  0%, 40%, 100% { transform: scale(1); }
  10% { transform: scale(1.25); }
  20% { transform: scale(1); }
  30% { transform: scale(1.18); }
}
</style>

<!--
Fast-forward 15 years

Did the relationship between Data Science and Engineering teams hold up the test of time?

Not quite: we were on a break!

The ideal streamlined factory of having research output automatically handed-off to engineering pipelines to production rarely reached the end. Iterations are a bit faster but not that much.

Why are we still working in silos even though we are using the same tooling?

Turns out the issues do not lie completely in tools, but most probably in human organization.
 -->

---

## 🚧 Walls of confusion

* <img src="./compute-paris-2026-datascience-engineering/walls_1.svg" style="position: absolute; left: 40px; top: 150px; width: 1200px;">
* <img src="./compute-paris-2026-datascience-engineering/walls_2.svg" style="position: absolute; left: 40px; top: 150px; width: 1200px;">
* <img src="./compute-paris-2026-datascience-engineering/walls_3.svg" style="position: absolute; left: 40px; top: 150px; width: 1200px;">

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
li { list-style: none; position: absolute; left: 0; top: 0; width: 1280px; height: 720px; margin: 0; padding: 0; }
li:not([data-bespoke-marp-fragment=inactive]) img { animation: fadein 0.5s ease-out both; }
@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
</style>

<!--
The issue at heart is what has been known as the "wall of confusion", an expression popularised by Andrew Clay Shafer at the beginning of the DevOps movement around 2008, and by Gene Kim in his series of pseudo-fictional books "The Phoenix Project" and "The Unicorn Project".

The metaphor aims at pointing the lack of communication between teams, the difference of incencitive regarding deliveries and the global lack of team collaboration in a complex technical project.

The first well-known wall of confusion was indeed between software engineering and operations teams: do not just throw the software to be run in production, but package it with your context knowledge, anticipate infrastructure requirements, use automated processes to limit human-error and allow regular and fast iterative deployments (CI/CD), etc.

As you may have guessed already, today we will focus on the second wall of confusion: the one between data science and engineering teams.
 -->

---

## 🌍 Prioritize real-world usage and data

<div style="text-align: center;">

![h:420px](./compute-paris-2026-datascience-engineering/mlopsorg_principles.png)

</div>

<div style="text-align: right;">
<small>Source: <a href="https://ml-ops.org">ml-ops.org</a></small>
</div>

<style scoped>
div img { box-sizing: content-box; padding: 16px 28px; background: #fff; border-radius: 18px; }
small { color: #94a3b8; }
small a { color: #7cc4fa; }
</style>

<!--
From these walls of confusions, the main MLOps (short for Machine Learning Operations) principles have emerged.

The idea is to provide a interative framework enabling data scientists to test and validate hypothesis quickly, by confronting trained models with real-world data as soon as possible. You can have the best model on a validation bench, it is absolutely useless if not integrated into the whole system.

This is no rocket science, just common sense and close collaboration from the start with engineering and operations teams.

If you are not familiar with this kind of way of collaboration, just remember one thing: get out of the experimentation zone quickly!

Usual arguments against this kind of practice from data science:
- "I don't have enough data to work with"
- "My model is not ready yet"
- "We don't need to re-train models regularly"
- etc.
And while I respect these, to that I answer: for initial integration work, you don't need SOTA. You need an interface contract so engineering and operations know in advance how to integrate the work. You can build either a dummy model respecting the interface contract, or reach for a baseline rule-based model, and then switch to statistical learning.

Usual arguments against this kind of practice from engineering:
- "Our micro-services architecture is not ready yet"
- "Our multi-stage data pipelines are not ready yet"
- "We don't have an ML model registry"
- "We need to rewrite the code from notebooks to production software"
- etc.
And again, while I respect these, to that I answer: focus on the end-to-end process first, make it run properly in a simple architecture first and provide the data to gather feedback (both on the system running it and the data and model itself). Then you can complexify progressively the architecture if scaling is required, or heavy GPU-based distributed compute is relevant, etc.

This will also have the added effects of progressively:
- start making reproducible results and track artifacts properly
- justifying larger models performance gains
- make continuous trade-offs between model performance and resource usage constraints
- start automating parts of the whole chain

I won't go into details for all these aspects today obviously it would take us at least half a day. But I'll focus on topics that can be controversial but that I consider as must-have when initiating an MLOps strategy.
 -->

---

## ⚠️ Word of caution

> The following **topics** and **material**:
> - are heavily **opinionated**,
> - can be **controversial**,
> - and might **not fit every situation**.

<!--
Small disclaimer:

The following material can be controversial, might not be adapted to every situation and can be very opinionated.

Also, please don't be offended and let's all have a good laugh at our own disfunctions!
 -->

---

## 📓 Deploy your notebooks

* <img src="./compute-paris-2026-datascience-engineering/notebook_flow_1.svg" style="position: absolute; left: 90px; top: 140px; width: 1100px;">
* <img src="./compute-paris-2026-datascience-engineering/notebook_flow_2.svg" style="position: absolute; left: 90px; top: 140px; width: 1100px;">
* <img src="./compute-paris-2026-datascience-engineering/notebook_flow_3.svg" style="position: absolute; left: 90px; top: 140px; width: 1100px;">
* <img src="./compute-paris-2026-datascience-engineering/notebook_flow_4.svg" style="position: absolute; left: 90px; top: 140px; width: 1100px;">
* <img src="./compute-paris-2026-datascience-engineering/notebook_flow_5.svg" style="position: absolute; left: 90px; top: 140px; width: 1100px;">

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
li { list-style: none; position: absolute; left: 0; top: 0; width: 1280px; height: 720px; margin: 0; padding: 0; }
li:not([data-bespoke-marp-fragment=inactive]) img { animation: fadein 0.5s ease-out both; }
@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
</style>

<!--
Okay let's dive in. Engineers are going to hate me for this but bear with me.

Yes notebooks. One of the most dreaded artifacts of engineering in the MLOps circles. And for good reasons sometimes. But they serve a real purpose, that is to provide fast narrative and visual feedback for data science teams during the design phase.

If we want to encourage and enable fast iterations, why would those notebooks have to be re-developed from scratch in a different software component? Can't we start integrating them almost as-is in the beginning until the modelling is stabilized?

Yes. And yes, this is under-engineering at its finest.

But is it different that an executable program when done properly?
A notebook will do some data analysis and processing and output artifacts: trained models, metrics, data files, plots, and the executed notebook itself with output cells.

The only real requirement to be in-place is determinism and reproducibility.
Regarding determinism, the cells of a notebook must be able to be run in order and have the notebook do the expected result (no specific cell ordering shenanigans).
Regarding reproducibility, a notebook like any software program needs a locked environment, that is to say using a proper package manager with what we call a "lockfile": you specify which exact runtime version you need and the minimum set of dependencies requires, and you lock all transitive dependencies. If you are in Python land, the current golden standard is "uv" but you can use any other one as long as you can lock your environment precisely.

And then it is just a matter of parametrizing the notebook allowing you to treat it like a self-contained program / CLI taking inputs and performing anything a program can do, with I/Os etc.
 -->

---

## 📓 Deploy your notebooks

* <div class="tool" style="left: 70px;"><img src="./compute-paris-2026-datascience-engineering/papermill_logo.png" alt="Papermill"><div class="tag">Parameterize and run Jupyter notebooks</div><div class="cmd"><span class="p">$</span> papermill train.ipynb out.ipynb<br>&nbsp;&nbsp;<span class="a">-p lr 0.01 -p dataset v3</span></div></div>
* <div class="tool" style="left: 670px;"><img src="./compute-paris-2026-datascience-engineering/marimo_logo.svg" alt="marimo"><div class="tag">Notebooks stored as plain Python scripts</div><div class="cmd"><span class="p">$</span> python train.py<br>&nbsp;&nbsp;<span class="a">-- --lr 0.01 --dataset v3</span></div></div>

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
li { list-style: none; position: absolute; left: 0; top: 0; width: 1280px; height: 720px; margin: 0; padding: 0; }
li:not([data-bespoke-marp-fragment=inactive]) .tool { animation: fadein 0.5s ease-out both; }
@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
.tool { position: absolute; top: 170px; width: 540px; height: 350px; box-sizing: border-box; padding: 32px; display: flex; flex-direction: column; align-items: center; justify-content: space-between; background: #fff; border: 2px solid #e2e8f0; border-radius: 18px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12); }
.tool img { height: 80px; }
.tag { font-size: 28px; font-weight: 600; color: #334155; text-align: center; line-height: 1.25; }
.cmd { align-self: stretch; box-sizing: border-box; padding: 16px 22px; background: #1e1e2e; color: #f8f8f2; border-radius: 10px; font: 21px/1.5 Menlo, Consolas, "DejaVu Sans Mono", monospace; }
.cmd .p { color: #50fa7b; }
.cmd .a { color: #ff79c6; }
</style>

<!--
If you are in the Python ecosystem, you currently have at least 2 choices for executing notebooks:

- Papermill for Jupyter notebooks: you simply define a top level cell tagged as "parameters" with standard Python variables, and Papermill wrap the execution of the notebook by allowing to pass those parameters dynamically

- And then there is Marimo: the notebooks are real Python programs so you can run then natively like any other Python program. But they do have something more regarding determinism: the cells are Python functions with an implicit dependency graph, meaning the cells always run in order! Might not fit all situations but this is useful in some context.
 -->

---

## 🤒 Resist the OOP fever

* <div class="card meme" style="left: 306px; top: 130px; width: 667px; --tilt: -2deg;"><img src="./compute-paris-2026-datascience-engineering/meme_2001.png" alt="2001 monolith"><span class="cap plain">When Data Scientists</span><span class="cap plain bottom">discover OOP</span></div>
* <div class="card jira" style="left: 270px; top: 190px; --tilt: 2deg;"><div class="jh"><span class="ji">&#9632;</span><b>PROJ-1337</b><span class="st">TO DO</span></div><div class="jt">Make everything a class</div><div class="jb"><b>Description</b><br>Use object oriented programming best practices everywhere according to the software engineering 101 training.</div><div class="jm"><span>Priority: <b class="hi">&#9650; Highest</b></span><span>Assignee: <i>Unassigned</i></span><span>Labels: best-practices</span></div></div>
* <pre class="card code" style="left: 250px; top: 150px; --tilt: -2deg;">
  <span class="k">class</span> <span class="f">Preprocessing</span>:
      <span class="s">"""Namespace for preprocessing."""</span>
      <span class="d">@staticmethod</span>
      <span class="k">def</span> <span class="f">clean</span>(df): ...
      <span class="d">@staticmethod</span>
      <span class="k">def</span> <span class="f">normalize</span>(df): ...
      <span class="d">@staticmethod</span>
      <span class="k">def</span> <span class="f">split</span>(df): ...
  </pre>
* <pre class="card code" style="left: 270px; top: 170px; --tilt: 3deg;">
  <span class="k">class</span> <span class="f">LoadData</span>:
      <span class="k">def</span> <span class="f">__call__</span>(self, path): ...
  <span class="k">class</span> <span class="f">CleanData</span>:
      <span class="k">def</span> <span class="f">__call__</span>(self, df): ...
  <span class="k">class</span> <span class="f">TrainModel</span>:
      <span class="k">def</span> <span class="f">__call__</span>(self, df): ...
  model = TrainModel()(CleanData()(LoadData()(<span class="s">"data.csv"</span>)))
  </pre>
* <div class="card meme" style="left: 328px; top: 130px; width: 625px; background: #fff; --tilt: -1deg;"><img src="./compute-paris-2026-datascience-engineering/meme_moga.png" alt="Make OOP Great Again hat"></div>
* <div class="card meme" style="left: 408px; top: 120px; width: 464px; height: 520px; background: #fff; --tilt: 2deg;"><img src="./compute-paris-2026-datascience-engineering/meme_functions.png" alt="We need you to use functions"></div>

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
li { list-style: none; position: absolute; left: 0; top: 0; width: 1280px; height: 720px; margin: 0; padding: 0; }
.card { position: absolute; width: 760px; box-sizing: border-box; border-radius: 8px; overflow: hidden; box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35); transform: rotate(var(--tilt, 0deg)); }
li:not([data-bespoke-marp-fragment=inactive]) .card { animation: newspaper 0.8s cubic-bezier(0.2, 0.8, 0.3, 1) both; }
@keyframes newspaper {
  0% { transform: scale(0.05) rotate(calc(var(--tilt, 0deg) + 720deg)); opacity: 0; }
  30% { opacity: 1; }
  100% { transform: scale(1) rotate(var(--tilt, 0deg)); opacity: 1; }
}
.meme { height: 500px; background: #111; }
.meme img { width: 100%; height: 100%; object-fit: cover; display: block; }
.cap { position: absolute; top: 16px; left: 0; right: 0; padding: 0 20px; text-align: center; text-transform: uppercase; color: #fff; font: 800 44px/1.1 Impact, "Arial Black", sans-serif; text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000; }
.cap.bottom { top: auto; bottom: 16px; }
.cap.plain { font: 700 46px/1.1 Arial, Helvetica, sans-serif; text-shadow: 0 2px 6px rgba(0, 0, 0, 0.55); }
.jira { background: #fff; color: #172b4d; font-family: "Helvetica Neue", Arial, sans-serif; border: 1px solid #dfe1e6; }
.jh { display: flex; align-items: center; gap: 12px; padding: 14px 24px; background: #f4f5f7; border-bottom: 1px solid #dfe1e6; font-size: 22px; color: #5e6c84; }
.ji { color: #36b37e; font-size: 22px; }
.st { margin-left: auto; padding: 3px 10px; border-radius: 4px; background: #dfe1e6; font-size: 16px; font-weight: 700; color: #42526e; }
.jt { padding: 22px 24px 8px; font-size: 40px; font-weight: 600; }
.jb { padding: 8px 24px 20px; font-size: 24px; line-height: 1.35; }
.jm { display: flex; flex-wrap: wrap; gap: 8px 28px; padding: 14px 24px; border-top: 1px solid #dfe1e6; font-size: 19px; color: #5e6c84; }
.hi { color: #de350b; }
.code { margin: 0; padding: 20px 28px 28px; background: #1e1e2e; color: #f8f8f2; font: 24px/1.45 "Fira Code", Consolas, monospace; white-space: pre; }
.code::before { content: "\25CF  \25CF  \25CF"; display: block; margin-bottom: 10px; color: #6272a4; font-size: 16px; letter-spacing: 2px; }
.code .k { color: #ff79c6; }
.code .f { color: #50fa7b; }
.code .s { color: #f1fa8c; }
.code .d { color: #8be9fd; }
</style>

<!--

Okay so now this is the data science crowd who's gonna come at me...

Listen: I don't love OOP (short for objected oriented-programming) but I don't hate it either. However, I get a tiny bit angry when I see some exotic constructs for no reason.

Sometimes I feel like I'm watching a Stanley Kubrick movie: why is OOP so highly regarded as a software engineering practice?

Seriously, who told you that to make your code professionnal, you have to use classes?? (by the way this is a fake recreation of a real Jira ticket I've seen with my own eyes)

Using classes as a namespace for static functions? Really?
Using classes as...functions? Really? (I mean don't get me wrong, this has the potential for some advanced software engineering pattern for event driven handling etc. but not here no)

Is there a secret conspiracy to bring OOP back in style? MOGA anyone?

I'll stop the jokes here but the only thing I want to say is: use functions!
-->

---

## 🤒 Resist the OOP fever

* <img src="./compute-paris-2026-datascience-engineering/stateless_flow_1.svg" style="position: absolute; left: 40px; top: 150px; width: 1200px;">
* <img src="./compute-paris-2026-datascience-engineering/stateless_flow_2.svg" style="position: absolute; left: 40px; top: 150px; width: 1200px;">
* <img src="./compute-paris-2026-datascience-engineering/stateless_flow_3.svg" style="position: absolute; left: 40px; top: 150px; width: 1200px;">
* <img src="./compute-paris-2026-datascience-engineering/stateless_flow_4.svg" style="position: absolute; left: 40px; top: 150px; width: 1200px;">
* <img src="./compute-paris-2026-datascience-engineering/stateless_flow_5.svg" style="position: absolute; left: 40px; top: 150px; width: 1200px;">
* <img src="./compute-paris-2026-datascience-engineering/stateless_flow_6.svg" style="position: absolute; left: 40px; top: 150px; width: 1200px;">

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
li { list-style: none; position: absolute; left: 0; top: 0; width: 1280px; height: 720px; margin: 0; padding: 0; }
li:not([data-bespoke-marp-fragment=inactive]) img { animation: fadein 0.5s ease-out both; }
@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
</style>

<!--
Okay so why use functions instead of classes and objects?

Functions carry no state, they are "stateless", takes input parameters and return output results.
Hence they provide deterministic behavior (mostly, if no side-effects are introduced), and are easy to test, debug and reuse.

One cool thing is that functions can be composed to make a graph. And it happens that lots of data processing workflows can be expressed as DAGs (short for Directed Acyclic Graphs).

Okay great but I still need to keep a state somewhere at some point for the graph to operate, whether for input, output and intermediate data. How should we do that if we only use stateless functions?

You can simply push the statefulness responsibility of the data processing graph to the execution environment. You keep the state at the boundary of the system so it can easily be swapped and this plumbing stays very localized.

The execuiton environment can start with a notebook chaining some functions with keeping the state in the notebook global state. Then you can graduate almost for free to using a full-blown DAG orchestrator like Airflow or Dagster, where managing the state will be a matter of configuring the orchestrator: the unit functions will still take input values and return output results!

Structuring any data processing workfow this way allows to speed up quite a lot the path to integration and production!

As a reference, this pattern of is commonly called "Functional core, imperative shell".

(
other advantages:
- no more hidden mutations
- reproducibility
- caching
- parallelisation
- backfills and reprocessing
)
-->

---

## 📦 Deliver models using standard formats

* <div class="box" style="left: 70px; top: 200px;"><img class="sklearn" src="./compute-paris-2026-datascience-engineering/scikit_learn_logo.svg" alt="sklearn"></div><div class="box" style="left: 70px; top: 340px;"><img class="pytorch" src="./compute-paris-2026-datascience-engineering/pytorch_logo.svg" alt="pytorch"></div><div class="box" style="left: 70px; top: 480px;"><img class="tensorflow" src="./compute-paris-2026-datascience-engineering/tensorflow_logo.svg" alt="tensorflow"></div>
* <div class="box" style="left: 910px; top: 195px; height: 120px;"><div class="th">Targets</div><div class="tt">☁️ Cloud · 📱 Mobile<br>🌐 Browser · 📟 Edge</div></div><div class="box" style="left: 910px; top: 335px; height: 120px;"><div class="th">Hardware</div><div class="tt">CPU · GPU<br>NPU · TPU</div></div><div class="box" style="left: 910px; top: 475px; height: 120px;"><div class="th">Languages</div><div class="tt">Python · C++ · C#<br>Java · JavaScript<br><span class="community">Rust · Go</span></div></div>
* <img src="./compute-paris-2026-datascience-engineering/onnx_flow_ir.svg" style="position: absolute; left: 0; top: 0; width: 1280px;">
* <div class="box" style="left: 510px; top: 565px; width: 260px; height: 90px;"><img class="onnxlogo" src="./compute-paris-2026-datascience-engineering/onnx_logo.svg" alt="ONNX"></div>

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
li { list-style: none; position: absolute; left: 0; top: 0; width: 1280px; height: 720px; margin: 0; padding: 0; }
.box { position: absolute; width: 300px; height: 110px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #fff; color: #1e293b; border-radius: 16px; }
.sklearn { height: 80px; max-width: 240px; }
.pytorch { width: 230px; }
.tensorflow { height: 92px; }
.onnxlogo { width: 200px; }
.th { font-size: 17px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b; }
.tt { font-size: 21px; font-weight: 600; line-height: 1.35; text-align: center; }
.community { color: #64748b; font-style: italic; }
li:not([data-bespoke-marp-fragment=inactive]) .box, li:not([data-bespoke-marp-fragment=inactive]) > img { animation: fadein 0.5s ease-out both; }
@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
</style>

<!--
Last topic for today: delivering models.

Most data science teams work in a flexible environment: a dynamic language like Python or R, a heavy ML framework like scikit-learn, pytorch or tensorflow, etc.

Most engineering teams build software with different constraints: maybe they are developing using dynamic languages but they limit the dependencies footprint so ML frameworks are out of the way, or maybe they are using a compiled language like C++, Rust or Go.

So simply handing the model inference pipeline implementations using dynamic languages and heavy dependencies can cause integration issues.

They are usually two ways of solving this problem:
- Deliver a model in the form of a REST API or a process that can be invoked: but maybe you can't or don't want to go down this route
- Another way is to deliver the model using an abstract representation.

One of the most popular format for intermediate model representation is ONNX (short for Open Neural Network Exchange format). Even though the name says "neural network" you can use it for any computations, but the format happens to have lots of pre-defined units for neural network specific layers (like Convolutional Layers, etc.). To use an abstract model like ONNX, you then simply need to have a model runtime (here, ONNX Runtime built in C++ with binding in many languages).

Most ML frameworks inference pipelines can be either exported directly or expressed as ONNX.

And on the other side, most programming languages can load ONNX models through the ONNX Runtime (if some of you have seen my talk last year at PyData Paris 2025, you can run them in your browser using WebAssembly and WebGPU!)

Oh and that's not the only benefit. You also get:
- automatic optimizations (nodes are vectorized and optimized by the provided runtime)
- automatic hardware acceleration (cpu, gpu (nvidia cuda, openvino), npu, etc.)
- can fit the pre and post processing inside!
- can subdivide in subgraphs! (and distribute/parallelize!)
 -->

---

## 📦 Deliver models using standard formats

<div style="text-align: center;">

![h:450px](compute-paris-2026-datascience-engineering/onnx_graph.png)

</div>

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
</style>

<!--
If you are not familiar with such model formats, let me give you a quick sneak peek.

As you can see, this is just a graph of unit operations chained together. Recall what I said about DAGs earlier?

This example is pretty trivial but that just for readability. Of course real-world model graphs are usually much more dense than this one.
 -->

---

## 🗂️ Use a model registry

* <div class="folder">📁 Sharepoint › Data Science › Models</div><div class="file" style="top: 250px;"><span>📄 model_final.pkl</span><span class="who">Monday</span></div>
* <div class="file" style="top: 318px;"><span>📄 model_final_v2.pkl</span><span class="who">Tuesday</span></div>
* <div class="file" style="top: 386px;"><span>📄 model_final_v2_FINAL_really.pkl</span><span class="who">Friday, 18:47</span></div>
* <div class="file" style="top: 454px;"><span>📄 model_FINAL_USE_THIS_ONE.pkl</span><span class="who">Saturday, 03:12</span></div>
* <div class="file" style="top: 522px;"><span>📄 model_FINAL_USE_THIS_ONE (1).pkl</span><span class="who">Just now</span></div>

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
li { list-style: none; position: absolute; left: 0; top: 0; width: 1280px; height: 720px; margin: 0; padding: 0; }
.folder { position: absolute; left: 200px; top: 160px; width: 880px; height: 450px; box-sizing: border-box; padding: 24px 32px; background: #fff; color: #334155; border-radius: 16px; font-size: 26px; font-weight: 700; }
.file { position: absolute; left: 232px; width: 816px; height: 58px; box-sizing: border-box; padding: 0 20px; display: flex; align-items: center; justify-content: space-between; background: #f1f5f9; color: #0f172a; border-radius: 10px; font: 600 24px Menlo, Consolas, "DejaVu Sans Mono", monospace; }
.file .who { color: #64748b; font-size: 19px; font-weight: 400; }
li:not([data-bespoke-marp-fragment=inactive]) .file, li:not([data-bespoke-marp-fragment=inactive]) .folder { animation: fadein 0.4s ease-out both; }
@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
</style>

<!--
And how do you know which model is the right one? You've all seen this folder.
 -->

---

## 🗂️ Use a model registry

* <span></span>
* <span></span>
* <span></span>
* <span></span>
* <span></span>
* <span></span>
* <span></span>
* <span></span>
* <span></span>
* <span></span>

<div class="r panel"><div class="title">📚 Model Registry</div><div class="model">house-price</div></div>
<div class="r ds">Data Science</div>
<div class="r row v1"><b>v1</b><span class="mae">MAE 31k</span></div>
<div class="r row v2"><b>v2</b><span class="mae">MAE 23k</span></div>
<div class="r row v3"><b>v3</b><span class="mae">MAE 21k</span></div>
<div class="r broken">🔥 breaks in prod</div>
<img class="r wire pub1" src="./compute-paris-2026-datascience-engineering/registry_arrow_publish_1.svg" alt="">
<img class="r wire pub2" src="./compute-paris-2026-datascience-engineering/registry_arrow_publish_2.svg" alt="">
<img class="r wire pub3" src="./compute-paris-2026-datascience-engineering/registry_arrow_publish_3.svg" alt="">
<img class="r wire prod1" src="./compute-paris-2026-datascience-engineering/registry_arrow_prod_1.svg" alt="">
<img class="r wire prod2" src="./compute-paris-2026-datascience-engineering/registry_arrow_prod_2.svg" alt="">
<img class="r wire prod3" src="./compute-paris-2026-datascience-engineering/registry_arrow_prod_3.svg" alt="">
<img class="r wire test1" src="./compute-paris-2026-datascience-engineering/registry_arrow_test_1.svg" alt="">
<img class="r wire test2" src="./compute-paris-2026-datascience-engineering/registry_arrow_test_2.svg" alt="">
<img class="r wire test3" src="./compute-paris-2026-datascience-engineering/registry_arrow_test_3.svg" alt="">
<div class="r champion">@champion</div>
<div class="r ops"><div class="team">Operations</div><div class="what">runs in production</div><div class="ref">house-price@champion</div><div class="now"><span class="n1">= v1</span><span class="n2">= v2</span><span class="n3">= v3</span></div></div>
<div class="r eng"><div class="team">Engineering</div><div class="what">integrates the new version</div></div>
<div class="r logo"><img src="./compute-paris-2026-datascience-engineering/mlflow_logo.svg" alt="MLflow"></div>

<style scoped>
h2 { position: absolute; top: 50px; left: 78px; margin: 0; }
ul { position: absolute; width: 0; height: 0; margin: 0; padding: 0; overflow: hidden; }
.r { position: absolute; box-sizing: border-box; opacity: 0; transition: opacity 0.5s ease, top 0.9s cubic-bezier(0.5, -0.3, 0.3, 1.3), border-color 0.4s, background-color 0.4s, box-shadow 0.4s; }
.wire { left: 0; top: 0; width: 1280px; height: 720px; margin: 0; }
.panel { left: 400px; top: 160px; width: 440px; height: 380px; background: #1e293b; border: 2.5px solid #e2e8f0; border-radius: 20px; color: #f1f5f9; text-align: center; padding-top: 10px; }
.title { font-size: 28px; font-weight: 700; }
.model { font: 700 21px Menlo, Consolas, "DejaVu Sans Mono", monospace; color: #7cc4fa; }
.row { left: 420px; width: 400px; height: 70px; display: flex; align-items: center; gap: 18px; padding: 0 18px; background: #f1f5f9; color: #0f172a; border: 3px solid #cbd5e1; border-radius: 12px; font: 26px Menlo, Consolas, "DejaVu Sans Mono", monospace; }
.row .mae { font-size: 18px; color: #475569; transition: opacity 0.4s; }
.v1 { top: 255px; }
.v2 { top: 345px; }
.v3 { top: 435px; }
.broken { left: 474px; top: 457px; font-size: 18px; font-weight: 700; color: #b91c1c; line-height: 26px; }
.champion { left: 648px; top: 271px; width: 158px; height: 38px; display: flex; align-items: center; justify-content: center; background: #fde68a; color: #78350f; border: 2.5px solid #f59e0b; border-radius: 19px; font: 700 18px Menlo, Consolas, "DejaVu Sans Mono", monospace; }
.ds, .ops, .eng { display: flex; flex-direction: column; align-items: center; justify-content: center; border: 3px solid; border-radius: 16px; font-size: 26px; font-weight: 700; }
.ds { left: 80px; top: 340px; width: 240px; height: 90px; background: #fde3cc; border-color: #f0a468; color: #9a4f12; }
.ops { left: 958px; top: 180px; width: 270px; height: 170px; background: #e6dcf3; border-color: #8e6bbf; color: #4c2f7a; }
.eng { left: 958px; top: 430px; width: 270px; height: 100px; background: #d6eefa; border-color: #5bb5e0; color: #1d5f85; }
.what { font-size: 18px; font-weight: 400; color: #334155; }
.ref { opacity: 0; transition: opacity 0.5s; margin-top: 8px; padding: 4px 10px; background: #fde68a; color: #78350f; border: 2px solid #f59e0b; border-radius: 8px; font: 700 17px Menlo, Consolas, "DejaVu Sans Mono", monospace; }
.now { position: relative; width: 100%; height: 30px; margin-top: 4px; font: 700 22px Menlo, Consolas, "DejaVu Sans Mono", monospace; }
.now span { position: absolute; left: 0; right: 0; text-align: center; opacity: 0; transition: opacity 0.5s; }
.logo { left: 520px; top: 568px; width: 200px; height: 68px; display: flex; align-items: center; justify-content: center; background: #1e293b; border: 2px solid #94a3b8; border-radius: 16px; }
.logo img { height: 46px; }
/* timeline */
section:has(li[data-marpit-fragment="1"]:not([data-bespoke-marp-fragment="inactive"])) .panel, section:has(li[data-marpit-fragment="1"]:not([data-bespoke-marp-fragment="inactive"])) .ds, section:has(li[data-marpit-fragment="1"]:not([data-bespoke-marp-fragment="inactive"])) .ops, section:has(li[data-marpit-fragment="1"]:not([data-bespoke-marp-fragment="inactive"])) .eng { opacity: 1; }
section:has(li[data-marpit-fragment="2"]:not([data-bespoke-marp-fragment="inactive"])) .v1, section:has(li[data-marpit-fragment="2"]:not([data-bespoke-marp-fragment="inactive"])) .pub1, section:has(li[data-marpit-fragment="2"]:not([data-bespoke-marp-fragment="inactive"])) .test1 { opacity: 1; }
section:has(li[data-marpit-fragment="3"]:not([data-bespoke-marp-fragment="inactive"])) .pub1, section:has(li[data-marpit-fragment="3"]:not([data-bespoke-marp-fragment="inactive"])) .test1 { opacity: 0; }
section:has(li[data-marpit-fragment="3"]:not([data-bespoke-marp-fragment="inactive"])) .champion, section:has(li[data-marpit-fragment="3"]:not([data-bespoke-marp-fragment="inactive"])) .ref, section:has(li[data-marpit-fragment="3"]:not([data-bespoke-marp-fragment="inactive"])) .prod1, section:has(li[data-marpit-fragment="3"]:not([data-bespoke-marp-fragment="inactive"])) .n1 { opacity: 1; }
section:has(li[data-marpit-fragment="4"]:not([data-bespoke-marp-fragment="inactive"])) .v2, section:has(li[data-marpit-fragment="4"]:not([data-bespoke-marp-fragment="inactive"])) .pub2, section:has(li[data-marpit-fragment="4"]:not([data-bespoke-marp-fragment="inactive"])) .test2 { opacity: 1; }
section:has(li[data-marpit-fragment="5"]:not([data-bespoke-marp-fragment="inactive"])) .pub2, section:has(li[data-marpit-fragment="5"]:not([data-bespoke-marp-fragment="inactive"])) .test2, section:has(li[data-marpit-fragment="5"]:not([data-bespoke-marp-fragment="inactive"])) .prod1, section:has(li[data-marpit-fragment="5"]:not([data-bespoke-marp-fragment="inactive"])) .n1 { opacity: 0; }
section:has(li[data-marpit-fragment="5"]:not([data-bespoke-marp-fragment="inactive"])) .prod2, section:has(li[data-marpit-fragment="5"]:not([data-bespoke-marp-fragment="inactive"])) .n2 { opacity: 1; }
section:has(li[data-marpit-fragment="5"]:not([data-bespoke-marp-fragment="inactive"])) .champion { top: 361px; }
section:has(li[data-marpit-fragment="6"]:not([data-bespoke-marp-fragment="inactive"])) .v3, section:has(li[data-marpit-fragment="6"]:not([data-bespoke-marp-fragment="inactive"])) .pub3, section:has(li[data-marpit-fragment="6"]:not([data-bespoke-marp-fragment="inactive"])) .test3 { opacity: 1; }
section:has(li[data-marpit-fragment="7"]:not([data-bespoke-marp-fragment="inactive"])) .pub3, section:has(li[data-marpit-fragment="7"]:not([data-bespoke-marp-fragment="inactive"])) .test3, section:has(li[data-marpit-fragment="7"]:not([data-bespoke-marp-fragment="inactive"])) .prod2, section:has(li[data-marpit-fragment="7"]:not([data-bespoke-marp-fragment="inactive"])) .n2 { opacity: 0; }
section:has(li[data-marpit-fragment="7"]:not([data-bespoke-marp-fragment="inactive"])) .prod3, section:has(li[data-marpit-fragment="7"]:not([data-bespoke-marp-fragment="inactive"])) .n3 { opacity: 1; }
section:has(li[data-marpit-fragment="7"]:not([data-bespoke-marp-fragment="inactive"])) .champion { top: 451px; }
section:has(li[data-marpit-fragment="8"]:not([data-bespoke-marp-fragment="inactive"])) .broken { opacity: 1; }
section:has(li[data-marpit-fragment="8"]:not([data-bespoke-marp-fragment="inactive"])) .v3 .mae { opacity: 0; }
section:has(li[data-marpit-fragment="8"]:not([data-bespoke-marp-fragment="inactive"])) .v3 { border-color: #ef4444; background: #fee2e2; }
section:has(li[data-marpit-fragment="8"]:not([data-bespoke-marp-fragment="inactive"])) .ops { border-color: #ef4444; box-shadow: 0 0 0 6px rgba(239, 68, 68, 0.45); }
section:has(li[data-marpit-fragment="9"]:not([data-bespoke-marp-fragment="inactive"])) .prod3, section:has(li[data-marpit-fragment="9"]:not([data-bespoke-marp-fragment="inactive"])) .n3 { opacity: 0; }
section:has(li[data-marpit-fragment="9"]:not([data-bespoke-marp-fragment="inactive"])) .prod2, section:has(li[data-marpit-fragment="9"]:not([data-bespoke-marp-fragment="inactive"])) .n2 { opacity: 1; }
section:has(li[data-marpit-fragment="9"]:not([data-bespoke-marp-fragment="inactive"])) .champion { top: 361px; }
section:has(li[data-marpit-fragment="9"]:not([data-bespoke-marp-fragment="inactive"])) .ops { border-color: #8e6bbf; box-shadow: none; }
section:has(li[data-marpit-fragment="10"]:not([data-bespoke-marp-fragment="inactive"])) .logo { opacity: 1; }
</style>

<!--
Use a model registry: corner stone for an MLOps strategy

It is the shared contract between data science and engineering: which model is it, where does it come from, and which one should be used.
Nothing is captured by magic: the training run has to log the data version, the code commit and the environment.
Consumers don't ask for a file path, they ask for an alias (for instance with MLflow).
Rollback is just moving the alias, nothing changes in the consuming code.

A registry doesn't make your model better. It means nobody has to ask which one is in production.
 -->

---

## ❤️‍🩹 Getting back together

- Integrate end-to-end early
- Deploying notebooks at first is okay
- Prefer functions and graphs
- Use standard model formats
- Use a model registry

---

## 🔭 Other possible topics

After initial steps, more advanced topics can be tackled:

- Centralized data management
- Data and model drift monitoring
- Security
- AI coding agents
- etc.

---

## Romain Clement

Independent MLOps consultant
**Datalpia**

![bg right width:80%](datalpia-profile.png)

🌐 [datalpia.com](https://datalpia.com)
🌐 [romain-clement.net](https://romain-clement.net)
🔗 [linkedin.com/in/romainclement](https://www.linkedin.com/in/romainclement)

---

# 🙋 Questions ?

Thank you! Let's chat!

---

## 📚 References

- [ml-ops.org](https://ml-ops.org/)
- [ONNX](https://onnx.ai/)
- [Papermill](https://papermill.readthedocs.io/)
- [Marimo](https://marimo.io/)
- [MLflow](https://mlflow.org/)
- [Netron](https://netron.app/)
- Logos of C++, MATLAB, Python, Scikit-Learn, PyTorch, Tensorflow, ONNX from [Wikimedia](https://www.wikimedia.org/)
- All "Friends" pictures from [IMDb](https://www.imdb.com/)

Note: some illustrations were generated using Generative AI

<!--
## Data Science and Engineering: We Were on a Break!

### Abstract

MLOps was supposed to be the extension of DevOps applied to ML-centric software. But the story is not so simple, and in 2026 the collaboration between data scientists and engineers is still not so smooth in most organizations. Let's try to find some pragmatic actions to improve the situation!

### Description

Fifteen years ago, teams were struggling to deliver MATLAB models to engineering teams because of real technical challenges (porting to C/C++, floating-point vs fixed-point computations, assembly optimizations, etc). In 2026, the machine learning ecosystem has mostly converged to Python for the entire lifecycle with a promise to break down silos and streamline the deliveries from research to engineering to production. But in reality, data science and engineering teams still struggle to deliver smoothly.

What if the core issue was not technical but human? How to make data science care about engineering, and vice-versa?

In this talk, we'll cover some common situations from the field of MLOps, among which:

- Start simple and iterate
- Resist the OOP fever
- Deploy your notebooks
- Deliver models using standard formats
- Prioritize real-world usage and data

You will leave with some pragmatic actions, illustrated with open-source technologies mostly in the Python ecosystem (such as Papermill, Marimo, ONNX, MLflow).

This light-hearted talk is intended for data scientists, ML/Data/Software engineers and technical leads looking for a pragmatic angle to reduce the time to delivery of ML-driven products.

Some familiarity with data science activities and/or software engineering is advised.

 -->