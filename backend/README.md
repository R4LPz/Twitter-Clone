# API

[Tecnologias](#id01) | [MVP](#id02) | [Execução](#id03) | [Documentação](#id04)

# Tecnologias <a name="id01"/>

- Nodejs
- yarn
- Express
- MongoDB
- Mongoose
- Bearer Authentication

# MVP <a name="id02"/>

- **Usuários**
    - [x] CRUD Usuários

- **Tweets**
    - [X] CRUD Tweets

- **Ações**
    - [X] Curtir um Tweet
    - [ ] Retweetar um post
    - [ ] Comentar um Tweet
    - [ ] Follow e Unfollow em Usuário

# Execução <a name="id03"/>

Para executar o projeto, primeiro começe instalando as dependências com o comando:

`$ yarn install`

Em seguida, é possível executar o projeto através do comando:

`$ yarn start`

Caso queira executa-lo através do nodemon :

`$ yarn run dev`

# Documentação <a name="id04"/>

# Rotas de Usuário

#### [POST] *'/user'*

```
request:
{
	"email": "email@teste",
	"password": "123",
	"username": "username"
}
```
response:
```
	"User": {
		"email": "email@teste",
		"password": "$2a$10$EvL51QRGwdgtBk1jGjN8uuOuPsslZZHBeWMD25Pt0.K4p43h/zPZO",
		"username": "username",
		"description": "",
		"profile_image": "",
		"_id": "6257305de1d632ff1716a55c",
		"createdAt": "2022-04-13T20:19:41.517Z",
		"updatedAt": "2022-04-13T20:19:41.517Z",
		"__v": 0
	}
}
```

---

### GET '/user/:id'

response:
```
{
	"_id": "6257305de1d632ff1716a55c",
	"email": "email@teste",
	"name": "username",
	"username": "username",
	"description": "",
	"profile_image": "",
	"createdAt": "2022-03-17T22:10:43.333Z",
	"updatedAt": "2022-03-17T22:10:43.333Z",
	"__v": 0
}
```

---

### DELETE '/user/:username'

```
response:
{
	"UserId": "6257305de1d632ff1716a55c"
}
```

---

### PATCH '/user/:username'

request:
```
{
	"name": "New Name",
	"description": "This is a new desciption",
	"profile_image": "base_profile_image.png"
}
```
response:
```
{
	"_id": "6257305de1d632ff1716a55c",
	"email": "email@teste",
	"username": "username",
	"description": "This is a new desciption",
	"profile_image": "base_profile_image.png",
	"createdAt": "2022-04-13T20:23:41.179Z",
	"updatedAt": "2022-04-13T20:23:41.179Z",
	"__v": 0,
	"name": "New Name"
}
```

# Rotas de Tweets

### POST '/tweet'

request:
```
{
	"text": "Create a new Tweet"
}
```

response:
```
{
	"author": "6257305de1d632ff1716a55c",
	"text": "Create a new Tweet",
	"image": "",
	"likes": [],
	"_id": "625731c5372ac0dc60028ea7",
	"createdAt": "2022-04-13T20:25:41.496Z",
	"updatedAt": "2022-04-13T20:25:41.496Z",
	"__v": 0
}
```

---

### GET '/tweet'

response:
```
[
	{
        "author": "6257305de1d632ff1716a55c",
        "text": "Create a new Tweet",
        "image": "",
        "likes": [],
        "_id": "625731c5372ac0dc60028ea7",
        "createdAt": "2022-04-13T20:25:41.496Z",
        "updatedAt": "2022-04-13T20:25:41.496Z",
        "__v": 0
    }
]
```

---

### GET '/tweet/:id'

response:
```
{
    "author": "6257305de1d632ff1716a55c",
    "text": "Create a new Tweet",
    "image": "",
    "likes": [],
    "_id": "625731c5372ac0dc60028ea7",
    "createdAt": "2022-04-13T20:25:41.496Z",
    "updatedAt": "2022-04-13T20:25:41.496Z",
    "__v": 0
}
```

---

### DELETE '/tweet/:id'

response:
```
{
	"Status": "OK",
	"id": "625731c5372ac0dc60028ea7"
}
```

---

### PATCH '/tweet/:id'

request:
```
{
	"text": "New text edited"
}
```
response:
```
{
    "author": "6257305de1d632ff1716a55c",
    "text": "New text edited",
    "image": "",
    "likes": [],
    "_id": "625731c5372ac0dc60028ea7",
    "createdAt": "2022-04-13T20:25:41.496Z",
    "updatedAt": "2022-04-13T20:25:41.496Z",
    "__v": 0
}
```

---


### PATCH '/tweet/:id/like'
```
{
    "author": "6257305de1d632ff1716a55c",
    "text": "New text edited",
    "image": "",
    "likes": [
        "6257305de1d632ff1716a55c"
    ],
    "_id": "625731c5372ac0dc60028ea7",
    "createdAt": "2022-04-13T20:25:41.496Z",
    "updatedAt": "2022-04-13T20:25:41.496Z",
    "__v": 0
}
```

# Rotas de Sessão

### POST 'session/'
request:
```
{
	"email": "email2",
	"password": "123"
}
```
response:
```
{
	"user": "6257305de1d632ff1716a55c",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTczMDVkZTFkNjMyZmYxNzE2YTU1YyIsImlhdCI6MTY0OTg4MTM4NiwiZXhwIjoxNjQ5OTY3Nzg2fQ.ZAQC9k2v9H5Q5x7TLEeF69nWH8FCIBJjDZX5k5TdPbk"
}
```