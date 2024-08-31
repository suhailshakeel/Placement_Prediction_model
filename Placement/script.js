document.addEventListener('DOMContentLoaded', () => {
    const imageForm = document.getElementById('imageForm');
    const imageContainer = document.getElementById('imageContainer');
  
    imageForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const imageName = event.target.image_name.value;
      const imageUrl = `images/${imageName}.png`; // Update with your image path
      
      try {
        const response = await fetch(imageUrl);
        
        if (response.ok) {
          const image = document.createElement('img');
          image.src = imageUrl;
          image.alt = imageName;
          
          imageContainer.innerHTML = '';
          imageContainer.appendChild(image);
        } else {
          imageContainer.innerHTML = 'Image not found';
        }
      } catch (error) {
        console.error('Error loading image:', error);
        imageContainer.innerHTML = 'Error loading image';
      }
    });
  });
  
  