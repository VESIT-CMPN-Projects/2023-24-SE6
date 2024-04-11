document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("resetBtn");
  const resultElement = document.getElementById("result");
  const tipsElement = document.getElementById("tips");

  calculateBtn.addEventListener("click", function () {
    const isValidInput = calculateCarbonFootprint();
    if (isValidInput) {
      openModal();
    }
  });

  resetBtn.addEventListener("click", function () {
    document.getElementById("waterwaysForm").reset();
    resultElement.classList.add("hide");
    tipsElement.classList.add("hide");
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

    modalResult.innerHTML = resultElement.innerHTML;
    modalTips.innerHTML = tipsElement.innerHTML;
  }

  function calculateCarbonFootprint() {
    const distance = parseFloat(document.getElementById("distance").value);
    const fuelUsage = parseFloat(document.getElementById("fuelUsage").value);

    if (isNaN(distance) || isNaN(fuelUsage)) {
      alert("Please enter valid numeric values for all fields.");
      return false;
    }

    const emissions = distance * fuelUsage * 0.05; // Assuming 0.05 kg of CO2 per km per liter of fuel

    displayResult(emissions);
    return true;
  }

  function displayResult(emissions) {
    resultElement.innerHTML = `<h3>Waterways' total carbon footprint is: ${emissions.toFixed(2)} kg CO2</h3>`;
  }

  function displayTips() {
    const emissions = parseFloat(resultElement.textContent.replace("Waterways' total carbon footprint is: ", "").replace(" kg CO2", ""));
    tipsElement.innerHTML = "";

    if (emissions > 0) {
      tipsElement.innerHTML += "<h3>Reduce Waterways' Carbon Footprint</h3>";

      if (emissions >= 10) {
        tipsElement.innerHTML += "<p>Optimize navigation routes to reduce distance traveled.</p>";
      }

      if (emissions >= 20) {
        tipsElement.innerHTML += "<p>Invest in more fuel-efficient engines or alternative fuels.</p>";
      }

      if (emissions >= 30) {
        tipsElement.innerHTML += "<p>Implement emission control technologies to reduce pollutant emissions.</p>";
      }
    }
  }
});
