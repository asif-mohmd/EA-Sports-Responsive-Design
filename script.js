
// section 2 tabs JS starts
$(document).ready(function () {
    $("ul#tabs li").click(function (e) {
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum + 1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child(" + nthChild + ")").addClass("active");
        }
    });
});

// section 2 tabs JS ends

function showAlert() {
    
    var overlay = document.createElement("div");
    overlay.className = "alert-overlay";
  
    var alertBox = document.createElement("div");
    alertBox.className = "alert-box";
  
    var title = document.createElement("div");
    title.className = "alert-title";
    title.textContent = "Alert Title";
  
    var message = document.createElement("div");
    message.className = "alert-message";
    message.textContent = "Currently not available.";
  
    var closeButton = document.createElement("button");
    closeButton.className = "alert-button";
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", function() {
      document.body.removeChild(overlay);
    });
  
    alertBox.appendChild(title);
    alertBox.appendChild(message);
    alertBox.appendChild(closeButton);
  
    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);
  }
  