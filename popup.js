document.getElementById('analyze-btn').addEventListener('click', async () => {
    const code = document.getElementById('code-input').value.trim();
    if (!code) {
      alert("Please paste some code first!");
      return;
    }
  
    chrome.runtime.sendMessage(
      { action: "analyzeCode", code: code },
      (response) => {
        if (chrome.runtime.lastError) {
          console.error("Runtime Error:", chrome.runtime.lastError); // Log runtime error
          alert("An error occurred while communicating with the background script.");
          return;
        }
  
        // Handle case where response is undefined or does not have a result
        if (!response || !response.result) {
          console.error("No result received:", response);
          alert("No result received from the API.");
          return;
        }
  
        // Display result if received
        document.getElementById('result').innerText = response.result;
      }
    );
  });
  