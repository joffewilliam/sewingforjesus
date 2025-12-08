document.addEventListener('DOMContentLoaded', function () {
  const groupUrl = 'https://www.facebook.com/groups/294459951247423';
  const imgSrc = './assets/elements/Join-Group.png';

  document.querySelectorAll('[data-join-group]').forEach(function (placeholder) {
    const a = document.createElement('a');
    a.href = groupUrl;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'join-group-link';

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Join our Facebook Group';
    img.className = 'join-group-img';

    a.appendChild(img);
    placeholder.replaceWith(a);
  });
});
