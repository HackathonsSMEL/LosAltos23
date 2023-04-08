// JavaScript
const applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", applyChanges);


function applyChanges() {
 const options = document.getElementsByName("formatting-option");
 options.forEach(option => {
   const value = option.value;
   const isChecked = option.checked;
   const colorInput = document.querySelector(`input[data-formatting-option="${value}"]`);
   if (isChecked) {
     // Apply changes for the checked option
     const color = colorInput.value;
     console.log(`Apply ${value} with color ${color}`);
   } else {
     // Remove changes for the unchecked option
     console.log(`Remove ${value} changes`);
   }
 });
}
