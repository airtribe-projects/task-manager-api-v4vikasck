# News Aggregator API

## Overview
The News Aggregator API is a Node.js application that allows users to register, login, manage their news preferences, and fetch news articles based on their preferences. Users can also mark articles as read or favorite and search for news articles.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/airtribe-projects/task-manager-api-v4vikasck.git
    ```
2. Navigate to the project directory:
    ```sh
    cd News_Aggregator_API
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### User Endpoints
- **Register**
    - URL: `/api/register`
    - Method: `POST`
    - Body:
        ```json
        {
            "username": "testuser",
            "password": "testpassword"
        }
        ```
    - Description: Registers a new user.

- **Login**
    - URL: `/api/login`
    - Method: `POST`
    - Body:
        ```json
        {
            "username": "testuser",
            "password": "testpassword"
        }
        ```
    - Description: Logs in a user and returns a JWT token.

### Preferences Endpoints
- **Get Preferences**
    - URL: `/api/preferences`
    - Method: `GET`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <your_jwt_token>"
        }
        ```
    - Description: Retrieves the user's news preferences.

- **Update Preferences**
    - URL: `/api/preferences`
    - Method: `PUT`
    - Headers:
        ```json
        {
            "Content-Type": "application/json",
            "Authorization": "Bearer <your_jwt_token>"
        }
        ```
    - Body:
        ```json
        {
            "categories": ["technology", "sports"],
            "languages": ["en", "es"]
        }
        ```
    - Description: Updates the user's news preferences.

### News Endpoints
- **Get News**
    - URL: `/api/news`
    - Method: `GET`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <your_jwt_token>"
        }
        ```
    - Description: Fetches news articles based on the user's preferences.

- **Mark Article as Read**
    - URL: `/api/news/:id/read`
    - Method: `POST`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <your_jwt_token>"
        }
        ```
    - Description: Marks a news article as read.

- **Mark Article as Favorite**
    - URL: `/api/news/:id/favorite`
    - Method: `POST`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <your_jwt_token>"
        }
        ```
    - Description: Marks a news article as favorite.

- **Get Read Articles**
    - URL: `/api/news/read`
    - Method: `GET`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <your_jwt_token>"
        }
        ```
    - Description: Retrieves the list of read articles.

- **Get Favorite Articles**
    - URL: `/api/news/favorites`
    - Method: `GET`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <your_jwt_token>"
        }
        ```
    - Description: Retrieves the list of favorite articles.

- **Search News**
    - URL: `/api/news/search/:keyword`
    - Method: `GET`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <your_jwt_token>"
        }
        ```
    - Description: Searches for news articles based on a keyword.
