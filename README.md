@copyright by Sope 2024 <br>
Step 1: Clone the repository from github. <br>
Step 2: cd backend ==> to go to backend folder, then "npm i" to install necessary packages. <br>
Step 3: cd frontend ==> to go to frontend folder, then "yarn" to install necessary packages. <br>
Step 4: cd socket ==> to go to socket folder, then "npm i" to install necessary packages. <br>
Step 5: fill in the .env file in config in backend folder: <br>
  *1, PORT = 8000 
  *2, JWT_SECRET_KEY = "" => get from the secure password generator web 
  *3, SMTP_HOST = smtp.gmail.com 
  *4, SMTP_PORT = 465 
  *5, DB_URL => go to mongodb, create a database and get the api key "MongoDB for VS Code", remember to change password in the api key. 
  *6, SMTP_PASSWORD, get from email with 2 layers of protection. 
  *7, SMTP_MAIL, get the email that has SMTP_PASSWORD 
  *8, STRIPE_API_KEY, get from the stripe website, publishable key. 
  *9, STRIPE_SECRET_KEY, get from the stripe website, secret key. 
    * Are there application / system problems for engineering to review?
    * Are there poorly constructed policies that need to be fixed?
    * Are there instrumentation gaps?
Step 6: change origin in app.js, change to "http://localhost:3000/" 
Step 7: change server = "http://localhost:8000/api/v2" in server.js, backend_url = "http://localhost:8000/" in frontend. <br>
Step 8: change activationUrl = "http://localhost:3000/activation/${activationToken}" in user.js in controller in backend. <br>
Step 9: change activationUrl = "http://localhost:3000/seller/activation/${activationToken}" in shop.js in controller in backend. <br>
