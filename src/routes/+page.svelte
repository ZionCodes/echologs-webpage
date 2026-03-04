<script>
  import { onMount } from 'svelte';
  import Nav        from '$lib/components/Nav.svelte';
  import Hero       from '$lib/components/Hero.svelte';
  import Terminal   from '$lib/components/Terminal.svelte';
  import ProofStrip from '$lib/components/ProofStrip.svelte';
  import Features   from '$lib/components/Features.svelte';
  import HowItWorks from '$lib/components/HowItWorks.svelte';
  import Pricing    from '$lib/components/Pricing.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import Footer     from '$lib/components/Footer.svelte';

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

<Nav />
<Hero onSubmit={saveToWaitlist} />
<Terminal />
<ProofStrip />
<Features />
<HowItWorks />
<Pricing />
<CtaSection onSubmit={saveToWaitlist} />
<Footer />