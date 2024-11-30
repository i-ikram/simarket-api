const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    "openapi": "3.0.0",
    "info": {
      "title": "Simarket API",
      "version": "1.0.0",
      "description": "API documentation for Simarket application",
      "contact": {
        "name": "Ikram"
      }
    },
    "servers": [
      {
        "url": "https://simarket-api.vercel.app",
        "description": "Production server"
      },
      {
        "url": "http://localhost:5000",
        "description": "Local server"
      }
    ],
    "paths": {
      "/users": {
        "get": {
          "summary": "Retrieve a list of users",
          "description": "Fetches all users from the database.",
          "responses": {
            "200": {
              "description": "A list of users.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 1
                        },
                        "name": {
                          "type": "string",
                          "example": "John Doe"
                        },
                        "email": {
                          "type": "string",
                          "example": "john@example.com"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "summary": "Add a new user",
          "description": "Adds a new user to the database.",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string",
                      "example": "John Doe"
                    },
                    "email": {
                      "type": "string",
                      "example": "john@example.com"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "User successfully created."
            }
          }
        }
      }
    }
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
