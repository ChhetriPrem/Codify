// Function to remove a toast from the DOM
const removeToast = (toast) => {
  toast.classList.add("hide");
  setTimeout(() => {
    toast.remove(); // Removes the toast element from the DOM after 500ms
  }, 500);
};

// Main function to show a toast notification
export const showToast = (type, message) => {
  const toastDetails = {
    success: {
      icon: "fa-circle-check",
      text: message || "Success: This is a success toast.",
    },
    error: {
      icon: "fa-circle-xmark",
      text: message || "Error: This is an error toast.",
    },
    warning: {
      icon: "fa-triangle-exclamation",
      text: message || "Warning: This is a warning toast.",
    },
    info: {
      icon: "fa-circle-info",
      text: message || "Info: This is an information toast.",
    },
  };

  // Create the toast element
  const toast = document.createElement("li");
  toast.className = `toast ${type}`;

  // Set the innerHTML of the toast (icon + message without the onclick handler)
  toast.innerHTML = `
    <div class="column">
      <i class="fa-solid ${toastDetails[type].icon}"></i>
      <span>${toastDetails[type].text}</span>
    </div>
    <i class="fa-solid fa-xmark"></i>
  `;

  // Append the toast to the container
  document.querySelector(".notifications-container").appendChild(toast);

  // Add event listener to the close (x) icon dynamically
  const closeIcon = toast.querySelector(".fa-xmark");
  closeIcon.addEventListener("click", () => removeToast(toast));

  // Automatically remove the toast after 5 seconds
  toast.timeoutId = setTimeout(() => removeToast(toast), 5000);
};
