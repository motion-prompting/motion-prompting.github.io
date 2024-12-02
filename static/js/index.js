document.addEventListener("DOMContentLoaded", () => {
    const lazyVideos = document.querySelectorAll("video.lazy-video");
  
    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          const source = video.querySelector("source");
          if (source && source.dataset.src) {
            source.src = source.dataset.src; // Set the `src` attribute
            video.load(); // Load the video
            video.play(); // Start playing automatically if autoplay is desired
            video.classList.add("loaded"); // Add the loaded class for styling
          }
          observer.unobserve(video); // Stop observing this video
        }
      });
    });
  
    lazyVideos.forEach(video => {
      videoObserver.observe(video);
    });
  });
  