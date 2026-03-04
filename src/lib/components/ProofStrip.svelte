<script>
    const stats = [
      ['3 min', 'to instrument your first script'],
      ['1 line', 'of code to add tracking'],
      ['0',      'changes to your existing logic'],
    ];
  </script>
  
  <div class="reveal relative z-10 w-full border-y border-(--border) py-8 px-6 transition-colors duration-300">
    <div class="max-w-[1100px] mx-auto flex items-center justify-center gap-7 flex-wrap sm:gap-12">
      {#each stats as [val, label]}
        <div class="flex items-center gap-3 font-mono text-xs text-(--muted)">
          <span class="font-sans text-[26px] font-extrabold text-(--text) tracking-[-1px]">{val}</span>
          {label}
        </div>
      {/each}
    </div>
  </div>
