const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    description: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
})



const QuestionSchemas = mongoose.model('Question', QuestionSchema)

// const question1 = [
//     {
//       "description": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",  
//       "alternatives": [
//           { "text": "Apple-core"
//         },
//         {
//             "text": "Milk carton",
//             "isCorrect": true
//         },
//         {
//             "text": " pizza deliverybox"
//         },
//         {
//             "text": "paper napkins"
//         }

//       ]
      
//     }
// ]

// QuestionSchemas.collection.insert(question1,function(err,docs){
//     if (err)
//     {
//         return console.error(err);
//     }
//     else { console.log("inserted to collection")
//     }
// }) 

module.exports = QuestionSchemas
