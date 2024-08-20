// Get all the buttons that have the class "join-button"
const joinButtons = document.querySelectorAll('.join-button');

// Add a click event listener to each button
joinButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the link associated with the button (assuming it's in the 'href' attribute)
    const link = button.getAttribute('href');
    
    // If there is a link, open it in a new tab
    if (link) {
      window.open(link, '_blank'); // Opens the link in a new tab
    }
  });
});

// Get the elements with the class "typewriter" (for the typewriter effect)
const typewriterElements = document.querySelectorAll('.typewriter');

// Add a hover effect to the typewriter elements
typewriterElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    // Add a class to change the cursor on hover
    element.classList.add('hover-cursor');
  });

  element.addEventListener('mouseout', () => {
    // Remove the class when the mouse leaves
    element.classList.remove('hover-cursor');
  });
});

// Add a simple hover effect to the "Join Us" button (or any other button you want)
const joinUsButton = document.querySelector('.join-us-button');

if (joinUsButton) {
  joinUsButton.addEventListener('mouseover', () => {
    joinUsButton.style.backgroundColor = '#f1c40f'; // Change background color on hover
  });

  joinUsButton.addEventListener('mouseout', () => {
    joinUsButton.style.backgroundColor = '#ec3750'; // Reset background color
  });
}

// Add a hover effect to the "Read the ASTRA Guide" link (or any other link you want)
const guideLink = document.querySelector('.guide-link');

if (guideLink) {
  guideLink.addEventListener('mouseover', () => {
    guideLink.style.textDecoration = 'none'; // Remove underline on hover
  });

  guideLink.addEventListener('mouseout', () => {
    guideLink.style.textDecoration = 'underline'; // Add underline back
  });
}
