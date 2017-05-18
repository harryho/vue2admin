<template>
  <li class="treeview" @click="menuClick">
    <a href="#">
      <!--<i class="fa fa-folder"></i>-->
      <li class="fa" :class="[menuIcon ? menuIcon : 'fa-circle-o']"></li>
      <span>{{name}}</span>
      <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
       </span>
        <span v-if="labels.length > 0 " class="pull-right-container">
            <small v-for="label in labels" class="label pull-right" :class="label.col">{{label.txt}}</small>&nbsp;
        </span>
    </a>
    <ul class="treeview-menu">
        <slot></slot>
    </ul>
  </li>  
</template>

<script>
module.exports = {
    name: 'sidebarmenu',
    props: {
        name: { required: true },
        menuIcon: { required: false },
        labels: { required: false, default: () => [] } 
    },    
    methods: {
        menuClick: function (){
            if (window.$('treeview').hasClass('active')){
                window.$('treeview').removeClass('active')
            }
            else {
                window.$('treeview').addClass('active')
            }
        }
    },
    mounted: function () {
    }
}        
</script>
