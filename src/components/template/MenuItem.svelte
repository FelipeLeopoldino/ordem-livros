<script>
  export let texto = "";
  export let link = "/";
</script>

<li>
  <a
    href={link}
    class="
    flex gap-2 items-center cursor-pointer px-4 py-2
    hover:underline hover:text-white text-zinc-400
    hover:bg-white/10 rounded-xl"
  >
    <slot></slot>
    <span>{texto}</span>
  </a>
</li>
