# Sujet : Analyse des ventes de produits dans une base de données MongoDB

Vous avez 3h pour effectuer ce TP.

Les données se trouve ici : [data](./sales.js)

Vous pouvez utiliser utiliser également MongoDB Compass, dans ce cas voir l'installation ici : [mongodb compass](./mongo_compass.md)

## Contexte

Vous êtes chargé d'analyser les ventes de produits pour une chaîne de magasins utilisant une base de données MongoDB. 

Les données sont stockées dans une collection appelée `sales`. 

Chaque document dans cette collection représente une transaction de vente.

Certaines questions doivent être rédigées.

Les questions 9, 10, 11 et 12 sont facultatives, mais elles peuvent rapporter des points.

La question 12 est libre, vous pouvez la faire 

## Rendu

Créez un dépôt avec les réponses en MongoDB et les explications dans un fichier markdown.

Vous pouvez effectuer ce travail à plusieurs, au maximun 2 candidats.

## Structure du document `sales`

Chaque document dans la collection `sales` contient les champs suivants :

- `transaction_id`: Identifiant unique de la transaction
- `date`: Date et heure de la transaction (format ISODate)
- `customer_id`: Identifiant unique du client
- `product_id`: Identifiant unique du produit
- `quantity`: Quantité de produits vendus
- `price`: Prix unitaire du produit
- `total_amount`: Montant total de la transaction (quantity * price)
- `store_id`: Identifiant unique du magasin

Exemple de document :
```json
{
  "transaction_id": "1",
  "date": ISODate("2023-06-13T15:30:00Z"),
  "customer_id": "C12345",
  "product_id": "P67890",
  "quantity": 2,
  "price": 29.99,
  "total_amount": 59.98,
  "store_id": "S001"
}
```

## Questions et analyses statistiques

1. **Nombre total de transactions** :
   - Compter le nombre total de documents dans la collection `sales`.

2. **Ventes totales par jour** :
   - Donnez le total des ventes quotidiennes. 

3. **Ventes totales par produit** :
   - Donnez le total des ventes pour chaque produit.

4. **Top 5 des produits les plus vendus** :
   - Identifiez les 5 produits avec le plus grand nombre de transactions. 

5. **Revenu moyen par transaction** :
   - Calculez le revenu moyen par transaction. 

6. **Nombre de clients uniques** :
   - Comptez le nombre de clients uniques ayant effectué au moins une transaction. 

7. **Répartition des ventes par magasin** :
   - Donnez la répartition des ventes pour chaque magasin. 

8. **Écart type des montants des transactions** :
   
- Calculez l'écart type des montants des transactions pour comprendre la variabilité des ventes.

9.  **Distribution des quantités vendues par produit** :
- Analysez la distribution des quantités vendues pour chaque produit. Pensez à faire les calculs de dispersions classiques.

10. **Médiane des ventes par magasin** :
- Calculez la médiane des montants des transactions pour chaque magasin.

11. **Quartiles des montants des transactions** :
- Déterminez les quartiles pour les montants des transactions afin de mieux comprendre la distribution des ventes.

12. **Représenter graphiquement les données**

- Cette question est libre utilisez des graphiques de votre choix pour analyser le dataset.