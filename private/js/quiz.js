
function displayUsers() {
    $.ajax({
      url: "/quiz",
      dataType: "json",
      type: "GET",
      data: QuestionSchemas,
      success: function (data) {
        console.log("SUCCESS JSON:", data);
        $("#ucontainer").empty();
        for (let i = 0; i < data.rows.length; i++) {
     
          $("#container").append($(str));
        }
  
      },
      error: function (jqXHR, textStatus, errorThrown) {
        displayError(textStatus);
      }
  
    });
}