// ═══════════════════════════════════════════════════════════
//  patch.js — IgniteStreak by Peerzada Momin
//  Edit THIS file on GitHub for any updates/fixes/features.
//  index.html never needs to change.
//
//  This file runs AFTER the main app loads, so you can:
//    • Override any existing function
//    • Add new functions
//    • Add new CSS styles
//    • Fix bugs
//    • Add new UI elements
//
//  HOW TO ADD CSS:
//    addStyle(` .my-class { color: red; } `);
//
//  HOW TO OVERRIDE A FUNCTION:
//    window.someFunction = function(id) { ...new logic... }
//
//  HOW TO ADD A UI ELEMENT:
//    document.getElementById('habitsGrid').insertAdjacentHTML('beforebegin', '<div>...</div>');
// ═══════════════════════════════════════════════════════════

function addStyle(css) {
  const el = document.createElement('style');
  el.textContent = css;
  document.head.appendChild(el);
}

// ── Active patches go below this line ──
// (empty for now — add your changes here)
