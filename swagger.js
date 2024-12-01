const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration
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
  apis: ['./routes/*.js'], // Adjust the path to your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
  // Serve the Swagger UI
  app.get('/api-docs', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Simarket API Docs</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.14.3/swagger-ui.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.14.3/swagger-ui-bundle.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.14.3/swagger-ui-standalone-preset.js"></script>
        <link rel="icon" href="/swagger-logo.png" type="image/png" />
        <style>
          .topbar { display: none; } /* Hides the Explore bar */
        </style>
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script>
          window.onload = function() {
            SwaggerUIBundle({
              url: '/api-docs/swagger.json', // Points to your Swagger JSON
              dom_id: '#swagger-ui',
              presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
              ],
              layout: "BaseLayout", // Removes the Explore bar
            });
          };
        </script>
      </body>
      </html>
    `);
  });

  // Serve the Swagger JSON
  app.get('/api-docs/swagger.json', (req, res) => {
    res.json(swaggerDocs);
  });
};

module.exports = setupSwagger;
