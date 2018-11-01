| Language | Framework | Platform | Author |
| -------- | -------- |--------|--------|
| Nodejs | Express | Heroku|Obed Amoasi |


# Truckee

A public API to Load customer's warehouse onto trucks


## Documentation
current version v1.

### Get Order History
* url : /v1/orders
* method: GET
* Response:  Reply with a response like:
```javascript
{
  "price": 10.95,
  "trucks": [
    {
      "truckID": "unique truck ID",
      "load": [
        { "id": "ID-1", "weight": 345 },
        { "id": "OTHER-ID-2", "weight": 500 }
      ]
    },
    {
      "truckID": "other unique truck ID",
      "load": [
        { "id": "CLIENT-ID-3", "weight": 300 }
      ]
    }
  ]
},

{
  "price": 10.95,
  "trucks": [
    {
      "truckID": "unique truck ID",
      "load": [
        { "id": "ID-1", "weight": 345 },
        { "id": "OTHER-ID-2", "weight": 500 }
      ]
    },
    {
      "truckID": "other unique truck ID",
      "load": [
        { "id": "CLIENT-ID-3", "weight": 300 }
      ]
    }
  ]
}
]
```


### Create Order
* url : /v1/orders
* method: Post
* Response:  Reply with a response like:
```javascript
{
  "price": 10.95,
  "trucks": [
    {
      "truckID": "unique truck ID",
      "load": [
        { "id": "ID-1", "weight": 345 },
        { "id": "OTHER-ID-2", "weight": 500 }
      ]
    },
    {
      "truckID": "other unique truck ID",
      "load": [
        { "id": "CLIENT-ID-3", "weight": 300 }
      ]
    }
  ]
}
```

## TODO
[] Mock Mongoose and objects request to test DAL and Controllers respectively
[] Paginate request from Order History. accept pageSize and current page into DAL to limit and skip neccesary documents
[] Update Documentation
