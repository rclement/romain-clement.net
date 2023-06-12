---
marp: true
header: Du Machine Learning avec SQLite
footer: Romain Clement - Human Talks Grenoble - 13 juin 2023
theme: default
paginate: true
---

# Du Machine Learning avec SQLite

> Romain Clement
> Human Talks Grenoble - 13 juin 2023

---

## Faire de l'apprentissage automatique en SQL, directement depuis SQLite, une folie ?

---

## 🤷 Pourquoi ?

- Machine Learning <==> Données
- Ecosystème SQLite
- Analyse ad-hoc
- Intégration pipelines SQL

---

## ⚙️ SQLite-ML

- Extension SQLite
- Open-source (licence Apache-2.0)
- Inspiré par PostgresML et MLFlow
- Intégration de `scikit-learn`
- Approche MLOps

<!--
---

## 💡 Fonctionnalités

- 4 nouvelles fonctions SQL
- Chargement de jeux de données connus
- Entraînement supervisé (classification, régression)
- Prédiction unique et _batch_
- Sélection automatique de modèle
-->

---

## 💻 Démo

Jouons avec les nouvelles fonctions SQL !

<!--
---

## 💻 Démo

1. Chargement d'un jeu de données :

```sql
SELECT sqml_load_dataset(name, table);
```
-->

---

## 💻 Démo

1. Entrainement d'un modèle :

```sql
SELECT sqml_train(
    experiment_name,
    prediction_type,
    algorithm,
    dataset,
    target,
    test_size,
    split_strategy
);
```

<!--
Vue SQL `appartements_grenoble_2021` pour vente appartement à Grenoble en 2021

```sql
SELECT sqml_train(
  'Prediction appartements Grenoble',
  'regression',
  'linear_regression',
  'appartements_grenoble_2021',
  'valeur'
) AS training;
```
-->

---

## 💻 Démo

2. Prédictions avec le modèle

```sql
SELECT sqml_predict(experiment_name, features);
```

```sql
SELECT sqml_predict_batch(experiment_name, features);
```

<!--
Par exemple, pour prédire la valeur foncière d'un T3 de 50m2 place Victor Hugo :

```sql
SELECT round(
  sqml_predict(
    'Prediction appartements Grenoble',
    json_object(
      'surface', 50,
      'pieces', 3,
      'latitude', 45.1893525,
      'longitude', 5.7216074
    )
  )
) AS prediction
```

Par exemple, pour prédire la valeur foncière d'un T4 100m2 place Victor Hugo :

```sql
SELECT round(
  sqml_predict(
    'Prediction appartements Grenoble',
    json_object(
      'surface', 100,
      'pieces', 4,
      'latitude', 45.1893525,
      'longitude', 5.7216074
    )
  )
) AS prediction
```
-->

---

## 😢 Limitations

- Python uniquement (_User Defined Functions_)
- Environnement virtuel Python
- Tables virtuelles SQLite
- Pas de _big data_

---

## 🚀 Evolutions

- Extension native (Rust)
- Pré-traitements
- Recherche d'hyperparamètres
- Modèles pré-entrainés (🤗 Hugging Face)

---

## Références

- [`sqlite-ml`](https://github.com/rclement/sqlite-ml)
- [PostgresML](https://postgresml.org)
- [MLFlow](https://mlflow.org)

---

## Romain CLEMENT

![bg right width:80%](face.png)

Entrepreneur individuel
Ingénieur et formateur
Data / Machine Learning

Organisateur du Meetup Python Grenoble

🌐 [romain-clement.net](https://romain-clement.net)
🔗 [linkedin.com/in/romainclement](https://www.linkedin.com/in/romainclement)
