document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form reload

  const form = e.target;

  const data = {
    name: form.name.value,
    mobile: form.mobile.value,
    city: form.city.value,
    state: form.state.value,
    job_type: form.job_type.value,
    comments: form.comments.value
  };

  fetch("https://script.google.com/macros/s/AKfycbx8nzzYNHQIQn4bALim54BbBO7wb6aTmOnM0aKMZkj2f7bP4Ep8rg0RnB8gEbAYBtMO/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((response) => {
      alert("Submitted successfully!");
      form.reset();
    })
    .catch((err) => {
      console.error("Error!", err.message);
      alert("Something went wrong.");
    });
});
