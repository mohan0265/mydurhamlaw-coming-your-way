// year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// prevent double-submits and give quick UX
window.lockSubmit = function(form){
  const btn = form.querySelector('button[type="submit"]');
  if(btn.dataset.locked) return false;
  btn.dataset.locked = '1';
  btn.textContent = 'Sending...';
  btn.disabled = true;
  return true;
};
