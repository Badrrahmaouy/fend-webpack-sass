import { checkForURL } from './js/URLChecker'
import { handleSubmit } from './js/formHandler'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

export { checkForURL, handleSubmit }

window.addEventListener("load", (e) => {
    // get reference to the form elemet
    const form = document.getElementById("form");
    // Add submit event listener on this form
    form.addEventListener("submit", handleSubmit);
});