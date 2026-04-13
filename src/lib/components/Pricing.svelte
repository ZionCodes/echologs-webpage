<script>
  const plans = [
    {
      tag: null,
      name: 'FREE',
      price: '$0',
      period: 'forever',
      featured: false,
      cta: 'Get started free',
      href: 'https://app.echologs.com',
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
      price: '$8',
      period: 'per month',
      featured: true,
      cta: 'Start Pro',
      href: 'https://app.echologs.com',
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
      price: '$29',
      period: 'per month',
      featured: false,
      cta: 'Start Team',
      href: 'https://app.echologs.com',
      features: [
        'Unlimited executions',
        '1-year log retention',
        'Unlimited scripts',
        'Unlimited API keys',
        'Email + Slack alerts',
        'Realtime streaming',
        'Public status pages',
        'Up to 10 team members',
      ],
    },
  ]
</script>

<div id="pricing" class="reveal relative z-10 w-full">
  <div class="w-full max-w-[1100px] mx-auto px-6 py-[60px] lg:py-[88px]">

    <div class="text-center mb-14">
      <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// pricing</p>
      <h2 class="section-heading">Simple pricing.<br>Cancel anytime.</h2>
      <p class="section-subtext">Start free. Upgrade when your scripts matter enough to pay for visibility.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-[2px] bg-(--border) border border-(--border) rounded-xl overflow-hidden mb-8">
      {#each plans as plan (plan.name)}
        <div
          class="p-9 flex flex-col transition-colors duration-300"
          style="background: {plan.featured ? 'var(--surface2)' : 'var(--surface)'};"
        >

          <div class="h-7 mb-5 flex items-center">
            {#if plan.tag}
              <span class="font-mono text-[10px] text-(--green) bg-(--green-dim) border border-[#00e57a33] rounded-full px-2.5 py-[3px]">
                {plan.tag}
              </span>
            {/if}
          </div>

          <p class="font-mono text-[13px] text-(--muted) mb-2">{plan.name}</p>
          <p class="text-[3rem] font-extrabold tracking-[-2px] leading-none mb-1.5">{plan.price}</p>
          <p class="font-mono text-xs text-(--muted) mb-7">{plan.period}</p>

          <ul class="plan-features flex flex-col gap-2.5 mb-8 flex-1">
            {#each plan.features as feat (feat)}
              <li>{feat}</li>
            {/each}
          </ul>

          <a
            href={plan.href}
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl font-mono text-sm font-bold transition-all duration-150 text-center no-underline"
            style="background: {plan.featured ? 'var(--green)' : 'transparent'}; color: {plan.featured ? '#080b0f' : 'var(--text)'}; border: 1px solid {plan.featured ? 'transparent' : 'var(--border)'};"
          >
            {plan.cta} →
          </a>

        </div>
      {/each}
    </div>

    <p class="text-center font-mono text-xs text-(--muted)">
      Pro and Team also available as yearly (save 33%) and lifetime plans. &nbsp;
      <a href="https://app.echologs.com/account" class="text-(--green) hover:underline">
        See all options →
      </a>
    </p>

  </div>
</div>