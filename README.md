# ARGENT BANK - P13

_Build React User Authentication system using API_
    
# Tech

This app is created using **REACT**

# How it works ?

1 - User types email and password
2 - We grab the user email and password and we store them in a useState variable
3 - We make an Api request and inside the body we put users email and password
4 - If the user email and password is found in database the server returns us a Token 
4 - We store the Token in a Cookie to Authorize further actions from the user 
5 - Once data returned from the server we Redirect the user to the profil page using React-Router
    At the same time we update the state in Redux Store from False to True
6 - This user login state we can use to show Login Logout button dynamically

# How are Routes protected in Client side

1 - We use a condition which checks the presence of a Token and LogedIn state
    ( if a Token is present and LogedIn Status True we grant acces to the user else we redirect him to login page )
2 - To redirect the user we use Redirect from React Router Dom

# How are data preserved on page refresh

1 - To prevent the lost of data on page refresh we use a Redux Library called { Redux-Persist } ('https://www.npmjs.com/package/redux-persist')
2 - We put our App inside the Persiste Library and we tell Persite what to keep unchanged on page refresh
    EX: If the user is Loged in and he refreshes the page, he will not be loged out and lose his data but he will stay in his prfile page
    
## How to run the project in developper mode

* First, you need to run the Backend
```
    https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git
```
* Second, clone this repo to your computer using Git commande

```
    git clone https://github.com/deveb2020/EgzonBERISHA_13_09042021.git
```

* Third, open the project in your code editor and run this commande 
`
    npm start
`



# Authorization

1 - If the user is loged in and he whants to make new API Requests he doesen't need to send his email and password each time but instead,
    we use the Token recived from the server to Authorize users Actions, Each time we make a API Request we put in Authorization the Token
    We use JWT tokens for Autho 
