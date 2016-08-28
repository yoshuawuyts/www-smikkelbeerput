const html = require('choo/html')
const raf = window.requestAnimationFrame

module.exports = view

function view () {
  setTimeout(function () {
    const start = Date.now()

    const origiSaturation = '84'
    const origiLighting = 95
    const hue = 157

    ;(function nope () {
      const time = Date.now() - start
      const backoff = time / 60
      const saturation = origiSaturation - (backoff / 3)
      const lighting = origiLighting - (backoff * 1.2)
      const style = `
        height: 100vh;
        background-color: hsla(${hue}, ${saturation}%, ${lighting}%, 1)
      `

      const el = document.querySelector('#main')
      el.setAttribute('style', style)
      if (lighting >= 0) raf(nope)
    })()
  }, 2222)

  return html`
    <section
      id="main"
      style="height: 100vh;"
      class="ph3 ph5-ns pb5 bg-washed-green black-70">
      <section class="flex items-center justify-center flex-column">
        <h1 class="f3 f1-ns f-headline-l b--solid b--black-70 pa3 bw3 bw4-l">
          SMIKKELBEERPUT
        </h1>
        <a href="https://soundcloud.com/smikkelbeerput/tracks">
          <h2 class="f3 f1-ns underline black-70 link">sound:cloud</h2>
        </a>
      </section>
    </section>
  `
}
