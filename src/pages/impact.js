export function renderImpact() {
  return `
  <div id="page-impact" class="page">

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section class="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-obsidian">
      <div class="absolute inset-0" style="background-image: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(215,181,109,0.07) 0%, transparent 70%);"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="section-label mb-3 sm:mb-4">Karmic Equity</div>
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div class="lg:w-1/2">
            <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-soft-white leading-tight mb-4 sm:mb-6">
              Impact is allocated,<br>not optional
            </h1>
          </div>
          <div class="lg:w-1/2 lg:flex lg:items-end">
            <p class="section-subtitle">
              Every engagement at Supporting Souls LLP includes a mandatory impact allocation — a portion of revenue committed to education, community empowerment, and ethical technology initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ 15% BIG STAT ═══════════════════ -->
    <section class="py-12 sm:py-16 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden p-10 sm:p-16 text-center mb-10 sm:mb-16" style="background: linear-gradient(135deg, rgba(215,181,109,0.08) 0%, rgba(16,24,39,0.95) 50%, rgba(46,167,255,0.05) 100%); border: 1px solid rgba(215,181,109,0.15);">
          <div class="absolute inset-0" style="background-image: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(215,181,109,0.06) 0%, transparent 70%);"></div>
          <div class="relative">
            <div class="font-display text-7xl sm:text-8xl font-semibold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent mb-3 sm:mb-4">15%</div>
            <div class="text-soft-white text-xl sm:text-2xl font-medium mb-3 sm:mb-4">of every engagement fee</div>
            <div class="text-muted text-base sm:text-lg max-w-md mx-auto">is allocated to our Impact Portfolio — distributed across three pillars of community investment.</div>
          </div>
        </div>

        <!-- Three Pillars -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          ${[
            {
              pct: '40%', of: 'of impact fund', title: 'Education Access',
              icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
              color: '#D7B56D',
              items: ['Digital literacy programs', 'Tech skills training for youth', 'Open-source learning tools', 'Scholarship partnerships'],
            },
            {
              pct: '35%', of: 'of impact fund', title: 'Community Empowerment',
              icon: 'M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0',
              color: '#2EA7FF',
              items: ['SME technology grants', 'Women-in-tech initiatives', 'Rural digital infrastructure', 'Entrepreneur mentorship'],
            },
            {
              pct: '25%', of: 'of impact fund', title: 'Ethical Technology',
              icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              color: '#D7B56D',
              items: ['AI ethics research support', 'Open-source contributions', 'Data rights advocacy', 'Responsible tech publishing'],
            },
          ].map(pillar => `
            <div class="card-glass p-6 sm:p-8 relative overflow-hidden">
              <div class="absolute top-3 right-4 font-display text-4xl sm:text-5xl font-bold opacity-10" style="color: ${pillar.color}">${pillar.pct}</div>
              <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 border" style="background: ${pillar.color}10; border-color: ${pillar.color}20;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${pillar.color}" stroke-width="1.5" stroke-linecap="round"><path d="${pillar.icon}"/></svg>
              </div>
              <div class="text-xs font-semibold mb-1" style="color: ${pillar.color}60;">${pillar.pct} ${pillar.of}</div>
              <h3 class="text-soft-white font-semibold text-lg sm:text-xl mb-2 sm:mb-3">${pillar.title}</h3>
              <div class="w-8 h-px mb-4 sm:mb-5" style="background: ${pillar.color}40;"></div>
              <ul class="space-y-1.5 sm:space-y-2">
                ${pillar.items.map(i => `<li class="flex items-center gap-2 text-muted text-sm">
                  <div class="w-1 h-1 rounded-full shrink-0" style="background: ${pillar.color}80;"></div>
                  ${i}
                </li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════ PHILOSOPHY + CALCULATOR ═══════════════════ -->
    <section class="py-14 sm:py-20 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <!-- Philosophy column -->
          <div>
            <!-- Stock image -->
            <div class="relative rounded-2xl overflow-hidden h-48 sm:h-60 mb-6 sm:mb-8">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=80"
                alt="Community and education impact"
                class="w-full h-full object-cover opacity-50"
              />
              <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(11,15,23,0.7) 0%, rgba(215,181,109,0.07) 100%);"></div>
              <div class="absolute bottom-3 left-4">
                <span class="text-xs text-gold/80 font-semibold tracking-widest uppercase">Ripple effect by design</span>
              </div>
            </div>
            <div class="section-label mb-3 sm:mb-4">The Philosophy</div>
            <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-soft-white mb-4 sm:mb-6">Why "Karmic Equity"?</h2>
            <p class="text-muted leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              The term is intentional. In our operating philosophy, every value exchange — consulting, advisory, design — creates residual energy in the ecosystem. Organizations that invest in the communities around them build more resilient brands, deeper trust, and sustainable competitive advantages.
            </p>
            <p class="text-muted leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              This is not philanthropic posturing. It is a structured allocation model embedded in our commercial terms. When you engage Supporting Souls LLP, your investment contributes to a broader technological ecosystem — the same ecosystem your organization depends on for talent, infrastructure, and market growth.
            </p>
            <div class="flex flex-col gap-3 sm:gap-4">
              ${[
                { label: 'Transparency', value: 'Annual impact report published' },
                { label: 'Accountability', value: 'Allocation tracked and audited' },
                { label: 'Client Visibility', value: 'Your contribution is itemized' },
              ].map(item => `
                <div class="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.025] border border-white/[0.08]">
                  <div class="w-2 h-2 rounded-full bg-gold shrink-0"></div>
                  <div>
                    <span class="text-gold text-sm font-medium">${item.label}:</span>
                    <span class="text-muted text-sm ml-2">${item.value}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Calculator column -->
          <div>
            <div class="card-gold p-7 sm:p-10 rounded-2xl">
              <div class="section-label mb-4 sm:mb-6">Impact Calculator</div>
              <div class="space-y-4 sm:space-y-6">
                ${[
                  { label: 'Starter Engagement (R 8,500)', impact: 'R 1,275 to Impact Portfolio' },
                  { label: 'Growth Engagement (R 22,000)', impact: 'R 3,300 to Impact Portfolio' },
                  { label: 'Founder Program (R 15,000)', impact: 'R 2,250 to Impact Portfolio' },
                ].map(row => `
                  <div class="flex flex-col xs:flex-row xs:items-center justify-between gap-2 py-3 sm:py-4 border-b border-gold/10">
                    <div class="text-soft-white/70 text-sm">${row.label}</div>
                    <div class="text-gold text-sm font-semibold shrink-0">${row.impact}</div>
                  </div>
                `).join('')}
                <p class="text-muted text-xs leading-relaxed pt-2">
                  Impact allocations are deducted from gross revenue and distributed quarterly to approved partner organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ CTA ═══════════════════ -->
    <section class="py-12 sm:py-16 bg-obsidian">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card-glass p-8 sm:p-12 text-center">
          <div class="text-3xl sm:text-4xl mb-3 sm:mb-4">🌱</div>
          <h3 class="font-display text-2xl sm:text-3xl font-semibold text-soft-white mb-3 sm:mb-4">Your engagement creates ripples</h3>
          <p class="text-muted mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">Build your organization and contribute to the ecosystem at the same time.</p>
          <button onclick="navigate('contact')" class="btn-primary text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 mx-auto">Start an Engagement →</button>
        </div>
      </div>
    </section>

  </div>
  `;
}
