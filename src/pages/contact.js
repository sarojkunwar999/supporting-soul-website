export function renderContact() {
  return `
  <div id="page-contact" class="page">
    <div class="pt-32 pb-28 bg-obsidian">

      <!-- Header -->
      <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div class="section-label mb-4">Client Intake</div>
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="lg:w-1/2">
            <h1 class="section-title mb-6">Start your<br>engagement.</h1>
            <p class="section-subtitle mb-10">
              Complete the intake form below. We'll review your submission and respond within one business day to schedule your initial strategy session.
            </p>
            <!-- Trust signals -->
            <div class="space-y-4">
              ${[
                { icon: '🔒', label: 'Confidential', desc: 'All information is protected under NDA from first contact.' },
                { icon: '⚡', label: 'Fast Response', desc: 'We respond within 1 business day with a proposed session time.' },
                { icon: '🎯', label: 'No Hard Sell', desc: 'The intake is diagnostic — we only recommend what genuinely fits your needs.' },
              ].map(t => `
                <div class="flex items-start gap-4">
                  <div class="text-xl shrink-0 mt-0.5">${t.icon}</div>
                  <div>
                    <div class="text-soft-white font-medium text-sm">${t.label}</div>
                    <div class="text-muted text-xs mt-0.5">${t.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Form -->
          <div class="lg:w-1/2">
            <form id="intake-form" name="client-intake" data-netlify="true" netlify-honeypot="bot-field" onsubmit="handleIntakeSubmit(event)" class="card-glass p-8 rounded-2xl space-y-6">

              <!-- Netlify hidden fields -->
              <input type="hidden" name="form-name" value="client-intake" />
              <p class="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

              <!-- Name Row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-xs font-semibold tracking-widest uppercase text-soft-white/50 mb-2">First Name *</label>
                  <input type="text" name="firstName" required placeholder="Jane"
                    class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-soft-white text-sm placeholder-muted/40 focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all duration-200" />
                </div>
                <div>
                  <label class="block text-xs font-semibold tracking-widest uppercase text-soft-white/50 mb-2">Last Name *</label>
                  <input type="text" name="lastName" required placeholder="Smith"
                    class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-soft-white text-sm placeholder-muted/40 focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all duration-200" />
                </div>
              </div>

              <!-- Email & Company -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-xs font-semibold tracking-widest uppercase text-soft-white/50 mb-2">Email *</label>
                  <input type="email" name="email" required placeholder="jane@company.com"
                    class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-soft-white text-sm placeholder-muted/40 focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all duration-200" />
                </div>
                <div>
                  <label class="block text-xs font-semibold tracking-widest uppercase text-soft-white/50 mb-2">Company</label>
                  <input type="text" name="company" placeholder="Acme Corp"
                    class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-soft-white text-sm placeholder-muted/40 focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all duration-200" />
                </div>
              </div>

              <!-- Role & Stage -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-xs font-semibold tracking-widest uppercase text-soft-white/50 mb-2">Your Role *</label>
                  <select name="role" required
                    class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-soft-white text-sm focus:outline-none focus:border-gold/50 transition-all duration-200 appearance-none cursor-pointer">
                    <option value="" class="bg-deep-space text-muted">Select role…</option>
                    <option value="founder" class="bg-deep-space">Founder / Co-Founder</option>
                    <option value="cto" class="bg-deep-space">CTO / Technical Lead</option>
                    <option value="ceo" class="bg-deep-space">CEO / MD</option>
                    <option value="product" class="bg-deep-space">Product Manager</option>
                    <option value="legal" class="bg-deep-space">Legal / Compliance</option>
                    <option value="brand" class="bg-deep-space">Brand / Marketing</option>
                    <option value="other" class="bg-deep-space">Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-semibold tracking-widest uppercase text-soft-white/50 mb-2">Company Stage *</label>
                  <select name="stage" required
                    class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-soft-white text-sm focus:outline-none focus:border-gold/50 transition-all duration-200 appearance-none cursor-pointer">
                    <option value="" class="bg-deep-space text-muted">Select stage…</option>
                    <option value="idea" class="bg-deep-space">Idea / Pre-launch</option>
                    <option value="startup" class="bg-deep-space">Startup (0–2 years)</option>
                    <option value="growth" class="bg-deep-space">Growth (2–5 years)</option>
                    <option value="scale" class="bg-deep-space">Scale-up (5+ years)</option>
                    <option value="enterprise" class="bg-deep-space">Enterprise</option>
                  </select>
                </div>
              </div>

              <!-- Services Interest -->
              <div>
                <label class="block text-xs font-semibold tracking-widest uppercase text-soft-white/50 mb-3">Areas of Interest *</label>
                <div class="grid grid-cols-2 gap-3">
                  ${[
                    { id: 'ict', label: 'ICT & Architecture' },
                    { id: 'governance', label: 'Legal & Governance' },
                    { id: 'brand', label: 'Brand Identity' },
                    { id: 'optimization', label: 'Optimization Sciences' },
                  ].map(s => `
                    <label class="flex items-center gap-3 p-3 rounded-xl border border-white/10 cursor-pointer hover:border-gold/30 hover:bg-gold/5 transition-all duration-200 group" for="svc-${s.id}">
                      <input type="checkbox" id="svc-${s.id}" name="services" value="${s.id}"
                        class="w-4 h-4 rounded border-white/20 bg-white/5 accent-gold cursor-pointer" />
                      <span class="text-soft-white/70 text-xs font-medium group-hover:text-soft-white transition-colors">${s.label}</span>
                    </label>
                  `).join('')}
                </div>
              </div>

              <!-- Package Interest -->
              <div>
                <label class="block text-xs font-semibold tracking-widest uppercase text-soft-white/50 mb-2">Package of Interest</label>
                <select name="package"
                  class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-soft-white text-sm focus:outline-none focus:border-gold/50 transition-all duration-200 appearance-none cursor-pointer">
                  <option value="" class="bg-deep-space text-muted">Not sure yet / Help me decide</option>
                  <option value="starter" class="bg-deep-space">Starter — From R 8,500</option>
                  <option value="growth" class="bg-deep-space">Growth — From R 22,000</option>
                  <option value="enterprise" class="bg-deep-space">Enterprise — Custom Scope</option>
                  <option value="founder" class="bg-deep-space">Founder Alignment — From R 15,000</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-xs font-semibold tracking-widest uppercase text-soft-white/50 mb-2">Tell us about your challenge *</label>
                <textarea name="message" required rows="4" placeholder="Describe the key challenge or opportunity you want to address. The more context you provide, the more targeted our intake session will be."
                  class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-soft-white text-sm placeholder-muted/40 focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all duration-200 resize-none leading-relaxed"></textarea>
              </div>

              <!-- Preferred Session Time -->
              <div>
                <label class="block text-xs font-semibold tracking-widest uppercase text-soft-white/50 mb-3">Preferred Session Format</label>
                <div class="flex flex-wrap gap-3">
                  ${['Video Call (Zoom/Meet)', 'Phone Call', 'In-Person (Cape Town)', 'Async (Written Brief)'].map((opt, i) => `
                    <label class="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 cursor-pointer hover:border-gold/30 text-xs text-soft-white/70 hover:text-soft-white transition-all duration-200" for="format-${i}">
                      <input type="radio" id="format-${i}" name="format" value="${opt}" class="accent-gold" ${i === 0 ? 'checked' : ''} />
                      ${opt}
                    </label>
                  `).join('')}
                </div>
              </div>

              <!-- Privacy consent -->
              <div class="flex items-start gap-3 pt-2">
                <input type="checkbox" id="consent" name="consent" required class="w-4 h-4 mt-0.5 accent-gold cursor-pointer shrink-0" />
                <label for="consent" class="text-muted text-xs leading-relaxed cursor-pointer">
                  I consent to Supporting Souls LLP processing my data for consultation purposes. I have read the 
                  <button type="button" onclick="navigate('governance')" class="text-gold hover:underline">Privacy Policy</button>.
                </label>
              </div>

              <!-- Submit -->
              <button type="submit" id="submit-btn" class="btn-primary w-full justify-center text-base py-4">
                Submit Intake Request
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>

            </form>

            <!-- Success State (hidden by default) -->
            <div id="intake-success" class="card-glass p-10 sm:p-12 rounded-2xl text-center hidden">
              <!-- Animated check -->
              <div class="flex items-center justify-center mb-6">
                <div class="relative w-20 h-20">
                  <div class="absolute inset-0 rounded-full bg-emerald-400/10 border border-emerald-400/20 animate-ping" style="animation-duration:2s;"></div>
                  <div class="relative w-20 h-20 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 class="font-display text-2xl sm:text-3xl font-semibold text-soft-white mb-3">Intake Received</h3>
              <p class="text-muted text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                Thank you for reaching out. A member of our Delivery Council will review your submission and be in touch within <span class="text-soft-white font-medium">1 business day</span> to confirm your session.
              </p>
              <!-- What happens next -->
              <div class="text-left space-y-3 mb-8 max-w-xs mx-auto">
                ${[
                  { step: '01', label: 'We review your intake brief' },
                  { step: '02', label: 'You receive a session confirmation' },
                  { step: '03', label: 'Your strategy session begins' },
                ].map(s => `
                  <div class="flex items-center gap-4">
                    <div class="w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <span class="text-gold text-[10px] font-semibold">${s.step}</span>
                    </div>
                    <span class="text-soft-white/70 text-sm">${s.label}</span>
                  </div>
                `).join('')}
              </div>
              <div class="pt-6 border-t border-white/5">
                <div class="text-gold text-xs font-semibold tracking-widest uppercase mb-1">Supporting Souls LLP</div>
                <div class="text-muted text-xs">Delivery Council · Confidential</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Client Inputs Checklist -->
      <div class="max-w-7xl mx-auto px-6 lg:px-8 mt-8">
        <div class="section-label mb-4">Pre-Engagement Checklist</div>
        <h2 class="section-title mb-4">What we'll need from you</h2>
        <p class="section-subtitle mb-12">To make your first session maximally productive, gather the following inputs. You don't need everything — bring what you have.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${[
            {
              category: 'Technical Inputs', icon: '⚙️', color: '#2EA7FF',
              items: [
                'Domain & hosting access credentials',
                'Current cloud/server specifications',
                'Analytics platform & integrations',
                'Booking/CRM system details',
                'Existing API documentation',
              ],
            },
            {
              category: 'Governance Inputs', icon: '⚖️', color: '#D7B56D',
              items: [
                'Legal jurisdiction & registration country',
                'Privacy compliance requirements',
                'Existing consulting or NDA templates',
                'Board structure documentation',
                'IP assets and registrations',
              ],
            },
            {
              category: 'Brand & Creative Inputs', icon: '🎨', color: '#D7B56D',
              items: [
                'Logo files (SVG/AI preferred)',
                'Brand color hex codes',
                'Photography style references',
                'Competitor brand references',
                'Testimonials or case studies',
              ],
            },
            {
              category: 'Optimization Inputs', icon: '🔮', color: '#2EA7FF',
              items: [
                'Workspace floor plans (if applicable)',
                'Organizational structure chart',
                'Founder decision timelines & key dates',
                'Brand naming candidates (if applicable)',
                'Leadership team profiles',
              ],
            },
            {
              category: 'Impact Inputs', icon: '🌱', color: '#D7B56D',
              items: [
                'Existing charity / CSR initiatives',
                'Social mission statement (if any)',
                'Community partnerships',
                'ESG reporting requirements',
              ],
            },
            {
              category: 'Business Context', icon: '📊', color: '#2EA7FF',
              items: [
                'Current revenue & growth targets',
                'Key team members & roles',
                'Primary market & geography',
                'Top 3 strategic challenges',
                'Timeline & urgency indicators',
              ],
            },
          ].map(cat => `
            <div class="card-glass p-7">
              <div class="flex items-center gap-3 mb-5">
                <div class="text-2xl">${cat.icon}</div>
                <h3 class="text-soft-white font-semibold text-sm">${cat.category}</h3>
              </div>
              <ul class="space-y-2.5">
                ${cat.items.map(item => `
                  <li class="flex items-start gap-2.5 text-xs text-muted">
                    <div class="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style="background: ${cat.color}60;"></div>
                    ${item}
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  </div>
  `;
}
