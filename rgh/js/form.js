const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(form);

    // Optionally, you can convert FormData to a JSON object
    const formDataJSON = {};
    formData.forEach((value, key) => {
        formDataJSON[key] = value;
    });

    // Send the data to the backend
    // sendDataToBackend(formDataJSON);
});
