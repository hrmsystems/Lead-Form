document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = document.getElementById("leadForm");
  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbwjlikA3c1SB2Mtbu5UKEl7iDuhy7H2WSdspsGJztSca9_0ANtnMaQZA4xvfuK3Jt69/exec", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    alert("Form submitted successfully!");
    form.reset();
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Something went wrong.");
  });
});
