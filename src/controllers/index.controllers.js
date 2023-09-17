const { Configuration, OpenAIApi } = require("openai");
const Plants = require('../models/Plants')

const configuration = new Configuration({
    
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const indexCtrl = {};

indexCtrl.renderIndex =  async (req, res) => {
    const plants = await Plants.find()
    res.render('home/home', { plants })
}

indexCtrl.renderApp = (req, res) => {
    res.render('app')
}

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
}

indexCtrl.sendMessage = async (req, res) => {
    const completion = await openai.createChatCompletion({
        model:"gpt-3.5-turbo",
        messages:[
            { "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": "Who won the world series in 2020?" },
            { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
            { "role": "user", "content": "Where was it played?" }
        ]
    });
    console.log(`${completion.data.choices[0].message}`.blue);
}

module.exports = indexCtrl