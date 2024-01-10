# Jokes App

This is a simple React application that fetches jokes from the [JokeAPI](https://v2.jokeapi.dev/) and displays them on the screen. The jokes can be of type "single" or "two-part". For "two-part" jokes, the setup is shown first and the delivery (or punchline) is hidden until the user clicks a button.

## Features

- Fetches jokes from the JokeAPI
- Displays the setup and delivery of "two-part" jokes separately
- Allows the user to reveal the delivery of a joke by clicking a button
- Displays a loading message while the jokes are being fetched
- Displays an error message if there was a problem fetching the jokes

## How to Run

1. Clone this repository
2. Install the dependencies with `npm install`
3. Start the application with `npm start`

## Future Improvements

- Add the ability to fetch more jokes
- Improve the styling of the jokes and buttons
- Add the ability to like or dislike jokes