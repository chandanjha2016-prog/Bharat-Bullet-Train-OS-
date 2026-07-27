
// Login System
const users = { driver: "1234", tt: "1234", admin: "1234" };
function login() {
  let u = document.getElementById('username').value.toLowerCase();
  let p = document.getElementById('password').value;
  if(users[u] === p) {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('osScreen').classList.remove('hidden');
    document.getElementById('userRole').innerText = u;
  } else {
    document.getElementById('loginError').innerText = "Galat Username ya Password!";
  }
}
function logout() {
  document.getElementById('osScreen').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
}

// Time
function updateTime() {
  document.getElementById('time').innerText = new Date().toLocaleString('hi-IN');
}
setInterval(updateTime, 1000);
updateTime();

// Window Control
function openApp(app) {
  document.getElementById('window').classList.remove('hidden');
  let title = document.getElementById('window-title');
  let body = document.getElementById('window-body');

  if(app === 'dashboard') {
    title.innerText = 'Dashboard';
    body.innerHTML = `
      <h2>🚄 Train Status</h2>
      <p>Route: Mumbai → Ahmedabad</p>
      <p>Status: <b style="color:green">On Time</b></p>
      <div class="progress"><div class="progress-bar" style="width:60%">60% Complete</div></div>
    `;
  }

  if(app === 'speed') {
    title.innerText = 'Speed Control Panel';
    body.innerHTML = `
      <h2>Current Speed: <span id="speed">320</span> km/h</h2>
      <button onclick="changeSpeed(20)">Accelerate +20</button>
      <button onclick="changeSpeed(-20)">Brake -20</button>
      <button onclick="changeSpeed(0)">Auto Pilot</button>
    `;
  }

  if(app === 'map') {
    title.innerText = 'Live Route Map';
    body.innerHTML = `
      <h2>Mumbai → Ahmedabad Bullet Corridor</h2>
      <p><b>Current:</b> Surat</p>
      <p><b>Next:</b> Vadodara - 15 min</p>
      <p><b>Final:</b> Ahmedabad - 1 hr 20 min</p>
      <div style="background:#cce5ff; height:250px; border-radius:10px; display:flex; align-items:center; justify-content:center;">
        🗺️ [Live Map Simulation]
      </div>
    `;
  }

  if(app === 'ticket') {
    title.innerText = 'Ticket Booking System';
    body.innerHTML = `
      <h2>Book Your Ticket</h2>
      <select id="from"><option>Mumbai</option><option>Surat</option><option>Vadodara</option></select>
      <select id="to"><option>Ahmedabad</option><option>Vadodara</option><option>Surat</option></select>
      <input type="date" id="date">
      <button onclick="bookTicket()">Book & Pay ₹2500</button>
      <p id="ticketMsg"></p>
    `;
  }

  if(app === 'announce') {
    title.innerText = 'AI Announcement System';
    body.innerHTML = `
      <h2>📢 Announcement</h2>
      <input id="annText" placeholder="Type announcement in Hindi">
      <button onclick="speak(document.getElementById('annText').value)">Speak Now</button>
      <button onclick="speak('Dhyan dijiye, hamari train kuch der me agle station par pahunchegi')">Default Announcement</button>
    `;
  }

  if(app === 'settings') {
    title.innerText = 'Settings';
    body.innerHTML = `
      <h2>⚙️ OS Settings</h2>
      <p>Theme: Orange & Blue</p>
      <p>Language: Hindi + English</p>
      <button onclick="alert('Feature Coming Soon')">Change Theme</button>
    `;
  }
}

function closeApp() {
  document.getElementById('window').classList.add('hidden');
}

// Speed Logic
let currentSpeed = 320;
let autoPilot = false;
function changeSpeed(val) {
  if(val === 0) { autoPilot = true; alert("Auto Pilot ON. Speed locked at 320 km/h"); return; }
  currentSpeed += val;
  if(currentSpeed < 0) currentSpeed = 0;
  if(currentSpeed > 350) currentSpeed = 350;
  document.getElementById('speed').innerText = currentSpeed;
}

// Ticket
function bookTicket() {
  let f = document.getElementById('from').value;
  let t = document.getElementById('to').value;
  let d = document.getElementById('date').value;
  document.getElementById('ticketMsg').innerHTML = `✅ Ticket Confirmed!<br>${f} to ${t} on ${d}<br>PNR: BBT${Math.floor(Math.random()*90000)}`;
}

// Voice
function speak(text) {
  if(!text) return;
  let msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'hi-IN';
  speechSynthesis.speak(msg);
}
