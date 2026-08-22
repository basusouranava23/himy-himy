(() => {
  const fpsInput = document.getElementById('fpsInput');
  const frameTimeInput = document.getElementById('frameTimeInput');
  let programmaticChange = false; // Prevent feedback loops

  const updateFromFPS = () => {
    if (programmaticChange) return;
    const fps = parseFloat(fpsInput.value);
    if (isNaN(fps) || fps <= 0) {
      frameTimeInput.value = '';
      return;
    }
    const frameTime = (1000 / fps).toFixed(2);
    programmaticChange = true;
    frameTimeInput.value = frameTime;
    programmaticChange = false;
  };

  const updateFromFrameTime = () => {
    if (programmaticChange) return;
    const frameTime = parseFloat(frameTimeInput.value);
    if (isNaN(frameTime) || frameTime <= 0) {
      fpsInput.value = '';
      return;
    }
    const fps = (1000 / frameTime).toFixed(2);
    programmaticChange = true;
    fpsInput.value = fps;
    programmaticChange = false;
  };

  fpsInput.addEventListener('input', updateFromFPS);
  frameTimeInput.addEventListener('input', updateFromFrameTime);
})();