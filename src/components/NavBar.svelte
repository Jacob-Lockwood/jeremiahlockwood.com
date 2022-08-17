<script lang="ts">
  export let title: string;
  export let links: { url: string; name: string; active?: boolean }[];

  let mobile: boolean = false;
  const handleClick = (e: Event) => (mobile = !mobile);

  let scrollPos = 0;
  let scrolledUp = false;
  const handleScroll = (e: Event) => {
    scrolledUp = window.scrollY < scrollPos;
    scrollPos = window.scrollY;
  };
</script>

<svelte:window on:scroll={handleScroll} />

<nav class:shadow={scrolledUp}>
  <button class="mobile-toggle" on:click={handleClick}>
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="20" rx="8" />
      <rect y="30" width="100" height="20" rx="8" />
      <rect y="60" width="100" height="20" rx="8" />
    </svg>
  </button>
  <ul class:mobile>
    <li><span>{title}</span></li>
    {#each links as { url, name, active }}
      <li class:active><a href={url}>{name}</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    z-index: 500;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    padding: 1em;
    transition: box-shadow 500ms;
    text-shadow: 1px 1px 3px black;
  }

  nav.shadow,
  nav:hover {
    box-shadow: 2px 2px 10px;
  }

  nav ul {
    width: 100%;
    display: flex;
    list-style: none;
    padding: 0 3em;
    justify-content: flex-end;
  }

  nav ul li:not(:last-child) {
    margin-right: 5%;
  }

  nav ul li:first-child {
    margin-right: auto !important;
  }

  nav ul :is(li, li:visited) {
    color: white;
    text-decoration: none;
    text-transform: capitalize;
  }

  nav ul li:not(:first-child):is(:hover, :focus) {
    text-decoration: underline;
  }

  nav ul li.active {
    text-decoration: underline;
  }
  nav ul li a {
    color: white;
  }

  .mobile-toggle {
    cursor: pointer;
    color: white;
    width: 100%;
    text-align: center;
    display: none;
    background: none;
    border: none;
  }

  .mobile-toggle svg {
    fill: white;
    filter: drop-shadow(0 0 0.5em black);
  }

  @media screen and (max-width: 1000px) {
    nav {
      font-size: 0.8em;
    }
  }

  @media screen and (max-width: 750px) {
    nav {
      font-size: 2em;
      padding: 0.25em;
    }

    button.mobile-toggle {
      display: block;
    }

    nav ul {
      display: none;
      padding: 0;
      text-align: center;
    }

    nav ul li {
      padding-top: 0.25em;
    }

    nav ul li:not(:first-child):is(:hover, :focus) {
      background: rgba(255, 255, 255, 0.3);
    }

    nav ul.mobile {
      display: block;
    }
  }
</style>
