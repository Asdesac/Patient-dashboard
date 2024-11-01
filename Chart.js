/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function createBloodPressureChart(bloodPressureData) {
  const ctx = document.getElementById("bloodPressureChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: bloodPressureData.dates,
      datasets: [
        {
          label: "Systolic",
          data: bloodPressureData.systolic,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: true,
        },
        {
          label: "Diastolic",
          data: bloodPressureData.diastolic,
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// the new one
// Sample data structure to store patient information
const patients = [
  {
    id: 1,
    name: "Emily Williams",
    bloodPressure: [120, 125, 130, 128, 132], // Example data
    diagnosis: "Healthy",
  },
  {
    id: 2,
    name: "Ryan Johnson",
    bloodPressure: [140, 145, 138, 150, 148],
    diagnosis: "High Blood Pressure",
  },
  {
    id: 3,
    name: "Jesica Tylor",
    bloodPressure: [110, 115, 118, 120, 115],
    diagnosis: "Healthy",
  },
  {
    id: 4,
    name: "Jesica Tylor",
    bloodPressure: [110, 115, 118, 120, 115],
    diagnosis: "Healthy",
  },
  {
    id: 5,
    name: "Jesica Tylor",
    bloodPressure: [110, 115, 118, 120, 115],
    diagnosis: "Healthy",
  },
  {
    id: 6,
    name: "Jesica Tylor",
    bloodPressure: [110, 115, 118, 120, 115],
    diagnosis: "Healthy",
  },
  {
    id: 7,
    name: "Jesica Tylor",
    bloodPressure: [110, 115, 118, 120, 115],
    diagnosis: "Healthy",
  },
  {
    id: 8,
    name: "Jesica Tylor",
    bloodPressure: [110, 115, 118, 120, 115],
    diagnosis: "Healthy",
  },
  {
    id: 9,
    name: "Jesica Tylor",
    bloodPressure: [110, 115, 118, 120, 115],
    diagnosis: "Healthy",
  },
  {
    id: 10,
    name: "Jesica Tylor",
    bloodPressure: [110, 115, 118, 120, 115],
    diagnosis: "Healthy",
  },
  // Add more patients as needed
];

// Function to update patient information and graph
function updatePatientInfo(patient) {
  const patientInfoDiv = document.getElementById("patient-info");
  patientInfoDiv.innerHTML = `
    <h2>${patient.name}</h2>
    <p>Diagnosis: ${patient.diagnosis}</p>
  `;

  // Update the chart with the patient's blood pressure data
  updateChart(patient.bloodPressure);
}

// Function to update the Chart.js chart
function updateChart(data) {
  const ctx = document.getElementById("blood-pressure-chart").getContext("2d");

  if (window.bloodPressureChart) {
    window.bloodPressureChart.destroy(); // Destroy the previous chart instance
  }

  window.bloodPressureChart = new Chart(ctx, {
    type: "line", // Type of chart
    data: {
      labels: ["2018", "2019", "2020", "2021", "2022"], // Example years
      datasets: [
        {
          label: "Blood Pressure",
          data: data,
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Blood Pressure (mmHg)",
          },
        },
      },
    },
  });
}
// Event listener for patient list clicks
document.querySelectorAll(".patient-list li").forEach((item) => {
  item.addEventListener("click", () => {
    const patientId = item.getAttribute("data-id");
    const patient = patients.find((p) => p.id == patientId);
    if (patient) {
      updatePatientInfo(patient);
    }
  });
});
