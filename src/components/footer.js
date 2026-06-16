export function renderFooter() {
  return `
  <footer class="bg-obsidian border-t border-white/5 pt-20 pb-10">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <div class="mb-6">
            <button onclick="navigate('home')" class="focus:outline-none group inline-block">
              <img
                src="/logo.png"
                alt="Supporting Souls LLP"
                class="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                style="mix-blend-mode: lighten;"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <!-- Fallback -->
              <div class="hidden items-center gap-3" style="display:none;">
                <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/30 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" stroke-width="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div class="leading-none">
                  <div class="text-soft-white font-semibold text-sm">Supporting Souls LLP</div>
                  <div class="text-gold/60 text-[10px] tracking-[0.15em] uppercase">Consulting & Advisory</div>
                </div>
              </div>
            </button>
          </div>
          <p class="text-muted text-sm leading-relaxed mb-6 max-w-xs">
            Systems that scale. Decisions that align. A unified consulting stack for the organizations that shape tomorrow.
          </p>
          <div class="flex gap-3">
            <a href="#" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-gold/30 hover:bg-gold/5 transition-all duration-300" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-muted hover:text-gold transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-gold/30 hover:bg-gold/5 transition-all duration-300" aria-label="Twitter/X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-muted hover:text-gold transition-colors">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div>
          <h4 class="text-soft-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Services</h4>
          <ul class="space-y-3">
            <li><button onclick="navigate('capabilities')" class="text-muted text-sm hover:text-gold transition-colors">ICT & Architecture</button></li>
            <li><button onclick="navigate('capabilities')" class="text-muted text-sm hover:text-gold transition-colors">Governance Advisory</button></li>
            <li><button onclick="navigate('capabilities')" class="text-muted text-sm hover:text-gold transition-colors">Brand Identity</button></li>
            <li><button onclick="navigate('capabilities')" class="text-muted text-sm hover:text-gold transition-colors">Optimization Systems</button></li>
            <li><button onclick="navigate('packages')" class="text-muted text-sm hover:text-gold transition-colors">Founder Alignment</button></li>
          </ul>
        </div>

        <div>
          <h4 class="text-soft-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Company</h4>
          <ul class="space-y-3">
            <li><button onclick="navigate('council')" class="text-muted text-sm hover:text-gold transition-colors">Delivery Council</button></li>
            <li><button onclick="navigate('impact')" class="text-muted text-sm hover:text-gold transition-colors">Karmic Equity</button></li>
            <li><button onclick="navigate('governance')" class="text-muted text-sm hover:text-gold transition-colors">Trust & Governance</button></li>
            <li><button onclick="navigate('governance')" class="text-muted text-sm hover:text-gold transition-colors">Privacy Policy</button></li>
            <li><button onclick="navigate('contact')" class="text-muted text-sm hover:text-gold transition-colors">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 class="text-soft-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Engage</h4>
          <ul class="space-y-3">
            <li><button onclick="navigate('contact')" class="text-muted text-sm hover:text-gold transition-colors">Book a Consultation</button></li>
            <li><button onclick="navigate('packages')" class="text-muted text-sm hover:text-gold transition-colors">View Packages</button></li>
            <li><button onclick="navigate('contact')" class="text-muted text-sm hover:text-gold transition-colors">Client Intake</button></li>
          </ul>
          <div class="mt-8 p-4 bg-gold/5 border border-gold/15 rounded-xl">
            <p class="text-gold text-xs font-medium mb-1">Ready to begin?</p>
            <p class="text-muted text-xs mb-3">Schedule your initial intake session.</p>
            <button onclick="navigate('contact')" class="btn-primary text-xs px-4 py-2">Book Now</button>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-muted text-xs">© 2026 Supporting Souls LLP. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <span class="text-muted text-xs">Registered Consultancy</span>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
            <span class="text-muted text-xs">Systems Operational</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `;
}
