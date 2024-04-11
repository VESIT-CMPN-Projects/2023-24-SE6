document.addEventListener("DOMContentLoaded", function () {
    let totalEmissions; // Declare totalEmissions at a higher scope
  
    const calculateBtn = document.getElementById("calculateBtn");
    const resetBtn = document.getElementById("resetBtn");
    const resultElement = document.getElementById("modalResult"); // Updated to modalResult
    const tipsElement = document.getElementById("modalTips"); // Updated to modalTips
  
    calculateBtn.addEventListener("click", function () {
      totalEmissions = calculateCarbonFootprint();
      openModal();
    });
  
    resetBtn.addEventListener("click", function () {
      document.getElementById("companyForm").reset();
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
  
      modalResult.innerHTML = `<h3>Your company's total carbon footprint is: ${totalEmissions.toFixed(2)} kg CO2</h3>`;
      modalTips.innerHTML = "";
  
      if (totalEmissions > 0) {
        modalTips.innerHTML += "<h3>Reduce Your Company's Carbon Footprint</h3>";
  
        if (totalEmissions >= 10) {
          modalTips.innerHTML += "<p>Implement energy-efficient practices and technologies to reduce electricity-related carbon emissions.</p>";
        }
  
        if (totalEmissions >= 20) {
          modalTips.innerHTML += "<p>Explore renewable energy options for your company's operations.</p>";
        }
  
        if (totalEmissions >= 30) {
          modalTips.innerHTML += "<p>Optimize your fleet's fuel efficiency and consider alternative fuels.</p>";
        }
  
        if (totalEmissions >= 40) {
          modalTips.innerHTML += "<p>Implement waste reduction and recycling programs to minimize waste-related carbon emissions.</p>";
        }
      }
    }
  
    function calculateCarbonFootprint() {
      const electricityUsage = parseFloat(document.getElementById("electricityUsage").value);
      const naturalGasUsage = parseFloat(document.getElementById("naturalGasUsage").value);
      const fleetFuelUsage = parseFloat(document.getElementById("fleetFuelUsage").value);
      const wasteGeneration = parseFloat(document.getElementById("wasteGeneration").value);
  
      if (
        isNaN(electricityUsage) ||
        isNaN(naturalGasUsage) ||
        isNaN(fleetFuelUsage) ||
        isNaN(wasteGeneration)
      ) {
        alert("Please enter valid numeric values for all fields.");
        return 0;
      }
  
      const electricityEmissions = electricityUsage * 0.4;
      const naturalGasEmissions = naturalGasUsage * 2;
      const fleetFuelEmissions = fleetFuelUsage * 2.3;
      const wasteEmissions = wasteGeneration * 0.2;
  
      totalEmissions =
        electricityEmissions + naturalGasEmissions + fleetFuelEmissions + wasteEmissions;
  
      return totalEmissions;
    }
  });
  