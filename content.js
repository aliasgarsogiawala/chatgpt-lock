console.log("✅ ChatGPT Password Locker script injected");

function getChatIdFromURL() {
  const match = window.location.pathname.match(/^\/c\/([a-z0-9-]+)/);
  return match ? match[1] : null;
}

function addLockScreen(chatId) {
  if (document.getElementById("lock-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "lock-overlay";
  overlay.innerHTML = `
    <div class="lock-box">
      <h2>This chat is locked 🔒</h2>
      <input type="password" id="unlock-password" placeholder="Enter password" />
      <button id="unlock-btn">Unlock</button>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById("unlock-btn").onclick = () => {
    const inputPass = document.getElementById("unlock-password").value;
    const saved = localStorage.getItem(`chat-lock-${chatId}`);
    if (inputPass === saved) {
      document.getElementById("lock-overlay").remove();
    } else {
      alert("Incorrect password!");
    }
  };
}

function addLockButton(chatId) {
  const nav = document.querySelector("nav");
  const existing = document.getElementById("set-lock-btn");

  if (!nav) return;

  // Remove old button if present
  if (existing) existing.remove();

  const btn = document.createElement("button");
  btn.id = "set-lock-btn";
  btn.textContent = "🔐 Lock Chat";
  btn.style.margin = "10px";
  btn.onclick = () => {
    const pass = prompt("Set a password for this chat:");
    if (pass) {
      localStorage.setItem(`chat-lock-${chatId}`, pass);
      alert("Chat locked! Reload to test it.");
    }
  };
  nav.appendChild(btn);
}

function monitorChats() {
  let lastChatId = "";

  setInterval(() => {
    const chatId = getChatIdFromURL();
    if (chatId && chatId !== lastChatId) {
      lastChatId = chatId;
      console.log("🔒 New chat detected:", chatId);

      (() => {
        const currentId = chatId;
        const saved = localStorage.getItem(`chat-lock-${currentId}`);
        addLockButton(currentId);
        if (saved) addLockScreen(currentId);
      })();
    }
  }, 1000);
}

window.onload = () => {
  monitorChats();
};
