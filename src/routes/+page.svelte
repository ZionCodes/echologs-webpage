<script>
  import { onMount } from 'svelte';
  import { toggleMode, mode } from 'mode-watcher';

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
</script>

<svelte:head>
  <title>EchoLogs — Know When Your AI Scripts Fail</title>
  <meta name="description" content="Cursor and Claude write the code. EchoLogs remembers everything." />
</svelte:head>

<!-- NAV -->
<nav class="nav">
  <div class="nav__logo">
    <div class="logo-dot"></div>
    echologs
  </div>
  <div class="nav__right">
    <button
      class="theme-toggle"
      onclick={toggleMode}
      aria-label="Toggle theme"
    >
      {mode.current === 'dark' ? '☀️' : '🌙'}
    </button>
    <span class="nav__tag">// coming soon</span>
  </div>
</nav>

<!-- HERO -->
<div class="section">
  <div class="container container--hero hero">

    <div class="hero__badge fade-1">
      <div class="badge-dot"></div>
      Observability for AI-generated scripts
    </div>

    <h1 class="hero__h1 fade-2">
      Cursor and Claude write the code.<br>
      <em>We remember everything.</em>
    </h1>

    <p class="hero__sub fade-3">
      Every execution. Every error. Every failure — automatically logged in one dashboard.
      <strong>So when your script breaks at 3am, you already know why.</strong>
    </p>

    {#if !submitted1}
      <div class="form-row fade-4">
        <input
          bind:value={email1}
          onkeydown={(e) => e.key === 'Enter' && handleSubmit(1)}
          type="email"
          placeholder="your@email.com"
          class="form-input {error1 ? 'form-input--error' : ''}"
        />
        <button class="form-btn" onclick={() => handleSubmit(1)}>
          Join Waitlist
        </button>
      </div>
    {:else}
      <div class="form-success fade-4">
        ✓ You're on the list — we'll email you when EchoLogs launches.
      </div>
    {/if}

    <p class="form-note fade-5">Early access gets 3 months free on Pro. No spam, ever.</p>
  </div>
</div>

<!-- TERMINAL -->
<div class="section reveal">
  <div class="terminal-wrap">
    <div class="terminal">
      <div class="terminal__bar">
        <div class="t-dot t-dot--red"></div>
        <div class="t-dot t-dot--amber"></div>
        <div class="t-dot t-dot--green"></div>
        <span class="terminal__title">echologs — execution history</span>
      </div>
      <div class="terminal__body">
        <div class="t-line">
          <span class="t-time">09:00:01</span>
          <span class="t-pass">✓ PASS</span>
          <span class="t-text">daily-report-sync</span>
          <span class="t-dim">— 2.4s</span>
        </div>
        <div class="t-line">
          <span class="t-time">09:00:01</span>
          <span class="t-pass">✓ PASS</span>
          <span class="t-text">notion-backup</span>
          <span class="t-dim">— 0.8s</span>
        </div>
        <div class="t-line">
          <span class="t-time">02:00:04</span>
          <span class="t-fail">✗ FAIL</span>
          <span class="t-text">stripe-invoice-pull</span>
          <span class="t-dim">— 0.2s</span>
        </div>
        <hr class="t-divider" />
        <div class="t-line t-line--wrap">
          <span class="t-spacer"></span>
          <span class="t-fail">TypeError:</span>
          <span class="t-text">Cannot read properties of undefined (reading 'data')</span>
        </div>
        <div class="t-line">
          <span class="t-spacer"></span>
          <span class="t-dim">at stripe-invoice-pull.py line 34</span>
        </div>
        <div class="t-line">
          <span class="t-spacer"></span>
          <span class="t-dim">→ Slack alert sent to #alerts</span>
        </div>
        <div class="t-line">
          <span class="t-spacer"></span>
          <span class="cursor"></span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- PROOF STRIP -->
<div class="proof-strip reveal">
  <div class="proof-strip__inner">
    {#each [['3 min','to instrument your first script'],['1 line','of code to add tracking'],['0','changes to your existing logic']] as [val, label]}
      <div class="proof-item">
        <span class="proof-item__val">{val}</span>
        {label}
      </div>
    {/each}
  </div>
</div>

<!-- FEATURES -->
<div class="section reveal">
  <div class="container py-section">
    <div class="section-header">
      <p class="section-label">// features</p>
      <h2 class="section-h2">Everything you need.<br>Nothing you don't.</h2>
      <p class="section-sub">Built specifically for developers who use AI tools to write automation scripts — not for enterprise DevOps teams.</p>
    </div>
    <div class="features-grid">
      {#each [
        { icon: '📋', title: 'Full Execution History',  desc: 'Every run logged with timestamp, duration, and exit status. See the entire history of any script at a glance.' },
        { icon: '🔍', title: 'Complete Log Capture',    desc: 'Read the full stdout and stderr output of every run right in your dashboard. No SSH-ing into servers.' },
        { icon: '🚨', title: 'Instant Slack Alerts',    desc: 'Get notified the second something breaks with the error message included. Stop babysitting cron jobs.' },
        { icon: '⚡', title: 'Zero Performance Impact', desc: 'The SDK sends logs asynchronously in the background. Your script never slows down or blocks.' },
        { icon: '🐍', title: 'Python & JS Support',     desc: 'One decorator for Python, one wrapper for Node. Works with cron, GitHub Actions, Railway, whatever.' },
        { icon: '📊', title: 'Success Rate Tracking',   desc: 'See trends over time. Know which scripts are flaky before they cause a real problem.' },
      ] as f}
        <div class="feature-card">
          <div class="feature-card__icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<div class="section reveal">
  <div class="container py-section">
    <div class="section-header">
      <p class="section-label">// how it works</p>
      <h2 class="section-h2">Three lines of code.<br>Full observability.</h2>
      <p class="section-sub">Add EchoLogs to any existing script without changing how it runs.</p>
    </div>
    <div class="steps-grid">
      {#each [
        { num: '01 — INSTALL', title: 'Install the SDK',     desc: 'Add the EchoLogs package to your project. Works with pip or npm.',                    code: 'pip install echologs'    },
        { num: '02 — WRAP',    title: 'Wrap your script',    desc: 'Add one decorator to your main function. Your logic stays exactly the same.',          code: '@track(script="my-job")' },
        { num: '03 — WATCH',   title: 'Watch the dashboard', desc: 'Every execution appears in your dashboard in real time. Slack pings you on failures.', code: '✓ 2.4s — PASS'           },
      ] as step}
        <div class="step">
          <p class="step__num">{step.num}</p>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
          <div class="step__code">{step.code}</div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- PRICING -->
<div class="section reveal">
  <div class="container py-section">
    <div class="section-header">
      <p class="section-label">// pricing</p>
      <h2 class="section-h2">Simple pricing.<br>Cancel anytime.</h2>
      <p class="section-sub">Start free. Upgrade when you're ready. No usage surprises.</p>
    </div>
    <div class="pricing-grid">
      {#each [
        { tag: null,           name: 'FREE',    price: '$0',  period: 'forever',   featured: false,
          features: ['500 executions / month','7-day log retention','1 script','Email alerts on failure','Dashboard access'] },
        { tag: 'MOST POPULAR', name: 'STARTER', price: '$9',  period: 'per month', featured: true,
          features: ['5,000 executions / month','30-day log retention','Up to 5 scripts','Slack + email alerts','Dashboard access'] },
        { tag: null,           name: 'PRO',     price: '$29', period: 'per month', featured: false,
          features: ['50,000 executions / month','90-day log retention','Unlimited scripts','Slack, Discord + email alerts','Success rate analytics'] },
      ] as plan}
        <div class="plan {plan.featured ? 'plan--featured' : ''}">
          {#if plan.tag}
            <div class="plan__tag">{plan.tag}</div>
          {:else}
            <div class="plan__tag-spacer"></div>
          {/if}
          <p class="plan__name">{plan.name}</p>
          <p class="plan__price">{plan.price}</p>
          <p class="plan__period">{plan.period}</p>
          <ul class="plan__features">
            {#each plan.features as feat}<li>{feat}</li>{/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- BOTTOM CTA -->
<div class="section reveal">
  <div class="container container--narrow py-section" style="text-align: center;">
    <p class="section-label">// early access</p>
    <h2 class="section-h2">Be the first to know<br>when we launch.</h2>
    <p class="section-sub" style="margin-bottom: 40px;">
      We're building EchoLogs in public. Join the waitlist and lock in 3 months free on Pro the moment we ship.
    </p>
    {#if !submitted2}
      <div class="form-row">
        <input
          bind:value={email2}
          onkeydown={(e) => e.key === 'Enter' && handleSubmit(2)}
          type="email"
          placeholder="your@email.com"
          class="form-input {error2 ? 'form-input--error' : ''}"
        />
        <button class="form-btn" onclick={() => handleSubmit(2)}>
          Join Waitlist
        </button>
      </div>
    {:else}
      <div class="form-success">
        ✓ You're on the list — we'll email you when EchoLogs launches.
      </div>
    {/if}
    <p class="form-note">No spam. One email when we launch.</p>
  </div>
</div>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer__inner">
    <div class="nav__logo">
      <div class="logo-dot"></div>
      echologs
    </div>
    <p>Built by a developer who got burned by a silent cron job one too many times.</p>
    <p>© 2026 EchoLogs</p>
  </div>
</footer>