<script>
  import { onMount } from 'svelte'
  import SvelteSeo   from 'svelte-seo'
  import Nav        from '$lib/components/Nav.svelte'
  import Hero       from '$lib/components/Hero.svelte'
  import Terminal   from '$lib/components/Terminal.svelte'
  import ProofStrip from '$lib/components/ProofStrip.svelte'
  import Features   from '$lib/components/Features.svelte'
  import HowItWorks from '$lib/components/HowItWorks.svelte'
  import Pricing    from '$lib/components/Pricing.svelte'
  import CtaSection from '$lib/components/CtaSection.svelte'
  import Footer     from '$lib/components/Footer.svelte'

  onMount(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  })
</script>

<SvelteSeo
  title="EchoLogs — Know When Your AI Scripts Fail"
  description="Every execution logged. Every error captured. Get instant Slack and email alerts when your Python or JavaScript automation scripts break — without changing a line of code."
  canonical="https://echologs.com"
  openGraph={{
    title:       'EchoLogs — Know When Your AI Scripts Fail',
    description: 'Every execution logged. Every error captured. Instant alerts when your Python or JS scripts break.',
    url:         'https://echologs.com',
    type:        'website',
    site_name:   'EchoLogs',
    images: [{ url: 'https://echologs.com/og.png', width: 1200, height: 630, alt: 'EchoLogs' }],
  }}
  twitter={{
    card:        'summary_large_image',
    site:        '@echologs',
    title:       'EchoLogs — Know When Your AI Scripts Fail',
    description: 'Every execution logged. Every error captured. Instant alerts when your Python or JS scripts break.',
    image:       'https://echologs.com/og.png',
  }}
/>

<Nav />
<Hero />
<Terminal />
<ProofStrip />
<Features />
<HowItWorks />
<Pricing />
<CtaSection />
<Footer />