import emailjs from '@emailjs/browser'

// Initialise EmailJS once
emailjs.init('ewdzdM6509RchmXyt')

// Self-hosted fonts — no external network requests
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/500.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/playfair-display/400-italic.css'
import './style.css'
import { renderNavbar } from './src/components/navbar.js'
import { renderFooter } from './src/components/footer.js'
import { renderHome } from './src/pages/home.js'
import { renderPackages } from './src/pages/packages.js'
import { renderCapabilities } from './src/pages/capabilities.js'
import { renderCouncil } from './src/pages/council.js'
import { renderImpact } from './src/pages/impact.js'
import { renderGovernance } from './src/pages/governance.js'
import { renderContact } from './src/pages/contact.js'

// ─── App Shell ────────────────────────────────────────────────────────────────
document.querySelector('#app').innerHTML = `
  ${renderNavbar()}
  <main id="main-content">
    ${renderHome()}
    ${renderPackages()}
    ${renderCapabilities()}
    ${renderCouncil()}
    ${renderImpact()}
    ${renderGovernance()}
    ${renderContact()}
  </main>
  ${renderFooter()}

  <!-- ── Floating WhatsApp Button ── -->
  <a
    href="https://wa.me/919916024224"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    id="whatsapp-fab"
    style="
      position: fixed;
      bottom: 28px;
      left: 28px;
      z-index: 9998;
      display: flex;
      align-items: center;
      gap: 10px;
      background: #25D366;
      color: #fff;
      border-radius: 999px;
      padding: 12px 20px 12px 14px;
      box-shadow: 0 8px 32px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.25);
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.01em;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    "
    onmouseenter="this.style.transform='scale(1.06)';this.style.boxShadow='0 12px 40px rgba(37,211,102,0.45),0 2px 8px rgba(0,0,0,0.25)';"
    onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='0 8px 32px rgba(37,211,102,0.35),0 2px 8px rgba(0,0,0,0.25)';"
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    Chat with us
  </a>
`

// ─── Navigation ───────────────────────────────────────────────────────────────
const PAGE_IDS = ['home', 'packages', 'capabilities', 'council', 'impact', 'governance', 'contact']

window.navigate = function (pageId) {
  PAGE_IDS.forEach(id => {
    const el = document.getElementById(`page-${id}`)
    if (el) el.classList.toggle('active', id === pageId)
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // Update active nav link styling
  updateNavLinks(pageId)
}

function updateNavLinks(activeId) {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.toggle('text-gold', el.dataset.nav === activeId)
    el.classList.toggle('text-soft-white/60', el.dataset.nav !== activeId)
  })
}

// ─── Navbar scroll effect ─────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const backdrop = document.getElementById('nav-backdrop')
  if (!backdrop) return
  if (window.scrollY > 40) {
    backdrop.style.opacity = '1'
  } else {
    backdrop.style.opacity = '0'
  }
})

// ─── Mode Toggle ─────────────────────────────────────────────────────────────
let currentMode = 'logic'
window.toggleMode = function () {
  currentMode = currentMode === 'logic' ? 'optimization' : 'logic'
  const logicBtn = document.getElementById('mode-logic-btn')
  const optBtn = document.getElementById('mode-opt-btn')
  if (!logicBtn || !optBtn) return
  if (currentMode === 'optimization') {
    logicBtn.className = 'px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 text-soft-white/40'
    optBtn.className = 'px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 bg-gold/20 text-gold'
    showOptimizationHints()
  } else {
    logicBtn.className = 'px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 bg-electric/20 text-electric'
    optBtn.className = 'px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 text-soft-white/40'
    hideOptimizationHints()
  }
}

function showOptimizationHints() {
  // Highlight optimization-related content with a subtle gold glow
  document.querySelectorAll('[data-opt]').forEach(el => {
    el.style.boxShadow = '0 0 20px rgba(215,181,109,0.12)'
    el.style.borderColor = 'rgba(215,181,109,0.3)'
  })
  // Show a subtle banner
  showModeBanner('Optimization Sciences layer active — spatial, timing & identity frameworks highlighted.')
}

function hideOptimizationHints() {
  document.querySelectorAll('[data-opt]').forEach(el => {
    el.style.boxShadow = ''
    el.style.borderColor = ''
  })
  hideModeBanner()
}

function showModeBanner(msg) {
  let banner = document.getElementById('mode-banner')
  if (!banner) {
    banner = document.createElement('div')
    banner.id = 'mode-banner'
    banner.style.cssText = `
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      background: rgba(215,181,109,0.12); border: 1px solid rgba(215,181,109,0.3);
      backdrop-filter: blur(16px); border-radius: 999px;
      padding: 10px 20px; color: #D7B56D; font-size: 12px; font-weight: 500;
      z-index: 9999; white-space: nowrap; max-width: 90vw;
      animation: slideUp 0.4s ease-out;
    `
    document.body.appendChild(banner)
  }
  banner.textContent = msg
  banner.style.display = 'block'
}

function hideModeBanner() {
  const banner = document.getElementById('mode-banner')
  if (banner) banner.style.display = 'none'
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
window.toggleMobileMenu = function () {
  const menu = document.getElementById('mobile-menu')
  if (menu) menu.classList.toggle('open')
}

// ─── Intake Form (EmailJS) ───────────────────────────────────────────────────
window.handleIntakeSubmit = async function (e) {
  e.preventDefault()
  const btn = document.getElementById('submit-btn')
  const form = document.getElementById('intake-form')
  const success = document.getElementById('intake-success')

  // Loading state
  if (btn) {
    btn.disabled = true
    btn.innerHTML = `
      <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      Submitting…`
  }

  // Collect checkbox values for "services"
  const checkedServices = [...form.querySelectorAll('input[name="services"]:checked')]
    .map(cb => cb.value).join(', ') || 'None selected'

  // Build template params matching the EmailJS template variables
  const data = new FormData(form)
  const templateParams = {
    firstName:  data.get('firstName')  || '',
    lastName:   data.get('lastName')   || '',
    email:      data.get('email')      || '',
    company:    data.get('company')    || 'N/A',
    role:       data.get('role')       || '',
    stage:      data.get('stage')      || '',
    interest:   checkedServices,
    package:    data.get('package')    || 'Not specified',
    challenge:  data.get('message')    || '',
    format:     data.get('format')     || '',
  }

  try {
    await emailjs.send('service_piwhk3i', 'template_8b6lho4', templateParams)

    // Success — fade form out, show success card
    if (form) {
      form.style.opacity = '0'
      form.style.transition = 'opacity 0.4s ease'
      setTimeout(() => {
        form.style.display = 'none'
        if (success) {
          success.classList.remove('hidden')
          success.style.opacity = '0'
          success.style.transition = 'opacity 0.5s ease'
          requestAnimationFrame(() => { success.style.opacity = '1' })
        }
      }, 400)
    }
  } catch (err) {
    console.error('EmailJS error:', err)
    if (btn) {
      btn.disabled = false
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
        </svg>
        Submission failed — please try again`
      btn.style.background = 'rgba(239,68,68,0.15)'
      btn.style.borderColor = 'rgba(239,68,68,0.4)'
      setTimeout(() => {
        btn.innerHTML = `Submit Intake Request <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`
        btn.style.background = ''
        btn.style.borderColor = ''
      }, 4000)
    }
  }
}

// ─── Scroll animations (Intersection Observer) ───────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 }
)

// Observe elements once DOM is painted
requestAnimationFrame(() => {
  document.querySelectorAll('.card-glass, .card-gold').forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(el)
  })
})
