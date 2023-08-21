# flipkartgrid5-recommenderSystem
# NPM-DEV


Team Name :NPM-DEV
Project: PERSONAL PRODUCT RECOMMENDATION SYSTEM

Tech Stack: MERN

	Database:MongoDB Atlas Cloud Server
	Backend: Express and Node.js
	Frontend: React.js
	other middlewares: 
		Redux for state management in frontend
    
   Team Members:
    Jainesh Machhi
    Krunal Javiya
    Parth Sharma
    
  How to get Started 
  1) clone the repo or download the source code
  2) For the backend:
      run the following commands
        cd backend
        npm i
      
      Now create a new file ".env" and add the following lines of code
         
          PORT=8000
DATABASE_DEV = <database link>
ACCESS_TOKEN_SECRET = <jwtsecret>
FRONTEND_URL = http://localhost:3000

URLS='http://localhost:3000'


USER=<gmail for sending email>
CLIENT_ID=<GCP cloud id>
CLIENT_SECRET=<GCP cloud secret>
REDIRECT_URI=<GCP cloud redirect>
REFRESH_TOKEN=<GCP cloud refresh token>

also configure the colab code FastApi link in productController
          
	
      If consoles "DB connected Successfully" all things went correctly.
  3) for the frontend:
      run the commands
	
          cd frontend/
          npm i
       
	
      Now create another .env file in this folder
      Add the following lines of code
	
          REACT_APP_BACKEDN_URL=<backendurl>
          
     replace <your server url> with the actual server url eg: "http://localhost:9000"
	
      	   npm start 
	
