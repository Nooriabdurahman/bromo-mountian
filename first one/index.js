const input = document.getElementById('dark-mode'); 
const body = document.body; 
const label = document.querySelector('.circle');
const label1 = document.getElementById('label');



document.querySelector('.bromo').style.color = "black"
input.addEventListener('change', () => {
    if (input.checked) {
        body.style.backgroundColor = 'black';
        document.querySelector('.Efflortless').style.color = "black"
        document.querySelector('.pic').style.color = "black"
        document.querySelector('.discover').style.color = "black"
        document.querySelectorAll('.headeroption').forEach(element => {
            element.style.color = "black";
        });
        document.querySelector('.bromo').style.color = "white"
        document.querySelector('.this').style.color = "white"
         document.querySelector('.explore').style.backgroundColor = "white"
         document.querySelector('.explore').style.color = "black"
         document.querySelector('.Mountian').style.color = "black"
        
         const themeIcon = document.getElementById("theme-icon");
  const darkModeInput = document.getElementById("dark-mode");

  // Function to update the theme icon based on the input state
  function updateThemeIcon() {
    if (darkModeInput.checked) {
      themeIcon.src = "./image/sleep-mode.png";  // Switch to sleep mode when checked
    } else {
      themeIcon.src = "./image/sun.png";  // Switch to sun when unchecked
    }
  }

  // Add event listener to update the icon when the checkbox state changes
  darkModeInput.addEventListener("change", updateThemeIcon);

  // Initialize the icon based on the initial state of the checkbox
  updateThemeIcon();
    } 

    else {
        body.style.backgroundColor = 'white'; 
        document.querySelector('.Efflortless').style.color = "white"
        document.querySelector('.pic').style.color = "white"
        document.querySelector('.discover').style.color = "white"
        document.querySelectorAll('.headeroption').forEach(element => {
            element.style.color = "white"
        });
        document.querySelector('.bromo').style.color = "black"
        document.querySelector('.this').style.color = "black"
        document.querySelector('.explore').style.backgroundColor = "black"
        document.querySelector('.explore').style.color = "white"     
         document.querySelector('.Mountian').style.color = "white"
    }

    
});


function update(){
    localStorage.setItem("mode",
        JSON.stringify(input.checked)
    )
}



document.addEventListener("DOMContentLoaded", function () {
    const curserDot = document.querySelector(".curser-dot");
    const curserOutline = document.querySelector(".curser-outline");

    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX; // Correct capitalization
        const posY = e.clientY;

        // Update position of curserDot
        curserDot.style.left = `${posX}px`;
        curserDot.style.top = `${posY}px`;
        curserOutline.style.left = `${posX}px`;
        curserOutline.style.top = `${posY}px`;

        // Update position of curserOutline with animation
    });
});




