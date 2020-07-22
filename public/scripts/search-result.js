const resPatients = document.querySelectorAll("main .info")

for(let resPatient of resPatients) {
    resPatient.addEventListener("click", () => {
      const patientId = resPatient.getAttribute("id")
      window.location.href = `patient/${patientId}`
    })
}


