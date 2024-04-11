// household.js
document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("resetBtn");
  const resultElement = document.getElementById("modalResult"); // Updated to modalResult
  const tipsElement = document.getElementById("modalTips"); // Updated to modalTips

  calculateBtn.addEventListener("click", function () {
    calculateCarbonFootprint();
    openModal();
  });

  resetBtn.addEventListener("click", function () {
    document.getElementById("householdForm").reset();
  });

  function openModal() {
    const modal = document.getElementById("myModal");
    const closeModalBtn = document.getElementById("closeModal");

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
    const modalResult = document.getElementById("modalResult");
    const modalTips = document.getElementById("modalTips");

    modalResult.innerHTML = `<h3>Your total carbon footprint is: ${totalEmissions.toFixed(2)} kg CO2</h3>`;
    modalTips.innerHTML = "";

    if (totalEmissions > 0) {
      modalTips.innerHTML += "<h3>Reduce Your Household Carbon Footprint</h3>";

      if (totalEmissions >= 10) {
        modalTips.innerHTML += "<p>Use energy-efficient heating systems to reduce carbon emissions.</p>";
      }

      if (totalEmissions >= 20) {
        modalTips.innerHTML += "<p>Choose energy-efficient cooking appliances and practices to lower carbon emissions.</p>";
      }

      if (totalEmissions >= 30) {
        modalTips.innerHTML += "<p>Opt for renewable energy sources to reduce electricity-related carbon emissions.</p>";
      }

      if (totalEmissions >= 40) {
        modalTips.innerHTML += "<p>Conserve water and consider using water-saving appliances to reduce water-related carbon emissions.</p>";
      }

      if (totalEmissions >= 50) {
        modalTips.innerHTML += "<p>Practice waste reduction, recycling, and composting to minimize waste-related carbon emissions.</p>";
      }
    }
  }

  function calculateCarbonFootprint() {
    const heatingUsage = parseFloat(document.getElementById("heatingUsage").value);
    const cookingGasUsage = parseFloat(document.getElementById("cookingGasUsage").value);
    const electricityUsage = parseFloat(document.getElementById("electricityUsage").value);
    const waterUsage = parseFloat(document.getElementById("waterUsage").value);
    const wasteGeneration = parseFloat(document.getElementById("wasteGeneration").value);

    if (
      isNaN(heatingUsage) ||
      isNaN(cookingGasUsage) ||
      isNaN(electricityUsage) ||
      isNaN(waterUsage) ||
      isNaN(wasteGeneration)
    ) {
      alert("Please enter valid numeric values for all fields.");
      return 0;
    }

    const heatingEmissions = heatingUsage * 0.2; // assuming 0.2 kg of CO2 per kWh for heating
    const cookingGasEmissions = cookingGasUsage * 2; // assuming 2 kg of CO2 per cubic meter for cooking gas
    const electricityEmissions = electricityUsage * 0.4; // assuming 0.4 kg of CO2 per kWh
    const waterEmissions = waterUsage * 0.001; // assuming 0.001 kg of CO2 per liter for water
    const wasteEmissions = wasteGeneration * 0.2; // assuming 0.2 kg of CO2 per kg of waste

    totalEmissions =
      heatingEmissions + cookingGasEmissions + electricityEmissions + waterEmissions + wasteEmissions;

    return totalEmissions;
  }
});
