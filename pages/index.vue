<template>
  <div class="pd-10px">
    <h1>Get Started</h1>
    <div class="f-left w-100pct pd-t-20px pd-bt-50px">
      <img src="../static/images/logo-atomic.png">
    </div>
    <h2>
      <a id="whatisatomic" href="#whatisatomic"><span class="cl-primary">#</span> What is atomic css ?</a>
    </h2>
    <div class="pd-20px bg-cl-light bd-rd-5px cl-777">
      Atomic CSS is the approach to CSS architecture that favors small, single-purpose classes with names based on visual function.
    </div>
    <h2>
      <a id="whatisbegeta" href="#whatisbegeta"><span class="cl-primary">#</span> What is Begeta ?</a>
    </h2>
    <div class="pd-20px bg-cl-light bd-rd-5px cl-777">
      Begeta is Vegeta from Dragon Ball but pronounce in Thai. He is the husband of Bulma.
      Begeta add atomic css approach to Bulma.
    </div>
    <h2>
      <a id="whybegeta" href="#whybegeta"><span class="cl-primary">#</span> Why do we use Begeta ?</a>
    </h2>
    <div class="pd-20px bg-cl-light bd-rd-5px cl-777">
      Atomic Design details all that goes into creating and maintaining robust design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before. This book introduces a methodology for thinking of our UIs as thoughtful hierarchies, discusses the qualities of effective pattern libraries, and showcases techniques to transform your team's design and development workflow.
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import Highlight from 'vue-highlight-component'

// hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
// hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

export default {
  data() {
    return {
      codes: {
        installing: [
          `npm install begeta --save`,
          `yarn add begeta`
        ],
        usage: [
          `import 'begeta/css/begeta.min.css'`,
          `<link rel="stylesheet" type="text/css" href="node_modules/begeta/css/begeta.min.css">`
        ],
        example: [
          `<div class="f-s-24px f-w-bold pd-20px cl-success">
    Hello <span class="f-s-16px f-w-100 cl-danger">world</span>
</div>`
        ]
      }
    }
  },
  components: {
    Highlight
  }
}
</script>

<style src="highlight.js/styles/github.css"></style>
<style>
a {
  text-decoration: unset;
  color: #000;
}
#hljs .hljs {
  padding: 1.5em !important;
  font-size: 14px !important;
}
.cl-777 {
  color: #777;
}
</style>
