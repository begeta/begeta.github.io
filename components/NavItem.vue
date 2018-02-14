<template>
  <div id="menu-bar">
    <nav class="w-240px" role="navigation" aria-label="main navigation">
      <div class="container al-it-column bg-cl-light">
        <div>
          <aside class="column f-s-16px pd-0px ovf-y-auto h-55calc w-100pct f-drt-column jtf-space-between is-background-aside">
            <ul id="menu-list" class="l-h-125pct pd-hrzt-15px f-s-15px">
              <li :key="menu.routeName" v-for="menu in menus">
                <a :href="menu.path" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === menu.routeName ? 'is-active-menu' : ''">
                  {{menu.name}}
                </a>
                <ul v-if="menu.subMenus">
                  <li :key="subMenu.routeName" v-for="subMenu in menu.subMenus">
                    <a :href="subMenu.path" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === subMenu.routeName ? 'is-active-menu' : ''">
                      {{subMenu.name}}
                    </a>
                  </li>
                </ul>
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
    data () {
      return {
        menus: [
          {
            path: '',
            name: 'Alignment',
            routeName: 'atomic-alignment',
            subMenus: [
              {
                path: '/atomic/flexdirection',
                name: 'Flex Direction',
                routeName: 'atomic-flexdirection',
              },
              {
                path: '/atomic/flexwrap',
                name: 'Flex Wrap',
                routeName: 'atomic-flexwrap'
              },
              {
                path: '/atomic/flex',
                name: 'Flex',
                routeName: 'atomic-flex'
              },
              {
                path: '/atomic/alignitems',
                name: 'Align Items',
                routeName: 'atomic-alignitems'
              },
              {
                path: '/atomic/justifyitems',
                name: 'Justify Items',
                routeName: 'atomic-justifyitems'
              },
              {
                path: '/atomic/aligncontent',
                name: 'Align Content',
                routeName: 'atomic-aligncontent'
              },
              {
                path: '/atomic/alignself',
                name: 'Align Self',
                routeName: 'atomic-alignself'
              },
              {
                path: '/atomic/justifyself',
                name: 'Justify Self',
                routeName: 'atomic-justifyself'
              }
            ]
          },
          {
            path: '',
            name: 'Background',
            routeName: 'atomic-background',
            subMenus: [
              {
                path: '/atomic/backgroundcolor',
                name: 'Background Color',
                routeName: 'atomic-backgroundcolor',
              },
              {
                path: '/atomic/backgroundsize',
                name: 'Background Size',
                routeName: 'atomic-backgroundsize',
              },
              {
                path: '/atomic/backgroundrepeat',
                name: 'Background Repeat',
                routeName: 'atomic-backgroundrepeat',
              },
              {
                path: '/atomic/backgroundposition',
                name: 'Background Position',
                routeName: 'atomic-backgroundposition',
              }
            ]
          },
          {
            path: '',
            name: 'Border',
            routeName: 'atomic-border',
            subMenus: [
              {
                path: '/atomic/borderstyle',
                name: 'Border Style',
                routeName: 'atomic-borderstyle',
              },
              {
                path: '/atomic/borderwidth',
                name: 'Border Width',
                routeName: 'atomic-borderwidth',
              },
              {
                path: '/atomic/bordercolor',
                name: 'Border Color',
                routeName: 'atomic-bordercolor',
              },
              {
                path: '/atomic/borderradius',
                name: 'Border Radius',
                routeName: 'atomic-borderradius',
              }
            ]
          },
          {
            path: '/atomic/boxposition',
            name: 'Box Position',
            routeName: 'atomic-boxposition',
          },
          {
            path: '/atomic/boxsize',
            name: 'Box Size',
            routeName: 'atomic-boxsize',
          },
          {
            path: '/atomic/color',
            name: 'Color',
            routeName: 'atomic-color',
          },
          {
            path: '/atomic/cursor',
            name: 'Cursor',
            routeName: 'atomic-cursor',
          },
          {
            path: '/atomic/display',
            name: 'Display',
            routeName: 'atomic-display',
          },
          {
            path: '/atomic/float',
            name: 'Float',
            routeName: 'atomic-float',
          },
          {
            path: '/atomic/margin',
            name: 'Margin',
            routeName: 'atomic-margin',
          },
          {
            path: '/atomic/objectfit',
            name: 'Object Fit',
            routeName: 'atomic-objectfit',
          },
          {
            path: '/atomic/opacity',
            name: 'Opacity',
            routeName: 'atomic-opacity',
          },
          {
            path: '/atomic/overflow',
            name: 'Overflow',
            routeName: 'atomic-overflow',
          },
          {
            path: '/atomic/padding',
            name: 'Padding',
            routeName: 'atomic-padding',
          },
          {
            path: '',
            name: 'Typography',
            routeName: 'atomic-typography',
            subMenus: [
              {
                path: '/atomic/fontsize',
                name: 'Font Size',
                routeName: 'atomic-fontsize',
              },
              {
                path: '/atomic/fontweight',
                name: 'Font Weight',
                routeName: 'atomic-fontweight',
              },
              {
                path: '/atomic/lineheight',
                name: 'Line Height',
                routeName: 'atomic-lineheight',
              },
              {
                path: '/atomic/textalign',
                name: 'Text Align',
                routeName: 'atomic-textalign',
              },
              {
                path: '/atomic/texttransform',
                name: 'Text Transform',
                routeName: 'atomic-texttransform',
              },
              {
                path: '/atomic/letterspacing',
                name: 'Letter Spacing',
                routeName: 'atomic-letterspacing',
              },
              {
                path: '/atomic/whitespace',
                name: 'White Space',
                routeName: 'atomic-whitespace',
              }
            ]
          },
          {
            path: '/atomic/z-index',
            name: 'Z-Index',
            routeName: 'atomic-z-index',
          }
        ]
      }
    }
  }
</script>

<style scoped>
#menu-list li ul {
  border-left: 1px solid #dbdbdb;
  margin: .75em;
  padding-left: .75em;
  list-style: none;
}

ul {
  list-style: none;
}

.is-fill-gray {
  fill: #bababa;
}

#menu-list a {
  color: #4a4a4a;
}

a {
  text-decoration: none;
}
</style>