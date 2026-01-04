// Simple lightbox for the photos gallery
document.addEventListener('DOMContentLoaded', function(){
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbClose = document.getElementById('lb-close');

  if(!gallery || !lightbox) return;

  function titleFromFilename(name){
    if(!name) return 'Photo';
    const base = name.replace(/\.[^/.]+$/, '');
    const cleaned = base.replace(/[_-]+/g, ' ').trim();
    return cleaned ? cleaned : 'Photo';
  }

  function renderGallery(files){
    if(!Array.isArray(files) || files.length === 0) return;
    // Clear any existing images (in case of fallback markup)
    gallery.innerHTML = '';
    files.forEach(function(file){
      const filename = typeof file === 'string' ? file : (file && file.filename) || (file && file.name) || (file && file.src);
      if(!filename) return;
      const img = document.createElement('img');
      img.src = filename.startsWith('./') || filename.startsWith('/') ? filename : ('./assets/images/' + filename);
      img.alt = titleFromFilename(filename.split('/').pop());
      gallery.appendChild(img);
    });
  }

  async function loadAndRender(){
    // Preferred: generated JS manifest (works even when opened via file://)
    if (Array.isArray(window.SFJ_IMAGE_MANIFEST) && window.SFJ_IMAGE_MANIFEST.length) {
      renderGallery(window.SFJ_IMAGE_MANIFEST);
      return;
    }

    // Fallback: fetch JSON manifest when served over http(s)
    try {
      const res = await fetch('./assets/images/manifest.json', { cache: 'no-store' });
      if(!res.ok) return;
      const files = await res.json();
      renderGallery(files);
    } catch (_) {
      // If this fails (common on file://), keep any existing HTML images.
    }
  }

  // Populate gallery first, then wire up lightbox.
  loadAndRender();

  gallery.addEventListener('click', function(e){
    const t = e.target;
    if(t && t.tagName === 'IMG'){
      lbImg.src = t.src;
      lbImg.alt = t.alt || '';
      lightbox.setAttribute('aria-hidden','false');
    }
  });

  function closeLB(){
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
  }

  lbClose.addEventListener('click', closeLB);
  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox) closeLB();
  });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeLB(); });
});
