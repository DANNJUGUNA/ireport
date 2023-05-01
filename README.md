# IREPORT APPLICATION

## Application Overview

Ireport is an application designed to facilitate communication between citizens and authorities regarding potential issues in their community. With Ireport, users can easily post redflags or interventions related to things like public safety, infrastructure, or other concerns. The platform allows users to provide detailed information about the issue, including photos and location data. Once posted, the relevant authorities can view and respond to these reports, allowing for swift and effective resolution of problems. Ireport is a powerful tool for promoting transparency and accountability, and helps to foster greater collaboration between citizens and their government.

## Setup and Installation

1. ***Clone the repository:*** Open a terminal window and navigate to the directory where you want to download the application. Use the following command to clone the repository:

```javascript 
    git clone git@github.com:DANNJUGUNA/ireport.git
```

2. ***Install dependencies:*** Navigate to the project directory and install the dependencies for both the backend (Ruby on Rails) and frontend (ReactJS).
cd to the backend and frontend on separate terminals respectively.
For the backend, use the following command to install the required gems:

```javascript
   bundle install
   ```
For the frontend, use the following command to install the required packages:

```javascript
   cd client
   npm install
 ```
 3. ***Set up the database:*** In the terminal window, navigate to the project directory and run the following commands to create and migrate the database:

  ```ruby
   rails db:create
   rails db:migrate
   ```
 4. ***Start the server:*** In the terminal window, navigate to the project directory and run the following command to start the server:

 ```ruby
   rails s
 ```
 5. ***Start the client:*** In a new terminal window, navigate to the project directory and run the following command to start the frontend server:
   ```javascript
   cd client
   npm start

   ```
 6. ***Access the application:*** Open a web browser and navigate to http://localhost:3000 to access the application.


 ## Configuration
  
Create a ***.env*** file in the root directory of your Ruby on Rails application. This file will store your environment variables. Make sure to add this file to your .gitignore file to avoid committing sensitive information to your repository.

Add your environment variables to the .env file in the following format: ```html VARIABLE_NAME=value```. For example:

                ```bash 
                DATABASE_URL=postgres://username:password@localhost/mydatabase
                   API_KEY=1234567890
                ```

In your Ruby on Rails application, access the environment variables using the ENV object. For example:

                ```CSS 
                database_url = ENV['DATABASE_URL']
                 api_key = ENV['API_KEY']
                ```

  Configure your PostgresSQL database by updating the **config/database.yml file** in your Ruby on Rails application. Make sure to update the **username**, **password**, **host**, and **database** fields with your own values.

                    ```yaml
                      default: &default
                      adapter: postgresql
                      encoding: unicode
                      username: your_username
                      password: your_password
                      host: localhost
                      database: your_database_name

                     development:
                     <<: *default

                    ```


In your ReactJS application, add your API keys or other settings to a .env file in the root directory of your application. Make sure to add this file to your .gitignore file to avoid committing sensitive information to your repository.

Add your environment variables to the .env file in the following format: **REACT_APP_VARIABLE_NAME=value**
 For example:

                 ```javascript 
                 REACT_APP_API_KEY=1234567890
                 ```

In your ReactJS application, access the environment variables using the process.env object. For example:

                ``` javascript
                const apiKey = process.env.REACT_APP_API_KEY;
                ```

## Application Usage

Open the application in your web browser by navigating to the URL where it is hosted.
as a user you can sign-up and login to your account and view a list of all public reports.
To post a report, click on the **"Report Now"** button on the **Homepage** or the **Add Report** button on the **"Navigation bar"**. This will bring up a form where you can enter the details of your report, including the type of report (red flag or intervention), the location, and a description of the issue. Once you have filled out the form, click the **"Submit"** button to post the report.

***Report to hold individuals accountable, prevent harm, protect communities, and create a fair society.***

As an admin, you can update the status of a report by following these steps:

Log in to the application with your admin credentials.
Navigate to the homepage or dashboard where you can see a list of all the reports.
Click on the report you want to update. This will take you to the report details page.
On the report details page, locate the report status field. It may be labeled as "Current Status" or something similar.
Select the new status for the report from the dropdown menu. The available options may include "Under Investigation," "Rejected," or "Resolved". 

