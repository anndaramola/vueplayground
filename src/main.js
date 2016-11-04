import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
import Services from './components/Services.vue'
import Packages from './components/Packages.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

// Pointing routes to the components they should user
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/packages', component: Packages },
    { path: '/services', component: Services },
    {
      path: '/time-entries',
      component: TimeEntries,
      children: [{
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'log-time',
        component: LogTime
      }]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

$(function () {
  var edge = $('#e1 .expandable').offset().left

  $('.expander button').on('click', function (e) {
    grow($(this))
  })

  $('.expander .closer').on('click', function (e) {
    var id = $(this).attr('data-expander')
    var eId = id
    var expandable = $('#' + eId + ' .expandable')
    expandable
      .animate(
      {
        opacity: 0,
        width: '100%',
        height: 0
      },
      200,
      function () {
        expandable.css('z-index', '-1').css({
          width: '100%',
          left: '15px',
          top: 0
        })
      }
      )
  })

  function grow (el) {
    var id = el.attr('data-expander')
    var eId = id
    var expandable = $('#' + eId + ' .expandable')
    var length = $('.expandable').parent().parent().parent().length
    console.log(expandable)
    var offset = expandable.offset().left

    var data =
      {
        left: edge - offset + 15,
        width: (expandable.width() * 2 * length) - 30,
        height: $('.expander').css('height')
      }

    expandable.css('z-index', '9999')
      .animate(
      {
        opacity: 1,
        width: '+=' + data.width + 'px',
        height: '+=' + data.height,
        left: data.left
      },
      200
    )
  }
})
