<template>
  <div class="is-menu-bar-sticky">
    <nav-item class="dp-none-mobile"/>
    <!-- <nav-mobile class="is-hidden-widescreen"/> -->
  </div>
</template>

<script>
import NavItem from './NavItem'
import NavMobile from './NavMobile'

export default {
  components: {
    NavItem,
    NavMobile
  }
}
</script>

<style scoped>
.has-text-ellipsis {
  text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.is-button-main-mobile {
  display: flex;
  font-size: 24px;
  color: #bababa;
  padding: 13px !important;
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

.is-brand-size {
  max-height: 33px !important;
}

.is-brand-padding {
  padding: 0rem 0.625rem !important;
}

.is-menu-container {
  padding: 0rem !important;
}

.is-menu-color {
  color: #bababa;
}

.is-menu-padding {
  padding: 0.9375rem 0em !important;
}

.is-search-mobile-padding {
  padding: 0rem 0.625rem;
}

.is-navbar-cart {
  width: 60px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

.is-navbar-burger {
  width: 60px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
}

.is-padding-16 {
  padding: 15px;
}

.is-nav-mobile {
  background: red;
  width: 100%;
  height: 100vh;
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

/* Mobile
  -------------------------- */
/* @media screen and (max-width: 768px) {
  .is-background-navbar {
    background-color: #FFFFFF;
  }

  .is-warp-navbar {
    padding: 0rem 0.625rem;
  }

  .is-navbar-width {
    width: 100%;
  }

  .is-menu-bar-sticky {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 60px;
    box-shadow: 0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15);
  }
} */
</style>