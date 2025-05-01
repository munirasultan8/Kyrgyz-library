// auth.js – front-end auth helper for Kyrgyz Library site
// Endpoint root of backend API
const API_ROOT = 'https://asknau-backend-20d79e207a54.herokuapp.com';

/* ------------------------------------------------------------
   TOKEN HANDLING
------------------------------------------------------------ */
function saveToken(token) {
  localStorage.setItem('authToken', token);
}
function getToken() {
  return localStorage.getItem('authToken');
}
function clearToken() {
  localStorage.removeItem('authToken');
}

/* ------------------------------------------------------------
   UI HELPERS
------------------------------------------------------------ */
function createProfileChip(name = 'User', avatar) {
  // We use a <button> so Bootstrap dropdown works naturally
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'profile-chip dropdown-toggle';
  chip.id = 'profileChip';
  chip.setAttribute('data-bs-toggle', 'dropdown');
  chip.setAttribute('aria-expanded', 'false');
  chip.innerHTML = `
    <img src="${avatar || 'logo.png'}" alt class="chip-avatar"/>
    <span class="chip-name">${name}</span>
  `;
  return chip;
}

function injectProfileChip(user) {
  document.querySelectorAll('#authDesk, #authMob').forEach(btn => {
    // Build dropdown wrapper
    const dropdownWrapper = document.createElement('div');
    dropdownWrapper.className = 'dropdown';

    // Create chip button
    const chipBtn = createProfileChip(user.full_name, user.avatar_url);

    // Preserve any sizing/utility classes from original button
    btn.classList.forEach(cls => chipBtn.classList.add(cls));

    // Dropdown menu
    const menu = document.createElement('ul');
    menu.className = 'dropdown-menu dropdown-menu-end';
    menu.innerHTML = `
      <li><a class="dropdown-item" href="settings.html"><i class="fas fa-cog me-2"></i>Settings</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><button class="dropdown-item" type="button" id="logoutItem"><i class="fas fa-sign-out-alt me-2"></i>Log Out</button></li>
    `;

    // Assemble dropdown
    dropdownWrapper.appendChild(chipBtn);
    dropdownWrapper.appendChild(menu);

    // Replace original login button with the dropdown
    btn.parentNode.replaceChild(dropdownWrapper, btn);

    // Wire up logout action
    menu.querySelector('#logoutItem').addEventListener('click', () => logout());

    // Optional: rotate caret icon on show / hide
    chipBtn.addEventListener('shown.bs.dropdown', () => chipBtn.classList.add('open'));
    chipBtn.addEventListener('hidden.bs.dropdown', () => chipBtn.classList.remove('open'));
  });
}

function renderLoggedOut() {
  // For simplicity, reload page to restore original markup
  location.reload();
}

/* ------------------------------------------------------------
   API CALLS
------------------------------------------------------------ */
async function apiRequest(path, options = {}) {
  const headers = options.headers || {};
  if (getToken()) headers['Authorization'] = `Bearer ${getToken()}`;
  const res = await fetch(`${API_ROOT}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

async function loginRequest(email, password) {
  return apiRequest('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
}

async function registerRequest(payload) {
  return apiRequest('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}

async function fetchProfile() {
  if (!getToken()) return null;
  try {
    return await apiRequest('/profile');
  } catch (e) {
    clearToken();
    return null;
  }
}

function logout() {
  clearToken();
  renderLoggedOut();
}

/* ------------------------------------------------------------
   BOOTSTRAP ON PAGE LOAD
------------------------------------------------------------ */
(async function () {
  const user = await fetchProfile();
  if (user) injectProfileChip(user);
})();

/* ------------------------------------------------------------
   PUBLIC EXPORTS (attach to window for inline listeners)
------------------------------------------------------------ */
window.AuthAPI = {
  loginRequest,
  registerRequest,
  injectProfileChip,
  saveToken,
  logout
}; 