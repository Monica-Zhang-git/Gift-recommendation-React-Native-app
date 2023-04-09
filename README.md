# Gift recommendation - React Native app

This mobile app generates gift recommendations using [React Native](https://reactnative.dev/) and [Expo](https://docs.expo.dev/tutorial/introduction/). The backend is built using the [Next.js](https://nextjs.org/) framework and utilizes the [OpenAI API](https://platform.openai.com/docs/quickstart) for generating gift ideas.

Users can input the characteristics of the person they want to send a gift to and click the 'Generate Gift Ideas' button. The app then fetches data from an AWS link where a generate.js file is stored that fetches data from the OpenAI API.

Using AWS to fetch data provides an added layer of security for the OpenAI API Key and makes it more convenient for users to get gift recommendations.

## How to Install and Run the App

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this [repository](https://github.com/Monica-Zhang-git/Gift-React_Native-App.git)

3. Install the requirements

   ```bash
   $ npm install
   ```

4. Run the app

   ```bash
   $ npm start
   ```

You should now be able to access the app through a Expo Go App.

1. Download a [Expo GO App](https://apps.apple.com/app/apple-store/id982107779).

2. Choose a device in the terminal according your needs.

   ```bash
   › Press a │ open Android
   › Press i │ open iOS simulator
   › Press w │ open web
   ```

3. You could Scan the QR code that showed in the terminal with the Camera app(ios) or Expo Go (Android).

## How to Use the App

<img src="https://github.com/Monica-Zhang-git/Img/blob/main/main.png" height="60" width="60" >
<img src="https://github.com/Monica-Zhang-git/Img/blob/main/loading.png" height="60" width="60" >
<img src="https://github.com/Monica-Zhang-git/Img/blob/main/results.png" height="60" width="60" >
<!-- ![Main Page](https://github.com/Monica-Zhang-git/Img/blob/main/main.png)
![Loading Page](https://github.com/Monica-Zhang-git/Img/blob/main/loading.png)
![Results Page](https://github.com/Monica-Zhang-git/Img/blob/main/results.png) -->
