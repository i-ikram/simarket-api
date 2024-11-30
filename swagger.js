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
  app.get('/api-docs', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Simarket API Docs</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.14.3/swagger-ui.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.14.3/swagger-ui-bundle.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.14.3/swagger-ui-standalone-preset.js"></script>
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script>
          window.onload = function() {
            try {
              const ui = SwaggerUIBundle({
                url: '/api-docs/swagger.json',
                dom_id: '#swagger-ui',
                presets: [
                  SwaggerUIBundle.presets.apis,
                  SwaggerUIStandalonePreset
                ],
                layout: "StandaloneLayout"
              });
            } catch (error) {
              console.error('Error initializing Swagger UI:', error);
            }
          };
        </script>
      </body>
      </html>
    `);
  });
  
};

module.exports = setupSwagger;
