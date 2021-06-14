<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        shop_spa
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet delectus expedita id ipsa ipsam iusto
          maxime minus natus nisi nulla odit omnis quasi quibusdam sint totam ut, veritatis?
        </div>
        <div>Accusantium ad amet asperiores commodi cumque deleniti dolores dolorum eligendi enim ipsa laborum modi,
          nemo quibusdam, ratione, reprehenderit voluptas voluptate. Adipisci autem consequatur enim magni obcaecati
          officiis, quasi recusandae reprehenderit.
        </div>
        <div>Accusamus amet architecto at corporis culpa delectus, doloremque eius eligendi ex facilis illum, modi
          molestiae non porro quasi quod sed, sequi soluta veniam voluptatibus. Ex impedit non odio quasi. Inventore.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
