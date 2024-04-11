document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("resetBtn");

  calculateBtn.addEventListener("click", function () {
    calculateCarbonFootprint();
  });

  resetBtn.addEventListener("click", function () {
    document.getElementById("flightForm").reset();
  });

  function calculateCarbonFootprint() {
    const flightDistance = parseFloat(document.getElementById("flightDistance").value);
    const passengers = parseFloat(document.getElementById("passengers").value);
    const flightClass = document.getElementById("flightClass").value;

    if (isNaN(flightDistance) || isNaN(passengers) || flightDistance <= 0 || passengers <= 0) {
      alert("Please enter valid numeric values for flight distance and number of passengers.");
      return;
    }

    let emissionsPerKilometer;

    switch (flightClass) {
      case "economy":
        emissionsPerKilometer = 0.24;
        break;
      case "business":
        emissionsPerKilometer = 0.5;
        break;
      case "first":
        emissionsPerKilometer = 0.8;
        break;
      default:
        emissionsPerKilometer = 0.24;
    }

    const totalEmissions = flightDistance * passengers * emissionsPerKilometer;
    displayResultInModal(totalEmissions);
  }

  function displayResultInModal(emissions) {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");
    const closeModalBtn = document.getElementById("closeModal");
    const resultElement = document.getElementById("modalResult");
    const tipsElement = document.getElementById("modalTips");

    resultElement.innerHTML = `<h3>Your flight's total carbon footprint is: ${emissions.toFixed(2)} kg CO2</h3>`;
    displayTipsInModal(emissions);

    closeModalBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    modalContent.style.display = "block";
    modal.style.display = "block";
  }

  function displayTipsInModal(emissions) {
    const tipsElement = document.getElementById("modalTips");
    tipsElement.innerHTML = "";

    if (emissions > 0) {
      tipsElement.innerHTML += "<h3>Reduce Your Flight's Carbon Footprint</h3>";

      if (emissions >= 10) {
        tipsElement.innerHTML += "<p>Consider flying on more fuel-efficient aircraft.</p>";
      }

      if (emissions >= 20) {
        tipsElement.innerHTML += "<p>Opt for direct flights to reduce takeoff and landing emissions.</p>";
      }

      if (emissions >= 30) {
        tipsElement.innerHTML += "<p>Offset your carbon footprint by investing in carbon offset programs.</p>";
      }
    }
  }
});
