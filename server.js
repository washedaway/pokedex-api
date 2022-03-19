// import app from './src/app'
require('@babel/register')

const app = require('./src/app').default

app.listen(
    3000, () => console.log("App listening on port 3000, development environment")
)