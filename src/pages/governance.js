export function renderGovernance() {
  return `
  <div id="page-governance" class="page">
    <div class="pt-32 pb-28 bg-obsidian">

      <!-- Header -->
      <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div class="section-label mb-4">Trust & Governance</div>
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="lg:w-1/2">
            <h1 class="section-title mb-6">How we operate,<br>ethically and securely</h1>
          </div>
          <div class="lg:w-1/2 flex items-end">
            <p class="section-subtitle">
              Supporting Souls LLP holds itself to the same governance standards we recommend to clients. Every policy, disclaimer, and data standard is published transparently.
            </p>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          ${[
            { icon: '🔒', label: 'Data Security', value: 'ISO-aligned standards' },
            { icon: '📋', label: 'Privacy Policy', value: 'GDPR & POPIA compliant' },
            { icon: '⚖️', label: 'Ethical Framework', value: 'Published and versioned' },
            { icon: '🛡️', label: 'Consulting Disclaimers', value: 'Full transparency' },
          ].map(item => `
            <div class="card-glass p-6 text-center">
              <div class="text-3xl mb-3">${item.icon}</div>
              <div class="text-soft-white font-medium text-sm mb-1">${item.label}</div>
              <div class="text-muted text-xs">${item.value}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Sections -->
      <div class="max-w-4xl mx-auto px-6 lg:px-8 space-y-16">

        <!-- Privacy Policy -->
        <div id="privacy-policy">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">🔒</div>
            <h2 class="font-display text-2xl font-semibold text-soft-white">Privacy Policy</h2>
          </div>
          <div class="card-glass p-8 space-y-6 text-sm text-muted leading-relaxed">
            <div>
              <h3 class="text-soft-white font-semibold text-base mb-3">1. Data We Collect</h3>
              <p>We collect information you provide directly to us during consultation booking, including name, email address, company name, and details about your project. We may collect usage data through analytics tools to improve website performance.</p>
            </div>
            <div>
              <h3 class="text-soft-white font-semibold text-base mb-3">2. How We Use Your Data</h3>
              <p>Data collected is used solely to: (a) respond to consultation inquiries, (b) deliver contracted services, (c) send relevant service communications with your consent, and (d) comply with legal obligations. We do not sell, trade, or rent your personal information to third parties.</p>
            </div>
            <div>
              <h3 class="text-soft-white font-semibold text-base mb-3">3. Data Retention</h3>
              <p>Client data is retained for the duration of the engagement plus 5 years for legal compliance purposes. You may request deletion of your data at any time, subject to applicable legal requirements.</p>
            </div>
            <div>
              <h3 class="text-soft-white font-semibold text-base mb-3">4. Your Rights (GDPR / POPIA)</h3>
              <p>You have the right to access, correct, export, or delete your personal data. You may withdraw consent for communications at any time. Contact privacy@supportingsouls.co to exercise these rights.</p>
            </div>
            <div>
              <h3 class="text-soft-white font-semibold text-base mb-3">5. Security</h3>
              <p>We implement industry-standard technical and organizational measures to protect your data. All data transmissions are encrypted. Access to client data is restricted to authorized personnel on a need-to-know basis.</p>
            </div>
          </div>
        </div>

        <!-- Consulting Disclaimers -->
        <div id="consulting-disclaimers">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">📋</div>
            <h2 class="font-display text-2xl font-semibold text-soft-white">Consulting Disclaimers</h2>
          </div>
          <div class="card-glass p-8 space-y-6 text-sm text-muted leading-relaxed">
            <div>
              <h3 class="text-soft-white font-semibold text-base mb-3">General Advisory Disclaimer</h3>
              <p>The recommendations, strategies, and frameworks provided by Supporting Souls LLP are advisory in nature. Clients retain full decision-making authority. Supporting Souls LLP does not guarantee specific outcomes from any consulting engagement.</p>
            </div>
            <div>
              <h3 class="text-soft-white font-semibold text-base mb-3">ICT & Technical Advisory</h3>
              <p>Technology recommendations are based on information available at the time of engagement. Technology landscapes change rapidly. Clients are advised to validate all technical recommendations with their internal teams before implementation.</p>
            </div>
            <div>
              <h3 class="text-soft-white font-semibold text-base mb-3">Legal Advisory Disclaimer</h3>
              <p>Supporting Souls LLP provides legal strategy consulting and governance framework advisory. This does not constitute legal advice and does not create an attorney-client relationship. Clients are advised to engage qualified legal counsel for jurisdiction-specific legal matters.</p>
            </div>
            <div>
              <h3 class="text-soft-white font-semibold text-base mb-3">Optimization Sciences Disclaimer</h3>
              <p>Optimization sciences advisory (including spatial heuristics, cycle-based modeling, and numerical analysis) are presented as operational optimization frameworks derived from interdisciplinary research. These recommendations are analytical in nature and are not presented as predictive certainties. Clients should apply their own judgment in implementing any such recommendations.</p>
            </div>
          </div>
        </div>

        <!-- Data Security Standards -->
        <div id="data-security">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center">🛡️</div>
            <h2 class="font-display text-2xl font-semibold text-soft-white">Data Security Standards</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${[
              { icon: '🔐', title: 'End-to-End Encryption', desc: 'All client communications and documents are encrypted in transit (TLS 1.3) and at rest (AES-256).' },
              { icon: '🏗️', title: 'Zero-Trust Access', desc: 'Internal systems operate on zero-trust principles. No implicit trust — every access request is verified.' },
              { icon: '📁', title: 'Data Classification', desc: 'Client data is classified, labelled, and handled according to a formal data classification policy.' },
              { icon: '🔄', title: 'Regular Audits', desc: 'Security posture is reviewed quarterly. Vulnerability assessments conducted before major engagements.' },
              { icon: '👁️', title: 'Access Logging', desc: 'All access to client data is logged and auditable. Breach notifications within 72 hours of discovery.' },
              { icon: '💾', title: 'Backup & Recovery', desc: 'Client data backed up with geographically distributed copies. Recovery tested quarterly.' },
            ].map(s => `
              <div class="card-glass p-6">
                <div class="flex gap-4">
                  <div class="text-2xl shrink-0">${s.icon}</div>
                  <div>
                    <div class="text-soft-white font-medium text-sm mb-2">${s.title}</div>
                    <div class="text-muted text-xs leading-relaxed">${s.desc}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Ethical Consulting Framework -->
        <div id="ethics">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">⚖️</div>
            <h2 class="font-display text-2xl font-semibold text-soft-white">Ethical Consulting Framework</h2>
          </div>
          <div class="card-glass p-8 space-y-6 text-sm text-muted leading-relaxed">
            <div class="card-gold p-6 rounded-xl mb-6">
              <p class="text-soft-white/90 text-sm italic leading-relaxed">"We only take engagements we believe we can add genuine value to. We will turn down work that conflicts with our impact mandate or where we cannot serve the client with integrity."</p>
              <p class="text-gold text-xs mt-3">— Supporting Souls LLP Operating Principles</p>
            </div>
            ${[
              { principle: 'Conflict of Interest Policy', desc: 'We do not simultaneously advise competing clients in the same market without explicit consent from all parties.' },
              { principle: 'Honest Assessment', desc: 'Our recommendations are based on evidence, not on what maximizes our billing. If a cheaper solution serves you better, we will recommend it.' },
              { principle: 'Client Autonomy', desc: 'All recommendations are advisory. We do not make decisions on behalf of clients without explicit delegated authority.' },
              { principle: 'Whistleblower Commitment', desc: 'We will not participate in or conceal unlawful activity by clients. Our consultants are obligated to report criminal conduct as required by law.' },
              { principle: 'Diversity & Inclusion', desc: 'Our Council reflects diverse expertise, backgrounds, and perspectives. We actively recruit from underrepresented communities in technology and law.' },
            ].map(item => `
              <div class="border-b border-white/5 pb-5">
                <div class="text-soft-white font-medium mb-2">${item.principle}</div>
                <p>${item.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Contact for Governance Queries -->
      <div class="max-w-4xl mx-auto px-6 lg:px-8 mt-16">
        <div class="card-glass p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div class="text-soft-white font-semibold mb-1">Governance queries?</div>
            <div class="text-muted text-sm">Contact our governance team at <span class="text-gold">governance@supportingsouls.co</span></div>
          </div>
          <button onclick="navigate('contact')" class="btn-secondary shrink-0">Contact Us →</button>
        </div>
      </div>

    </div>
  </div>
  `;
}
