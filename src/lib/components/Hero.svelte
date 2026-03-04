<script>
    import WaitlistForm from './WaitlistForm.svelte';
  
    const { onSubmit } = $props();
  </script>
  
  <div class="relative z-10 w-full">
    <div class="w-full max-w-[900px] mx-auto px-6 pt-14 pb-12 text-center lg:pt-20 lg:pb-16">
  
      <div class="fade-1 inline-flex items-center gap-2 bg-(--green-dim) border border-[#00e57a44] rounded-full px-4 py-1.5 font-mono text-xs text-(--green) mb-9">
        <div class="badge-dot"></div>
        Observability for AI-generated scripts
      </div>
  
      <h1 class="hero-title fade-2">
        Claude writes the code.<br>
        <em>We remember everything.</em>
      </h1>
  
      <p class="hero-sub fade-3">
        Every execution. Every error. Every failure — automatically logged in one dashboard.
        <strong>So when your script breaks at 3am, you already know why.</strong>
      </p>
  
      <div class="fade-4">
        <WaitlistForm {onSubmit} />
      </div>
  
      <p class="fade-5 font-mono text-xs text-(--muted) text-center mt-1">
        Early access gets 3 months free on Pro. No spam, ever.
      </p>
    </div>
  </div>