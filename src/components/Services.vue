<template>
  <div class="container-fluid">
    <div class="page-header">
      <h1>Services</h1>
      <h2>What do you need help with?</h2>
    </div>
    <div class="row services">
      <p v-if="!tscServices.length"><strong>No services available</strong></p>
      <div class="col-xs-6 col-sm-4 service" v-for="srv in tscServices">
        <div class="content" v-bind:id="srv.name">
          <p><img src="/static/logo.png"></p>
          <h2>{{srv.name}}</h2>
          {{srv.description}}
          <p class="hidden-xs"><button v-bind:data-expander="srv.name" class="btn btn-md btn-cinnamon">Pick Me!</button></p>
        </div><!--/content-->
      </div><!--/col-xs-2-->
    </div>
  </div> 
</template>

<script>
  export default {
    data () {
      return {
        // Start out with the existing entry
        // by placing it in the array
        tscServices: [
          {
            name: 'WordPress',
            description: 'This is my description',
            icon: 'logo.png'
          },
          {
            name: 'Marketing',
            description: 'This is my description',
            icon: 'logo.png'
          },
          {
            name: 'Security',
            description: 'This is my description',
            icon: 'logo.png'
          },
          {
            name: 'Personal Branding',
            description: 'This is my description',
            icon: 'logo.png'
          },
          {
            name: 'Concierge',
            description: 'This is my description',
            icon: 'logo.png'
          },
          {
            name: 'Other',
            description: 'This is my description',
            icon: 'logo.png'
          }
        ]
      }
    },
    computed: {
    },
    methods: {
    },
    events: {
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