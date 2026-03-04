<script>
    const features = [
      { icon: '📋', title: 'Full Execution History',  desc: 'Every run logged with timestamp, duration, and exit status. See the entire history of any script at a glance.' },
      { icon: '🔍', title: 'Complete Log Capture',    desc: 'Read the full stdout and stderr output of every run right in your dashboard. No SSH-ing into servers.' },
      { icon: '🚨', title: 'Instant Slack Alerts',    desc: 'Get notified the second something breaks with the error message included. Stop babysitting cron jobs.' },
      { icon: '⚡', title: 'Zero Performance Impact', desc: 'The SDK sends logs asynchronously in the background. Your script never slows down or blocks.' },
      { icon: '🐍', title: 'Python & JS Support',     desc: 'One decorator for Python, one wrapper for Node. Works with cron, GitHub Actions, Railway, whatever.' },
      { icon: '📊', title: 'Success Rate Tracking',   desc: 'See trends over time. Know which scripts are flaky before they cause a real problem.' },
    ];
  </script>
  
  <div class="reveal relative z-10 w-full">
    <div class="w-full max-w-[1100px] mx-auto px-6 py-[60px] lg:py-[88px]">
  
      <div class="text-center mb-14">
        <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// features</p>
        <h2 class="section-heading">Everything you need.<br>Nothing you don't.</h2>
        <p class="section-subtext">Built specifically for developers who use AI tools to write automation scripts — not for enterprise DevOps teams.</p>
      </div>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-(--border) border border-(--border) rounded-xl overflow-hidden">
        {#each features as f}
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