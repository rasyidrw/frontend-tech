# Stock Exchange App
Stock Exchange App is a single page application for viewing the latest stock within OHLC chart.

### Tech

Dillinger uses a number of open source projects to work properly:

* [ReactJS]
* [React.emotion]
* [Webpack 4]
* [Babel]

### Installation

Clone git repository 
```sh
git clone https://github.com/rasyidrw/frontend-tech.git
```
or if you using SSH
```sh
git clone git@github.com:rasyidrw/frontend-tech.git
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd frontend-tech
$ npm install
```
In Order to access the API, you have to claim your API KEY in [https://www.alphavantage.co/](https://www.alphavantage.co/).
Then in the root directory (where di package.json exist) make a new file called `.env`.
Insert your API KEY into `API_KEY` variable. For example if your API KEY is 5S3VM41306B8P2CY, so it will be:

```
API_KEY=5S3VM41306B8P2CY
```

For production environments...

```sh
$ npm run build
```

To launch the app into browser
```sh
$ npm start
```

Then the App will be launched in http://localhost:8080/

#NOTE#

If the chart doesn't appear and message showing ("Sory, maximum loading data reached. You have to wait one minute to reload data again."),you can try with reloading the page. If the chart is still not appear, try again until it showing.

   [ReactJS]: <https://reactjs.org/>
   [React.emotion]: <https://emotion.sh/>
   [Webpack 4]: <https://webpack.js.org/>
   [babel]: <https://babeljs.io/>