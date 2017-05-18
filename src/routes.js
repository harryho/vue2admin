import MainView from './components/Main.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/pages/404.vue'
import ServerErrorView from './components/pages/500.vue'

//  -- Dashboard --
import Dashboard1View from './components/dashboard/Dashboard.1.vue'
import Dashboard2View from './components/dashboard/Dashboard.2.vue'
import Dashboard3View from './components/dashboard/Dashboard.3.vue'

// -- UI --
import ButtonsView from './components/ui/Buttons.vue'
import GeneralView from './components/ui/General.vue'
import IconsView from './components/ui/Icons.vue'
import ModalsView from './components/ui/Modals.vue'
import SlidersView from './components/ui/Sliders.vue'
import TimelineView from './components/ui/Timeline.vue'

// -- Form --
import GeneralFormView from './components/forms/GeneralForm.vue'
import AdvancedFormView from './components/forms/AdvancedForm.vue'
import EditorView from './components/forms/Editor.vue'

// -- Tables --
import TablesView from './components/tables/Tables.vue'
import DataTablesView from './components/tables/DataTables.vue'

// -- Widgets --
import WidgetsView from './components/widget/Widgets.vue'
import CalendarView from './components/widget/Calendar.vue'

// -- Pages --
import BlankView from './components/pages/Blank.vue'
import InvoiceView from './components/pages/Invoice.vue'
import InvoicePrintView from './components/pages/InvoicePrint.vue'
import LockScreenView from './components/pages/LockScreen.vue'
import ProfileView from './components/pages/Profile.vue'
import RegisterView from './components/pages/Register.vue'

// -- Charts --
import ChartJsView from './components/charts/Chartjs.vue'
import FlotView from './components/charts/Flot.vue'
import InlineView from './components/charts/Inline.vue'
import MorrisView from './components/charts/Morris.vue'

// -- MailBox --
import ComposeView from './components/mailbox/Compose.vue'
import InboxView from './components/mailbox/Inbox.vue'
import ReadMailView from './components/mailbox/ReadMail.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  }, {
    path: '/',
    component: MainView,
    auth: true,
    children: [
      {
        path: '',
        component: Dashboard1View,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      },
      // ---------- Dashboard ------------------
      {
        path: '/dashboard1',
        component: Dashboard1View,
        name: 'Dashboard 1'
      }, {
        path: '/dashboard2',
        component: Dashboard2View,
        name: 'Dashboard 2'
      }, {
        path: '/dashboard3',
        component: Dashboard3View,
        name: 'Dashboard 3'
      },
      // ---------- UI Elements ------------------
      {
        path: '/general',
        component: GeneralView,
        name: 'General'
      }, {
        path: '/buttons',
        component: ButtonsView,
        name: 'Buttons'
      }, {
        path: '/icons',
        component: IconsView,
        name: 'Icons'
      }, {
        path: '/modals',
        component: ModalsView,
        name: 'Modals'
      }, {
        path: '/sliders',
        component: SlidersView,
        name: 'Sliders'
      }, {
        path: '/timeline',
        component: TimelineView,
        name: 'Timeline'
      },
      // ---------- Tables  ------------------
      {
        path: '/tables',
        component: TablesView,
        name: 'Tables'
      }, 
      // {
      //   path: '/simple',
      //   component: SimpleView,
      //   name: 'Simple'
      // }, {
      //   path: '/data',
      //   component: DataView,
      //   name: 'Data'
      // }, 
      {
        path: '/datatables',
        component: DataTablesView,
        name: 'DataTables'
      },
      // ---------- Forms  ------------------
      {
        path: '/general-form',
        component: GeneralFormView,
        name: 'GeneralForm'
      }, {
        path: '/editor',
        component: EditorView,
        name: 'Editor'
      }, {
        path: '/advanced-form',
        component: AdvancedFormView,
        name: 'AdvancedForm'
      },
      // ------ charts -------
      {
        path: '/chartjs',
        component: ChartJsView,
        name: 'Chartjs'
      }, {
        path: '/flot',
        component: FlotView,
        name: 'Flot'
      }, {
        path: '/inline',
        component: InlineView,
        name: 'Inline'
      }, {
        path: '/morris',
        component: MorrisView,
        name: 'Morris'
      },
      // ------ mailbox -------
      {
        path: '/inbox',
        component: InboxView,
        name: 'Inbox'
      }, {
        path: '/compose',
        component: ComposeView,
        name: 'Compose'
      }, {
        path: '/readmail',
        component: ReadMailView,
        name: 'ReadMail'
      },
      // ---- pages ----
      {
        path: '/invoice',
        component: InvoiceView,
        name: 'Invoice'
      }, {
        path: '/404',
        component: NotFoundView,
        name: '404'
      }, {
        path: '/500',
        component: ServerErrorView,
        name: '500'
      }, {
        path: '/blank',
        component: BlankView,
        name: 'BlankPage'
      }, {
        path: '/invoicePrint',
        component: InvoicePrintView,
        name: 'InvoicePrint'
      }, {
        path: '/lockscreen',
        component: LockScreenView,
        name: 'LockScreen'
      }, {
        path: '/profile',
        component: ProfileView,
        name: 'Profile'
      }, {
        path: '/register',
        component: RegisterView,
        name: 'Register'
      },
      // ---- widget ---
      {
        path: '/widgets',
        component: WidgetsView,
        name: 'Widgets'
      }, {
        path: '/calendar',
        component: CalendarView,
        name: 'Calendar'
      }
    ]
  }, {
    // not found handler
    path: '/static/*',
    component: NotFoundView
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
