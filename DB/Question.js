const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    category: String,
    correct: String,
    questionss: String,
    difficulty: String,
    incorrect_answer: [
        {
          text:{
              type:String
          }
        },
        {
            text:{
                type:String
            }
          },
          {
            text:{
                type:String
            }
          }
        
    ]
})




const QuestionSchemas = mongoose.model('Question', QuestionSchema)

 const question1 = [
    {
        "category": "Trash",
        "correct": "Milk carton",
        "questionss": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",
        "difficulty" : "easy",    
      "incorrect_answer": [
          { "text": "Apple-core"
        },

        {
            "text": " pizza deliverybox"
        },
        {
            "text": "paper napkins"
        }

      ]

      
    },
    {
      "category": "Trash",
      "correct": "Milk carton",
      "questionss": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",
      "difficulty" : "easy",    
    "incorrect_answer": [
        { "text": "Apple-core"
      },

      {
          "text": " pizza deliverybox"
      },
      {
          "text": "paper napkins"
      }

    ]

    
  },
  {
    "category": "Trash",
    "correct": "Milk carton",
    "questionss": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",
    "difficulty" : "easy",    
  "incorrect_answer": [
      { "text": "Apple-core"
    },

    {
        "text": " pizza deliverybox"
    },
    {
        "text": "paper napkins"
    }

  ]

  
},
{
  "category": "Trash",
  "correct": "Milk carton",
  "questionss": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Apple-core"
  },

  {
      "text": " pizza deliverybox"
  },
  {
      "text": "paper napkins"
  }

]


},
{
  "category": "Trash",
  "correct": "Milk carton",
  "questionss": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Apple-core"
  },

  {
      "text": " pizza deliverybox"
  },
  {
      "text": "paper napkins"
  }

]


},
{
  "category": "Trash",
  "correct": "Milk carton",
  "questionss": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Apple-core"
  },

  {
      "text": " pizza deliverybox"
  },
  {
      "text": "paper napkins"
  }

]


},
{
  "category": "Trash",
  "correct": "Milk carton",
  "questionss": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Apple-core"
  },

  {
      "text": " pizza deliverybox"
  },
  {
      "text": "paper napkins"
  }

]


},
{
  "category": "Trash",
  "correct": "Milk carton",
  "questionss": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Apple-core"
  },

  {
      "text": " pizza deliverybox"
  },
  {
      "text": "paper napkins"
  }

]


},
{
  "category": "Trash",
  "correct": "Milk carton",
  "questionss": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Apple-core"
  },

  {
      "text": " pizza deliverybox"
  },
  {
      "text": "paper napkins"
  }

]


},
    {
        "category": "Trash",
        "correct": "Milk carton",
        "questionss": "Which of the following can NOT be placed in a school composting container or in your yard waste cart at home?",
        "difficulty" : "easy",    
      "incorrect_answer": [
          { "text": "Apple-core"
        },

        {
            "text": " pizza deliverybox"
        },
        {
            "text": "paper napkins"
        }

      ]

      
    }
 ]

// QuestionSchemas.collection.insert(question1,function(err,docs){
//     if (err)
//     {
//         return console.error(err);
//     }
//     else { console.log("inserted to collection")
//     }
// }) 

module.exports =  QuestionSchemas
