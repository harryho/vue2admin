<template>
  <div class="wrapper">
    <header class="main-header">
      <a href="/" class="logo">
        <!-- mini logo for sidebar mini 40x50 pixels -->
        <span class="logo-mini"><img src="/static/img/logo_rtk_sm.png" alt="Logo" class="img-responsive center-block"></span>
        <!-- logo for regular state and mobile devices -->
        <div class="container logo-lg">
          <!--<div class="pull-left image"><img src="/static/img/logo_md_rect.png" alt="Logo" class="img-responsive"></div>-->
          <div class="pull-left info">Reetek Vue2 Admin</div>
        </div>
      </a>
      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages-->
            <li class="dropdown messages-menu" @click="topBarToggleMenu">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-envelope-o"></i>
                <span class="label label-success">{{ state.userInfo.messages | count }}</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have {{ state.userInfo.messages | count }} message(s)</li>
                <li v-if="state.userInfo.messages.length > 0">
                  <!-- inner menu: contains the messages -->
                  <ul class="menu">
                    <li v-for="m in state.userInfo.messages">
                      <a href="javascript:;">
                        <div class="pull-left">
                          <img v-bind:src="m.senderProfile" class="img-circle" alt="User Image">
                        </div>
                        <h4>
                          {{m.sender}}
                          <small><i class="fa fa-clock-o"></i> {{m.sendTime}}</small>
                        </h4>
                        <p>{{m.message}}</p>
                      </a>
                    </li>
                  </ul>
                  <!-- /.menu -->
                </li>
                <li class="footer" v-if="state.userInfo.messages.length > 0"><a href="javascript:;">See All Messages</a></li>
              </ul>
            </li>
            <!-- /.messages-menu -->
            <!-- Notifications Menu -->
            <li class="dropdown notifications-menu" @click="topBarToggleMenu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-bell-o"></i>
                <span class="label label-warning">{{ state.userInfo.notifications | count }}</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have {{ state.userInfo.notifications | count }} notification(s)</li>
                <li v-if="state.userInfo.notifications.length > 0">
                  <!-- Inner Menu: contains the notifications -->
                  <ul class="menu">
                    <li v-for="n in state.userInfo.notifications">
                      <a href="javascript:;">
                        <h4>
                          <small><i class="fa fa-users text-aqua"></i> {{n}}</small>
                        </h4>
                      </a>
                    </li>                  
                    <!-- end notification -->
                  </ul>
                </li>
                <li class="footer" v-if="state.userInfo.notifications.length > 0"><a href="javascript:;">View all</a></li>
              </ul>
            </li>
            <!-- Tasks Menu -->
            <li class="dropdown tasks-menu" @click="topBarToggleMenu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-flag-o"></i>
                <span class="label label-danger">{{ state.userInfo.tasks | count }} </span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have {{ state.userInfo.tasks | count }} task(s)</li>
                <li v-if="state.userInfo.tasks.length > 0">
                  <!-- Inner menu: contains the tasks -->
                  <ul class="menu">
                    <li v-for="t in state.userInfo.tasks">
                      <a href="javascript:;">
                        <h3>
                          {{t.event}}
                          <small class="pull-right">{{t.progress}}%</small>
                        </h3>
                        
                        <div class="progress xs">
                          <!-- Change the css width attribute to simulate progress -->
                          <div class="progress-bar progress-bar-aqua" v-bind:style="'width: ' + t.progress + '%'" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">{{t.progress}}% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li> 
                    <li>
                      <!-- Task item -->
                      <a href="javascript:;">
                        <!-- Task title and progress text -->
                        <h3>
                          Design some buttons
                          <small class="pull-right">20%</small>
                        </h3>
                        <!-- The progress bar -->
                        <div class="progress xs">
                          <!-- Change the css width attribute to simulate progress -->
                          <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">20% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- end task item -->
                  </ul>
                </li>
                <li class="footer" v-if="state.userInfo.tasks.length > 0">
                  <a href="javascript:;">View all tasks</a>
                </li>
              </ul>
            </li>
            <!-- User Account Menu -->
            <li class="dropdown user user-menu">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <img v-bind:src="demo.avatar" class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs">{{ demo.displayName }}</span>
              </a>
            </li>
            <!-- Control Sidebar Toggle Button -->
            <li>
              <a href="#" :click="asideTabs" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
          <div class="pull-left image">
          </div>
          <div class="pull-left info">
            <div>
              <p class="white">{{ demo.displayName }}</p>
            </div>
            <a href="javascript:;"><i class="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>
        <!-- search form (Optional) -->
        <form v-on:submit.prevent class="sidebar-form">
          <div class="input-group">
            <input type="text" name="search" id="search" class="search form-control" data-toggle="hideseek" placeholder="Search Menus"
              data-list=".sidebar-menu">
            <span class="input-group-btn">
                  <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                  </button>
                </span>
          </div>
        </form>
        <!-- /.search form -->
        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
          <!--<li class="header">TOOLS</li>
          <li class="active pageLink" v-on:click="toggleMenu">
            <router-link to="/"><i class="fa fa-desktop"></i><span class="page">Dashboard</span></router-link>
          </li>-->
          <li class="treeview">
            <a href="#">
              <i class="fa fa-dashboard"></i>
              <span>Dashboard</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/dashboard1"><i class="fa fa-circle-o"></i>Dashboard 1</router-link>
              </li>
              <li>
                <router-link to="/dashboard2"><i class="fa fa-circle-o"></i>Dashboard 2</router-link>
              </li>
              <li>
                <router-link to="/"><i class="fa fa-circle-o"></i>Dashboard 3</router-link>
              </li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-laptop"></i>
              <span>UI Elements</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/general"><i class="fa fa-circle-o"></i> General</router-link>
              </li>
              <li>
                <router-link to="/icons"><i class="fa fa-circle-o"></i> Icons</router-link>
              </li>
              <li>
                <router-link to="/buttons"><i class="fa fa-circle-o"></i> Buttons</router-link>
              </li>
              <li>
                <router-link to="/sliders"><i class="fa fa-circle-o"></i> Sliders</router-link>
              </li>
              <li>
                <router-link to="/timeline"><i class="fa fa-circle-o"></i> Timeline</router-link>
              </li>
              <li>
                <router-link to="/modals"><i class="fa fa-circle-o"></i> Modals</router-link>
              </li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-edit"></i>
              <span>Forms</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/general-form"><i class="fa fa-circle-o"></i> General Elements</router-link>
              </li>
              <li>
                <router-link to="/advanced-form"><i class="fa fa-circle-o"></i>Advanced Form</router-link>
              </li>
              <li>
                <router-link to="/editor"><i class="fa fa-circle-o"></i>Editor</router-link>
              </li>
            </ul>
          </li>
          <li class="pageLink" v-on:click="toggleMenu">
            <router-link to="/widgets"><i class="fa fa-th"></i><span class="page">Widgets</span>
              <small class="label pull-right bg-green">new</small></router-link>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-pie-chart"></i>
              <span>Charts</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/chartjs"><i class="fa fa-circle-o"></i> ChartJs</router-link>
              </li>
              <li>
                <router-link to="/morris"><i class="fa fa-circle-o"></i> Morris</router-link>
              </li>
              <li>
                <router-link to="/flot"><i class="fa fa-circle-o"></i> Flot</router-link>
              </li>
              <li>
                <router-link to="/inline"><i class="fa fa-circle-o"></i> Inline Charts</router-link>
              </li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-table"></i>
              <span>Tables</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/tables"><i class="fa fa-circle-o"></i> Simple Tables </router-link>
              </li>
              <li>
                <router-link to="/datatables"><i class="fa fa-circle-o"></i>Data Tables</router-link>
              </li>
            </ul>
          </li>
          <li class="pageLink" v-on:click="toggleMenu">
            <router-link to="/calendar"><i class="fa fa-calendar"></i><span class="page">Calendar</span>
              <span class="pull-right-container">
            <small class="label pull-right bg-blue">17</small>&nbsp;&nbsp;
            <small class="label pull-right bg-red">3</small>
            </span></router-link>
          </li>
          <li class="treeview">
            <a href="#"><i class="fa fa-envelope"></i><span class="page">MailBox</span>
            <span class="pull-right-container">
            <small class="label pull-right bg-blue">17</small>&nbsp;&nbsp;
            <small class="label pull-right bg-red">3</small>
            <small class="label pull-right bg-yellow">23</small>
            </span></a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/inbox"><i class="fa fa-circle-o"></i>Inbox</router-link>
              </li>
              <li>
                <router-link to="/compose"><i class="fa fa-circle-o"></i> Compose</router-link>
              </li>
              <li>
                <router-link to="/read"><i class="fa fa-circle-o"></i>Read</router-link>
              </li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-folder"></i>
              <span>Pages</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/404"><i class="fa fa-circle-o"></i>404</router-link>
              </li>
              <li>
                <router-link to="/500"><i class="fa fa-circle-o"></i> 500</router-link>
              </li>
              <li>
                <router-link to="/profile"><i class="fa fa-circle-o"></i>Profile</router-link>
              </li>
              <li>
                <router-link to="/invoice"><i class="fa fa-circle-o"></i>Invoice</router-link>
              </li>
              <li>
                <router-link to="/invoiceprint"><i class="fa fa-circle-o"></i>Invoice Print</router-link>
              </li>
              <li>
                <router-link to="/register"><i class="fa fa-circle-o"></i>Register</router-link>
              </li>
              <li>
                <router-link to="/lockscreen"><i class="fa fa-circle-o"></i>Lock Screen</router-link>
              </li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-share"></i> <span>Multilevel</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="#"><i class="fa fa-circle-o"></i> Level One T</a></li>
              <li>
                <a href="#"><i class="fa fa-circle-o"></i> Level One
                  <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                <ul class="treeview-menu">
                  <li><a href="#"><i class="fa fa-circle-o"></i> Level Two T</a></li>
                  <li>
                    <a href="#"><i class="fa fa-circle-o"></i> Level Two
                      <span class="pull-right-container">
                         <i class="fa fa-angle-left pull-right"></i>
                      </span>
                    </a>
                    <ul class="treeview-menu">
                      <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                      <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="header">MISCELLANOUS</li>
          <li class="pageLink" v-on:click="toggleMenu">
            <router-link to="/access"><i class="fa fa-book"></i><span class="page">Access</span></router-link>
          </li>
          <li class="pageLink" v-on:click="toggleMenu">
            <router-link to="/setting"><i class="fa fa-cog"></i><span class="page">Settings</span></router-link>
          </li>
          <li class="pageLink" v-on:click="toggleMenu">
            <router-link to="/server"><i class="fa fa-hdd-o"></i><span class="page">Server</span></router-link>
          </li>
          <li class="pageLink" v-on:click="toggleMenu">
            <router-link to="/repos"><i class="fa fa-heart"></i><span class="page">Repos</span>
              <small class="label pull-right bg-green">AJAX</small></router-link>
          </li>
          <li class="header">PAGES</li>
          <!--<li class="pageLink" v-on:click="toggleMenu">
            <router-link to="/login"><i class="fa fa-circle-o text-yellow"></i> <span class="page">Login</span></router-link>
          </li>-->
          <!--<li class="pageLink" v-on:click="toggleMenu">
            <router-link to="/404"><i class="fa fa-circle-o text-red"></i> <span class="page">404</span></router-link>
          </li>-->
          <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
          <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
          <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
          <li class="pageLink" v-on:click="toggleMenu">
            <router-link to="/misc"><i class="fa fa-circle-o text-green"></i> <span class="page">Misc</span></router-link>
          </li>
        </ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          {{$route.name.toUpperCase()}}
          <small>{{$route.meta.description}}</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="javascript:;"><i class="fa fa-home"></i>Home</a></li>
          <li class="active">{{$route.name.toUpperCase()}}</li>
        </ol>
      </section>
      <router-view></router-view>
    </div>
    <!--<hello></hello>-->
    <!-- /.content-wrapper -->
    <!-- Main Footer -->
    <footer class="main-footer">
      <strong>Copyright &copy; {{year}} <a href="javascript:;">Reetek Vue2 Admin</a>.</strong> All rights reserved.
    </footer>
    <!--<div id="settingtab"></div>-->
    <!--<settingtab></settingtab>-->
    <!-- /.tab-pane -->
    <aside-tabs></aside-tabs>
    <!-- /.tab-pane -->
    <!--<div class="control-sidebar-bg"></div>-->
  </div>
</template>
<script>
import faker from 'faker'
import asideTabs from './AsideTabs.vue'
require('hideseek')

module.exports = {
  name: 'Main',
  components: {
    asideTabs
  },
  data: function () {
    return {
      section: 'Main',
      me: '',
      error: '',
      api: {
        servers: {
          url: '', // Back end server
          result: []
        }
      }
    }
  },
  computed: {
    store: function () {
      return this.$parent.$store
    },
    state: function () {
      return this.store.state
    },
    callAPI: function () {
      return this.$parent.callAPI
    },
    demo: function () {
      return {
        displayName: faker.name.findName(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        randomCard: faker.helpers.createCard()
      }
    },
    year: function () {
      var y = new Date()
      return y.getFullYear()
    }
  },
  methods: {
    changeloading: function () {
      this.store.commit('TOGGLE_SEARCHING')
    },
    toggleMenu: function (event) {
      // remove active from li
      window.$('li.pageLink').removeClass('active')

      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    },
    topBarToggleMenu: function (event) {
      // remove active from li
      window.$('li.dropdown').removeClass('open')

      if (window.$('li.dropdown').hasClass('open')){
        window.$('li.dropdown').removeClass('open')
      }
      else {
        window.$('li.dropdown').addClass('open')
      }
    },
    asideTabs: function (){
      if (window.$('control-sidebar').hasClass('control-sidebar-open')){
        window.$('control-sidebar').removeClass('control-sidebar-open')
      }
      else {
        window.$('control-sidebar').addClass('control-sidebar-open')
      }
    }
  },
  mounted: function () {
    // Page is ready. Let's load our functions!   
    this.callAPI('GET', 'static/data/userinfo.json').then(
      ok => {
       console.log('ssssss', ok.body)
       this.$parent.$store.commit('SET_USERINFO', ok.body)
       console.log('state ...', this.$parent.$store.state)
    }, err => {
       console.log('eeeeeee', err)
    })
 
  }
}
</script>
<style>
  .user-panel {
    height: 4em;
  }
  
  hr.visible-xs-block {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.17);
    height: 1px;
    border-color: transparent;
  }

</style>
