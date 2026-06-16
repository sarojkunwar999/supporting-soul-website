export function renderCouncil() {
  return `
  <div id="page-council" class="page">

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section class="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-obsidian">
      <div class="absolute inset-0" style="background-image: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(215,181,109,0.06) 0%, transparent 70%);"></div>
      <!-- Stock image right-panel desktop -->
      <div class="hidden lg:block absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
          alt="Expert team collaboration"
          class="w-full h-full object-cover opacity-20"
        />
        <div class="absolute inset-0" style="background: linear-gradient(to right, #0B0F17 0%, transparent 40%);"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="section-label mb-3 sm:mb-4">The Delivery Council</div>
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:max-w-3xl">
          <div>
            <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-soft-white leading-tight mb-4 sm:mb-6">
              An expert ecosystem,<br>not a single firm
            </h1>
            <p class="section-subtitle">
              Supporting Souls LLP operates as a curated delivery council — assembling best-in-class practitioners for each engagement rather than deploying generalist teams.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ 3-STEP MODEL ═══════════════════ -->
    <section class="py-12 sm:py-16 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          ${[
            { step: '01', title: 'Intake & Scoping', desc: 'Your engagement begins with a structured intake to map requirements across all four disciplines.' },
            { step: '02', title: 'Council Assembly', desc: 'The right combination of architects, legal strategists, brand designers, and analysts is assembled.' },
            { step: '03', title: 'Unified Delivery', desc: 'All disciplines deliver under a single project framework with integrated reporting and accountability.' },
          ].map(s => `
            <div class="card-glass p-6 sm:p-8">
              <div class="text-gold/30 font-display text-4xl sm:text-5xl font-bold mb-3 sm:mb-4">${s.step}</div>
              <h3 class="text-soft-white font-semibold text-base sm:text-lg mb-2 sm:mb-3">${s.title}</h3>
              <p class="text-muted text-sm leading-relaxed">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════ COUNCIL ROLES ═══════════════════ -->
    <section class="py-14 sm:py-20 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="section-label mb-3 sm:mb-4">Council Roles</div>
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-soft-white mb-8 sm:mb-12 leading-tight">The four pillars of our delivery model</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          ${[
            {
              role: 'Software Architects', color: '#2EA7FF',
              icon: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 0-2-2V9m0 0h18',
              desc: 'Senior engineers and solution architects with deep expertise in cloud-native design, distributed systems, and API architecture. Each has led infrastructure at scale.',
              expertise: ['Cloud Architecture (AWS/GCP/Azure)', 'Microservices & API Design', 'DevSecOps & SRE', 'System Integration & Migration'],
            },
            {
              role: 'Legal Strategists', color: '#D7B56D',
              icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              desc: 'Corporate lawyers and governance advisors with backgrounds in technology law, data privacy, and regulatory compliance. They translate complex legal requirements into operational frameworks.',
              expertise: ['Technology Law', 'GDPR / POPIA Compliance', 'IP Strategy & Registration', 'Corporate Governance'],
            },
            {
              role: 'Brand Designers', color: '#D7B56D',
              icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
              desc: 'Visual identity specialists and brand strategists trained in luxury, technology, and institutional branding. They build brand systems with the precision of design engineers.',
              expertise: ['Visual Identity Architecture', 'Naming & Verbal Strategy', 'Design Systems Engineering', 'Digital UI/UX Systems'],
            },
            {
              role: 'Optimization Analysts', color: '#2EA7FF',
              icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              desc: 'Interdisciplinary analysts who apply optimization science frameworks across workspace design, leadership timing, and identity strategy — producing data-informed recommendations.',
              expertise: ['Spatial Configuration Analysis', 'Decision-Cycle Modeling', 'Identity Heuristics', 'Organizational Alignment Reports'],
            },
          ].map(member => `
            <div class="card-glass p-6 sm:p-8 relative overflow-hidden group">
              <div class="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style="background: radial-gradient(circle, ${member.color}10 0%, transparent 70%); transform: translate(30%, -30%);"></div>
              <div class="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-6">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border" style="background: ${member.color}10; border-color: ${member.color}20;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${member.color}" stroke-width="1.5" stroke-linecap="round"><path d="${member.icon}"/></svg>
                </div>
                <div>
                  <h3 class="text-soft-white font-semibold text-lg sm:text-xl mb-1">${member.role}</h3>
                  <div class="w-8 h-px" style="background: ${member.color}60;"></div>
                </div>
              </div>
              <p class="text-muted text-sm leading-relaxed mb-4 sm:mb-6">${member.desc}</p>
              <div class="space-y-2">
                ${member.expertise.map(e => `
                  <div class="flex items-center gap-2 text-sm" style="color: ${member.color}80;">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                    <span class="text-soft-white/70">${e}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════ PRINCIPLES ═══════════════════ -->
    <section class="py-14 sm:py-20 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="section-label mb-3 sm:mb-4">Council Principles</div>
        <h2 class="font-display text-2xl sm:text-3xl font-semibold text-soft-white mb-8 sm:mb-12">How we work</h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          ${[
            { title: 'Accountability-First', icon: '⚖', desc: 'Every council member operates under a defined scope-of-work with measurable deliverables and accountability checkpoints.' },
            { title: 'No Generalists', icon: '🎯', desc: 'We do not deploy generalists to specialist work. Each engagement receives the practitioner with the deepest relevant expertise.' },
            { title: 'Integrated Output', icon: '🔗', desc: 'All disciplines coordinate under one project framework. Your CTO, legal team, brand lead, and optimization analyst move in sync.' },
          ].map(p => `
            <div class="card-glass p-6 sm:p-8 text-center">
              <div class="text-3xl sm:text-4xl mb-4 sm:mb-5">${p.icon}</div>
              <h3 class="text-soft-white font-semibold text-base sm:text-lg mb-2 sm:mb-3">${p.title}</h3>
              <p class="text-muted text-sm leading-relaxed">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════ CTA ═══════════════════ -->
    <section class="py-12 sm:py-16 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card-glass p-8 sm:p-12 text-center">
          <h3 class="font-display text-2xl sm:text-3xl font-semibold text-soft-white mb-3 sm:mb-4">Ready to work with the Council?</h3>
          <p class="text-muted mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">Book your intake session and we'll assemble the right team for your engagement.</p>
          <button onclick="navigate('contact')" class="btn-primary text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 mx-auto">Book an Intake →</button>
        </div>
      </div>
    </section>

  </div>
  `;
}
