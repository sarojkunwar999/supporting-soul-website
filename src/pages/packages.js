export function renderPackages() {
  return `
  <div id="page-packages" class="page">

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section class="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-obsidian">
      <div class="absolute inset-0" style="background-image: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(215,181,109,0.07) 0%, transparent 70%);"></div>

      <!-- Stock image overlay — right half, desktop only -->
      <div class="hidden lg:block absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
          alt="Consulting session"
          class="w-full h-full object-cover opacity-20"
          style="mask-image: linear-gradient(to right, transparent 0%, black 40%); -webkit-mask-image: linear-gradient(to right, transparent 0%, black 40%);"
        />
        <div class="absolute inset-0" style="background: linear-gradient(to right, #0B0F17 0%, transparent 40%);"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="section-label mb-3 sm:mb-4">Engagement Models</div>
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
          <div class="lg:max-w-2xl">
            <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-soft-white leading-tight mb-4 sm:mb-6">
              Consulting packages built<br class="hidden sm:block">
              for every stage of maturity
            </h1>
            <p class="section-subtitle max-w-xl">Each package combines ICT, governance, brand identity, and optimization sciences into a coherent program. No silos — one unified engagement.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ PACKAGES GRID ═══════════════════ -->
    <section class="py-12 sm:py-20 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">

          <!-- Starter -->
          <div class="card-glass p-7 sm:p-10 relative">
            <div class="flex flex-col xs:flex-row xs:items-start justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <div class="text-xs font-semibold tracking-widest uppercase text-gold/60 mb-2 sm:mb-3">Tier 01</div>
                <h2 class="font-display text-2xl sm:text-3xl font-semibold text-soft-white mb-1.5">Starter</h2>
                <div class="text-muted text-sm">For early-stage ventures &amp; launches</div>
              </div>
              <div class="xs:text-right shrink-0">
                <div class="text-muted text-xs mb-1">From</div>
                <div class="text-soft-white font-semibold text-2xl sm:text-3xl">R 8,500</div>
                <div class="text-muted text-xs">per engagement</div>
              </div>
            </div>
            <p class="text-muted leading-relaxed mb-6 sm:mb-8 text-sm">
              A foundation-level consulting package designed to establish your ICT posture, legal fundamentals, and brand identity in a single cohesive engagement.
            </p>
            <div class="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
              ${[
                'ICT Infrastructure Audit + Recommendations',
                'Cloud Architecture Roadmap (90-day)',
                'Legal Entity Structure Advisory',
                'Data Privacy Baseline (GDPR / POPIA)',
                'Brand Identity Foundation (logo, colors, type)',
                'Naming Optimization Analysis',
                'Workspace Spatial Assessment Report',
              ].map(f => `
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span class="text-soft-white/80 text-sm">${f}</span>
                </div>
              `).join('')}
            </div>
            <button onclick="navigate('contact')" class="btn-secondary w-full justify-center text-sm sm:text-base">Start with Starter →</button>
          </div>

          <!-- Growth (Featured) -->
          <div class="relative rounded-2xl p-7 sm:p-10 overflow-hidden" style="background: linear-gradient(135deg, rgba(215,181,109,0.08) 0%, rgba(16,24,39,0.95) 60%); border: 1px solid rgba(215,181,109,0.3);">
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <div class="absolute top-5 right-5 sm:top-6 sm:right-6 bg-gold text-obsidian text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full">Most Popular</div>
            <div class="flex flex-col xs:flex-row xs:items-start justify-between gap-4 mb-6 sm:mb-8 mt-2">
              <div>
                <div class="text-xs font-semibold tracking-widest uppercase text-gold/60 mb-2 sm:mb-3">Tier 02</div>
                <h2 class="font-display text-2xl sm:text-3xl font-semibold text-soft-white mb-1.5">Growth</h2>
                <div class="text-muted text-sm">For scaling companies &amp; product teams</div>
              </div>
              <div class="xs:text-right shrink-0">
                <div class="text-muted text-xs mb-1">From</div>
                <div class="text-soft-white font-semibold text-2xl sm:text-3xl">R 22,000</div>
                <div class="text-muted text-xs">per engagement</div>
              </div>
            </div>
            <p class="text-muted leading-relaxed mb-6 sm:mb-8 text-sm">
              Full-stack consulting for companies navigating product expansion, team growth, and regulatory maturity. Covers all four disciplines with deeper deliverables.
            </p>
            <div class="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
              ${[
                'Everything in Starter',
                'Full Cloud Architecture Design &amp; Implementation Plan',
                'API Strategy &amp; Integration Architecture',
                'DevSecOps Pipeline Review',
                'Governance Framework (Board, IP, Contracts)',
                'Full Brand System (visual, verbal, digital)',
                'Decision-Cycle Optimization Report',
                'Organizational Structure Analysis',
                '3× Strategy Sessions (90 min each)',
              ].map(f => `
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span class="text-soft-white/90 text-sm">${f}</span>
                </div>
              `).join('')}
            </div>
            <button onclick="navigate('contact')" class="btn-primary w-full justify-center text-sm sm:text-base">Start with Growth →</button>
          </div>

          <!-- Enterprise -->
          <div class="card-glass p-7 sm:p-10 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none" style="background: radial-gradient(circle, rgba(46,167,255,0.06) 0%, transparent 70%); transform: translate(30%, -30%);"></div>
            <div class="flex flex-col xs:flex-row xs:items-start justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <div class="text-xs font-semibold tracking-widest uppercase text-electric/60 mb-2 sm:mb-3">Tier 03</div>
                <h2 class="font-display text-2xl sm:text-3xl font-semibold text-soft-white mb-1.5">Enterprise</h2>
                <div class="text-muted text-sm">For enterprise digital transformation</div>
              </div>
              <div class="xs:text-right shrink-0">
                <div class="text-muted text-xs mb-1">Pricing</div>
                <div class="text-soft-white font-semibold text-2xl sm:text-3xl">Custom</div>
                <div class="text-muted text-xs">Scoped per engagement</div>
              </div>
            </div>
            <p class="text-muted leading-relaxed mb-6 sm:mb-8 text-sm">
              Multi-disciplinary engagements for enterprises undertaking full digital transformation. Embedded team model with dedicated architects, legal strategists, and brand leads.
            </p>
            <div class="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
              ${[
                'Embedded Consulting Team (8–24 weeks)',
                'Enterprise Architecture Blueprint',
                'Regulatory &amp; Compliance Program (multi-jurisdiction)',
                'Enterprise Brand Governance System',
                'Technology Vendor Selection &amp; Negotiation',
                'Leadership Decision-Environment Optimization',
                'Quarterly Strategic Review Sessions',
                'C-Suite Advisory Access',
              ].map(f => `
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 rounded-full bg-electric/10 border border-electric/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2EA7FF" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span class="text-soft-white/80 text-sm">${f}</span>
                </div>
              `).join('')}
            </div>
            <button onclick="navigate('contact')" class="btn-secondary w-full justify-center text-sm sm:text-base" style="border-color: rgba(46,167,255,0.4); color: #2EA7FF;">Request Enterprise Scope →</button>
          </div>

          <!-- Founder Alignment -->
          <div class="relative rounded-2xl p-7 sm:p-10 overflow-hidden" style="background: linear-gradient(135deg, rgba(46,167,255,0.06) 0%, rgba(11,15,23,0.98) 60%); border: 1px solid rgba(46,167,255,0.2);">
            <div class="flex flex-col xs:flex-row xs:items-start justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <div class="text-xs font-semibold tracking-widest uppercase text-electric/60 mb-2 sm:mb-3">Founder Program</div>
                <h2 class="font-display text-2xl sm:text-3xl font-semibold text-soft-white mb-1.5">Founder Alignment</h2>
                <div class="text-muted text-sm">For founders at inception stage</div>
              </div>
              <div class="xs:text-right shrink-0">
                <div class="text-muted text-xs mb-1">From</div>
                <div class="text-soft-white font-semibold text-2xl sm:text-3xl">R 15,000</div>
                <div class="text-muted text-xs">per program</div>
              </div>
            </div>
            <p class="text-muted leading-relaxed mb-6 sm:mb-8 text-sm">
              A bespoke program for founders building their first or next company. Combines brand identity, governance structure, naming optimization, and leadership alignment.
            </p>
            <div class="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
              ${[
                'Company Naming Optimization Analysis',
                'Legal Entity Structure + IP Registration Advisory',
                'Founder Brand Identity (personal + company)',
                'Workspace Environment Design Brief',
                'Decision-Timing Framework (12-month)',
                'Stakeholder Governance Charter',
                '2× Founder Strategy Sessions',
                'Optimization Sciences Full Report',
              ].map(f => `
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 rounded-full bg-electric/10 border border-electric/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2EA7FF" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span class="text-soft-white/80 text-sm">${f}</span>
                </div>
              `).join('')}
            </div>
            <button onclick="navigate('contact')" class="btn-primary w-full justify-center text-sm sm:text-base" style="background: #2EA7FF; color: #0B0F17;">Start Founder Program →</button>
          </div>
        </div>

        <!-- Comparison note -->
        <div class="card-glass p-7 sm:p-10 text-center max-w-3xl mx-auto">
          <div class="text-gold text-sm font-medium mb-2">Not sure which package fits?</div>
          <p class="text-muted text-sm mb-5 sm:mb-6 leading-relaxed">All packages are fully customizable. During your intake session, we'll recommend the right combination based on your current state and goals.</p>
          <button onclick="navigate('contact')" class="btn-primary mx-auto text-sm sm:text-base">Book a Free Intake →</button>
        </div>
      </div>
    </section>

  </div>
  `;
}
