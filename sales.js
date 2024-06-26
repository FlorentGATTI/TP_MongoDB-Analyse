db.createDocument('sales')

db.sales.insertMany([
    {
      "transaction_id": "11",
      "date": ISODate("2023-06-13T08:30:00Z"),
      "customer_id": "C12354",
      "product_id": "P67899",
      "quantity": 1,
      "price": 12.99,
      "total_amount": 12.99,
      "store_id": "S001"
    },
    {
      "transaction_id": "12",
      "date": ISODate("2023-06-14T09:15:00Z"),
      "customer_id": "C12355",
      "product_id": "P67900",
      "quantity": 2,
      "price": 22.99,
      "total_amount": 45.98,
      "store_id": "S002"
    },
    {
      "transaction_id": "13",
      "date": ISODate("2023-06-15T10:45:00Z"),
      "customer_id": "C12356",
      "product_id": "P67901",
      "quantity": 1,
      "price": 33.99,
      "total_amount": 33.99,
      "store_id": "S003"
    },
    {
      "transaction_id": "14",
      "date": ISODate("2023-06-16T11:30:00Z"),
      "customer_id": "C12357",
      "product_id": "P67902",
      "quantity": 3,
      "price": 10.99,
      "total_amount": 32.97,
      "store_id": "S001"
    },
    {
      "transaction_id": "15",
      "date": ISODate("2023-06-17T12:20:00Z"),
      "customer_id": "C12358",
      "product_id": "P67903",
      "quantity": 2,
      "price": 44.99,
      "total_amount": 89.98,
      "store_id": "S002"
    },
    {
      "transaction_id": "16",
      "date": ISODate("2023-06-18T13:15:00Z"),
      "customer_id": "C12359",
      "product_id": "P67904",
      "quantity": 1,
      "price": 55.99,
      "total_amount": 55.99,
      "store_id": "S003"
    },
    {
      "transaction_id": "17",
      "date": ISODate("2023-06-19T14:05:00Z"),
      "customer_id": "C12360",
      "product_id": "P67905",
      "quantity": 4,
      "price": 5.99,
      "total_amount": 23.96,
      "store_id": "S001"
    },
    {
      "transaction_id": "18",
      "date": ISODate("2023-06-20T15:25:00Z"),
      "customer_id": "C12361",
      "product_id": "P67906",
      "quantity": 3,
      "price": 16.99,
      "total_amount": 50.97,
      "store_id": "S002"
    },
    {
      "transaction_id": "19",
      "date": ISODate("2023-06-21T16:40:00Z"),
      "customer_id": "C12362",
      "product_id": "P67907",
      "quantity": 1,
      "price": 77.99,
      "total_amount": 77.99,
      "store_id": "S003"
    },
    {
      "transaction_id": "20",
      "date": ISODate("2023-06-22T17:35:00Z"),
      "customer_id": "C12363",
      "product_id": "P67908",
      "quantity": 2,
      "price": 28.99,
      "total_amount": 57.98,
      "store_id": "S001"
    },
    {
      "transaction_id": "21",
      "date": ISODate("2023-06-23T18:30:00Z"),
      "customer_id": "C12364",
      "product_id": "P67909",
      "quantity": 1,
      "price": 89.99,
      "total_amount": 89.99,
      "store_id": "S002"
    },
    {
      "transaction_id": "22",
      "date": ISODate("2023-06-24T19:25:00Z"),
      "customer_id": "C12365",
      "product_id": "P67910",
      "quantity": 2,
      "price": 66.99,
      "total_amount": 133.98,
      "store_id": "S003"
    },
    {
      "transaction_id": "23",
      "date": ISODate("2023-06-25T20:15:00Z"),
      "customer_id": "C12366",
      "product_id": "P67911",
      "quantity": 1,
      "price": 99.99,
      "total_amount": 99.99,
      "store_id": "S001"
    },
    {
      "transaction_id": "24",
      "date": ISODate("2023-06-26T21:05:00Z"),
      "customer_id": "C12367",
      "product_id": "P67912",
      "quantity": 3,
      "price": 7.99,
      "total_amount": 23.97,
      "store_id": "S002"
    },
    {
      "transaction_id": "25",
      "date": ISODate("2023-06-27T22:55:00Z"),
      "customer_id": "C12368",
      "product_id": "P67913",
      "quantity": 4,
      "price": 18.99,
      "total_amount": 75.96,
      "store_id": "S003"
    },
    {
      "transaction_id": "26",
      "date": ISODate("2023-06-28T23:45:00Z"),
      "customer_id": "C12369",
      "product_id": "P67914",
      "quantity": 2,
      "price": 23.99,
      "total_amount": 47.98,
      "store_id": "S001"
    },
    {
      "transaction_id": "27",
      "date": ISODate("2023-06-29T00:30:00Z"),
      "customer_id": "C12370",
      "product_id": "P67915",
      "quantity": 1,
      "price": 29.99,
      "total_amount": 29.99,
      "store_id": "S002"
    },
    {
      "transaction_id": "28",
      "date": ISODate("2023-06-30T01:15:00Z"),
      "customer_id": "C12371",
      "product_id": "P67916",
      "quantity": 3,
      "price": 34.99,
      "total_amount": 104.97,
      "store_id": "S003"
    },
    {
      "transaction_id": "29",
      "date": ISODate("2023-07-01T02:00:00Z"),
      "customer_id": "C12372",
      "product_id": "P67917",
      "quantity": 4,
      "price": 14.99,
      "total_amount": 59.96,
      "store_id": "S001"
    },
    {
      "transaction_id": "30",
      "date": ISODate("2023-07-02T03:45:00Z"),
      "customer_id": "C12373",
      "product_id": "P67918",
      "quantity": 2,
      "price": 9.99,
      "total_amount": 19.98,
      "store_id": "S002"
    }
  ])
  