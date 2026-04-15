<script>
  let billingCycle = $state('monthly') // 'monthly' | 'yearly' | 'lifetime'

  const plans = [
    {
      tag: null,
      name: 'FREE',
      featured: false,
      price: { monthly: '$0', yearly: '$0', lifetime: '$0' },
      period: { monthly: 'forever', yearly: 'forever', lifetime: 'forever' },
      cta: { monthly: 'Get started free', yearly: 'Get started free', lifetime: 'Get started free' },
      href: { monthly: 'https://app.echologs.com', yearly: 'https://app.echologs.com', lifetime: 'https://app.echologs.com' },
      features: [
        '1,000 executions / month',
        '14-day log retention',
        'Up to 3 scripts',
        '2 API keys',
        'Email alerts on failure',
        'Dashboard access',
      ],
    },
    {
      tag: 'MOST POPULAR',
      name: 'PRO',
      featured: true,
      price: { monthly: '$8', yearly: '$64', lifetime: '$149' },
      period: { monthly: 'per month', yearly: 'per year', lifetime: 'one-time' },
      cta: { monthly: 'Start Pro', yearly: 'Start Pro Yearly', lifetime: 'Get Lifetime Access' },
      href: { monthly: 'https://app.echologs.com', yearly: 'https://app.echologs.com', lifetime: 'https://app.echologs.com' },
      savings: { yearly: 'Save $32 — 4 months free', lifetime: 'Never pay again' },
      features: [
        '10,000 executions / month',
        '90-day log retention',
        'Up to 25 scripts',
        '10 API keys',
        'Email + Slack alerts',
        'Realtime streaming',
        'Public status pages',
      ],
    },
    {
      tag: null,
      name: 'TEAM',
      featured: false,
      price: { monthly: '$29', yearly: '$232', lifetime: '$499' },
      period: { monthly: 'per month', yearly: 'per year', lifetime: 'one-time' },
      cta: { monthly: 'Start Team', yearly: 'Start Team Yearly', lifetime: 'Get Team Lifetime' },
      href: { monthly: 'https://app.echologs.com', yearly: 'https://app.echologs.com', lifetime: 'https://app.echologs.com' },
      savings: { yearly: 'Save $116 — 4 months free', lifetime: 'Never pay again' },
      features: [
        'Unlimited executions',
        '1-year log retention',
        'Unlimited scripts',
        'Unlimited API keys',
        'Email + Slack alerts',
        'Realtime streaming',
        'Public status pages',
        'Up to 10 team members - coming soon',
      ],
    },
  ]
</script>

<div id="pricing" class="reveal relative z-10 w-full">
  <div class="w-full max-w-[1100px] mx-auto px-6 py-[60px] lg:py-[88px]">

    <div class="text-center mb-10">
      <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// pricing</p>
      <h2 class="section-heading">Simple pricing.<br>Cancel anytime.</h2>
      <p class="section-subtext mb-8">Start free. Upgrade when your scripts matter enough to pay for visibility.</p>

      <!-- Toggle -->
      <div class="inline-flex items-center gap-1 p-1 rounded-xl border border-(--border)" style="background: var(--surface);">
        {#each [['monthly','Monthly'],['yearly','Yearly'],['lifetime','Lifetime']] as [val,label]}
          <button
            onclick={() => billingCycle = val}
            class="font-mono text-xs font-bold px-5 py-2.5 rounded-lg transition-all duration-150"
            style="background:{billingCycle===val?'var(--green)':'transparent'};color:{billingCycle===val?'#080b0f':'var(--muted)'};"
          >
            {label}
          </button>
        {/each}
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-[2px] bg-(--border) border border-(--border) rounded-xl overflow-hidden mb-8">
      {#each plans as plan (plan.name)}
        <div
          class="p-9 flex flex-col transition-colors duration-300"
          style="background:{plan.featured?'var(--surface2)':'var(--surface)'};"
        >

          <div class="h-7 mb-5 flex items-center">
            {#if plan.tag}
              <span class="font-mono text-[10px] text-(--green) bg-(--green-dim) border border-[#00e57a33] rounded-full px-2.5 py-[3px]">
                {plan.tag}
              </span>
            {/if}
          </div>

          <p class="font-mono text-[13px] text-(--muted) mb-2">{plan.name}</p>

          <div class="mb-1.5">
            <span class="text-[3rem] font-extrabold tracking-[-2px] leading-none">
              {plan.price[billingCycle]}
            </span>
          </div>

          <p class="font-mono text-xs text-(--muted) mb-7">
            {plan.period[billingCycle]}
          </p>

          <ul class="plan-features flex flex-col gap-2.5 mb-8 flex-1">
            {#each plan.features as feat (feat)}
              <li>{feat}</li>
            {/each}
          </ul>

          <a
            href={plan.href[billingCycle]}
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl font-mono text-sm font-bold transition-all duration-150 text-center no-underline"
            style="background:{plan.featured?'var(--green)':'transparent'};color:{plan.featured?'#080b0f':'var(--text)'};border:1px solid {plan.featured?'transparent':'var(--border)'};"
          >
            {plan.cta[billingCycle]} →
          </a>

        </div>
      {/each}
    </div>



  </div>
</div>