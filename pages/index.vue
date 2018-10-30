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
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
      content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
      and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
      sometimes by accident, sometimes on purpose (injected humour and the like).
    </div>
    <h2>
      <a id="installing" href="#installing"><span class="cl-primary">#</span> Installing</a>
    </h2>
    <div>
      <highlight id="hljs" language="bash" :code="codes.installing[0]"></highlight>
      <div class="pd-l-5px f-s-12px cl-777">Or</div>
      <highlight id="hljs" language="bash" :code="codes.installing[1]"></highlight>
    </div>
    <h2>
      <a id="usage" href="#usage"><span class="cl-primary">#</span> Usage</a>
    </h2>
    <div>
      <highlight id="hljs" language="javascript" :code="codes.usage[0]"></highlight>
      <div class="pd-l-5px f-s-12px cl-777">Or</div>
      <highlight id="hljs" language="html" :code="codes.usage[1]"></highlight>
    </div>
    <h2>
      <a id="example" href="#example"><span class="cl-primary">#</span> Example</a>
    </h2>
    <div class="mg-bt-30px">
      <highlight id="hljs" language="html" :code="codes.example[0]"></highlight>
      <div class="pd-l-5px f-s-12px cl-777">Result</div>
      <div class="f-s-24px f-w-bold pd-20px cl-success">
        Hello <span class="f-s-16px f-w-100 cl-danger">world</span>
      </div>
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
          `<link rel="stylesheet" type="text/css" href="node_modules/begeta/css/begeta.min.css">
// With unpkg.com
<link rel="stylesheet" type="text/css" href="//unpkg.com/begeta/css/begeta.min.css">`,
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
