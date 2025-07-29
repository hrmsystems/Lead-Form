document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    job_type: document.getElementById("job_type").value,
    comments: document.getElementById("comments").value,
  };

  fetch("https://script.google.com/macros/s/AKfycbx8nzzYNHQIQn4bALim54BbBO7wb6aTmOnM0aKMZkj2f7bP4Ep8rg0RnB8gEbAYBtMO/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(result => {
    if (result.result === "success") {
      alert("Form submitted successfully!");
      document.getElementById("leadForm").reset(); // clear form
    } else {
      alert("Something went wrong: " + result.message);
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Something went wrong while submitting the form.");
  });
});
