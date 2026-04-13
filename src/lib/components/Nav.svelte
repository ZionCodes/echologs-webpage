<script>
  import { toggleMode, mode } from 'mode-watcher'
</script>

<nav
  class="sticky top-0 z-100 w-full flex items-center justify-between px-6 py-4 border-b border-(--border) backdrop-blur-md transition-colors duration-300"
  style="background: var(--nav-bg);"
>
  <div class="flex items-center gap-2 font-mono text-[17px] font-semibold text-(--green) tracking-tight">
    <div class="logo-dot"></div>
    echologs
  </div>

  <div class="flex items-center gap-3">

    <a
      href="#pricing"
      class="hidden sm:block font-mono text-xs text-(--muted) hover:text-(--text) transition-colors duration-200"
    >
      Pricing
    </a>

    <button
      class="theme-toggle flex items-center justify-center w-9 h-9 rounded-lg border border-(--border) bg-(--surface) cursor-pointer text-base leading-none"
      onclick={toggleMode}
      aria-label="Toggle theme"
    >
      {mode.current === 'dark' ? '☀️' : '🌙'}
    </button>

    <a
      href="https://app.echologs.com"
      class="font-mono text-xs font-bold px-4 py-2 rounded-lg transition-all duration-150"
      style="background: var(--green); color: #080b0f;"
    >
      Get started →
    </a>

  </div>
</nav>