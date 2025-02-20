document.addEventListener("DOMContentLoaded", function () {
  const componentSelect = document.getElementById("component-select");
  const componentContent = document.getElementById("component-content");

  componentSelect.addEventListener("change", function () {
    const selectedComponent = componentSelect.value;
    let content = "";

    switch (selectedComponent) {
      case "google-sheets":
        content = `
          <h3>Google Sheets</h3>
          <div class="gif-container">
            <div class="image-wrapper">
              <h3>Standard Interaction</h3>
              <img src="pics/googledoc.gif" alt="Google Sheets Standard Interaction gif. The whole process of using a mouse. Click to reveal." class="blurred-image expandable-image">
              <div class="overlay">Click to reveal</div>
            </div>
            <div class="image-wrapper">
              <h3>Accessible Interaction</h3>
              <img src="pics/googledoc_acc.gif" alt="Google Sheets Accessible Interaction. The whole process of using a keyboard only. Click to reveal" class="blurred-image expandable-image">
  <div class="overlay">Click to reveal</div>
            </div>
          </div>
          <h4>Reflection</h4>
          <p>For Mouse and Touchpad, clicking and selecting options is straightforward. Hovering over options provides visual feedback.<br>
          For Keyboard use, press Tab to navigate, arrow keys to move between options, Enter to select, and Esc to close. Initial navigation might require some practice. It was very tricky and I am still not sure whether I learned it.<br>
          For Touch, tapping opens the menu, and swiping scrolls through options. Tapping an option selects it. The hardest part is to find where the menu is as the layout is different for touch. Other than that, it's very intuitive.<br>
          Initial navigation to the dropdown menu is tricky, but once there, it's easy to use.<br><br>
          </p>
          <h4>Can and Can’t Do-s</h4>
          <strong>Can Do:</strong> Navigate through options, select an option, close the menu with keyboard shortcuts.<br>
          <strong>Can’t Do:</strong> Trying to copy and paste text within cells just calls a random shortcut. Interestingly, the shortut being called is different for every dropdown you go into (eg. File, Data, etc). <br>
          Selecting a part of a label is impossible, as well as using Ctrl + Z to undo selection or return.<br><br>
          </p>
          <h4>Functionalities</h4>
          <p>Learnability, memorability, and efficiency are all moderate. 
          Initial navigation can be tricky, but it becomes easier with practice. 
          Once familiar with the navigation, it is easy to remember and becomes efficient.</p>
        `;
        break;
      case "slack":
        content = `
          <h3>Slack</h3>
          <div class="gif-container">
            <div class="image-wrapper">
              <h3>Standard Interaction</h3>
              <img src="pics/slack.gif" alt="Slack Standard Interaction. The whole process of using a mouse. Click to reveal" class="blurred-image expandable-image">
              <div class="overlay">Click to reveal</div>
            </div>
            <div class="image-wrapper">
              <h3>Accessible Interaction</h3>
              <img src="pics/slack_acc.gif" alt="Slack Accessible Interaction. The whole process of using keyboard keys only. Click to reveal" class="blurred-image expandable-image">
              <div class="overlay">Click to reveal</div>
            </div>
          </div>
          <h4>Reflection</h4>
          <p>For Mouse and Touchpad, clicking to open and select options is simple. Hovering provides visual feedback, but the layout can be less intuitive.<br>
          For Keyboard Users, press Fn6 and Arrows to get to the needed place and open the menu, Enter to select, and Esc to close. Navigation is much less intuitive and needs to be looked up.<br>
          For Touch, tapping opens the menu, and swiping scrolls through options. Tapping an option selects it. Again, very easy as long as you know where to look.<br><br>
          </p>
          <h4>Can and Can’t Do-s</h4>
          <strong>Can Do:</strong> Navigate through options, select an option, close the menu with keyboard shortcuts.<br>
          <strong>Can’t Do:</strong> Select part of a label, go back and forth with keyboard use only easily, use Ctrl + Z to undo within a popup dialog.<br><br>
          <h4>Functionalities</h4>
          <p>The navigation is less intuitive, which makes it harder to learn and remember. The shortcuts are not as straightforward, contributing to the difficulty in memorizing them. 
          While the system is functional, it is less efficient because of the unintuitive navigation, requiring more effort to use effectively.</p>
        `;
        break;
      case "file-explorer":
        content = `
          <h3>File Explorer</h3>
          <div class="gif-container">
            <div class="image-wrapper">
              <h3>Standard Interaction</h3>
              <img src="pics/explorer.gif" alt="File Explorer Standard Interaction. The whole process of using a mouse. Click to reveal" class="blurred-image expandable-image">
              <div class="overlay">Click to reveal</div>
            </div>
            <div class="image-wrapper">
              <h3>Accessible Interaction</h3>
              <img src="pics/explorer_acc.gif" alt="File Explorer Accessible Interaction. The whole process of using keyboard keys only. Click to reveal" class="blurred-image expandable-image">
              <div class="overlay">Click to reveal</div>
            </div>
          </div>
          <h4>Reflection</h4>
          <p> For Mouse and Touchpad, everything is very accessible and user-friendly. Hovering over options provides clear visual feedback.<br>
          For Keyboard users, press Tab to navigate, arrow keys to move between options, Enter to select, and Esc to close. Navigation is intuitive and comprehensive. Tab gets you everywhere you need.<br>
          Touch is unavailable as File Explorer is only found on my laptop. If laptop had a touchscreen, navigation would be the same as for the mouse users.<br><br>
          So File Explorer is most accessible and user-friendly with both mouse and keyboard.</p>
          <h4>Can and Can’t Do-s</h4>
          <strong>Can Do:</strong> Navigate through options, select an option, close the menu with keyboard shortcuts.<br>
          <strong>Can’t Do:</strong> Trying to copy and paste an option doesn't do anything or exits the menu completely, depending on which dropdown you are in. <br>
          Selecting a part of an option is not possible, nor is using Ctrl + Z to undo selection or return to the initial menu.<br><br>
          <h4>Functionalities</h4>
          <p>Learnability is high due to intuitive navigation, making it easy to learn. 
          Memorability is also high, as the intuitive navigation makes it easy to remember. 
          Efficiency is high as well, with comprehensive navigation making it very efficient.</p>
        `;
        break;
    }

    componentContent.innerHTML = content;

    const blurredImages = document.querySelectorAll(".blurred-image");

    blurredImages.forEach((image) => {
      image.addEventListener("click", function () {
        this.classList.toggle("revealed");
        const overlay = this.nextElementSibling;
        if (overlay) {
          overlay.style.display = this.classList.contains("revealed")
            ? "none"
            : "block";
        }
      });
    });
  });

  componentSelect.dispatchEvent(new Event("change"));
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const images = document.querySelectorAll(".expandable-image");
  const closeBtn = document.querySelector(".close");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
