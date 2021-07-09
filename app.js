const express = require('express');

const cors = require('cors');
const path = require('path')
const app = express();

const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const options = {
  definition : {
      openapi:"3.0.0",
      info:{
          title:"Library Api",
          version:"1.0.0",
          description:"A simple proj"
      },
      servers: [
          {
              url:"http://localhost:8000"
          }
      ],
      
  },
  apis:["./app.js"]
}
const specs = swaggerJsDoc(options)

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

app.use(express.json());
app.use(cors());

var db;

MongoClient.connect('mongodb+srv://m001-student:anasanas@cluster0.zciek.mongodb.net/machine-test?retryWrites=true&w=majority',{useUnifiedTopology:true}, function (err, data) {

  if (err) {
    console.log(err)}
  
  db = data.db('machine-test')
})

app.use(express.static(path.join(__dirname, '/client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client','build','index.html'))
})

app.post('api/v1/fan/submit-fan', (req, res) => {
  console.log(req.body)
 
  db.collection('fan').insertOne(req.body).then(() => {
    res.status(200).json({message:"Success"})
  })
})

app.post('api/v1/talent/submit-talent', (req, res) => {
  console.log(req.body)
  db.collection('talent').insertOne(req.body).then(() => {
    res.status(200).json({message:"Success"})
  })
})
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});



/**
 * @swagger
 * components: 
 *   schemas:
 *     fan:
 *       type: object
 *       required:
 *          - firstname
 *          - lastname 
 *          - username
 *          - email
 *          - timezone
 *          - password
 *       properties:
 *         firstname: 
 *           type: string
 *           description: firstname of the user
 *         lastname:
 *            type: string
 *            description: lastname of the user
 *         username:
 *            type: string
 *            description: the username of user
 *         email:
 *            type: email
 *            description: The email
 *     
 *       example:
 *           firstname: Keraladf
 *           lastname: fdj
 *           username: djfj
 *           email: anasmdjango@gmail.com
 *           timezone: Keral
 *           password: 12345
 *     talent:
 *       type: object
 *       required:
 *          - firstname
 *          - lastname 
 *          - username
 *          - email
 *          - timezone
 *          - password
 *       properties:
 *         firstname: 
 *           type: string
 *           description: firstname of the user
 *         lastname:
 *            type: string
 *            description: lastname of the user
 *         username:
 *            type: string
 *            description: the username of user
 *         email:
 *            type: email
 *            description: The email
 *     
 *       example:
 *           firstname: Keraladf
 *           lastname: fdj
 *           username: djfj
 *           email: anasmdjango@gmail.com
 *           timezone: Keral
 *           password: 12345
 *           
 

 */
/**
 * @swagger
 * tags:
 *   name: fan
 *   description: logging of fan
 *   
 * 
 * 
 */
/**
 * @swagger
 * /api/v1/fan/submit-fan:
 *   post:
 *     summary: login of fan account
 *     tags: [fan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/fan'
 *     responses:
 *       200:
 *         description: login is successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/fan'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * tags:
 *   name: talent
 *   description: logging of talents
 *   
 * 
 * 
 */
/**
 * @swagger
 * /api/v1/talent/submit-talent:
 *   post:
 *     summary: login of talent account
 *     tags: [talent]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/talent'
 *     responses:
 *       200:
 *         description: login is successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/talent'
 * 
 *       500:
 *         description: Some server error
 */