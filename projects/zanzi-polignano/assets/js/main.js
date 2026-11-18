/* ==========================================================================
   Zanzi — interazioni
   ========================================================================== */
(function () {
  "use strict";

  var DATA = window.ZANZI || {};
  var doc = document;
  var root = doc.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = "it";

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function ui(key) { return (DATA.ui && DATA.ui[lang] && DATA.ui[lang][key]) || key; }
  function storageGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------------------------------------------------------- i18n */
  var original = { title: doc.title, description: "" };
  var metaDesc = $('meta[name="description"]');
  if (metaDesc) original.description = metaDesc.getAttribute("content");

  function applyLanguage(next) {
    lang = next === "en" ? "en" : "it";
    var en = DATA.en || {};
    root.setAttribute("lang", lang);

    $$("[data-i18n]").forEach(function (el) {
      if (el.dataset.itHtml === undefined) el.dataset.itHtml = el.innerHTML;
      var key = el.getAttribute("data-i18n");
      el.innerHTML = lang === "en" && en[key] !== undefined ? en[key] : el.dataset.itHtml;
    });

    $$("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0].trim();
        var key = (parts[1] || "").trim();
        var store = "it" + attr.replace(/(^|-)([a-z])/g, function (_, __, c) { return c.toUpperCase(); });
        if (el.dataset[store] === undefined) el.dataset[store] = el.getAttribute(attr) || "";
        el.setAttribute(attr, lang === "en" && en[key] !== undefined ? en[key] : el.dataset[store]);
      });
    });

    doc.title = lang === "en" && en._title ? en._title : original.title;
    if (metaDesc) metaDesc.setAttribute("content", lang === "en" && en._description ? en._description : original.description);

    $$(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    storageSet("zanzi-lang", lang);
    renderMenu();
    updateStatus();
  }

  function initialLanguage() {
    var param = new URLSearchParams(window.location.search).get("lang");
    if (param === "en" || param === "it") return param;
    var saved = storageGet("zanzi-lang");
    if (saved === "en" || saved === "it") return saved;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "it";
    return /^it\b/i.test(nav) ? "it" : "en";
  }

  $$(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () {
      applyLanguage(b.getAttribute("data-lang"));
      var url = new URL(window.location.href);
      if (lang === "en") url.searchParams.set("lang", "en"); else url.searchParams.delete("lang");
      window.history.replaceState(null, "", url);
    });
  });

  /* ---------------------------------------------------------------- Menu */
  var activeTab = 0;
  function renderMenu() {
    var tabsEl = $("[data-menu-tabs]");
    var panelsEl = $("[data-menu-panels]");
    if (!tabsEl || !panelsEl || !DATA.menu) return;

    tabsEl.innerHTML = DATA.menu.map(function (sec, i) {
      var selected = i === activeTab;
      return '<button class="menu-tab" type="button" role="tab" id="tab-' + sec.id + '" aria-controls="panel-' + sec.id +
        '" aria-selected="' + selected + '" tabindex="' + (selected ? "0" : "-1") + '">' + escapeHtml(sec[lang]) + "</button>";
    }).join("");

    panelsEl.innerHTML = DATA.menu.map(function (sec, i) {
      var items = sec.items.map(function (it, j) {
        var t = it[lang] || it.it;
        var badge = it.badge ? '<span class="badge">' + escapeHtml(it.badge[lang] || it.badge.it) + "</span>" : "";
        var price = it.price ? '<span class="leader" aria-hidden="true"></span><span class="price">' + escapeHtml(it.price) + "</span>" : "";
        return '<li class="menu-item" style="animation-delay:' + (j * 40) + 'ms"><div class="menu-item-head"><h4>' +
          escapeHtml(t[0]) + badge + "</h4>" + price + "</div><p>" + escapeHtml(t[1]) + "</p></li>";
      }).join("");
      return '<div class="menu-panel" role="tabpanel" id="panel-' + sec.id + '" aria-labelledby="tab-' + sec.id + '" tabindex="0"' +
        (i === activeTab ? "" : " hidden") + '><p class="menu-panel-intro">' + escapeHtml(sec.intro[lang]) +
        '</p><ul class="menu-list" role="list">' + items + "</ul></div>";
    }).join("");
  }

  function selectTab(index, focus) {
    var tabs = $$(".menu-tab");
    if (!tabs.length) return;
    activeTab = (index + tabs.length) % tabs.length;
    tabs.forEach(function (t, i) {
      var on = i === activeTab;
      t.setAttribute("aria-selected", String(on));
      t.setAttribute("tabindex", on ? "0" : "-1");
    });
    $$(".menu-panel").forEach(function (p, i) {
      if (i === activeTab) {
        p.hidden = false;
        // restart item animation
        $$(".menu-item", p).forEach(function (li) { li.style.animation = "none"; void li.offsetWidth; li.style.animation = ""; });
      } else {
        p.hidden = true;
      }
    });
    if (focus) {
      tabs[activeTab].focus();
      tabs[activeTab].scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
    }
  }

  var tabsHost = $("[data-menu-tabs]");
  if (tabsHost) {
    tabsHost.addEventListener("click", function (e) {
      var btn = e.target.closest(".menu-tab");
      if (btn) selectTab($$(".menu-tab").indexOf(btn), false);
    });
    tabsHost.addEventListener("keydown", function (e) {
      var keys = { ArrowRight: 1, ArrowLeft: -1, Home: "home", End: "end" };
      if (!(e.key in keys)) return;
      e.preventDefault();
      var n = $$(".menu-tab").length;
      if (e.key === "Home") selectTab(0, true);
      else if (e.key === "End") selectTab(n - 1, true);
      else selectTab(activeTab + keys[e.key], true);
    });
  }

  /* ------------------------------------------------------- Open / closed */
  function toMin(hhmm) { var p = hhmm.split(":"); return (+p[0]) * 60 + (+p[1]); }
  function romeNow() {
    var parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Rome", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date());
    var get = function (t) { return (parts.filter(function (p) { return p.type === t; })[0] || {}).value; };
    var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { day: days[get("weekday")], min: (+get("hour")) * 60 + (+get("minute")) };
  }
  function updateStatus() {
    if (!DATA.hours) return;
    var now = romeNow();
    var today = DATA.hours[now.day] || [];
    var text = "";
    var open = false;

    for (var i = 0; i < today.length; i++) {
      var o = toMin(today[i][0]), c = toMin(today[i][1]);
      if (now.min >= o && now.min < c) {
        open = true;
        text = today[i][1] === "24:00" ? ui("openNowMidnight") : ui("openNow").replace("{t}", today[i][1]);
        break;
      }
    }
    if (!open) {
      var next = today.filter(function (s) { return toMin(s[0]) > now.min; })[0];
      if (next) {
        var hadEarlier = today.some(function (s) { return toMin(s[1]) <= now.min; });
        text = ui(hadEarlier ? "closedReopensAt" : "closedOpensAt").replace("{t}", next[0]);
      } else {
        var tomorrow = DATA.hours[(now.day + 1) % 7] || [];
        text = tomorrow.length ? ui("closedTomorrow").replace("{t}", tomorrow[0][0]) : "";
      }
    }

    $$("[data-status]").forEach(function (el) {
      el.setAttribute("data-open", String(open));
      var t = $("[data-status-text]", el);
      if (t && text) t.textContent = text;
    });

    // Highlight current slot in hours table
    $$(".hours tr[data-slot]").forEach(function (tr) {
      var slot = tr.getAttribute("data-slot") === "lunch" ? today[0] : today[1];
      var isNow = slot && now.min >= toMin(slot[0]) && now.min < toMin(slot[1]);
      tr.classList.toggle("is-today", !!isNow);
      tr.querySelector("th").setAttribute("data-today", isNow ? (lang === "en" ? "now" : "ora") : "");
    });
  }
  window.setInterval(updateStatus, 60 * 1000);

  /* -------------------------------------------------------------- Header */
  var header = $(".site-header");
  var actionBar = $("[data-action-bar]");
  var hero = $(".hero");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 40);
    if (actionBar && hero) actionBar.classList.toggle("is-visible", y > hero.offsetHeight * 0.6);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --------------------------------------------------------- Mobile menu */
  var menu = $("#mobile-menu");
  var openBtn = $(".header-actions .nav-toggle");
  var lastFocus = null;
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle("is-open", open);
    if (openBtn) openBtn.setAttribute("aria-expanded", String(open));
    doc.body.style.overflow = open ? "hidden" : "";
    if (open) {
      lastFocus = doc.activeElement;
      var first = $("[data-close].nav-toggle", menu);
      window.setTimeout(function () { if (first) first.focus(); }, 50);
    } else if (lastFocus) {
      lastFocus.focus();
    }
  }
  if (openBtn) openBtn.addEventListener("click", function () { setMenu(true); });
  $$("[data-close]", menu || doc).forEach(function (el) { el.addEventListener("click", function () { setMenu(false); }); });
  doc.addEventListener("keydown", function (e) {
    if (!menu || !menu.classList.contains("is-open")) return;
    if (e.key === "Escape") { setMenu(false); return; }
    if (e.key === "Tab") {
      var f = $$("a[href], button:not([disabled])", menu);
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* --------------------------------------------------- Active nav links */
  var navLinks = $$(".main-nav a");
  if ("IntersectionObserver" in window && navLinks.length) {
    var sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + en.target.id));
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navLinks.forEach(function (a) {
      var s = $(a.getAttribute("href"));
      if (s) sectionObs.observe(s);
    });
    // Sections without a nav link (hero, gallery, booking…) clear the highlight
    $$("main > section").forEach(function (s) {
      if (!navLinks.some(function (a) { return a.getAttribute("href") === "#" + s.id; })) sectionObs.observe(s);
    });
  }

  /* ------------------------------------------------------------- Reveal */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); revObs.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { revObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ----------------------------------------------------------- Parallax */
  var para = $("[data-parallax]");
  if (para && !reduceMotion) {
    var ticking = false;
    var section = para.closest("section");
    var update = function () {
      var r = section.getBoundingClientRect();
      var vh = window.innerHeight;
      if (r.bottom > 0 && r.top < vh) {
        var progress = (vh - r.top) / (vh + r.height); // 0 → 1
        para.style.transform = "translate3d(0," + (-progress * 12).toFixed(2) + "%,0)";
      }
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ------------------------------------------------------ Booking form */
  var form = $("#booking-form");
  function romeToday() {
    var p = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Rome", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    return p; // YYYY-MM-DD
  }
  if (form) {
    var dateInput = form.elements.date;
    dateInput.min = romeToday();

    $$("[data-prefill-table]").forEach(function (a) {
      a.addEventListener("click", function () {
        var v = a.getAttribute("data-prefill-table");
        var r = form.querySelector('input[name="table"][value="' + v + '"]');
        if (r) r.checked = true;
      });
    });

    var setInvalid = function (name, invalid) {
      var f = form.querySelector('[data-field="' + name + '"]');
      if (!f) return;
      f.setAttribute("data-invalid", String(invalid));
      var input = f.querySelector("input, select");
      if (input) input.setAttribute("aria-invalid", String(invalid));
    };

    var validate = function () {
      var ok = true;
      var name = form.elements.name.value.trim();
      setInvalid("name", !name); ok = ok && !!name;
      var d = dateInput.value;
      var dOk = !!d && d >= romeToday();
      setInvalid("date", !dOk); ok = ok && dOk;
      var tOk = !!form.elements.time.value;
      setInvalid("time", !tOk); ok = ok && tOk;
      var pOk = !!form.elements.people.value;
      setInvalid("people", !pOk); ok = ok && pOk;
      return ok;
    };

    ["name", "date", "time", "people"].forEach(function (n) {
      var el = form.elements[n];
      el.addEventListener("change", function () {
        if (form.querySelector('[data-field="' + n + '"]').getAttribute("data-invalid") === "true") validate();
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = $("[data-form-status]", form);
      if (!validate()) {
        status.textContent = ui("fixErrors");
        status.style.color = "var(--color-error)";
        var firstBad = form.querySelector('[data-invalid="true"] input, [data-invalid="true"] select');
        if (firstBad) firstBad.focus();
        return;
      }
      var L = DATA.ui[lang];
      var dateObj = new Date(dateInput.value + "T12:00:00");
      var dateLabel = new Intl.DateTimeFormat(L.locale, { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(dateObj);
      var table = (form.querySelector('input[name="table"]:checked') || {}).value || "indifferente";
      var notes = form.elements.notes.value.trim();
      var people = form.elements.people.value === "10+" ? (lang === "en" ? "more than 10" : "più di 10") : form.elements.people.value;

      var lines = [
        L.waIntro, "",
        "• " + L.waName + ": " + form.elements.name.value.trim(),
        "• " + L.waDate + ": " + dateLabel,
        "• " + L.waTime + ": " + form.elements.time.value,
        "• " + L.waPeople + ": " + people,
        "• " + L.waTable + ": " + L.tables[table]
      ];
      if (notes) lines.push("• " + L.waNotes + ": " + notes);
      lines.push("", L.waThanks);

      var url = "https://wa.me/" + DATA.whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));
      status.style.color = "";
      status.textContent = ui("sending");
      window.open(url, "_blank", "noopener");
      window.setTimeout(function () { status.textContent = ui("sent"); }, 1500);
    });
  }

  /* --------------------------------------------------------------- Map */
  var mapBtn = $("[data-map-load]");
  if (mapBtn) {
    mapBtn.addEventListener("click", function () {
      var host = $("[data-map]");
      var iframe = doc.createElement("iframe");
      iframe.src = "https://www.google.com/maps?q=" + encodeURIComponent("Zanzi, Via Toselli 20, 70044 Polignano a Mare BA") + "&z=17&output=embed&hl=" + lang;
      iframe.title = lang === "en" ? "Map: Zanzi, Via Toselli 20, Polignano a Mare" : "Mappa: Zanzi, Via Toselli 20, Polignano a Mare";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.setAttribute("allowfullscreen", "");
      host.innerHTML = "";
      host.appendChild(iframe);
      iframe.focus();
    });
  }

  /* ------------------------------------------------------------ Credits */
  var creditsEl = $("[data-credits]");
  if (creditsEl && DATA.credits && DATA.credits.length) {
    creditsEl.innerHTML = DATA.credits.map(function (c) {
      return '<li><a href="' + escapeHtml(c.page) + '" target="_blank" rel="noopener">' + escapeHtml(c.label) + "</a> — " +
        escapeHtml(c.artist) + ', <a href="' + escapeHtml(c.licenseUrl) + '" target="_blank" rel="noopener">' + escapeHtml(c.license) + "</a></li>";
    }).join("");
  } else if (creditsEl) {
    var det = creditsEl.closest("details");
    if (det) det.hidden = true;
  }

  /* --------------------------------------------------------------- Misc */
  $$("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  applyLanguage(initialLanguage());
})();
