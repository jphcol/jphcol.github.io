function handleForm () {
    const nameForm = document.getElementById('formName').value;
    const rsvpFunction = () => {
      if(document.getElementById('rsvpAttending').checked == true) {
        return 'Attending';
      } else {
        return 'Not Attending';
      }
    };
    const rsvp = rsvpFunction();
    const firstCourse = document.getElementById('firstCourse').value;
    const mainCourse = document.getElementById('mainCourse').value;
    const dessertCourse = document.getElementById('dessertCourse').value;
    const allergies = document.getElementById('allergies').value;
    const message = document.getElementById('message').value;
    const Http = new XMLHttpRequest();
    const url='https://6sxnidgy4j.execute-api.eu-west-2.amazonaws.com/Production';
    Http.open("POST", url);
    Http.setRequestHeader('x-api-key', 'ddAqtAo0KzQilzliB0s76t1m8rtNM3c5pBAD6ana');
    Http.setRequestHeader('Content-Type', 'application/json');
    Http.send(
        JSON.stringify({
            "Guest_Number" : 160622,
            "Guest_Name" : nameForm,
            "RSVP" : rsvp,
            "FIRST" : firstCourse,
            "MAIN" : mainCourse,
            "DESSERT" : dessertCourse,
            "ALLERGIES" : allergies,
            "MESSAGE" : message
            })
    );
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    };
    if(alert('Thanks ' + nameForm)){}
    else    window.location.reload(); 
    };
