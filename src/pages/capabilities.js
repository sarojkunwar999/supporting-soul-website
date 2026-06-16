export function renderCapabilities() {
  return `
  <div id="page-capabilities" class="page">

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section class="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-obsidian">
      <div class="absolute inset-0" style="background-image: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(46,167,255,0.06) 0%, transparent 70%);"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="section-label mb-3 sm:mb-4">What We Do</div>
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div class="lg:w-1/2">
            <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-soft-white leading-tight mb-4 sm:mb-6">
              Four disciplines.<br>One delivery model.
            </h1>
          </div>
          <div class="lg:w-1/2 lg:flex lg:items-end">
            <p class="section-subtitle">
              Supporting Souls LLP operates across the full stack of organizational capability — from server infrastructure to identity systems. Each discipline informs the others.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ DISCIPLINE 1: ICT ═══════════════════ -->
    <section class="py-14 sm:py-20 lg:py-24 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div class="flex items-center gap-3 mb-6 sm:mb-8">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2EA7FF" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <span class="text-xs font-semibold tracking-widest uppercase text-electric/70">Discipline 01</span>
            </div>
            <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-soft-white mb-4 sm:mb-6 leading-snug">
              ICT &amp; Software Architecture
            </h2>
            <p class="text-muted leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              We design and audit digital infrastructure with an architecture-first mindset. Whether you're building from scratch or modernizing legacy systems, our frameworks reduce technical debt and enable long-term velocity.
            </p>
            <div class="space-y-3 sm:space-y-4">
              ${[
                { title: 'Cloud-Native Architecture', desc: 'AWS, GCP, and Azure design patterns. Multi-cloud strategy and migration roadmaps.' },
                { title: 'API Strategy &amp; Integration', desc: 'RESTful and GraphQL API design, microservices, and third-party integration blueprints.' },
                { title: 'DevSecOps &amp; CI/CD', desc: 'Pipeline architecture, security gates, deployment automation, and SRE frameworks.' },
                { title: 'Digital Infrastructure Strategy', desc: '90-day and 12-month technology roadmaps aligned to business objectives.' },
              ].map(item => `
                <div class="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/[0.025] border border-white/[0.08] hover:border-electric/20 transition-colors duration-300">
                  <div class="w-2 h-2 rounded-full bg-electric mt-1.5 shrink-0"></div>
                  <div>
                    <div class="text-soft-white font-medium text-sm mb-1">${item.title}</div>
                    <div class="text-muted text-xs leading-relaxed">${item.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- ICT Visual: stock photo + code block -->
          <div class="space-y-4">
            <div class="relative rounded-2xl overflow-hidden h-44 sm:h-56">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"
                alt="Server infrastructure"
                class="w-full h-full object-cover opacity-50"
              />
              <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(11,15,23,0.8) 0%, rgba(46,167,255,0.08) 100%);"></div>
              <div class="absolute bottom-3 left-4 flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span class="text-xs text-soft-white/70 font-mono">Infrastructure: Operational</span>
              </div>
            </div>
            <div class="rounded-2xl border border-electric/10 bg-gradient-to-br from-electric/5 to-obsidian p-6 sm:p-10 relative overflow-hidden">
              <div class="absolute inset-0" style="background-image: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(46,167,255,0.07) 0%, transparent 70%);"></div>
              <div class="relative font-mono text-xs text-electric/60 leading-7">
                <div class="text-electric/30 mb-2">// Infrastructure Health Check</div>
                <div><span class="text-gold/60">cloud</span>.assess({</div>
                <div class="pl-4"><span class="text-soft-white/50">provider</span>: <span class="text-green-400/70">"multi-cloud"</span>,</div>
                <div class="pl-4"><span class="text-soft-white/50">regions</span>: <span class="text-green-400/70">["af-south-1", "eu-west-1"]</span>,</div>
                <div class="pl-4"><span class="text-soft-white/50">security</span>: <span class="text-green-400/70">"zero-trust"</span>,</div>
                <div class="pl-4"><span class="text-soft-white/50">uptime</span>: <span class="text-gold/70">99.97</span></div>
                <div>})</div>
                <div class="mt-3 text-electric/30">// Output</div>
                <div class="mt-1"><span class="text-emerald-400/70">✓</span> <span class="text-soft-white/40">Architecture score: </span><span class="text-gold/70">94/100</span></div>
                <div><span class="text-emerald-400/70">✓</span> <span class="text-soft-white/40">Security posture: </span><span class="text-emerald-400/70">Hardened</span></div>
                <div><span class="text-emerald-400/70">✓</span> <span class="text-soft-white/40">Scale readiness: </span><span class="text-emerald-400/70">Enterprise-grade</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-white/5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>

    <!-- ═══════════════════ DISCIPLINE 2: GOVERNANCE ═══════════════════ -->
    <section class="py-14 sm:py-20 lg:py-24 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div class="lg:order-2">
            <div class="flex items-center gap-3 mb-6 sm:mb-8">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" stroke-width="1.5"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <span class="text-xs font-semibold tracking-widest uppercase text-gold/70">Discipline 02</span>
            </div>
            <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-soft-white mb-4 sm:mb-6 leading-snug">
              Legal &amp; Governance Advisory
            </h2>
            <p class="text-muted leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              We embed governance into your organizational DNA — not as an afterthought but as a competitive advantage. From data protection to board accountability, every framework is designed for scale.
            </p>
            <div class="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-4">
              ${[
                'GDPR / POPIA Compliance', 'IP Registration &amp; Protection',
                'Corporate Governance Charters', 'Contract Architecture',
                'Board Advisory Frameworks', 'Data Classification Policies',
                'Regulatory Risk Mapping', 'Consultant / NDA Templates',
              ].map(item => `
                <div class="flex items-center gap-2 text-sm text-soft-white/70">
                  <div class="w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0"></div>
                  ${item}
                </div>
              `).join('')}
            </div>
          </div>
          <!-- Governance Visual: stock photo + stats grid -->
          <div class="lg:order-1 space-y-4">
            <div class="relative rounded-2xl overflow-hidden h-44 sm:h-52">
              <img
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=900&q=80"
                alt="Legal and governance advisory"
                class="w-full h-full object-cover opacity-40"
              />
              <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(11,15,23,0.7) 0%, rgba(215,181,109,0.08) 100%);"></div>
              <div class="absolute bottom-3 left-4">
                <span class="text-xs text-gold/80 font-semibold tracking-widest uppercase">Governance-first by design</span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 sm:gap-4">
              ${[
                { label: 'Compliance Coverage', value: '12+', sub: 'Regulatory frameworks' },
                { label: 'Risk Reduction', value: '80%', sub: 'Contractual exposure' },
                { label: 'Jurisdictions', value: '8', sub: 'Supported regions' },
                { label: 'Governance Score', value: 'AAA', sub: 'Client average rating' },
              ].map(stat => `
                <div class="card-gold p-5 sm:p-6 text-center">
                  <div class="font-display text-2xl sm:text-3xl font-semibold text-gold mb-1.5 sm:mb-2">${stat.value}</div>
                  <div class="text-soft-white text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">${stat.label}</div>
                  <div class="text-muted text-xs">${stat.sub}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-white/5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>

    <!-- ═══════════════════ DISCIPLINE 3: BRAND ═══════════════════ -->
    <section class="py-14 sm:py-20 lg:py-24 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div class="flex items-center gap-3 mb-6 sm:mb-8">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
              </div>
              <span class="text-xs font-semibold tracking-widest uppercase text-gold/70">Discipline 03</span>
            </div>
            <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-soft-white mb-4 sm:mb-6 leading-snug">
              Brand Identity &amp; Aesthetics
            </h2>
            <p class="text-muted leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              We engineer brand systems — not just logos. From verbal identity to visual design systems, every element is built to communicate authority, differentiate clearly, and scale across every touchpoint.
            </p>
            <div class="space-y-3 sm:space-y-4">
              ${[
                { title: 'Visual Identity Systems', desc: 'Logo architecture, color science, typography, and iconography systems that maintain coherence at scale.' },
                { title: 'Naming Strategy &amp; Optimization', desc: 'Company and product naming analyzed through linguistic, phonetic, and heuristic frameworks.' },
                { title: 'Brand Voice &amp; Messaging', desc: 'Tone of voice guidelines, messaging architecture, and content frameworks aligned to your positioning.' },
                { title: 'Digital Design Systems', desc: 'Component libraries, UI patterns, and design tokens ready for engineering handoff.' },
              ].map(item => `
                <div class="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/[0.025] border border-white/[0.08] hover:border-gold/20 transition-colors duration-300">
                  <div class="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0"></div>
                  <div>
                    <div class="text-soft-white font-medium text-sm mb-1">${item.title}</div>
                    <div class="text-muted text-xs leading-relaxed">${item.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <!-- Brand Visual: stock photo + mini brand showcase -->
          <div class="space-y-4">
            <div class="relative rounded-2xl overflow-hidden h-44 sm:h-52">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80"
                alt="Brand design and identity"
                class="w-full h-full object-cover opacity-50"
              />
              <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(11,15,23,0.7) 0%, rgba(215,181,109,0.08) 100%);"></div>
              <div class="absolute bottom-3 left-4">
                <span class="text-xs text-gold/80 font-semibold tracking-widest uppercase">Identity is infrastructure</span>
              </div>
            </div>
            <div class="card-glass p-5 sm:p-6 rounded-2xl">
              <div class="text-xs text-muted mb-3 sm:mb-4 tracking-widest uppercase">Color System</div>
              <div class="flex flex-wrap gap-2 sm:gap-3">
                ${[
                  { color: '#0B0F17', label: 'Obsidian' },
                  { color: '#101827', label: 'Deep Space' },
                  { color: '#D7B56D', label: 'Gold' },
                  { color: '#2EA7FF', label: 'Electric' },
                  { color: '#EAF0FF', label: 'Soft White' },
                ].map(c => `
                  <div class="flex flex-col items-center gap-1.5">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10" style="background: ${c.color};"></div>
                    <span class="text-muted text-[9px]">${c.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="card-glass p-5 sm:p-6 rounded-2xl">
              <div class="text-xs text-muted mb-3 sm:mb-4 tracking-widest uppercase">Typography</div>
              <div class="space-y-1.5 sm:space-y-2">
                <div class="font-display text-xl sm:text-2xl text-soft-white font-semibold">Display / Playfair</div>
                <div class="text-sm text-muted font-medium">Body / Inter — 400 · 500 · 600</div>
                <div class="text-xs text-muted/60 tracking-widest uppercase">LABEL / MONO — 0.2em</div>
              </div>
            </div>
            <div class="card-glass p-5 sm:p-6 rounded-2xl">
              <div class="text-xs text-muted mb-3 sm:mb-4 tracking-widest uppercase">Component Preview</div>
              <div class="flex flex-wrap gap-3">
                <div class="btn-primary text-xs px-4 py-2 pointer-events-none">Primary CTA</div>
                <div class="btn-secondary text-xs px-4 py-2 pointer-events-none">Secondary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-white/5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>

    <!-- ═══════════════════ DISCIPLINE 4: OPTIMIZATION SCIENCES ═══════════════════ -->
    <section class="py-14 sm:py-20 lg:py-24 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div class="lg:order-2">
            <div class="flex items-center gap-3 mb-6 sm:mb-8">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2EA7FF" stroke-width="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span class="text-xs font-semibold tracking-widest uppercase text-electric/70">Discipline 04</span>
            </div>
            <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-soft-white mb-4 sm:mb-6 leading-snug">
              Optimization Sciences
            </h2>
            <p class="text-muted leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              An advanced layer of advisory that addresses the non-obvious variables in organizational performance. Derived from environmental heuristics, cycle-based decision modeling, and identity analysis.
            </p>
            <p class="text-muted leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              These systems are optional but are consistently correlated with reduced decision friction, improved team alignment, and stronger brand coherence in our client engagements.
            </p>
            <div class="card-glass p-5 sm:p-6 rounded-xl mb-6 sm:mb-8">
              <div class="text-xs font-semibold tracking-widest uppercase text-soft-white/40 mb-3 sm:mb-4">Presented As</div>
              <div class="space-y-2 text-sm text-soft-white/70">
                <div>→ Operational optimization systems</div>
                <div>→ Environmental alignment frameworks</div>
                <div>→ Decision-cycle modeling</div>
                <div>→ Spatial configuration heuristics</div>
              </div>
            </div>
          </div>
          <!-- Optimization Sciences: stock photo + cards -->
          <div class="lg:order-1 space-y-4 sm:space-y-5">
            <div class="relative rounded-2xl overflow-hidden h-44 sm:h-52">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                alt="Modern workspace optimization"
                class="w-full h-full object-cover opacity-40"
              />
              <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(11,15,23,0.75) 0%, rgba(46,167,255,0.08) 100%);"></div>
              <div class="absolute bottom-3 left-4">
                <span class="text-xs text-electric/80 font-semibold tracking-widest uppercase">Environment shapes decisions</span>
              </div>
            </div>
            ${[
              {
                icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', color: '#D7B56D',
                title: 'Workspace Spatial Optimization',
                desc: 'Vastu-informed spatial heuristics translated into modern office configuration recommendations. Based on directional analysis, zone allocation, and energy flow mapping.',
              },
              {
                icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z', color: '#2EA7FF',
                title: 'Cycle-Based Decision Modeling',
                desc: 'Timing intelligence framework that identifies optimal periods for high-stakes decisions — product launches, fundraising, expansions, and leadership transitions.',
              },
              {
                icon: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14', color: '#D7B56D',
                title: 'Numerical Identity Heuristics',
                desc: 'Company and product naming analyzed through numerological and phonetic frameworks to maximize recall, authority, and market resonance.',
              },
            ].map(item => `
              <div class="card-glass p-5 sm:p-7 group hover:border-white/20 transition-colors duration-300">
                <div class="flex gap-4 sm:gap-5">
                  <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0" style="background: ${item.color}10; border: 1px solid ${item.color}20;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${item.color}" stroke-width="1.5"><path d="${item.icon}"/></svg>
                  </div>
                  <div>
                    <h3 class="text-soft-white font-medium text-sm sm:text-base mb-1.5 sm:mb-2">${item.title}</h3>
                    <p class="text-muted text-xs sm:text-sm leading-relaxed">${item.desc}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ CTA ═══════════════════ -->
    <section class="py-12 sm:py-16 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card-glass p-8 sm:p-12 text-center">
          <h3 class="font-display text-2xl sm:text-3xl font-semibold text-soft-white mb-3 sm:mb-4">Ready to engage all four disciplines?</h3>
          <p class="text-muted mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">Our intake process maps your current organizational state and recommends the most impactful starting point.</p>
          <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <button onclick="navigate('contact')" class="btn-primary text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 justify-center">Book an Intake Session →</button>
            <button onclick="navigate('packages')" class="btn-secondary text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 justify-center">View Packages</button>
          </div>
        </div>
      </div>
    </section>

  </div>
  `;
}
