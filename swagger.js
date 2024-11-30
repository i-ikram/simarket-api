const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simarket API',
      version: '1.0.0',
      description: 'API documentation for Simarket application',
      contact: {
        name: 'Ikram',
      },
    },
    servers: [
      {
        url: 'https://simarket-api.vercel.app', // Correct production URL
        description: 'Production server',
      },
      {
        url: 'http://localhost:5000', // Local server for development
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Ensure path is correct
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
      customSiteTitle: 'Simarket API Docs',
      customfavIcon: '/swagger-logo.png',
    }));
  };
  

module.exports = setupSwagger;
