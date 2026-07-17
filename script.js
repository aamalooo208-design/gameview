// ===== GameView Script =====

// پیام خوش‌آمدگویی
console.log("🎮 Welcome to GameView");

// جستجو
function searchVideos() {
    let input = document.querySelector(".search input");
    if (!input) return;

    let filter = input.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector("h2").textContent.toLowerCase();

        if (title.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// فعال شدن جستجو هنگام تایپ
document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector(".search input");

    if (input) {
        input.addEventListener("keyup", searchVideos);
    }
}); // ===== حالت تیره =====

function toggleDarkMode() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// بارگذاری تنظیمات ذخیره‌شده
document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem("theme");

    if (theme === "light") {
        document.body.classList.add("light-mode");
    }
});

// ===== لایک نمایشی =====

document.addEventListener("DOMContentLoaded", () => {

    const likes = document.querySelectorAll(".like-btn");

    likes.forEach(btn => {

        btn.addEventListener("click", () => {

            let count = Number(btn.dataset.likes || 0);

            count++;

            btn.dataset.likes = count;

            btn.textContent = "❤️ " + count;

        });

    });

});// ===== دکمه بازگشت به بالا =====

const topButton = document.createElement("button");

topButton.innerHTML = "⬆️";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px";
topButton.style.fontSize = "18px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.background = "#00d4ff";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===== پایان فایل =====
console.log("✅ GameView Script Loaded");// ===== Trending Videos Animation =====

document.addEventListener("DOMContentLoaded", () => {

    const trendCards = document.querySelectorAll(".trend-card");

    trendCards.forEach((card, index) => {

        card.style.opacity = "0";

        setTimeout(() => {

            card.style.transition = "0.5s";
            card.style.opacity = "1";

        }, index * 200);

    });

});
