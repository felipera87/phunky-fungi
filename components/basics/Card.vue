<template>
  <div class="flex flex-col items-center p-3">
    <div class="flex items-center w-2/3">
      <slot name="image"></slot>
    </div>
    <div class="flex flex-col grow-0 shrink-0 basis-auto w-full">
      <slot name="title"></slot>
      <div class="description-container">
        <slot name="description"></slot>
      </div>
      <a href="#" class="twitter-icon text-white">
        <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
}
</script>

<style scoped>
.description-container {
  overflow: hidden;
  word-break: break-word;
  transition: all 0.5s;
}
@media (min-width: 640px) {
  .description-container {
    height: 150px;
    max-height: 150px;
  }

  .description-container:hover {
    height: auto;
    max-height: 999px;
  }
}

.twitter-icon {
  color: #55acee;
  font-size: 2.25rem;
  line-height: 2.5rem;
}
</style>
