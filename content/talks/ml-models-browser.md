# Running machine learning models in the browser

Talk given on February 13th, 2024 at the [Pie & AI: Grenoble meetup][meetup].

[:simple-eventbrite: Event on Eventbrite][event]

## Summary

Training machine learning models usually requires a great amount of computing power and is performed on powerful computing resources. However, running inference on trained models does not require such a powerful setup.

Most of the trained models are deployed on a server and inference is ran on some backend service such as a REST API. What if these models could be executed directly inside a web browser? This change of paradigm could have a great impact on required computing resources but also on data privacy.

After a brief recap of the machine learning process, we will go through the possibilities offered by some recent technologies, ONNX and WebAssembly, enabling the inference of trained models in the browser directly. Examples will be illustrated using the Scikit-Learn and Keras frameworks, for both classical machine learning and deep learning use-cases.

## Slides

<iframe
    src="https://pieandai-grenoble.github.io/2024-02-23-ml-models-web/"
    width="600"
    height="340"
    scrolling="no"
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
></iframe>

## Samples

- [Housing prediction](https://pieandai-grenoble.github.io/2024-02-23-ml-models-web/samples/housing/index.html)
- [Sentiment analysis](https://pieandai-grenoble.github.io/2024-02-23-ml-models-web/samples/sentiment/index.html)
- [Image classification](https://pieandai-grenoble.github.io/2024-02-23-ml-models-web/samples/imaging/index.html)
- [Image classification (live)](https://pieandai-grenoble.github.io/2024-02-23-ml-models-web/samples/imaging/live.html)

[meetup]: https://www.deeplearning.ai/events/ "Pie & AI community"
[event]: https://www.eventbrite.com/e/pie-ai-grenoble-running-machine-learning-models-in-the-browser-tickets-817407757607 "Meetup Event"
