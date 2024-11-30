const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
  // Serve Swagger JSON at /api-docs/swagger.json
  app.get('/api-docs/swagger.json', (req, res) => {
    res.json(swaggerDocs);
  });

  // Serve Swagger UI
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
