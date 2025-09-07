const togglebtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const openicon = document.getElementById("menu-icon");
const closeicon = document.getElementById("close-icon");
const heroSection = document.getElementById("hero-section"); // Ye line add karo


togglebtn.addEventListener("click", () => {
    // togglemenu visiablity
    menu.classList.toggle("hidden");
    // toggle icons
    openicon.classList.toggle("hidden");
    closeicon.classList.toggle("hidden");

    // Hero section ko push karne ke liye ye add kia:
    if (!menu.classList.contains("hidden")) {
        // Menu open hai - margin add kia
        heroSection.style.marginTop = "290px"; // Ya jo bhi chahiye
    } else {
        // Menu close hai - margin 0 karo
        heroSection.style.marginTop = "0px";
    }
})

// dot prev next content funtionality

const slide = [
    {
        image: "../hero_endframe_cvklg0xk3w6e_large_2_e21b30e18f.png",
        text: "iphone 15 Series",
        title: "Up to 10% off Voucher"
    },
    {
        image: "../hero_endframe_cvklg0xk3w6e_large_2_e21b30e18f.png",
        text: "Samsung Galaxy S24",
        title: "Save up to 15% Today"
    },
    {
        image: "../hero_endframe_cvklg0xk3w6e_large_2_e21b30e18f.png", // Replace with different image
        text: "MacBook Pro M3",
        title: "Professional Performance"
    },
    {
        image: "../hero_endframe_cvklg0xk3w6e_large_2_e21b30e18f.png", // Replace with different image
        text: "AirPods Pro",
        title: "Premium Audio Experience"
    },
    {
        image: "../hero_endframe_cvklg0xk3w6e_large_2_e21b30e18f.png", // Replace with different image
        text: "iPad Air",
        title: "Creativity Unleashed"
    }
];

let currentSlider = 0;
const heroImage = document.getElementById("hero-image");
const slidetext = document.getElementById("slide-text");
const slidetitle = document.getElementById("slide-title");
const dot = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Function to update slide with fade effect
function updateSlide(Sliderindex) {
    // Fade out effect
    heroImage.style.opacity = '0';

    // After fade out, change content and fade in
    setTimeout(() => {
        // Update images and text etc 
        if (heroImage) heroImage.src = slide[Sliderindex].image;
        if (slidetext) slidetext.textContent = slide[Sliderindex].text;
        if (slidetitle) slidetitle.textContent = slide[Sliderindex].title;

        // Fade in effect
        heroImage.style.opacity = '1';
    }, 200);

    // Update dots using for loop
    for (let i = 0; i < dot.length; i++) {
        if (i === Sliderindex) {
            dot[i].classList.add('active', 'bg-white', 'scale-110');
            dot[i].classList.remove('bg-white/50');
        } else {
            dot[i].classList.remove('active', 'bg-white', 'scale-110');
            dot[i].classList.add('bg-white/50');
        }
    }

    currentSlider = Sliderindex;
}

// Add click listener to dots using for loop
for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", function () {
        updateSlide(i);
    });
}

// Next button functionality
nextBtn.addEventListener("click", function () {
    const nextSlide = (currentSlider + 1) % slide.length;
    updateSlide(nextSlide);
});

// Previous button functionality
prevBtn.addEventListener("click", function () {
    const prevSlide = (currentSlider - 1 + slide.length) % slide.length;
    updateSlide(prevSlide);
});

// Auto slide
setInterval(() => {
    const nextSlide = (currentSlider + 1) % slide.length;
    updateSlide(nextSlide);
}, 10000); // Change slide every 10 seconds

// btn click 
const dropdown = document.getElementById("openUl");
const Clickonbtn = document.getElementById("Clickonbtn");

Clickonbtn.addEventListener("click", () => {
    dropdown.classList.toggle("hidden")
})

// everywhere click close dropdown 

document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !Clickonbtn.contains(e.target)) {
        dropdown.classList.add("hidden")
    }
});

// home click 
document.getElementById('openhome').addEventListener('click', function () {
    window.location.href = "Estore.html"; // Redirect to page2
});

// signup 
document.getElementById('opensignup').addEventListener('click', function () {
    window.location.href = "Signup.html"; // Redirect to page2
});
// login 
document.getElementById('openlogin').addEventListener('click', function () {
    window.location.href = "Login.html"; // Redirect to page2
});
// whishlist 
document.getElementById('openwhishlist').addEventListener('click', function () {
    window.location.href = "wishlist.html"; // Redirect to page2
});
// cart 
document.getElementById('opencart').addEventListener('click', function () {
    window.location.href = "cart.html"; // Redirect to page2
});
// cheackout 
document.getElementById('opencheckout').addEventListener('click', function () {
    window.location.href = "Checkout.html"; // Redirect to page2
});
// acc details 
document.getElementById('openaccounts').addEventListener('click', function () {
    window.location.href = "AccountDetails.html"; // Redirect to page2
});
// About 
document.getElementById('openabout').addEventListener('click', function () {
    window.location.href = "About.html"; // Redirect to page2
});
// Contact 
document.getElementById('opencontact').addEventListener('click', function () {
    window.location.href = "ContactUs.html"; // Redirect to page2
});
// Not Found 
document.getElementById('opennotfoundpage').addEventListener('click', function () {
    window.location.href = "NotFound.html"; // Redirect to page2
});


