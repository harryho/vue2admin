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
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-envelope-o"></i>
                <span class="label label-success">{{ messageCount }}</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have {{ messageCount }} message(s)</li>
                <li v-if="messageCount > 0">
                  <!-- inner menu: contains the messages -->
                  <ul class="menu">
                    <!-- Just list top 3 -->
                    <li v-for="( m, i ) in state.userInfo.messages" v-if="i <= 2">
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
                <li class="footer" v-if="messageCount > 0"><a href="javascript:;">See All Messages</a></li>
              </ul>
            </li>
            <!-- /.messages-menu -->
            <!-- Notifications Menu -->
            <li class="dropdown notifications-menu" @click="topBarToggleMenu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-bell-o"></i>
                <span class="label label-warning">{{ notificationCount }}</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have {{ notificationCount }} notification(s)</li>
                <li v-if="notificationCount > 0">
                  <!-- Inner Menu: contains the notifications -->
                  <ul class="menu">
                    <!-- Just list top 3 -->
                    <li v-for="(n, i) in state.userInfo.notifications" v-if="i <= 2">
                      <a href="javascript:;">
                        <h4>
                          <small><i class="fa fa-users text-aqua"></i> {{n}}</small>
                        </h4>
                      </a>
                    </li>
                    <!-- end notification -->
                  </ul>
                </li>
                <li class="footer" v-if="notificationCount > 0"><a href="javascript:;">View all</a></li>
              </ul>
            </li>
            <!-- Tasks Menu -->
            <li class="dropdown tasks-menu" @click="topBarToggleMenu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-flag-o"></i>
                <span  class="label label-danger">{{ taskCount }} </span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have {{ taskCount }} task(s)</li>
                <li v-if="taskCount> 0">
                  <!-- Inner menu: contains the tasks -->
                  <ul class="menu">
                    <!-- Just list top 3 -->
                    <li v-for="(t, i) in state.userInfo.tasks" v-if="i <= 2">
                      <a href="javascript:;">
                        <h3>
                          {{t.event}}
                          <small class="pull-right">{{t.progress}}%</small>
                        </h3>
                        <div class="progress xs">
                          <!-- Change the css width attribute to simulate progress -->
                          <div class="progress-bar progress-bar-aqua" v-bind:style="'width: ' + t.progress + '%'" role="progressbar" aria-valuenow="20"
                            aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">{{t.progress}}% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer" v-if="taskCount > 0">
                  <a href="#">View all tasks</a>
                </li>
              </ul>
            </li>
            <!-- User Account Menu -->
            <li class="dropdown user user-menu" @click="topBarToggleMenu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <img v-bind:src="demo.avatar" class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs">{{ demo.displayName }}</span>
              </a>
              <ul class="dropdown-menu">
                <!-- User image -->
                <li class="user-header">
                  <img v-bind:src="demo.avatar"  class="img-circle" alt="User Image">

                  <p>
                    Harry Ho - Solution Architect
                    <small>Member since Nov. 2010</small>
                  </p>
                </li>
                <!-- Menu Body -->
                <li class="user-body">
                  <div class="row">
                    <div class="col-xs-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </div>
                  <!-- /.row -->
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="#" class="btn btn-default btn-flat">Profile</a>
                  </div>
                  <div class="pull-right">
                    <a href="#" class="btn btn-default btn-flat">Sign out</a>
                  </div>
                </li>
            </ul>
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
              <img v-bind:src="demo.avatar" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <div>
              <p class="white">{{ demo.displayName }}</p>
            </div>
            <a href=";"><i class="fa fa-circle text-success"></i> Online</a>
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
          <sidebar-menu name="Dashboard" menu-icon="fa-dashboard">
            <sidebar-menu-item name="Dashboard 1" link="dashboard1"></sidebar-menu-item>
            <sidebar-menu-item name="Dashboard 2" link="dashboard2"></sidebar-menu-item>
            <sidebar-menu-item name="Dashboard 3" link="dashboard3"></sidebar-menu-item>
          </sidebar-menu>
          <sidebar-menu name="UI Elements" menu-icon="fa-laptop">
            <sidebar-menu-item name="General" link="general"></sidebar-menu-item>
            <sidebar-menu-item name="Icons" link="icons"></sidebar-menu-item>
            <sidebar-menu-item name="Buttons" link="buttons"></sidebar-menu-item>
            <sidebar-menu-item name="Sliders" link="sliders"></sidebar-menu-item>
            <sidebar-menu-item name="Timeline" link="timeline"></sidebar-menu-item>
            <sidebar-menu-item name="Modals" link="modals"></sidebar-menu-item>
          </sidebar-menu>
          <sidebar-menu name="Forms" menu-icon="fa-edit">
            <sidebar-menu-item name="General Form" link="general-form"></sidebar-menu-item>
            <sidebar-menu-item name="Advanced Form" link="advanced-form"></sidebar-menu-item>
            <sidebar-menu-item name="Editor" link="editor"></sidebar-menu-item>
          </sidebar-menu>
          <sidebar-menu name="Charts" menu-icon="fa-pie-chart">
            <sidebar-menu-item name="ChartJs" link="chartjs"></sidebar-menu-item>
            <sidebar-menu-item name="Morris" link="morris"></sidebar-menu-item>
            <sidebar-menu-item name="Flot" link="flot"></sidebar-menu-item>
            <sidebar-menu-item name="Inline Charts" link="inline"></sidebar-menu-item>
          </sidebar-menu>
          <sidebar-menu name="Tables" menu-icon="fa-table">
            <sidebar-menu-item name="Simple Tables" link="tables"></sidebar-menu-item>
            <sidebar-menu-item name="Data Tables" link="datatables"></sidebar-menu-item>
          </sidebar-menu>
          <sidebar-menu-item name="Calendar" link="calendar" menu-icon="fa-calendar" :labels="[{'col':'bg-purple', 'txt':'11'}, {'col':'bg-yellow', 'txt':'6'}, {'col':'bg-blue', 'txt':'10'}]">
          </sidebar-menu-item>
          <sidebar-menu name="MailBox" menu-icon="fa-envelope" :labels="[{'col':'bg-blue', 'txt':'11'}, {'col':'bg-red', 'txt':'9'}, {'col':'bg-yellow', 'txt':'17'}]">
            <sidebar-menu-item name="Inbox" link="inbox"></sidebar-menu-item>
            <sidebar-menu-item name="Compose" link="compose" menu-icon="fa-edit"></sidebar-menu-item>
            <sidebar-menu-item name="Read" link="readmail"></sidebar-menu-item>
          </sidebar-menu>         
          <sidebar-menu name="Pages" menu-icon="fa-book">
            <sidebar-menu-item name="404" link="404"></sidebar-menu-item>
            <sidebar-menu-item name="500" link="500"></sidebar-menu-item>
            <sidebar-menu-item name="Profile" link="profile"></sidebar-menu-item>
            <sidebar-menu-item name="Invoice" link="invoice"></sidebar-menu-item>
            <sidebar-menu-item name="Invoice Print" link="invoiceprint"></sidebar-menu-item>
            <sidebar-menu-item name="Register" link="register"></sidebar-menu-item>
            <sidebar-menu-item name="Lock Screen" link="lockscreen"></sidebar-menu-item>
          </sidebar-menu>
          <sidebar-menu name="Multilevel" menu-icon="fa-share">
            <sidebar-menu-item name="Level 1 - No Submenu " link=""></sidebar-menu-item>
            <sidebar-menu-item name="Level 1 S" link="" is-multi-level=true>
              <sidebar-menu-item name="Sub Level 2 - No Submenu" link=""></sidebar-menu-item>
              <sidebar-menu-item name="Sub Level 2" link="" is-multi-level=true>
                 <sidebar-menu-item name="Sub Level 3" link="" is-multi-level=true>
                  <sidebar-menu-item name="Sub Level 4 - End" link=""></sidebar-menu-item>
                </sidebar-menu-item>
                <sidebar-menu-item name="Sub Level 3 - No Submenu" link=""></sidebar-menu-item>
               
              </sidebar-menu-item>
            </sidebar-menu-item>
          </sidebar-menu>
           <sidebar-menu name="INFORMATION" is-splitter=true>
          </sidebar-menu>
          <sidebar-menu-item name="Important" link="" menu-icon="fa-circle-o text-red"> </sidebar-menu-item>
          <sidebar-menu-item name="Warning" link="" menu-icon="fa-circle-o text-yellow"> </sidebar-menu-item>
          <sidebar-menu-item name="Information" link="" menu-icon="fa-circle-o text-aqua"> </sidebar-menu-item>
          <sidebar-menu-item name="Misc" link="" menu-icon="fa-circle-o text-green"> </sidebar-menu-item>
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
import asideTabs from './AsideTabs.vue'
import sidebarMenu from './SideBarMenu.vue'
import sidebarMenuItem from './SideBarMenuItem.vue'

require('hideseek')

module.exports = {
  name: 'Main',
  components: {
    asideTabs,
    sidebarMenu,
    sidebarMenuItem
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
      return (this.store.state ? this.store.state : {userInfo: {
                messages: [],
                notifications: [],
                tasks: []}})
    },
    messageCount: function () {
      return (this.state && this.state.userInfo && this.state.userInfo.messages ? this.state.userInfo.messages.length : 0)
    },
    notificationCount: function () {
      return (this.state && this.state.userInfo && this.state.userInfo.notifications ? this.state.userInfo.notifications.length : 0)
    },
    taskCount: function () {
      return (this.state && this.state.userInfo && this.state.userInfo.tasks ? this.state.userInfo.tasks.length : 0)
    },
    callAPI: function () {
      return this.$parent.callAPI
    },
    demo: function () {
      return {
        displayName: 'Harry Ho', // faker.name.findName(),
        avatar: '/static/img/avatar0.png', // faker.image.avatar(),
        email: 'HarryHo@Vue2Admin.com', // faker.internet.email(),
        randomCard: null // faker.helpers.createCard()
      }
    },
    year: function () {
      var y = new Date()
      return y.getFullYear()
    }
  },
  methods: {
    changeloading: function () {
      this.store.commit('globalSearching')
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

      if (window.$('li.dropdown').hasClass('open')) {
        window.$('li.dropdown').removeClass('open')
      } else {
        window.$('li.dropdown').addClass('open')
      }
    },
    asideTabs: function () {      
      if (window.$('control-sidebar').hasClass('control-sidebar-open')) {
        window.$('control-sidebar').removeClass('control-sidebar-open')
      } else {
        window.$('control-sidebar').addClass('control-sidebar-open')
      }
    }
  },
  mounted: function () {
    // Page is ready. Let's load our functions!  
    this.callAPI('GET', '/static/data/userInfo.json').then(
      ok => {
       this.$parent.$store.commit('setUserInfo', ok.body)
    }, err => {
       console.log('Error: ', err)
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
