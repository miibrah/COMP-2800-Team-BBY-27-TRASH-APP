
// $(document).ready(function() {
    
//     $(".hover_recycle").onClick(function(e) {

//         e.preventDefault();
//         $.ajax({
//             url: "/ajax-get",
//             dataType: "",
//             type: "GET",
//             success: function(data) {
//                 console.log("ajax-get successful", data);
//             },
//             error: function(jqXHR, textStatus, errorThrown) {
//                 console.log("ERROR:", jqXHR, textStatus, errorThrown);
//             },
//             statusCode: {
//                 404: function() {
//                     console.log("page does not exist.");
//                 }
//             }

//         });

//     });

   

//     document.getElementById("sessionTest").addEventListener("click", sessionTester);

//     function sessionTester() {
//         console.log(req.session.email);
//         console.log("hello sessio tester");
//     }

// });

// document.getElementById("sessionTest").addEventListener("click", sessionTester);

//     function sessionTester() {
//         // console.log(session.email);
//         console.log("hello sessio tester");
//     }

$(document).ready(function() {
    var username = "anonymous";
    $("#test").click(function(e) {
        e.preventDefault();
        $.ajax({
            //            url: "/getJSONThing",
                        url: "/testme",
                        dataType: "json",
                        type: "GET",
                        success: function(data) {
                            // $("#p1").text(data['msg']);
                            //$("#p1").text(data['firstName']);
                            //eval(data['greeting']);
                            console.log("SUCCESS:", data);
                            username = data['msg'];
                            console.log(username);
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            // $("#p1").text(jqXHR.statusText);
                            console.log("ERROR:", jqXHR, textStatus, errorThrown);
                        }
            
                });
        }
    );
});

/**
 * 
 * 

    function functABC() {
  
        return new Promise(function(resolve, reject) {
          $.ajax({
            url: '/testme',
            dataType: "json",
            type: "GET",
            success: function(data) {
              resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
              reject(err) // Reject the promise and go to catch()
            }
          });
        });
      }
      
      functABC().then(function(data) {
        // Run this when your request was successful
        console.log(data)
      }).catch(function(err) {
        // Run this when promise was rejected via reject()
        console.log(err)
      })
 */