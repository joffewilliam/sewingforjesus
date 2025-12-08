// Web Share API functionality for sharing the mission

document.addEventListener('DOMContentLoaded', function() {
  const shareBtn = document.getElementById('share-btn');
  
  if (shareBtn) {
    // Check if Web Share API is supported
    if (navigator.share) {
      shareBtn.addEventListener('click', async function() {
        try {
          await navigator.share({
            title: 'Sewing For Jesus',
            text: 'Join us in making dresses for children in need around the world. Every stitch spreads God\'s love!',
            url: window.location.href
          });
        } catch (error) {
          // User cancelled or error occurred
          if (error.name !== 'AbortError') {
            console.log('Error sharing:', error);
            fallbackShare();
          }
        }
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      shareBtn.addEventListener('click', fallbackShare);
    }
  }
});

function fallbackShare() {
  // Copy link to clipboard as fallback
  const url = window.location.href;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function() {
      showShareMessage('Link copied to clipboard!');
    }).catch(function() {
      showShareMessage('Unable to copy link');
    });
  } else {
    // Last resort fallback - create a temporary input
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showShareMessage('Link copied to clipboard!');
    } catch (err) {
      showShareMessage('Unable to copy link');
    }
    document.body.removeChild(tempInput);
  }
}

function showShareMessage(message) {
  // Create a temporary message element
  const messageEl = document.createElement('div');
  messageEl.textContent = message;
  messageEl.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(111, 43, 90, 0.95);
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 10000;
    font-size: 1rem;
    animation: fadeInOut 2s ease-in-out;
  `;
  
  document.body.appendChild(messageEl);
  
  setTimeout(function() {
    messageEl.remove();
  }, 2000);
}
