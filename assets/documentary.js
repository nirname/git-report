Reveal.initialize({
  center: false,
  dependencies: [
    { src: 'assets/highlight.min.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  ]
});