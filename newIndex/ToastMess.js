function toastButton({
    message = " ",
    type = "",
    messageClass ="",
    bodyMess = "",
    color ="",
    duration = 3000,
  }) {
    const main = document.getElementById("Toast1");
    if (main) {
      const toast = document.createElement("div");
      toast.classList.add(`${messageClass}`);
      const errorType = {
        success: "fa-solid fa-check",
        error: "fa-solid fa-xmark",
        warning: "fa-solid fa-triangle-exclamation"
      };
      const typeColors = {
        red: "#e91635",
        yellow: "#fff700",
        green: "#51ff00"
      }
      const selectType = errorType[type];
      const colorStyle = typeColors[color];
      toast.innerHTML = `
          <div class="message">
              ${message}
          </div>
          <div class="iconMessage">
          <i class="${selectType}" style="color: ${colorStyle};"></i>
          </div>
          <div class="bodyMessage">
              ${bodyMess}
          </div>`;
      main.appendChild(toast);
    }
  }
  
  function showError() {
    toastButton({
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium minus quos hic dolorum suscipit rem, iusto, alias debitis animi obcaecati. Optio nulla nostrum vel sed, debitis consequuntur odit libero?",
      type: "error",
      messageClass: "errorMessage1",
      bodyMess: "Somthing Went wrong",
      color: "red",
      duration: 3000,
    });
  }
  
  function showSuccess() {
    toastButton({
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium minus quos hic dolorum suscipit rem, iusto, alias debitis animi obcaecati. Optio nulla nostrum vel sed, debitis consequuntur odit libero?",
      type: "success",
      messageClass: "errorMessage2",
      bodyMess: "Successfull",
      color: "green",
      duration: 3000,
    });
  }
  
  function showWarning() {
    toastButton({
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium minus quos hic dolorum suscipit rem, iusto, alias debitis animi obcaecati. Optio nulla nostrum vel sed, debitis consequuntur odit libero?",
      type: "warning",
      messageClass: "errorMessage3",
      bodyMess: "Look for something??",
      color: "yellow",
      duration: 3000,
    });
  }