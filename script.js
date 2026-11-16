
const generateButton = document.getElementById("generate");
const promptInput = document.getElementById("prompt");
const statusText = document.getElementById("status");

generateButton.addEventListener("click", function () {
  const prompt = promptInput.value.trim();

  if (prompt === "") {
    statusText.textContent = "Please describe your video first!";
    return;
  }

  statusText.textContent =
    "Your video prompt is ready! AI generation will be connected soon.";

  console.log("Video prompt:", prompt);
  console.log("Duration:",
    document.getElementById("duration").value
  );
  console.log("Aspect ratio:",
    document.getElementById("ratio").value
  );
});
