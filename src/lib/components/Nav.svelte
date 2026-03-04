<script>
    import { toggleMode, mode } from 'mode-watcher';
  </script>
  
  <nav
    class="sticky top-0 z-100 w-full flex items-center justify-between px-6 py-5 border-b border-(--border) backdrop-blur-md transition-colors duration-300"
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