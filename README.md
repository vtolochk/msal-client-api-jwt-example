## MSAL Azure auth with access token example

Follow this docs to create 2 applications for backend and frontend with the correct scope.
https://github.com/Azure-Samples/ms-identity-javascript-tutorial/tree/main/3-Authorization-II/1-call-api

Create a user flow.
Make sure the jwt token is v2.


###### Run
```
(cd spa-client && npm i)
(cd backend && npm i)
```

##### Fill envs:
```
cp backend/.env.example backend/.env
cp spa-client/.env.example spa-client/.env
```

##### Run the example:
```
cd spa-client && npm run dev
cd backend && npm run start
```
