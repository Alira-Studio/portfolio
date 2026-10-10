(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Rotating "I build ___" word
  var words = [
    "marketing funnels",
    "viral TikToks",
    "paid campaigns",
    "SEO that ranks",
    "booking apps",
    "communities",
    "employer brands"
  ];
  var wordEl = document.getElementById("rotating-word");
  if (wordEl && !reduceMotion) {
    var wordIdx = 0;
    setInterval(function () {
      wordIdx = (wordIdx + 1) % words.length;
      wordEl.textContent = words[wordIdx];
    }, 2200);
  }

  // Formal / casual headline toggle
  var toggleBtn = document.getElementById("voice-toggle");
  var toggleLabel = document.getElementById("voice-toggle-label");
  var formalHeadline = document.getElementById("headline-formal");
  var casualHeadline = document.getElementById("headline-casual");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var casual = toggleBtn.getAttribute("aria-pressed") === "true";
      casual = !casual;
      toggleBtn.setAttribute("aria-pressed", String(casual));
      formalHeadline.hidden = casual;
      casualHeadline.hidden = !casual;
      toggleLabel.textContent = casual ? "back to the formal version" : "psst — the casual version";
    });
  }

  // Copy email button
  var copyBtn = document.getElementById("copy-email");
  var copyLabel = document.getElementById("copy-email-label");
  if (copyBtn) {
    var copyTimer;
    copyBtn.addEventListener("click", function () {
      try {
        navigator.clipboard && navigator.clipboard.writeText("hang.nguyen.srp@gmail.com");
      } catch (e) {}
      copyLabel.textContent = "Copied";
      clearTimeout(copyTimer);
      copyTimer = setTimeout(function () {
        copyLabel.textContent = "Copy email";
      }, 1800);
    });
  }

  // Metrics marquee (built in JS so the list only lives in one place)
  var metrics = [
    { value: "300+", label: "students in a year", where: "Alira" },
    { value: "3", label: "studios opened", where: "Alira" },
    { value: "20+", label: "keywords in the top 10", where: "Golden Owl" },
    { value: "1B+ ₫", label: "monthly ad budgets run", where: "Marketo" },
    { value: "50,000", label: "group members in a month", where: "Marketo" },
    { value: "100M ₫", label: "from PR bookings", where: "Marketo" },
    { value: "3–5", label: "organic leads a month, no ads", where: "Spartan" },
    { value: "110,000", label: "page likes", where: "Ba Con Sói" },
    { value: "1,500", label: "email sign-ups", where: "tracnghiemtinhcach.vn" },
    { value: "50M ₫", label: "forum income", where: "Traderhub" }
  ];
  var track = document.getElementById("metrics-track");
  if (track) {
    var liveIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>Live';
    var html = "";
    metrics.concat(metrics).forEach(function (m, i) {
      html +=
        '<div class="metric-item"' + (i >= metrics.length ? ' aria-hidden="true"' : '') + '>' +
          '<span class="metric-value">' + m.value + '</span>' +
          '<span class="metric-label">' + m.label + ' · ' + m.where + '</span>' +
          '<span class="metric-live">' + liveIcon + '</span>' +
        '</div>';
    });
    track.innerHTML = html;
  }
})();
