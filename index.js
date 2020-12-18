"use strict";
const express = require('express');
const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const options = {
    swaggerDefinition: {
        info: {
            title: '6177 Final',
            version: '1.0.0',
            description: 'Final project using Text Analytics from Azure'
        },
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['./index.js'],
};

const specs = swaggerJsdoc(options);

const {TextAnalyticsClient, AzureKeyCredential} = require("@azure/ai-text-analytics");
const { json } = require('body-parser');

const key = '91389e5199a54d019efc3888c8391b79';
const endpoint = 'https://6177-final-project.cognitiveservices.azure.com/';

const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(key));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors());
app.use(bodyParser.json({type: 'application/json'}));


/**
 * @swagger
 * /sentiment:
 *   post:
 *     tags:
 *       - Sentiment Analysis
 *     description: Calls the Sentiment Analysis API from Azure Text Analytics
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: document
 *         description: Input to send to Sentiment API in Azure.
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully retrieved response
 */
app.post('/sentiment', async (req, res) => {
    console.log(req.body);

    var strInput = JSON.stringify(req.body);
    console.log(strInput);

    const sentimentInput = [
        strInput
    ];
    
    try {
        const sentimentResult = await textAnalyticsClient.analyzeSentiment(sentimentInput);
        console.log(sentimentResult);

        res.setHeader('Content-Type', 'application/json');
        res.json(sentimentResult);
    } catch(err) {
        throw err;
    }    
});

/**
 * @swagger
 * /language:
 *   post:
 *     tags:
 *       - Language Detection
 *     description: Calls the Language Detection API from Azure Text Analytics
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: document
 *         description: Input to send to Sentiment API in Azure.
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully retrieved response
 */
app.post('/language', async (req, res) => {
    console.log(req.body);

    var strInput = JSON.stringify(req.body);
    console.log(strInput);

    const languageInput = [
        strInput
    ];
    
    try {
        const languageResult = await textAnalyticsClient.detectLanguage(languageInput);
        console.log(languageResult);

        res.setHeader('Content-Type', 'application/json');
        res.json(languageResult);
    } catch(err) {
        throw err;
    }    
});

/**
 * @swagger
 * /ner:
 *   post:
 *     tags:
 *       - Named Entity Recognition
 *     description: Calls the Named Entitiy Recognition (NER) API from Azure Text Analytics
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: document
 *         description: Input to send to NER API in Azure.
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully retrieved response
 */
app.post('/ner', async (req, res) => {
    console.log(req.body);

    var strInput = JSON.stringify(req.body);
    console.log(strInput);

    const nerInput = [
        strInput
    ];
    
    try {
        const nerResult = await textAnalyticsClient.recognizeEntities(nerInput);
        console.log(nerResult);

        res.setHeader('Content-Type', 'application/json');
        res.json(nerResult);
    } catch(err) {
        throw err;
    }    
});

/**
 * @swagger
 * /entityLinking:
 *   post:
 *     tags:
 *       - Named Entity Recognition
 *     description: Calls the Named Entitiy Recognition (NER) Entity Linking API from Azure Text Analytics
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: document
 *         description: Input to send to NER Entity Linking API in Azure.
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully retrieved response
 */
app.post('/entityLinking', async (req, res) => {
    console.log(req.body);

    var strInput = JSON.stringify(req.body);
    console.log(strInput);

    const nerInput = [
        strInput
    ];
    
    try {
        const nerResult = await textAnalyticsClient.recognizeLinkedEntities(nerInput);
        console.log(nerResult);

        res.setHeader('Content-Type', 'application/json');
        res.json(nerResult);
    } catch(err) {
        throw err;
    }    
});

/**
 * @swagger
 * /pii:
 *   post:
 *     tags:
 *       - Named Entity Recognition
 *     description: Calls the Named Entitiy Recognition (NER) Personally Identifying Information (PII) API from Azure Text Analytics
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: document
 *         description: Input to send to NER PII API in Azure.
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully retrieved response
 */
app.post('/pii', async (req, res) => {
    console.log(req.body);

    var strInput = JSON.stringify(req.body);
    console.log(strInput);

    const nerInput = [
        strInput
    ];
    
    try {
        const nerResult = await textAnalyticsClient.recognizePiiEntities(nerInput);
        console.log(nerResult);

        res.setHeader('Content-Type', 'application/json');
        res.json(nerResult);
    } catch(err) {
        throw err;
    }    
});

/**
 * @swagger
 * /key:
 *   post:
 *     tags:
 *       - Key Phrase Extraction
 *     description: Calls the Key Phrase Extraction API from Azure Text Analytics
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: document
 *         description: Input to send to Key Phrase Extraction API in Azure.
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully retrieved response
 */
app.post('/key', async (req, res) => {
    console.log(req.body);

    var strInput = JSON.stringify(req.body);
    console.log(strInput);

    const keyInput = [
        strInput
    ];
    
    try {
        const keyResult = await textAnalyticsClient.extractKeyPhrases(keyInput);
        console.log(keyResult);

        res.setHeader('Content-Type', 'application/json');
        res.json(keyResult);
    } catch(err) {
        throw err;
    }    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});