import { checkForURL } from './URLChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (checkForURL(formText) === true) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:3000/data', {
            method: 'post',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({url: formText})
        }) .then(res => res.json())
        .then(function(res) {
            document.getElementById('msg').innerHTML = `Server status: ${res.msg}`
            document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`
            document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`
            document.getElementById('subjectivity').innerHTML = `Objective: ${res.subjectivity}`
            document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
        }) 
    }
}

export { handleSubmit }
