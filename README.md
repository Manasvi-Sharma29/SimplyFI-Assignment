# SimplyFi Assignment- Backend Developer

This assignment is for the Backend developer position in simplifi.

### Models
- User Model
```yaml
{ 
  ID: {string, mandatory, unique},
  name: {string, mandatory},
  age: {number,mandatory},
  mark1: {number,mandatory}, 
  mark2: {number,mandatory}, 
  mark3: {number,mandatory}, 
  createdAt: {timestamp},
  updatedAt: {timestamp}
}
```
## Student APIs 
#### Upload the student data
### POST /upload
  - Upload a CSV file from  _**form-data**_
  - Insert the data into DataBase

```yaml
{
   {
    "status": true,
    "data": [
        {
            "ID": "3452",
            "name": "jack",
            "age": 18,
            "mark1": 34,
            "mark2": 67,
            "mark3": 88,
            "_id": "63bdc77b40a5ec75afb71aa8",
            "__v": 0,
            "createdAt": "2023-01-10T20:15:55.867Z",
            "updatedAt": "2023-01-10T20:15:55.867Z"
        },
        {
            "ID": "2908",
            "name": "priya",
            "age": 19,
            "mark1": 56,
            "mark2": 24,
            "mark3": 23,
            "_id": "63bdc77b40a5ec75afb71aa9",
            "__v": 0,
            "createdAt": "2023-01-10T20:15:55.870Z",
            "updatedAt": "2023-01-10T20:15:55.870Z"
        }
    ]
}
}
```
#### Get Student's Result

### GET /students/:id/result
  - Take the id of student from path params
  - return the data respective to that id
```yaml
{
    "status": true,
    "data": {
        "ID": "3452",
        "name": "jack",
        "mark1": 34,
        "mark2": 67,
        "mark3": 88
    }
}
```
#### Get passed or failed students

### GET /students?resultStatus=passed/failed
  - Pass the filter resultStatus from query params
  - return the students with marks greater than 33% out of 100 in passed category
  - return the students in failed category if the marks is less then 33% in either of mark1 2 or 3

```yaml
{
    "status": true,
    "data": [
        {
            "ID": "7685",
            "name": "john",
            "age": 15,
            "mark1": 34,
            "mark2": 23,
            "mark3": 34
        },
        {
            "ID": "9087",
            "name": "harry",
            "age": 15,
            "mark1": 33,
            "mark2": 49,
            "mark3": 45
        }
    ]
}
```

## Collection
### students
```yaml
 {  
    "_id": "63bd952ee64db6a5b07c6905",
    "ID": "9087",
    "name": "harry",
    "age": 15,
    "mark1": 33,
    "mark2": 49,
    "mark3": 45,
    "__v": 0,
    "createdAt": "2023-01-10T16:41:18.054+00:00",
    "updatedAt": "2023-01-10T16:41:18.054+00:00"
 }


```



