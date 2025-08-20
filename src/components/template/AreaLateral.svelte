<script>
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
  import {
    IconHome,
    IconFriends,
    IconUsers,
    IconSquare1,
    IconBooks,
    IconSquare2,
    IconSquare3,
    IconRss,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandYoutube,
  } from "@tabler/icons-svelte";
</script>

<aside class="flex flex-col self-start border border-zinc-800 p-5 rounded-xl gap-10 w-72">
  <Menu titulo="Navegação">
    <MenuItem texto="Início"><IconHome size={20} /></MenuItem>
    <MenuItem texto="Personagens"><IconFriends size={20} /></MenuItem>
    <MenuItem texto="Autores" link="/autores"><IconUsers size={20} /></MenuItem>
    <MenuItem texto="Séries"><IconBooks size={20} /></MenuItem>
  </Menu>
  <Menu titulo="Principais Autores">
    <MenuItem texto="J.K Rowling" link="/autores/j-k-rowling"><IconSquare1 size={20} /></MenuItem>
    <MenuItem texto="J.R.R Tolkien" link="/autores/j-r-r-tolkien"
      ><IconSquare2 size={20} /></MenuItem
    >
    <MenuItem texto="George R.R Martin" link="/autores/george-r-r-martin"
      ><IconSquare3 size={20} /></MenuItem
    >
  </Menu>
  <Menu titulo="Outras Categorias">
    <MenuItem texto="Últimas Notícias"><IconRss size={20} /></MenuItem>
    <MenuItem texto="Séries Populares"><IconBooks size={20} /></MenuItem>
    <MenuItem texto="Facebook"><IconBrandFacebook size={20} /></MenuItem>
    <MenuItem texto="Instagram"><IconBrandInstagram size={20} /></MenuItem>
    <MenuItem texto="YouTube"><IconBrandYoutube size={20} /></MenuItem>
  </Menu>
</aside>
