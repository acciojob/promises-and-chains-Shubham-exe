document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  new Promise((resolve, reject) => {
    if (parseInt(age) >= 18) {
      resolve();
    } else {
      reject();
    }
  })
    .then(() => {
      alert("You are eligible to vote.");
    })
    .catch(() => {
      alert("You are not eligible to vote.");
    });
});
