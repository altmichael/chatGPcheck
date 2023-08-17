document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const contact = {
      name: name,
      email: email
    };

    // Save the contact to a JSON file
    saveContactToJsonFile(contact);

    // Clear the form after submission
    form.reset();
  });

  function saveContactToJsonFile(contact) {
    const jsonContent = JSON.stringify(contact, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });

    // Create a download link for the JSON file
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "contact.json";
    link.textContent = "Download Contact JSON";

    // Append the link to the body and trigger a click event
    document.body.appendChild(link);
    link.click();

    // Remove the link element after the download
    link.remove();

    console.log(`Contact saved: Name - ${contact.name}, Email - ${contact.email}`);
    alert("Contact saved successfully!");
  }
});
