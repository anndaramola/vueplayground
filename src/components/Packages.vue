<template>
  <div class="container-fluid">
    <div class="page-header">
      <h1>Packages and Services</h1>
      <h2>Choose from a variety of services.</h2>
      <nav class="packages-nav hidden-sm hidden-md hidden-lg">
      <ul class="nav navbar-nav">
        <li>WordPress</li>
        <li>Security</li>
        <li>Personal Branding</li>
        <li>Other</li>
      </ul>
        
      </nav>
    </div>
    <div class="row">
      <p v-if="!tscPackages.length"><strong>No packages available</strong></p>
      <div class="col-xs-12 col-sm-4 expand" v-for="pkg in tscPackages">
        <div class="expander" v-bind:id="pkg.id">
          <div class="teaser">
            <h2>{{pkg.name}}</h2>
            {{pkg.description}}
            <p class="hidden-xs"><button v-bind:data-expander="pkg.id" class="btn btn-md btn-cinnamon">Pick Me!</button></p>
            <ul class="services">
              <li class="service" v-for="service in pkg.services">
                <h3>{{service.name}}</h3>
              </li>
            </ul>
          </div>
          <div class="expandable">
            <div class="content">
              <div class="row">
                <div class="col-xs-12 expanded" v-bind:class="pkg.serviceContainer" v-for="service in pkg.services">
                  <div class="content">
                    <h3>{{service.name}}</h3>
                    {{service.description}}
                  </div>
                </div>
              </div>
              <div v-bind:data-expander="pkg.id" class="closer"> close x </div>
            </div>
          </div>
        </div><!--/expander-->
      </div><!--/col-xs-4-->
    </div>
  </div> 
</template>

<script>
  export default {
    data () {
      return {
        // Start out with the existing entry
        // by placing it in the array
        tscPackages: [
          {
            id: 'e1',
            name: 'WordPress',
            description: 'This is a wordpress package',
            serviceContainer: 'col-sm-3',
            services: [
              {
                name: 'Quick Fix',
                description: '<p>This is the description.</p>'
              },
              {
                name: 'Emergency Repair',
                description: 'Jump start your website'
              },
              {
                name: 'Maintenance',
                description: 'Jump start your website'
              },
              {
                name: 'Jumpstart',
                description: 'Jump start your website'
              }
            ]
          },
          {
            id: 'e2',
            name: 'Marketing',
            description: 'This is the marketing',
            serviceContainer: 'col-sm-3',
            services: [
              {
                name: 'Email Design & Automation',
                description: 'This is the description.'
              },
              {
                name: 'Social Media Campaign Creation',
                description: 'Jump start your website'
              },
              {
                name: 'Content Management',
                description: 'Jump start your website'
              },
              {
                name: 'Custom Solution',
                description: 'Jump start your website'
              }
            ]
          },
          {
            id: 'e3',
            name: 'Security',
            description: 'This is a security package',
            serviceContainer: 'col-sm-3',
            services: [
              {
                name: 'Quick Fix',
                description: 'This is the description.'
              },
              {
                name: 'Emergency Repair',
                description: 'Jump start your website'
              },
              {
                name: 'Maintenance',
                description: 'Jump start your website'
              },
              {
                name: 'Custom Consultation',
                description: 'Jump start your website'
              }
            ]
          },
          {
            id: 'e4',
            name: 'Personal Branding',
            description: 'This is a personal branding package',
            serviceContainer: 'col-sm-3',
            services: [
              {
                name: 'Branded Email',
                description: 'This is the description.'
              },
              {
                name: 'Personal Website',
                description: 'Jump start your website'
              },
              {
                name: 'Identity & Brand Design',
                description: 'Jump start your website'
              },
              {
                name: 'Full Personal Brand Solution',
                description: 'Jump start your website'
              }
            ]
          },
          {
            id: 'e5',
            name: 'Concierge',
            description: 'This is a concierge package',
            serviceContainer: 'col-sm-3',
            services: [
              {
                name: 'Quick Fix',
                description: 'This is the description.'
              },
              {
                name: 'Emergency',
                description: 'Jump start your website'
              },
              {
                name: 'Maintenance',
                description: 'Jump start your website'
              },
              {
                name: 'Custom Solution',
                description: 'Jump start your website'
              }
            ]
          },
          {
            id: 'e6',
            name: 'Other',
            description: 'Need something else',
            serviceContainer: 'col-sm-8 col-sm-offset-2',
            services: [
              {
                name: 'Something else',
                description: 'This is the description.'
              }
            ]
          }
        ]
      }
    },
    computed: {
      // a computed getter
      serviceColumns: function () {
        // `this` points to the vm instance
        return 4
      }
    },
    methods: {
      // Get the index of the clicked time entry and splice it out
      deleteTimeEntry (tscPackage) {
        let index = this.tscPackages.indexOf(tscPackage)
        if (window.confirm('Are you sure you want to delete this time entry?')) {
          this.tscPackages.splice(index, 1)
          this.$dispatch('deleteTime', tscPackage)
        }
      }
    },
    events: {
      timeUpdate (tscPackage) {
        this.tscPackages.push(tscPackage)
        return true
      }
    }
  }
</script>

<style>
  .page-header {
    width: 100%;
    text-align: center;
  }
    .page-header h1, .page-header h2 {
      padding: 0;
      margin: 0;
    }
    .page-header h1
    {
      font-size: 28px;
      font-weight: normal;
    }
    .page-header h2
    {
      font-size: 26px;
      font-weight: normal;
    }
  .expand {
    margin-bottom: 15px;
  }
  @media(min-width:767px) {
    .expand { margin-bottom: 55px; }
  }

  .packages-nav {
    width: 100%;
  }
    .packages-nav li {
      display: inline-block;
      margin: 3px;
      padding: 1px;
    }

  .expander {
    background: #ffffff;
    min-height: 450px;
    color: #34CEBA;
    padding: 30px; }
    @media(min-width:767px) {
      .expander { height: 450px; }
    }
    .expander .expandable {
      background: #34CEBA;
      color: #ffffff;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 15px;
      width: 100%;
      height: 0;
      opacity: 0;
      -webkit-transition: all .5s ease-in-out, all 0s ease-in-out;
      -moz-transition: all .5s ease-in-out, all 0s ease-in-out;
      transition: all .5s ease-in-out, all 0s ease-in-out; }
      .services {
        list-style: none;
        padding: 0;
        margin: 0;
      }
        .services .service {
          margin: 20px 0;
          padding-top: 30px;
          background: #3bccce;
          border-bottom: 3px solid #ce4848;
          color: #ffffff;
        }
      .expander .expandable .content {
        padding: 40px;
        position: relative; }
        .expander .expandable .content .closer {
          position: absolute;
          right: 0;
          top: 0;
          background: #ffffff;
          color: #34CEBA;
          padding: 5px; }
          .expander .expandable .content .closer:hover {
            cursor: pointer;
            background: #efefef; }
            .expander .expandable .expanded {
              color: #0F3435;
/*              padding-left: 0;
              padding-right: 0;*/
            }
              .expander .expandable .expanded .content {
                background: #ffffff;
                width: 90%;
                height: 370px;
                overflow: hidden;
                margin: 0 auto;
                padding: 5%;
            }

  #e {
    display: none;
    background: #34CEBA;
    font-weight: bold;
    padding: 15px;
    color: #ffffff;
    position: absolute; }

  .btn-cinnamon {
    background: #34CEBA;
    color: #ffffff;
    border-bottom: 3px solid #ce4848; }

  .btn-cinnamon {
    background: #34CEBA;
    color: #ffffff;
    border-bottom: 3px solid #2DB4A3; }
</style>