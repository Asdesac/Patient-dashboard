// script.js

// const { CiTextAlignCenter } = require("react-icons/ci");

async function fetchPatientData() {
  try {
    const response = await fetch("./data.json"); // Corrected path to JSON
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    populatePatientList(data.patients);
  } catch (error) {
    console.error("Error fetching patient data:", error);
  }
}

// const list = document.getElementsByTagName("li");
// list.style.listStyleType = "none";

// Function to populate the patient list in the sidebar
function populatePatientList(patients) {
  const patientList = document.getElementById("patient-list");
  patientList.innerHTML = patients
    .map(
      (patient) => `
    
          <li data-id="${patient.id}">
              <img src="${patient.img}" class="img-id" alt="${patient.name}" />
              <p class="info">${patient.name}, ${patient.sex || ""} ${
        patient.age || ""
      }</p>
              <img src="./material/dot.svg" class="icon-id" alt="show more" />
          </li> 
      `
    )
    .join("");
  // Add event listeners to each patient item
  // patientList.querySelectorAll("li").style.listStyleType = "none";
  patientList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      const patientId = item.getAttribute("data-id");
      const patient = patients.find((p) => p.id == patientId);
      if (patient) {
        displayPatientInfo(patient);
      }
    });
  });
}

// Function to display patient information on the right side
function displayPatientInfo(patient) {
  const patientInfo = document.getElementById("output");
  patientInfo.style.alignItems = "center";
  patientInfo.style.textAlign = "Center";
  patientInfo.innerHTML = `
      <div class="info-display">
          <img src="${patient.img}" id="img" alt="${patient.name}" />
          <h3 id="name">${patient.name}</h3>
          <div>
              <p><img class="info-icon" src="./material/schedule.svg" alt="" /> <b>Date of Birth</b>
                  <p id="birth">${patient.birth}</p>
              </p>
          </div>
          <div>
              <p><img class="info-icon" src="./material/PhoneIcon.svg" alt="Phone Icon"> <b>Contact Info</b>
                  <b id="contact">${patient.contact}</b>
              </p>
          </div>
          <div>
              <p><img src="./material/PhoneIcon.svg" class="info-icon" alt=""> <b>Emergency Contact</b>
                  <p class="emergency">${patient.emergency}</p>
              </p>
          </div>
          <div>
              <p><img src="./material/InsuranceIcon.svg" class="info-icon" alt="Insurance Icon"> <b>Insurance Provider</b>
                  <p id="insurance">${patient.insurance}</p>
              </p>
          </div>
      </div>
  `;
}

// Call the fetch function on page load
document.addEventListener("DOMContentLoaded", fetchPatientData);
