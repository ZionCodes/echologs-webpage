<script>
    import WaitlistForm from './Waitlistform.svelte';
  
    const { onSubmit } = $props();
  </script>
  
  <div class="reveal relative z-10 w-full">
    <div class="w-full max-w-[700px] mx-auto px-6 py-[60px] text-center lg:py-[88px]">
  
      <p class="font-mono text-[11px] text-(--green) tracking-[2.5px] uppercase mb-3.5">// early access</p>
      <h2 class="section-heading">Be the first to know<br>when we launch.</h2>
      <p class="section-subtext mb-10">
        We're building EchoLogs in public. Join the waitlist and lock in 3 months free on Pro the moment we ship.
      </p>
  
      <WaitlistForm {onSubmit} />
  
    </div>
  </div>