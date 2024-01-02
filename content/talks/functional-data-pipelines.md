# Pipelines de données fonctionnels

Talk given on November 23rd, 2023 at the [Python Meetup Grenoble][meetup].

[:fontawesome-brands-meetup: Event on Meetup][event]

## Summary

Le développement de pipelines de traitement de données repose généralement sur le paradigme de "graphes orientés acycliques" (DAG). Penser un problème sous la forme d'un graphe permet de modulariser chaque étape et de définir précisément les dépendances et l'ordre d'exécution.

La programmation fonctionnelle trouve naturellement sa place pour la programmation de ces graphes. Même si le langage Python est multi-paradigme, les possibilités fonctionnelles intégrées à la bibliothèque standard sont suffisantes pour aborder au mieux ce genre de situation. Combiné avec les itérateurs et générateurs, les possibilités s'avèrent intéressantes !

Nous verrons ensemble des exemples concrets d'utilisation de concepts de programmation fonctionnelle au service du développement de pipelines de traitements de données en Python.

## Slides

<iframe
    src="/static/talks/functional-data-pipelines.html"
    width="600"
    height="340"
    scrolling="no"
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
></iframe>

(Only available in French :fr:)

[meetup]: https://www.meetup.com/fr-FR/Groupe-dutilisateurs-Python-Grenoble/ "Python Meetup Grenoble"
[event]: https://www.meetup.com/fr-FR/groupe-dutilisateurs-python-grenoble/events/297243727/ "Meetup Event"
