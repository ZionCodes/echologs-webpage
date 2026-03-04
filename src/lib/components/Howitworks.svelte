<script>
    const steps = [
      { num: '01 — INSTALL', title: 'Install the SDK',     desc: 'Add the EchoLogs package to your project. Works with pip or npm.',                    code: 'pip install echologs'    },
      { num: '02 — WRAP',    title: 'Wrap your script',    desc: 'Add one decorator to your main function. Your logic stays exactly the same.',          code: '@track(script="my-job")' },
      { num: '03 — WATCH',   title: 'Watch the dashboard', desc: 'Every execution appears in your dashboard in real time. Slack pings you on failures.', code: '✓ 2.4s — PASS'           },
    ];
  </script>
  
  <div class="reveal relative z-10 w-full">
    <div class="w-full max-w-[1100px] mx-auto px-6 py-[60px] lg:py-[88px]">
  
      <div class="text-center mb-14">
        <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// how it works</p>
        <h2 class="section-heading">Three lines of code.<br>Full observability.</h2>
        <p class="section-subtext">Add EchoLogs to any existing script without changing how it runs.</p>
      </div>
  
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-12">
        {#each steps as step}
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