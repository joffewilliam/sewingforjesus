// Set hero background image - using the children hearts image for homepage
(function() {
  // Use specific hero image for homepage full-screen hero
  const heroFullscreen = document.querySelector('.hero-fullscreen');
  if (heroFullscreen) {
    // Already set in CSS, no JS needed for full-screen hero
    return;
  }
  
  // For legacy hero sections on other pages, use random image
  const hero = document.querySelector('.hero');
  if (hero) {
    const images = [
      '518302209_10238434836594307_4264779771153918553_n.jpg',
      '518962440_2247097812390827_5580122172810319253_n.jpg',
      '521337417_10238496518256310_6689175363237861980_n.jpg',
      '536278680_10239090365302115_1054224870307042759_n.jpg',
      '555954949_807011335038571_4437543850241334852_n.jpg',
      '580739905_10240102392242156_8097192238774443159_n.jpg',
      '6705f413-f1ed-4980-90e7-3222e8381e39.jpg',
      '6b4a5ddb-dce1-4a4e-9f07-38bd27a015bb.jpg',
      'bd2b975a-8ca7-40fd-9b86-56d843df87e3.jpg',
      'c828e07d-68f3-4b81-a976-e83b0fb5e2af.jpg',
      'e6708206-a7e8-48a2-bc40-597b0b2d38cd.jpg'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imageUrl = `url('./assets/images/${randomImage}')`;
    hero.style.setProperty('--hero-bg-image', imageUrl);
  }
})();
