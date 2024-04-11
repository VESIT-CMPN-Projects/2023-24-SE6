document.addEventListener("DOMContentLoaded", function () {
  let totalEmissions;

  const calculateBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("resetBtn");

  calculateBtn.addEventListener("click", function () {
    totalEmissions = calculateCarbonFootprint();
    openModal();
  });

  resetBtn.addEventListener("click", function () {
    document.getElementById("carbonForm").reset();
  });

  function openModal() {
    const modal = document.getElementById("modalResult");
    const closeModalBtn = document.getElementById("closeModal");

    if (!modal || !closeModalBtn) {
      console.error("Modal elements not found.");
      return;
    }

    closeModalBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    modal.style.display = "block";
    displayResultAndTips();
  }

  function displayResultAndTips() {
    const modalResult = document.getElementById("result");
    const modalTips = document.getElementById("tips");

    modalResult.innerHTML = `<h3>Your total carbon footprint is: ${totalEmissions.toFixed(2)} kg CO2</h3>`;
    modalTips.innerHTML = "";

    if (totalEmissions > 0) {
      modalTips.innerHTML += "<h3>Reduce Your Carbon Footprint</h3>";

      if (totalEmissions >= 10) {
        modalTips.innerHTML += "<p>Consider using public transportation, carpooling, or biking for short distances.</p>";
      }

      if (totalEmissions >= 20) {
        modalTips.innerHTML += "<p>Use energy-efficient appliances and switch to renewable energy sources.</p>";
      }

      if (totalEmissions >= 30) {
        modalTips.innerHTML += "<p>Avoid unnecessary air travel and choose more sustainable transportation options.</p>";
      }
    }
  }

  function calculateCarbonFootprint() {
    const carMileage = parseFloat(document.getElementById("carMileage").value);
    const carDistance = parseFloat(document.getElementById("carDistance").value);
    const electricityUsage = parseFloat(document.getElementById("electricityUsage").value);
    const airTravelDistance = parseFloat(document.getElementById("airTravelDistance").value);

    if (isNaN(carMileage) || isNaN(carDistance) || isNaN(electricityUsage) || isNaN(airTravelDistance)) {
      alert("Please enter valid numeric values for all fields.");
      return 0;
    }

    const carEmissions = (carDistance / carMileage) * 2.3; // assuming 2.3 kg of CO2 per gallon
    const electricityEmissions = electricityUsage * 0.4; // assuming 0.4 kg of CO2 per kWh
    const airTravelEmissions = airTravelDistance * 0.2; // assuming 0.2 kg of CO2 per mile for air travel

    totalEmissions = carEmissions + electricityEmissions + airTravelEmissions;

    return totalEmissions;
  }
});
