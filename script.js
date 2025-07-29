document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = document.getElementById("leadForm");
  const formData = {
    name: form.name.value,
    mobile: form.mobile.value,
    city: form.city.value,
    state: form.state.value,
    job_type: form.job_type.value,
    comments: form.comments.value
  };

  fetch("https://script.google.com/macros/s/AKfycbwjlikA3c1SB2Mtbu5UKEl7iDuhy7H2WSdspsGJztSca9_0ANtnMaQZA4xvfuK3Jt69/exec", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(result => {
    alert("Form submitted successfully!");
    form.reset();
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Something went wrong.");
  });
});
