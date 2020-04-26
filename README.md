# 202012702 유기훈

## 설치

``` 
npm install
```

##  Contents

|       항목       |     URL     | Method  |
| :--------------: | :---------: | :----: |
| [사람 정보 리스트](#사람-정보-리스트) |  /info   |  GET   |
|  [사람 상세 정보](#사람-상세-정보)  | /info/id |  GET   |
|    [사람 추가](#사람-추가)     |  /info   |  POST  |
|    [사람 수정](#사람-수정)     |  /info   |  PUT   |
|    [사람 삭제](#사람-삭제)     | /info/id | DELETE |

---

### 사람 정보 리스트

#### 요청

|    업무     | 사람 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /info         |
|   URL 예    | /info         |
| 요청 메소드 | GET              |


##### 응답 메세지

```  json
    {  
        "id":0,
        "name": "홍길동",
        "address": "서울"
    },
    {
        "id":1,
        "name": "김길동",
        "address": "부산"
    },
    {
        "id": 2,
        "name": "박길동",
        "address": "대구"
    }
```

--------

### 사람 상세 정보

#### 요청

|    업무     | 사람 정보 리스트 |              |
| :---------: | ---------------- | ------------ |
|     URL     | /info/id      | ID : 사람 id |
|   URL 예    | /info/1       |              |
| 요청 메소드 | GET              |             |


##### 응답 메세지

```  json
 {
        "id": 2,
        "name": "박길동",
        "address": "대구"
    }
```

------

### 사람 추가

#### 요청

|    업무     | 사람 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /info         |
| 요청 메소드 | POST             |
| 콘텐츠 타입 | application/json |

##### 요청 메시지

``` json
{
    "id": 2,
    "name": "박길동",
    "address": "대구"
}
```

##### 응답 메세지

```  json
{
    "msg": "success",
    "data": {
    "id": 2,
    "name": "박길동",
    "address": "대구"
}
}
```

-------

### 사람 수정

#### 요청

|    업무     | 사람 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /info         |
|   URL 예    | /info         |
| 요청 메소드 | PUT              |
| 콘텐츠 타입 | application/json |

##### 요청 메시지

``` json
{
    "id": 2,
    "name": "박길동",
    "address": "대구"
}
```



##### 응답 메세지

```  json
{
    "id": 2,
    "name": "박길동",
    "address": "대구"
}

```

-----

### 사람 삭제

#### 요청

|    업무     | 사람 정보 리스트 |              |
| :---------: | ---------------- | ------------ |
|     URL     | /info/ID      | ID : 사람 ID |
|   URL 예    | /info/2      |              |
| 요청 메소드 | DELETE           |              |


##### 응답 메세지 예

```  json
{
    "msg": "Deleted info",
    "data": 2
}
```

