const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simarket API",
      version: "1.0.0",
      description: "API documentation for Simarket application",
      contact: {
        name: "Ikram",
      },
    },
    servers: [
      {
        url: "https://simarket-api.vercel.app",
        description: "Production server",
      },
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your route files
};

// Generate the Swagger documentation
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Function to set up Swagger UI
const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
    customSiteTitle: 'Simarket API Docs',
    customfavIcon: '/swagger-logo.png', // Ensure the logo is in the correct static file directory
  }));
};

module.exports = setupSwagger;
