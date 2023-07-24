# Spotify API Test

This is a simple web application that interacts with the Spotify API to manage and control your Spotify playback experience. The application allows you to control playback, manage your playlists, and view your currently playing track, among other features.

## Features

- Authorize your Spotify account
- Control Spotify playback
- View and manage your playlists
- View your currently playing track

## Setup

1. **Clone the Repository**

   Start by cloning the repository to your local machine.

2. **Setup Spotify Application**

   Navigate to the Spotify Developer Dashboard and create a new application. You will receive a Client ID and Client Secret for your new app.

3. **Update Application Settings**

   In the settings of your Spotify application, add `http://127.0.0.1:5500/public/index.html` to the Redirect URIs section and save the changes.

4. **Enter your Spotify Application Credentials**

   Open the web app in your browser and enter the Client ID and Client Secret that you received when you created your Spotify application.

## Usage

1. **Authorize the Application**

   Click the "Request Authorization" button and you will be redirected to Spotify's authorization screen. 

   Login with your Spotify account and authorize the application to access your account.

2. **Use the Application**

   Once you have authorized the application, you can use the features provided. 

   You can control playback, manage your playlists, view your currently playing track, and many more.

## Important Note

The current implementation stores the Client Secret in your browser's local storage. This is not secure and is only done for simplicity in this example application. In a real-world application, you should not expose your Client Secret to the user. It should be kept secure on a server.

## Limitations

As of now, the app needs to be reauthorized every time the access token expires because it doesn't handle token refreshes. In a production app, you would want to implement a way to refresh the access token when it expires without user intervention.
