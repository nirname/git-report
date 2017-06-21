Reveal.initialize({
  dependencies: [
    { src: 'assets/highlight.min.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  ]
});