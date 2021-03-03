import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
   checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=21040,it&appid=6ad6f4e238882457dcb737040cf28fcb')
    .then(res => res.json())
    .then(function(res) {
        // console.log(res.weather[0].main);
        document.getElementById('results').innerHTML = res.weather[0].main
    })
}

export { handleSubmit }
