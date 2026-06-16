export function renderHome() {
  return `
  <div id="page-home" class="page active">

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section class="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-16 sm:pt-20">
      <div class="absolute inset-0 bg-gradient-to-b from-deep-space via-obsidian to-obsidian"></div>
      <div class="absolute inset-0" style="background-image: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(215,181,109,0.07) 0%, transparent 70%);"></div>
      <div class="absolute inset-0 opacity-20 sm:opacity-30" style="background-image: linear-gradient(rgba(215,181,109,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(215,181,109,0.03) 1px, transparent 1px); background-size: 60px 60px;"></div>

      <!-- Floating orbs -->
      <div class="hidden sm:block absolute top-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl animate-float" style="background: radial-gradient(circle, rgba(46,167,255,0.06) 0%, transparent 70%);"></div>
      <div class="hidden sm:block absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-delayed" style="background: radial-gradient(circle, rgba(215,181,109,0.06) 0%, transparent 70%);"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-28 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <!-- LEFT: Content -->
          <div>
            <!-- Label -->
            <div class="flex items-center gap-3 mb-6 sm:mb-8 animate-fade-in">
              <div class="w-6 sm:w-8 h-px bg-gradient-to-r from-gold to-transparent"></div>
              <span class="section-label">Digital Alchemist Consulting</span>
            </div>

            <!-- Headline -->
            <h1 class="font-display text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-6xl font-semibold tracking-tight mb-6 sm:mb-8 animate-slide-up">
              <span class="text-soft-white">Systems that</span><br>
              <span class="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">scale.</span><br>
              <span class="text-soft-white">Decisions that</span><br>
              <span class="bg-gradient-to-r from-electric to-blue-300 bg-clip-text text-transparent">align.</span>
            </h1>

            <!-- Subheadline -->
            <p class="text-base sm:text-lg md:text-xl text-muted leading-relaxed mb-8 sm:mb-10 animate-fade-in" style="animation-delay:0.3s; opacity:0; animation-fill-mode: forwards;">
              Supporting Souls LLP delivers a unified consulting stack combining ICT architecture, governance frameworks, brand identity systems, and advanced optimization sciences.
            </p>

            <!-- CTAs -->
            <div class="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in" style="animation-delay:0.5s; opacity:0; animation-fill-mode: forwards;">
              <button onclick="navigate('contact')" class="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 w-full xs:w-auto justify-center">
                Book an Intake
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button onclick="navigate('packages')" class="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 w-full xs:w-auto justify-center">
                Explore Packages
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h4"/></svg>
              </button>
            </div>

            <!-- Trust labels -->
            <div class="flex flex-wrap gap-2 sm:gap-3 animate-fade-in" style="animation-delay:0.7s; opacity:0; animation-fill-mode: forwards;">
              ${['Secure-by-design', 'Evidence-driven', 'Governance-first', 'Impact embedded'].map(label => `
                <div class="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div>
                  <span class="text-soft-white/70 text-[11px] sm:text-xs font-medium">${label}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- RIGHT: Consulting Image -->
          <div class="hidden lg:flex items-center justify-center animate-fade-in" style="animation-delay:0.4s; opacity:0; animation-fill-mode: forwards;">
            <div class="relative w-full max-w-lg">
              <!-- Glow backdrop -->
              <div class="absolute -inset-4 rounded-3xl blur-2xl opacity-30" style="background: radial-gradient(ellipse at 60% 40%, rgba(215,181,109,0.25) 0%, rgba(46,167,255,0.15) 60%, transparent 100%);"></div>
              <!-- Main image frame -->
              <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style="box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(215,181,109,0.08);">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="Professional consulting session"
                  class="w-full h-[520px] object-cover"
                  style="filter: brightness(0.85) saturate(0.9);"
                />
                <!-- Overlay gradient -->
                <div class="absolute inset-0" style="background: linear-gradient(160deg, rgba(11,15,23,0.15) 0%, rgba(11,15,23,0.55) 100%);"></div>
                <!-- Bottom stat strip -->
                <div class="absolute bottom-0 left-0 right-0 px-6 py-5" style="background: linear-gradient(to top, rgba(11,15,23,0.95) 0%, transparent 100%);">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-gold font-semibold text-lg font-display">Four Disciplines.</div>
                      <div class="text-soft-white/60 text-xs tracking-wide mt-0.5">One delivery model.</div>
                    </div>
                    <div class="flex gap-4">
                      <div class="text-center">
                        <div class="text-soft-white font-semibold text-sm">12+</div>
                        <div class="text-muted text-[10px]">Frameworks</div>
                      </div>
                      <div class="w-px bg-white/10"></div>
                      <div class="text-center">
                        <div class="text-soft-white font-semibold text-sm">8</div>
                        <div class="text-muted text-[10px]">Jurisdictions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Floating badge -->
              <div class="absolute -top-4 -right-4 bg-deep-space border border-gold/30 rounded-xl px-4 py-3 shadow-xl">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
                  <span class="text-soft-white/80 text-xs font-medium">Actively onboarding</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40">
        <span class="text-xs tracking-widest uppercase text-soft-white/50">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"></div>
      </div>
    </section>

    <!-- ═══════════════════ THREE LAYERS ═══════════════════ -->
    <section class="py-16 sm:py-24 lg:py-28 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <div class="section-label mb-3 sm:mb-4">The Core Thesis</div>
          <h2 class="section-title mb-4 sm:mb-6">Technology alone does not build great organizations</h2>
          <p class="section-subtitle mx-auto">The highest-performing companies optimize across three interconnected layers of operational maturity.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          ${[
            { num: '01', label: 'Infrastructure', title: 'ICT & Software Architecture', desc: 'Scalable systems, cloud-native design, and digital infrastructure strategies built to absorb growth without technical debt.', color: '#2EA7FF', icon: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 0-2-2V9m0 0h18' },
            { num: '02', label: 'Governance', title: 'Legal & Compliance Frameworks', desc: 'Regulatory compliance, IP protection, board governance, and data privacy — built in from day one, not retrofitted.', color: '#D7B56D', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { num: '03', label: 'Human Decision Environments', title: 'Optimization Sciences', desc: 'Workspace spatial heuristics, cycle-based decision modeling, and identity optimization frameworks that reduce decision friction.', color: '#D7B56D', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
          ].map(layer => `
            <div class="card-glass p-6 sm:p-8 relative overflow-hidden group sm:col-span-1 last:sm:col-span-2 last:lg:col-span-1">
              <div class="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style="background: radial-gradient(circle, ${layer.color}15 0%, transparent 70%); transform: translate(30%, -30%);"></div>
              <div class="text-[10px] font-semibold tracking-[0.3em] mb-4 sm:mb-6" style="color: ${layer.color}80;">${layer.num} / LAYER</div>
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 border" style="background: ${layer.color}10; border-color: ${layer.color}20;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${layer.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="${layer.icon}"/>
                </svg>
              </div>
              <div class="text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-3" style="color: ${layer.color};">${layer.label}</div>
              <h3 class="text-soft-white font-semibold text-base sm:text-lg mb-3 sm:mb-4 leading-snug">${layer.title}</h3>
              <p class="text-muted text-sm leading-relaxed">${layer.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════ SERVICES OVERVIEW ═══════════════════ -->
    <section class="py-16 sm:py-24 lg:py-28 relative" style="background: linear-gradient(180deg, #0B0F17 0%, #101827 50%, #0B0F17 100%);">
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(215,181,109,0.05) 0%, transparent 70%);"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div>
            <div class="section-label mb-3 sm:mb-4">What We Deliver</div>
            <h2 class="section-title">A unified consulting<br class="hidden sm:block"> stack across four disciplines</h2>
          </div>
          <button onclick="navigate('capabilities')" class="btn-secondary shrink-0 self-start sm:self-auto">
            Full Capabilities
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          ${[
            { tag: 'ICT & Software', title: 'Digital Infrastructure Strategy', desc: 'From cloud-native architecture to API-first development, we design systems built for velocity, reliability, and long-term scale.', items: ['Cloud Architecture', 'API Strategy', 'DevOps & CI/CD', 'Security Posture'], color: '#2EA7FF' },
            { tag: 'Legal & Governance', title: 'Compliance & Risk Frameworks', desc: 'We integrate governance into your product cycle so that legal risk, data compliance, and board accountability become competitive advantages.', items: ['GDPR / POPIA', 'IP Protection', 'Corporate Governance', 'Contract Architecture'], color: '#D7B56D' },
            { tag: 'Brand & Identity', title: 'Identity Systems & Aesthetics', desc: 'Beyond logos — we engineer brand systems that communicate authority, differentiate clearly, and scale across every touchpoint.', items: ['Visual Identity', 'Naming Strategy', 'Tone of Voice', 'Design Systems'], color: '#D7B56D' },
            { tag: 'Optimization Sciences', title: 'Predictive Decision Modeling', desc: 'Advanced heuristics for workspace design, leadership timing, and organizational naming — reducing hidden friction in high-stakes environments.', items: ['Spatial Heuristics', 'Cycle-based Timing', 'Numerical Heuristics', 'Leadership Alignment'], color: '#2EA7FF' },
          ].map(svc => `
            <div class="card-glass p-6 sm:p-8 group relative overflow-hidden">
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: linear-gradient(135deg, ${svc.color}05 0%, transparent 60%);"></div>
              <div class="relative">
                <div class="flex items-center justify-between mb-4 sm:mb-6">
                  <span class="text-xs font-semibold tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-full border" style="color: ${svc.color}; background: ${svc.color}10; border-color: ${svc.color}20;">${svc.tag}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${svc.color}40" stroke-width="1.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </div>
                <h3 class="text-soft-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4">${svc.title}</h3>
                <p class="text-muted text-sm leading-relaxed mb-4 sm:mb-6">${svc.desc}</p>
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  ${svc.items.map(i => `<span class="text-xs text-soft-white/50 bg-white/5 border border-white/10 rounded-full px-2.5 sm:px-3 py-1">${i}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════ PACKAGES TEASER ═══════════════════ -->
    <section class="py-16 sm:py-24 lg:py-28 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div class="section-label mb-3 sm:mb-4">Engagement Models</div>
          <h2 class="section-title mb-4 sm:mb-6">Structured for every stage of organizational maturity</h2>
          <p class="section-subtitle mx-auto">Each tier combines technology, governance, brand, and optimization into a coherent consulting program.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
          ${[
            { tier: 'Starter', price: 'From', amount: 'R 8,500', tag: 'Launch-ready', desc: 'ICT audit, brand foundation, and governance essentials for early-stage ventures.' },
            { tier: 'Growth', price: 'From', amount: 'R 22,000', tag: 'Scale-ready', desc: 'Full-stack consulting for companies navigating product expansion and team growth.', featured: true },
            { tier: 'Enterprise', price: 'Custom', amount: 'Scoped', tag: 'Transformation', desc: 'Multi-disciplinary engagements for enterprise digital transformation programs.' },
            { tier: 'Founder Alignment', price: 'From', amount: 'R 15,000', tag: 'Bespoke', desc: 'Leadership optimization, naming strategy, and brand identity for founders at inception.' },
          ].map(pkg => `
            <div class="card-glass p-5 sm:p-7 relative ${pkg.featured ? 'border-gold/40 bg-gradient-to-b from-gold/10 to-transparent' : ''}">
              ${pkg.featured ? '<div class="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>' : ''}
              <div class="text-xs font-semibold tracking-widest uppercase text-gold/60 mb-2 sm:mb-3">${pkg.tag}</div>
              <h3 class="text-soft-white font-semibold text-base sm:text-lg mb-2">${pkg.tier}</h3>
              <div class="flex items-baseline gap-1 mb-3 sm:mb-5">
                <span class="text-muted text-xs">${pkg.price}</span>
                <span class="text-soft-white font-semibold text-lg sm:text-xl">${pkg.amount}</span>
              </div>
              <p class="text-muted text-xs leading-relaxed mb-4 sm:mb-6">${pkg.desc}</p>
              <button onclick="navigate('packages')" class="${pkg.featured ? 'btn-primary' : 'btn-secondary'} text-xs px-4 py-2.5 w-full justify-center">Learn More</button>
            </div>
          `).join('')}
        </div>

        <div class="text-center">
          <button onclick="navigate('packages')" class="btn-ghost">View all package details →</button>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ TRUST STRIP ═══════════════════ -->
    <section class="py-12 sm:py-16 border-y border-white/5" style="background: linear-gradient(90deg, #0B0F17 0%, #101827 50%, #0B0F17 100%);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          ${[
            { value: '4', label: 'Core Disciplines', sub: 'Unified delivery' },
            { value: '100%', label: 'Governance-First', sub: 'Compliance built-in' },
            { value: '3×', label: 'Optimization Layers', sub: 'Infra · Governance · Human' },
            { value: '15%', label: 'Impact Allocation', sub: 'Revenue to community' },
          ].map(stat => `
            <div class="text-center group">
              <div class="text-3xl sm:text-4xl font-display font-semibold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300">${stat.value}</div>
              <div class="text-soft-white text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">${stat.label}</div>
              <div class="text-muted text-[10px] sm:text-xs">${stat.sub}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════ CTA SECTION ═══════════════════ -->
    <section class="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-obsidian">
      <div class="absolute inset-0" style="background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(215,181,109,0.07) 0%, transparent 70%);"></div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="section-label mb-4 sm:mb-6">Begin the Engagement</div>
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-soft-white mb-6 sm:mb-8 leading-tight">
          Ready to build something<br>
          <span class="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">architecturally sound?</span>
        </h2>
        <p class="text-base sm:text-xl text-muted mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
          Start with a 60-minute intake session. We map your current state against your goals across all four disciplines.
        </p>
        <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <button onclick="navigate('contact')" class="btn-primary text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 justify-center">
            Book an Intake Session
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button onclick="navigate('capabilities')" class="btn-secondary text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 justify-center">View Capabilities</button>
        </div>
      </div>
    </section>

  </div>
  `;
}
