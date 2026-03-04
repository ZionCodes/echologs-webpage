<script>
    // No props — Terminal is purely presentational
  </script>
  
  <div class="reveal relative z-10 w-full">
    <div class="max-w-[760px] mx-auto px-6 pb-20">
      <div
        class="terminal bg-(--surface) border border-(--border) rounded-xl overflow-hidden transition-colors duration-300"
        style="box-shadow: 0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,229,122,0.05);"
      >
        <!-- Title bar -->
        <div class="bg-(--surface2) border-b border-(--border) px-4 py-3 flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div class="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div class="w-3 h-3 rounded-full bg-[#28c840]"></div>
          <span class="font-mono text-xs text-(--muted) mx-auto">echologs — execution history</span>
        </div>
  
        <!-- Log lines -->
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