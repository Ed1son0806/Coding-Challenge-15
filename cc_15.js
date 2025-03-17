// Task 1: Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Risk Level:</strong> <span class="riskLevelText">${riskLevel}</span></p>
        <p><strong>Department:</strong> ${department}</p>
        <button class="resolveButton">Resolve</button>
    `;

    // Task 4: Categorizing Risks by Level
    updateRiskCardStyle(riskCard, riskLevel);

    riskDashboard.appendChild(riskCard);

    // Task 3: Removing Risk Items
    const resolveButton = riskCard.querySelector(".resolveButton");
    resolveButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Task 6: Handle Event Propagation
        riskDashboard.removeChild(riskCard);
    });

    // Task 6: Handle Event Propagation
    riskCard.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}

// Task 4: Categorizing Risks by Level
function updateRiskCardStyle(riskCard, riskLevel) {
    switch (riskLevel.toLowerCase()) {
        case "low":
            riskCard.style.backgroundColor = "#d4edda"; // Light green
            break;
        case "medium":
            riskCard.style.backgroundColor = "#fff3cd"; // Light yellow
            break;
        case "high":
            riskCard.style.backgroundColor = "#f8d7da"; // Light red
            break;
        default:
            riskCard.style.backgroundColor = "#f8f9fa"; // Default light gray
    }
}

// Task 5: Implementing Bulk Updates
function increaseRiskLevels() {
    const riskCards = document.querySelectorAll(".riskCard");
    riskCards.forEach((riskCard) => {
        const riskLevelText = riskCard.querySelector(".riskLevelText");
        let currentLevel = riskLevelText.textContent.toLowerCase();

        switch (currentLevel) {
            case "low":
                riskLevelText.textContent = "Medium";
                break;
            case "medium":
                riskLevelText.textContent = "High";
                break;
            case "high":
                break;
        }

        updateRiskCardStyle(riskCard, riskLevelText.textContent);
    });
}


const riskForm = document.getElementById("riskForm");
riskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;

    addRiskItem(riskName, riskLevel, department);
    riskForm.reset();
});


const increaseRiskLevelsButton = document.getElementById("increaseRiskLevels");
increaseRiskLevelsButton.addEventListener("click", increaseRiskLevels);


addRiskItem("Employee Retention", "Low", "HR");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");