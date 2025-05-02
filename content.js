function getLeetCodeCode() {
    const codeEditor = document.querySelector('.monaco-editor'); // Monaco editor is used on LeetCode
  
    if (!codeEditor) {
      console.log("Code editor not found.");
      return null;
    }
  
    // Monaco stores text inside a lot of <div> elements with "view-lines" class
    const lines = document.querySelectorAll('.view-lines > div');
  
    let code = '';
    lines.forEach(line => {
      code += line.innerText + '\n';
    });
  
    console.log("Captured code:");
    console.log(code);
  
    return code;
  }
  
  // Run this when the page loads
  setTimeout(() => {
    getLeetCodeCode();
  }, 2000); // small delay because page takes time to load
  