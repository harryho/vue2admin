<template>
  <li>
    <router-link v-if="hasSubMenu === false" :to="link">
        <i class="fa" :class="[menuIcon ? menuIcon : 'fa-circle-o']"></i>{{name}}
        <span v-if="labels.length > 0 " class="pull-right-container">
            <small v-for="label in labels" class="label pull-right" :class="label.col">{{label.txt}}</small>&nbsp;
        </span>
    </router-link>
    <a href="#" v-if="hasSubMenu">
      <li class="fa fa-circle-o"></li>
      <span>{{name}}</span>
      <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
      </span>
      <span v-if="labels.length > 0 " class="pull-right-container">
             <small v-for="label in labels" class="label pull-right" :class="label.col">{{label.txt}}</small>&nbsp;
      </span>
    </a>
    <ul v-if="hasSubMenu" class="treeview-menu" @click="menuClick">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
module.exports = {
    name: 'sidebarmenu',
    props: {
        name: { required: true },
        link: { type: String, required: true },
        isMultiLevel: { required: false, default: 'no' },
        menuIcon: { required: false },
        labels: { required: false, default: () => [] } 
    },
    computed: {
      hasSubMenu: function(){
        return this.isMultiLevel === 'yes';
      }
    },
    methods: {
        menuClick: function (){
            if (window.$('treeview-menu').hasClass('open-menu')){
                window.$('treeview-menu').removeClass('actopen-menuive')
            }
            else {
                window.$('treeview-menu').addClass('open-menu')
            }
        }
    },
    mounted: function(){
    }
}       
</script>
