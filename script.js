// year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// prevent double-submits and give quick UX with recovery if redirect fails
window.lockSubmit = function(form){
  const btn = form.querySelector('button[type="submit"]');
  if(btn.dataset.locked) return false;
  btn.dataset.locked = '1';
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Safety: if redirect fails for any reason, re-enable after 8s
  setTimeout(() => {
    if (!document.hidden) {
      btn.textContent = 'Join the Waitlist';
      btn.disabled = false;
      delete btn.dataset.locked;
    }
  }, 8000);

  return true;
};
