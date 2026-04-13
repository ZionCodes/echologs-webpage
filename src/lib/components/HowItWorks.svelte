<script>
  let activeLang = $state('python')

  const pythonCode = `from dotenv import load_dotenv
load_dotenv()
import echologs

with echologs.run():
    # your existing code — nothing changes
    print("Running invoice sync...")`

  const jsCode = `import echologs from 'echologs'

// ECHOLOGS_API_KEY is read from process.env automatically
// No dotenv needed — set it in your platform env vars
console.log('Running invoice sync...')`

  const jsLocalCode = `# Local dev only — set env var directly
node --env-file=.env your_script.js

# Or export it in your shell
export ECHOLOGS_API_KEY=el_your_key_here`
</script>

<div id="how-it-works" class="reveal relative z-10 w-full">
  <div class="w-full max-w-[1100px] mx-auto px-6 py-[60px] lg:py-[88px]">

    <div class="text-center mb-14">
      <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// how it works</p>
      <h2 class="section-heading">Three lines of code.<br>Full observability.</h2>
      <p class="section-subtext">Add EchoLogs to any existing Python or JavaScript script without changing how it runs.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-12 mb-16">
      {#each [
        { num: '01 — INSTALL', title: 'Install the SDK',     desc: 'Add the EchoLogs package to your project. Works with pip or npm in under 30 seconds.',             code: 'pip install echologs' },
        { num: '02 — WRAP',    title: 'Add two lines',       desc: 'Wrap your code with echologs.run() for Python or just import for JS. Your logic stays the same.',   code: 'with echologs.run():' },
        { num: '03 — WATCH',   title: 'Watch the dashboard', desc: 'Every execution appears in your dashboard in real time. Alerts fire the moment something breaks.',   code: '✓ 2.4s — PASS' },
      ] as step (step.num)}
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

    <!-- Code preview with lang switcher -->
    <div class="max-w-[640px] mx-auto">
      <div style="background:#0d1117;border:1px solid #30363d;border-radius:12px;overflow:hidden">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;background:#161b22;border-bottom:1px solid #30363d">
          <div style="display:flex;gap:5px">
            <div style="width:12px;height:12px;border-radius:50%;background:#ff5f57"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#febc2e"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#28c840"></div>
          </div>
          <div style="display:flex;gap:4px;background:#0d1117;border:1px solid #30363d;border-radius:8px;padding:3px">
            <button
              onclick={() => activeLang = 'python'}
              style="font-family:monospace;font-size:11px;font-weight:700;padding:4px 12px;border-radius:6px;border:none;cursor:pointer;transition:all .15s;background:{activeLang === 'python' ? '#30363d' : 'transparent'};color:{activeLang === 'python' ? '#e6edf3' : '#8b949e'}"
            >Python</button>
            <button
              onclick={() => activeLang = 'js'}
              style="font-family:monospace;font-size:11px;font-weight:700;padding:4px 12px;border-radius:6px;border:none;cursor:pointer;transition:all .15s;background:{activeLang === 'js' ? '#30363d' : 'transparent'};color:{activeLang === 'js' ? '#e6edf3' : '#8b949e'}"
            >JavaScript</button>
          </div>
          <span style="font-family:monospace;font-size:10px;color:#8b949e">your_script.{activeLang === 'python' ? 'py' : 'js'}</span>
        </div>
        <pre style="margin:0;padding:20px 24px;font-family:monospace;font-size:13px;line-height:1.8;color:#e6edf3;overflow-x:auto;white-space:pre">{activeLang === 'python' ? pythonCode : jsCode}</pre>
      </div>
      <p style="font-family:monospace;font-size:11px;color:#5a7080;text-align:center;margin-top:12px">
        {activeLang === 'python'
          ? 'Your existing code stays exactly the same.'
          : 'No dotenv needed in production — set ECHOLOGS_API_KEY in your platform env vars.'}
      </p>
    </div>

  </div>
</div>