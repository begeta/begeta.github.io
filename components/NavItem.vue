<template>
  <div id="menu-bar">
    <nav class="w-240px" role="navigation" aria-label="main navigation">
      <div class="container al-it-column bg-cl-light">
        <div>
          <aside class="column f-s-16px pd-0px ovf-y-auto h-55calc w-100pct f-drt-column jtf-space-between is-background-aside">
            <ul id="menu-list" class="l-h-125pct pd-hrzt-15px f-s-15px">
              <li :key="menu.routeName" v-for="menu in menus">
                <a @click="$router.push({path: menu.path})" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === menu.routeName ? 'is-active-menu' : ''">
                  {{menu.name}}
                </a>
                <ul v-if="menu.subMenus">
                  <li :key="subMenu.routeName" v-for="subMenu in menu.subMenus">
                    <a @click="$router.push({path: menu.path+subMenu.path})" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === subMenu.routeName ? 'is-active-menu' : ''">
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
            path: '/alignment',
            name: 'Alignment',
            routeName: 'atomic-alignment',
            subMenus: [
              {
                path: '/flexdirection',
                name: 'Flex Direction',
                routeName: 'atomic-flexdirection',
              },
              {
                path: '/flexwrap',
                name: 'Flex Wrap',
                routeName: 'atomic-flexwrap'
              },
              {
                path: '/flex',
                name: 'Flex',
                routeName: 'atomic-flex'
              },
              {
                path: '/alignitems',
                name: 'Align Items',
                routeName: 'atomic-alignitems'
              },
              {
                path: '/justifyitems',
                name: 'Justify Items',
                routeName: 'atomic-justifyitems'
              },
              {
                path: '/aligncontent',
                name: 'Align Content',
                routeName: 'atomic-aligncontent'
              },
              {
                path: '/alignself',
                name: 'Align Self',
                routeName: 'atomic-alignself'
              },
              {
                path: '/justifyself',
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
                path: '/backgroundcolor',
                name: 'Background Color',
                routeName: 'atomic-backgroundcolor',
              },
              {
                path: '/backgroundsize',
                name: 'Background Size',
                routeName: 'atomic-backgroundsize',
              },
              {
                path: '/backgroundrepeat',
                name: 'Background Repeat',
                routeName: 'atomic-backgroundrepeat',
              },
              {
                path: '/backgroundposition',
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
                path: '/borderstyle',
                name: 'Border Style',
                routeName: 'atomic-borderstyle',
              },
              {
                path: '/borderwidth',
                name: 'Border Width',
                routeName: 'atomic-borderwidth',
              },
              {
                path: '/bordercolor',
                name: 'Border Color',
                routeName: 'atomic-bordercolor',
              },
              {
                path: '/borderradius',
                name: 'Border Radius',
                routeName: 'atomic-borderradius',
              }
            ]
          },
          {
            path: '/boxposition',
            name: 'Box Position',
            routeName: 'atomic-boxposition',
          },
          {
            path: '/boxsize',
            name: 'Box Size',
            routeName: 'atomic-boxsize',
          },
          {
            path: '/color',
            name: 'Color',
            routeName: 'atomic-color',
          },
          {
            path: '/cursor',
            name: 'Cursor',
            routeName: 'atomic-cursor',
          },
          {
            path: '/display',
            name: 'Display',
            routeName: 'atomic-display',
          },
          {
            path: '/float',
            name: 'Float',
            routeName: 'atomic-float',
          },
          {
            path: '/margin',
            name: 'Margin',
            routeName: 'atomic-margin',
          },
          {
            path: '/objectfit',
            name: 'Object Fit',
            routeName: 'atomic-objectfit',
          },
          {
            path: '/opacity',
            name: 'Opacity',
            routeName: 'atomic-opacity',
          },
          {
            path: '/overflow',
            name: 'Overflow',
            routeName: 'atomic-overflow',
          },
          {
            path: '/padding',
            name: 'Padding',
            routeName: 'atomic-padding',
          },
          {
            path: '',
            name: 'Typography',
            routeName: 'atomic-typography',
            subMenus: [
              {
                path: '/fontsize',
                name: 'Font Size',
                routeName: 'atomic-fontsize',
              },
              {
                path: '/fontweight',
                name: 'Font Weight',
                routeName: 'atomic-fontweight',
              },
              {
                path: '/lineheight',
                name: 'Line Height',
                routeName: 'atomic-lineheight',
              },
              {
                path: '/textalign',
                name: 'Text Align',
                routeName: 'atomic-textalign',
              },
              {
                path: '/texttransform',
                name: 'Text Transform',
                routeName: 'atomic-texttransform',
              },
              {
                path: '/letterspacing',
                name: 'Letter Spacing',
                routeName: 'atomic-letterspacing',
              },
              {
                path: '/whitespace',
                name: 'White Space',
                routeName: 'atomic-whitespace',
              }
            ]
          },
          {
            path: '/z-index',
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
  cursor: pointer;
}
</style>