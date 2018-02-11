<template>
  <div class="menu-bar">
    <nav class="navbar is-navbar-width" role="navigation" aria-label="main navigation">
      <div class="container al-it-column bg-cl-light">
        <div>
          <aside class="column menu is-menu-container ovf-y-auto h-55calc w-100pct  f-drt-column jtf-space-between is-background-aside">
            <ul class="menu-list pd-hrzt-15px f-s-15px">
              <li>
                <a href="" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-alignment' ? 'is-active-menu' : ''">
                  Alignment
                </a>
                  <ul>
                    <li>
                      <a href="/atomic/flexdirection" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-flexdirection' ? 'is-active-menu' : ''">
                        Flex Direction
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/flexwrap" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-flexwrap' ? 'is-active-menu' : ''">
                        Flex Wrap
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/flex" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-flex' ? 'is-active-menu' : ''">
                        Flex
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/alignitems" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-alignitems' ? 'is-active-menu' : ''">
                        Align Items
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/justifyitems" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-justifyitems' ? 'is-active-menu' : ''">
                        Justify Items
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/aligncontent" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-aligncontent' ? 'is-active-menu' : ''">
                        Align Content
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/justifycontent" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-justifycontent' ? 'is-active-menu' : ''">
                        Justify Content
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/alignself" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-alignself' ? 'is-active-menu' : ''">
                        Align Self
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/justifyself" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-justifyself' ? 'is-active-menu' : ''">
                        Justify Self
                      </a>
                    </li>
                  </ul>
              </li>
              <li>
                <a href="" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-background' ? 'is-active-menu' : ''">
                  Background
                </a>
                  <ul>
                    <li>
                      <a href="/atomic/backgroundcolor" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-backgroundcolor' ? 'is-active-menu' : ''">
                        Background Color
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/backgroundsize" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-backgroundsize' ? 'is-active-menu' : ''">
                        Background Size
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/backgroundrepeat" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-backgroundrepeat' ? 'is-active-menu' : ''">
                        Background Repeat
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/backgroundposition" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-backgroundposition' ? 'is-active-menu' : ''">
                        Background Position
                      </a>
                    </li>
                  </ul>
              </li>
              <li>
                <a href="" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-background' ? 'is-active-menu' : ''">
                  Border
                </a>
                  <ul>
                    <li>
                      <a href="/atomic/borderstyle" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-borderstyle' ? 'is-active-menu' : ''">
                        Border Style
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/borderwidth" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-borderwidth' ? 'is-active-menu' : ''">
                        Border Width
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/bordercolor" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-bordercolor' ? 'is-active-menu' : ''">
                        Border Color
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/borderradius" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-borderradius' ? 'is-active-menu' : ''">
                        Border Radius
                      </a>
                    </li>
                  </ul>
              </li>
              <li>
                <a href="/atomic/boxposition" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-boxposition' ? 'is-active-menu' : ''">
                  Box Position
                </a>
              </li>
              <li>
                <a href="/atomic/boxsize" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-boxsize' ? 'is-active-menu' : ''">
                  Box Size
                </a>
              </li>
              <li>
                <a href="/atomic/color" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-color' ? 'is-active-menu' : ''">
                  Color
                </a>
              </li>
              <li>
                <a href="/atomic/cursor" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-cursor' ? 'is-active-menu' : ''">
                  Cursor
                </a>
              </li>
              <li>
                <a href="/atomic/display" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-display' ? 'is-active-menu' : ''">
                  Display
                </a>
              </li>
              <li>
                <a href="/atomic/float" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-float' ? 'is-active-menu' : ''">
                  Float
                </a>
              </li>
              <li>
                <a href="/atomic/margin" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-margin' ? 'is-active-menu' : ''">
                  Margin
                </a>
              </li>
              <li>
                <a href="/atomic/objectfit" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-objectfit' ? 'is-active-menu' : ''">
                  Object Fit
                </a>
              </li>
              <li>
                <a href="/atomic/opacity" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-opacity' ? 'is-active-menu' : ''">
                  Opacity
                </a>
              </li>
              <li>
                <a href="/atomic/overflow" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-overflow' ? 'is-active-menu' : ''">
                  Overflow
                </a>
              </li>
              <li>
                <a href="/atomic/padding" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-padding' ? 'is-active-menu' : ''">
                  Padding
                </a>
              </li>
              <li>
                <a href="" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-typography' ? 'is-active-menu' : ''">
                  Typography
                </a>
                  <ul>
                    <li>
                      <a href="/atomic/fontsize" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-fontsize' ? 'is-active-menu' : ''">
                        Font Size
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/fontweight" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-fontweight' ? 'is-active-menu' : ''">
                        Font Weight
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/lineheight" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-lineheight' ? 'is-active-menu' : ''">
                        Line Height
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/textalign" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-textalign' ? 'is-active-menu' : ''">
                        Text Align
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/texttransform" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-texttransform' ? 'is-active-menu' : ''">
                        Text Transform
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/letterspacing" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-letterspacing' ? 'is-active-menu' : ''">
                        Letter Spacing
                      </a>
                    </li>
                    <li>
                      <a href="/atomic/whitespace" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-whitespace' ? 'is-active-menu' : ''">
                        White Space
                      </a>
                    </li>
                  </ul>
              </li>
              <li>
                <a href="/atomic/z-index" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === 'atomic-z-index' ? 'is-active-menu' : ''">
                  Z-Index
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
ul {
  list-style: none;
}


/* .is-active-menu {
  color: #000000;
  background: rgba(0, 0, 0, 0.03);
  fill: #0050ff;
  border-radius: 4px;
  padding-left: 10px !important;
}

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
  background-color: #F7F7F7;
}

.is-brand-size {
  max-height: 30px !important;
}

.is-brand-padding {
  padding: 0rem 0.625rem !important;
}

.is-menu-container {
  padding: 0rem !important;
}

.is-color-icon-primary {
  color: #bababa;
  fill: currentColor;
}

.is-icon-container {
  width: 3.125rem;
  height: 3.125rem;
}

.has-color-menu {
  color: #363636;
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

.is-nav-mobile {
  background: red;
  width: 100%;
  height: 100vh;
} */

/* Account Bar
  -------------------------- */
/* .is-account-menu {
  display: flex;
  height: 60px;
  align-items: center;
}

.is-display-account {
  width: 32px;
  height: 32px;
}

.is-display-account-size {
  width: 100%;
}

.is-account-detail {
  width: 160px;
} */


/* Scrollbar
  -------------------------- */
/* .is-scroll-container {
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
} */

/* Mobile
  -------------------------- */
/* @media screen and (max-width: 1215px) {
  .is-background-navbar {
    background-color: #FFFFFF;
  }

  .is-warp-navbar {
    padding: 0rem 0.625rem;
  }

  .is-navbar-width {
    width: 100%;
  }

  .has-color-menu {
    color: #4a4a4a;
  }

  .is-color-icon {
    color: #bababa;
  }

  .is-background-aside {
    background-color: #f9f9f9;
  }
} */
</style>