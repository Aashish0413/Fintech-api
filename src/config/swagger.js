import swaggerJsdoc from "swagger-jsdoc";



const options = {

  definition: {

    openapi: "3.0.0",

    info: {

      title: "Fintech API",

      version: "1.0.0",

      description: "REST API documentation for Fintech App",

    },

    servers: [

      {

        url: "http://localhost:8080",

      },

    ],

  },



  apis: ["./src/routes/*.js"],

};



const swaggerSpec = swaggerJsdoc(options);



export default swaggerSpec;