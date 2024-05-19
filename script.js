function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  if (html.classList.contains('light')) {
    document.querySelector(`#profile img`).setAttribute('src', './assets/avatar-light.png')
    document.querySelector(`#profile img`).setAttribute('alt', 'Um cara de oculos escuros')
  } else {
    document.querySelector(`#profile img`).setAttribute('src', './assets/avatar.png')
    document.querySelector(`#profile img`).setAttribute('alt', 'Class Roleplay the best server')

  }

}
