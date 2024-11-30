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
        url: 'http://localhost:5000', // Update this to your deployed Vercel URL in production
        description: 'Local server',
      },
      {
        url: 'https://simarket-api.vercel.app', // Replace with your actual Vercel URL
        description: 'Production server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
      customSiteTitle: 'Simarket API Docs',
      customfavIcon: '/swagger-logo.png',
    }));
  };
  

module.exports = setupSwagger;
