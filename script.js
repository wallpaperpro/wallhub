const wallpapers = [
    {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain.jpg",
    },
    {
        title: "Car",
        category: "cars",
        fileName: "racecar1.jpg",
    },
    {
        title: "Car",
        category: "cars",
        fileName: "racecar2.jpg",
     },
     {
        title: "Car",
        category: "cars",
        fileName: "racecar3.jpg",
     },
  {
        title: "Car",
        category: "cars",
        fileName: "racecar4.jpg",
     },
  {
        title: "Car",
        category: "cars",
        fileName: "racecar5.jpg",
     },
  {
        title: "Car",
        category: "cars",
        fileName: "racecar6.jpg",
     },
  {
        title: "Car",
        category: "cars",
        fileName: "racecar7.jpg",
     },
  {
        title: "Car",
        category: "cars",
        fileName: "racecar8.jpg",
     },
  {
        title: "Car",
        category: "cars",
        fileName: "racecar9.jpg",
     },
  {
        title: "Car",
        category: "cars",
        fileName: "racecar10.jpg",
     },
 {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain1.jpg",
     },
 {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain2.jpg",
     },
 {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain3.jpg",
     },
 {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain4.jpg",
     },

 {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain5.jpg",
     },
 {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain6.jpg",
     },
 {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain7.jpg",
     },
 {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain8.jpg",
     },
 {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain9.jpg",
     },
 {
        title: "Mountain Lake",
        category: "nature",
        fileName: "mountain10.jpg",
     },              
 {
        title: "neoncity",
        category: "neon",
        fileName: "neon1.jpg",
     },
 {
        title: "neoncity",
        category: "neon",
        fileName: "neon2.jpg",
     },
 {
        title: "neoncity",
        category: "neon",
        fileName: "neon3.jpg",
     },
 {
        title: "neoncity",
        category: "neon",
        fileName: "neon4.jpg",
     },
 {
        title: "neoncity",
        category: "neon",
        fileName: "neon5.jpg",
     },
 {
        title: "neoncity",
        category: "neon",
        fileName: "neon6.jpg",
     },
 {
        title: "neoncity",
        category: "neon",
        fileName: "neon7.jpg",
     },
 {
        title: "neoncity",
        category: "neon",
        fileName: "neon8.jpg",
     },
 {
        title: "neoncity",
        category: "neon",
        fileName: "neon9.jpg",
     },
 {
        title: "neoncity",
        category: "neon",
        fileName: "neon10.jpg",
     },
 {
        title: "god",
        category: "god",
        fileName: "god1.jpg",
     },
 {
        title: "god",
        category: "god",
        fileName: "god2.jpg",
     },
 {
        title: "god",
        category: "god",
        fileName: "god3.jpg",
     },
 {
        title: "god",
        category: "god",
        fileName: "god4.jpg",
     },
 {
        title: "god",
        category: "god",
        fileName: "god5.jpg",
     },
 {
        title: "god",
        category: "god",
        fileName: "god6.jpg",
     },
 {
        title: "god",
        category: "god",
        fileName: "god7.jpg",
     },
 {
        title: "god",
        category: "god",
        fileName: "god8.jpg",
     },
 {
        title: "god",
        category: "god",
        fileName: "god9.jpg",
     },
 {
        title: "god",
        category: "god",
        fileName: "god10.jpg",
     },
];

function displayItems(data) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = data.map(item => `
        <div class="card">
            <img src="./images/${item.fileName}" alt="${item.title}">
            <div class="card-content">
                <h3>${item.title}</h3>
                <button onclick="forceDownload('./images/${item.fileName}', '${item.fileName}')" class="download-btn">
                   Download 4K
                </button>
            </div>
        </div>
    `).join('');
}

function displayItems(data) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = data.map(item => `
        <div class="card">
            <img src="./images/${item.fileName}" alt="${item.title}">
            <div class="card-content">
                <h3>${item.title}</h3>
                <button onclick="forceDownload('./images/${item.fileName}', '${item.fileName}')" class="download-btn">
                   Download 4K
                </button>
            </div>
        </div>
    `).join('');
}
function displayItems(data) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = data.map(item => `
        <div class="card">
            <img src="./images/${item.fileName}" alt="${item.title}">
            <div class="card-content">
                <h3>${item.title}</h3>
                <button onclick="forceDownload('./images/${item.fileName}', '${item.fileName}')" class="download-btn">
                   Download 4K
                </button>
            </div>
        </div>
    `).join('');
}

function displayItems(data) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = data.map(item => `
        <div class="card">
            <img src="./images/${item.fileName}" alt="${item.title}">
            <div class="card-content">
                <h3>${item.title}</h3>
                
                <a href="./images/${item.fileName}" 
                   download="${item.fileName}" 
                   class="download-btn"
                   onclick="handleDownload(event, './images/${item.fileName}', '${item.fileName}')">
                   Download 4K
                </a>
            </div>
        </div>
    `).join('');
}

// This function handles the logic professionally
function handleDownload(event, fileUrl, fileName) {
    // If we are on a real server (GitHub), the 'download' attribute usually works.
    // We only use the 'Fetch' magic if the simple way fails.
    
    if (window.location.protocol === 'file:') {
        // We are testing locally. Browsers block Fetch here.
        // We tell the user to use Right-Click because it's the ONLY way on a local file.
        console.log("Local testing detected. 'Save As' is handled by the browser.");
    }
}

function filterCategory(cat) {
    const btns = document.querySelectorAll('.cat-btn');
    btns.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    
    const filtered = cat === 'all' ? wallpapers : wallpapers.filter(w => w.category === cat);
    displayItems(filtered);
}

function searchWallpapers() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const searched = wallpapers.filter(w => w.title.toLowerCase().includes(term));
    displayItems(searched);
}

// Initial Load
displayItems(wallpapers);