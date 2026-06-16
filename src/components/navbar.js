export function renderNavbar() {
  return `
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" role="navigation" aria-label="Main navigation">
    <div id="nav-backdrop" class="absolute inset-0 bg-obsidian/80 backdrop-blur-xl border-b border-white/5 opacity-0 transition-opacity duration-500"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">

        <!-- Logo -->
        <button onclick="navigate('home')" class="focus:outline-none shrink-0 group">
          <img
            src="/logo.png"
            alt="Supporting Souls LLP"
            class="h-10 sm:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            style="mix-blend-mode: lighten;"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <!-- Fallback text logo if image not yet placed -->
          <div class="hidden items-center gap-2.5" style="display:none;">
            <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" stroke-width="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div class="leading-none">
              <div class="text-soft-white font-semibold text-xs sm:text-sm tracking-wide">Supporting Souls</div>
              <div class="text-gold/60 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-medium">LLP</div>
            </div>
          </div>
        </button>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center gap-6 xl:gap-8">
          <button onclick="navigate('home')" class="nav-link">Home</button>
          <button onclick="navigate('capabilities')" class="nav-link">Capabilities</button>
          <button onclick="navigate('packages')" class="nav-link">Packages</button>
          <button onclick="navigate('council')" class="nav-link">Council</button>
          <button onclick="navigate('impact')" class="nav-link">Impact</button>
          <button onclick="navigate('governance')" class="nav-link">Governance</button>
        </div>

        <!-- Right Controls — desktop -->
        <div class="hidden lg:flex items-center gap-3 xl:gap-4">
          <div id="mode-toggle" class="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 cursor-pointer" onclick="toggleMode()" title="Toggle view mode">
            <span id="mode-logic-btn" class="px-2.5 xl:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 bg-electric/20 text-electric">Logic</span>
            <span id="mode-opt-btn" class="px-2.5 xl:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 text-soft-white/40">Optimize</span>
          </div>
          <button onclick="navigate('contact')" class="btn-primary text-xs px-4 xl:px-5 py-2.5">
            Book Intake
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

        <!-- Mobile right — mode + hamburger -->
        <div class="flex lg:hidden items-center gap-2">
          <div class="flex items-center gap-0.5 bg-white/5 border border-white/10 rounded-full p-0.5 cursor-pointer" onclick="toggleMode()">
            <span id="mode-logic-btn" class="px-2 py-1 rounded-full text-[10px] font-medium transition-all duration-300 bg-electric/20 text-electric">L</span>
            <span id="mode-opt-btn" class="px-2 py-1 rounded-full text-[10px] font-medium transition-all duration-300 text-soft-white/40">O</span>
          </div>
          <button id="mobile-toggle" onclick="toggleMobileMenu()" class="flex flex-col gap-1.5 p-2 focus:outline-none" aria-label="Toggle menu">
            <span id="ham-1" class="w-6 h-0.5 bg-soft-white/70 rounded block transition-all duration-300 origin-center"></span>
            <span id="ham-2" class="w-4 h-0.5 bg-soft-white/70 rounded block transition-all duration-300"></span>
            <span id="ham-3" class="w-6 h-0.5 bg-soft-white/70 rounded block transition-all duration-300 origin-center"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="mobile-menu lg:hidden flex-col px-4 sm:px-6 pb-6 bg-obsidian/98 backdrop-blur-xl border-b border-white/5">
      <div class="pt-2 pb-4 space-y-0.5">
        <button onclick="navigate('home'); toggleMobileMenu()" class="w-full text-left py-3.5 px-2 text-soft-white/70 text-sm border-b border-white/[0.06] hover:text-gold transition-colors">Home</button>
        <button onclick="navigate('capabilities'); toggleMobileMenu()" class="w-full text-left py-3.5 px-2 text-soft-white/70 text-sm border-b border-white/[0.06] hover:text-gold transition-colors">Capabilities</button>
        <button onclick="navigate('packages'); toggleMobileMenu()" class="w-full text-left py-3.5 px-2 text-soft-white/70 text-sm border-b border-white/[0.06] hover:text-gold transition-colors">Packages</button>
        <button onclick="navigate('council'); toggleMobileMenu()" class="w-full text-left py-3.5 px-2 text-soft-white/70 text-sm border-b border-white/[0.06] hover:text-gold transition-colors">Delivery Council</button>
        <button onclick="navigate('impact'); toggleMobileMenu()" class="w-full text-left py-3.5 px-2 text-soft-white/70 text-sm border-b border-white/[0.06] hover:text-gold transition-colors">Karmic Equity</button>
        <button onclick="navigate('governance'); toggleMobileMenu()" class="w-full text-left py-3.5 px-2 text-soft-white/70 text-sm hover:text-gold transition-colors">Trust & Governance</button>
      </div>
      <button onclick="navigate('contact'); toggleMobileMenu()" class="btn-primary w-full justify-center mt-2 text-sm py-3.5">
        Book an Intake
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  </nav>
  `;
}
