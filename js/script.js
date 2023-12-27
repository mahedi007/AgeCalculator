function calculateAge() {
    // Get the birthdate input value
    var birthdateInput = document.getElementById("birthdate").value || document.getElementById("birthdate2").value;

    // Check if a birthdate is selected
    if (birthdateInput !== "") {
        // Create a Date object for the birthdate
        var birthdate = new Date(birthdateInput);

        // Get the current date
        var currentDate = new Date();

        // Calculate the difference in years and months
        var ageInYears = currentDate.getFullYear() - birthdate.getFullYear();
        var months = currentDate.getMonth() - birthdate.getMonth();
        var days = currentDate.getDate() - birthdate.getDate();

        // Adjust the age if the birthday has not occurred this year
        if (months < 0 || (months === 0 && days < 0)) {
            ageInYears--;
            months = 12 - Math.abs(months);
        }

        // Display the result
        var ageString = ageInYears + " years";
        if (months > 0) {
            ageString += " and " + months + " months";
        }

        document.getElementById("result").innerHTML = "Your age is: " + ageString;

        // Check if the age is greater than 30
        if (ageInYears > 30 && ageInYears <= 40) {
            document.getElementById("result").innerHTML += "<br><div class='special-message-box'>Your Govt. Job Opportunity is Gone!  তুই তো শেষ!!!</div>";
        }
    } else {
        // Display an error message if no birthdate is selected
        document.getElementById("result").innerHTML = "Please enter your birthdate";
    }
}
