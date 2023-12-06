const swaggerAutoGen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes.js']

swaggerAutoGen(outputFile, endpointsFiles)
