<script>
  import { enhance } from '$app/forms'

  const { onSubmit } = $props()

  let loading  = $state(false)
  let success  = $state(false)
  let error    = $state('')
  let email    = $state('')
  let suggestion = $state('')
</script>

{#if success}
  <div style="
    display:flex;flex-direction:column;align-items:center;gap:10px;
    padding:28px 32px;background:var(--green-dim);
    border:1px solid #00e57a44;border-radius:16px;
    font-family:var(--font-mono);
  ">
    <div style="font-size:28px">✓</div>
    <div style="font-size:14px;font-weight:700;color:var(--green)">You're on the list!</div>
    <div style="font-size:11px;color:var(--muted);text-align:center;line-height:1.7">
      We'll email you the moment EchoLogs launches.<br>
      Early access gets 1 months free on Pro.
    </div>
  </div>
{:else}
  <form
    method="POST"
    action="?/waitlist"
    use:enhance={() => {
      loading = true
      error   = ''
      return async ({ result, update }) => {
        loading = false
        if (result.type === 'success') {
          success = true
          onSubmit?.()
        } else {
          error = result.data?.error ?? 'Something went wrong.'
          await update()
        }
      }
    }}
  >
    <div style="
      display:flex;flex-direction:column;gap:10px;
      max-width:480px;margin:0 auto;
    ">

      <!-- Email -->
      <input
        name="email"
        type="email"
        required
        placeholder="your@email.com"
        bind:value={email}
        class="waitlist-input"
      />

      <!-- Suggestion — optional -->
      <textarea
        name="suggestion"
        placeholder="Any suggestions or features you'd like to see? (optional)"
        bind:value={suggestion}
        rows="2"
        class="waitlist-input waitlist-textarea"
      ></textarea>

      {#if error}
        <div style="
          font-family:var(--font-mono);font-size:11px;
          color:#ff4757;background:#ff475710;
          border:1px solid #ff475730;border-radius:8px;
          padding:10px 14px;text-align:center;
        ">
          {error}
        </div>
      {/if}

      <button type="submit" class="waitlist-btn" disabled={loading}>
        {#if loading}
          <span class="waitlist-spinner"></span> Joining...
        {:else}
          Join the waitlist →
        {/if}
      </button>

    </div>
  </form>
{/if}