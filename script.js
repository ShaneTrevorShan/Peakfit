function getUserName() {
  const userName = prompt('Please key in your name.');
  console.log(userName);

  const taglineH1 = document.querySelector('.tagline h1');
  taglineH1.textContent = `No days off, ${userName}. Make it count. 🔥`;

  const image = document.getElementById('photo');

  if (userName.toLowerCase() === 'peakfit') {
    image.src = 'Peakfit Logo.jpeg';
  } else {
    image.src = 'default.jpeg';
  }
}

getUserName();