
console.log(" Script executed 11 ");
let lastChecked;

document.addEventListener('DOMContentLoaded', () => {
    console.log(" Script executed 22");

    const checkboxes = document.querySelectorAll('.inbox-class input[type="checkbox"]');
    console.log("checkboxes 11 :", checkboxes);


    function handleCheck(e) {
        console.log("IN handleCheck ", e);

        // Check if they had the shift key down AND check that they are checking it
        let inBetween = false;
        if (e.shiftKey && this.checked) {
        
            // go ahead and do what we please loop over every single checkbox
            checkboxes.forEach(checkbox => {
            console.log("checkbox :", checkbox);

            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }
        
            if (inBetween) {
                checkbox.checked = true;
            }
        });
      }
    
      lastChecked = this;
    }
    

    checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
});






