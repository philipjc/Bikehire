
export default function bootStrapLink() {
  let head = document.head;
  let bootLink = document.createElement('link');
  bootLink.rel = 'stylesheet';
  bootLink.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
  bootLink.crossorigin = 'anonymous';
  head.appendChild(bootLink);
}
