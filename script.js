const catsData = [
    {
        name: "Abyssinian",
        description: "Known for their short, ticked coat and highly active, playful nature. They are curious and love to explore.",
        imageUrl: "https://images.unsplash.com/photo-1599839619722-39751411ea63?w=500&q=80",
        size: "Medium",
        activity: "High",
        grooming: "Low",
        categories: ["activity-high", "grooming-low"]
    },
    {
        name: "Bengal",
        description: "Wild-looking cats with beautiful leopard-like spots. They are energetic, highly active, and require lots of play.",
        imageUrl: "https://images.unsplash.com/photo-1604882512145-c49b6ce872a9?w=500&q=80",
        size: "Medium to Large",
        activity: "High",
        grooming: "Low",
        categories: ["activity-high", "grooming-low"]
    },
    {
        name: "Maine Coon",
        description: "One of the largest domestic cat breeds. Known as 'gentle giants', they are affectionate but require regular grooming.",
        imageUrl: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=500&q=80",
        size: "Large",
        activity: "Moderate",
        grooming: "High",
        categories: ["size-large"]
    },
    {
        name: "Ragdoll",
        description: "Large, laid-back cats that go limp when picked up. They are very affectionate and have a moderate activity level.",
        imageUrl: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=500&q=80",
        size: "Large",
        activity: "Low",
        grooming: "Moderate",
        categories: ["size-large"]
    },
    {
        name: "Sphynx",
        description: "Hairless cats known for their extroverted, dog-like personality. They are highly active and need regular bathing.",
        imageUrl: "https://images.unsplash.com/photo-1520315342629-6ea920342047?w=500&q=80",
        size: "Medium",
        activity: "High",
        grooming: "High",
        categories: ["activity-high"]
    },
    {
        name: "British Shorthair",
        description: "Stocky, plush-coated cats with an easygoing and calm demeanor. They are independent but affectionate.",
        imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&q=80",
        size: "Medium to Large",
        activity: "Low",
        grooming: "Low",
        categories: ["size-large", "grooming-low"]
    },
    {
        name: "Siamese",
        description: "Vocal, demanding, and highly social cats. They have striking blue eyes and a sleek, short coat.",
        imageUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=500&q=80",
        size: "Small to Medium",
        activity: "High",
        grooming: "Low",
        categories: ["activity-high", "grooming-low"]
    },
    {
        name: "Persian",
        description: "Famous for their long, luxurious coats and sweet, flat faces. They are quiet and require daily grooming.",
        imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500&q=80",
        size: "Medium",
        activity: "Low",
        grooming: "High",
        categories: []
    }
];

const gallery = document.getElementById('cat-gallery');
const filterBtns = document.querySelectorAll('.filter-btn');

// Function to render cat cards
function renderCats(filter = "all") {
    gallery.innerHTML = ""; // Clear current cards

    const filteredCats = filter === "all" 
        ? catsData 
        : catsData.filter(cat => cat.categories.includes(filter));

    filteredCats.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${cat.imageUrl}" alt="${cat.name}" class="card-img">
            </div>
            <div class="card-content">
                <h2 class="card-title">${cat.name}</h2>
                <p class="card-desc">${cat.description}</p>
                <div class="badges">
                    <span class="badge size">크기: ${cat.size}</span>
                    <span class="badge activity">활동량: ${cat.activity}</span>
                    <span class="badge grooming">털 관리: ${cat.grooming}</span>
                </div>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Event listeners for filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');
        
        // Render filtered
        renderCats(btn.dataset.filter);
    });
});

// Initial render
renderCats();