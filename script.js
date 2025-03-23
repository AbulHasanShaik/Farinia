// Data for all items
const items = [
    {
      id: "item1",
      images: ["images/dress.webp", "images/dress2.jpg", "images/dress.webp"],
      title: "Embroidered Lawn Suit",
      description: "This elegant lawn suit is perfect for summer. Available in multiple colors.",
      price: "$50.00",
      availability: "5 left",
    },
    {
      id: "item2",
      images: ["images/dress.webp", "images/dress.webp", "images/dress.webp"],
      title: "Silk Party Wear",
      description: "A luxurious silk outfit for special occasions. Available in multiple colors.",
      price: "$80.00",
      availability: "3 left",
    },
    {
      id: "item3",
      images: ["images/dress.webp", "images/dress.webp", "images/dress.webp"],
      title: "Cotton Summer Suit",
      description: "A comfortable and stylish cotton suit for everyday wear. Available in multiple colors.",
      price: "$40.00",
      availability: "7 left",
    },
  ];
  
  // Render items dynamically
  function renderItems() {
    const clothesList = document.querySelector(".clothes-list");
    clothesList.innerHTML = ""; // Clear existing items
  
    items.forEach((item) => {
      const itemHTML = `
        <div class="clothes-item">
          <img src="${item.images[0]}" alt="${item.title}">
          <h2>${item.title}</h2>
          <p>${item.price}</p>
          <button onclick="contactOwner()">Contact Owner</button>
          <button onclick="openModal('${item.id}')">See Item</button>
        </div>
      `;
      clothesList.innerHTML += itemHTML;
    });
  }
  
  // Modal functionality
  let currentItem = null;
  const modal = document.getElementById("itemModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const modalAvailability = document.getElementById("modalAvailability");
  
  let currentImageIndex = 0;
  
  function openModal(itemId) {
    currentItem = items.find((item) => item.id === itemId);
    currentImageIndex = 0;
    updateModal();
    modal.style.display = "flex";
  }
  
  function closeModal() {
    modal.style.display = "none";
  }
  
  function updateModal() {
    modalImage.src = currentItem.images[currentImageIndex];
    modalTitle.textContent = currentItem.title;
    modalText.textContent = currentItem.description;
    modalAvailability.textContent = `Availability: ${currentItem.availability}`;
  }
  
  function prevImage() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateModal();
    }
  }
  
  function nextImage() {
    if (currentImageIndex < currentItem.images.length - 1) {
      currentImageIndex++;
      updateModal();
    }
  }
  
  // Close modal if clicked outside
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
  
  // Contact Owner function
  function contactOwner() {
    alert("Please contact us at fariniaclothes@example.com to purchase this item.");
  }
  
  // Render items when the page loads
  window.onload = renderItems;