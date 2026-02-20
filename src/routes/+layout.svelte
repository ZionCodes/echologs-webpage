<script>
  import './app.css';
  import { ModeWatcher } from 'mode-watcher';

  let { children } = $props();
</script>

<!-- ModeWatcher handles everything: flash prevention, localStorage, system preference -->
<ModeWatcher defaultMode="dark" />

{@render children()}