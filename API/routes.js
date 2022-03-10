const express = require('express')
const router = express.Router()
const Question = require('../DB/Question')

// server.js ==> /quizes is on port8000
// this one is port 3000 // this is wrong. 

// get all quiz questions
router.get('/quiz', function (req, res) {
    console.log("Running on client side express.Router()")
    res.setHeader('content-type', 'application/json');
    pullMyDataOkay()
    async function pullMyDataOkay() {
        try {
            let questions = await Question.find();
            // return res.status(200).json(questions)
            console.log(questions);
            
            res.json(questions);
        } catch (error) {
            // return res.status(500).json({"error":error})
            console.error(error);
        }
    }

})

// get one quiz question
router.get('/questions/:id', async (req, res) => {
    try {
        const _id = req.params.id 

        const question = await Question.findOne({_id})        
        if(!question){
            return res.status(404).json({})
        }else{
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})


// create one quiz question
router.post('/questions', async (req, res) => {
    try {
        const { description } = req.body
        const { text } = req.body

        const question = await Question.create({
            description,
            text
        })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

module.exports = router