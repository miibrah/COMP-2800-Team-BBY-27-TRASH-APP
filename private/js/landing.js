
$(document).ready(function() {
    
    $(".hover_recycle").onClick(function(e) {

        e.preventDefault();
        $.ajax({
            url: "/ajax-get",
            dataType: "",
            type: "GET",
            success: function(data) {
                console.log("ajax-get successful", data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            },
            statusCode: {
                404: function() {
                    console.log("page does not exist.");
                }
            }

        });

    });

});