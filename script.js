
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const GitHub_Data = {
  "login": "Programmer-HK2",
  "id": 172025824,
  "node_id": "U_kgDOCkDn4A",
  "avatar_url": "https://avatars.githubusercontent.com/u/172025824?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Programmer-HK2",
  "html_url": "https://github.com/Programmer-HK2",
  "followers_url": "https://api.github.com/users/Programmer-HK2/followers",
  "following_url": "https://api.github.com/users/Programmer-HK2/following{/other_user}",
  "gists_url": "https://api.github.com/users/Programmer-HK2/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Programmer-HK2/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Programmer-HK2/subscriptions",
  "organizations_url": "https://api.github.com/users/Programmer-HK2/orgs",
  "repos_url": "https://api.github.com/users/Programmer-HK2/repos",
  "events_url": "https://api.github.com/users/Programmer-HK2/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Programmer-HK2/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-06-07T09:17:10Z",
  "updated_at": "2024-06-26T06:35:00Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req , res)=>{
  res.json(GitHub_Data)
})

app.get('/twitter', (req , res) => {
  res.send('This is twitter')
})

app.get('/login', (req, res)=>{
  res.send("<h1>Please Login at HKZ-Programmer.com</h1>")
})

app.get('/youtube', (req , res) =>{
  res.send("HKZ - Programmer")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})