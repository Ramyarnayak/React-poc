const loadScript = (src, done) => {
  const js = document.createElement('script');
  js.src = src;
  js.onload = () => done();
  js.onerror = () => done(new Error('Failed to load the script: ', src));
  document.head.appendChild(js);
};

export default loadScript;
