| Language | Framework  | Author |
| -------- | -------- |--------|
| Javascript | NodeJS |Obed Amoasi |


# Truckee

A public API to Load packages from customer's warehouse onto trucks


## Documentation
current version v1.

### Get Order History
* url : /v1/orders
* method: GET
* Response:
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
* method: POST
* body: 
```javascript
[
  { "id": "ID-1", "weight": 345 },
  { "id": "OTHER-ID-2", "weight": 500 },
  { "id": "CLIENT-ID-3", "weight": 300 },
]
```
* Response: 
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

### Get Price list
* url : /v1/static/price-list.pdf
* method: GET
* Returns PDF of price list

### Developement

#### Setup
To run on local machine
```sh
touch .env
```
- `MONGO_URI=mongodb://localhost:27017/database`
- `PORT=3000`
- `API_VERSION = v1`

```sh
npm  install
```
#### Run
```sh
npm  start
```
#### Test
```sh
npm  test
```

## TODO
- [ ] Mock Mongoose and objects request to test DAL and Controllers respectively
- [ ] Paginate request from Order History. accept pageSize and current page into DAL to limit and skip neccesary documents
- [ ] Update Documentation
- [ ] Create Index
- [ ] Place an index.js file that exposes the module's internals so every consumer will pass through it.



#### Note
- In a real application trucks will be known so API will have to set trucks from a predifined list. A truck might be available or engaged and API must select only from available trucks. 
- **Paginate** request from Order History. accept pageSize and current page into DAL to limit and skip neccesary documents might use mongoose paginate
- Place an index.js file that exposes the module's internals so every consumer will pass through it.
- A real application query might be done on truckIds, price, order Ids, neccesary **indexes** will have to  be created for all these usecase but since the main usecase of this application is to create orders, no index was created to make **insert fast** 
