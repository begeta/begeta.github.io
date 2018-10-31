<template>
  <div class="pd-10px">
    <h1>Installation</h1>
    <div>Install begeta to your project.</div>
    <h2>
      <a id="NPM" href="#NPM"><span class="cl-primary">#</span> NPM</a>
    </h2>
    <div>
      <highlight id="hljs" language="bash" :code="codes.installing[0]"></highlight>
      <div class="pd-l-5px f-s-12px cl-777">Or</div>
      <highlight id="hljs" language="bash" :code="codes.installing[1]"></highlight>
    </div>
    <h3>
      <a id="usage" href="#usage">Usage</a>
    </h3>
    <div>
      <highlight id="hljs" language="javascript" :code="codes.usage[0]"></highlight>
      <div class="pd-l-5px f-s-12px cl-777">Or</div>
      <highlight id="hljs" language="html" :code="codes.usage[1]"></highlight>
    </div>
    <h2>
      <a id="CDN" href="#CDN"><span class="cl-primary">#</span> CDN</a>
    </h2>
    <div class="mg-bt-30px">
      <highlight id="hljs" language="html" :code="codes.installing[2]"></highlight>
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
          `yarn add begeta`,
          `<link rel="stylesheet" type="text/css" href="//unpkg.com/begeta/css/begeta.min.css">`
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
