import pandas as pd
import matplotlib.pyplot as plt
from pymongo import MongoClient

# Connexion à MongoDB avec authentification
client = MongoClient('mongodb://root:example@localhost:27017/')
db = client['sales']  # Assurez-vous que le nom de la base de données est correct
collection = db['sales']  # Assurez-vous que le nom de la collection est correct

# Charger les données depuis MongoDB
data = list(collection.find({}, {"_id": 0, "total_amount": 1}))

# Convertir en DataFrame
df = pd.DataFrame(data)

# Créer un histogramme des montants des transactions
plt.hist(df['total_amount'], bins=10)
plt.title('Distribution des montants des transactions')
plt.xlabel('Montant')
plt.ylabel('Fréquence')
plt.show()
