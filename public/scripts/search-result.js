const resPatients = document.querySelectorAll("main .info")

for(let resPatient of resPatients) {
    resPatient.addEventListener("click", () => {
      window.location.href = "/patient"
    })
}


