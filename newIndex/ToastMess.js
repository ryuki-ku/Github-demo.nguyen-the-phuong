function toastButton1({
    message = " ",
    type = "",
    bodyMess = "",
    duration = 3000,
  }) {
    const main = document.getElementById("Toast1");
    if (main) {
      const toast = document.createElement("div");
      toast.classList.add("errorMessage1");
      toast.innerHTML = `
          <div class="message">
              ${message}
          </div>
          <div class="iconMessage">
          <i class="fa-solid fa-xmark" style="color: #e91635;"></i>
          </div>
          <div class="bodyMessage">
              ${bodyMess}
          </div>`;
      main.appendChild(toast);
    }
  }
  
  function toastButton2({
    message = " ",
    type = "",
    bodyMess = "",
    duration = 3000,
  }) {
    const main = document.getElementById("Toast2");
    if (main) {
      const toast = document.createElement("div");
      toast.classList.add("errorMessage2");
      toast.innerHTML = `
          <div class="message">
            ${message}
          </div>
          <div class="iconMessage">
        <i class="fa-solid fa-circle-check"></i>
          </div>
          <div class="bodyMessage">
            ${bodyMess}
          </div>`;
      main.appendChild(toast);
    }
  }
  
  function toastButton3({
    message = " ",
    type = "",
    bodyMess = "",
    duration = 3000,
  }) {
    const main = document.getElementById("Toast3");
    if (main) {
      const toast = document.createElement("div");
      toast.classList.add("errorMessage3");
      toast.innerHTML = `
          <div class="message">
            ${message}
          </div>
          <div class="iconMessage">
          <i class="fa-solid fa-triangle-exclamation" style="color: #d0fa00;"></i>
          </div>
          <div class="bodyMessage">
            ${bodyMess}
          </div>`;
      main.appendChild(toast);
    }
  }
  
  function showError() {
    toastButton1({
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium minus quos hic dolorum suscipit rem, iusto, alias debitis animi obcaecati. Optio nulla nostrum vel sed, debitis consequuntur odit libero?",
      type: "error",
      bodyMess: "Somthing Went wrong",
      duration: 3000,
    });
  }
  
  function showSuccess() {
    toastButton2({
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium minus quos hic dolorum suscipit rem, iusto, alias debitis animi obcaecati. Optio nulla nostrum vel sed, debitis consequuntur odit libero?",
      type: "Success",
      bodyMess: "Successfull",
      duration: 3000,
    });
  }
  
  function showWarning() {
    toastButton3({
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium minus quos hic dolorum suscipit rem, iusto, alias debitis animi obcaecati. Optio nulla nostrum vel sed, debitis consequuntur odit libero?",
      type: "Warning",
      bodyMess: "Look for something??",
      duration: 3000,
    });
  }