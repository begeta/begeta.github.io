<template>
  <div id="menu-bar">
    <nav class="w-240px" role="navigation" aria-label="main navigation">
      <div class="container al-it-column bg-cl-light">
        <div>
          <aside class="column f-s-16px pd-0px ovf-y-auto h-75calc w-100pct f-drt-column jtf-space-between is-background-aside">
            <ul id="menu-list" class="mg-t-0px l-h-125pct pd-hrzt-15px f-s-15px">
              <li :key="menu.routerName" v-for="menu in menus">
                <a @click="$router.push({name: menu.routerName})" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === menu.routerName ? 'cl-black bd-rd-4px pd-l-10px is-active-menu' : ''">
                  {{menu.name}}
                </a>
                <ul v-if="menu.subMenus">
                  <li :key="subMenu.routerName" v-for="subMenu in menu.subMenus">
                    <a @click="$router.push({name: subMenu.routerName})" class="dp-flex h-50px pd-0px al-it-center is-fill-gray" :class="$route.name === subMenu.routerName ? 'cl-black bd-rd-4px pd-l-10px is-active-menu' : ''">
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
            name: 'Alignment',
            routerName: 'alignment',
            subMenus: [
              {
                name: 'Flex Direction',
                routerName: 'alignment-flexdirection',
              },
              {
                name: 'Flex Wrap',
                routerName: 'alignment-flexwrap'
              },
              {
                name: 'Flex',
                routerName: 'alignment-flex'
              },
              {
                name: 'Align Items',
                routerName: 'alignment-alignitems'
              },
              {
                name: 'Justify Items',
                routerName: 'alignment-justifyitems'
              },
              {
                name: 'Align Content',
                routerName: 'alignment-aligncontent'
              },
              {
                name: 'Justify Content',
                routerName: 'alignment-justifycontent'
              },
              {
                name: 'Align Self',
                routerName: 'alignment-alignself'
              },
              {
                name: 'Justify Self',
                routerName: 'alignment-justifyself'
              }
            ]
          },
          {
            name: 'Background',
            routerName: 'background',
            subMenus: [
              {
                name: 'Background Color',
                routerName: 'background-backgroundcolor',
              },
              {
                name: 'Background Size',
                routerName: 'background-backgroundsize',
              },
              {
                name: 'Background Repeat',
                routerName: 'background-backgroundrepeat',
              },
              {
                name: 'Background Position',
                routerName: 'background-backgroundposition',
              }
            ]
          },
          {
            name: 'Border',
            routerName: 'border',
            subMenus: [
              {
                name: 'Border Style',
                routerName: 'border-borderstyle',
              },
              {
                name: 'Border Width',
                routerName: 'border-borderwidth',
              },
              {
                name: 'Border Color',
                routerName: 'border-bordercolor',
              },
              {
                name: 'Border Radius',
                routerName: 'border-borderradius',
              }
            ]
          },
          {
            name: 'Box Position',
            routerName: 'boxposition',
          },
          {
            name: 'Box Size',
            routerName: 'boxsize',
          },
          {
            name: 'Color',
            routerName: 'color',
          },
          {
            name: 'Cursor',
            routerName: 'cursor',
          },
          {
            name: 'Display',
            routerName: 'display',
          },
          {
            name: 'Float',
            routerName: 'float',
          },
          {
            name: 'Margin',
            routerName: 'margin',
          },
          {
            name: 'Object Fit',
            routerName: 'objectfit',
          },
          {
            name: 'Opacity',
            routerName: 'opacity',
          },
          {
            name: 'Overflow',
            routerName: 'overflow',
          },
          {
            name: 'Padding',
            routerName: 'padding',
          },
          {
            name: 'Typography',
            routerName: 'typography',
            subMenus: [
              {
                name: 'Font Size',
                routerName: 'typography-fontsize',
              },
              {
                name: 'Font Weight',
                routerName: 'typography-fontweight',
              },
              {
                name: 'Line Height',
                routerName: 'typography-lineheight',
              },
              {
                name: 'Text Align',
                routerName: 'typography-textalign',
              },
              {
                name: 'Text Transform',
                routerName: 'typography-texttransform',
              },
              {
                name: 'Letter Spacing',
                routerName: 'typography-letterspacing',
              },
              {
                name: 'White Space',
                routerName: 'typography-whitespace',
              }
            ]
          },
          {
            name: 'Z-Index',
            routerName: 'zindex',
          }
        ]
      }
    }
  }
</script>

<style scoped>
#menu-list li ul {
  border-left: 1px solid #dbdbdb;
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

.is-active-menu {
  background: rgba(0,0,0,.03);
}
</style>