<script lang="ts">
  export let images: string[];
  export let title: string;
  let show = false;
</script>

<div class="modal" role="dialog" on:click={() => (show = !show)}>
  <div class="preview">
    <img src={images[0]} alt={title} />
    <p class="title">{title}</p>
  </div>
  <div class="content" class:show>
    {#each images as url}
      <img src={url} alt="" />
    {/each}
  </div>
</div>

<style>
  .modal {
    height: 100%;
  }

  .preview {
    position: relative;
    cursor: pointer;
    /* height: 100%; */
    width: min-content;
    font-size: 1.2rem;
  }
  .preview img {
    height: 10rem;
    width: auto;
  }
  .preview .title {
    position: absolute;
    bottom: 0;
    margin-bottom: 0;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    display: block;
    text-align: center;
    width: 100%;
    padding: 0.5em;
    font-family: Newsreader;
  }

  .content {
    z-index: 5;
    display: none;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    width: 100%;
    overflow-y: scroll;
    padding: 10em 10%;
  }
  .content > * {
    width: 100%;
    height: auto;
  }

  .content.show {
    display: block;
  }
</style>
