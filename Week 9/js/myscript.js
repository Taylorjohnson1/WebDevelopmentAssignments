function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }

    let id = document.getElementById("id").value;
    let text;
    if (isNaN(id) || id < 1000 || id > 9999) {
      alert("Must select ID within range");
      return false;
    }

    let date = document.forms["myForm"]["date"].value;
    if (date == "") {
      alert("Must select a date");
      return false;
    }

    let occupation = document.forms["myForm"]["occupation"].value;
    if (occupation == "") {
      alert("Occupation must be fill out");
      return false;
    }

    let grade = document.forms["myForm"]["gradeLevel"].value;
    if (grade == "") {
      alert("Must select your grade level");
      return false;
    }

    let major = document.forms["myForm"]["major"].value;
    if (major == "") {
      alert("Must choose a major");
      return false;
    }

    let favoriteFood = document.forms["myForm"]["select1"].value;
    if (favoriteFood == "") {
      alert("Must choose a favorite food");
      return false;
    }

    let hair = document.forms["myForm"]["hair"].value;
    if (hair == "") {
      alert("Must choose your hair color");
      return false;
    }

    let hobbies = document.querySelectorAll("input[type='checkbox']")
    let numberOfHobbies = 0;
    hobbies.forEach((hobby) => {
      if (hobby.checked) numberOfHobbies++
    })
    if (numberOfHobbies < 2) {
      alert("Must choose 2 hobbies")
      return false
    }

    let animal = document.forms["myForm"]["animal"].value;
    if (animal == "") {
      alert("Must choose your favorite animal");
      return false;
    }

    console.log("Name:", name)
    console.log("ID:", id)
    console.log("Date:", date)
    console.log("Occupation:", occupation)
    console.log("Grade:", grade)
    console.log("Major:", major)
    console.log("Favorite Food:", favoriteFood)
    console.log("Hair Color:", hair)
    console.log("Hobbies:", hobbies)
    console.log("Animals:", animal)
  }
 

