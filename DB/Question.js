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
            "text": " Pizza deliverybox"
        },
        {
            "text": "Paper napkins"
        }

      ]

      
    },
    {
      "category": "Trash",
      "correct": "Trash Cart",
      "questionss": "Strofoam goes in which cart?",
      "difficulty" : "easy",    
    "incorrect_answer": [
        { "text": "Recycling cart"
      },

      {
          "text": "Shopping cart"
      },
      {
          "text": "In your car"
      }

    ]

    
  },
  {
    "category": "Trash",
    "correct": "Trash Cart",
    "questionss": "Plastic hangers go in which cart?",
    "difficulty" : "easy",    
  "incorrect_answer": [
      { "text": "Recycling cart"
    },

    {
        "text": " Shopping cart"
    },
    {
        "text": "In your car"
    }

  ]

  
},
{
  "category": "Trash",
  "correct": "Trash Cart",
  "questionss": "Shampoo and lotion bottles go in which cart?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Recycling cart"
  },

  {
      "text": " Shopping cart"
  },
  {
      "text": "In your car"
  }

]


},
{
  "category": "Trash",
  "correct": "Trash",
  "questionss": "Where would you place  coffee cup?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Recycle"
  },

  {
      "text": " Compost"
  },
  {
      "text": "Fridge"
  }

]


},
{
  "category": "Trash",
  "correct": "Trash",
  "questionss": "Where would you place  plastic straw?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Recycle"
  },

  {
      "text": " Compost"
  },
  {
      "text": "Back of your car"
  }

]


},
{
  "category": "Recyle",
  "correct": "Recyle",
  "questionss": "Where would you place  yogurt container?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Compost"
  },

  {
      "text": " Trash"
  },
  {
      "text": "In your room"
  }

]


},
{
  "category": "Recycle",
  "correct": "True",
  "questionss": "Plastic bags are not accepted in the recycling bin",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "False"
  },

  {
      "text": "Maybe"
  },
  {
      "text": "None of above"
  }

]


},
{
  "category": "Recycling",
  "correct": "Recycling Cart",
  "questionss": "Cartons go in which cart?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Trash cart"
  },

  {
      "text": "Shopping cart"
  },
  {
      "text": "Your room cart"
  }

]


},
{
  "category": "Trash",
  "correct": "Trash Cart",
  "questionss": "Plastic buckets go in which cart?",
  "difficulty" : "easy",    
"incorrect_answer": [
    { "text": "Recycling cart"
  },

  {
      "text": " Shopping cart"
  },
  {
      "text": "In your car"
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
