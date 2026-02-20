<script>
  import { onMount } from 'svelte';
  import { toggleMode, mode } from 'mode-watcher';

  // Built as a variable so Cloudflare email obfuscation can't mangle it
  const emailPlaceholder = ['your', 'email.com'].join('@');

  let email1 = $state('');
  let email2 = $state('');
  let submitted1 = $state(false);
  let submitted2 = $state(false);
  let error1 = $state(false);
  let error2 = $state(false);

  function handleSubmit(num) {
    if (num === 1) {
      if (!email1 || !email1.includes('@')) { error1 = true; return; }
      error1 = false; submitted1 = true;
      saveToWaitlist(email1);
    } else {
      if (!email2 || !email2.includes('@')) { error2 = true; return; }
      error2 = false; submitted2 = true;
      saveToWaitlist(email2);
    }
  }

  async function saveToWaitlist(email) {
    // Replace with: await supabase.from('waitlist').insert({ email })
    console.log('Waitlist signup:', email);
  }

  onMount(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  // Input classes — $derived so they react to error state (Svelte 5 runes)
  const input1Classes = $derived([
    'form-input flex-1 min-w-0 bg-(--surface) border rounded-lg px-[18px] py-3.5 font-mono text-sm text-(--text)',
    error1 ? 'border-(--red) form-input-error' : 'border-(--border)'
  ].join(' '));

  const input2Classes = $derived([
    'form-input flex-1 min-w-0 bg-(--surface) border rounded-lg px-[18px] py-3.5 font-mono text-sm text-(--text)',
    error2 ? 'border-(--red) form-input-error' : 'border-(--border)'
  ].join(' '));
</script>

<svelte:head>
  <title>EchoLogs — Know When Your AI Scripts Fail</title>
  <meta name="description" content="Cursor and Claude write the code. EchoLogs remembers everything." />
</svelte:head>

<!-- ════════════════════════════════════════════════ -->
<!-- NAV                                              -->
<!-- ════════════════════════════════════════════════ -->
<nav
  class="relative z-10 w-full flex items-center justify-between px-6 py-5 border-b border-(--border) backdrop-blur-md transition-colors duration-300"
  style="background: var(--nav-bg);"
>
  <div class="flex items-center gap-2 font-mono text-[17px] font-semibold text-(--green) tracking-tight">
    <div class="logo-dot"></div>
    echologs
  </div>

  <div class="flex items-center gap-3">
    <button
      class="theme-toggle flex items-center justify-center w-9 h-9 rounded-lg border border-(--border) bg-(--surface) cursor-pointer text-base leading-none"
      onclick={toggleMode}
      aria-label="Toggle theme"
    >
      {mode.current === 'dark' ? '☀️' : '🌙'}
    </button>
    <span class="font-mono text-[11px] text-(--muted) border border-(--border) rounded-full px-3 py-1">
      // coming soon
    </span>
  </div>
</nav>

<!-- ════════════════════════════════════════════════ -->
<!-- HERO                                             -->
<!-- ════════════════════════════════════════════════ -->
<div class="relative z-10 w-full">
  <div class="w-full max-w-[900px] mx-auto px-6 pt-14 pb-12 text-center lg:pt-20 lg:pb-16">

    <div class="fade-1 inline-flex items-center gap-2 bg-(--green-dim) border border-[#00e57a44] rounded-full px-4 py-1.5 font-mono text-xs text-(--green) mb-9">
      <div class="badge-dot"></div>
      Observability for AI-generated scripts
    </div>

    <h1 class="hero-title fade-2">
      Cursor and Claude write the code.<br>
      <em>We remember everything.</em>
    </h1>

    <p class="hero-sub fade-3">
      Every execution. Every error. Every failure — automatically logged in one dashboard.
      <strong>So when your script breaks at 3am, you already know why.</strong>
    </p>

    {#if !submitted1}
      <div class="fade-4 flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto mb-5">
        <input
          bind:value={email1}
          onkeydown={(e) => e.key === 'Enter' && handleSubmit(1)}
          type="email"
          placeholder={emailPlaceholder}
          class={input1Classes}
        />
        <button
          class="form-btn bg-(--green) text-[#080b0f] rounded-lg px-6 py-3.5 font-sans text-sm font-bold cursor-pointer whitespace-nowrap tracking-[0.3px] border-0"
          onclick={() => handleSubmit(1)}
        >
          Join Waitlist
        </button>
      </div>
    {:else}
      <div class="fade-4 max-w-[440px] mx-auto mb-5 bg-(--green-dim) border border-[#00e57a44] rounded-lg px-6 py-3.5 font-mono text-sm text-(--green) text-center">
        ✓ You're on the list — we'll email you when EchoLogs launches.
      </div>
    {/if}

    <p class="fade-5 font-mono text-xs text-(--muted) text-center">
      Early access gets 3 months free on Pro. No spam, ever.
    </p>
  </div>
</div>

<!-- ════════════════════════════════════════════════ -->
<!-- TERMINAL                                         -->
<!-- ════════════════════════════════════════════════ -->
<div class="reveal relative z-10 w-full">
  <div class="max-w-[760px] mx-auto px-6 pb-20">
    <div
      class="terminal bg-(--surface) border border-(--border) rounded-xl overflow-hidden transition-colors duration-300"
      style="box-shadow: 0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,229,122,0.05);"
    >
      <div class="bg-(--surface2) border-b border-(--border) px-4 py-3 flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
        <div class="w-3 h-3 rounded-full bg-[#febc2e]"></div>
        <div class="w-3 h-3 rounded-full bg-[#28c840]"></div>
        <span class="font-mono text-xs text-(--muted) mx-auto">echologs — execution history</span>
      </div>

      <div class="p-6 font-mono text-[13.5px] leading-[1.85] overflow-x-auto">
        <div class="flex gap-3 whitespace-nowrap">
          <span class="text-(--muted2) min-w-[76px]">09:00:01</span>
          <span class="text-(--green)">✓ PASS</span>
          <span class="text-(--text)">daily-report-sync</span>
          <span class="text-(--muted)">— 2.4s</span>
        </div>
        <div class="flex gap-3 whitespace-nowrap">
          <span class="text-(--muted2) min-w-[76px]">09:00:01</span>
          <span class="text-(--green)">✓ PASS</span>
          <span class="text-(--text)">notion-backup</span>
          <span class="text-(--muted)">— 0.8s</span>
        </div>
        <div class="flex gap-3 whitespace-nowrap">
          <span class="text-(--muted2) min-w-[76px]">02:00:04</span>
          <span class="text-(--red)">✗ FAIL</span>
          <span class="text-(--text)">stripe-invoice-pull</span>
          <span class="text-(--muted)">— 0.2s</span>
        </div>
        <hr class="border-0 border-t border-(--border) my-3" />
        <div class="flex gap-3 flex-wrap whitespace-normal">
          <span class="min-w-[76px]"></span>
          <span class="text-(--red)">TypeError:</span>
          <span class="text-(--text)">Cannot read properties of undefined (reading 'data')</span>
        </div>
        <div class="flex gap-3">
          <span class="min-w-[76px]"></span>
          <span class="text-(--muted)">at stripe-invoice-pull.py line 34</span>
        </div>
        <div class="flex gap-3">
          <span class="min-w-[76px]"></span>
          <span class="text-(--muted)">→ Slack alert sent to #alerts</span>
        </div>
        <div class="flex gap-3">
          <span class="min-w-[76px]"></span>
          <span class="cursor"></span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ════════════════════════════════════════════════ -->
<!-- PROOF STRIP                                      -->
<!-- ════════════════════════════════════════════════ -->
<div class="reveal relative z-10 w-full border-y border-(--border) py-8 px-6 transition-colors duration-300">
  <div class="max-w-[1100px] mx-auto flex items-center justify-center gap-7 flex-wrap sm:gap-12">
    {#each [
      ['3 min', 'to instrument your first script'],
      ['1 line', 'of code to add tracking'],
      ['0',      'changes to your existing logic'],
    ] as [val, label]}
      <div class="flex items-center gap-3 font-mono text-xs text-(--muted)">
        <span class="font-sans text-[26px] font-extrabold text-(--text) tracking-[-1px]">{val}</span>
        {label}
      </div>
    {/each}
  </div>
</div>

<!-- ════════════════════════════════════════════════ -->
<!-- FEATURES                                         -->
<!-- ════════════════════════════════════════════════ -->
<div class="reveal relative z-10 w-full">
  <div class="w-full max-w-[1100px] mx-auto px-6 py-[60px] lg:py-[88px]">

    <div class="text-center mb-14">
      <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// features</p>
      <h2 class="section-heading">Everything you need.<br>Nothing you don't.</h2>
      <p class="section-subtext">Built specifically for developers who use AI tools to write automation scripts — not for enterprise DevOps teams.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-(--border) border border-(--border) rounded-xl overflow-hidden">
      {#each [
        { icon: '📋', title: 'Full Execution History',  desc: 'Every run logged with timestamp, duration, and exit status. See the entire history of any script at a glance.' },
        { icon: '🔍', title: 'Complete Log Capture',    desc: 'Read the full stdout and stderr output of every run right in your dashboard. No SSH-ing into servers.' },
        { icon: '🚨', title: 'Instant Slack Alerts',    desc: 'Get notified the second something breaks with the error message included. Stop babysitting cron jobs.' },
        { icon: '⚡', title: 'Zero Performance Impact', desc: 'The SDK sends logs asynchronously in the background. Your script never slows down or blocks.' },
        { icon: '🐍', title: 'Python & JS Support',     desc: 'One decorator for Python, one wrapper for Node. Works with cron, GitHub Actions, Railway, whatever.' },
        { icon: '📊', title: 'Success Rate Tracking',   desc: 'See trends over time. Know which scripts are flaky before they cause a real problem.' },
      ] as f}
        <div class="feature-card bg-(--surface) p-9">
          <div class="w-11 h-11 rounded-[10px] bg-(--green-dim) border border-[#00e57a33] flex items-center justify-center text-xl mb-[18px]">
            {f.icon}
          </div>
          <h3 class="text-base font-semibold mb-2.5 tracking-tight">{f.title}</h3>
          <p class="text-sm text-(--muted) leading-[1.65]">{f.desc}</p>
        </div>
      {/each}
    </div>

  </div>
</div>

<!-- ════════════════════════════════════════════════ -->
<!-- HOW IT WORKS                                     -->
<!-- ════════════════════════════════════════════════ -->
<div class="reveal relative z-10 w-full">
  <div class="w-full max-w-[1100px] mx-auto px-6 py-[60px] lg:py-[88px]">

    <div class="text-center mb-14">
      <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// how it works</p>
      <h2 class="section-heading">Three lines of code.<br>Full observability.</h2>
      <p class="section-subtext">Add EchoLogs to any existing script without changing how it runs.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-12">
      {#each [
        { num: '01 — INSTALL', title: 'Install the SDK',     desc: 'Add the EchoLogs package to your project. Works with pip or npm.',                    code: 'pip install echologs'    },
        { num: '02 — WRAP',    title: 'Wrap your script',    desc: 'Add one decorator to your main function. Your logic stays exactly the same.',          code: '@track(script="my-job")' },
        { num: '03 — WATCH',   title: 'Watch the dashboard', desc: 'Every execution appears in your dashboard in real time. Slack pings you on failures.', code: '✓ 2.4s — PASS'           },
      ] as step}
        <div class="flex flex-col">
          <p class="font-mono text-[11px] text-(--green) tracking-[1px] mb-3.5">{step.num}</p>
          <h3 class="text-lg font-semibold mb-2.5">{step.title}</h3>
          <p class="text-sm text-(--muted) leading-[1.65] mb-3.5">{step.desc}</p>
          <div class="mt-auto bg-(--surface2) border border-(--border) rounded-lg px-4 py-3 font-mono text-[13px] text-(--green) transition-colors duration-300">
            {step.code}
          </div>
        </div>
      {/each}
    </div>

  </div>
</div>

<!-- ════════════════════════════════════════════════ -->
<!-- PRICING                                          -->
<!-- ════════════════════════════════════════════════ -->
<div class="reveal relative z-10 w-full">
  <div class="w-full max-w-[1100px] mx-auto px-6 py-[60px] lg:py-[88px]">

    <div class="text-center mb-14">
      <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// pricing</p>
      <h2 class="section-heading">Simple pricing.<br>Cancel anytime.</h2>
      <p class="section-subtext">Start free. Upgrade when you're ready. No usage surprises.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-[2px] bg-(--border) border border-(--border) rounded-xl overflow-hidden">
      {#each [
        { tag: null,           name: 'FREE',    price: '$0',  period: 'forever',   featured: false,
          features: ['500 executions / month', '7-day log retention', '1 script', 'Email alerts on failure', 'Dashboard access'] },
        { tag: 'MOST POPULAR', name: 'STARTER', price: '$9',  period: 'per month', featured: true,
          features: ['5,000 executions / month', '30-day log retention', 'Up to 5 scripts', 'Slack + email alerts', 'Dashboard access'] },
        { tag: null,           name: 'PRO',     price: '$29', period: 'per month', featured: false,
          features: ['50,000 executions / month', '90-day log retention', 'Unlimited scripts', 'Slack, Discord + email alerts', 'Success rate analytics'] },
      ] as plan}
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

<!-- ════════════════════════════════════════════════ -->
<!-- BOTTOM CTA                                       -->
<!-- ════════════════════════════════════════════════ -->
<div class="reveal relative z-10 w-full">
  <div class="w-full max-w-[700px] mx-auto px-6 py-[60px] text-center lg:py-[88px]">

    <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// early access</p>
    <h2 class="section-heading">Be the first to know<br>when we launch.</h2>
    <p class="section-subtext mb-10">
      We're building EchoLogs in public. Join the waitlist and lock in 3 months free on Pro the moment we ship.
    </p>

    {#if !submitted2}
      <div class="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto mb-5">
        <input
          bind:value={email2}
          onkeydown={(e) => e.key === 'Enter' && handleSubmit(2)}
          type="email"
          placeholder={emailPlaceholder}
          class={input2Classes}
        />
        <button
          class="form-btn bg-(--green) text-[#080b0f] rounded-lg px-6 py-3.5 font-sans text-sm font-bold cursor-pointer whitespace-nowrap tracking-[0.3px] border-0"
          onclick={() => handleSubmit(2)}
        >
          Join Waitlist
        </button>
      </div>
    {:else}
      <div class="max-w-[440px] mx-auto mb-5 bg-(--green-dim) border border-[#00e57a44] rounded-lg px-6 py-3.5 font-mono text-sm text-(--green) text-center">
        ✓ You're on the list — we'll email you when EchoLogs launches.
      </div>
    {/if}

    <p class="font-mono text-xs text-(--muted) text-center">No spam. One email when we launch.</p>
  </div>
</div>

<!-- ════════════════════════════════════════════════ -->
<!-- FOOTER                                           -->
<!-- ════════════════════════════════════════════════ -->
<footer class="relative z-10 w-full border-t border-(--border) px-6 py-8 transition-colors duration-300">
  <div class="max-w-[1100px] mx-auto flex flex-col items-center text-center gap-4 sm:flex-row sm:justify-between sm:text-left">
    <div class="flex items-center gap-2 font-mono text-[17px] font-semibold text-(--green) tracking-tight">
      <div class="logo-dot"></div>
      echologs
    </div>
    <p class="font-mono text-xs text-(--muted)">
      Built by a developer who got burned by a silent cron job one too many times.
    </p>
    <p class="font-mono text-xs text-(--muted)">© 2026 EchoLogs</p>
  </div>
</footer>