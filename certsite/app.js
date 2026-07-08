(function () {
  "use strict";

  function fmtMeta(item) {
    var parts = [];
    if (item.issuer) parts.push('<span class="issuer">' + item.issuer + '</span>');
    parts.push('<span class="date">' + item.dateLabel + '</span>');
    if (item.hours) parts.push('<span>' + item.hours + '</span>');
    if (item.level) parts.push('<span>' + item.level + '</span>');
    if (item.expires) parts.push('<span>expires ' + item.expires + '</span>');
    return parts.join('<span class="sep">&middot;</span>');
  }

  function makeRow(item) {
    var row = document.createElement("article");
    row.className = "row";
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.setAttribute("aria-label", "View certificate: " + item.title);

    var thumb = document.createElement("div");
    thumb.className = "row-thumb";
    thumb.style.backgroundImage = "url('" + item.img + "')";

    var body = document.createElement("div");
    body.className = "row-body";
    var h4 = document.createElement("h4");
    h4.textContent = item.title;
    var meta = document.createElement("div");
    meta.className = "row-meta mono";
    meta.innerHTML = fmtMeta(item);
    if (item.verifyUrl) {
      var verifyLink = document.createElement("a");
      verifyLink.href = item.verifyUrl;
      verifyLink.target = "_blank";
      verifyLink.rel = "noopener";
      verifyLink.className = "verify";
      verifyLink.textContent = "verify ↗";
      verifyLink.addEventListener("click", function (e) { e.stopPropagation(); });
      var sep = document.createElement("span");
      sep.className = "sep";
      sep.textContent = "·";
      meta.appendChild(sep);
      meta.appendChild(verifyLink);
    }
    body.appendChild(h4);
    body.appendChild(meta);

    var action = document.createElement("div");
    action.className = "row-action mono";
    action.textContent = "view →";

    row.appendChild(thumb);
    row.appendChild(body);
    row.appendChild(action);

    function open() { openLightbox(item); }
    row.addEventListener("click", open);
    row.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });

    return row;
  }

  function renderList(containerId, items) {
    var container = document.getElementById(containerId);
    if (!container || !items) return;
    items.forEach(function (item) {
      container.appendChild(makeRow(item));
    });
  }

  // ---- Lightbox ----
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lastFocused = null;

  function openLightbox(item) {
    lastFocused = document.activeElement;
    lightboxImg.src = item.img;
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = item.issuer ? item.issuer + " · " + item.dateLabel : item.dateLabel;
    lightbox.classList.add("open");
    lightboxClose.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === "Escape") closeLightbox();
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  // ---- Render everything from REGISTRY ----
  document.addEventListener("DOMContentLoaded", function () {
    var R = REGISTRY;

    renderList("rows-sap", R.certifications.sap);
    renderList("rows-ms", R.certifications.microsoft);
    renderList("rows-journeys", R.learningJourneys);

    var countSap = document.getElementById("count-sap");
    var countMs = document.getElementById("count-ms");
    var countJourneys = document.getElementById("count-journeys");

    if (countSap) countSap.textContent = R.certifications.sap.length;
    if (countMs) countMs.textContent = R.certifications.microsoft.length;
    if (countJourneys) countJourneys.textContent = R.learningJourneys.length;

    var totalCerts = R.certifications.sap.length + R.certifications.microsoft.length;
    var readout = document.getElementById("readout");
    if (readout) {
      readout.innerHTML =
        "<strong>" + totalCerts + "</strong> certifications" +
        '<span class="sep">&middot;</span><strong>' + R.learningJourneys.length + "</strong> learning journeys";
    }

    var updated = new Date(R.meta.updated);
    var lastVerified = document.getElementById("lastVerified");
    if (lastVerified) {
      lastVerified.textContent = "VERIFIED " + updated.toLocaleDateString("en-GB", {
        day: "numeric", month: "short", year: "numeric"
      }).toUpperCase();
    }
  });
})();
