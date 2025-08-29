
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountEl = document.getElementById("heartCount");
const coinEl = document.querySelector("header div:nth-child(3) span");
const copyEl = document.querySelector("header div:nth-child(4) span");

const historyList = document.querySelector("aside ul");
const clearHistoryBtn = document.querySelector("aside button");

// ----------------- Heart Button -----------------
document.querySelectorAll(".btn-square").forEach(btn => {
    btn.addEventListener("click", () => {
        heartCount++;
        heartCountEl.textContent = heartCount;
    });
});

// ----------------- Copy Button -----------------
document.querySelectorAll(".fa-copy").forEach(btn => {
    btn.parentElement.addEventListener("click", (e) => {
        const card = e.target.closest(".shadow-xl");
        const number = card.querySelector("h1.text-3xl").textContent;

        // Copy to clipboard
        navigator.clipboard.writeText(number).then(() => {
            alert(`Number ${number} copied to clipboard!`);
            copyCount++;
            copyEl.textContent = copyCount;
        });
    });
});

// ----------------- Call Button -----------------
document.querySelectorAll(".fa-phone").forEach(btn => {
    btn.parentElement.addEventListener("click", (e) => {
        const card = e.target.closest(".shadow-xl");
        const serviceName = card.querySelector("h1.text-xl").textContent;
        const number = card.querySelector("h1.text-3xl").textContent;

        if (coinCount < 20) {
            alert("Not enough coins! Please recharge.");
            return;
        }

        coinCount -= 20;
        coinEl.textContent = coinCount;

        // Current Time
        const now = new Date();
        const time = now.toLocaleString();

        alert(`Calling ${serviceName} at ${number}`);

        // Add to history
        const li = document.createElement("li");
        li.className = "bg-gray-100 p-2 rounded";
        li.textContent = `${serviceName} - ${number} (Time: ${time})`;
        historyList.appendChild(li);
    });
});

// ----------------- Clear History -----------------
clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
});
