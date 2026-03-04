<script>
    const plans = [
      {
        tag: null,
        name: 'FREE',
        price: '$0',
        period: 'forever',
        featured: false,
        features: ['500 executions / month', '7-day log retention', '1 script', 'Email alerts on failure', 'Dashboard access'],
      },
      {
        tag: 'MOST POPULAR',
        name: 'STARTER',
        price: '$9',
        period: 'per month',
        featured: true,
        features: ['5,000 executions / month', '30-day log retention', 'Up to 5 scripts', 'Slack + email alerts', 'Dashboard access'],
      },
      {
        tag: null,
        name: 'PRO',
        price: '$29',
        period: 'per month',
        featured: false,
        features: ['50,000 executions / month', '90-day log retention', 'Unlimited scripts', 'Slack, Discord + email alerts', 'Success rate analytics'],
      },
    ];
  </script>
  
  <div class="reveal relative z-10 w-full">
    <div class="w-full max-w-[1100px] mx-auto px-6 py-[60px] lg:py-[88px]">
  
      <div class="text-center mb-14">
        <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// pricing</p>
        <h2 class="section-heading">Simple pricing.<br>Cancel anytime.</h2>
        <p class="section-subtext">Start free. Upgrade when you're ready. No usage surprises.</p>
      </div>
  
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-[2px] bg-(--border) border border-(--border) rounded-xl overflow-hidden">
        {#each plans as plan}
          <div
            class="p-9 transition-colors duration-300"
            style="background: {plan.featured ? 'var(--surface2)' : 'var(--surface)'};"
          >
            {#if plan.tag}
              <div class="inline-block font-mono text-[10px] text-(--green) bg-(--green-dim) border border-[#00e57a33] rounded-full px-2.5 py-[3px] mb-5">
                {plan.tag}
              </div>
            {:else}
              <div class="h-7 mb-5"></div>
            {/if}
            <p class="font-mono text-[13px] text-(--muted) mb-2">{plan.name}</p>
            <p class="text-[3rem] font-extrabold tracking-[-2px] leading-none mb-1.5">{plan.price}</p>
            <p class="font-mono text-xs text-(--muted) mb-7">{plan.period}</p>
            <ul class="plan-features flex flex-col gap-2.5">
              {#each plan.features as feat}
                <li>{feat}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
  
    </div>
  </div>