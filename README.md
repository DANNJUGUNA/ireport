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
Click the "Update" or "Save" button to save the changes and update the report status.

## Technologies Used

1. Programming Languages: JavaScript, Ruby

2. Frontend Frameworks/Libraries: React

3. Backend Frameworks/Libraries: Ruby on Rails

4. Database Management Systems: PostgreSQL, MySQL

5. Version Control: Git, GitHub, Bitbucket

6. Other Libraries and Tools: Redux, Bootstrap, TailwindCSS, Node.js

## Backend API Documentation

The backend of the Ireporter application is built with Ruby on Rails and provides several API endpoints for managing reports. Below is the documentation for each endpoint, including details on the request and response formats.

### GET /reports

Description

Retrieves a list of all reports.

_Request_

HTTP Method: GET
Endpoint: /reports
Response Body: List of reports in JSON format


_Response_

Status: 200 OK
Body: JSON formatted list of all reports


### GET /reports/:id

Description
Retrieves a specific report by its ID.

_Request_

HTTP Method: GET
Endpoint: /reports/:id
Response Body: The specified report in JSON format

_Response_

Status: 200 OK
Body: JSON formatted report

### POST /reports

Description
Creates a new report with the provided parameters.

_Request_

HTTP Method: POST
Endpoint: /reports
Request Body: JSON formatted report parameters



| Field              | Type    | Description                                       |
| :-----------------| :------| :-------------------------------------------------|
| description        | string  | Description of the report                         |
| image              | string  | URL of the image attached to the report           |
| video              | string  | URL of the video attached to the report           |
| gps_coordinates    | string  | GPS coordinates of the report                     |
| user_id            | integer | ID of the user who created the report             |
| report_type_id     | integer | ID of the report type                             |
| report_status_id   | integer | ID of the report status                           |
| title              | string  | Title of the report                                |
| location_name      | string  | Name of the location associated with the report   |


_Response_

Status: 201 Created
Body: JSON formatted report

### PATCH/PUT /reports/:id
Description
Updates an existing report with the provided parameters.

Request
HTTP Method: PATCH/PUT
Endpoint: /reports/:id
Request Body: JSON formatted report parameters

| Field            | Type    | Description                                          |
| :-----------------|:---------|:------------------------------------------------------|
| description     | string  | Description of the report                            |
| image           | string  | URL of the image attached to the report              |
| video           | string  | URL of the video attached to the report              |
| gps_coordinates | string  | GPS coordinates of the report                        |
| user_id         | integer | ID of the user who created the report                |
| report_type_id  | integer | ID of the report type                                 |
| report_status_id| integer | ID of the report status                               |
| title           | string  | Title of the report                                   |
| location_name   | string  | Name of the location associated with the report       |


_Response_

Status: 202 Accepted
Body: JSON formatted report


### DELETE /reports/:id
Description
Deletes the specified report.

_Request_

HTTP Method: DELETE
Endpoint: /reports/:id


_Response_

Status: 202 No Content

### GET /users/:user_id/reports

Description
Retrieves a list of reports belonging to a specific user.

_Request_

HTTP Method: GET
Endpoint: /users/:user_id/reports
Response Body: List of reports belonging to the specified user in JSON format

_Response_

Status: 200 OK
Body: JSON formatted list of user-specific reports

   ### Request Body Parameters

   | Field           | Type    | Description                                        |
| :------------- | :----- | :------------------------------------------------- |
| description    | string  | Description of the report                          |
| image          | string  | URL of the image attached to the report            |
| video          | string  | URL of the video attached to the report            |
| gps_coordinates| string  | GPS coordinates of the report                      |

## Front-End Documentation

The front-end of the application was built using HTML, CSS, and JavaScript, along with the following external libraries and frameworks:

1. React.js v17.0.2
2. Bootstrap v5.0.1
3. Axios v0.21.1
4. Tailwind CSS

### Folder structure

**/src:** This folder contains all the source code files for the front-end of the application. This includes all the JavaScript, HTML, CSS, and other files necessary to render the user interface and enable user interactions. This is where the majority of the coding work for the front-end will take place.

**/public:** This folder contains the index.html file and other public assets that need to be served to the client side. These files are typically static files such as images, fonts, and CSS files. The index.html file is the entry point of the application and is responsible for loading the JavaScript code and other necessary assets.

**/node_modules:** This folder contains all the dependencies installed by npm. When you run npm install in your project, npm downloads and installs the required packages and their dependencies into this folder. You should not modify the contents of this folder directly.

**.gitignore:**This file specifies files and directories that should be ignored by Git when committing changes. This is useful for excluding files such as compiled assets, build artifacts, and other files that do not belong in version control.

**tailwind.config.js:** This file contains the configuration options for the Tailwind CSS framework. This file can be used to customize the default styles and settings provided by Tailwind.

**package.json:** This file contains metadata about the project and a list of dependencies required by the project. It also includes scripts that can be run using npm, such as npm start to start the development server or npm run build to build the production-ready assets.

**package-lock.json:** This file is automatically generated by npm and contains a detailed description of the installed packages and their dependencies. It is used to ensure that all developers working on the project are using the same package versions and dependencies.

### Running the Application Locally

To run the front-end of the application locally, follow these steps:

Clone the repository to your local machine
Navigate to the frontend directory
Install the dependencies using npm install
Start the application using npm start
The application should now be running on http://localhost:3000/

## Conclusion

In conclusion, the Ireporter application provides a platform for users to report incidents anonymously or with their identities while allowing them to attach relevant media files and location data. The application's functionality includes creating, reading, updating, and deleting reports. With the front-end code stored in the /src folder and the index.html file stored in the /public folder, the application is easily accessible through a web browser. The back-end code handles the logic for the report controllers and can store and retrieve data from a database. Overall, the Ireporter application is a simple and effective solution for users to report incidents in a streamlined and efficient way.
