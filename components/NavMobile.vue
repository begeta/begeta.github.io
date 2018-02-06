<template>
  <div class="menu-bar">
    <nav class="navbar is-navbar-width" role="navigation" aria-label="main navigation">
      <div class="container is-marginless is-flex-align-column is-background-navbar is-full-width is-border-bottom">

        <div class="navbar-brand is-navbar-height is-flex-align-item-center is-warp-navbar is-navbar-sticky">
          <div v-if="this.$route.name !== 'examples-dm-productcart' && this.$route.name !== 'examples-dm-cartdetail'
          && this.$route.name !== 'examples-dm-createpo' && this.$route.name !== 'examples-dm-orderdetail' && this.$route.name !== 'examples-dm-orderedit'" class="is-navbar-icon-container">
            <span class="icon has-color-gray">
              <a class="is-button-main-mobile">
                <i @click="showBackBox = true" class="fa fa-lg icon-menu-list"></i>
              </a>
            </span>
          </div>

          <div v-if="this.$route.name === 'examples-dm-productcart'" class="is-navbar-icon-container">
            <span class="icon has-color-gray">
              <a href="/examples/dm/productlist" class="is-button-main-mobile">
                <i class="fa fa-lg icon-back-arrow"></i>
              </a>
            </span>
          </div>

          <div v-if="this.$route.name === 'examples-dm-cartdetail'" class="is-navbar-icon-container">
            <span class="icon has-color-gray">
              <a href="/examples/dm/productcart" class="is-button-main-mobile">
                <i class="fa fa-lg icon-back-arrow"></i>
              </a>
            </span>
          </div>

          <div v-if="this.$route.name === 'examples-dm-createpo'" class="is-navbar-icon-container">
            <span class="icon has-color-gray">
              <a href="/examples/dm/polist" class="is-button-main-mobile">
                <i class="fa fa-lg icon-back-arrow"></i>
              </a>
            </span>
          </div>

          <div v-if="this.$route.name === 'examples-dm-orderdetail'" class="is-navbar-icon-container">
            <span class="icon has-color-gray">
              <a href="/examples/dm/order" class="is-button-main-mobile">
                <i class="fa fa-lg icon-back-arrow"></i>
              </a>
            </span>
          </div>

          <div v-if="this.$route.name === 'examples-dm-orderedit'" class="is-navbar-icon-container">
            <span class="icon has-color-gray">
              <a href="/examples/dm/order" class="is-button-main-mobile">
                <i class="fa fa-lg icon-back-arrow"></i>
              </a>
            </span>
          </div>

          <div class="field is-marginless is-full-width is-search-mobile-padding">
            <!-- <div class="control has-icons-right">
              <input class="input is-shadowless" type="text" placeholder="ค้นหา">
              <span class="icon is-right">
                <i class="fa icon-search is-size-4 has-color-gray"></i>
              </span>
            </div> -->
          </div>

          <div class="is-navbar-icon-container">
            <span class="icon has-color-gray">
              <a href="/examples/dm/" class="is-button-main-mobile">
                <i class="fa fa-lg icon-search"></i>
              </a>
            </span>
          </div>

          <div v-if="this.$route.name === 'examples-dm-ProductList'" class="is-navbar-icon-container">
            <span class="icon has-color-gray">
              <a href="/examples/dm/productcart" class="button is-button-main-mobile">
                <div class="is-notication-container has-color-white has-text-weight-bold is-size-11 is-background-red">1</div>
                <i class="fa fa-lg icon-cart"></i>
              </a>
            </span>
          </div>

        </div>
      </div>

      <div class="is-menu-light-box" v-if="showBackBox">
        <div class="is-nav-mobile">
          <nav-item/>
        </div>
        <div @click="showBackBox = false" class="is-light-box">
        </div>
      </div>

    </nav>
  </div>
</template>

<script>
  import NavItem from './NavItem'

  export default {
    components: {
      NavItem
    },
    data () {
      return {
        showBackBox: false
      }
    }
  }
</script>

<style scoped>
.is-button-main-mobile {
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #bababa;
  padding: 13px !important;
  width: 50px;
  height: 50px;
  border: 0rem !important;
  cursor: pointer;
}

.is-warp-navbar {
  padding: 0rem;
}

.is-navbar-width {
  width: 240px;
}

.is-navbar-height {
  min-height: 60px !important;
}

.is-background-navbar {
  background-color: #232c41;
}

.is-search-mobile-padding {
  padding: 0rem 0.625rem;
}

.is-navbar-icon-container {
  min-width: 50px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

.is-navbar-burger {
  width: 60px;
  height: 50px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
}

.is-nav-mobile {
  min-width: 18rem;
  max-width: 24rem;
  height: 100vh;
  background: #ffffff;
  z-index: 999;
  position: fixed;
}

.is-light-box {
  width: 100%;
  height: 100vh;
  background-color: #111;
  opacity: 0.6;
  z-index: 200;
  position: fixed;
}

.is-menu-light-box {
  position: fixed;
  z-index: 999;
}

/* Account Bar
  -------------------------- */
.is-account-menu {
  display: flex;
  height: 60px;
  align-items: center;
}

.is-display-account {
  width: 32px;
  height: 32px;
  margin: 0px 10px;
}

.is-display-account-size {
  width: 100%;
}

.is-account-detail {
  width: 180px;
}

.is-notication-container {
  min-width: 18px;
  height: 18px;
  padding-top: 2px;
  border-radius: 20px;
  position: absolute;
  top: 7px;
  right: 7px;
}


/* Scrollbar
  -------------------------- */
.is-scroll-container {
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
}

.is-scroll-container::-webkit-scrollbar {
  width: 0.9rem;
}

.is-scroll-container::-webkit-scrollbar-thumb {
  background-color: rgba(186,186,186,0.5);
}

.is-scroll-container::-webkit-scrollbar-track {
  background-color: rgba(35,44,65,0.01);
}

/* Mobile
  -------------------------- */
@media screen and (max-width: 768px) {
  .is-menu-light-box {
    position: fixed;
    z-index: 999;
    margin-top: -60px;
  }
}

@media screen and (max-width: 1215px) {
  .is-background-navbar {
    background-color: #FFFFFF;
  }

  .is-warp-navbar {
    padding: 0rem 0rem;
  }

  .is-navbar-width {
    width: 100%;
  }

  .is-navbar-sticky {
    z-index: 999;
    width: 100%;
    height: 60px;
  }
}
</style>