import { useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, toDisplayString, mergeProps, ref, Fragment, renderList, createApp } from "vue";
import axios from "axios";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain } from "vue/server-renderer";
import { createRouter, createWebHashHistory } from "vue-router";
import StarRating from "vue-star-rating";
import Swal from "sweetalert2";
import $ from "jquery";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Datepicker from "@vuepic/vue-datepicker";
const _imports_0$4 = "/build/assets/atypikHouseLogo.bdc218d6.png";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$q = {
  data() {
    return {
      loggedIn: false,
      user: {
        id: "",
        token: ""
      },
      hideNavbar: true
    };
  },
  mounted() {
    this.user.firstname = localStorage.getItem("firstname");
    this.user.lastname = localStorage.getItem("lastname");
    this.user.id = localStorage.getItem("userId");
    this.intervalid1 = setInterval(
      function() {
        this.user.token = localStorage.getItem("token");
        this.user.role = localStorage.getItem("userRole");
        this.user.email = localStorage.getItem("useremail");
        if (localStorage.getItem("token") != "") {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
        if (localStorage.getItem("firstLogin") == "true") {
          this.hideNavbar = true;
        } else {
          this.hideNavbar = false;
        }
      }.bind(this),
      200
    );
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    logOut() {
      localStorage.setItem("token", "");
      localStorage.setItem("useremail", "");
      localStorage.setItem("id", "");
      localStorage.setItem("loggedIn", "");
      localStorage.setItem("firstname", "");
      localStorage.setItem("lastname", "");
      localStorage.setItem("userRole", "");
      localStorage.setItem("userId", "");
      this.$router.push({ path: "se-connecter" });
      window.scrollTo(0, 0);
    },
    windowStepReset() {
      localStorage.setItem("windowStep", 1);
      window.scrollTo(0, 0);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle($data.loggedIn == true ? null : { display: "none" })}" class=""><li class="text-danger text-right p-0" style="${ssrRenderStyle({ "list-style-type": "none", "text-align": "end", "margin-right": "20px" })}"><span style="${ssrRenderStyle({ "font-size": "90%" })}">${ssrInterpolate($data.user.email)}</span></li></div><nav class="navbar navbar-expand-lg p-0 navbar-dark bg-white"><div class="container m-0 p-3 pt-0" style="${ssrRenderStyle({ "flex-direction": "row" })}"><a class="navbar-brand" href="#">`);
  _push(ssrRenderComponent(_component_router_link, {
    style: { "text-decoration": "none" },
    to: "/",
    class: "text-secondary",
    onClick: $options.scrollToTop
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$4)} alt="Logo" style="${ssrRenderStyle({ "margin-top": "10px" })}" class="img-fluid"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$4,
            alt: "Logo",
            style: { "margin-top": "10px" },
            class: "img-fluid"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a><button class="navbar-toggler navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon text-dark"><img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"></span></button><div class="collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link text-secondary">`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: $options.scrollToTop,
    style: { "text-decoration": "none" },
    to: "/",
    class: "text-secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Accueil `);
      } else {
        return [
          createTextVNode(" Accueil ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></li>`);
  if (!$data.hideNavbar || !$data.loggedIn) {
    _push(`<li class="nav-item"><a class="nav-link text-secondary">`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: $options.scrollToTop,
      style: { "text-decoration": "none" },
      to: "/annoncesListPage",
      class: "text-secondary"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` H\xE9bergements `);
        } else {
          return [
            createTextVNode(" H\xE9bergements ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.hideNavbar || !$data.loggedIn) {
    _push(`<li class="nav-item"><a class="nav-link text-secondary">`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: $options.scrollToTop,
      style: { "text-decoration": "none" },
      to: "/favoritesAnnonces",
      class: "text-secondary"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Favoris `);
        } else {
          return [
            createTextVNode(" Favoris ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<li class="nav-item"><a class="nav-link text-secondary">`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: $options.scrollToTop,
    style: { "text-decoration": "none" },
    to: "/qui-sommes-nous",
    class: "text-secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Qui sommes-nous ? `);
      } else {
        return [
          createTextVNode("Qui sommes-nous ? ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></li>`);
  if (!$data.hideNavbar || !$data.loggedIn) {
    _push(`<li class="nav-item"><a class="nav-link text-secondary">`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: $options.scrollToTop,
      style: { "text-decoration": "none" },
      to: "/contact",
      class: "text-secondary"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Contact`);
        } else {
          return [
            createTextVNode("Contact")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<li style="${ssrRenderStyle($data.user.role == "owner" && $data.loggedIn == true && !$data.hideNavbar ? null : { display: "none" })}" class="nav-item"><a class="nav-link text-secondary">`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: $options.scrollToTop,
    style: { "text-decoration": "none", "display": "flex", "justify-content": "", "align-items": "end" },
    to: "/ajouter-annonce"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><img src="https://img.icons8.com/ios-glyphs/25/1A1A1A/bungalow.png" style="${ssrRenderStyle({ "margin": "0px 5px" })}"${_scopeId}></div><div${_scopeId}>Proposer un logement</div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("img", {
              src: "https://img.icons8.com/ios-glyphs/25/1A1A1A/bungalow.png",
              style: { "margin": "0px 5px" }
            })
          ]),
          createVNode("div", null, "Proposer un logement")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></li></ul><div class="d-flex"><div class="dropdown" style="${ssrRenderStyle(!$data.loggedIn ? null : { display: "none" })}"><button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"><img src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"></button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton"><li><a class="dropdown-item">`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: $options.scrollToTop,
    style: { "text-decoration": "none" },
    to: "/se-connecter",
    class: "text-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Se connecter`);
      } else {
        return [
          createTextVNode("Se connecter")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></li><li><a class="dropdown-item">`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: $options.scrollToTop,
    style: { "text-decoration": "none" },
    to: "/inscription",
    class: "text-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Inscription`);
      } else {
        return [
          createTextVNode("Inscription")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></li><li><a class="dropdown-item">`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: $options.scrollToTop,
    style: { "text-decoration": "none" },
    to: "/devenir-hote",
    class: "text-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Devenir h\xF4te`);
      } else {
        return [
          createTextVNode("Devenir h\xF4te")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></li></ul></div><div class="dropdown" style="${ssrRenderStyle($data.loggedIn ? null : { display: "none" })}"><button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"><img src="https://img.icons8.com/material-outlined/24/000000/dashboard-layout.png"></button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">`);
  if ($data.user.role == "client") {
    _push(`<li style="${ssrRenderStyle(!$data.hideNavbar ? null : { display: "none" })}"><a class="dropdown-item">`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: $options.scrollToTop,
      style: { "text-decoration": "none" },
      to: "/dashboardClient",
      class: "text-dark"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Dashboard`);
        } else {
          return [
            createTextVNode("Dashboard")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.user.role == "owner") {
    _push(`<li style="${ssrRenderStyle(!$data.hideNavbar ? null : { display: "none" })}"><a class="dropdown-item">`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: $options.scrollToTop,
      style: { "text-decoration": "none" },
      to: "/dashboardOwner",
      class: "text-dark"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Dashboard`);
        } else {
          return [
            createTextVNode("Dashboard")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.user.role == "admin") {
    _push(`<li style="${ssrRenderStyle(!$data.hideNavbar ? null : { display: "none" })}"><a class="dropdown-item">`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: ($event) => $options.scrollToTop && $options.windowStepReset,
      style: { "text-decoration": "none" },
      to: "/dashboardAdmin",
      class: "text-dark"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Dashboard`);
        } else {
          return [
            createTextVNode("Dashboard")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.user.role == "moderateur") {
    _push(`<li><a class="dropdown-item">`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: ($event) => $options.scrollToTop && $options.windowStepReset,
      style: { "text-decoration": "none" },
      to: "/dashboardModerateur",
      class: "text-dark"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Dashboard`);
        } else {
          return [
            createTextVNode("Dashboard")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<li><a class="dropdown-item">`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: $options.scrollToTop,
    style: { "text-decoration": "none" },
    to: "/profileAdmin",
    class: "text-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Profil`);
      } else {
        return [
          createTextVNode("Profil")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></li><li><a class="dropdown-item text-danger">Se d\xE9connecter</a></li></ul></div></div></div></div></nav></div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/template/navbar.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const pageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q]]);
const _sfc_main$p = {
  data() {
    return {
      loggedIn: false,
      hideFooter: true,
      user: {
        id: "",
        token: ""
      }
    };
  },
  mounted() {
    this.getUserProfile();
    this.intervalid1 = setInterval(
      function() {
        this.user.token = localStorage.getItem("token");
        this.user.role = localStorage.getItem("userRole");
        if (localStorage.getItem("token") != "") {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
        if (localStorage.getItem("firstLogin") == "true") {
          this.hideFooter = true;
        } else {
          this.hideFooter = false;
        }
      }.bind(this),
      200
    );
  },
  methods: {
    getUserProfile() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      this.user.token = localStorage.getItem("token");
      this.user.id = localStorage.getItem("userId");
      axios.post("api/getUserInfo", this.user, config).then((response2) => {
        console.log("leeeength : ", response2.data.userInfo.length);
        if (response2.data.userInfo.length > 0) {
          this.hideFooter = false;
        } else {
          this.hideFooter = true;
        }
      }).catch((err) => {
        console.log("err : ", err);
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (!$data.hideFooter) {
    _push(`<div class="footerFooterCompoent"><div class="container"><div class="row"><div class="col-lg-4 col-sm-4 col-xs-12"><div class="single_footer"><h4>Services</h4><ul><li><a>`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: $options.scrollToTop,
      style: { "text-decoration": "none" },
      to: "/"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Accueil `);
        } else {
          return [
            createTextVNode(" Accueil ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li><li><a>`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: $options.scrollToTop,
      style: { "text-decoration": "none" },
      to: "/annoncesListPage"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Nos h\xE9bergements`);
        } else {
          return [
            createTextVNode("Nos h\xE9bergements")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li><li><a>`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: $options.scrollToTop,
      style: { "text-decoration": "none" },
      to: "/qui-sommes-nous"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Qui sommes-nous ? `);
        } else {
          return [
            createTextVNode("Qui sommes-nous ? ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li><li><a>`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: $options.scrollToTop,
      style: { "text-decoration": "none" },
      to: "/contact"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Contact`);
        } else {
          return [
            createTextVNode("Contact")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></li></ul></div></div><div class="col-md-4 col-sm-4 col-xs-12"><div class="single_footer single_footer_address"><h4>NOS ENGAGEMENTS</h4><ul><li><i class="fas fa-credit-card" style="${ssrRenderStyle({ "font-size": "20px", "color": "#white", "padding": "10px" })}"></i> Paiement s\xE9curis\xE9</li><li><i class="fas fa-mouse" style="${ssrRenderStyle({ "font-size": "20px", "color": "#white", "padding": "10px" })}"></i>Facilit\xE9 de r\xE9servation</li><li><i class="far fa-comment-dots" style="${ssrRenderStyle({ "font-size": "20px", "color": "#white", "padding": "10px" })}"></i>Contact 7j/7</li><li><i class="far fa-handshake" style="${ssrRenderStyle({ "font-size": "20px", "color": "#white", "padding": "10px" })}"></i>Assurance vol et casse</li></ul></div></div><div class="col-md-4 col-sm-4 col-xs-12"><div class="single_footer single_footer_address"><h4>Abonnez-vous \xE0 notre newsletter</h4><div class="signup_form"><form action="#" class="subscribe"><input type="text" class="subscribe__input" placeholder="Adresse email"><button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button></form></div></div><div class="social_profile"><ul><li><a href="#"><i class="fab fa-facebook-f"></i></a></li><li><a href="#"><i class="fab fa-twitter"></i></a></li><li><a href="#"><i class="fab fa-instagram"></i></a></li></ul></div></div></div><div class="row"><div class="col-lg-12 col-sm-12 col-xs-12" style="${ssrRenderStyle({ "text-align": "center", "margin-top": "50px", "border-top": "2px solid #2591cc", "padding-top": "20px" })}"><p class="copyright">Copyright \xA9 2022 <a href="#">AtypikHouse</a></p></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/template/footer.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const footerView = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$o = {
  components: {
    pageHeader,
    footerView
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_page_header = resolveComponent("page-header");
  const _component_router_view = resolveComponent("router-view");
  const _component_footer_view = resolveComponent("footer-view");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="template m-0 p-0 d-flex flex-column min-vh-100"><div class="">`);
  _push(ssrRenderComponent(_component_page_header, null, null, _parent));
  _push(`</div><div class="flex-fill">`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</div><div class="">`);
  _push(ssrRenderComponent(_component_footer_view, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/App.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o]]);
const _imports_0$3 = "/build/assets/cabane.a2d0fc6b.webp";
const _imports_1$1 = "/build/assets/yourte.07b6aaef.jpg";
const _imports_2 = "/build/assets/bulle.6d56fada.jpg";
const accueil_vue_vue_type_style_index_0_lang = "";
const accueil_vue_vue_type_style_index_1_lang = "";
const _sfc_main$n = {
  components: {
    StarRating
  },
  data() {
    return {
      loggedIn: false,
      user: {
        email: "",
        lastname: "",
        firstname: "",
        token: "",
        id: ""
      },
      annonces: [],
      typesLogement: []
    };
  },
  mounted() {
    this.getTypeLogement();
    this.getAnnonces();
    this.intervalid1 = setInterval(
      function() {
        this.user.token = localStorage.getItem("token");
        this.user.role = localStorage.getItem("userRole");
        this.user.id = localStorage.getItem("userId");
        if (localStorage.getItem("token") != "") {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }.bind(this),
      200
    );
    this.getUserProfile();
  },
  methods: {
    getUserProfile() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      this.user.id = localStorage.getItem("userId");
      axios.post("api/getUserInfo", this.user, config).then((response2) => {
        console.log("ggg : ", response2.data.userInfo.length == 0 && this.loggedIn);
        if (response2.data.userInfo.length == 0 && localStorage.getItem("token") != "") {
          this.$router.push({ path: "/profileAdmin" });
        }
      }).catch((err) => {
        console.log("err : ", err);
      });
    },
    getTypeLogement() {
      this.typesLogement = [];
      axios.get("/api/getTypeLogement").then((response2) => {
        console.log("");
        response2.data.typesLogement.forEach((element) => {
          this.typesLogement.push(element);
        });
      }).catch((err) => {
      });
    },
    getAnnonces() {
      axios.get("api/getAnnonces").then((response2) => {
        response2.data.onlyThreeAnnonce.forEach((element) => {
          this.typesLogement.forEach((elementaux) => {
            console.log("elementaux: ", element);
            if (elementaux.id == element.type_logement_id) {
              element.typeLogement = elementaux.name;
            }
          });
          this.annonces.push(element);
        });
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_star_rating = resolveComponent("star-rating");
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="body"><main id="mainHomePage"><h1 class="visually-hidden">AtypikHouse</h1><div class="group"><h2> AtypikHouse <br> Retrouver tous nos biens en <span>Europe</span></h2></div><div></div><div class="main-search-input"><div class="main-search-input-item"><input type="text" placeholder="Localisation" value=""></div><div class="main-search-input-item catSelect"><select data-placeholder="All Categories" class="chosen-select"><option>Categorie</option><option>Cabanes</option><option>Bulles</option><option>Maison hobbit</option><option>Chalet</option><option>Yourtes</option><option>Autres</option></select></div><div class="main-search-input-item"><input type="text" placeholder="Check in" onfocus="(this.type=&#39;date&#39;)" onblur="(this.type=&#39;date&#39;)"></div><div class="main-search-input-item location lastOfTypeDate"><input type="text" placeholder="Check out" onfocus="(this.type=&#39;date&#39;)" onblur="(this.type=&#39;date&#39;)"></div><button class="button">Chercher</button></div></main></div><div class="headerCarousel"><div class="titleCarousel"><h1>D\xE9couvrez nos h\xE9bergements insolites</h1><h5 class="SmallTitleCarousel"> AtypikHouse ne propose qu\u2019une s\xE9lection de lieux premium test\xE9s et approuv\xE9s par nos soins, afin de vous \xE9viter au maximum les mauvaises surprises lors de votre arriv\xE9e </h5></div><div class="containerCards"><!--[-->`);
  ssrRenderList($data.annonces, (annonce, key) => {
    _push(`<div class="box">`);
    _push(ssrRenderComponent(_component_router_link, {
      target: "_blank",
      style: { "text-decoration": "none" },
      to: "/annonce/?id=" + annonce.id,
      class: "text-dark"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="top"${_scopeId}>`);
          if (annonce.images.length > 0) {
            _push2(`<img${ssrRenderAttr(
              "src",
              "uploads/" + annonce.images[0].path + "/" + annonce.images[0].image
            )}${_scopeId}>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="bottom"${_scopeId}><h3${_scopeId}>${ssrInterpolate(annonce.title)}</h3><div${_scopeId}><div class="location"${_scopeId}><i style="${ssrRenderStyle({ "margin-right": "7px" })}" class="fas fa-map-marker-alt"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.city)}</span></div></div><div class="advants"${_scopeId}><div${_scopeId}><span${_scopeId}>Nbr de couchages </span><div${_scopeId}><i class="fas fa-bed"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.numberOfBeds)}</span></div></div><div${_scopeId}><span${_scopeId}>Accueillement </span><div${_scopeId}><i class="fas fa-users"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.capacity)}</span></div></div><div${_scopeId}><span${_scopeId}>Surface</span><div${_scopeId}><i class="fas fa-vector-square"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.surface)}<span${_scopeId}>Cm\xB2</span></span></div></div></div><div class="price"${_scopeId}><span${_scopeId}> \u20AC${ssrInterpolate(parseFloat(annonce.price).toFixed(2))} <small style="${ssrRenderStyle({ "font-size": "16px" })}"${_scopeId}>/nuit</small></span></div><div style="${ssrRenderStyle({ "position": "absolute", "top": "-40px", "left": "15px" })}" class="price"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_star_rating, {
            padding: 2,
            animate: true,
            "star-size": 25,
            "show-rating": false,
            "read-only": true,
            rating: 4
          }, null, _parent2, _scopeId));
          _push2(`</div><div class="typeLogement"${_scopeId}><span${_scopeId}>${ssrInterpolate(annonce.typeLogement)}</span></div></div>`);
        } else {
          return [
            createVNode("div", { class: "top" }, [
              annonce.images.length > 0 ? (openBlock(), createBlock("img", {
                key: 0,
                src: "uploads/" + annonce.images[0].path + "/" + annonce.images[0].image
              }, null, 8, ["src"])) : createCommentVNode("", true)
            ]),
            createVNode("div", { class: "bottom" }, [
              createVNode("h3", null, toDisplayString(annonce.title), 1),
              createVNode("div", null, [
                createVNode("div", { class: "location" }, [
                  createVNode("i", {
                    style: { "margin-right": "7px" },
                    class: "fas fa-map-marker-alt"
                  }),
                  createVNode("span", null, toDisplayString(annonce.city), 1)
                ])
              ]),
              createVNode("div", { class: "advants" }, [
                createVNode("div", null, [
                  createVNode("span", null, "Nbr de couchages "),
                  createVNode("div", null, [
                    createVNode("i", { class: "fas fa-bed" }),
                    createVNode("span", null, toDisplayString(annonce.numberOfBeds), 1)
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("span", null, "Accueillement "),
                  createVNode("div", null, [
                    createVNode("i", { class: "fas fa-users" }),
                    createVNode("span", null, toDisplayString(annonce.capacity), 1)
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("span", null, "Surface"),
                  createVNode("div", null, [
                    createVNode("i", { class: "fas fa-vector-square" }),
                    createVNode("span", null, [
                      createTextVNode(toDisplayString(annonce.surface), 1),
                      createVNode("span", null, "Cm\xB2")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "price" }, [
                createVNode("span", null, [
                  createTextVNode(" \u20AC" + toDisplayString(parseFloat(annonce.price).toFixed(2)) + " ", 1),
                  createVNode("small", { style: { "font-size": "16px" } }, "/nuit")
                ])
              ]),
              createVNode("div", {
                style: { "position": "absolute", "top": "-40px", "left": "15px" },
                class: "price"
              }, [
                createVNode(_component_star_rating, {
                  padding: 2,
                  animate: true,
                  "star-size": 25,
                  "show-rating": false,
                  "read-only": true,
                  rating: 4
                })
              ]),
              createVNode("div", { class: "typeLogement" }, [
                createVNode("span", null, toDisplayString(annonce.typeLogement), 1)
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div><section class="section-three" style="${ssrRenderStyle({ "padding": "0", "padding-bottom": "30px" })}"><h3> Vivez l&#39;exp\xE9rience d&#39;un s\xE9jour atypique.<br>d\xE9couvrez nos h\xE9bergements insolites </h3></section><section class="section-four"><div class="flex-group"><div><img class="homePagePartImg"${ssrRenderAttr("src", _imports_0$3)}></div><div class="content-container"><div><h3>Cabane</h3></div><p> La Cabane flottante vous accueille et vous offre d\xE9tente et tranquillit\xE9 au bord de l&#39;eau. Sur pilotis, vous profiterez de sa terrasse et r\xEAverez face \xE0 ce panorama unique qui d\xE9voile la beaut\xE9 de la nature environnante se refl\xE9tant dans les eaux calmes d&#39;un \xE9tang priv\xE9. Vous emprunterez un petit pont s\xE9curis\xE9 pour acc\xE9der \xE0 votre nid flottant avec mezzanine et d\xE9couvrirez un int\xE9rieur pens\xE9, imagin\xE9 et cr\xE9\xE9 pour votre confort. </p></div></div></section><section class="section-five"><div class="flex-group section-five-flex-group"><div><img class="homePagePartImg"${ssrRenderAttr("src", _imports_1$1)}></div><div class="content-container"><div><h3>Yourte</h3></div><p> La yourte - appel\xE9e Ger par les Mongols - est l&#39;habitation traditionnelle des familles nomades de Mongolie. Elle est compos\xE9e de plusieurs murs en treillage orange, tous de la m\xEAme dimension et incurv\xE9s. Ce cercle de bois est reli\xE9 aux murs par toute une s\xE9rie de lattes de bois, toujours de couleur orange, qui restent visible \xE0 l&#39;int\xE9rieur de la yourte, formant le plafond. Cette structure de bois, form\xE9e par l&#39;ensemble des murs en treillage, des poteaux centraux, du cercle et des lattes du plafond, est recouverte d&#39;une couche de feutre dont l&#39;\xE9paisseur varie en fonction de la saison. </p></div></div></section><section class="section-six"><div class="flex-group"><div><img class="homePagePartImg"${ssrRenderAttr("src", _imports_2)}></div><div class="content-container"><div><h3>Bulle</h3></div><p> La notion de bulle sp\xE9culative a souvent \xE9t\xE9 observ\xE9e au niveau du march\xE9 de titres. \xC0 premi\xE8re vue, l&#39;immobilier serait un actif moins sensible \xE0 une telle dynamique sp\xE9culative, du fait de plusieurs caract\xE9ristiques intrins\xE8ques. En effet, les co\xFBts de transaction sont tr\xE8s importants et repr\xE9sentent une part souvent non n\xE9gligeable du bien et pourrait limiter le caract\xE8re sp\xE9culatif. Ensuite, le march\xE9 immobilier est souvent caract\xE9ris\xE9 par rapport aux march\xE9s financiers comme peu liquide. </p></div></div></section></div><div><div class="testimonials"><div class="inner"><h1>Des exp\xE9riences pour tous les aventuriers</h1><div class="border"></div><div class="row rowComments"><div class="col colComments"><div class="testimonial"><img class=""${ssrRenderAttr("src", _imports_0$3)}><div class="name">Full name</div><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, </p></div></div><div class="col colComments"><div class="testimonial"><img class=""${ssrRenderAttr("src", _imports_0$3)}><div class="name">Full name</div><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, </p></div></div><div class="col colComments"><div class="testimonial"><img class=""${ssrRenderAttr("src", _imports_0$3)}><div class="name">Full name</div><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, </p></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/accueil.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n]]);
const aboutus_vue_vue_type_style_index_0_lang = "";
const _sfc_main$m = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="main-warapper"><div class="container-fluid bg-light"><div class="row"><div class="container text-secondary raleway"><div class="row p-4 m-4" data-aos="fade-down" data-aos-duration="1000"><div class="container"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia laudantium quo minima eum similique laboriosam facere, ipsum sapiente blanditiis animi maxime nostrum. Molestiae saepe obcaecati minima exercitationem! Quo, cum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illum eaque iusto aliquam? Distinctio officiis suscipit, velit temporibus provident dignissimos eum mollitia corrupti modi inventore deserunt nemo voluptatem natus repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veritatis voluptatem voluptates inventore excepturi numquam nam, iste corrupti nostrum facilis vitae nisi molestias est, velit, recusandae placeat quibusdam quisquam delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas ipsa mollitia similique non, eligendi, a autem facere dicta blanditiis modi magnam nam ratione numquam soluta error, sunt laudantium rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum aspernatur veniam nihil velit. Vero eos adipisci, earum voluptatem laboriosam officiis ex, perspiciatis sint reprehenderit exercitationem, rerum ab hic ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iusto, eos illum beatae sequi obcaecati atque voluptas quod modi sint libero explicabo. Aliquam quas assumenda odio at mollitia eveniet cum. </p></div></div></div></div></div><div class="container-fluid" data-aos="fade-up" data-aos-duration="600"><div class="row row-eq-height align-items-center"><div class="col-md-6 p-5 raleway"><h2 style="${ssrRenderStyle({ "color": "#1a8be7" })}" class="text-uppercase">Qui sommes-nous ?</h2></div><div class="col-md-6 text-secondary p-5 raleway"><p> Nous sommes 3 associ\xE9s passionn\xE9s par les voyages, l\u2019habitat alternatif et la vie en harmonie avec la nature. <br>Apr\xE8s avoir collabor\xE9 sur divers \xE9v\xE9nements ensemble, et effectu\xE9 de nombreux voyages, nous avons d\xE9cid\xE9 de nous associer pour cr\xE9er notre soci\xE9t\xE9 : Atypik House. Notre sp\xE9cialit\xE9 ? La location d\u2019h\xE9bergements alternatifs comme les cabanes dans les arbres, les bulles, les yourtes en France et en Europe. </p></div></div></div><div class="container-fluid bg-light"><div class="container"><div class="row"><h2 data-aos="zoom-in" data-aos-duration="600" class="mb-0 mt-5 w-100 text-center text-uppercase raleway" style="${ssrRenderStyle({ "color": "#1a8be7" })}"> Notre equipe </h2><small data-aos="zoom-in" data-aos-duration="600" class="w-100 ls-4 text-secondary raleway text-center text-uppercase">Equipe professionelle</small><section id="team" class="team-area"><div class="container"><div class="row team-items"><div class="col-md-4 single-item"><div class="itemTeam"><div class="thumb"><img class="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"><div class="overlay"><h4>Lorem Ipsum</h4><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p><div class="social"><ul><li class="facebook"><a href="#"><i class="fab fa-facebook"></i></a></li><li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li><li class="instagram"><a href="#"><i class="fab fa-instagram"></i></a></li></ul></div></div></div><div class="info"><span class="message"><a href="#"><i class="fas fa-envelope-open"></i></a></span><h4>Ammar Amine</h4><span>Co-fondateur &amp; Service clients et r\xE9servations</span></div></div></div><div class="col-md-4 single-item"><div class="itemTeam"><div class="thumb"><img class="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"><div class="overlay"><h4>Lorem Ipsum</h4><p>kING.</p><div class="social"><ul><li class="facebook"><a href="#"><i class="fab fa-facebook"></i></a></li><li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li><li class="instagram"><a href="#"><i class="fab fa-instagram"></i></a></li></ul></div></div></div><div class="info"><span class="message"><a href="#"><i class="fas fa-envelope-open"></i></a></span><h4>Ben khadra Mohammed</h4><span>Co-fondateur &amp; Service h\xF4tes et financements</span></div></div></div><div class="col-md-4 single-item"><div class="itemTeam"><div class="thumb"><img class="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"><div class="overlay"><h4>Lorem Ipsum</h4><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p><div class="social"><ul><li class="facebook"><a href="#"><i class="fab fa-facebook"></i></a></li><li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li><li class="instagram"><a href="#"><i class="fab fa-instagram"></i></a></li></ul></div></div></div><div class="info"><span class="message"><a href="#"><i class="fas fa-envelope-open"></i></a></span><h4>Houari mohammed amine</h4><span>Co-fondateur &amp; Responsable de projets \xE9v\xE9nementiels</span></div></div></div></div></div></section></div></div></div></div></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/aboutus/aboutus.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const aboutus = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m]]);
const contact_vue_vue_type_style_index_0_lang = "";
const _sfc_main$l = {
  data() {
    return {
      message: {
        nomComplet: "",
        email: "",
        subject: "",
        textMessage: ""
      }
    };
  },
  mounted() {
  },
  methods: {
    contactFormSend() {
      axios.post("api/contactFormMailTo", this.message).then((result) => {
        this.$router.push({ name: "contactFormMailSentName" });
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="contact_us"><div class="container p-0 containerDivContact"><div class="row rowDivContact" style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}"><div class="contactCardDiv"><div class="contact_inner"><div class="row"><div class="col-md-10"><div class="contact_form_inner"><div class="contact_field"><h3>Nous contacter</h3><p> Utilisez notre formulaire de contact pour toute demande d&#39;information ou contactez-nous directement en utilisant nos coordonn\xE9es. </p><form action=""><input required type="text" class="form-control form-group" placeholder="Nom complet"${ssrRenderAttr("value", $data.message.nomComplet)}><input required type="email" class="form-control form-group" placeholder="Email"${ssrRenderAttr("value", $data.message.email)}><input required type="text" class="form-control form-group" placeholder="Objet"${ssrRenderAttr("value", $data.message.subject)}><textarea required class="form-control form-group" placeholder="Message">${ssrInterpolate($data.message.textMessage)}</textarea><button type="botton" class="contact_form_submit"> Envoyer </button></form></div></div></div><div class="col-md-2"><div class="right_conatct_social_icon d-flex align-items-end"><div class="socil_item_inner d-flex"><li><a href="#"><i class="fab fa-facebook-square"></i></a></li><li><a href="#"><i class="fab fa-instagram"></i></a></li><li><a href="#"><i class="fab fa-twitter"></i></a></li></div></div></div></div><div class="contact_info_sec"><h4>Nos coordonn\xE9es</h4><div class="d-flex info_single align-items-center"><i class="fas fa-headset"></i><span>+33 01 56 34 67 87</span></div><div class="d-flex info_single align-items-center"><i class="fas fa-envelope-open-text"></i><span>atypikhouse-agence@gmail.com</span></div><div class="d-flex info_single align-items-center"><i class="fas fa-map-marked-alt"></i><span>8-9 Quai du Ch\xE2telier, 93450 Saint-Ouen, France</span></div></div></div></div></div></div></section><section class="map_sec"><div class="container"><div class="row"><div class="col-md-10 offset-md-1"><div class="map_inner"><h4>Trouvez-nous sur Google Maps</h4><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error. </p><div class="map_bind"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5770622945297!2d2.3291480156293907!3d48.92344970407776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ed9169b9a2d%3A0xbe32deae0c0ecd1b!2s8%2F9%20Quai%20du%20Ch%C3%A2telier%2C%2093450%20L&#39;%C3%8Ele-Saint-Denis%2C%20France!5e0!3m2!1sfr!2stn!4v1660652060103!5m2!1sfr!2stn" width="100%" height="450" frameborder="0" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div></div></div></div></div></section></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/contact/contact.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$k = {
  data() {
    return {
      user: {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "client"
      },
      errors: {
        lastname: "",
        firstname: "",
        password: "",
        email: ""
      },
      errorsArray: []
    };
  },
  mounted() {
    if (localStorage.getItem("loggedIn") == "loggedIn") {
      this.$router.push({ path: "/profile" });
    }
  },
  methods: {
    signup() {
      axios.post("/api/signupClient", this.user).then((response2) => {
        console.log("result : " + response2);
        this.$router.push("/newClientAccount");
        if (response2.data.status != "invalid") {
          this.errors.firstname = "";
          this.errors.email = "";
          this.errors.password = "";
          this.errors.lastname = "";
        } else if (response2.data.status == "true") {
          this.$router.push("/newClientAccount");
          this.user = {
            lastname: "",
            firstname: "",
            email: "",
            password: "",
            role: "client"
          }, console.log("valideeeeee");
          this.errors.firstname = "";
          this.errors.email = "";
          this.errors.password = "";
          this.errors.lastname = "";
        } else {
          this.user = {
            lastname: "",
            firstname: "",
            email: "",
            password: "",
            role: "client"
          }, console.log("valideeeeee");
          this.errors.firstname = "";
          this.errors.email = "";
          this.errors.password = "";
          this.errors.lastname = "";
        }
      }).catch((error) => {
        var _a, _b, _c, _d;
        Swal.fire({
          confirmButtonText: "D'accord",
          confirmButtonColor: "rgb(255, 0, 0)",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" },
          icon: "info",
          text: "Adresse e-mail d\xE9ja utilis\xE9e"
        });
        if (error.response) {
          if (error.response.data.errors) {
            if (error.response.data.errors.firstname) {
              this.errors.firstname = (_a = error.response.data.errors.firstname[0]) != null ? _a : "";
            } else {
              this.errors.firstname = "";
            }
            if (error.response.data.errors.email) {
              this.errors.email = (_b = error.response.data.errors.email[0]) != null ? _b : "";
            } else {
              this.errors.email = "";
            }
            if (error.response.data.errors.password) {
              this.errors.password = (_c = error.response.data.errors.password[0]) != null ? _c : "";
            } else {
              this.errors.password = "";
            }
            if (error.response.data.errors.lastname) {
              this.errors.lastname = (_d = error.response.data.errors.lastname[0]) != null ? _d : "";
            } else {
              this.errors.lastname = "";
            }
            this.errorsArray = [];
            if (this.errors.firstname) {
              this.errors.firstname = "Veuillez saisir un nom complet";
              this.errorsArray.push(this.errors.firstname);
            }
            if (this.errors.lastname) {
              this.errors.lastname = "Veuillez saisir un nom complet";
              this.errorsArray.push(this.errors.lastname);
            }
            if (this.errors.email) {
              this.errors.email = "Veuillez saisir une adresse e-mail valide";
              this.errorsArray.push(this.errors.email);
            }
            if (this.errors.password) {
              this.errors.password = "Veuillez bien saisir votre mot de passe";
              this.errorsArray.push(this.errors.password);
            }
            console.log("hahahahb: " + this.errorsArray);
            Swal.fire({
              icon: "error",
              confirmButtonText: "D'accord",
              confirmButtonColor: "rgb(255, 0, 0)",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },
              text: this.errorsArray[0]
            });
          }
        }
      });
    },
    hasError(item) {
      if (this.errors[item] != "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="formContent"><section class="" style="${ssrRenderStyle({ "height": "100%", "background-color": "#f3f3f3" })}"><div class="container" style="${ssrRenderStyle({ "height": "100%" })}"><div class="row d-flex justify-content-center align-items-center h-100"><div class="col-lg-12 col-xl-11"><div class="card text-black" style="${ssrRenderStyle({ "border-radius": "25px" })}"><div class="card-body p-md-5"><div class="row justify-content-center"><div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"><h3 class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"> Rejoignez-nous </h3><form class="mx-1 mx-md-4"><div class="d-flex flex-row align-items-center mb-4"><i class="fas fa-user fa-lg me-3 fa-fw"></i><div class="form-outline flex-fill mb-0"><input class="${ssrRenderClass([$options.hasError("lastname") ? "is-invalid" : "", "form-control"])}"${ssrRenderAttr("value", $data.user.lastname)} type="text" id="form3Example1c" required><label class="form-label" for="form3Example1c">Nom</label></div></div><div class="d-flex flex-row align-items-center mb-4"><i class="fas fa-user fa-lg me-3 fa-fw"></i><div class="form-outline flex-fill mb-0"><input class="${ssrRenderClass([$options.hasError("firstname") ? "is-invalid" : "", "form-control"])}"${ssrRenderAttr("value", $data.user.firstname)} type="text" id="form3Example1c" required><label class="form-label" for="form3Example1c">Pr\xE9nom</label></div></div><div class="d-flex flex-row align-items-center mb-4"><i class="fas fa-envelope fa-lg me-3 fa-fw"></i><div class="form-outline flex-fill mb-0"><input class="${ssrRenderClass([$options.hasError("email") ? "is-invalid" : "", "form-control"])}"${ssrRenderAttr("value", $data.user.email)} type="email" id="form3Example3c" required><label class="form-label" for="form3Example3c">Adresse email</label></div></div><div class="d-flex flex-row align-items-center mb-4"><i class="fas fa-lock fa-lg me-3 fa-fw"></i><div class="form-outline flex-fill mb-0"><input class="${ssrRenderClass([$options.hasError("password") ? "is-invalid" : "", "form-control"])}"${ssrRenderAttr("value", $data.user.password)} type="password" id="form3Example4c" required><label class="form-label" for="form3Example4c">Mot de passe</label></div></div><div class="d-flex flex-row align-items-center mb-4"><i class="fas fa-key fa-lg me-3 fa-fw"></i><div class="form-outline flex-fill mb-0"><input class="${ssrRenderClass([$options.hasError("password") ? "is-invalid" : "", "form-control"])}"${ssrRenderAttr("value", $data.user.password_confirmation)} type="password" id="form3Example4cd" required><label class="form-label" for="form3Example4cd">Repetez le mot de passe</label></div></div><div style="${ssrRenderStyle($data.errors && $data.errors.email ? null : { display: "none" })}" class="justify-content-left text-danger mx-4 mb-3 mb-lg-4"> *Veuillez saisir une adresse email valide </div><div style="${ssrRenderStyle($data.errors && $data.errors.password ? null : { display: "none" })}" class="justify-content-left text-danger mx-4 mb-3 mb-lg-4"> *Veuillez v\xE9rifier le mot de passe saisi (minimum 8 caract\xE9res ) </div><div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"><button type="submit" class="btn signupBtnForm" style="${ssrRenderStyle({ "color": "white", "padding": "10px 40px", "border-radius": "30px", "text-transform": "uppercase", "font-weight": "bold", "font-size": "17px" })}"> S&#39;inscrire </button></div><div class="form-check d-flex justify-content-center mb-5"><label class="form-check-label" for="form2Example3">`);
  _push(ssrRenderComponent(_component_router_link, {
    style: { "text-decoration": "none" },
    to: "/se-connecter",
    class: "text-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`D\xE9j\xE0 un compte chez nous ?`);
      } else {
        return [
          createTextVNode("D\xE9j\xE0 un compte chez nous ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</label></div></form></div><div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"><img src="https://blog.toploc.com/wp-content/uploads/2016/02/Cabane-en-bois-%C2%A9escapehomes.us_.png" class="img-fluid" alt="Sample image"></div></div></div></div></div></div></div></section></div></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/connection/signup/signup.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const signup = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const login_vue_vue_type_style_index_0_lang = "";
const _sfc_main$j = {
  data() {
    return {
      user: {
        email: "",
        password: "",
        token: "",
        id: ""
      },
      errors: {
        password: "",
        email: "",
        login: ""
      },
      profileInfoUpdatedAlready: false
    };
  },
  mounted() {
    if (localStorage.getItem("loggedIn") == "loggedIn") {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    getUserInfo() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      axios.post("/api/getUserInfo", this.user, config).then((response2) => {
        console.log("leeeength : ", response2.data.userInfo.length);
        if (response2.data.userInfo.length > 0) {
          this.profileInfoUpdatedAlready = true;
          localStorage.setItem("profileInfoUpdatedAlready", this.profileInfoUpdatedAlready);
          localStorage.setItem("firstLogin", false);
        } else {
          this.profileInfoUpdatedAlready = false;
          localStorage.setItem("firstLogin", true);
        }
      }).catch((err) => {
        console.log("err : ", err);
      });
    },
    login() {
      axios.post("/api/login", this.user).then((result) => {
        this.errors.password = "";
        this.errors.email = "";
        console.log(result.data.status);
        if (result.data.status == "success") {
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("useremail", result.data.user[0].email);
          localStorage.setItem("userId", result.data.user[0].id);
          localStorage.setItem("userRole", result.data.user[0].role);
          localStorage.setItem("firstname", result.data.user[0].firstname);
          localStorage.setItem("lastname", result.data.user[0].lastname);
          localStorage.setItem("loggedIn", "loggedIn");
          this.user.id = result.data.user[0].id;
          this.getUserInfo();
          this.$router.push({ path: "/" });
          console.log("pusheeeed");
        } else {
          this.errors.login = "Veuillez v\xE9rifier votre adresse email ou le mot de passe";
        }
      }).catch((err) => {
        if (err.response) {
          if (err.response.data.status = "invalid") {
            if (err.response.data.errors) {
              this.errors.login = "V\xE9rifier vos informations";
            }
          }
        }
      });
    },
    hasError(item) {
      if (this.errors[item] != "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="parent clearfix"><div class="login"><div class="container"><h1 class="text-center"> Connectez-vous pour acc\xE9der \xE0 votre compte </h1><div class="login-form"><form><input type="email"${ssrRenderAttr("value", $data.user.email)} placeholder="E-mail" class="${ssrRenderClass($options.hasError("email") ? "is-invalid" : "")}" required><input class="${ssrRenderClass($options.hasError("password") ? "is-invalid" : "")}" type="password" placeholder="Mot de passe"${ssrRenderAttr("value", $data.user.password)} required><div class="text-center"><button type="submit">Se connecter</button></div><div style="${ssrRenderStyle($data.errors.email != "" ? null : { display: "none" })}" class="justify-content-left text-danger my-2">${ssrInterpolate($data.errors.email)}</div><div style="${ssrRenderStyle($data.errors.password != "" ? null : { display: "none" })}" class="justify-content-left text-danger my-2">${ssrInterpolate($data.errors.password)}</div><div style="${ssrRenderStyle($data.errors.login != "" ? null : { display: "none" })}" class="justify-content-left text-danger my-2">${ssrInterpolate($data.errors.login)}</div><div class="forget-pass">`);
  _push(ssrRenderComponent(_component_router_link, {
    style: { "text-decoration": "none" },
    to: "/forgetPassword",
    class: "text-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a${_scopeId}>Mot de passe oubli\xE9 ?</a>`);
      } else {
        return [
          createVNode("a", null, "Mot de passe oubli\xE9 ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="noAccount"><a>`);
  _push(ssrRenderComponent(_component_router_link, {
    style: { "text-decoration": "none" },
    to: "/inscription",
    class: "text-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pas encore de compte chez AtypikHouse ?`);
      } else {
        return [
          createTextVNode("Pas encore de compte chez AtypikHouse ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></div></form></div></div></div></div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/connection/login/login.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const becomeOwner_vue_vue_type_style_index_0_lang = "";
const becomeOwner_vue_vue_type_style_index_1_lang = "";
const _sfc_main$i = {
  data() {
    return {
      user: {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "owner"
      },
      errors: {
        lastname: "",
        firstname: "",
        password: "",
        email: ""
      }
    };
  },
  mounted() {
    if (localStorage.getItem("loggedIn") == "loggedIn") {
      this.$router.push({ path: "/profile" });
    }
  },
  methods: {
    signup() {
      axios.post("/api/signupClient", this.user).then((result) => {
        this.errors.firstname = "";
        this.errors.email = "";
        this.errors.password = "";
        this.errors.lastname = "";
        this.errors.password = "";
        this.$router.push("/newClientAccount");
        console.log(result);
      }).catch((error) => {
        var _a, _b, _c, _d;
        if (error.response) {
          if (error.response.data.errors) {
            console.log("invalid");
            Swal.fire({
              icon: "error",
              text: "V\xE9rifier vos informations",
              confirmButtonColor: "red",
              confirmButtonClass: " px-4 py-2 rounded-pill "
            });
            if (error.response.data.errors.firstname) {
              this.errors.firstname = (_a = error.response.data.errors.firstname[0]) != null ? _a : "";
            } else {
              this.errors.firstname = "";
            }
            if (error.response.data.errors.email) {
              this.errors.email = (_b = error.response.data.errors.email[0]) != null ? _b : "";
            } else {
              this.errors.email = "";
            }
            if (error.response.data.errors.password) {
              this.errors.password = (_c = error.response.data.errors.password[0]) != null ? _c : "";
            } else {
              this.errors.password = "";
            }
            if (error.response.data.errors.lastname) {
              this.errors.lastname = (_d = error.response.data.errors.lastname[0]) != null ? _d : "";
            } else {
              this.errors.lastname = "";
            }
          }
        }
      });
    },
    hasError(item) {
      if (this.errors[item] != "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="container"><div class="feat bg-gray pt-5 pb-5"><div class="container"><div class="row"><div class="section-head col-sm-12"><h4 style="${ssrRenderStyle({ "font-family": "'Kaushan Script', cursive" })}"><span>Pourquoi d\xE9poser vos annonces chez</span> AtypikHouse? </h4></div><div class="col-lg-4 col-sm-6"><div class="item"><span class="icon feature_box_col_one"><i class="fa fa-globe"></i></span><h6>Service de qualit\xE9</h6><p> AtypikHouse met tout en oeuvre pour r\xE9pondre \xE0 vos questions. Notre support est \xE0 votre disposition par t\xE9l\xE9phone ou bien par mail. </p></div></div><div class="col-lg-4 col-sm-6"><div class="item"><span class="icon feature_box_col_two"><i class="fa fa-eye"></i></span><h6>Forte visibilit\xE9</h6><p> Gr\xE2ce \xE0 nos campagnes marketing cibl\xE9es et notre r\xE9f\xE9rencement pr\xE9cis et pertinent, vous b\xE9n\xE9ficiez de notre visibilit\xE9 et de notre notori\xE9t\xE9, ce qui vous permet d\u2019augmenter consid\xE9rablement votre trafic avec une audience de qualit\xE9. </p></div></div><div class="col-lg-4 col-sm-6"><div class="item"><span class="icon feature_box_col_three"><i class="fa fa-calendar"></i></span><h6>Gestion de votre calendrier</h6><p> Vous \xEAtes compl\xE9tement libre de d\xE9finir les dates de disponibilit\xE9 de votre h\xE9bergement. </p></div></div></div></div></div><h2 class="p-5 text-center">Comment proposer vos annonces ?</h2><ul class="process"><li class="process__item"><span class="process__number">1</span><span class="process__subtitle">Inscrivez-vous via le formulaire d\xE9di\xE9 aux propri\xE9taires.</span></li><li class="process__item"><span class="process__number">2</span><span class="process__subtitle">D\xE9posez votre premi\xE8re annonce sur AtypikHouse.</span></li><li class="process__item"><span class="process__number">3</span><span class="process__subtitle">Faites-vous certifier par l&#39;\xE9quipe technique d&#39;AtypikHouse (dans les meilleurs d\xE9lais).</span></li></ul><div class="formContent pt-5 pb-5"><h2 class="text-bold text-center pt-5">Faites votre demande !</h2><h6 class="text-center pb-5"> Entrez vos informations pour vous inscrire </h6><section class="" style="${ssrRenderStyle({ "height": "100%", "background-color": "#fafafa", "border-radius": "25px" })}"><div class="container" style="${ssrRenderStyle({ "height": "100%" })}"><div class="row d-flex justify-content-center align-items-center h-100"><div class="col-lg-12 col-xl-11"><div class="card text-black" style="${ssrRenderStyle({ "border-radius": "25px" })}"><div class="card-body p-md-5"><div class="row justify-content-center"><div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"><h3 class="text-center h1 w mb-5 mx-1 mx-md-4 mt-4"> Devenir propri\xE9taire </h3><form class="mx-1 mx-md-4"><div class="d-flex flex-row align-items-center mb-4"><i class="fas fa-user fa-lg me-3 fa-fw"></i><div class="form-outline flex-fill mb-0"><input type="text" id="form3Example1c"${ssrRenderAttr("value", $data.user.lastname)} class="${ssrRenderClass([
    $options.hasError("lastname") ? "is-invalid" : "",
    "form-control"
  ])}" required><label class="form-label" for="form3Example1c">Nom</label></div></div><div class="d-flex flex-row align-items-center mb-4"><i class="fas fa-user fa-lg me-3 fa-fw"></i><div class="form-outline flex-fill mb-0"><input type="text" id="form3Example1c"${ssrRenderAttr("value", $data.user.firstname)} class="${ssrRenderClass([
    $options.hasError("firstname") ? "is-invalid" : "",
    "form-control"
  ])}" required><label class="form-label" for="form3Example1c">Pr\xE9nom</label></div></div><div class="d-flex flex-row align-items-center mb-4"><i class="fas fa-envelope fa-lg me-3 fa-fw"></i><div class="form-outline flex-fill mb-0"><input type="email" id="form3Example3c"${ssrRenderAttr("value", $data.user.email)} class="${ssrRenderClass([$options.hasError("email") ? "is-invalid" : "", "form-control"])}" required><label class="form-label" for="form3Example3c">Adresse email</label></div></div><div class="d-flex flex-row align-items-center mb-4"><i class="fas fa-lock fa-lg me-3 fa-fw"></i><div class="form-outline flex-fill mb-0"><input type="password" id="form3Example4c"${ssrRenderAttr("value", $data.user.password)} class="${ssrRenderClass([
    $options.hasError("password") ? "is-invalid" : "",
    "form-control"
  ])}" required><label class="form-label" for="form3Example4c">Mot de passe</label></div></div><div class="d-flex flex-row align-items-center mb-4"><i class="fas fa-key fa-lg me-3 fa-fw"></i><div class="form-outline flex-fill mb-0"><input type="password" id="form3Example4cd"${ssrRenderAttr("value", $data.user.password_confirmation)} class="${ssrRenderClass([
    $options.hasError("password") ? "is-invalid" : "",
    "form-control"
  ])}" required><label class="form-label" for="form3Example4cd">Repetez le mot de passe</label></div></div><div style="${ssrRenderStyle($data.errors.lastname != "" ? null : { display: "none" })}" class="justify-content-left text-danger mx-4 mb-3 mb-lg-4">${ssrInterpolate($data.errors.lastname)}</div><div style="${ssrRenderStyle($data.errors && $data.errors.firstname ? null : { display: "none" })}" class="justify-content-left text-danger mx-4 mb-3 mb-lg-4">${ssrInterpolate($data.errors.firstname)}</div><div style="${ssrRenderStyle($data.errors && $data.errors.email ? null : { display: "none" })}" class="justify-content-left text-danger mx-4 mb-3 mb-lg-4">${ssrInterpolate($data.errors.email)}</div><div style="${ssrRenderStyle($data.errors && $data.errors.password ? null : { display: "none" })}" class="justify-content-left text-danger mx-4 mb-3 mb-lg-4"> *Veuillez v\xE9rifier le mot de passe </div><div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"></div><div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"><button type="submit" class="btn signupBtnForm" style="${ssrRenderStyle({ "color": "white", "padding": "10px 25px", "border-radius": "35px" })}"> S&#39;inscrire </button></div></form></div><div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image"></div></div></div></div></div></div></div></section></div></div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/connection/becomeOwner/becomeOwner.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const becomeOwner = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const _imports_1 = "/build/assets/avatar.e57e8e09.png";
const _imports_0$2 = "/build/assets/noNotification.afe21254.svg";
const dashboard_vue_vue_type_style_index_0_lang$3 = "";
const _sfc_main$h = {
  data() {
    return {
      format: "",
      userRole: "",
      windowStep: 1,
      messages: [],
      user: {
        id: "",
        token: ""
      },
      messagesStep: 1,
      sentMessageCount: 0,
      receivedMessageCount: 0,
      notifications: [],
      notificationsAvatars: [],
      from_users: [],
      newNotificationsCheck: false,
      newMessageCheckArray: [],
      newNotificationsCheckCount: 0,
      newMessageCheck: false,
      newMessageCheckPrimary: false,
      reservations: [],
      conversations: [],
      conversation_id: 0,
      conversationMessages: [],
      usersByConversationArray: [],
      usersArray: [],
      selectedUserAvatarTopBar: "",
      messageToSend: {
        content: "",
        sender_user_id: "",
        receiver_user_id: ""
      }
    };
  },
  computed: {
    sortedConversationMessages: function() {
      function compare(a, b) {
        if (a.created_at > b.created_at)
          return -1;
        if (a.created_at < b.created_at)
          return 1;
        return 0;
      }
      return this.conversationMessages.sort(compare);
    },
    sortedConversations: function() {
      function compare(a, b) {
        if (a.created_at > b.created_at)
          return -1;
        if (a.created_at < b.created_at)
          return 1;
        return 0;
      }
      return this.conversations.sort(compare);
    }
  },
  mounted() {
    if (localStorage.getItem("windowStep") != "") {
      this.windowStep = localStorage.getItem("windowStep");
    }
    this.userRole = localStorage.getItem("userRole");
    this.user.id = localStorage.getItem("userId");
    this.user.token = localStorage.getItem("token");
    if (localStorage.getItem("token") != "") {
      if (this.userRole != "client" && this.userRole != "admin")
        ;
      else if (this.userRole == "admin")
        ;
    } else {
      this.$router.push({ path: "/se-connecter" });
    }
    this.getUserMessages();
    this.getUserNotifications();
    if (this.windowStep == 3) {
      this.changeNotificationReadingState();
    }
    this.getReservationByUser();
  },
  methods: {
    changeMessageReadingState(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      let req = {
        conversation_id: this.conversation_id,
        userId: this.user.id
      };
      axios.post("api/changeMessageReadingState", req, config).then((result) => {
      }).catch((err) => {
      });
    },
    getConversationMessages(id2, key) {
      this.conversationMessages = [];
      this.selectedUserAvatarTopBar = key;
      this.conversation_id = id2;
      this.newMessageCheckPrimary = false;
      this.changeMessageReadingState(id2);
      this.conversations.forEach((element) => {
        if (element.id == id2) {
          element.messages.forEach((msg) => {
            this.conversationMessages.push(msg);
          });
        }
      });
      console.log("conversationMessages :::  conversationMessages ::: ", this.conversationMessages);
    },
    deleteReservation(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      Swal.fire({
        title: "Voulez-vous vraiment supprimer d\xE9finitivement la r\xE9servation?",
        showDenyButton: false,
        confirmButtonColor: "rgb(255, 0, 0)",
        confirmButtonText: "D'accord",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        cancelButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" },
        showCancelButton: true,
        confirmButtonText: "Oui ",
        denyButtonText: `Non`
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete("/api/deleteReservation/" + id2, config).then((result2) => {
            this.getReservationByUser();
          });
        }
      });
    },
    cancelReservation(id2) {
      Swal.fire({
        title: "Voulez-vous vraiment annuler la r\xE9servation?",
        showDenyButton: false,
        confirmButtonColor: "rgb(255, 0, 0)",
        confirmButtonText: "D'accord",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        cancelButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" },
        showCancelButton: true,
        confirmButtonText: "Annuler la r\xE9servation",
        denyButtonText: `Fermer`
      }).then((result) => {
        if (result.isConfirmed) {
          let config = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          };
          let req = {
            bookState: "Annul\xE9e",
            reservation_id: id2
          };
          axios.post("/api/cancelReservation", req, config).then((result2) => {
            this.getReservationByUser();
          });
          Swal.fire({
            title: "R\xE9servation annul\xE9e",
            showDenyButton: false,
            showCancelButton: false,
            icon: "success",
            confirmButtonColor: "black",
            confirmButtonText: "D'accord",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    reverseDate(chDate) {
      console.log(chDate, "erererere");
      let x = "";
      for (let i = 8; i < chDate.length; i++) {
        x += chDate[i];
      }
      x += "/";
      for (let i = 5; i <= 6; i++) {
        x += chDate[i];
      }
      x += "/";
      for (let i = 0; i < 4; i++) {
        x += chDate[i];
      }
      return x;
    },
    getReservationByUser() {
      this.reservations = [];
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      let req = {
        user_id: localStorage.getItem("userId")
      };
      axios.post("/api/getReservationByUser", req, config).then((response2) => {
        response2.data.reservations.forEach((element) => {
          this.reservations.push(element);
          console.log("sdsdsdsd", element);
        });
        this.reservations.forEach((element) => {
          let foundCheck = false;
          if (element.bookState != "Annul\xE9e") {
            element.datesRange = this.getDatesBetween(
              element.checkIn,
              element.checkOut,
              false
            );
            element.datesRange.forEach((col) => {
              let dateAux = new Date().getFullYear() + "-" + ("0" + (new Date().getMonth() + 1)).slice(-2) + "-" + ("0" + new Date().getDate()).slice(-2);
              dateAux = dateAux.replace("-", "/");
              dateAux = dateAux.replace("-", "/");
              dateAux = dateAux.replace("-", "/");
              if (col == dateAux || col == dateAux) {
                element.reservationState = "En cours";
                foundCheck = true;
                this.updateBookStateReservation(element.id, "En cours");
              } else if (col < dateAux && !foundCheck) {
                element.reservationState = "Pass\xE9e";
                element.bookState = "Pass\xE9e";
                foundCheck = true;
                this.updateBookStateReservation(element.id, "Pass\xE9e");
              } else if (col > dateAux && !foundCheck) {
                element.reservationState = "Prochainement";
                element.bookState = "Prochainement";
                foundCheck = true;
                this.updateBookStateReservation(element.id, "Prochainement");
              }
            });
          } else {
            element.reservationState = "Annul\xE9e";
            element.bookState = "Annul\xE9e";
          }
        });
        console.log("reservationsreservations", this.reservations);
      }).catch((err) => {
      });
    },
    updateBookStateReservation(id2, ch) {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      let req = {
        reservation_id: id2,
        bookState: ch
      };
      axios.post("/api/updateBookStateReservation", req, config).then((result) => {
      });
    },
    getDatesBetween(x, y, state) {
      let datesArray = [];
      x = new Date(x);
      y = new Date(y);
      let currentDate = new Date(x.getFullYear(), x.getMonth(), x.getDate());
      while (currentDate <= y) {
        var currentDateAux = currentDate.getFullYear() + "/";
        if (currentDate.getMonth() + 1 < 10) {
          currentDateAux += "0" + (currentDate.getMonth() + 1) + "/";
        } else {
          currentDateAux += currentDate.getMonth() + 1 + "/";
        }
        if (currentDate.getDate() < 10) {
          currentDateAux += "0" + currentDate.getDate();
        } else {
          currentDateAux += currentDate.getDate() + "";
        }
        datesArray.push(currentDateAux);
        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1
        );
      }
      return datesArray;
    },
    deleteNotificationAux(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      console.log("id ::   ", id2);
      axios.delete("api/deleteNotification/" + id2, config).then((result) => {
        this.getUserNotifications();
      });
    },
    deleteNotification(id2) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer cette notification ?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteNotificationAux(id2);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Notification \xE0 \xE9t\xE9 bien suprim\xE9e",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    changeNotificationReadingState() {
      console.log("noooootttttiiiiii");
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let aux = {
        id: localStorage.getItem("userId")
      };
      axios.post("api/changeNotificationReadAt", aux, config).then((response2) => {
      }).catch((err) => {
      });
    },
    getUserNotifications() {
      this.notifications = [];
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.user.id = localStorage.getItem("userId");
      axios.post("/api/getUserNotifications", this.user, config).then((response2) => {
        if (response2.data.notifications.length > 0) {
          response2.data.notifications.forEach((element) => {
            response2.data.avatars.forEach((elAux) => {
              console.log("avatarsavatarsavatars :   ", element, elAux);
              if (elAux.user_id == element.from_id) {
                element.avatar = elAux;
              }
            });
            this.notifications.push(element);
            if (element.read_at == null) {
              this.newNotificationsCheckCount++;
              this.newNotificationsCheck = true;
            }
          });
        }
        if (response2.data.from_users.length > 0) {
          response2.data.from_users.forEach((element, key) => {
            this.notifications[key].from_users = element;
          });
        }
      });
    },
    getUserMessages() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      this.messages = [];
      this.usersArray = [];
      this.usersByConversationArray = [];
      this.conversations = [];
      axios.post("api/getUserMessages", this.user, config).then((response2) => {
        response2.data.conversations.forEach((element) => {
          this.messages.push(element.messages);
          this.conversations.push(element);
        });
        if (this.conversation_id != 0)
          this.getConversationMessages(this.conversation_id, this.selectedUserAvatarTopBar);
        this.sortedConversations.forEach((element) => {
          this.newMessageCheck = false;
          element.messages.forEach((msg) => {
            if (msg.receiver_user_id == this.user.id && msg.readingState == "0") {
              this.newMessageCheck = true;
              this.newMessageCheckPrimary = true;
            }
            if (msg.sender_user_id != this.user.id) {
              let exist = false;
              this.usersArray.forEach((user) => {
                if (user == msg.sender_user_id) {
                  exist = true;
                }
              });
              if (!exist) {
                this.usersArray.push(msg.sender_user_id);
              }
            }
            if (msg.receiver_user_id != this.user.id) {
              let exist = false;
              this.usersArray.forEach((user) => {
                if (user == msg.receiver_user_id) {
                  exist = true;
                }
              });
              if (!exist) {
                this.usersArray.push(msg.receiver_user_id);
              }
            }
          });
          element.readState = this.newMessageCheck;
        });
        console.log("element.readState = this.newMessageCheck", this.conversations);
        this.usersArray.forEach((el) => {
          let req = {
            id: el
          };
          axios.post("api/getUser/", req).then((result) => {
            result.data.users.forEach((x) => {
              this.usersByConversationArray.push(x);
            });
          });
        });
      });
    },
    windowStepFunction(x) {
      this.windowStep = x;
      localStorage.setItem("windowStep", x);
      let windowWidth = window.innerWidth;
      if (windowWidth < 820) {
        this.$router.go();
      }
      if (x == 3) {
        this.changeNotificationReadingState();
      }
    },
    commentReservation(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      let req = {
        annonce_id,
        user_id: this.user.id,
        content: comment,
        reservation_id: id2
      };
      axios.post("/api/sendComment", req, config).then((result) => {
      });
    },
    sendMessage() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      let aux = this.messageToSend.content;
      this.messageToSend = {
        sender_user_id: localStorage.getItem("userId"),
        receiver_user_id: this.usersByConversationArray[this.selectedUserAvatarTopBar].id,
        content: aux,
        from_name: localStorage.getItem("lastname") + " " + localStorage.getItem("firstname"),
        to_name: this.usersByConversationArray[this.selectedUserAvatarTopBar].lastname + " " + this.usersByConversationArray[this.selectedUserAvatarTopBar].firstname
      };
      console.log("before :::  this.conversation_id .this.conversation_id  essages ::: ", this.conversation_id, this.selectedUserAvatarTopBar);
      axios.post("api/sendMessage", this.messageToSend, config).then((response2) => {
        this.messageToSend.content = "", this.getUserMessages();
      });
      console.log("before :::  conversationMessages ::: ", this.conversationMessages);
      console.log("this.conversation_id , this.selectedUserAvatarTopBar  ::: ", this.conversation_id, this.selectedUserAvatarTopBar);
    }
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="content"><div class="dashboardContainer"><div class="leftSideBarDashboard"><ul class="leftSideBarUl"><li class="${ssrRenderClass([$data.windowStep == 1 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-tachometer-alt sideBarLinkIcon"></i><span>Dashboard</span></li><li class="${ssrRenderClass([$data.windowStep == 2 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-comments sideBarLinkIcon"></i><span>Messages</span>`);
  if ($data.newMessageCheckPrimary) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 3 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-bell sideBarLinkIcon"></i><span>Notifications</span>`);
  if ($data.newNotificationsCheck) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 5 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-clock sideBarLinkIcon"></i><span>Historiques</span></li></ul></div><div class="leftSideBarDashboardMobile"><div class="expand-collapse"><img src="https://img.icons8.com/material-sharp/40/FFFFFF/circled-menu.png"><div><ul class="leftSideBarUl"><li class="${ssrRenderClass([$data.windowStep == 1 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-tachometer-alt sideBarLinkIcon"></i><span>Dashboard</span></li><li class="${ssrRenderClass([$data.windowStep == 2 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-comments sideBarLinkIcon"></i><span>Messages</span>`);
  if ($data.newMessageCheckPrimary) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 3 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-bell sideBarLinkIcon"></i><span>Notifications</span>`);
  if ($data.newNotificationsCheck) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 5 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-clock sideBarLinkIcon"></i><span>Historiques</span></li></ul></div></div></div><div class="rightSideDashboard">`);
  if ($data.windowStep == 1) {
    _push(`<div class="dashboardStep"><section><dl><dt>Abonn\xE9s</dt><dd>69</dd></dl><dl><dt>Annonces</dt><dd>96</dd></dl><dl><dt>R\xE9servations</dt><dd>66</dd></dl><dl><dt>B\xE9n\xE9fice</dt><dd>99</dd></dl></section></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 2) {
    _push(`<div class="messagesStep"><div class="chatAppDiv"><div class="container"><div class="row no-gutters"><div class="col-md-4 border-right p-1"><div class="topLeftChatAppDiv"><div class="settings-tray"><img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg" alt="Profile img"><span class="settings-tray--right"><i class="fas fa-sync-alt"></i></span></div>`);
    if ($data.conversations.length > 0 && $data.usersByConversationArray.length > 0) {
      _push(`<div><!--[-->`);
      ssrRenderList($options.sortedConversations, (conversation, key) => {
        _push(`<div class="${ssrRenderClass([
          conversation.id == $data.conversation_id ? "selectedConversation" : "",
          "friend-drawer friend-drawer--onhover"
        ])}">`);
        if ($data.usersByConversationArray[key]) {
          _push(`<img${ssrRenderAttr(
            "src",
            "uploads/" + $data.usersByConversationArray[key].user_avatar.path + "/" + $data.usersByConversationArray[key].user_avatar.name
          )} class="profile-image" alt="">`);
        } else {
          _push(`<img style="${ssrRenderStyle({ "width": "60px" })}"${ssrRenderAttr("src", _imports_1)} alt="">`);
        }
        if ($data.usersByConversationArray[key]) {
          _push(`<div class="text"><h6>${ssrInterpolate($data.usersByConversationArray[key].lastname)} ${ssrInterpolate($data.usersByConversationArray[key].firstname)}</h6><p class="text-muted">${ssrInterpolate(conversation.messages[conversation.messages.length - 1].content)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="time text-muted small">${ssrInterpolate(conversation.messages[conversation.messages.length - 1].created_at)}</span>`);
        if (conversation.readState == true) {
          _push(`<span class="red statusRed"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<hr></div></div><div class="col-md-8 p-1"><div style="${ssrRenderStyle({ "background-color": "#eeeeee" })}" class="topRightChatAppDiv"><div class="settings-tray"><div class="friend-drawer no-gutters friend-drawer--grey">`);
    if ($data.usersByConversationArray[$data.selectedUserAvatarTopBar]) {
      _push(`<img class="profile-image"${ssrRenderAttr(
        "src",
        "uploads/" + $data.usersByConversationArray[$data.selectedUserAvatarTopBar].user_avatar.path + "/" + $data.usersByConversationArray[$data.selectedUserAvatarTopBar].user_avatar.name
      )} alt="">`);
    } else {
      _push(`<!---->`);
    }
    if (!$data.usersByConversationArray[$data.selectedUserAvatarTopBar] && $data.conversation_id != 0) {
      _push(`<img style="${ssrRenderStyle({ "width": "60px" })}"${ssrRenderAttr("src", _imports_1)} alt="">`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="text">`);
    if ($data.usersByConversationArray[$data.selectedUserAvatarTopBar]) {
      _push(`<h6>${ssrInterpolate($data.usersByConversationArray[$data.selectedUserAvatarTopBar].lastname)} ${ssrInterpolate($data.usersByConversationArray[$data.selectedUserAvatarTopBar].firstname)} <br> ${ssrInterpolate($data.usersByConversationArray[$data.selectedUserAvatarTopBar].email)}</h6>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div><div class="chat-panel"><div class="messagesDiv"><!--[-->`);
    ssrRenderList($options.sortedConversationMessages, (msg, key) => {
      _push(`<div class="${ssrRenderClass([
        msg.sender_user_id == $data.user.id ? "rightMessageDiv" : "leftMessageDiv",
        "row no-gutters"
      ])}"><div class="col-md-3"><div class="${ssrRenderClass([
        msg.sender_user_id == $data.user.id ? "rightMessage" : "leftMessage",
        "chat-bubble"
      ])}">${ssrInterpolate(msg.content)}</div></div></div>`);
    });
    _push(`<!--]--></div><div class="row"><div class="col-12"><div class="chat-box-tray"><form style="${ssrRenderStyle({ "width": "100%" })}"><input${ssrRenderAttr("value", $data.messageToSend.content)} type="text" placeholder="..."><button type="submit"><i class="fas fa-paper-plane sendIconChatApp"></i></button></form></div></div></div></div></div></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 3) {
    _push(`<div class="NotificationsdStep">`);
    if ($data.notifications.length > 0) {
      _push(`<div class="rowNotification notification-container"><p class="dismiss text-right"><a id="dismiss-all">Notifications</a><a>Vous avez ${ssrInterpolate($data.newNotificationsCheckCount)} nouvelle(s) notification(s) </a></p><!--[-->`);
      ssrRenderList($data.notifications, (notification, key) => {
        _push(`<div class="${ssrRenderClass([!notification.read_at ? "cardReadStateTrue" : "cardReadStateFalse", "card notification-card"])}"><div class="card-body"><table><tr><td style="${ssrRenderStyle({ "width": "100%" })}"><div class="card-title"><img class="avatarNotification"${ssrRenderAttr("src", "/uploads/" + notification.avatar.path + "/" + notification.avatar.name)} alt=""><div><b>${ssrInterpolate(notification.from_users[0].lastname)} ${ssrInterpolate(notification.from_users[0].firstname)}</b><br> ${ssrInterpolate(notification.content)}<br> <span>${ssrInterpolate(notification.created_at)}</span></div>`);
        if (!notification.read_at) {
          _push(`<div><i class="${ssrRenderClass([!notification.read_at ? "notificationDashboardReadingStateFalse" : "", "fas fa-exclamation-circle notificationDashboardDesign"])}"></i></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td style="${ssrRenderStyle({ "width": "10%", "display": "flex", "justify-content": "center", "align-items": "center" })}"><a class="dismiss-notification"><i class="fas fa-trash"></i></a>`);
        _push(ssrRenderComponent(_component_router_link, {
          target: "_blank",
          to: notification.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="link-notification"${_scopeId}><i class="fas fa-link"${_scopeId}></i></a>`);
            } else {
              return [
                createVNode("a", { class: "link-notification" }, [
                  createVNode("i", { class: "fas fa-link" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr></table></div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "column", "height": "600px" })}"><h3>0 Notifications</h3><img style="${ssrRenderStyle({ "width": "30%" })}"${ssrRenderAttr("src", _imports_0$2)} alt=""></div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 5) {
    _push(`<div class="historiquesStep"><div class="historiquesStepContainer"><div class="row"><!--[-->`);
    ssrRenderList($data.reservations, (reservation, key) => {
      _push(`<div style="${ssrRenderStyle({ "justify-content": "center" })}" class="col-lg-6 col-sm-12"><div class="historiquesStepCard">`);
      if (reservation.images) {
        _push(`<div class="box-1"><img style="${ssrRenderStyle({ "height": "100%" })}"${ssrRenderAttr(
          "src",
          "/uploads/" + reservation.images[0].path + "/" + reservation.images[0].image
        )} alt=""><div class="green"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="box-2">`);
      if (reservation.reservationState == "Prochainement") {
        _push(`<div class="${ssrRenderClass([
          reservation.reservationState == "Prochainement" ? "reservationStateDivBlue" : "",
          "reservationStateDiv"
        ])}">${ssrInterpolate(reservation.reservationState)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (reservation.reservationState == "En cours") {
        _push(`<div class="${ssrRenderClass([
          reservation.reservationState == "En cours" ? "reservationStateDivGreen" : "",
          "reservationStateDiv"
        ])}">${ssrInterpolate(reservation.reservationState)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (reservation.reservationState == "Annul\xE9e") {
        _push(`<div class="${ssrRenderClass([
          reservation.reservationState == "Annul\xE9e" ? "reservationStateDivDisplayNone" : "",
          "reservationStateDiv"
        ])}">${ssrInterpolate(reservation.reservationState)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (reservation.reservationState == "Pass\xE9e") {
        _push(`<div class="${ssrRenderClass([
          reservation.reservationState == "Pass\xE9e" ? "reservationStateDivPassed" : "",
          "reservationStateDiv"
        ])}">${ssrInterpolate(reservation.reservationState)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3>${ssrInterpolate(reservation.annonce.title)} <br> #ATK0003429 </h3><p> Date d&#39;arriv\xE9 : ${ssrInterpolate($options.reverseDate(reservation.checkIn))}</p><br><p> Date de d\xE9part : ${ssrInterpolate($options.reverseDate(reservation.checkOut))}</p><br><p>Nombre de nuits : ${ssrInterpolate(reservation.nightCount)}</p><br><p>Pay\xE9e : \u20AC ${ssrInterpolate(reservation.amount)}</p><br><br><p>${ssrInterpolate(reservation.annonce.address)}</p>`);
      if (reservation.annonce.addressComp) {
        _push(`<br>`);
      } else {
        _push(`<!---->`);
      }
      if (reservation.annonce.addressComp) {
        _push(`<p>${ssrInterpolate(reservation.annonce.addressComp)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br><p>${ssrInterpolate(reservation.annonce.city)} ${ssrInterpolate(reservation.annonce.country)}</p><br><div class="shop">`);
      if (reservation.bookState != "Annul\xE9e") {
        _push(`<button> Status : ${ssrInterpolate(reservation.bookState)}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (reservation.bookState != "Annul\xE9e") {
        _push(`<button><svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"></path></svg> ${ssrInterpolate(reservation.created_at)}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><hr>`);
      if (reservation.bookState == "Annul\xE9e") {
        _push(`<div class="canceledReservation"> R\xE9servation annul\xE9e </div>`);
      } else {
        _push(`<!---->`);
      }
      if (reservation.bookState == "Annul\xE9e") {
        _push(`<div class="canceledReservation"> Le ${ssrInterpolate(reservation.updated_at)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (reservation.bookState == "Annul\xE9e") {
        _push(`<div style="${ssrRenderStyle({ "text-align": "end" })}"><i style="${ssrRenderStyle({ "color": "lightgrey", "font-size": "20px", "cursor": "pointer" })}" class="fas fa-trash"></i></div>`);
      } else {
        _push(`<!---->`);
      }
      if (reservation.reservationState != "Annul\xE9e" && reservation.reservationState != "En cours" && reservation.reservationState != "Pass\xE9e") {
        _push(`<div class="card-foot"><button class="btn btn-danger"> Annuler </button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (reservation.reservationState != "Annul\xE9e" && (reservation.reservationState == "En cours" || reservation.reservationState == "Pass\xE9e")) {
        _push(`<div class="card-foot"><button class="btn btnCommenter"> Commenter </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    });
    _push(`<!--]--></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/clientConnectedPages/dashboard.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const dashboardClient = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const dashboard_vue_vue_type_style_index_0_lang$2 = "";
const dashboard_vue_vue_type_style_index_1_lang$1 = "";
$(document).ready(function() {
  $(".expand-collapse img").each(function() {
    var tis = $(this), state = false, answer = tis.next("div").slideUp();
    tis.click(function() {
      state = !state;
      answer.slideToggle(state);
      tis.toggleClass("active", state);
    });
  });
});
const _sfc_main$g = {
  data() {
    return {
      userRole: "",
      windowStep: 1,
      userAnnonces: [],
      owner: {
        owner_id: ""
      },
      token: "",
      messagesStep: 1,
      messages: [],
      user: {
        id: "",
        token: ""
      },
      sentMessageCount: 0,
      receivedMessageCount: 0,
      newMessageCheck: false,
      newMessageCheckPrimary: false,
      newNotificationsCheck: false,
      notifications: [],
      notificationsAvatars: [],
      newNotificationsCheckCount: 0,
      typeLogementCh: "",
      sortValue: "news",
      typeLogementArray: [],
      limitCardsShowen: 4,
      titreChFiltre: "",
      typesLogement: [],
      conversations: [],
      conversation_id: 0,
      conversationMessages: [],
      usersByConversationArray: [],
      usersArray: [],
      selectedUserAvatarTopBar: "",
      messageToSend: {
        content: "",
        sender_user_id: "",
        receiver_user_id: ""
      }
    };
  },
  computed: {
    sortedConversations: function() {
      function compare(a, b) {
        if (a.created_at > b.created_at)
          return -1;
        if (a.created_at < b.created_at)
          return 1;
        return 0;
      }
      return this.conversations.sort(compare);
    },
    sortedConversationMessages: function() {
      function compare(a, b) {
        if (a.created_at > b.created_at)
          return -1;
        if (a.created_at < b.created_at)
          return 1;
        return 0;
      }
      return this.conversationMessages.sort(compare);
    },
    sortedAnnonces() {
      if (this.titreChFiltre != "") {
        this.limitCardsShowen = 1e4;
        this.sortValue = "news";
        return this.userAnnonces.filter((item, index) => {
          return this.titreChFiltre.toLowerCase().split(" ").every((v) => {
            if (this.typeLogementCh != "") {
              return item.typeLogement.includes(this.typeLogementCh) && item.title.toLowerCase().includes(v);
            } else {
              return item.title.toLowerCase().includes(v);
            }
          });
        }).sort(this.orderBy);
      } else {
        if (this.sortValue == "news") {
          return this.userAnnonces.sort((a, b) => {
            return a.id < b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "anciens") {
          return this.userAnnonces.sort((a, b) => {
            return a.id > b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceAsc") {
          return this.userAnnonces.sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceDesc") {
          return this.userAnnonces.sort((a, b) => {
            return parseInt(a.price) < parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else {
          return this.userAnnonces;
        }
      }
    }
  },
  mounted() {
    this.user.token = localStorage.getItem("token");
    this.user.id = localStorage.getItem("userId");
    this.token = localStorage.getItem("token");
    this.owner.owner_id = localStorage.getItem("userId");
    console.log("ower_id : ", this.owner.owner_id);
    if (localStorage.getItem("windowStep") != "") {
      this.windowStep = localStorage.getItem("windowStep");
    }
    this.userRole = localStorage.getItem("userRole");
    if (localStorage.getItem("token") != "")
      ;
    else {
      this.$router.push({ path: "/se-connecter" });
    }
    if (localStorage.getItem("token") != "" && localStorage.getItem("profileInfoUpdatedAlready") == "false") {
      this.$router.push({ path: "/profileAdmin" });
    }
    this.getTypeLogement();
    this.getUserMessages();
    this.getAnnonceOwner();
    this.getUserNotifications();
    if (this.windowStep == 3) {
      this.changeNotificationReadingState();
    }
  },
  methods: {
    sendMessage() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      let aux = this.messageToSend.content;
      this.messageToSend = {
        sender_user_id: localStorage.getItem("userId"),
        receiver_user_id: this.usersByConversationArray[this.selectedUserAvatarTopBar].id,
        content: aux,
        from_name: localStorage.getItem("lastname") + " " + localStorage.getItem("firstname"),
        to_name: this.usersByConversationArray[this.selectedUserAvatarTopBar].lastname + " " + this.usersByConversationArray[this.selectedUserAvatarTopBar].firstname
      };
      console.log(
        "before :::  this.conversation_id .this.conversation_id  essages ::: ",
        this.conversation_id,
        this.selectedUserAvatarTopBar
      );
      axios.post("api/sendMessage", this.messageToSend, config).then((response2) => {
        this.messageToSend.content = "", this.getUserMessages();
      });
      console.log(
        "before :::  conversationMessages ::: ",
        this.conversationMessages
      );
      console.log(
        "this.conversation_id , this.selectedUserAvatarTopBar  ::: ",
        this.conversation_id,
        this.selectedUserAvatarTopBar
      );
    },
    getConversationMessages(id2, key) {
      this.conversationMessages = [];
      this.selectedUserAvatarTopBar = key;
      this.conversation_id = id2;
      this.newMessageCheckPrimary = false;
      this.changeMessageReadingState(id2);
      this.conversations.forEach((element) => {
        if (element.id == id2) {
          element.messages.forEach((msg) => {
            this.conversationMessages.push(msg);
          });
        }
      });
      console.log(
        "conversationMessages :::  conversationMessages ::: ",
        this.conversationMessages
      );
    },
    orderByChanged() {
      this.sortValue = this.sortValue;
      this.typeLogementCh = "";
      this.titreChFiltre = "";
    },
    getTypeLogement() {
      this.typesLogement = [];
      axios.get("/api/getTypeLogement").then((response2) => {
        console.log("");
        response2.data.typesLogement.forEach((element) => {
          this.typesLogement.push(element);
        });
      }).catch((err) => {
      });
    },
    typeLogementCount(ch) {
      let typeLogementCount = 0;
      if (ch != "") {
        this.userAnnonces.forEach((element) => {
          if (element.typeLogement == ch) {
            typeLogementCount++;
          }
        });
        return typeLogementCount;
      }
      if (ch == "") {
        return this.userAnnonces.length;
      }
    },
    showMoreAction() {
      this.limitCardsShowen += 4;
    },
    deleteAnnonce(id2) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer cette annonce ?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteAnnonceAux(id2);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Annonce \xE0 \xE9t\xE9 bien suprim\xE9e",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    deleteAnnonceAux(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      axios.delete("api/deleteAnnonce/" + id2, config).then((result) => {
        this.getAnnonceOwner();
      }).catch((err) => {
      });
    },
    deleteNotificationAux(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      console.log("id ::   ", id2);
      axios.delete("api/deleteNotification/" + id2, config).then((result) => {
        this.getUserNotifications();
      });
    },
    deleteNotification(id2) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer cette notification ?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteNotificationAux(id2);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Notification \xE0 \xE9t\xE9 bien suprim\xE9e",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    changeNotificationReadingState() {
      console.log("noooootttttiiiiii");
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let aux = {
        id: localStorage.getItem("userId")
      };
      axios.post("api/changeNotificationReadAt", aux, config).then((response2) => {
      }).catch((err) => {
      });
    },
    getUserNotifications() {
      this.notifications = [];
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.owner.id = localStorage.getItem("userId");
      axios.post("/api/getUserNotifications", this.owner, config).then((response2) => {
        if (response2.data.notifications.length > 0) {
          response2.data.notifications.forEach((element) => {
            response2.data.avatars.forEach((elAux) => {
              console.log("avatarsavatarsavatars :   ", element, elAux);
              if (elAux.user_id == element.from_id) {
                element.avatar = elAux;
              }
            });
            this.notifications.push(element);
            if (element.read_at == null) {
              this.newNotificationsCheck = true;
              this.newNotificationsCheckCount++;
            }
          });
        }
        console.log("notifications  dfdfdf:   ", this.notifications);
        if (response2.data.from_users.length > 0) {
          response2.data.from_users.forEach((element, key) => {
            console.log("hahaha");
            this.notifications[key].from_users = element;
          });
        }
        console.log("elemenotificationsAvatarsnotificationsAvatarsnt :: ", this.notifications);
      });
    },
    changeMessageReadingState(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      let req = {
        conversation_id: this.conversation_id,
        userId: this.owner.owner_id
      };
      axios.post("api/changeMessageReadingState", req, config).then((result) => {
      });
    },
    getUserMessages() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      this.messages = [];
      this.usersArray = [];
      this.usersByConversationArray = [];
      this.conversations = [];
      let req = {
        id: this.owner.owner_id
      };
      axios.post("api/getUserMessages", req, config).then((response2) => {
        response2.data.conversations.forEach((element) => {
          this.messages.push(element.messages);
          this.conversations.push(element);
        });
        if (this.conversation_id != 0)
          this.getConversationMessages(this.conversation_id, this.selectedUserAvatarTopBar);
        this.newMessageCheck = false;
        this.sortedConversations.forEach((element) => {
          element.messages.forEach((msg) => {
            if (msg.receiver_user_id == this.owner.owner_id && msg.readingState == "0") {
              this.newMessageCheck = true;
              this.newMessageCheckPrimary = true;
            }
            if (msg.sender_user_id != this.owner.owner_id) {
              let exist = false;
              this.usersArray.forEach((user) => {
                if (user == msg.sender_user_id) {
                  exist = true;
                }
              });
              if (!exist) {
                this.usersArray.push(msg.sender_user_id);
              }
            }
            if (msg.receiver_user_id != this.owner.owner_id) {
              let exist = false;
              this.usersArray.forEach((user) => {
                if (user == msg.receiver_user_id) {
                  exist = true;
                }
              });
              if (!exist) {
                this.usersArray.push(msg.receiver_user_id);
              }
            }
          });
          element.readState = this.newMessageCheck;
        });
        this.usersArray.forEach((el) => {
          let reqAux = {
            id: el
          };
          axios.post("api/getUser/", reqAux).then((result) => {
            result.data.users.forEach((x) => {
              this.usersByConversationArray.push(x);
            });
            console.log(
              "usersByConversationArray : ",
              this.usersByConversationArray
            );
          });
        });
      });
    },
    windowStepFunction(x) {
      this.windowStep = x;
      localStorage.setItem("windowStep", x);
      let windowWidth = window.innerWidth;
      if (windowWidth < 820) {
        this.$router.go();
      }
      if (x == 3) {
        this.changeNotificationReadingState();
      }
    },
    getAnnonceOwner() {
      this.userAnnonces = [];
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      axios.post("api/getAnnonceByUserId", this.owner, config).then((response2) => {
        console.log("getAnnonceByUserId : ", response2.data.userAnnonces);
        console.log("this.typesLogement : ", this.typesLogement);
        response2.data.userAnnonces.forEach((element) => {
          console.log("elementelementelement: ", element);
          this.typesLogement.forEach((elementaux) => {
            console.log("elementaux: ", element);
            if (elementaux.id == element.type_logement_id) {
              element.typeLogement = elementaux.name;
            }
          });
          console.log(this.userAnnonces);
          this.userAnnonces.push(element);
          this.typeLogementArray.push(element.typeLogement);
        });
        console.log(this.userAnnonces);
      }).catch((err) => {
        console.log("getAnnonceByUserIdError : ", err);
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="content"><div class="dashboardContainer"><div class="leftSideBarDashboard"><ul class="leftSideBarUl"><li class="${ssrRenderClass([$data.windowStep == 1 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-tachometer-alt sideBarLinkIcon"></i><span>Dashboard</span></li><li class="${ssrRenderClass([$data.windowStep == 2 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-comments sideBarLinkIcon"></i><span>Messages</span>`);
  if ($data.newMessageCheckPrimary) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 3 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-bell sideBarLinkIcon"></i><span>Notifications</span>`);
  if ($data.newNotificationsCheck) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 6 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-digital-tachograph sideBarLinkIcon"></i><span>Annonces</span></li><li class="${ssrRenderClass([$data.windowStep == 5 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-clock sideBarLinkIcon"></i><span>Historiques</span></li></ul></div><div class="leftSideBarDashboardMobile"><div class="expand-collapse"><img src="https://img.icons8.com/material-sharp/40/FFFFFF/circled-menu.png"><div><ul class="leftSideBarUl"><li class="${ssrRenderClass([$data.windowStep == 1 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-tachometer-alt sideBarLinkIcon"></i><span>Dashboard</span></li><li class="${ssrRenderClass([$data.windowStep == 2 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-comments sideBarLinkIcon"></i><span>Messages</span>`);
  if ($data.newMessageCheckPrimary) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 3 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-bell sideBarLinkIcon"></i><span>Notifications</span>`);
  if ($data.newNotificationsCheck) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 6 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-digital-tachograph sideBarLinkIcon"></i><span>Annonces</span></li><li class="${ssrRenderClass([$data.windowStep == 5 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-clock sideBarLinkIcon"></i><span>Historiques</span></li></ul></div></div></div><div class="rightSideDashboard">`);
  if ($data.windowStep == 1) {
    _push(`<div class="dashboardStep"><section><dl><dt>Abonn\xE9s</dt><dd>69</dd></dl><dl><dt>Annonces</dt><dd>96</dd></dl><dl><dt>R\xE9servations</dt><dd>66</dd></dl><dl><dt>B\xE9n\xE9fice</dt><dd>99</dd></dl></section></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 2) {
    _push(`<div class="messagesStep"><div class="chatAppDiv"><div class="container"><div class="row no-gutters"><div class="col-md-4 border-right p-1"><div class="topLeftChatAppDiv"><div class="settings-tray"><img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg" alt="Profile img"><span class="settings-tray--right"><i class="fas fa-sync-alt"></i></span></div>`);
    if ($data.conversations.length > 0 && $data.usersByConversationArray.length > 0) {
      _push(`<div><!--[-->`);
      ssrRenderList($options.sortedConversations, (conversation, key) => {
        _push(`<div class="${ssrRenderClass([
          conversation.id == $data.conversation_id ? "selectedConversation" : "",
          "friend-drawer friend-drawer--onhover"
        ])}">`);
        if ($data.usersByConversationArray.length > 0) {
          _push(`<img${ssrRenderAttr(
            "src",
            "uploads/" + $data.usersByConversationArray[key].user_avatar.path + "/" + $data.usersByConversationArray[key].user_avatar.name
          )} class="profile-image" alt="">`);
        } else {
          _push(`<img style="${ssrRenderStyle({ "width": "60px" })}"${ssrRenderAttr("src", _imports_1)} alt="">`);
        }
        if ($data.usersByConversationArray.length > 0) {
          _push(`<div class="text"><h6>${ssrInterpolate($data.usersByConversationArray[key].lastname)} ${ssrInterpolate($data.usersByConversationArray[key].firstname)}</h6><p class="text-muted">${ssrInterpolate(conversation.messages[conversation.messages.length - 1].content)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if ($data.usersByConversationArray.length > 0) {
          _push(`<span class="time text-muted small">${ssrInterpolate(conversation.messages[conversation.messages.length - 1].created_at)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (conversation.readState == true) {
          _push(`<span class="red statusRed"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<hr></div></div><div class="col-md-8 p-1"><div style="${ssrRenderStyle({ "background-color": "#eeeeee" })}" class="topRightChatAppDiv"><div class="settings-tray"><div class="friend-drawer no-gutters friend-drawer--grey">`);
    if ($data.usersByConversationArray[$data.selectedUserAvatarTopBar]) {
      _push(`<img class="profile-image"${ssrRenderAttr(
        "src",
        "uploads/" + $data.usersByConversationArray[$data.selectedUserAvatarTopBar].user_avatar.path + "/" + $data.usersByConversationArray[$data.selectedUserAvatarTopBar].user_avatar.name
      )} alt="">`);
    } else {
      _push(`<!---->`);
    }
    if (!$data.usersByConversationArray[$data.selectedUserAvatarTopBar] && $data.conversation_id != 0) {
      _push(`<img style="${ssrRenderStyle({ "width": "60px" })}"${ssrRenderAttr("src", _imports_1)} alt="">`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="text">`);
    if ($data.usersByConversationArray[$data.selectedUserAvatarTopBar]) {
      _push(`<h6>${ssrInterpolate($data.usersByConversationArray[$data.selectedUserAvatarTopBar].lastname)} ${ssrInterpolate($data.usersByConversationArray[$data.selectedUserAvatarTopBar].firstname)} <br> ${ssrInterpolate($data.usersByConversationArray[$data.selectedUserAvatarTopBar].email)}</h6>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div><div class="chat-panel"><div class="messagesDiv"><!--[-->`);
    ssrRenderList($options.sortedConversationMessages, (msg, key) => {
      _push(`<div class="${ssrRenderClass([
        msg.sender_user_id == $data.user.id ? "rightMessageDiv" : "leftMessageDiv",
        "row no-gutters"
      ])}"><div class="col-md-3"><div class="${ssrRenderClass([
        msg.sender_user_id == $data.user.id ? "rightMessage" : "leftMessage",
        "chat-bubble"
      ])}">${ssrInterpolate(msg.content)}</div></div></div>`);
    });
    _push(`<!--]--></div><div class="row"><div class="col-12"><div class="chat-box-tray"><form style="${ssrRenderStyle({ "width": "100%" })}"><input${ssrRenderAttr("value", $data.messageToSend.content)} type="text" placeholder="..."><button type="submit"><i class="fas fa-paper-plane sendIconChatApp"></i></button></form></div></div></div></div></div></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 3) {
    _push(`<div class="NotificationsdStep">`);
    if ($data.notifications.length > 0) {
      _push(`<div class="rowNotification notification-container"><p class="dismiss text-right"><a id="dismiss-all">Notifications</a><a>Vous avez ${ssrInterpolate($data.newNotificationsCheckCount)} nouvelle(s) notification(s) </a></p><!--[-->`);
      ssrRenderList($data.notifications, (notification, key) => {
        _push(`<div class="${ssrRenderClass([!notification.read_at ? "cardReadStateTrue" : "cardReadStateFalse", "card notification-card"])}"><div class="card-body"><table><tr><td style="${ssrRenderStyle({ "width": "100%" })}"><div class="card-title"><img class="avatarNotification"${ssrRenderAttr("src", "/uploads/" + notification.avatar.path + "/" + notification.avatar.name)} alt=""><div><b>${ssrInterpolate(notification.from_users[0].lastname)} ${ssrInterpolate(notification.from_users[0].firstname)}</b><br> ${ssrInterpolate(notification.content)}<br> <span>${ssrInterpolate(notification.created_at)}</span></div>`);
        if (!notification.read_at) {
          _push(`<div><i class="${ssrRenderClass([!notification.read_at ? "notificationDashboardReadingStateFalse" : "", "fas fa-exclamation-circle notificationDashboardDesign"])}"></i></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td style="${ssrRenderStyle({ "width": "10%", "display": "flex", "justify-content": "center", "align-items": "center" })}"><a class="dismiss-notification"><i class="fas fa-trash"></i></a>`);
        _push(ssrRenderComponent(_component_router_link, {
          target: "_blank",
          to: notification.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="link-notification"${_scopeId}><i class="fas fa-link"${_scopeId}></i></a>`);
            } else {
              return [
                createVNode("a", { class: "link-notification" }, [
                  createVNode("i", { class: "fas fa-link" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr></table></div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "column", "height": "600px" })}"><h3>0 Notifications</h3><img style="${ssrRenderStyle({ "width": "30%" })}"${ssrRenderAttr("src", _imports_0$2)} alt=""></div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 6) {
    _push(`<div class="annoncesStep"><div class="topBarAnnoncesFilter"><div class="filtersDiv"><ul class="ulTopSideBar"><li><label for=""></label><div class="form-search" method="get" action="#"><input${ssrRenderAttr("value", $data.titreChFiltre)} type="search" name="search" placeholder="Filtrer par titre"></div></li><li><label for="sortFilter">Cat\xE9gorie : </label><select class="selectSortBy" name="sortFilter" id="sortFilter"><option selected value=""> Tout <small>(${ssrInterpolate($options.typeLogementCount(""))})</small></option><!--[-->`);
    ssrRenderList($data.typesLogement, (typeLogement, key) => {
      _push(`<option${ssrRenderAttr("value", typeLogement.name)}>${ssrInterpolate(typeLogement.name)} <small>(${ssrInterpolate($options.typeLogementCount(typeLogement.name))})</small></option>`);
    });
    _push(`<!--]--></select></li><li><label for="sortFilter">Trier par :</label><select class="selectSortBy" name="sortFilter" id="sortFilter"><option value="priceAsc">Prix : Ordre croissant</option><option value="priceDesc">Prix : Ordre d\xE9croissant</option><option value="comments"> Moyenne des commentaires client </option><option value="news" selected>Nouveaut\xE9s</option><option value="anciens" selected>Anciens</option></select></li></ul></div></div><main class="gridCardsMain"><!--[-->`);
    ssrRenderList($options.sortedAnnonces, (userAnnonce, key) => {
      _push(`<div id="containerAnnonce"><div class="product-details"><h1>${ssrInterpolate(userAnnonce.title)}</h1><h5>Localisation : </h5><ul><li><p class="information">${ssrInterpolate(userAnnonce.address)}</p></li>`);
      if (userAnnonce.compAddress) {
        _push(`<li><p class="information">${ssrInterpolate(userAnnonce.compAddress)}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li><p class="information">${ssrInterpolate(userAnnonce.city)}</p></li><li><p class="information">${ssrInterpolate(userAnnonce.postalCode)}</p></li><li><p class="information">${ssrInterpolate(userAnnonce.country)}</p></li></ul><div>`);
      _push(ssrRenderComponent(_component_router_link, {
        target: "_blank",
        to: "/updateAnnonce/?annonce_id=" + userAnnonce.id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-edit annoncesDashboardIcons annoncesDashboardIconsEdit"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-edit annoncesDashboardIcons annoncesDashboardIconsEdit" })
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<i class="fas fa-trash annoncesDashboardIcons annoncesDashboardIconsDelete"></i>`);
      _push(ssrRenderComponent(_component_router_link, {
        target: "_blank",
        to: "/disponibilityAnnonce/?annonce_id=" + userAnnonce.id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-calendar-alt annoncesDashboardIcons annoncesDashboardIconsDisponibilty"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-calendar-alt annoncesDashboardIcons annoncesDashboardIconsDisponibilty" })
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div><div class="control">`);
      _push(ssrRenderComponent(_component_router_link, {
        target: "_blank",
        style: { "text-decoration": "none" },
        to: "/annonce/?id=" + userAnnonce.id,
        class: "text-secondary",
        onClick: $options.scrollToTop
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btnAnnonce"${_scopeId}><span class="priceDashboard"${_scopeId}>\u20AC ${ssrInterpolate(userAnnonce.price)}</span><span class="buy"${_scopeId}>Consulter</span></button>`);
          } else {
            return [
              createVNode("button", { class: "btnAnnonce" }, [
                createVNode("span", { class: "priceDashboard" }, "\u20AC " + toDisplayString(userAnnonce.price), 1),
                createVNode("span", { class: "buy" }, "Consulter")
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div><div class="product-image"><!--[-->`);
      ssrRenderList(userAnnonce.images, (userAnnonceImage, key2) => {
        _push(`<img style="${ssrRenderStyle(userAnnonceImage.default == "true" ? null : { display: "none" })}"${ssrRenderAttr("src", "uploads/" + userAnnonceImage.path + "/" + userAnnonceImage.image)}>`);
      });
      _push(`<!--]--><div class="infoDiv"><ul><li><strong>Surface: </strong>${ssrInterpolate(userAnnonce.surface)} cm\xB2</li><li><strong>Nombre de couchages: </strong>${ssrInterpolate(userAnnonce.numberOfBeds)}</li><li><strong>Capacit\xE9 d&#39;accueillement : </strong>${ssrInterpolate(userAnnonce.capacity)}</li><li><strong> Animaux autoris\xE9s : </strong>${ssrInterpolate(userAnnonce.animaux)}</li></ul></div></div></div>`);
    });
    _push(`<!--]--><div class="resultCount"><h3> Affichage de ${ssrInterpolate($options.sortedAnnonces.length)} sur ${ssrInterpolate($data.userAnnonces.length)} r\xE9sultats </h3><button style="${ssrRenderStyle($options.sortedAnnonces.length > 0 && $data.userAnnonces.length > $options.sortedAnnonces.length ? null : { display: "none" })}" class="btn btn-dark">Voir plus</button></div></main></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 5) {
    _push(`<div class="historiquesStep"><h2 class="big-heading"> Historique des r\xE9servations</h2><div class="tableReservation"><h2 class="heading">#R\xE9servation ID</h2><div class="block"><p>Titre de l&#39;annonce <span class="priceDashboard">$128/ <sub>nuit</sub></span><ul class="options"><li>Date d&#39;arriv\xE9 :</li><li>Date de d\xE9part :</li><li>Date de nuit(s) :</li><li>Nombre de personnes : </li></ul></p></div><div class="block"><p>Paiement <ul class="options"><li>Mode de paiement : </li><li>Date de paiement :</li></ul></p></div><div class="block"><p>informations client <ul class="options"><li>Nom et pr\xE9nom : </li><li>Email :</li><li>T\xE9l\xE9phone :</li></ul></p></div><div class="block"><img style="${ssrRenderStyle({ "margin-bottom": "20px" })}" src="https://www.leboisderosoy.com/wp-content/uploads/2019/06/7CMl5fvE-scaled.jpeg" alt="" srcset=""></div><button class="btn"><p>Total : 999$</p></button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/ownerConnectedPages/dashboard.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const dashboardOwner = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const createAnAnnonce_vue_vue_type_style_index_0_lang = "";
const _sfc_main$f = {
  data() {
    return {
      annonce: {
        annonce_id: "",
        title: "",
        type_logement_id: "",
        address: "",
        compAddress: "",
        city: "",
        postalCode: "",
        country: "France",
        surface: "",
        numberOfBeds: "",
        capacity: "",
        description: "",
        optionsLogement: [],
        servicesLogement: [],
        animaux: "",
        informationsSupp: "",
        suppPropreties: [],
        type_logement_id: "",
        images: [],
        form: new FormData(),
        urls: [],
        user_id: "",
        price: ""
      },
      annonceErrors: {
        title: "",
        type_logement_id: 0,
        address: "",
        city: "",
        postalCode: "",
        country: "France",
        surface: "",
        numberOfBeds: "",
        capacity: "",
        description: "",
        animaux: "",
        user_id: "",
        price: "",
        type_logement_id: ""
      },
      token: "",
      annonceErrorsCheck: false,
      notification: {},
      adminsAndModerateurUsers: [],
      typesLogement: [],
      suppPropreties: [],
      optionsLogementArray: [],
      servicesLogementArray: []
    };
  },
  mounted() {
    this.annonce.user_id = localStorage.getItem("userId");
    this.token = localStorage.getItem("token");
    console.log(this.annonce.user_id);
    if (localStorage.getItem("token") != "" && localStorage.getItem("profileInfoUpdatedAlready") == "false") {
      this.$router.push({ path: "/profileAdmin" });
    }
    this.getTypeLogement();
  },
  methods: {
    updateFormInputs(id2) {
      this.getPropretiesByTypeLogement(id2);
      this.getServicesByTypeLogement(id2);
      this.getOptionsByTypeLogement(id2);
    },
    getPropretiesByTypeLogement(id2) {
      this.suppPropreties = [];
      console.log("iddd :   ", id2);
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        type_logement_id: id2
      };
      axios.post("/api/getPropretiesByTypeLogement/", req, config).then((response2) => {
        response2.data.propretiesElements.forEach((element) => {
          this.suppPropreties.push(element);
        });
      });
    },
    getServicesByTypeLogement(id2) {
      this.servicesLogementArray = [];
      console.log("iddd :   ", id2);
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        type_logement_id: id2
      };
      axios.post("/api/getServicesByTypeLogement/", req, config).then((response2) => {
        response2.data.servicesElements.forEach((element) => {
          this.servicesLogementArray.push(element);
        });
      });
    },
    getOptionsByTypeLogement(id2) {
      this.optionsLogementArray = [];
      console.log("iddd :   ", id2);
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        type_logement_id: id2
      };
      axios.post("/api/getOptionsByTypeLogement/", req, config).then((response2) => {
        response2.data.optionsElements.forEach((element) => {
          this.optionsLogementArray.push(element);
        });
      });
    },
    getTypeLogement() {
      this.typesLogement = [];
      axios.get("/api/getTypeLogement").then((response2) => {
        console.log("");
        response2.data.typesLogement.forEach((element) => {
          if (element.name != "Autre")
            this.typesLogement.push(element);
        });
        response2.data.typesLogement.forEach((element) => {
          if (element.name == "Autre")
            this.typesLogement.push(element);
        });
      }).catch((err) => {
      });
    },
    deleteImage(x) {
      console.log(x);
      Swal.fire({
        title: "Supprimer cette photo ?",
        showDenyButton: true,
        confirmButtonColor: "rgb(255, 78, 78)",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        denyButtonColor: "rgb(31, 31, 31)",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        showCancelButton: false,
        confirmButtonText: "Oui",
        denyButtonText: `Non`
      }).then((result) => {
        if (result.isConfirmed) {
          this.annonce.urls.splice(x, 1);
          this.annonce.images.splice(x, 1);
        }
      });
    },
    onFilesChange(e) {
      this.annonce.images = [];
      this.annonce.urls = [];
      let file = e.target.files;
      if (!file.length) {
        return false;
      } else {
        for (let i = 0; i < file.length; i++) {
          this.annonce.images.push(file[i]);
          this.annonce.urls.push(URL.createObjectURL(file[i]));
        }
        console.log(this.annonce.images);
      }
    },
    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    submitAnnonceForm() {
      this.suppPropreties.forEach((element, key) => {
        element.suppPropretiesAnnonce = this.annonce.suppPropreties[key];
      });
      this.annonce.suppPropreties = this.suppPropreties;
      this.annonce.suppPropretiesAnnonce = this.suppPropreties;
      console.log(this.annonce);
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      axios.post("api/addAnnonce", this.annonce, config).then((response2) => {
        console.log("response annonce id : ", response2.data.annonce.id);
        console.log("response USER id : ", this.annonce.user_id);
        this.annonce.annonce_id = response2.data.annonce.id;
        this.addImages();
        this.annonceErrors = {
          title: "",
          address: "",
          city: "",
          postalCode: "",
          country: "France",
          surface: "",
          numberOfBeds: "",
          capacity: "",
          description: "",
          animaux: "",
          price: "",
          type_logement_id: ""
        };
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Annonce a \xE9t\xE9 bien cr\xE9e",
          showConfirmButton: false,
          timer: 2e3
        });
        window.scrollTo(0, 0);
        this.sendNotifications();
        localStorage.setItem("windowStep", 6);
        this.$router.push({ path: "/dashboardOwner" });
      }).catch((err) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
        console.log("err : ", err);
        if (err.response) {
          if (err.response.data.errors) {
            if (err.response.data.errors.price) {
              this.annonceErrors.price = (_a = err.response.data.errors.price[0]) != null ? _a : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.title = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.type_logement_id) {
              this.annonceErrors.type_logement_id = (_b = err.response.data.errors.type_logement_id[0]) != null ? _b : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.type_logement_id = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.title) {
              this.annonceErrors.title = (_c = err.response.data.errors.title[0]) != null ? _c : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.title = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.address) {
              this.annonceErrors.address = (_d = err.response.data.errors.address[0]) != null ? _d : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.address = "";
              this.annonceErrorsCheck = false;
            }
            if (this.annonce.type_logement_id == 0) {
              this.annonceErrorsCheck = true;
            }
            if (err.response.data.errors.city) {
              this.annonceErrors.city = (_e = err.response.data.errors.city[0]) != null ? _e : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.city = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.postalCode) {
              this.annonceErrors.postalCode = (_f = err.response.data.errors.postalCode[0]) != null ? _f : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.postalCode = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.country) {
              this.annonceErrors.country = (_g = err.response.data.errors.country[0]) != null ? _g : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.country = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.surface) {
              this.annonceErrors.surface = (_h = err.response.data.errors.surface[0]) != null ? _h : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.surface = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.numberOfBeds) {
              this.annonceErrors.numberOfBeds = (_i = err.response.data.errors.numberOfBeds[0]) != null ? _i : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.numberOfBeds = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.capacity) {
              this.annonceErrors.capacity = (_j = err.response.data.errors.capacity[0]) != null ? _j : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.capacity = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.description) {
              this.annonceErrors.description = (_k = err.response.data.errors.description[0]) != null ? _k : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.description = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.animaux) {
              this.annonceErrors.animaux = (_l = err.response.data.errors.animaux[0]) != null ? _l : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.animaux = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.user_id) {
              this.annonceErrors.user_id = (_m = err.response.data.errors.user_id[0]) != null ? _m : "";
            } else {
              this.annonceErrors.user_id = "";
            }
          }
        }
      });
      this.sendNotifications();
    },
    sendNotifications() {
      this.notification.from_id = localStorage.getItem("userId");
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      this.notification.role = "admin";
      axios.post("api/getUserByRole", this.notification, config).then((result) => {
        result.data.users.forEach((element) => {
          this.adminsAndModerateurUsers.push(element);
        });
      });
      this.notification.role = "moderateur";
      axios.post("api/getUserByRole", this.notification, config).then((result) => {
        result.data.users.forEach((element) => {
          this.adminsAndModerateurUsers.push(element);
        });
      });
      this.notification.role = "client";
      axios.post("api/getUserByRole", this.notification, config).then((result) => {
        result.data.users.forEach((element) => {
          this.adminsAndModerateurUsers.push(element);
        });
      });
      setTimeout(() => {
        if (this.adminsAndModerateurUsers.length > 0) {
          console.log("xxxxxxx ");
          this.adminsAndModerateurUsers.forEach((element) => {
            this.notification.user_id = element.id;
            this.notification.content = "A ajout\xE9 une nouvelle annonce";
            this.notification.type = "add";
            axios.post("api/sendNotification", this.notification, config);
          });
        }
      }, 1e3);
    },
    addImages() {
      for (let i = 0; i < this.annonce.images.length; i++) {
        this.annonce.form.append("images[]", this.annonce.images[i]);
      }
      this.annonce.form.append("annonceTitle", this.annonce.title);
      this.annonce.form.append("annonce_id", this.annonce.annonce_id);
      this.annonce.form.append("user_id", this.annonce.user_id);
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "content-type": "multipart/form-data"
        }
      };
      this.token = localStorage.getItem("token");
      axios.post("api/uploadAnnonceImages", this.annonce.form, config).then((response2) => {
        this.annonce.images = [];
      }).catch((error) => {
        console.log(error);
      });
    },
    hasError(item) {
      if (this.annonceErrors[item] != "") {
        return true;
      } else {
        return false;
      }
    },
    onlyForCurrency($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.annonce.price.indexOf(".") != -1)) {
        $event.preventDefault();
      }
      if (this.annonce.price != null && this.annonce.price.indexOf(".") > -1 && this.annonce.price.split(".")[1].length > 1) {
        $event.preventDefault();
      }
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "containerFormAnnonce" }, _attrs))}><div class="title">Ajouter une nouvelle annonce</div><div class="content"><form><div class="user-details"><div class="input-box"><span class="${ssrRenderClass([$options.hasError("title") ? "text-danger" : "", "details"])}">Titre `);
  if ($options.hasError("title")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input type="text"${ssrRenderAttr("value", $data.annonce.title)} placeholder="Titre de l&#39;annonce" required></div></div><div class="gender-details"><div class="gender-details"><span class="${ssrRenderClass([$options.hasError("type_logement_id") ? "text-danger" : "", "gender-title"])}">Quels types d&#39;h\xE9bergements proposez-vous ? `);
  if ($options.hasError("type_logement_id")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><div class="checkboxPropretyForm"><!--[-->`);
  ssrRenderList($data.typesLogement, (typeLogement, key) => {
    _push(`<input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.annonce.type_logement_id, typeLogement.id)) ? " checked" : ""} name="typeLogement"${ssrRenderAttr("value", typeLogement.id)}${ssrRenderAttr("id", "dot-" + key)}>`);
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList($data.typesLogement, (typeLogement, key) => {
    _push(`<div class="category"><label${ssrRenderAttr("for", "dot-" + key)}><span class="${ssrRenderClass(["label" + key, "dot"])}"></span><span class="gender">${ssrInterpolate(typeLogement.name)}</span></label></div>`);
  });
  _push(`<!--]--></div></div></div><div class="house-details"><div style="${ssrRenderStyle({ "width": "100%" })}" class="input-box"><span class="${ssrRenderClass([$options.hasError("address") ? "text-danger" : "", "details"])}">Adresse `);
  if ($options.hasError("address")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input type="text"${ssrRenderAttr("value", $data.annonce.address)} placeholder="Adresse" required></div><div style="${ssrRenderStyle({ "width": "100%" })}" class="input-box"><span class="details">Compl\xE9ment d&#39;adresse </span><input type="text"${ssrRenderAttr("value", $data.annonce.compAddress)} placeholder="Compl\xE9ment d&#39;adresse"></div><div class="input-box"><span class="${ssrRenderClass([$options.hasError("city") ? "text-danger" : "", "details"])}">Ville `);
  if ($options.hasError("city")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input type="text"${ssrRenderAttr("value", $data.annonce.city)} placeholder="Ville" required></div><div class="input-box"><span class="${ssrRenderClass([$options.hasError("postalCode") ? "text-danger" : "", "details"])}">Code postal `);
  if ($options.hasError("postalCode")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input type="text"${ssrRenderAttr("value", $data.annonce.postalCode)} placeholder="Code postal" required></div><div class="input-box"><span class="details">Pays</span><select style="${ssrRenderStyle({ "background-color": "white" })}"><option value="Belgique">Belgique</option><option value="Bulgarie">Bulgarie</option><option value="Croatie">Croatie</option><option value="R\xE9publique tch\xE8que">R\xE9publique tch\xE8que</option><option value="Danemark">Danemark</option><option value="Estonie">Estonie</option><option value="Finlande">Finlande</option><option value="France" selected>France</option><option value="Allemagne">Allemagne</option><option value="Gr\xE8ce">Gr\xE8ce</option><option value="Hongrie">Hongrie</option><option value="Islande">Islande</option><option value="Italie">Italie</option><option value="Latvia">Latvia</option><option value="Luxembourg">Luxembourg</option><option value="Monaco">Monaco</option><option value="Pays-Bas">Pays-Bas</option><option value="Nouvelle-Z\xE9lande">Nouvelle-Z\xE9lande</option><option value="Pologne">Pologne</option><option value="Portugal">Portugal</option><option value="Roumanie">Roumanie</option><option value="Slovaquie">Slovaquie</option><option value="Slov\xE9nie">Slov\xE9nie</option><option value="Espagne">Espagne</option><option value="Su\xE8de">Su\xE8de</option><option value="Suisse">Suisse</option><option value="Royaume-Uni">Royaume-Uni</option></select></div></div><div class="title2">Description</div><div class="house-details"><div class="input-box"><span class="${ssrRenderClass([$options.hasError("surface") ? "text-danger" : "", "details"])}">Superficie en m\xB2 `);
  if ($options.hasError("surface")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input min="1" type="number"${ssrRenderAttr("value", $data.annonce.surface)} placeholder="Superficie en m\xB2" required style="${ssrRenderStyle({ "text-align": "center", "padding": "0" })}"></div><div class="input-box"><span class="${ssrRenderClass([$options.hasError("numberOfBeds") ? "text-danger" : "", "details"])}">Nombre de couchages `);
  if ($options.hasError("numberOfBeds")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input style="${ssrRenderStyle({ "text-align": "center", "padding": "0" })}" type="number" min="1"${ssrRenderAttr("value", $data.annonce.numberOfBeds)} placeholder="Nombre de couchages" required></div><div class="input-box"><span class="${ssrRenderClass([$options.hasError("capacity") ? "text-danger" : "", "details"])}">Capacit\xE9 d&#39;accueillement `);
  if ($options.hasError("capacity")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input style="${ssrRenderStyle({ "text-align": "center", "padding": "0" })}" type="number" min="1"${ssrRenderAttr("value", $data.annonce.capacity)} placeholder="Capacit\xE9 d&#39;accueillement" required></div><div class="input-box"><span class="${ssrRenderClass([$options.hasError("price") ? "text-danger" : "", "details"])}">Tarif d&#39;une nuit en \u20AC `);
  if ($options.hasError("price")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input style="${ssrRenderStyle({ "text-align": "center", "padding": "0" })}" type="text" min="1"${ssrRenderAttr("value", $data.annonce.price)} placeholder="Tarif d&#39;une nuit en \u20AC" required></div><!--[-->`);
  ssrRenderList($data.suppPropreties, (suppProprety, key) => {
    _push(`<div style="${ssrRenderStyle($data.suppPropreties.length > 0 ? null : { display: "none" })}" class="input-box"><span class="details">${ssrInterpolate(suppProprety.name)}</span><input style="${ssrRenderStyle({ "text-align": "center", "padding": "0" })}" type="text" min="1"${ssrRenderAttr("value", $data.annonce.suppPropreties[key])}${ssrRenderAttr("placeholder", suppProprety.name)}${ssrIncludeBooleanAttr(suppProprety.required == "Oui") ? " required" : ""}></div>`);
  });
  _push(`<!--]--><div class="textarea-box"><span class="${ssrRenderClass([$options.hasError("description") ? "text-danger" : "", "details"])}">Description g\xE9n\xE9rale `);
  if ($options.hasError("description")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><textarea type="text" placeholder="..." required>${ssrInterpolate($data.annonce.description)}</textarea></div></div>`);
  if ($data.servicesLogementArray.length > 0) {
    _push(`<div class="title2">Ce que le logement propose</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="gender-details"><div class="checkboxPropretyForm"><!--[-->`);
  ssrRenderList($data.servicesLogementArray, (service, key) => {
    _push(`<input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.annonce.servicesLogement) ? ssrLooseContain($data.annonce.servicesLogement, service.name) : $data.annonce.servicesLogement) ? " checked" : ""} name="serviceLogement"${ssrRenderAttr("value", service.name)}${ssrRenderAttr("id", "radio" + (key + 1))}>`);
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList($data.servicesLogementArray, (service, key) => {
    _push(`<div class="category"><label${ssrRenderAttr("for", "radio" + (key + 1))}><span class="${ssrRenderClass(["service" + (key + 1), "dot"])}"></span><span class="gender">${ssrInterpolate(service.name)}</span></label></div>`);
  });
  _push(`<!--]--></div></div>`);
  if ($data.optionsLogementArray.length > 0) {
    _push(`<div class="title2">Options inclus</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="gender-details"><div class="checkboxPropretyForm"><!--[-->`);
  ssrRenderList($data.optionsLogementArray, (option, key) => {
    _push(`<input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.annonce.optionsLogement) ? ssrLooseContain($data.annonce.optionsLogement, option.name) : $data.annonce.optionsLogement) ? " checked" : ""} name="optionLogement"${ssrRenderAttr("value", option.name)}${ssrRenderAttr("id", "radioOption" + (key + 1))}>`);
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList($data.optionsLogementArray, (option, key) => {
    _push(`<div class="category"><label${ssrRenderAttr("for", "radioOption" + (key + 1))}><span class="${ssrRenderClass(["option" + (key + 1), "dot"])}"></span><span class="gender">${ssrInterpolate(option.name)}</span></label></div>`);
  });
  _push(`<!--]--></div></div><div class="${ssrRenderClass([$options.hasError("animaux") ? "text-danger" : "", "title2"])}"> Animaux autoris\xE9s ? `);
  if ($options.hasError("animaux")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="gender-details"><input type="radio" name="animauxAutorisation"${ssrIncludeBooleanAttr(ssrLooseEqual($data.annonce.animaux, "oui")) ? " checked" : ""} value="oui" id="radioAnimaux1"><input type="radio" name="animauxAutorisation"${ssrIncludeBooleanAttr(ssrLooseEqual($data.annonce.animaux, "non")) ? " checked" : ""} value="non" id="radioAnimaux2"><div style="${ssrRenderStyle({ "display": "flex", "width": "10%", "justify-content": "space-between" })}" class="category"><label for="radioAnimaux1"><span class="dot oneAnimaux"></span><span class="gender">Oui</span></label><label for="radioAnimaux2"><span class="dot twoAnimaux"></span><span class="gender">Non</span></label></div></div><div class="title2">Informations suppl\xE9mentaires</div><div class="house-details"><div class="textarea-box"><textarea type="text" placeholder="..." required>${ssrInterpolate($data.annonce.informationsSupp)}</textarea></div><div class="textarea-box"><span class="details">Photos</span><input multiple type="file" class="form-control imagesInput" accept="image/*" required>`);
  if ($data.annonce.urls.length > 0) {
    _push(`<div class="containerImages"><!--[-->`);
    ssrRenderList($data.annonce.urls, (url, key) => {
      _push(`<div><img class="annonceImages"${ssrRenderAttr("src", url)} alt=""></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if ($data.annonceErrorsCheck) {
    _push(`<div class="text-danger fw-bold px-0"> Veuillez v\xE9rifier les informations saisies </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="button"><button type="submit">Ajouter</button></div></form></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/ownerConnectedPages/createAnAnnonce.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const createAnAnnonce = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const _imports_0$1 = "/build/assets/avatar.a6aff615.svg";
const profile_vue_vue_type_style_index_0_lang = "";
const profile_vue_vue_type_style_index_1_lang = "";
const _sfc_main$e = {
  data() {
    return {
      userRole: "",
      user: {
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        address: "",
        compAddress: "",
        postalCode: "",
        city: "",
        country: "France",
        token: "",
        email_verified_at: ""
      },
      errors: {},
      user: {
        id: "",
        password: "",
        password_confirmation: ""
      },
      userInfoSavedAlready: false,
      avatar: "",
      avatarForm: new FormData(),
      avatarUrl: "",
      userAvatar: ""
    };
  },
  mounted() {
    this.user.lastname = localStorage.getItem("lastname");
    this.user.firstname = localStorage.getItem("firstname");
    this.user.email = localStorage.getItem("useremail");
    this.user.id = localStorage.getItem("userId");
    this.user.token = localStorage.getItem("token");
    this.userRole = localStorage.getItem("userRole");
    if (localStorage.getItem("token") == "") {
      this.$router.push({ path: "/se-connecter" });
    }
    this.getUserProfile();
    this.getAvatarByUserId();
  },
  methods: {
    mailVertificationRequest() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      axios.post("api/mailVertificationRequest", this.user, config).then((response2) => {
        let timerInterval;
        Swal.fire({
          title: "E-mail de v\xE9rification envoy\xE9",
          html: "</p>Vous allez recevoir un email veuillez consulter vos emails.</p>",
          timer: 3e3,
          timerProgressBar: false,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      }).catch((err) => {
      });
    },
    getAvatarByUserId() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      axios.post("api/getAvatarByUserId", this.user, config).then((response2) => {
        if (response2.data.userAvatar.length > 0) {
          this.userAvatar = response2.data.userAvatar;
        } else {
          this.userAvatar = "";
        }
        console.log("avvvvv = ", this.userAvatar);
      }).catch((err) => {
      });
    },
    uploadAvatar(e) {
      this.avatar = e.target.files[0];
      this.avatarForm.append("avatar", this.avatar);
      this.avatarForm.append("user_id", this.user.id);
      console.log("fooooorm", this.avatarForm);
      this.user.token = localStorage.getItem("token");
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
          "content-type": "multipart/form-data"
        }
      };
      axios.post("api/uploadAvatar", this.avatarForm, config).then((response2) => {
        console.log("response");
        this.getAvatarByUserId();
      }).catch((error) => {
        console.log(error);
      });
    },
    updatePassword() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      this.user.id = localStorage.getItem("userId");
      axios.post("api/updatePasswordUser", this.user, config).then((response2) => {
        console.log("res: ", response2);
        Swal.fire({
          icon: "success",
          text: "Mot de passe a \xE9t\xE9 bien modifier",
          showConfirmButton: false,
          timer: 2e3
        });
        this.user.password = "";
        this.user.password_confirmation = "";
      }).catch((err) => {
        console.log("err ; ", err.response.data.errors.password[0]);
        if (err.response.data.errors.password[0] == "The password field is required.") {
          Swal.fire({
            icon: "error",
            text: "Veuillez remplir le nouveau mot de passe ",
            buttonsStyling: true,
            confirmButtonText: "D'accord",
            confirmButtonColor: "rgb(0, 0, 0)",
            confirmButtonClass: " px-4 py-2 rounded-pill "
          });
        } else if (err.response.data.errors.password[0] == "The password confirmation does not match.") {
          Swal.fire({
            icon: "error",
            text: "Veuillez confirmer le nouveau mot de passe  ",
            buttonsStyling: false,
            customClass: {
              confirmButton: "confirmButtonSwal"
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            text: "Veuillez v\xE9rifier le nouveau mot de passe (minimum 8 charact\xE9res) ",
            buttonsStyling: false,
            customClass: {
              confirmButton: "confirmButtonSwal"
            }
          });
        }
      });
    },
    getUserProfile() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      axios.post("api/getUserInfo", this.user, config).then((response2) => {
        if (response2.data.user.length > 0) {
          this.user.email_verified_at = response2.data.user[0].email_verified_at;
        }
        if (response2.data.userInfo.length > 0) {
          this.user.address = response2.data.userInfo[0].address;
          this.user.compAddress = response2.data.userInfo[0].addressComp;
          this.user.phoneNumber = response2.data.userInfo[0].phone;
          this.user.postalCode = response2.data.userInfo[0].postalCode;
          this.user.city = response2.data.userInfo[0].city;
          this.user.country = response2.data.userInfo[0].country;
          this.user.lastname = response2.data.user[0].lastname;
          this.user.firstname = response2.data.user[0].firstname;
          localStorage.setItem("firstLogin", "false");
          this.userInfoSavedAlready = true;
        } else {
          this.userInfoSavedAlready = false;
          localStorage.setItem("firstLogin", "true");
        }
        if (!this.userInfoSavedAlready) {
          Swal.fire({
            title: "Votre profile n'est pas encore cr\xE9e ",
            text: "Veuillez saisir vos informations",
            icon: "info",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            confirmButtonColor: "#0370c8"
          });
        }
      }).catch((err) => {
        console.log("err : ", err);
      });
    },
    checkforErrors(key) {
      if (Object.keys(this.errors).includes(key)) {
        return true;
      } else {
        return false;
      }
    },
    saveUserProfile() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      axios.post("api/saveUserInfo", this.user, config).then((response2) => {
        console.log(response2);
        this.errors = {};
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Profile a \xE9t\xE9 bien modifier",
          showConfirmButton: false,
          timer: 2e3
        });
        this.$router.go();
      }).catch((err) => {
        Swal.fire({
          title: "Veuillez bien remplire votre profile",
          icon: "error",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          confirmButtonColor: "#0370c8"
        });
        console.log("err : ", err);
        this.errors = err.response.data.errors;
        console.log("Errors table :   ", this.errors);
      });
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="container rounded bg-white mt-5 mb-5"><div class="row"><div class="${ssrRenderClass([$data.userInfoSavedAlready ? "col-md-3" : "col-md-6", "border-right"])}"><div class="d-flex flex-column align-items-center text-center p-3 py-5 pt-0 userInfoPartOne" style="${ssrRenderStyle({ "height": "100%", "justify-content": "center" })}"><div class="personal-image"><label class="label"><input type="file" accept="image/*"><figure class="personal-figure">`);
  if ($data.userAvatar == "") {
    _push(`<img${ssrRenderAttr("src", _imports_0$1)} class="personal-avatar" alt="avatar">`);
  } else {
    _push(`<!---->`);
  }
  if ($data.userAvatar != "") {
    _push(`<img${ssrRenderAttr(
      "src",
      "uploads/" + $data.userAvatar[0].path + $data.userAvatar[0].name
    )} class="personal-avatar" alt="avatar">`);
  } else {
    _push(`<!---->`);
  }
  _push(`<figcaption class="personal-figcaption"><img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"></figcaption></figure></label></div><span class="font-weight-bold">${ssrInterpolate($data.user.lastname)} ${ssrInterpolate($data.user.firstname)}</span><span class="text-black-50">${ssrInterpolate($data.user.email)}</span>`);
  if ($data.user.email_verified_at != null) {
    _push(`<span class="emailVerifyDivVerified">Compte v\xE9rifi\xE9</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.user.email_verified_at == null) {
    _push(`<span style="${ssrRenderStyle({ "color": "red", "font-size": "12px" })}" class="">Compte non v\xE9rifi\xE9</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(` `);
  if ($data.user.email_verified_at == null) {
    _push(`<span class="emailVerifyDiv">V\xE9rifier mainetenant</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="${ssrRenderClass([$data.userInfoSavedAlready ? "col-md-5" : "col-md-6", "border-right"])}"><div class="p-3 py-5 pt-0"><div class="d-flex justify-content-between align-items-center mb-3">`);
  if ($data.userInfoSavedAlready) {
    _push(`<h4 class="text-right">Profile</h4>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.userInfoSavedAlready) {
    _push(`<h4 class="text-right"> Cr\xE9er votre profile </h4>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><form><div class="row mt-2"><div class="col-md-6"><label class="labels">Nom</label><input${ssrRenderAttr("value", $data.user.lastname)} type="text" placeholder="Nom" class="${ssrRenderClass([$options.checkforErrors("lastname") ? "is-invalid" : "", "form-control form-controlProfile"])}" required></div><div class="col-md-6"><label class="labels">Pr\xE9nom</label><input${ssrRenderAttr("value", $data.user.firstname)} type="text" placeholder="Pr\xE9nom" class="${ssrRenderClass([$options.checkforErrors("firstname") ? "is-invalid" : "", "form-control form-controlProfile"])}" required></div></div><div class="row mt-3"><div class="col-md-12"><label class="labels">T\xE9l\xE9phone</label><input${ssrRenderAttr("value", $data.user.phoneNumber)} type="text" placeholder="Num\xE9ro de t\xE9l\xE9phone" class="${ssrRenderClass([$options.checkforErrors("phoneNumber") ? "is-invalid" : "", "form-control form-controlProfile"])}" required></div><div class="col-md-12"><label class="labels">Adresse</label><input${ssrRenderAttr("value", $data.user.address)} type="text" placeholder="Adresse" class="${ssrRenderClass([$options.checkforErrors("address") ? "is-invalid" : "", "form-control form-controlProfile"])}" required></div><div class="col-md-12"><label class="labels">Compl\xE9ment d&#39;adresse</label><input${ssrRenderAttr("value", $data.user.compAddress)} type="text" placeholder="Compl\xE9ment d&#39;adresse" class="${ssrRenderClass([$options.checkforErrors("compAddress") ? "is-invalid" : "", "form-control form-controlProfile"])}"></div><div class="col-md-12"><label class="labels">Code postal</label><input${ssrRenderAttr("value", $data.user.postalCode)} type="text" placeholder="Code postal" class="${ssrRenderClass([$options.checkforErrors("postalCode") ? "is-invalid" : "", "form-control form-controlProfile"])}" required></div></div><div class="row mt-3"><div class="col-md-6"><label class="labels">Ville</label><input${ssrRenderAttr("value", $data.user.city)} type="text" placeholder="Ville" class="${ssrRenderClass([$options.checkforErrors("city") ? "is-invalid" : "", "form-control form-controlProfile"])}" required></div><div class="col-md-6"><label class="labels">Pays</label><div class="input-box"><select style="${ssrRenderStyle({ "background-color": "white" })}" required><option value="Belgique">Belgique</option><option value="Bulgarie">Bulgarie</option><option value="Croatie">Croatie</option><option value="R\xE9publique tch\xE8que"> R\xE9publique tch\xE8que </option><option value="Danemark">Danemark</option><option value="Estonie">Estonie</option><option value="Finlande">Finlande</option><option value="France" selected>France</option><option value="Allemagne">Allemagne</option><option value="Gr\xE8ce">Gr\xE8ce</option><option value="Hongrie">Hongrie</option><option value="Islande">Islande</option><option value="Italie">Italie</option><option value="Latvia">Latvia</option><option value="Luxembourg">Luxembourg</option><option value="Monaco">Monaco</option><option value="Pays-Bas">Pays-Bas</option><option value="Nouvelle-Z\xE9lande">Nouvelle-Z\xE9lande</option><option value="Pologne">Pologne</option><option value="Portugal">Portugal</option><option value="Roumanie">Roumanie</option><option value="Slovaquie">Slovaquie</option><option value="Slov\xE9nie">Slov\xE9nie</option><option value="Espagne">Espagne</option><option value="Su\xE8de">Su\xE8de</option><option value="Suisse">Suisse</option><option value="Royaume-Uni">Royaume-Uni</option></select></div></div></div><div class="mt-5 text-center">`);
  if ($data.userInfoSavedAlready) {
    _push(`<button class="btn profile-button" type="submit"> Enregistrer les modifications </button>`);
  } else {
    _push(`<button class="btn profile-button" type="submit"> Enregistrer </button>`);
  }
  _push(`</div></form></div></div>`);
  if ($data.userInfoSavedAlready) {
    _push(`<div class="col-md-4"><div class="p-3 py-5 pt-0"><div class="d-flex justify-content-between align-items-center experience"><h4 class="pb-0 mb-0">Modification de mot de passe</h4></div><br><div class="col-md-12"><label class="labels">Nouveau mot de passe</label><input type="password" class="form-control form-controlProfile"${ssrRenderAttr("value", $data.user.password)} placeholder="..."></div><br><div class="col-md-12"><label class="labels">Repetez le mot de passe</label><input type="password" class="form-control form-controlProfile"${ssrRenderAttr("value", $data.user.password_confirmation)} placeholder="..."></div></div><div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button"> Modifier le mot de passe </button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/profile/profile.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const profileAdmin = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const dashboard_vue_vue_type_style_index_0_lang$1 = "";
const dashboard_vue_vue_type_style_index_1_lang = "";
const _sfc_main$d = {
  data() {
    return {
      userRole: "",
      windowStep: 1,
      moderateurs: [],
      admins: [],
      owners: [],
      clients: [],
      admin: {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "admin"
      },
      adminsErrors: {
        lastname: "",
        firstname: "",
        password: "",
        email: ""
      },
      moderateur: {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "moderateur"
      },
      moderateurErrors: {
        lastname: "",
        firstname: "",
        password: "",
        email: ""
      },
      token: "",
      connectedUser: {
        email: ""
      },
      notifications: [],
      notificationsAvatars: [],
      newNotificationsCheck: false,
      newNotificationsCheckCount: 0,
      annonces: [],
      typeLogementArray: [],
      limitCardsShowen: 4,
      titreChFiltre: "",
      typeLogementCh: "",
      sortValue: "news",
      typesLogement: [],
      typeLogementToAdd: "",
      propretiesArray: [],
      proprety: {
        typesLogementIds: [],
        name: "",
        required: ""
      },
      service: {
        typesLogementIds: [],
        name: ""
      },
      servicesArray: [],
      option: {
        typesLogementIds: [],
        name: ""
      },
      optionsArray: [],
      managementAnnonceStep: 0
    };
  },
  computed: {
    sortedAnnonces() {
      if (this.titreChFiltre != "") {
        this.limitCardsShowen = 1e4;
        this.sortValue = "news";
        return this.annonces.filter((item, index) => {
          return this.titreChFiltre.toLowerCase().split(" ").every((v) => {
            if (this.typeLogementCh != "") {
              return item.typeLogement.includes(this.typeLogementCh) && item.title.toLowerCase().includes(v);
            } else {
              return item.title.toLowerCase().includes(v);
            }
          });
        }).sort(this.orderBy);
      } else {
        if (this.sortValue == "news") {
          return this.annonces.sort((a, b) => {
            return a.id < b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "anciens") {
          return this.annonces.sort((a, b) => {
            return a.id > b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceAsc") {
          return this.annonces.sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceDesc") {
          return this.annonces.sort((a, b) => {
            return parseInt(a.price) < parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else {
          return this.annonces;
        }
      }
    }
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.connectedUser.email = localStorage.getItem("useremail");
    this.windowStep = localStorage.getItem("windowStep");
    this.userRole = localStorage.getItem("userRole");
    if (localStorage.getItem("token") != "") {
      if (this.userRole != "admin") {
        this.$router.push({ path: "/" });
      } else if (this.userRole == "admin") {
        this.$router.push({ path: "/dashboardAdmin" });
      }
    } else {
      this.$router.push({ path: "/se-connecter" });
    }
    this.getTypeLogement();
    this.getModerateursInfo();
    this.getAdminsInfo();
    this.getOwnersInfo();
    this.getClientsInfo();
    this.getUserNotifications();
    this.getAnnonces();
    this.getPropreties();
    this.getServices();
    this.getOptions();
    if (this.windowStep == 3) {
      this.changeNotificationReadingState();
    }
  },
  methods: {
    getOptions() {
      this.optionsArray = [];
      axios.get("/api/getOptions").then((result) => {
        result.data.options.forEach((element) => {
          this.optionsArray.push(element);
        });
      });
    },
    checkOptionSelectedType(id2, option) {
      option.typesLogementIds = option.typesLogementIds.replace("[", "");
      option.typesLogementIds = option.typesLogementIds.replace("]", "");
      let auxArray = option.typesLogementIds.split(",");
      let check = false;
      let state = false;
      auxArray.forEach((element) => {
        if (element == id2) {
          check = true;
          state = true;
        } else if (element != id2 && !state) {
          check = false;
        }
      });
      return check;
    },
    addOption() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.option.typesLogementIds = this.proprety.typesLogementIds;
      let req = this.option;
      axios.post("api/addOption/", req, config).then((response2) => {
        this.proprety = {
          typesLogementIds: [],
          name: ""
        };
        this.option = {
          typesLogementIds: [],
          name: ""
        };
        this.getOptions();
      }).catch((err) => {
        Swal.fire({
          actions: "error",
          icon: "error",
          title: "Veuillez bien remplire tout les champs",
          confirmButtonColor: "#272a2c",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" }
        });
      });
    },
    updateOptionTypeLogement(option_id, typeLogement_id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        id: option_id,
        type_logement_id: typeLogement_id
      };
      let reqAux = {
        id: option_id
      };
      let checkedBeforeOrNot = false;
      let typesLogementByOptionArray = [];
      axios.post("/api/getTypesOfLogementByOption", reqAux, config).then((result) => {
        JSON.parse(result.data.typesLogementByOption[0].typesLogementIds).forEach((element) => {
          typesLogementByOptionArray.push(element);
        });
        typesLogementByOptionArray.forEach((element) => {
          if (element == typeLogement_id) {
            checkedBeforeOrNot = true;
          }
        });
        if (checkedBeforeOrNot) {
          Swal.fire({
            text: "Voulez-vous vraiment supprimer cette propri\xE9t\xE9 pour ce type de logement ",
            showDenyButton: true,
            showCancelButton: false,
            denyButtonText: `Non`,
            confirmButtonColor: "red",
            denyButtonColor: "#272a2c",
            icon: "info",
            confirmButtonText: "Oui",
            denyButtonClass: " px-4 py-2 rounded-pill ",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          }).then((result2) => {
            if (result2.isConfirmed) {
              axios.post("/api/updateOptionTypeLogementState", req, config).then((result3) => {
                this.getOptions();
              });
              Swal.fire({
                actions: "success",
                icon: "success",
                title: "Propri\xE9t\xE9 mis \xE0 jour",
                confirmButtonColor: "#272a2c",
                confirmButtonClass: " px-4 py-2 rounded-pill ",
                customClass: { popup: "swal2-border-radius" }
              });
            }
          });
        } else {
          Swal.fire({
            icon: "info",
            text: "Voulez-vous vraiment ajouter cette propri\xE9t\xE9 pour ce type de logement ",
            showDenyButton: true,
            showCancelButton: false,
            denyButtonText: `Non`,
            confirmButtonColor: "#2591cc",
            denyButtonColor: "#272a2c",
            confirmButtonText: "Oui",
            denyButtonClass: " px-4 py-2 rounded-pill ",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          }).then((result2) => {
            if (result2.isConfirmed) {
              axios.post("/api/updateOptionTypeLogementState", req, config).then((result3) => {
                this.getOptions();
              });
              Swal.fire({
                actions: "success",
                icon: "success",
                title: "Propri\xE9t\xE9 ajout\xE9e",
                confirmButtonColor: "#272a2c",
                confirmButtonClass: " px-4 py-2 rounded-pill ",
                customClass: { popup: "swal2-border-radius" }
              });
            }
          });
        }
      });
    },
    submitAddForm() {
      if (this.managementAnnonceStep == 1) {
        this.addProprety();
      } else if (this.managementAnnonceStep == 2) {
        this.addServices();
      } else if (this.managementAnnonceStep == 3) {
        this.addOption();
      }
    },
    deleteTypeLogement(id2, key) {
      if (this.typesLogement[key].name == "Autre")
        ;
      else {
        let config = {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        };
        Swal.fire({
          text: "\xCAtes-vous s\xFBr de vouloir supprimer ce type d'h\xE9bergement ?",
          icon: "info",
          showDenyButton: true,
          showCancelButton: false,
          denyButtonText: `Non`,
          confirmButtonColor: "rgb(255, 0, 0)",
          denyButtonColor: "#272a2c",
          confirmButtonText: "Supprimer",
          denyButtonClass: " px-4 py-2 rounded-pill ",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" }
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete("/api/deleteTypeLogement/" + id2, config).then((result2) => {
              this.getTypeLogement();
            });
            Swal.fire({
              actions: "success",
              icon: "success",
              title: "Suprim\xE9",
              confirmButtonColor: "#272a2c",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" }
            });
          }
        });
      }
    },
    updateRequiredProprety(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        id: id2
      };
      Swal.fire({
        icon: "question",
        showDenyButton: true,
        confirmButtonColor: "rgb(255, 78, 78)",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        denyButtonColor: "#4c8dc2",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        cancelButtonColor: "rgb(31, 31, 31)",
        cancelButtonClass: " px-4 py-2 rounded-pill ",
        showCancelButton: true,
        confirmButtonText: "Supprimer",
        denyButtonText: `Modifier`,
        cancelButtonText: `Fermer`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Supprimer cette propri\xE9te?",
            showDenyButton: true,
            confirmButtonColor: "rgb(255, 78, 78)",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            denyButtonColor: "rgb(31, 31, 31)",
            denyButtonClass: " px-4 py-2 rounded-pill ",
            showCancelButton: false,
            confirmButtonText: "Supprimer",
            denyButtonText: `Non`
          }).then((result2) => {
            if (result2.isConfirmed) {
              this.deleteProprety(id2);
            }
          });
        }
        if (result.isDenied) {
          const inputOptions = new Promise((resolve) => {
            resolve({
              "Oui": "Oui",
              "Non": "Non"
            });
          });
          Swal.fire({
            icon: "question",
            text: "Obligatoire ?",
            input: "radio",
            inputOptions,
            confirmButtonColor: "#2591cc",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
            confirmButtonText: "Mettre \xE0 jour",
            inputValidator: (value) => {
              if (!value) {
                return "Vous devez choisir une r\xE9ponse";
              }
              req.content = value;
              if (value) {
                axios.post("/api/updateRequiredProprety", req, config).then((result2) => {
                  this.getPropreties();
                });
                Swal.fire({
                  actions: "success",
                  icon: "success",
                  title: "Mis \xE0 jour",
                  confirmButtonColor: "#272a2c",
                  confirmButtonClass: " px-4 py-2 rounded-pill ",
                  customClass: { popup: "swal2-border-radius" }
                });
              }
            }
          });
        }
      });
    },
    deleteProprety(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        id: id2,
        user_id: localStorage.getItem("userId")
      };
      axios.post("api/deletePropretyById", req, config).then((result) => {
        this.getPropreties();
      }).catch((err) => {
      });
    },
    updatePropretyTypeLogement(prop_id, typeLogement_id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        id: prop_id,
        type_logement_id: typeLogement_id
      };
      let reqAux = {
        id: prop_id
      };
      let checkedBeforeOrNot = false;
      let typesLogementByPropretyArray = [];
      axios.post("/api/getTypesOfLogementByProprety", reqAux, config).then((result) => {
        JSON.parse(result.data.typesLogementByProprety[0].typesLogementIds).forEach((element) => {
          typesLogementByPropretyArray.push(element);
        });
        typesLogementByPropretyArray.forEach((element) => {
          if (element == typeLogement_id) {
            checkedBeforeOrNot = true;
          }
        });
        if (checkedBeforeOrNot) {
          Swal.fire({
            text: "Voulez-vous vraiment supprimer cette propri\xE9t\xE9 pour ce type de logement ",
            showDenyButton: true,
            showCancelButton: false,
            denyButtonText: `Non`,
            confirmButtonColor: "red",
            denyButtonColor: "#272a2c",
            icon: "info",
            confirmButtonText: "Oui",
            denyButtonClass: " px-4 py-2 rounded-pill ",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          }).then((result2) => {
            if (result2.isConfirmed) {
              axios.post("/api/updatePropretyTypeLogementState", req, config).then((result3) => {
                this.getPropreties();
              });
              Swal.fire({
                actions: "success",
                icon: "success",
                title: "Propri\xE9t\xE9 mis \xE0 jour",
                confirmButtonColor: "#272a2c",
                confirmButtonClass: " px-4 py-2 rounded-pill ",
                customClass: { popup: "swal2-border-radius" }
              });
            }
          });
        } else {
          Swal.fire({
            icon: "info",
            text: "Voulez-vous vraiment ajouter cette propri\xE9t\xE9 pour ce type de logement ",
            showDenyButton: true,
            showCancelButton: false,
            denyButtonText: `Non`,
            confirmButtonColor: "#2591cc",
            denyButtonColor: "#272a2c",
            confirmButtonText: "Oui",
            denyButtonClass: " px-4 py-2 rounded-pill ",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          }).then((result2) => {
            if (result2.isConfirmed) {
              axios.post("/api/updatePropretyTypeLogementState", req, config).then((result3) => {
                this.getPropreties();
              });
              Swal.fire({
                actions: "success",
                icon: "success",
                title: "Propri\xE9t\xE9 ajout\xE9e",
                confirmButtonColor: "#272a2c",
                confirmButtonClass: " px-4 py-2 rounded-pill ",
                customClass: { popup: "swal2-border-radius" }
              });
            }
          });
        }
      });
    },
    checkPropretySelectedType(id2, prop) {
      prop.typesLogementIds = prop.typesLogementIds.replace("[", "");
      prop.typesLogementIds = prop.typesLogementIds.replace("]", "");
      let auxArray = prop.typesLogementIds.split(",");
      let check = false;
      let state = false;
      auxArray.forEach((element) => {
        if (element == id2) {
          check = true;
          state = true;
        } else if (element != id2 && !state) {
          check = false;
        }
      });
      return check;
    },
    addProprety() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = this.proprety;
      axios.post("api/addProprety/", req, config).then((response2) => {
        this.proprety = {
          typesLogementIds: [],
          name: ""
        };
        this.getPropreties();
      }).catch((err) => {
        Swal.fire({
          actions: "error",
          icon: "error",
          title: "Veuillez bien remplire tout les champs",
          confirmButtonColor: "#272a2c",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" }
        });
      });
    },
    getPropreties() {
      this.propretiesArray = [];
      axios.get("/api/getPropreties").then((result) => {
        result.data.propreties.forEach((element) => {
          this.propretiesArray.push(element);
        });
      });
    },
    getServices() {
      this.servicesArray = [];
      axios.get("/api/getServices").then((result) => {
        result.data.services.forEach((element) => {
          this.servicesArray.push(element);
        });
      });
    },
    addServices() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.service.typesLogementIds = this.proprety.typesLogementIds;
      let req = this.service;
      axios.post("api/addService/", req, config).then((response2) => {
        this.service = {
          typesLogementIds: [],
          name: ""
        };
        this.proprety = {
          typesLogementIds: []
        };
        this.getServices();
      }).catch((err) => {
        Swal.fire({
          actions: "error",
          icon: "error",
          title: "Veuillez bien remplire tout les champs",
          confirmButtonColor: "#272a2c",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" }
        });
      });
    },
    updateServiceTypeLogement(service_id, typeLogement_id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        id: service_id,
        type_logement_id: typeLogement_id
      };
      let reqAux = {
        id: service_id
      };
      let checkedBeforeOrNot = false;
      let typesLogementByServiceArray = [];
      axios.post("/api/getTypesOfLogementByService", reqAux, config).then((result) => {
        JSON.parse(result.data.typesLogementByService[0].typesLogementIds).forEach((element) => {
          typesLogementByServiceArray.push(element);
        });
        typesLogementByServiceArray.forEach((element) => {
          if (element == typeLogement_id) {
            checkedBeforeOrNot = true;
          }
        });
        if (checkedBeforeOrNot) {
          Swal.fire({
            text: "Voulez-vous vraiment supprimer ce service pour ce type de logement ",
            showDenyButton: true,
            showCancelButton: false,
            denyButtonText: `Non`,
            confirmButtonColor: "red",
            denyButtonColor: "#272a2c",
            icon: "info",
            confirmButtonText: "Oui",
            denyButtonClass: " px-4 py-2 rounded-pill ",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          }).then((result2) => {
            if (result2.isConfirmed) {
              axios.post("/api/updateServiceTypeLogementState", req, config).then((result3) => {
                this.getServices();
              });
              Swal.fire({
                actions: "success",
                icon: "success",
                title: "Propri\xE9t\xE9 mis \xE0 jour",
                confirmButtonColor: "#272a2c",
                confirmButtonClass: " px-4 py-2 rounded-pill ",
                customClass: { popup: "swal2-border-radius" }
              });
            }
          });
        } else {
          Swal.fire({
            icon: "info",
            text: "Voulez-vous vraiment ajouter ce service pour ce type de logement ",
            showDenyButton: true,
            showCancelButton: false,
            denyButtonText: `Non`,
            confirmButtonColor: "#2591cc",
            denyButtonColor: "#272a2c",
            confirmButtonText: "Oui",
            denyButtonClass: " px-4 py-2 rounded-pill ",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          }).then((result2) => {
            if (result2.isConfirmed) {
              axios.post("/api/updateServiceTypeLogementState", req, config).then((result3) => {
                this.getServices();
              });
              Swal.fire({
                actions: "success",
                icon: "success",
                title: "Propri\xE9t\xE9 ajout\xE9e",
                confirmButtonColor: "#272a2c",
                confirmButtonClass: " px-4 py-2 rounded-pill ",
                customClass: { popup: "swal2-border-radius" }
              });
            }
          });
        }
      });
      Swal.fire({
        text: "Voulez-vous vraiment modifier ce service pour ce type de logement ",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "#2591cc",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Oui",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post("/api/updateServiceTypeLogementState", req, config).then((result2) => {
            this.getServices();
          });
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Propri\xE9t\xE9 modifi\xE9e",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    checkServiceSelectedType(id2, service) {
      service.typesLogementIds = service.typesLogementIds.replace("[", "");
      service.typesLogementIds = service.typesLogementIds.replace("]", "");
      let auxArray = service.typesLogementIds.split(",");
      let check = false;
      let state = false;
      auxArray.forEach((element) => {
        if (element == id2) {
          check = true;
          state = true;
        } else if (element != id2 && !state) {
          check = false;
        }
      });
      return check;
    },
    async addTypeLogement() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        name: this.typeLogementToAdd
      };
      const { value: formValues } = await Swal.fire({
        showDenyButton: true,
        denyButtonText: `Fermer`,
        denyButtonColor: "#272a2c",
        confirmButtonText: "Ajouter",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonColor: "#2591cc",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" },
        icon: "info",
        title: "Ajouter un nouveau type d'h\xE9bergement...",
        html: '<input id="swal-input1" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return document.getElementById("swal-input1").value;
        }
      });
      req.name = formValues;
      if (formValues) {
        axios.post("api/addTypeLogement/", req, config).then((response2) => {
          this.getTypeLogement();
        });
        Swal.fire({
          actions: "success",
          icon: "success",
          title: "Type d'h\xE9bergement ajout\xE9",
          confirmButtonColor: "#272a2c",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" }
        });
      } else {
        Swal.fire({
          actions: "error",
          icon: "error",
          title: "Type non ajout\xE9",
          confirmButtonColor: "#272a2c",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" }
        });
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Aucune mofidication effectu\xE9e",
          showConfirmButton: false,
          timer: 1e3
        });
      }
    },
    getTypeLogement() {
      this.typesLogement = [];
      axios.get("/api/getTypeLogement").then((response2) => {
        response2.data.typesLogement.forEach((element) => {
          if (element.name != "Autre")
            this.typesLogement.push(element);
        });
        response2.data.typesLogement.forEach((element) => {
          if (element.name == "Autre")
            this.typesLogement.push(element);
        });
      }).catch((err) => {
      });
    },
    deleteAnnonce(id2) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer cette annonce ?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteAnnonceAux(id2);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Annonce \xE0 \xE9t\xE9 bien suprim\xE9e",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    deleteAnnonceAux(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      axios.delete("api/deleteAnnonce/" + id2, config).then((result) => {
        this.getAnnonces();
      }).catch((err) => {
      });
    },
    getAnnonces() {
      this.annonces = [];
      axios.get("api/getAnnonces").then((response2) => {
        response2.data.annoncesOrdered.forEach((element) => {
          this.typesLogement.forEach((elementaux) => {
            if (elementaux.id == element.type_logement_id) {
              element.typeLogement = elementaux.name;
            }
          });
          this.annonces.push(element);
        });
      });
    },
    orderByChanged() {
      this.sortValue = this.sortValue;
      this.typeLogementCh = "";
      this.titreChFiltre = "";
    },
    typeLogementCount(ch) {
      let typeLogementCount = 0;
      if (ch != "") {
        this.annonces.forEach((element) => {
          if (element.typeLogement == ch) {
            typeLogementCount++;
          }
        });
        return typeLogementCount;
      }
      if (ch == "") {
        return this.annonces.length;
      }
    },
    showMoreAction() {
      this.limitCardsShowen += 4;
    },
    deleteNotificationAux(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      axios.delete("api/deleteNotification/" + id2, config).then((result) => {
        this.getUserNotifications();
      });
    },
    deleteNotification(id2) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer cette notification ?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteNotificationAux(id2);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Notification \xE0 \xE9t\xE9 bien suprim\xE9e",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    changeNotificationReadingState() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let aux = {
        id: localStorage.getItem("userId")
      };
      axios.post("api/changeNotificationReadAt", aux, config).then((response2) => {
      }).catch((err) => {
      });
    },
    getUserNotifications() {
      this.newNotificationsCheckCount = 0;
      this.notifications = [];
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.admin.id = localStorage.getItem("userId");
      axios.post("/api/getUserNotifications", this.admin, config).then((response2) => {
        if (response2.data.notifications.length > 0) {
          response2.data.notifications.forEach((element) => {
            if (element.read_at == null) {
              this.newNotificationsCheck = true;
              this.newNotificationsCheckCount++;
            }
            response2.data.avatars.forEach((elAux) => {
              console.log("avatarsavatarsavatars :   ", element, elAux);
              if (elAux.user_id == element.from_id) {
                element.avatar = elAux;
              }
            });
            this.notifications.push(element);
          });
        }
        if (response2.data.from_users.length > 0) {
          response2.data.from_users.forEach((element, key) => {
            this.notifications[key].from_users = element;
          });
        }
      }).catch((err) => {
      });
    },
    windowStepFunction(x) {
      this.windowStep = x;
      localStorage.setItem("windowStep", x);
      let windowWidth = window.innerWidth;
      if (windowWidth < 820) {
        this.$router.go();
      }
      if (x == 2) {
        this.changeMessageReadingState();
      }
      if (x == 3) {
        this.changeNotificationReadingState();
      }
    },
    getOwnerIdToDelete(id2) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer ce compte Host?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUserProfile(id2);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Propri\xE9taire \xE0 \xE9t\xE9 bien suprim\xE9",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    getClientIdToDelete(id2) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer le client?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUserProfile(id2);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Client \xE0 \xE9t\xE9 bien suprim\xE9",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    deleteUserProfile(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      axios.delete("api/deleteUser/" + id2, config).then((result) => {
        this.getModerateursInfo();
        this.getAdminsInfo();
        this.getOwnersInfo();
        this.getClientsInfo();
      });
    },
    addAdmin() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.admin.role = "admin";
      axios.post("/api/signupClient", this.admin, config).then((response2) => {
        if (response2.data.status == "invalid") {
          this.adminsErrors.firstname = "";
          this.adminsErrors.email = "";
          this.adminsErrors.password = "";
          this.adminsErrors.lastname = "";
        } else if (response2.data.status == "true") {
          Swal.fire("Bon travail!", "Administrateur cr\xE9e", "success");
          this.admin = {
            lastname: "",
            firstname: "",
            email: "",
            password: "",
            role: "admin"
          };
          $("#addAdmin").hide();
          $("body").removeClass("modal-open");
          $(".modal-backdrop").remove();
          this.getAdminsInfo();
        } else {
          this.adminsErrors.firstname = "";
          this.adminsErrors.email = "";
          this.adminsErrors.password = "";
          this.adminsErrors.lastname = "";
        }
      }).catch((error) => {
        var _a, _b, _c, _d;
        if (error.response) {
          if (error.response.data.errors) {
            if (error.response.data.errors.firstname) {
              this.adminsErrors.firstname = (_a = error.response.data.errors.firstname[0]) != null ? _a : "";
            } else {
              this.adminsErrors.firstname = "";
            }
            if (error.response.data.errors.email) {
              this.adminsErrors.email = (_b = error.response.data.errors.email[0]) != null ? _b : "";
            } else {
              this.adminsErrors.email = "";
            }
            if (error.response.data.errors.password) {
              this.adminsErrors.password = (_c = error.response.data.errors.password[0]) != null ? _c : "";
            } else {
              this.adminsErrors.password = "";
            }
            if (error.response.data.errors.lastname) {
              this.adminsErrors.lastname = (_d = error.response.data.errors.lastname[0]) != null ? _d : "";
            } else {
              this.adminsErrors.lastname = "";
            }
          }
        }
      });
    },
    addModerateur() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.moderateur.role = "moderateur";
      axios.post("/api/signupClient", this.moderateur, config).then((response2) => {
        if (response2.data.status == "invalid") {
          this.moderateurErrors.firstname = "";
          this.moderateurErrors.email = "";
          this.moderateurErrors.password = "";
          this.moderateurErrors.lastname = "";
        } else if (response2.data.status == "true") {
          Swal.fire("Bon travail!", "Mod\xE9rateur cr\xE9e", "success");
          this.moderateur = {
            lastname: "",
            firstname: "",
            email: "",
            password: "",
            role: "moderateur"
          };
          $("#addModerateur").hide();
          $("body").removeClass("modal-open");
          $(".modal-backdrop").remove();
          this.getModerateursInfo();
        } else {
          this.moderateurErrors.firstname = "";
          this.moderateurErrors.email = "";
          this.moderateurErrors.password = "";
          this.moderateurErrors.lastname = "";
        }
      }).catch((error) => {
        var _a, _b, _c, _d;
        if (error.response) {
          if (error.response.data.errors) {
            if (error.response.data.errors.firstname) {
              this.moderateurErrors.firstname = (_a = error.response.data.errors.firstname[0]) != null ? _a : "";
            } else {
              this.moderateurErrors.firstname = "";
            }
            if (error.response.data.errors.email) {
              this.moderateurErrors.email = (_b = error.response.data.errors.email[0]) != null ? _b : "";
            } else {
              this.moderateurErrors.email = "";
            }
            if (error.response.data.errors.password) {
              this.moderateurErrors.password = (_c = error.response.data.errors.password[0]) != null ? _c : "";
            } else {
              this.moderateurErrors.password = "";
            }
            if (error.response.data.errors.lastname) {
              this.moderateurErrors.lastname = (_d = error.response.data.errors.lastname[0]) != null ? _d : "";
            } else {
              this.moderateurErrors.lastname = "";
            }
          }
        }
      });
    },
    hasError(item) {
      if (this.adminsErrors[item] != "") {
        return true;
      } else {
        return false;
      }
    },
    hasErrorModerateur(item) {
      if (this.moderateurErrors[item] != "") {
        return true;
      } else {
        return false;
      }
    },
    getClientsInfo() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.admin.role = "client";
      axios.post("api/getUserByRole", this.admin, config).then((response2) => {
        this.clients = [];
        response2.data.users.forEach((element) => {
          this.clients.push(element);
        });
      });
    },
    getOwnersInfo() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.admin.role = "owner";
      axios.post("api/getUserByRole", this.admin, config).then((response2) => {
        this.owners = [];
        response2.data.users.forEach((element) => {
          this.owners.push(element);
        });
      });
    },
    getAdminsInfo() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.admin.role = "admin";
      axios.post("api/getUserByRole", this.admin, config).then((response2) => {
        this.admins = [];
        response2.data.users.forEach((element) => {
          this.admins.push(element);
        });
      });
    },
    getAdminIdToDelete(x) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer ce compte d'administrateur?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUserProfile(id);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Compte administrateur \xE0 \xE9t\xE9 bien suprim\xE9",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    getModerateurIdToDelete(x) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer ce compte de mod\xE9rateur?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUserProfile(id);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Compte mod\xE9rateur \xE0 \xE9t\xE9 bien suprim\xE9",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    resetFormValues() {
      this.admin = {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "admin"
      };
      this.moderateur = {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "moderateur",
        id: ""
      };
    },
    getModerateursInfo() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.moderateur.role = "moderateur";
      axios.post("api/getUserByRole", this.moderateur, config).then((response2) => {
        this.moderateurs = [];
        response2.data.users.forEach((element) => {
          this.moderateurs.push(element);
        });
      });
    },
    getModerateurInfo(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      this.moderateurIdToUpdate.id = id2;
      axios.post("api/getUser", this.moderateurIdToUpdate, config).then((response2) => {
        this.moderateur.lastname = response2.data.user[0].lastname;
        this.moderateur.firstname = response2.data.user[0].lastname;
        this.moderateur.email = response2.data.user[0].email;
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="content"><div class="dashboardContainer"><div class="leftSideBarDashboard"><ul class="leftSideBarUl"><li class="${ssrRenderClass([$data.windowStep == 1 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-tachometer-alt sideBarLinkIcon"></i><span>Dashboard</span></li><li class="${ssrRenderClass([$data.windowStep == 3 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-bell sideBarLinkIcon"></i><span>Notifications</span>`);
  if ($data.newNotificationsCheck) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 7 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-digital-tachograph sideBarLinkIcon"></i><span>Annonces</span></li><li class="${ssrRenderClass([$data.windowStep == 8 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-cogs sideBarLinkIcon"></i><span>Propri\xE9t\xE9s logement</span></li><li class="${ssrRenderClass([$data.windowStep == 10 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-clock sideBarLinkIcon"></i><span>Historiques</span></li><li class="${ssrRenderClass([$data.windowStep == 4 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-users sideBarLinkIcon"></i><span>Administrateurs</span></li><li class="${ssrRenderClass([$data.windowStep == 11 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-users sideBarLinkIcon"></i><span>mod\xE9rateurs</span></li><li class="${ssrRenderClass([$data.windowStep == 5 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-users sideBarLinkIcon"></i><span>Propri\xE9taires</span></li><li class="${ssrRenderClass([$data.windowStep == 6 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-users sideBarLinkIcon"></i><span>Clients</span></li></ul></div><div class="leftSideBarDashboardMobile"><div class="expand-collapse"><img src="https://img.icons8.com/material-sharp/40/FFFFFF/circled-menu.png"><div><ul class="leftSideBarUl"><li class="${ssrRenderClass([$data.windowStep == 1 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-tachometer-alt sideBarLinkIcon"></i><span>Dashboard</span></li><li class="${ssrRenderClass([$data.windowStep == 3 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-bell sideBarLinkIcon"></i><span>Notifications</span>`);
  if ($data.newNotificationsCheck) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 7 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-digital-tachograph sideBarLinkIcon"></i><span>Annonces</span></li><li class="${ssrRenderClass([$data.windowStep == 8 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-cogs sideBarLinkIcon"></i><span>Propri\xE9t\xE9s logement</span></li><li class="${ssrRenderClass([$data.windowStep == 10 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-clock sideBarLinkIcon"></i><span>Historiques</span></li><li class="${ssrRenderClass([$data.windowStep == 4 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-users sideBarLinkIcon"></i><span>Administrateurs</span></li><li class="${ssrRenderClass([$data.windowStep == 11 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-users sideBarLinkIcon"></i><span>mod\xE9rateurs</span></li><li class="${ssrRenderClass([$data.windowStep == 5 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-users sideBarLinkIcon"></i><span>Propri\xE9taires</span></li><li class="${ssrRenderClass([$data.windowStep == 6 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-users sideBarLinkIcon"></i><span>Clients</span></li></ul></div></div></div><div class="rightSideDashboard">`);
  if ($data.windowStep == 1) {
    _push(`<div class="dashboardStep"><section><dl><dt>Visiteurs</dt><dd>69</dd></dl><dl><dt>Annonces</dt><dd>96</dd></dl><dl><dt>R\xE9servations</dt><dd>66</dd></dl><dl><dt>B\xE9n\xE9fice</dt><dd>99</dd></dl></section></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 3) {
    _push(`<div class="NotificationsStep">`);
    if ($data.notifications.length > 0) {
      _push(`<div class="rowNotification notification-container"><p class="dismiss text-right"><a id="dismiss-all">Notifications</a><a>Vous avez ${ssrInterpolate($data.newNotificationsCheckCount)} nouvelle(s) notification(s) </a></p><!--[-->`);
      ssrRenderList($data.notifications, (notification, key) => {
        _push(`<div class="${ssrRenderClass([!notification.read_at ? "cardReadStateTrue" : "cardReadStateFalse", "card notification-card"])}"><div class="card-body"><table><tr><td style="${ssrRenderStyle({ "width": "100%" })}"><div class="card-title"><img class="avatarNotification"${ssrRenderAttr("src", "/uploads/" + notification.avatar.path + "/" + notification.avatar.name)} alt=""><div><b>${ssrInterpolate(notification.from_users[0].lastname)} ${ssrInterpolate(notification.from_users[0].firstname)}</b><br> ${ssrInterpolate(notification.content)}<br> <span>${ssrInterpolate(notification.created_at)}</span></div>`);
        if (!notification.read_at) {
          _push(`<div><i class="${ssrRenderClass([!notification.read_at ? "notificationDashboardReadingStateFalse" : "", "fas fa-exclamation-circle notificationDashboardDesign"])}"></i></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td style="${ssrRenderStyle({ "width": "10%", "display": "flex", "justify-content": "center", "align-items": "center" })}"><a class="dismiss-notification"><i class="fas fa-trash"></i></a>`);
        _push(ssrRenderComponent(_component_router_link, {
          target: "_blank",
          to: notification.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="link-notification"${_scopeId}><i class="fas fa-link"${_scopeId}></i></a>`);
            } else {
              return [
                createVNode("a", { class: "link-notification" }, [
                  createVNode("i", { class: "fas fa-link" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr></table></div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "column", "height": "600px" })}"><h3>0 Notifications</h3><img style="${ssrRenderStyle({ "width": "30%" })}"${ssrRenderAttr("src", _imports_0$2)} alt=""></div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 4) {
    _push(`<div class="adminsStep"><h1 style="${ssrRenderStyle({ "color": "black", "margin-left": "26px" })}"> G\xE9rez les administrateurs ( ${ssrInterpolate($data.admins.length)} ) </h1><div class="con" style="${ssrRenderStyle({ "padding": "5px 5px" })}"><div class="userCardProfileDashboard"><!--[-->`);
    ssrRenderList($data.admins, (adminAux, key) => {
      _push(`<div class="userCardProfileDashboardCard"><div class="cover-photo">`);
      if (adminAux.user_avatar) {
        _push(`<img${ssrRenderAttr(
          "src",
          "/uploads/" + adminAux.user_avatar.path + "/" + adminAux.user_avatar.name
        )}>`);
      } else {
        _push(`<!---->`);
      }
      if (!adminAux.user_avatar) {
        _push(`<img${ssrRenderAttr("src", _imports_1)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h3 class="userCardProfileDashboardName">${ssrInterpolate(adminAux.lastname)} ${ssrInterpolate(adminAux.firstname)}</h3>`);
      if (adminAux.user_info) {
        _push(`<p class="userCardProfileDashboardAbout"> Informations <br> ${ssrInterpolate(adminAux.user_info.address)} `);
        if (adminAux.user_info.compAddress) {
          _push(`<span><br> ${ssrInterpolate(adminAux.user_info.compAddress)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<br> ${ssrInterpolate(adminAux.user_info.city)} ${ssrInterpolate(adminAux.user_info.postalCode)} <br> ${ssrInterpolate(adminAux.user_info.country)} <br><br> Contact <br> ${ssrInterpolate(adminAux.email)} <br> ${ssrInterpolate(adminAux.user_info.phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!adminAux.user_info) {
        _push(`<p class="userCardProfileDashboardAbout"> Contact <br> ${ssrInterpolate(adminAux.email)} <br></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="userCardProfileDashboardBtn"> Supprimer </span><div class="userCardProfileDashboardIcons">`);
      if (adminAux.user_info) {
        _push(`<a${ssrRenderAttr("href", "tel:" + adminAux.user_info.phone)}><i class="fas fa-phone-alt"></i></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", "mailto:" + adminAux.email)}><i class="fas fa-envelope"></i></a><a><i class="fas fa-comments"></i></a></div></div>`);
    });
    _push(`<!--]--><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "width": "100%", "align-items": "center", "height": "33vw" })}"><a data-bs-toggle="modal" data-bs-target="#addAdmin"><i style="${ssrRenderStyle({ "font-size": "33px", "cursor": "pointer", "color": "#20c997" })}" class="fas fa-plus-circle"></i></a></div></div></div><div id="addAdmin" class="modal fade"><div class="modal-dialog"><div class="modal-content addModalDiv"><form><div class="modal-header"><h4 class="modal-title">Nouveau administrateur</h4><button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true"> \xD7 </button></div><div class="modal-body"><div class="form-group"><label>Nom</label><input class="${ssrRenderClass([$options.hasError("lastname") ? "is-invalid" : "", "form-control"])}" type="text"${ssrRenderAttr("value", $data.admin.lastname)} required></div><div class="form-group"><label>Pr\xE9nom</label><input type="text" class="${ssrRenderClass([$options.hasError("firstname") ? "is-invalid" : "", "form-control"])}"${ssrRenderAttr("value", $data.admin.firstname)} required></div><div class="form-group"><label>Email</label><input type="email" class="${ssrRenderClass([$options.hasError("email") ? "is-invalid" : "", "form-control"])}"${ssrRenderAttr("value", $data.admin.email)} required></div><div class="form-group mdpFormGroupe"><label>Mot de passe</label><input type="password" class="${ssrRenderClass([$options.hasError("password") ? "is-invalid" : "", "form-control"])}"${ssrRenderAttr("value", $data.admin.password)} name="mdp" id="mdp" placeholder=""></div><div class="form-group mdpFormGroupe"><label>R\xE9petez le mot de passe </label><input type="password" class="${ssrRenderClass([$options.hasError("password") ? "is-invalid" : "", "form-control"])}"${ssrRenderAttr("value", $data.admin.password_confirmation)} name="mdp" id="mdp" placeholder=""></div></div><div class="modal-footer"><input type="button" class="btn btn-default" data-bs-dismiss="modal" value="Annuler" style="${ssrRenderStyle({ "background-color": "#e2e2e2" })}"><input style="${ssrRenderStyle({ "background-color": "#212529" })}" type="button" class="btn btn-success" value="Ajouter"></div></form></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 11) {
    _push(`<div class="moderateurStep"><h1 style="${ssrRenderStyle({ "color": "black", "margin-left": "26px" })}"> G\xE9rez les mod\xE9rateurs ( ${ssrInterpolate($data.moderateurs.length)} ) </h1><div class="con" style="${ssrRenderStyle({ "padding": "5px 5px" })}"><div class="userCardProfileDashboard"><!--[-->`);
    ssrRenderList($data.moderateurs, (adminAux, key) => {
      _push(`<div class="userCardProfileDashboardCard"><div class="cover-photo">`);
      if (adminAux.user_avatar) {
        _push(`<img${ssrRenderAttr(
          "src",
          "/uploads/" + adminAux.user_avatar.path + "/" + adminAux.user_avatar.name
        )}>`);
      } else {
        _push(`<!---->`);
      }
      if (!adminAux.user_avatar) {
        _push(`<img${ssrRenderAttr("src", _imports_1)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h3 class="userCardProfileDashboardName">${ssrInterpolate(adminAux.lastname)} ${ssrInterpolate(adminAux.firstname)}</h3>`);
      if (adminAux.user_info) {
        _push(`<p class="userCardProfileDashboardAbout"> Informations <br> ${ssrInterpolate(adminAux.user_info.address)} `);
        if (adminAux.user_info.compAddress) {
          _push(`<span><br> ${ssrInterpolate(adminAux.user_info.compAddress)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<br> ${ssrInterpolate(adminAux.user_info.city)} ${ssrInterpolate(adminAux.user_info.postalCode)} <br> Contact <br> ${ssrInterpolate(adminAux.user_info.country)} <br><br> ${ssrInterpolate(adminAux.email)} <br> ${ssrInterpolate(adminAux.user_info.phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!adminAux.user_info) {
        _push(`<p class="userCardProfileDashboardAbout"> Contact <br> ${ssrInterpolate(adminAux.email)} <br></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="userCardProfileDashboardBtn"> Supprimer </button><div class="userCardProfileDashboardIcons">`);
      if (adminAux.user_info) {
        _push(`<a${ssrRenderAttr("href", "tel:" + adminAux.user_info.phone)}><i class="fas fa-phone-alt"></i></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", "mailto:" + adminAux.email)}><i class="fas fa-envelope"></i></a><a><i class="fas fa-comments"></i></a></div></div>`);
    });
    _push(`<!--]--><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "width": "100%", "align-items": "center", "height": "33vw" })}"><a data-bs-toggle="modal" data-bs-target="#addModerateur"><i style="${ssrRenderStyle({ "font-size": "33px", "cursor": "pointer", "color": "#20c997" })}" class="fas fa-plus-circle"></i></a></div></div></div><div id="addModerateur" class="modal fade"><div class="modal-dialog"><div class="modal-content addModalDiv"><form><div class="modal-header"><h4 class="modal-title">Nouveau moderateur</h4><button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true"> \xD7 </button></div><div class="modal-body"><div class="form-group"><label>Nom</label><input class="${ssrRenderClass([
      $options.hasErrorModerateur("lastname") ? "is-invalid" : "",
      "form-control"
    ])}" type="text"${ssrRenderAttr("value", $data.moderateur.lastname)} required></div><div class="form-group"><label>Pr\xE9nom</label><input type="text" class="${ssrRenderClass([
      $options.hasErrorModerateur("firstname") ? "is-invalid" : "",
      "form-control"
    ])}"${ssrRenderAttr("value", $data.moderateur.firstname)} required></div><div class="form-group"><label>Email</label><input type="email" class="${ssrRenderClass([
      $options.hasErrorModerateur("email") ? "is-invalid" : "",
      "form-control"
    ])}"${ssrRenderAttr("value", $data.moderateur.email)} required></div><div class="form-group mdpFormGroupe"><label>Mot de passe</label><input type="password" class="${ssrRenderClass([
      $options.hasErrorModerateur("password") ? "is-invalid" : "",
      "form-control"
    ])}"${ssrRenderAttr("value", $data.moderateur.password)} name="mdp" id="mdp" placeholder=""></div><div class="form-group mdpFormGroupe"><label>R\xE9petez le mot de passe </label><input type="password" class="${ssrRenderClass([
      $options.hasErrorModerateur("password") ? "is-invalid" : "",
      "form-control"
    ])}"${ssrRenderAttr("value", $data.moderateur.password_confirmation)} name="mdp" id="mdp" placeholder=""></div></div><div class="modal-footer"><input type="button" class="btn btn-default" data-bs-dismiss="modal" value="Annuler"><input type="button" class="btn btn-success" value="Ajouter"></div></form></div></div></div><div id="editModerateur" class="modal fade"><div class="modal-dialog"><div class="modal-content"><form><div class="modal-header"><h4 class="modal-title">Modifier moderateur</h4><button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true"> \xD7 </button></div><div class="modal-body"><div class="form-group"><label>Nom</label><input${ssrRenderAttr("value", $data.moderateur.lastname)} type="text" class="form-control" required></div><div class="form-group"><label>Pr\xE9nom</label><input${ssrRenderAttr("value", $data.moderateur.firstname)} type="text" class="form-control" required></div><div class="form-group"><label>Email</label><input${ssrRenderAttr("value", $data.moderateur.email)} type="email" class="form-control" required></div></div><div class="modal-footer"><input type="button" class="btn btn-default" data-bs-dismiss="modal" value="Annuler"><input type="button" class="btn btn-info" value="Mettre \xE0 jour"></div></form></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 5) {
    _push(`<div class="proprietaireStep"><h1 style="${ssrRenderStyle({ "color": "black", "margin-left": "26px" })}"> G\xE9rez les propri\xE9taires ( ${ssrInterpolate($data.owners.length)} ) </h1><div class="con" style="${ssrRenderStyle({ "padding": "5px 5px" })}"><div class="userCardProfileDashboard"><!--[-->`);
    ssrRenderList($data.owners, (ownerAux, key) => {
      _push(`<div class="userCardProfileDashboardCard"><div class="cover-photo">`);
      if (ownerAux.user_avatar) {
        _push(`<img${ssrRenderAttr(
          "src",
          "/uploads/" + ownerAux.user_avatar.path + "/" + ownerAux.user_avatar.name
        )}>`);
      } else {
        _push(`<!---->`);
      }
      if (!ownerAux.user_avatar) {
        _push(`<img${ssrRenderAttr("src", _imports_1)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h3 class="userCardProfileDashboardName">${ssrInterpolate(ownerAux.lastname)} ${ssrInterpolate(ownerAux.firstname)}</h3>`);
      if (ownerAux.user_info) {
        _push(`<p class="userCardProfileDashboardAbout"> Informations <br> ${ssrInterpolate(ownerAux.user_info.address)} `);
        if (ownerAux.user_info.compAddress) {
          _push(`<span><br> ${ssrInterpolate(ownerAux.user_info.compAddress)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<br> ${ssrInterpolate(ownerAux.user_info.city)} ${ssrInterpolate(ownerAux.user_info.postalCode)} <br> ${ssrInterpolate(ownerAux.user_info.country)} <br><br> Contact <br> ${ssrInterpolate(ownerAux.email)} <br> ${ssrInterpolate(ownerAux.user_info.phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!ownerAux.user_info) {
        _push(`<p class="userCardProfileDashboardAbout"> Contact <br> ${ssrInterpolate(ownerAux.email)} <br></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="userCardProfileDashboardBtn"> Supprimer </button><div class="userCardProfileDashboardIcons">`);
      if (ownerAux.user_info) {
        _push(`<a${ssrRenderAttr("href", "tel:" + ownerAux.user_info.phone)}><i class="fas fa-phone-alt"></i></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", "mailto:" + ownerAux.email)}><i class="fas fa-envelope"></i></a><a><i class="fas fa-comments"></i></a></div></div>`);
    });
    _push(`<!--]--></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 6) {
    _push(`<div class="clientsStep"><h1 style="${ssrRenderStyle({ "color": "black", "margin-left": "26px" })}"> G\xE9rez les clients ( ${ssrInterpolate($data.clients.length)} ) </h1><div class="con" style="${ssrRenderStyle({ "padding": "5px 5px" })}"><div class="userCardProfileDashboard"><!--[-->`);
    ssrRenderList($data.clients, (clientAux, key) => {
      _push(`<div class="userCardProfileDashboardCard"><div class="cover-photo">`);
      if (clientAux.user_avatar) {
        _push(`<img${ssrRenderAttr(
          "src",
          "/uploads/" + clientAux.user_avatar.path + "/" + clientAux.user_avatar.name
        )}>`);
      } else {
        _push(`<!---->`);
      }
      if (!clientAux.user_avatar) {
        _push(`<img${ssrRenderAttr("src", _imports_1)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h3 class="userCardProfileDashboardName">${ssrInterpolate(clientAux.lastname)} ${ssrInterpolate(clientAux.firstname)}</h3>`);
      if (clientAux.user_info) {
        _push(`<p class="userCardProfileDashboardAbout"> Informations <br> ${ssrInterpolate(clientAux.user_info.address)} `);
        if (clientAux.user_info.compAddress) {
          _push(`<span><br> ${ssrInterpolate(clientAux.user_info.compAddress)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<br> ${ssrInterpolate(clientAux.user_info.city)} ${ssrInterpolate(clientAux.user_info.postalCode)} <br> ${ssrInterpolate(clientAux.user_info.country)} <br><br> Contact <br> ${ssrInterpolate(clientAux.email)} <br> ${ssrInterpolate(clientAux.user_info.phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!clientAux.user_info) {
        _push(`<p class="userCardProfileDashboardAbout"> Contact <br> ${ssrInterpolate(clientAux.email)} <br></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="userCardProfileDashboardBtn"> Supprimer </button><div class="userCardProfileDashboardIcons">`);
      if (clientAux.user_info) {
        _push(`<a${ssrRenderAttr("href", "tel:" + clientAux.user_info.phone)}><i class="fas fa-phone-alt"></i></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", "mailto:" + clientAux.email)}><i class="fas fa-envelope"></i></a><a><i class="fas fa-comments"></i></a></div></div>`);
    });
    _push(`<!--]--></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 7) {
    _push(`<div class="annoncesStep"><div class="topBarAnnoncesFilter"><div class="filtersDiv"><ul class="ulTopSideBar"><li><label for=""></label><div class="form-search" method="get" action="#"><input${ssrRenderAttr("value", $data.titreChFiltre)} type="search" name="search" placeholder="Filtrer par titre"></div></li><li><label for="sortFilter">Cat\xE9gorie : </label><select class="selectSortBy" name="sortFilter" id="sortFilter"><option selected value=""> Tout <small>(${ssrInterpolate($options.typeLogementCount(""))})</small></option><!--[-->`);
    ssrRenderList($data.typesLogement, (typeLogement, key) => {
      _push(`<option${ssrRenderAttr("value", typeLogement.name)}>${ssrInterpolate(typeLogement.name)} <small>(${ssrInterpolate($options.typeLogementCount(typeLogement.name))})</small></option>`);
    });
    _push(`<!--]--></select></li><li><label for="sortFilter">Trier par :</label><select class="selectSortBy" name="sortFilter" id="sortFilter"><option value="priceAsc">Prix : Ordre croissant</option><option value="priceDesc"> Prix : Ordre d\xE9croissant </option><option value="comments"> Moyenne des commentaires client </option><option value="news" selected>Nouveaut\xE9s</option><option value="anciens" selected>Anciens</option></select></li></ul></div></div><main class="gridCardsMain"><!--[-->`);
    ssrRenderList($options.sortedAnnonces, (userAnnonce, key) => {
      _push(`<div id="containerAnnonce"><div class="product-details"><h1>${ssrInterpolate(userAnnonce.title)}</h1><h5>Localisation :</h5><ul><li><p class="information">${ssrInterpolate(userAnnonce.address)}</p></li>`);
      if (userAnnonce.compAddress) {
        _push(`<li><p class="information">${ssrInterpolate(userAnnonce.compAddress)}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li><p class="information">${ssrInterpolate(userAnnonce.city)}</p></li><li><p class="information">${ssrInterpolate(userAnnonce.postalCode)}</p></li><li><p class="information">${ssrInterpolate(userAnnonce.country)}</p></li></ul><div>`);
      _push(ssrRenderComponent(_component_router_link, {
        target: "_blank",
        to: "/updateAnnonce/?annonce_id=" + userAnnonce.id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-edit annoncesDashboardIcons annoncesDashboardIconsEdit"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-edit annoncesDashboardIcons annoncesDashboardIconsEdit" })
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<i class="fas fa-trash annoncesDashboardIcons annoncesDashboardIconsDelete"></i></div><div class="control">`);
      _push(ssrRenderComponent(_component_router_link, {
        target: "_blank",
        style: { "text-decoration": "none" },
        to: "/annonce/?id=" + userAnnonce.id,
        class: "text-secondary",
        onClick: $options.scrollToTop
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btnAnnonce"${_scopeId}><span class="priceDashboard"${_scopeId}>\u20AC ${ssrInterpolate(userAnnonce.price)}</span><span class="buy"${_scopeId}>Consulter</span></button>`);
          } else {
            return [
              createVNode("button", { class: "btnAnnonce" }, [
                createVNode("span", { class: "priceDashboard" }, "\u20AC " + toDisplayString(userAnnonce.price), 1),
                createVNode("span", { class: "buy" }, "Consulter")
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div><div class="product-image">`);
      if (userAnnonce.images[0]) {
        _push(`<img${ssrRenderAttr(
          "src",
          "uploads/" + userAnnonce.images[0].path + "/" + userAnnonce.images[0].image
        )}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="infoDiv"><ul><li><strong>Surface: </strong>${ssrInterpolate(userAnnonce.surface)} cm\xB2 </li><li><strong>Nombre de couchages: </strong>${ssrInterpolate(userAnnonce.numberOfBeds)}</li><li><strong>Capacit\xE9 d&#39;accueillement : </strong>${ssrInterpolate(userAnnonce.capacity)}</li><li><strong> Animaux autoris\xE9s : </strong>${ssrInterpolate(userAnnonce.animaux)}</li></ul></div></div></div>`);
    });
    _push(`<!--]--><div class="resultCount"><h3> Affichage de ${ssrInterpolate($options.sortedAnnonces.length)} sur ${ssrInterpolate($data.annonces.length)} r\xE9sultats </h3><button style="${ssrRenderStyle($options.sortedAnnonces.length > 0 && $data.annonces.length > $options.sortedAnnonces.length ? null : { display: "none" })}" class="btn btn-dark"> Voir plus </button></div></main></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 8) {
    _push(`<div class="propretyStep"><div class="propretyStepContainer"><div class="topBarProprety"><div class="topBarGrid"><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "width": "100%" })}"><label style="${ssrRenderStyle({ "padding": "0 35px", "font-size": "20px", "font-weight": "bold" })}">Differents types d&#39;h\xE9begement </label><div id="tasks"><!--[-->`);
    ssrRenderList($data.typesLogement, (typeLogement, key) => {
      _push(`<div style="${ssrRenderStyle($data.typesLogement.length > 0 ? null : { display: "none" })}" class="task"><span class="task-name">${ssrInterpolate(typeLogement.name)}</span></div>`);
    });
    _push(`<!--]-->`);
    if ($data.typesLogement) {
      _push(`<div class="task" style="${ssrRenderStyle({ "justify-content": "center", "border-bottom": "none", "cursor": "default" })}"><span style="${ssrRenderStyle({ "font-size": "25px", "color": "#20c997", "cursor": "pointer" })}" class="task-name"><i class="fas fa-plus-circle"></i></span></div>`);
    } else {
      _push(`<!---->`);
    }
    if (!$data.typesLogement) {
      _push(`<div class="task"><span class="task-name"> Aucun type </span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div></div><div><h3 style="${ssrRenderStyle({ "padding": "0 35px", "font-size": "25px", "font-weight": "bold" })}">Propri\xE9t\xE9s</h3><div class="comparison"><table><thead><tr><th class="tl tl2"></th><!--[-->`);
    ssrRenderList($data.typesLogement, (typeLogement, key) => {
      _push(`<th class="product productTh" style="${ssrRenderStyle({ "border-top-left-radius": "5px" })}">${ssrInterpolate(typeLogement.name)} <br></th>`);
    });
    _push(`<!--]--></tr></thead><tbody><!--[-->`);
    ssrRenderList($data.propretiesArray, (propretie, key) => {
      _push(`<tr class="compare-row"><td>${ssrInterpolate(propretie.name)} <br> Obligatoire : ${ssrInterpolate(propretie.required)}</td><!--[-->`);
      ssrRenderList($data.typesLogement, (typeLogement, key2) => {
        _push(`<td class="tableCellsManagement">`);
        if ($options.checkPropretySelectedType(typeLogement.id, propretie)) {
          _push(`<i class="fa fa-check"></i>`);
        } else {
          _push(`<span>\u2013</span>`);
        }
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
    });
    _push(`<!--]--><!--[-->`);
    ssrRenderList($data.propretiesArray, (propretie, key) => {
      _push(`<tr></tr>`);
    });
    _push(`<!--]--></tbody></table><button data-bs-toggle="modal" data-bs-target="#addPropretyForm" class="price-buy"> Ajouter une nouvelle propri\xE9t\xE9<span class="hide-mobile"></span></button></div></div><div><h3 style="${ssrRenderStyle({ "padding": "0 35px", "font-size": "25px", "font-weight": "bold" })}">Services</h3><div class="comparison"><table><thead><tr><th class="tl tl2"></th><!--[-->`);
    ssrRenderList($data.typesLogement, (typeLogement, key) => {
      _push(`<th class="product productTh" style="${ssrRenderStyle({ "border-top-left-radius": "5px" })}">${ssrInterpolate(typeLogement.name)} <br></th>`);
    });
    _push(`<!--]--></tr></thead><tbody><!--[-->`);
    ssrRenderList($data.servicesArray, (service, key) => {
      _push(`<tr class="compare-row"><td>${ssrInterpolate(service.name)}</td><!--[-->`);
      ssrRenderList($data.typesLogement, (typeLogement, key2) => {
        _push(`<td class="tableCellsManagement">`);
        if ($options.checkServiceSelectedType(typeLogement.id, service)) {
          _push(`<i class="fa fa-check"></i>`);
        } else {
          _push(`<span>\u2013</span>`);
        }
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
    });
    _push(`<!--]--><!--[-->`);
    ssrRenderList($data.servicesArray, (service, key) => {
      _push(`<tr></tr>`);
    });
    _push(`<!--]--></tbody></table><button data-bs-toggle="modal" data-bs-target="#addPropretyForm" class="price-buy"> Ajouter un service<span class="hide-mobile"></span></button></div></div><div><h3 style="${ssrRenderStyle({ "padding": "0 35px", "font-size": "25px", "font-weight": "bold" })}">Options</h3><div class="comparison"><table><thead><tr><th class="tl tl2"></th><!--[-->`);
    ssrRenderList($data.typesLogement, (typeLogement, key) => {
      _push(`<th class="product productTh" style="${ssrRenderStyle({ "border-top-left-radius": "5px" })}">${ssrInterpolate(typeLogement.name)} <br></th>`);
    });
    _push(`<!--]--></tr></thead><tbody><!--[-->`);
    ssrRenderList($data.optionsArray, (option, key) => {
      _push(`<tr class="compare-row"><td>${ssrInterpolate(option.name)}</td><!--[-->`);
      ssrRenderList($data.typesLogement, (typeLogement, key2) => {
        _push(`<td class="tableCellsManagement">`);
        if ($options.checkOptionSelectedType(typeLogement.id, option)) {
          _push(`<i class="fa fa-check"></i>`);
        } else {
          _push(`<span>\u2013</span>`);
        }
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
    });
    _push(`<!--]--><!--[-->`);
    ssrRenderList($data.optionsArray, (option, key) => {
      _push(`<tr></tr>`);
    });
    _push(`<!--]--></tbody></table><button data-bs-toggle="modal" data-bs-target="#addPropretyForm" class="price-buy"> Ajouter un option<span class="hide-mobile"></span></button></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 10) {
    _push(`<div class="historiqueReservations"> historiqueReservations </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="modal fade" id="addPropretyForm" tabindex="-1" role="dialog" aria-labelledby="addPropretyFormLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content" style="${ssrRenderStyle({ "border-radius": "50px" })}"><div class="modal-body"><div class="row rowDivContact" style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}"><div class="contactCardDiv"><div class="contact_inner"><div class="row"><div class="col-md-12"><div class="contact_form_inner"><div class="contact_field contact_fieldAux"><form>`);
  if ($data.managementAnnonceStep == 1) {
    _push(`<h6>Ajouter une nouvelle propri\xE9t\xE9</h6>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 2) {
    _push(`<h6>Ajouter un nouveau service</h6>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 3) {
    _push(`<h6>Ajouter un nouveau option</h6>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 1) {
    _push(`<input style="${ssrRenderStyle({ "width": "51%" })}"${ssrRenderAttr("value", $data.proprety.name)} required type="text" class="form-control form-group" placeholder="Ex: Hauteur">`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 2) {
    _push(`<input style="${ssrRenderStyle({ "width": "51%" })}"${ssrRenderAttr("value", $data.service.name)} required type="text" class="form-control form-group" placeholder="Ex : Salle de bain">`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 3) {
    _push(`<input style="${ssrRenderStyle({ "width": "51%" })}"${ssrRenderAttr("value", $data.option.name)} required type="text" class="form-control form-group" placeholder="Ex : Linge de lits">`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h6>Pour quel type d&#39;h\xE9bergements</h6><ul><li><div class="gender-details"><div class="checkboxPropretyForm"><!--[-->`);
  ssrRenderList($data.typesLogement, (typeLogement, key) => {
    _push(`<input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.proprety.typesLogementIds) ? ssrLooseContain($data.proprety.typesLogementIds, typeLogement.id) : $data.proprety.typesLogementIds) ? " checked" : ""} name="typeLogement"${ssrRenderAttr("value", typeLogement.id)}${ssrRenderAttr("id", "dot-" + key)}>`);
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList($data.typesLogement, (typeLogement, key) => {
    _push(`<div class="category"><label${ssrRenderAttr("for", "dot-" + key)}><span class="${ssrRenderClass(["label" + key, "dot"])}"></span><span class="gender">${ssrInterpolate(typeLogement.name)}</span></label></div>`);
  });
  _push(`<!--]--></div></div></li></ul>`);
  if ($data.managementAnnonceStep == 1) {
    _push(`<h6>Obligatoire ou non ?</h6>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 1) {
    _push(`<ul><li><div class="gender-details"><div class="checkboxPropretyForm"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.proprety.required, "Oui")) ? " checked" : ""} name="requiredInput" value="Oui" id="radioAnimaux1" required><div class="category"><label for="radioAnimaux1"><span class="dot oneAnimaux"></span><span class="gender">Oui</span></label></div><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual($data.proprety.required, "Non")) ? " checked" : ""} name="requiredInput" value="Non" id="radioAnimaux2"><div class="category"><label for="radioAnimaux2"><span class="dot twoAnimaux"></span><span class="gender">Non</span></label></div></div></div></li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="btnDivFormPro">`);
  if ($data.managementAnnonceStep == 1) {
    _push(`<button type="submit" class="contact_form_submit contact_form_submitAux"> Ajouter </button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 2) {
    _push(`<button type="submit" class="contact_form_submit contact_form_submitAux"> Ajouter </button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 3) {
    _push(`<button type="submit" class="contact_form_submit contact_form_submitAux"> Ajouter </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form></div></div></div></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/adminConnectedPages/dashboard.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const dashboardAdmin = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const dashboard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = {
  data() {
    return {
      annonces: [],
      userRole: "",
      windowStep: 1,
      token: "",
      connectedUser: {
        email: ""
      },
      notifications: [],
      notificationsAvatars: [],
      from_users: [],
      newNotificationsCheck: false,
      newNotificationsCheckCount: 0,
      limitCardsShowen: 4,
      titreChFiltre: "",
      typeLogementCh: "",
      sortValue: "news",
      typeLogementArray: [],
      typesLogement: []
    };
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.connectedUser.email = localStorage.getItem("useremail");
    console.log(this.token);
    this.windowStep = localStorage.getItem("windowStep");
    this.userRole = localStorage.getItem("userRole");
    if (localStorage.getItem("token") != "") {
      if (this.userRole != "moderateur") {
        this.$router.push({ path: "/" });
      } else if (this.userRole == "moderateur") {
        this.$router.push({ path: "/dashboardModerateur" });
      }
    } else {
      this.$router.push({ path: "/se-connecter" });
    }
    this.getTypeLogement();
    this.getUserNotifications();
    this.getAnnonces();
  },
  computed: {
    sortedAnnonces() {
      if (this.titreChFiltre != "") {
        this.limitCardsShowen = 1e4;
        this.sortValue = "news";
        return this.annonces.filter((item, index) => {
          return this.titreChFiltre.toLowerCase().split(" ").every((v) => {
            if (this.typeLogementCh != "") {
              return item.typeLogement.includes(this.typeLogementCh) && item.title.toLowerCase().includes(v);
            } else {
              return item.title.toLowerCase().includes(v);
            }
          });
        }).sort(this.orderBy);
      } else {
        if (this.sortValue == "news") {
          return this.annonces.sort((a, b) => {
            return a.id < b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "anciens") {
          return this.annonces.sort((a, b) => {
            return a.id > b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceAsc") {
          return this.annonces.sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceDesc") {
          return this.annonces.sort((a, b) => {
            return parseInt(a.price) < parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else {
          return this.annonces;
        }
      }
    }
  },
  methods: {
    getTypeLogement() {
      this.typesLogement = [];
      axios.get("/api/getTypeLogement").then((response2) => {
        console.log("");
        response2.data.typesLogement.forEach((element) => {
          this.typesLogement.push(element);
        });
      }).catch((err) => {
      });
    },
    showMoreAction() {
      this.limitCardsShowen += 4;
    },
    typeLogementCount(ch) {
      let typeLogementCount = 0;
      if (ch != "") {
        this.annonces.forEach((element) => {
          if (element.typeLogement == ch) {
            typeLogementCount++;
          }
        });
        return typeLogementCount;
      }
      if (ch == "") {
        return this.annonces.length;
      }
    },
    orderByChanged() {
      this.sortValue = this.sortValue;
      this.typeLogementCh = "";
      this.titreChFiltre = "";
    },
    getAnnonces() {
      this.annonces = [];
      axios.get("api/getAnnonces").then((response2) => {
        response2.data.annoncesOrdered.forEach((element) => {
          this.typesLogement.forEach((elementaux) => {
            console.log("elementaux: ", element);
            if (elementaux.id == element.type_logement_id) {
              element.typeLogement = elementaux.name;
            }
          });
          this.annonces.push(element);
          this.typeLogementArray.push(element.typeLogement);
        });
      });
    },
    deleteAnnonce(id2) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer cette annonce ?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteAnnonceAux(id2);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Annonce \xE0 \xE9t\xE9 bien suprim\xE9e",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    deleteAnnonceAux(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      axios.delete("api/deleteAnnonce/" + id2, config).then((result) => {
        this.getAnnonces();
      }).catch((err) => {
      });
    },
    deleteNotificationAux(id2) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      console.log("id ::   ", id2);
      axios.delete("api/deleteNotification/" + id2, config).then((result) => {
        this.getUserNotifications();
      });
    },
    deleteNotification(id2) {
      Swal.fire({
        title: "\xCAtes-vous s\xFBr de vouloir supprimer cette notification ?",
        text: "Cette action ne peut pas \xEAtre annul\xE9e.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",
        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteNotificationAux(id2);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Notification \xE0 \xE9t\xE9 bien suprim\xE9e",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        }
      });
    },
    changeNotificationReadingState() {
      console.log("noooootttttiiiiii");
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let aux = {
        id: localStorage.getItem("userId")
      };
      axios.post("api/changeNotificationReadAt", aux, config).then((response2) => {
      }).catch((err) => {
      });
    },
    getUserNotifications() {
      this.notifications = [];
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let user = { id: localStorage.getItem("userId") };
      axios.post("/api/getUserNotifications", user, config).then((response2) => {
        if (response2.data.notifications.length > 0) {
          response2.data.notifications.forEach((element) => {
            response2.data.avatars.forEach((elAux) => {
              console.log("avatarsavatarsavatars :   ", element, elAux);
              if (elAux.user_id == element.from_id) {
                element.avatar = elAux;
              }
            });
            this.notifications.push(element);
            if (element.read_at == null) {
              this.newNotificationsCheckCount++;
              this.newNotificationsCheck = true;
            }
          });
        }
        console.log("notifications  dfdfdf:   ", this.notifications);
        if (response2.data.from_users.length > 0) {
          response2.data.from_users.forEach((element, key) => {
            console.log("hahaha");
            this.notifications[key].from_users = element;
          });
        }
        console.log("element :: ", this.notificationsAvatars.length);
      });
    },
    windowStepFunction(x) {
      let windowWidth = window.innerWidth;
      if (windowWidth < 820) {
        this.$router.go();
      }
      this.windowStep = x;
      localStorage.setItem("windowStep", x);
      if (x == 2) {
        this.changeNotificationReadingState();
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="content"><div class="dashboardContainer"><div class="leftSideBarDashboard"><ul class="leftSideBarUl"><li class="${ssrRenderClass([$data.windowStep == 1 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-tachometer-alt sideBarLinkIcon"></i><span>Dashboard</span></li><li class="${ssrRenderClass([$data.windowStep == 2 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-bell sideBarLinkIcon"></i><span>Notifications</span>`);
  if ($data.newNotificationsCheck) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 3 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-digital-tachograph sideBarLinkIcon"></i><span>Annonces</span></li><li class="${ssrRenderClass([$data.windowStep == 4 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-clock sideBarLinkIcon"></i><span>Historiques</span></li></ul></div><div class="leftSideBarDashboardMobile"><div class="expand-collapse"><img src="https://img.icons8.com/material-sharp/40/FFFFFF/circled-menu.png"><div><ul class="leftSideBarUl"><li class="${ssrRenderClass([$data.windowStep == 1 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-tachometer-alt sideBarLinkIcon"></i><span>Dashboard</span></li><li class="${ssrRenderClass([$data.windowStep == 2 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-bell sideBarLinkIcon"></i><span>Notifications</span>`);
  if ($data.newNotificationsCheck) {
    _push(`<span class="red statusRed"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="${ssrRenderClass([$data.windowStep == 3 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-digital-tachograph sideBarLinkIcon"></i><span>Annonces</span></li><li class="${ssrRenderClass([$data.windowStep == 4 ? "sideBarLinkActive" : "", "sideBarLink"])}"><i class="fas fa-clock sideBarLinkIcon"></i><span>Historiques</span></li></ul></div></div></div><div class="rightSideDashboard">`);
  if ($data.windowStep == 1) {
    _push(`<div class="dashboardStep"><section><dl><dt>Visiteurs</dt><dd>69</dd></dl><dl><dt>Annonces</dt><dd>96</dd></dl><dl><dt>R\xE9servations</dt><dd>66</dd></dl><dl><dt>B\xE9n\xE9fice</dt><dd>99</dd></dl></section></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 2) {
    _push(`<div>`);
    if ($data.notifications.length > 0) {
      _push(`<div class="rowNotification notification-container"><p class="dismiss text-right"><a id="dismiss-all">Notifications</a><a>Vous avez ${ssrInterpolate($data.newNotificationsCheckCount)} nouvelle(s) notification(s) </a></p><!--[-->`);
      ssrRenderList($data.notifications, (notification, key) => {
        _push(`<div class="${ssrRenderClass([!notification.read_at ? "cardReadStateTrue" : "cardReadStateFalse", "card notification-card"])}"><div class="card-body"><table><tr><td style="${ssrRenderStyle({ "width": "100%" })}"><div class="card-title"><img class="avatarNotification"${ssrRenderAttr("src", "/uploads/" + notification.avatar.path + "/" + notification.avatar.name)} alt=""><div><b>${ssrInterpolate(notification.from_users[0].lastname)} ${ssrInterpolate(notification.from_users[0].firstname)}</b><br> ${ssrInterpolate(notification.content)}<br> <span>${ssrInterpolate(notification.created_at)}</span></div>`);
        if (!notification.read_at) {
          _push(`<div><i class="${ssrRenderClass([!notification.read_at ? "notificationDashboardReadingStateFalse" : "", "fas fa-exclamation-circle notificationDashboardDesign"])}"></i></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td style="${ssrRenderStyle({ "width": "10%", "display": "flex", "justify-content": "center", "align-items": "center" })}"><a class="dismiss-notification"><i class="fas fa-trash"></i></a>`);
        _push(ssrRenderComponent(_component_router_link, {
          target: "_blank",
          to: notification.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="link-notification"${_scopeId}><i class="fas fa-link"${_scopeId}></i></a>`);
            } else {
              return [
                createVNode("a", { class: "link-notification" }, [
                  createVNode("i", { class: "fas fa-link" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr></table></div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "column", "height": "600px" })}"><h3>0 Notifications</h3><img style="${ssrRenderStyle({ "width": "30%" })}"${ssrRenderAttr("src", _imports_0$2)} alt=""></div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 3) {
    _push(`<div class="annoncesStep"><div class="topBarAnnoncesFilter"><div class="filtersDiv"><ul class="ulTopSideBar"><li><label for=""></label><div class="form-search" method="get" action="#"><input${ssrRenderAttr("value", $data.titreChFiltre)} type="search" name="search" placeholder="Filtrer par titre"></div></li><li><label for="sortFilter">Cat\xE9gorie : </label><select class="selectSortBy" name="sortFilter" id="sortFilter"><option selected value=""> Tout <small>(${ssrInterpolate($options.typeLogementCount(""))})</small></option><!--[-->`);
    ssrRenderList($data.typesLogement, (typeLogement, key) => {
      _push(`<option${ssrRenderAttr("value", typeLogement.name)}>${ssrInterpolate(typeLogement.name)} <small>(${ssrInterpolate($options.typeLogementCount(typeLogement.name))})</small></option>`);
    });
    _push(`<!--]--></select></li><li><label for="sortFilter">Trier par :</label><select class="selectSortBy" name="sortFilter" id="sortFilter"><option value="priceAsc">Prix : Ordre croissant</option><option value="priceDesc">Prix : Ordre d\xE9croissant</option><option value="comments"> Moyenne des commentaires client </option><option value="news" selected>Nouveaut\xE9s</option><option value="anciens" selected>Anciens</option></select></li></ul></div></div><main class="gridCardsMain"><!--[-->`);
    ssrRenderList($options.sortedAnnonces, (userAnnonce, key) => {
      _push(`<div id="containerAnnonce"><div class="product-details"><h1>${ssrInterpolate(userAnnonce.title)}</h1><h5>Localisation : </h5><ul><li><p class="information">${ssrInterpolate(userAnnonce.address)}</p></li>`);
      if (userAnnonce.compAddress) {
        _push(`<li><p class="information">${ssrInterpolate(userAnnonce.compAddress)}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li><p class="information">${ssrInterpolate(userAnnonce.city)}</p></li><li><p class="information">${ssrInterpolate(userAnnonce.postalCode)}</p></li><li><p class="information">${ssrInterpolate(userAnnonce.country)}</p></li></ul><div>`);
      _push(ssrRenderComponent(_component_router_link, {
        target: "_blank",
        to: "/updateAnnonce/?annonce_id=" + userAnnonce.id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-edit annoncesDashboardIcons annoncesDashboardIconsEdit"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-edit annoncesDashboardIcons annoncesDashboardIconsEdit" })
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<i class="fas fa-trash annoncesDashboardIcons annoncesDashboardIconsDelete"></i></div><div class="control">`);
      _push(ssrRenderComponent(_component_router_link, {
        target: "_blank",
        style: { "text-decoration": "none" },
        to: "/annonce/?id=" + userAnnonce.id,
        class: "text-secondary",
        onClick: $options.scrollToTop
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btnAnnonce"${_scopeId}><span class="priceDashboard"${_scopeId}>\u20AC ${ssrInterpolate(userAnnonce.price)}</span><span class="buy"${_scopeId}>Consulter</span></button>`);
          } else {
            return [
              createVNode("button", { class: "btnAnnonce" }, [
                createVNode("span", { class: "priceDashboard" }, "\u20AC " + toDisplayString(userAnnonce.price), 1),
                createVNode("span", { class: "buy" }, "Consulter")
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div><div class="product-image"><!--[-->`);
      ssrRenderList(userAnnonce.images, (userAnnonceImage, key2) => {
        _push(`<img style="${ssrRenderStyle(userAnnonceImage.default == "true" ? null : { display: "none" })}"${ssrRenderAttr("src", "uploads/" + userAnnonceImage.path + "/" + userAnnonceImage.image)}>`);
      });
      _push(`<!--]--><div class="infoDiv"><ul><li><strong>Surface: </strong>${ssrInterpolate(userAnnonce.surface)} cm\xB2</li><li><strong>Nombre de couchages: </strong>${ssrInterpolate(userAnnonce.numberOfBeds)}</li><li><strong>Capacit\xE9 d&#39;accueillement : </strong>${ssrInterpolate(userAnnonce.capacity)}</li><li><strong> Animaux autoris\xE9s : </strong>${ssrInterpolate(userAnnonce.animaux)}</li></ul></div></div></div>`);
    });
    _push(`<!--]--><div class="resultCount"><h3> Affichage de ${ssrInterpolate($options.sortedAnnonces.length)} sur ${ssrInterpolate($data.annonces.length)} r\xE9sultats </h3><button style="${ssrRenderStyle($options.sortedAnnonces.length > 0 && $data.annonces.length > $options.sortedAnnonces.length ? null : { display: "none" })}" class="btn btn-dark">Voir plus</button></div></main></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowStep == 5) {
    _push(`<div class="historiqueReservations"> historiqueReservations </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/moderateurConnectedPages/dashboard.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const dashboardModerateur = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const carousel = "";
const main = "";
const loadingPage_vue_vue_type_style_index_0_scoped_f3b1f9af_lang = "";
const _sfc_main$b = {
  data() {
    return {};
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f3b1f9af><div class="loader" data-v-f3b1f9af><span class="spinner spinner1" data-v-f3b1f9af></span><span class="spinner spinner2" data-v-f3b1f9af></span><span class="spinner spinner3" data-v-f3b1f9af></span><br data-v-f3b1f9af><span class="loader-text" data-v-f3b1f9af>Charegement...</span></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/loadingPage/loadingPage.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const loadingPage = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-f3b1f9af"]]);
const _imports_0 = "/build/assets/homeAnnonceRandom.39cc47d2.svg";
const annonce_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    StarRating,
    Datepicker,
    loadingPage
  },
  data() {
    const format = (date2) => {
      let dates = [];
      date2.forEach((element) => {
        let day = element.getDate();
        let month = element.getMonth() + 1;
        const year = element.getFullYear();
        if (month < 10) {
          month = `0${month}`;
        }
        if (day < 10) {
          day = `0${day}`;
        }
        dates.push(`${day}/${month}/${year}`);
      });
      return dates;
    };
    const date = ref();
    return {
      loading: true,
      date,
      format,
      disabledDates: [new Date("2022/12/22")],
      annonceId: {
        id: 0
      },
      annonce: "",
      images: [],
      el: "#tabs",
      activetab: 1,
      logementServices: {},
      optionLogement: {},
      nightsCount: 1,
      animauxSupp: false,
      inclusiveSupp: false,
      pdjSupp: false,
      reservationSum: 0,
      verifyState: true,
      booking: {
        dateCheckIn: ""
      },
      bookingPaymentMethodStep: 1,
      annonces: [],
      imagesAnnoncesAux: [],
      srcImagesArray: [],
      imageIndex: 0,
      settings: {
        itemsToShow: 1,
        snapAlign: "start"
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
          snapAlign: "start"
        },
        1124: {
          itemsToShow: 2,
          snapAlign: "start"
        }
      },
      currentSlide: 0,
      owner: {
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        address: "",
        compAddress: "",
        postalCode: "",
        city: "",
        country: "France",
        token: "",
        email_verified_at: ""
      },
      user: {
        id: "",
        token: "",
        avatar: ""
      },
      loggedIn: false,
      likeAnnoncePageAlreadyLiked: false,
      likes: [],
      indisponibilities: [],
      indisponibilitiesArray: [],
      reservations: [],
      dateRangeLength: 0,
      disableDatesInReserversationCheck: false,
      dateFormatAux: ""
    };
  },
  mounted() {
    this.user.id = localStorage.getItem("userId");
    this.user.userRole = localStorage.getItem("userRole");
    if (localStorage.getItem("token") != "") {
      this.user.token = localStorage.getItem("token");
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      this.$router.push({ path: "/se-connecter" });
    }
    this.annonceId.id = this.$route.query.id;
    console.log("annoncePage :::: id = ", this.annonceId);
    this.annonces = [];
    this.getAnnonce();
    this.getAnnonces();
    this.owner.token = localStorage.getItem("token");
    this.getLikesForAnnonce();
    this.getIndisponibilities();
    this.getReservationByAnnonce();
  },
  methods: {
    typeLogementForAnnonce() {
      let req = {
        id: this.annonce[0].type_logement_id
      };
      axios.post("api/typeLogementForAnnonce", req).then((response2) => {
        this.annonce[0].typeLogement = response2.data.typeLogement[0].name;
      });
      console.log("type_logement_id;type_logement_id :   :  ", this.annonce);
    },
    getReservationByAnnonce() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      let req = {
        "annonce_id": this.$route.query.id
      };
      axios.post("/api/getReservationByAnnonce", req, config).then((response2) => {
        response2.data.reservations.forEach((element) => {
          this.reservations.push(element);
          console.log("reservationsreservations", this.reservations);
          this.getDatesBetween(element.checkIn, element.checkOut);
        });
        this.loading = false;
      }).catch((err) => {
      });
    },
    addReservation() {
      let datesAux = this.format(this.date);
      let dateRange = [];
      let x = new Date(this.reverseDate(datesAux[0]));
      let y = new Date(this.reverseDate(datesAux[1]));
      console.log("hahahahahanaanabababba : ", x);
      let currentDate = new Date(
        x.getFullYear(),
        x.getMonth(),
        x.getDate()
      );
      console.log("currentDate <= y : ", currentDate <= y);
      while (currentDate <= y) {
        var currentDateAux = currentDate.getFullYear() + "/";
        if (currentDate.getMonth() + 1 < 10) {
          currentDateAux += "0" + (currentDate.getMonth() + 1) + "/";
        } else {
          currentDateAux += currentDate.getMonth() + 1 + "/";
        }
        if (currentDate.getDate() < 10) {
          currentDateAux += "0" + currentDate.getDate();
        } else {
          currentDateAux += currentDate.getDate() + "";
        }
        dateRange.push(currentDateAux);
        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1
        );
      }
      this.dateFormatAux = this.format(this.date);
      this.nightsCount = dateRange.length - 1;
      this.disableDatesInReserversationCheck = false;
      this.disabledDates.forEach((element) => {
        for (let i = 0; i < dateRange.length; i++) {
          if (element == dateRange[i]) {
            this.disableDatesInReserversationCheck = true;
          }
        }
      });
      if (this.inclusiveSupp && this.animauxSupp) {
        this.reservationSum = (this.nightsCount * this.annonce[0].price + this.nightsCount * this.annonce[0].price * 0.1 + this.nightsCount * this.annonce[0].price * 0.05).toFixed(2);
      } else if (this.inclusiveSupp && !this.animauxSupp) {
        this.reservationSum = (this.nightsCount * this.annonce[0].price + this.nightsCount * this.annonce[0].price * 0.1).toFixed(2);
      } else if (!this.inclusiveSupp && this.animauxSupp) {
        this.reservationSum = (this.nightsCount * this.annonce[0].price + this.nightsCount * this.annonce[0].price * 0.05).toFixed(2);
      } else {
        this.reservationSum = (this.nightsCount * this.annonce[0].price).toFixed(2);
      }
    },
    confirmReservation() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      let datesAux = this.format(this.date);
      let firstDate = this.reverseDate(datesAux[0]);
      let SecondDate = this.reverseDate(datesAux[1]);
      let reservation = {
        "annonce_id": this.$route.query.id,
        "user_id": this.user.id,
        "checkIn": firstDate,
        "checkOut": SecondDate,
        "amount": this.reservationSum,
        "paymentMethod": SecondDate,
        "nightCount": this.nightsCount,
        "bookState": "Confirm\xE9e"
      };
      console.log("reservation reservation :", reservation);
      if (this.disableDatesInReserversationCheck) {
        Swal.fire({
          icon: "error",
          title: "Logement non disponible durant cette p\xE9riode",
          text: "Veuillez choisir une autre p\xE9riode",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonColor: "rgb(255, 0, 0)",
          confirmButtonText: "D'accord",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" }
        });
      } else {
        axios.post(
          "/api/addReservation",
          reservation,
          config
        ).then((response2) => {
        });
      }
    },
    getDatesBetween(x, y) {
      x = new Date(x);
      y = new Date(y);
      let currentDate = new Date(
        x.getFullYear(),
        x.getMonth(),
        x.getDate()
      );
      while (currentDate <= y) {
        var currentDateAux = currentDate.getFullYear() + "/";
        if (currentDate.getMonth() + 1 < 10) {
          currentDateAux += "0" + (currentDate.getMonth() + 1) + "/";
        } else {
          currentDateAux += currentDate.getMonth() + 1 + "/";
        }
        if (currentDate.getDate() < 10) {
          currentDateAux += "0" + currentDate.getDate();
        } else {
          currentDateAux += currentDate.getDate() + "";
        }
        this.disabledDates.push(currentDateAux);
        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1
        );
      }
    },
    reverseDate(chDate) {
      let x = "";
      for (let i = 6; i < chDate.length; i++) {
        x += chDate[i];
      }
      x += "/";
      for (let i = 3; i < 5; i++) {
        x += chDate[i];
      }
      x += "/";
      for (let i = 0; i < 2; i++) {
        x += chDate[i];
      }
      return x;
    },
    getIndisponibilities() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      let indisponibilitiesRequest = {
        annonce_id: this.$route.query.id
      };
      let startDate = "";
      let endDate = "";
      axios.post(
        "/api/getIndisponibilitiesForAnnonce",
        indisponibilitiesRequest,
        config
      ).then((response2) => {
        response2.data.indisponibilities.forEach((element) => {
          this.indisponibilitiesArray.push(element);
        });
        console.log("indisponibilitiesArray : ", this.indisponibilitiesArray);
        this.indisponibilitiesArray.forEach((element) => {
          startDate = "";
          endDate = "";
          for (let i = 6; i < element.dateFrom.length; i++) {
            startDate += element.dateFrom[i];
          }
          startDate += "/";
          for (let i = 3; i < 5; i++) {
            startDate += element.dateFrom[i];
          }
          startDate += "/";
          for (let i = 0; i < 2; i++) {
            startDate += element.dateFrom[i];
          }
          for (let i = 6; i < element.dateTo.length; i++) {
            endDate += element.dateTo[i];
          }
          endDate += "/";
          for (let i = 3; i < 5; i++) {
            endDate += element.dateTo[i];
          }
          endDate += "/";
          for (let i = 0; i < 2; i++) {
            endDate += element.dateTo[i];
          }
          this.getDatesBetween(startDate, endDate);
        });
      }).catch((err) => {
      });
    },
    getLikesForAnnonce() {
      this.likes = [];
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      let like = {
        user_id: localStorage.getItem("userId"),
        annonce_id: this.$route.query.id
      };
      axios.post("api/getLikesForAnnonce", like, config).then((response2) => {
        response2.data.likes.forEach((element) => {
          this.likes.push(element);
          console.log("elemmmee : ", element.user_id);
          if (element.user_id == localStorage.getItem("userId")) {
            this.likeAnnoncePageAlreadyLiked = true;
          }
        });
      });
    },
    addLikeForAnnonce() {
      this.likeAnnoncePageAlreadyLiked = !this.likeAnnoncePageAlreadyLiked;
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      let like = {
        user_id: localStorage.getItem("userId"),
        annonce_id: this.$route.query.id
      };
      let likeOrDislike = "like";
      axios.post("api/addLikeForAnnonce", like, config).then((response2) => {
        if (response2.data.status == "deleted") {
          likeOrDislike = "dislike";
        } else {
          likeOrDislike = "like";
        }
        this.sendNotifications(likeOrDislike);
        this.getLikesForAnnonce();
      }).catch((err) => {
        console.log("err :::: fffff :::  ", err);
      });
    },
    sendNotifications(likeOrDislike) {
      let notification = {
        from_id: localStorage.getItem("userId")
      };
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      if (likeOrDislike == "dislike") {
        notification.content = "A supprim\xE9 votre annonce de son favovis";
        notification.type = "dislike";
      } else {
        notification.content = "A aim\xE9 votre  annonce";
        notification.type = "like";
      }
      notification.user_id = this.annonce[0].user_id;
      notification.link = "/annonce/?id=" + this.annonce[0].id;
      axios.post("api/sendNotification", notification, config);
    },
    async sendMessage() {
      await Swal.fire({
        text: "",
        input: "textarea",
        inputLabel: "Envoyer un message \xE0 " + this.owner.lastname + " " + this.owner.firstname,
        inputPlaceholder: "Ecrivez votre message ici...",
        inputAttributes: {
          "aria-label": "Ecrivez votre message ici..."
        },
        preConfirm: function(text) {
          return new Promise(function(resolve, reject) {
            setTimeout(function() {
              if (text === "") {
                reject("Aucun message saisi");
              } else {
                let config = {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                  }
                };
                let message = {
                  content: text,
                  sender_user_id: localStorage.getItem("userId"),
                  receiver_user_id: localStorage.getItem("ownerId"),
                  from_name: localStorage.getItem("lastname") + " " + localStorage.getItem("firstname"),
                  to_name: localStorage.getItem("ownerFullName")
                };
                axios.post("api/sendMessage", message, config).then((result) => {
                  console.log(response);
                }).catch((err) => {
                });
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Message envoy\xE9",
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            }, 1e3);
          }).catch((err) => {
            alert(`error: ${err}`);
            return false;
          });
        },
        showCancelButton: true,
        confirmButtonColor: "rgb(210, 165, 173)",
        cancelButtonColor: "#272a2c",
        confirmButtonText: "Envoyer",
        cancelButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" }
      });
    },
    slideTo(val) {
      this.currentSlide = val;
    },
    getAnnonces() {
      axios.get("api/getAnnonces").then((response2) => {
        response2.data.annonces.forEach((element) => {
          this.annonces.push(element);
          this.imagesAnnoncesAux.push(element.images[0]);
        });
        this.annonces.forEach((element, key) => {
          if (element.id == this.annonce[0].id) {
            this.annonces.splice(key, 1);
          }
        });
        console.log(this.annonces.length);
      }).catch((err) => {
        console.log(err);
      });
    },
    getAnnonce() {
      this.images = [];
      axios.post("api/getAnnonceById", this.annonceId).then((response2) => {
        this.annonce = response2.data.userAnnonce;
        console.log("annonceannonce  : ", this.annonce);
        this.logementServices = this.annonce[0].servicesLogement;
        this.optionLogement = this.annonce[0].optionsLogement;
        console.log("hahahahaha :: " + JSON.parse(this.optionLogement));
        console.log("logementServices ::  " + typeof this.logementServices);
        this.annonce[0].images.forEach((element) => {
          console.log("image  : ", element.id);
          if (element.default == "true") {
            this.images.push(element);
            this.srcImagesArray.push(
              "uploads/" + element.path + "/" + element.image
            );
          }
        });
        this.annonce[0].images.forEach((element) => {
          console.log("image  : ", element.id);
          if (element.default == "false") {
            this.images.push(element);
            this.srcImagesArray.push(
              "uploads/" + element.path + "/" + element.image
            );
          }
        });
        this.images.forEach((element) => {
          console.log("image  : ", element);
        });
        this.reservationSum = this.nightsCount * parseFloat(this.annonce[0].price);
        this.owner.id = this.annonce[0].user_id;
        this.getUserProfile();
      }).catch((err) => {
        console.log("getAnnonceByUserIdError : ", err);
      });
    },
    getUserProfile() {
      this.user.id = localStorage.getItem("userId");
      this.user.token = localStorage.getItem("token");
      axios.post("api/getUserInfo", this.owner).then((response2) => {
        if (response2.data.user.length > 0) {
          this.owner.email_verified_at = response2.data.user[0].email_verified_at;
        }
        if (response2.data.userInfo.length > 0) {
          this.owner.address = response2.data.userInfo[0].address;
          this.owner.compAddress = response2.data.userInfo[0].addressComp;
          this.owner.phoneNumber = response2.data.userInfo[0].phone;
          this.owner.postalCode = response2.data.userInfo[0].postalCode;
          this.owner.city = response2.data.userInfo[0].city;
          this.owner.country = response2.data.userInfo[0].country;
          this.owner.email = response2.data.user[0].email;
          this.owner.id = response2.data.user[0].id;
          this.owner.lastname = response2.data.user[0].lastname;
          this.owner.firstname = response2.data.user[0].firstname;
          localStorage.setItem("ownerId", response2.data.user[0].id);
          localStorage.setItem(
            "ownerFullName",
            this.owner.lastname + " " + this.owner.firstname
          );
          this.getAvatarByUserId();
          this.typeLogementForAnnonce();
        }
      }).catch((err) => {
        console.log("err : ", err);
      });
    },
    getAvatarByUserId() {
      axios.post("api/getAvatarByUserId", this.owner).then((response2) => {
        if (response2.data.userAvatar.length > 0) {
          this.user.avatar = response2.data.userAvatar;
        } else {
          this.user.avatar = "";
        }
      }).catch((err) => {
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loadingPage = resolveComponent("loadingPage");
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  const _component_Navigation = resolveComponent("Navigation");
  const _component_star_rating = resolveComponent("star-rating");
  const _component_router_link = resolveComponent("router-link");
  const _component_Datepicker = resolveComponent("Datepicker");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($data.loading) {
    _push(`<div class="loaderDivPage">`);
    if ($data.loading) {
      _push(`<div class="loaderDiv">`);
      _push(ssrRenderComponent(_component_loadingPage, null, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.loading) {
    _push(`<div class="loaderDiv"><div class="containerAnnonceFirst"><div class="notFoundDiv" style="${ssrRenderStyle($data.annonce.length == 0 ? null : { display: "none" })}"><div class="mainbox"><div style="${ssrRenderStyle({ "height": "100%", "display": "flex", "justify-content": "center", "align-items": "center", "text-align": "center" })}"></div></div></div><div style="${ssrRenderStyle($data.annonce.length > 0 ? null : { display: "none" })}" class="containerAnnonce"><div class="temp"><div class="secondDiv"><div class="priceOneAnnonce">`);
    if ($data.annonce) {
      _push(`<h4>${ssrInterpolate($data.annonce[0].title)}</h4>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="ratingStars"><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div></div></div></div>`);
    if ($data.annonce.length > 0 && $data.srcImagesArray.length > 0) {
      _push(`<div class="imagesPrev">`);
      _push(ssrRenderComponent(_component_Carousel, {
        id: "gallery",
        "items-to-show": 1,
        "wrap-around": false,
        modelValue: $data.currentSlide,
        "onUpdate:modelValue": ($event) => $data.currentSlide = $event,
        transition: 1e3
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList($data.srcImagesArray, (image, key) => {
              _push2(ssrRenderComponent(_component_Slide, { key }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel__item"${_scopeId2}><img class="bigOneImage"${ssrRenderAttr("src", image)}${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "carousel__item" }, [
                        createVNode("img", {
                          class: "bigOneImage",
                          src: image
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList($data.srcImagesArray, (image, key) => {
                return openBlock(), createBlock(_component_Slide, { key }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "carousel__item" }, [
                      createVNode("img", {
                        class: "bigOneImage",
                        src: image
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if ($data.srcImagesArray.length > 1) {
        _push(ssrRenderComponent(_component_Carousel, {
          id: "thumbnails",
          "items-to-show": $data.srcImagesArray.length > 3 ? "4" : $data.srcImagesArray.length,
          "wrap-around": false,
          modelValue: $data.currentSlide,
          "onUpdate:modelValue": ($event) => $data.currentSlide = $event,
          ref: "carousel"
        }, {
          addons: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if ($data.annonce[0].images.length > 4) {
                _push2(ssrRenderComponent(_component_Navigation, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                $data.annonce[0].images.length > 4 ? (openBlock(), createBlock(_component_Navigation, { key: 0 })) : createCommentVNode("", true)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList($data.srcImagesArray, (image, key) => {
                _push2(ssrRenderComponent(_component_Slide, { key }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="carousel__item"${_scopeId2}><img class="scrollImagesPreview" style="${ssrRenderStyle($data.currentSlide == key ? "opacity:0.3;" : "")}"${ssrRenderAttr("src", image)}${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "carousel__item",
                          onClick: ($event) => $data.currentSlide = key
                        }, [
                          createVNode("img", {
                            class: "scrollImagesPreview",
                            style: $data.currentSlide == key ? "opacity:0.3;" : "",
                            src: image
                          }, null, 12, ["src"])
                        ], 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($data.srcImagesArray, (image, key) => {
                  return openBlock(), createBlock(_component_Slide, { key }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "carousel__item",
                        onClick: ($event) => $data.currentSlide = key
                      }, [
                        createVNode("img", {
                          class: "scrollImagesPreview",
                          style: $data.currentSlide == key ? "opacity:0.3;" : "",
                          src: image
                        }, null, 12, ["src"])
                      ], 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="priceWithLikes">`);
    if ($data.annonce) {
      _push(`<h4>\u20AC ${ssrInterpolate(parseFloat($data.annonce[0].price).toFixed(2))}</h4>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.annonce) {
      _push(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "justify-content": "space-between", "width": "32%" })}"><h6>${ssrInterpolate($data.likes.length)} j&#39;aime(s) pour cette annonce</h6>`);
      if ($data.loggedIn && $data.annonce[0].user_id != $data.user.id) {
        _push(`<i class="${ssrRenderClass([
          $data.likeAnnoncePageAlreadyLiked ? "likeAnnoncePageAlreadyLiked" : "likeAnnoncePage likeAnnoncePageHover",
          "fas fa-heart likeAnnoncePage"
        ])}"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="multiDivContainer">`);
    if ($data.annonce) {
      _push(`<div class="tabsDivMobile"><div class="desc"><h1 style="${ssrRenderStyle({ "margin-top": "1vw" })}">R\xE9sum\xE9</h1><p>${ssrInterpolate($data.annonce[0].description)}</p><p>${ssrInterpolate($data.annonce[0].informationsSupp)}</p></div><div><h3>D\xE9tails</h3><div class="tabcontent tabcontentAux"><div class="servicesAndOptionsDiv"><div class="servicesDiv"><h2 style="${ssrRenderStyle({ "color": "black" })}">Services</h2><!--[-->`);
      ssrRenderList(JSON.parse(
        $data.logementServices
      ), (service, key) => {
        _push(`<p>`);
        if (service == "Salle de bain") {
          _push(`<img src="https://img.icons8.com/ios-filled/30/null/shower.png">`);
        } else {
          _push(`<!---->`);
        }
        if (service == "Parking") {
          _push(`<img src="https://img.icons8.com/ios-filled/30/null/parking.png">`);
        } else {
          _push(`<!---->`);
        }
        if (service == "Wifi") {
          _push(`<img src="https://img.icons8.com/ios-filled/30/null/wifi-logo.png">`);
        } else {
          _push(`<!---->`);
        }
        if (service == "Terrasse") {
          _push(`<img src="https://img.icons8.com/material-rounded/24/null/open-window.png">`);
        } else {
          _push(`<!---->`);
        }
        if (service == "Equipements de camping") {
          _push(`<img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/null/external-camping-camping-tanah-basah-glyph-tanah-basah.png">`);
        } else {
          _push(`<!---->`);
        }
        if (service == "Piscine") {
          _push(`<img src="https://img.icons8.com/ios-glyphs/30/null/swimming-pool.png">`);
        } else {
          _push(`<!---->`);
        }
        if (service == "Spa privatif") {
          _push(`<img src="https://img.icons8.com/pastel-glyph/30/null/spa-care.png">`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(service)}</p>`);
      });
      _push(`<!--]--></div><div class="optionsDiv"><h2 style="${ssrRenderStyle({ "color": "black" })}">Options</h2><!--[-->`);
      ssrRenderList(JSON.parse(
        $data.optionLogement
      ), (option, key) => {
        _push(`<p>`);
        if (_ctx.serviceLogement == "Lave-vaisselle") {
          _push(`<img src="https://img.icons8.com/ios-glyphs/30/null/dishwasher.png">`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.serviceLogement == "Petit-d\xE9jeuner") {
          _push(`<img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/30/null/external-breakfast-mother-day-vitaliy-gorbachev-fill-vitaly-gorbachev.png">`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.serviceLogement == "T\xE9l\xE9vision") {
          _push(`<img src="https://img.icons8.com/ios-filled/30/null/tv-show.png">`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.serviceLogement == "Cafeti\xE8re") {
          _push(`<img src="https://img.icons8.com/ios-filled/30/null/coffee-pot.png">`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.serviceLogement == "Machine \xE0 laver") {
          _push(`<img src="https://img.icons8.com/ios-glyphs/30/null/washing-machine.png">`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.serviceLogement == "Linge de toilettes") {
          _push(`<img src="https://img.icons8.com/material-rounded/30/null/toilet-bowl.png">`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.serviceLogement == "Ligne de lits") {
          _push(`<img src="https://img.icons8.com/ios-filled/30/null/empty-bed.png">`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(_ctx.serviceLogement)}</p>`);
      });
      _push(`<!--]--></div></div><div class="detailsMobile"><h2 style="${ssrRenderStyle({ "color": "black" })}">D\xE9tails</h2><p><img src="https://img.icons8.com/ios-filled/30/null/visit.png"> Ville : ${ssrInterpolate($data.annonce[0].city)}</p><p><img src="https://img.icons8.com/ios-filled/30/null/surface.png"> Surface : ${ssrInterpolate($data.annonce[0].surface)} cm\xB2 </p><p><img src="https://img.icons8.com/ios-filled/30/null/empty-bed.png"> Nombre de couchages : ${ssrInterpolate($data.annonce[0].numberOfBeds)}</p><p><img src="https://img.icons8.com/ios-filled/30/null/groups.png"> Capacit\xE9 d&#39;accueillement : ${ssrInterpolate($data.annonce[0].capacity)}</p><p><img src="https://img.icons8.com/ios-glyphs/30/null/exterior.png"> Type h\xE9bergement : ${ssrInterpolate($data.annonce[0].typeLogement)}</p><p><img src="https://img.icons8.com/ios-glyphs/30/null/pets.png">Animaux autoris\xE9s : ${ssrInterpolate($data.annonce[0].animaux)}</p></div></div></div><div class="addressDiv" style="${ssrRenderStyle({ "padding": "30px" })}"><div class="addressDivPart1"><h3><img src="https://img.icons8.com/ios-filled/50/null/visit.png">Adresse postale </h3><ul>`);
      if ($data.annonce[0].address) {
        _push(`<li>${ssrInterpolate($data.annonce[0].address)}</li>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.annonce[0].compAddress) {
        _push(`<li>${ssrInterpolate($data.annonce[0].compAddress)}</li>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.annonce[0].city) {
        _push(`<li>${ssrInterpolate($data.annonce[0].city)} ${ssrInterpolate($data.annonce[0].postalCode)}</li>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.annonce[0].country) {
        _push(`<li>${ssrInterpolate($data.annonce[0].country)}</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div><div class="addressDivPart2"><iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="400" frameborder="0"></iframe></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="tabsDiv"><div id="tabs" class="containerTabs">`);
    if ($data.annonce) {
      _push(`<div class="tabs"><a class="${ssrRenderClass([$data.activetab === 1 ? "active" : ""])}"><i class="fas fa-info-circle"></i>Description</a><a class="${ssrRenderClass([$data.activetab === 2 ? "active" : ""])}"><i class="fas fa-suitcase"></i>Services</a><a class="${ssrRenderClass([$data.activetab === 3 ? "active" : ""])}"><i class="fas fa-map"></i>Lieu</a><a class="${ssrRenderClass([$data.activetab === 4 ? "active" : ""])}"><i class="fas fa-comments"></i>Avis client</a>`);
      if ($data.user.userRole == "client") {
        _push(`<a class="${ssrRenderClass([$data.activetab === 5 ? "active" : ""])}"><i class="fas fa-calendar-alt"></i>R\xE9server</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.annonce) {
      _push(`<div class="content">`);
      if ($data.activetab === 1) {
        _push(`<div class="tabcontent"><div><h1>R\xE9sum\xE9</h1><p>${ssrInterpolate($data.annonce[0].description)}</p><br><br><p>${ssrInterpolate($data.annonce[0].informationsSupp)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.activetab === 2) {
        _push(`<div class="tabcontent"><div class="servicesAndOptionsDiv"><div class="servicesDiv"><h2 style="${ssrRenderStyle({ "color": "black" })}">Services</h2><!--[-->`);
        ssrRenderList(JSON.parse(
          $data.logementServices
        ), (service, key) => {
          _push(`<p>`);
          if (service == "Salle de bain") {
            _push(`<img src="https://img.icons8.com/ios-filled/30/null/shower.png">`);
          } else {
            _push(`<!---->`);
          }
          if (service == "Parking") {
            _push(`<img src="https://img.icons8.com/ios-filled/30/null/parking.png">`);
          } else {
            _push(`<!---->`);
          }
          if (service == "Wifi") {
            _push(`<img src="https://img.icons8.com/ios-filled/30/null/wifi-logo.png">`);
          } else {
            _push(`<!---->`);
          }
          if (service == "Terrasse") {
            _push(`<img src="https://img.icons8.com/material-rounded/24/null/open-window.png">`);
          } else {
            _push(`<!---->`);
          }
          if (service == "Equipements de camping") {
            _push(`<img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/null/external-camping-camping-tanah-basah-glyph-tanah-basah.png">`);
          } else {
            _push(`<!---->`);
          }
          if (service == "Piscine") {
            _push(`<img src="https://img.icons8.com/ios-glyphs/30/null/swimming-pool.png">`);
          } else {
            _push(`<!---->`);
          }
          if (service == "Spa privatif") {
            _push(`<img src="https://img.icons8.com/pastel-glyph/30/null/spa-care.png">`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(service)}</p>`);
        });
        _push(`<!--]--></div><div class="optionsDiv"><h2 style="${ssrRenderStyle({ "color": "black" })}">Options</h2><!--[-->`);
        ssrRenderList(JSON.parse(
          $data.optionLogement
        ), (option, key) => {
          _push(`<p>`);
          if (option == "Lave-vaisselle") {
            _push(`<img src="https://img.icons8.com/ios-glyphs/30/null/dishwasher.png">`);
          } else {
            _push(`<!---->`);
          }
          if (option == "Petit-d\xE9jeuner") {
            _push(`<img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/30/null/external-breakfast-mother-day-vitaliy-gorbachev-fill-vitaly-gorbachev.png">`);
          } else {
            _push(`<!---->`);
          }
          if (option == "T\xE9l\xE9vision") {
            _push(`<img src="https://img.icons8.com/ios-filled/30/null/tv-show.png">`);
          } else {
            _push(`<!---->`);
          }
          if (option == "Cafeti\xE8re") {
            _push(`<img src="https://img.icons8.com/ios-filled/30/null/coffee-pot.png">`);
          } else {
            _push(`<!---->`);
          }
          if (option == "Machine \xE0 laver") {
            _push(`<img src="https://img.icons8.com/ios-glyphs/30/null/washing-machine.png">`);
          } else {
            _push(`<!---->`);
          }
          if (option == "Linge de toilettes") {
            _push(`<img src="https://img.icons8.com/material-rounded/30/null/toilet-bowl.png">`);
          } else {
            _push(`<!---->`);
          }
          if (option == "Ligne de lits") {
            _push(`<img src="https://img.icons8.com/ios-filled/30/null/empty-bed.png">`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(option)}</p>`);
        });
        _push(`<!--]--></div><div><h2 style="${ssrRenderStyle({ "color": "black" })}">D\xE9tails</h2><p><img src="https://img.icons8.com/ios-filled/30/null/visit.png"> Ville : ${ssrInterpolate($data.annonce[0].city)}</p><p><img src="https://img.icons8.com/ios-filled/30/null/surface.png"> Surface : ${ssrInterpolate($data.annonce[0].surface)} cm\xB2 </p><p><img src="https://img.icons8.com/ios-filled/30/null/empty-bed.png"> Nombre de couchages : ${ssrInterpolate($data.annonce[0].numberOfBeds)}</p><p><img src="https://img.icons8.com/ios-filled/30/null/groups.png"> Capacit\xE9 d&#39;accueillement : ${ssrInterpolate($data.annonce[0].capacity)}</p><p><img src="https://img.icons8.com/ios-glyphs/30/null/exterior.png"> Type h\xE9bergement : ${ssrInterpolate($data.annonce[0].typeLogement)}</p><p><img src="https://img.icons8.com/ios-glyphs/30/null/pets.png">Animaux autoris\xE9s : ${ssrInterpolate($data.annonce[0].animaux)}</p></div><div><h2 style="${ssrRenderStyle({ "color": "black" })}">D\xE9tails</h2><!--[-->`);
        ssrRenderList($data.annonce[0].suppPropretiesAnnonce, (value, key) => {
          _push(`<p>`);
          if (value.name == "Hauteur" || value.name == "Profondeur d'eau") {
            _push(`<span>${ssrInterpolate(value.name)} : ${ssrInterpolate(value.suppPropretiesAnnonce)} m </span>`);
          } else {
            _push(`<span>${ssrInterpolate(value.name)} : ${ssrInterpolate(value.suppPropretiesAnnonce)} m </span>`);
          }
          if (value.name == "Larguer") {
            _push(`<span>${ssrInterpolate(value.name)} : ${ssrInterpolate(value.suppPropretiesAnnonce)} m </span>`);
          } else {
            _push(`<!---->`);
          }
          if (value.name == "Larguer") {
            _push(`<span>${ssrInterpolate(value.name)} : ${ssrInterpolate(value.suppPropretiesAnnonce)} m </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.activetab === 3) {
        _push(`<div class="tabcontent"><div class="locationDiv"><div class="headerLocation"><ul>`);
        if ($data.annonce[0].address) {
          _push(`<li><i class="fas fa-map-pin"></i>Adresse postale : </li>`);
        } else {
          _push(`<!---->`);
        }
        if ($data.annonce[0].address) {
          _push(`<li>${ssrInterpolate($data.annonce[0].address)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if ($data.annonce[0].compAddress) {
          _push(`<li>${ssrInterpolate($data.annonce[0].compAddress)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if ($data.annonce[0].city) {
          _push(`<li>${ssrInterpolate($data.annonce[0].city)} ${ssrInterpolate($data.annonce[0].postalCode)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if ($data.annonce[0].country) {
          _push(`<li>${ssrInterpolate($data.annonce[0].country)}</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div><div style="${ssrRenderStyle({ "width": "70%" })}" class="googleMapLocation"><div style="${ssrRenderStyle({ "width": "100%", "height": "50%" })}"><iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="400" frameborder="0"></iframe></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.activetab === 4) {
        _push(`<div class="${ssrRenderClass([$data.activetab === 4 ? "tabcontentLocation" : "", "tabcontent commentsWrapper"])}"><div class="comment-container theme--light"><div class="comments"><!--[-->`);
        ssrRenderList(19, (x) => {
          _push(`<div><div class="card v-card v-sheet theme--light elevation-2"><div class="header"><div class="v-avatar avatar" style="${ssrRenderStyle({ "height": "50px", "width": "50px" })}"><img src="https://images.unsplash.com/photo-1490894641324-cfac2f5cd077?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=70"></div><span class="displayName title">John Doe</span><span class="displayName caption">2 days ago</span></div><div class="wrapper comment"><p> Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est. </p></div><div class="actions"></div><div class="v-dialog__container" style="${ssrRenderStyle({ "display": "flex", "justify-content": "end" })}">`);
          _push(ssrRenderComponent(_component_star_rating, {
            padding: 6,
            animate: false,
            "star-size": 25,
            "show-rating": false,
            "read-only": true,
            rating: 4
          }, null, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.activetab === 5 && $data.user.userRole == "client") {
        _push(`<div class="tabcontent bookingDiv"><div class="headerTitle"><div></div><div><h6><img src="https://img.icons8.com/sf-ultralight-filled/30/40C057/phone.png"> ${ssrInterpolate($data.owner.phoneNumber)}</h6></div></div>`);
        if (!$data.loggedIn) {
          _push(`<div class="bookingDivBody"><div class="notloggedinDivReservation"><div class="">`);
          _push(ssrRenderComponent(_component_router_link, {
            onClick: $options.scrollToTop,
            to: "/se-connecter"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button${_scopeId}>Se connecter</button>`);
              } else {
                return [
                  createVNode("button", null, "Se connecter")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><div class="">`);
          _push(ssrRenderComponent(_component_router_link, {
            onClick: $options.scrollToTop,
            to: "/inscription"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button${_scopeId}>Cr\xE9er un compte</button>`);
              } else {
                return [
                  createVNode("button", null, "Cr\xE9er un compte")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if ($data.loggedIn) {
          _push(`<div class="bookingDivBody"><div class="contact-form-wrapper d-flex justify-content-center"><form class="contact-form"><h5 class="title">R\xE9servation</h5><p class="description"> R\xE9server le logement d\xE9s maintenant </p><div style="${ssrRenderStyle({ "margin-top": "40px" })}"><p class="description">Choisir une p\xE9riode</p></div><div>`);
          _push(ssrRenderComponent(_component_Datepicker, {
            onChange: _ctx.datePickerChanged,
            range: "",
            "partial-range": false,
            "enable-time-picker": false,
            modelValue: $data.date,
            "onUpdate:modelValue": ($event) => $data.date = $event,
            "min-date": new Date(),
            format: $data.format,
            "disabled-dates": $data.disabledDates,
            light: "",
            "day-names": [
              "Lun",
              "Mar",
              "Mer",
              "Jeu",
              "Ven",
              "Sam",
              "Dim"
            ],
            "cancel-text": "Fermer",
            "select-text": "Choisir",
            locale: "fr"
          }, null, _parent));
          _push(`</div></form><div class="optionCompDiv"><h3>Services suppl\xE9mentaires</h3><div><ul>`);
          if ($data.annonce[0].animaux == "oui") {
            _push(`<li><input${ssrIncludeBooleanAttr(Array.isArray($data.animauxSupp) ? ssrLooseContain($data.animauxSupp, "49.99") : $data.animauxSupp) ? " checked" : ""} value="49.99" type="checkbox" name="animaux" id="animaux"><label for="animaux">Animaux +5%</label></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<li><input${ssrIncludeBooleanAttr(Array.isArray($data.inclusiveSupp) ? ssrLooseContain($data.inclusiveSupp, "29.99") : $data.inclusiveSupp) ? " checked" : ""} value="29.99" type="checkbox" name="inclusive" id="inclusive"><label for="inclusive">Formule All inclusive +10%</label></li></ul></div><div class="divBottonBooking"><button data-bs-toggle="modal" data-bs-target="#bookingModal"> R\xE9server </button></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div><div class="ownerProfile"><div class="wrapper"><div class="left"><h4>${ssrInterpolate($data.owner.lastname)} ${ssrInterpolate($data.owner.firstname)}</h4>`);
    if ($data.user.avatar) {
      _push(`<div><img${ssrRenderAttr(
        "src",
        "uploads/" + $data.user.avatar[0].path + $data.user.avatar[0].name
      )} alt="" class="img-fluid" style="${ssrRenderStyle({ "width": "50%", "padding-top": "30px" })}"></div>`);
    } else {
      _push(`<div></div>`);
    }
    _push(`</div><div class="right"><div class="projects"><h3>Proprietaire</h3><div class="projects_data"><div class="data"><h4>Adresse postale</h4><div><p>${ssrInterpolate($data.owner.address)}</p><br>`);
    if ($data.owner.compAddress) {
      _push(`<p>${ssrInterpolate($data.owner.compAddress)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<p>${ssrInterpolate($data.owner.city)} ${ssrInterpolate($data.owner.postalCode)}</p><br><p>${ssrInterpolate($data.owner.country)}</p></div></div></div></div><div class="info"><div class="info_data"><div class="data"><h4>E-mail</h4><p>${ssrInterpolate($data.owner.email)}</p></div><div class="data"><h4>T\xE9lephone</h4><p>${ssrInterpolate($data.owner.phoneNumber)}</p></div></div></div><div class="social_media"><ul><li><a${ssrRenderAttr("href", "tel:" + $data.owner.phoneNumber)}><i class="fas fa-phone"></i></a></li><li><a${ssrRenderAttr("href", "mailto:" + $data.owner.email)}><i class="fas fa-envelope"></i></a></li>`);
    if ($data.loggedIn && $data.user.id != $data.owner.id) {
      _push(`<li><a style="${ssrRenderStyle({ "cursor": "pointer" })}"><i class="fas fa-comments"></i></a></li>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</ul></div></div></div></div>`);
    if ($data.annonces.length > 1) {
      _push(`<div class="randomAnnonces"><h1>Offres similaires</h1><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "flex-direction": "column", "text-align": "center" })}">`);
      _push(ssrRenderComponent(_component_Carousel, {
        settings: $data.settings,
        breakpoints: $data.breakpoints,
        "items-to-scroll": 1,
        "items-to-show": 2,
        "wrap-around": false,
        transition: 2e3
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Navigation, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Pagination, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Navigation),
              createVNode(_component_Pagination)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList($data.annonces, (annonceRandom, key) => {
              _push2(ssrRenderComponent(_component_Slide, { key }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_router_link, {
                      target: "_blank",
                      style: { "text-decoration": "none" },
                      to: "/annonce/?id=" + annonceRandom.id,
                      class: "text-dark"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="carousel__item carouselItemRandomAnnonce"${_scopeId3}><div class="carouselItemRandomAnnonceWrapper"${_scopeId3}><div class="carouselItemRandomAnnonceCard"${_scopeId3}><div class="carouselItemRandomAnnonceCardBanner"${_scopeId3}><p class="category-tag categoryRandomType"${_scopeId3}> \u20AC ${ssrInterpolate(annonceRandom.price)}</p>`);
                          if (annonceRandom.images[0]) {
                            _push4(`<img class="carouselItemRandomAnnonceCardBannerImg"${ssrRenderAttr(
                              "src",
                              "uploads/" + annonceRandom.images[0].path + "/" + annonceRandom.images[0].image
                            )}${_scopeId3}>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div><div class="carouselItemRandomAnnonceCardBody"${_scopeId3}><p class="blog-hashtag"${_scopeId3}> #${ssrInterpolate(annonceRandom.typeLogement)}</p><h2 class="blog-title" style="${ssrRenderStyle({ "color": "black" })}"${_scopeId3}>${ssrInterpolate(annonceRandom.title)}</h2><p class="blog-description"${_scopeId3}>${ssrInterpolate(annonceRandom.city)} , ${ssrInterpolate(annonceRandom.country)}</p><div class="card-profile"${_scopeId3}><img class="profile-img"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId3}><div class="card-profile-info"${_scopeId3}><h3 class="profile-name"${_scopeId3}>Maya Eleanor Pe\xF1a</h3><p class="profile-followers"${_scopeId3}>1.2k followers</p></div></div></div></div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "carousel__item carouselItemRandomAnnonce" }, [
                              createVNode("div", { class: "carouselItemRandomAnnonceWrapper" }, [
                                createVNode("div", { class: "carouselItemRandomAnnonceCard" }, [
                                  createVNode("div", { class: "carouselItemRandomAnnonceCardBanner" }, [
                                    createVNode("p", { class: "category-tag categoryRandomType" }, " \u20AC " + toDisplayString(annonceRandom.price), 1),
                                    annonceRandom.images[0] ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      class: "carouselItemRandomAnnonceCardBannerImg",
                                      src: "uploads/" + annonceRandom.images[0].path + "/" + annonceRandom.images[0].image
                                    }, null, 8, ["src"])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "carouselItemRandomAnnonceCardBody" }, [
                                    createVNode("p", { class: "blog-hashtag" }, " #" + toDisplayString(annonceRandom.typeLogement), 1),
                                    createVNode("h2", {
                                      class: "blog-title",
                                      style: { "color": "black" }
                                    }, toDisplayString(annonceRandom.title), 1),
                                    createVNode("p", { class: "blog-description" }, toDisplayString(annonceRandom.city) + " , " + toDisplayString(annonceRandom.country), 1),
                                    createVNode("div", { class: "card-profile" }, [
                                      createVNode("img", {
                                        class: "profile-img",
                                        src: _imports_0,
                                        alt: ""
                                      }),
                                      createVNode("div", { class: "card-profile-info" }, [
                                        createVNode("h3", { class: "profile-name" }, "Maya Eleanor Pe\xF1a"),
                                        createVNode("p", { class: "profile-followers" }, "1.2k followers")
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_router_link, {
                        target: "_blank",
                        style: { "text-decoration": "none" },
                        to: "/annonce/?id=" + annonceRandom.id,
                        class: "text-dark"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "carousel__item carouselItemRandomAnnonce" }, [
                            createVNode("div", { class: "carouselItemRandomAnnonceWrapper" }, [
                              createVNode("div", { class: "carouselItemRandomAnnonceCard" }, [
                                createVNode("div", { class: "carouselItemRandomAnnonceCardBanner" }, [
                                  createVNode("p", { class: "category-tag categoryRandomType" }, " \u20AC " + toDisplayString(annonceRandom.price), 1),
                                  annonceRandom.images[0] ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    class: "carouselItemRandomAnnonceCardBannerImg",
                                    src: "uploads/" + annonceRandom.images[0].path + "/" + annonceRandom.images[0].image
                                  }, null, 8, ["src"])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "carouselItemRandomAnnonceCardBody" }, [
                                  createVNode("p", { class: "blog-hashtag" }, " #" + toDisplayString(annonceRandom.typeLogement), 1),
                                  createVNode("h2", {
                                    class: "blog-title",
                                    style: { "color": "black" }
                                  }, toDisplayString(annonceRandom.title), 1),
                                  createVNode("p", { class: "blog-description" }, toDisplayString(annonceRandom.city) + " , " + toDisplayString(annonceRandom.country), 1),
                                  createVNode("div", { class: "card-profile" }, [
                                    createVNode("img", {
                                      class: "profile-img",
                                      src: _imports_0,
                                      alt: ""
                                    }),
                                    createVNode("div", { class: "card-profile-info" }, [
                                      createVNode("h3", { class: "profile-name" }, "Maya Eleanor Pe\xF1a"),
                                      createVNode("p", { class: "profile-followers" }, "1.2k followers")
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList($data.annonces, (annonceRandom, key) => {
                return openBlock(), createBlock(_component_Slide, { key }, {
                  default: withCtx(() => [
                    createVNode(_component_router_link, {
                      target: "_blank",
                      style: { "text-decoration": "none" },
                      to: "/annonce/?id=" + annonceRandom.id,
                      class: "text-dark"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "carousel__item carouselItemRandomAnnonce" }, [
                          createVNode("div", { class: "carouselItemRandomAnnonceWrapper" }, [
                            createVNode("div", { class: "carouselItemRandomAnnonceCard" }, [
                              createVNode("div", { class: "carouselItemRandomAnnonceCardBanner" }, [
                                createVNode("p", { class: "category-tag categoryRandomType" }, " \u20AC " + toDisplayString(annonceRandom.price), 1),
                                annonceRandom.images[0] ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  class: "carouselItemRandomAnnonceCardBannerImg",
                                  src: "uploads/" + annonceRandom.images[0].path + "/" + annonceRandom.images[0].image
                                }, null, 8, ["src"])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "carouselItemRandomAnnonceCardBody" }, [
                                createVNode("p", { class: "blog-hashtag" }, " #" + toDisplayString(annonceRandom.typeLogement), 1),
                                createVNode("h2", {
                                  class: "blog-title",
                                  style: { "color": "black" }
                                }, toDisplayString(annonceRandom.title), 1),
                                createVNode("p", { class: "blog-description" }, toDisplayString(annonceRandom.city) + " , " + toDisplayString(annonceRandom.country), 1),
                                createVNode("div", { class: "card-profile" }, [
                                  createVNode("img", {
                                    class: "profile-img",
                                    src: _imports_0,
                                    alt: ""
                                  }),
                                  createVNode("div", { class: "card-profile-info" }, [
                                    createVNode("h3", { class: "profile-name" }, "Maya Eleanor Pe\xF1a"),
                                    createVNode("p", { class: "profile-followers" }, "1.2k followers")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="modalBooking"><div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Validation</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div style="${ssrRenderStyle({ "padding": "0", "width": "100%" })}" class="modal-body modalDivBooking"><div class="container"><div class="left"><div class="info-box">`);
    if ($data.annonce) {
      _push(`<div class="receipt"><span>${ssrInterpolate($data.annonce[0].title)}</span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="entry"><i class="icon-wallet" aria-hidden="true"></i><p> Somme \xE0 payer : <span>\u20AC ${ssrInterpolate($data.reservationSum)}</span></p></div><div class="entry"><i class="icon-calendar" aria-hidden="true"></i><p>Date d&#39;arriv\xE9 : <span>${ssrInterpolate($data.dateFormatAux[0])}</span></p></div><div class="entry"><i class="icon-calendar" aria-hidden="true"></i><p>Date de d\xE9part : <span>${ssrInterpolate($data.dateFormatAux[1])}</span></p></div><div class="entry"><i class="icon-calendar" aria-hidden="true"></i><p>Nombre de nuits : <span>${ssrInterpolate($data.nightsCount)}</span></p></div><div class="entry"><i class="icon-notebook" aria-hidden="true"></i><p>Confirmation Nr:<span>0YX123580219G</span></p></div></div></div><div class="right"><div class="content"><div class="header"><div class="${ssrRenderClass(
      $data.bookingPaymentMethodStep == 1 ? "headerBookingImgActive" : ""
    )}"><p>SandBox</p></div><div class="${ssrRenderClass(
      $data.bookingPaymentMethodStep == 2 ? "headerBookingImgActive" : ""
    )}"><p>Sur place</p></div></div>`);
    if ($data.bookingPaymentMethodStep == 1) {
      _push(`<div style="${ssrRenderStyle({ "padding": "30px" })}"><div class="main"><h3>Payer avec Paypal</h3><h5>Total: \u20AC ${ssrInterpolate($data.reservationSum)}</h5></div><div class="message"><p> Bonjour X , Vous allez pross\xE9der \xE0 un paiement de \u20AC ${ssrInterpolate($data.reservationSum)} (owner@owner.com) </p><h6> Cela peut prendre quelques instants pour que cette transaction apparaisse dans votre compte. </h6></div><div class="" style="${ssrRenderStyle({ "background-color": "white", "display": "flex", "justify-content": "center", "margin": "40px 0" })}"><button style="${ssrRenderStyle({ "color": "white", "padding": "10px 60px", "background-color": "#1882ef", "border-radius": "30px", "font-weight": "bold" })}"> Payer </button></div><div class="footer" style="${ssrRenderStyle({ "background-color": "white" })}"><a href="#">www.paypal.com/help</a><h6>Oct 18, 2015 08:30:57 PDT</h6></div></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.bookingPaymentMethodStep == 2) {
      _push(`<div style="${ssrRenderStyle({ "padding": "30px" })}"><div class="main"><h3>Card Payment (1 year)</h3><h5>Total: $20.00 USD</h5></div><div class="message"></div><div class="footer" style="${ssrRenderStyle({ "background-color": "white" })}"><a href="#">www.paypal.com/help</a><h6>Oct 18, 2015 08:30:57 PDT</h6></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div></div></div></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/annoncePage/annonce.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const annoncePage = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const annoncesSearchResult_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {
  components: {
    StarRating,
    loadingPage
  },
  name: "H\xE9bergements",
  data() {
    return {
      loggedIn: false,
      loading: true,
      user: {
        email: "",
        lastname: "",
        firstname: "",
        token: ""
      },
      annonces: [],
      sortValue: "news",
      countrySelectValue: "",
      countriesArray: [],
      typeLogementArray: [],
      typeLogementCh: "",
      limitCardsShowen: 4,
      typesLogement: []
    };
  },
  computed: {
    sortedAnnonces() {
      if (this.countrySelectValue != "") {
        if (this.typeLogementCh != "") {
          this.limitCardsShowen = 1e3;
        }
        if (this.sortValue == "news") {
          return this.annonces.sort((a, b) => {
            return a.id < b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.country == this.countrySelectValue && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "anciens") {
          return this.annonces.sort((a, b) => {
            return a.id > b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.country == this.countrySelectValue && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceAsc") {
          return this.annonces.sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.country == this.countrySelectValue && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceDesc") {
          return this.annonces.sort((a, b) => {
            return parseInt(a.price) < parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.country == this.countrySelectValue && item.typeLogement.includes(this.typeLogementCh);
          });
        } else {
          return this.annonces.filter((item) => {
            return item.country == this.countrySelectValue;
          });
        }
      } else {
        this.limitCardsShowen = 1e3;
        if (this.sortValue == "news") {
          return this.annonces.sort((a, b) => {
            return a.id < b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "anciens") {
          return this.annonces.sort((a, b) => {
            return a.id > b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceAsc") {
          return this.annonces.sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceDesc") {
          return this.annonces.sort((a, b) => {
            return parseInt(a.price) < parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.typeLogement.includes(this.typeLogementCh);
          });
        } else {
          return this.annonces.filter((item, index) => {
            return item.typeLogement.includes(this.typeLogementCh);
          });
        }
      }
    }
  },
  mounted() {
    this.getTypeLogement();
    this.getAnnonces();
  },
  methods: {
    getTypeLogement() {
      this.typesLogement = [];
      axios.get("/api/getTypeLogement").then((response2) => {
        response2.data.typesLogement.forEach((element) => {
          if (element.name != "Autre")
            this.typesLogement.push(element);
        });
        response2.data.typesLogement.forEach((element) => {
          if (element.name == "Autre")
            this.typesLogement.push(element);
        });
      }).catch((err) => {
      });
    },
    showMoreAction() {
      this.limitCardsShowen += 4;
    },
    getAnnonces() {
      axios.get("api/getAnnonces").then((response2) => {
        response2.data.annonces.forEach((element) => {
          element.images.forEach((elementAux) => {
            if (elementAux.default == "true")
              element.defaultImage = elementAux;
          });
          this.typesLogement.forEach((elementaux) => {
            if (elementaux.id == element.type_logement_id) {
              element.typeLogement = elementaux.name;
            }
          });
          console.log("elementelementelement:3", element);
          this.annonces.push(element);
          this.countriesArray.push(element.country);
          this.typeLogementArray.push(element.typeLogement);
        });
        this.loading = false;
      });
    },
    orderByChanged() {
      this.sortValue = this.sortValue;
    },
    typeLogementChChanged() {
      this.typeLogementCh = this.typeLogementCh;
    },
    typeLogementCount(ch) {
      let typeLogementCount = 0;
      if (ch != "") {
        this.typeLogementArray.forEach((element) => {
          console.log(element, ch);
          if (element == ch) {
            typeLogementCount++;
          }
        });
        return typeLogementCount;
      }
      if (ch == "") {
        return this.typeLogementArray.length;
      }
    },
    countriesCount(ch) {
      let countriesCount = 0;
      if (ch != "") {
        this.countriesArray.forEach((element) => {
          if (element == ch) {
            countriesCount++;
          }
        });
        return countriesCount;
      }
      if (ch == "") {
        return this.countriesArray.length;
      }
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loadingPage = resolveComponent("loadingPage");
  const _component_router_link = resolveComponent("router-link");
  const _component_star_rating = resolveComponent("star-rating");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($data.loading) {
    _push(`<div class="loaderDivPage">`);
    if ($data.loading) {
      _push(`<div class="loaderDiv">`);
      _push(ssrRenderComponent(_component_loadingPage, null, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.loading) {
    _push(`<div class=""><div class="allAnnoncesDiv"><div class="sideBarFilters"></div><div><div class="filtersDiv"><ul class="ulTopSideBar"><li><label for="sortFilter">Cat\xE9gorie : </label><select class="selectSortBy" name="sortFilter" id="sortFilter"><option selected value="">Tout <small>(${ssrInterpolate($options.typeLogementCount(""))})</small></option><!--[-->`);
    ssrRenderList($data.typesLogement, (typeLogement, key) => {
      _push(`<option${ssrRenderAttr("value", typeLogement.name)}>${ssrInterpolate(typeLogement.name)} <small>(${ssrInterpolate($options.typeLogementCount(typeLogement.name))})</small></option>`);
    });
    _push(`<!--]--></select></li><li><label for="sortFilter">Trier par :</label><select class="selectSortBy" name="sortFilter" id="sortFilter"><option value="priceAsc">Prix : Ordre croissant</option><option value="priceDesc">Prix : Ordre d\xE9croissant</option><option value="comments"> Moyenne des commentaires client </option><option value="news" selected>Nouveaut\xE9s</option><option value="anciens">Anciens</option></select></li><li><label for="countrySelectValue">Localisation : </label><select class="selectSortBy" name="countrySelectValue" id="countrySelectValue"><optgroup label="Pays"><option selected value=""> UE (${ssrInterpolate($options.countriesCount(""))}) </option><option value="France"> France (${ssrInterpolate($options.countriesCount("France"))}) </option><option value="Belgique"> Belgique (${ssrInterpolate($options.countriesCount("Belgique"))}) </option><option value="Bulgarie"> Bulgarie (${ssrInterpolate($options.countriesCount("Bulgarie"))}) </option><option value="Croatie"> Croatie (${ssrInterpolate($options.countriesCount("Croatie"))}) </option><option value="R\xE9publique tch\xE8que"> R\xE9publique tch\xE8que (${ssrInterpolate($options.countriesCount("R\xE9publique tch\xE8que"))}) </option><option value="Danemark"> Danemark (${ssrInterpolate($options.countriesCount("Danemark"))}) </option><option value="Estonie"> Estonie (${ssrInterpolate($options.countriesCount("Estonie"))}) </option><option value="Finlande"> Finlande (${ssrInterpolate($options.countriesCount("Finlande"))}) </option><option value="Allemagne"> Allemagne (${ssrInterpolate($options.countriesCount("Allemagne"))}) </option><option value="Gr\xE8ce"> Gr\xE8ce (${ssrInterpolate($options.countriesCount("Gr\xE8ce"))}) </option><option value="Hongrie"> Hongrie (${ssrInterpolate($options.countriesCount("Hongrie"))}) </option><option value="Islande"> Islande (${ssrInterpolate($options.countriesCount("Islande"))}) </option><option value="Italie"> Italie (${ssrInterpolate($options.countriesCount("Italie"))}) </option><option value="Latvia"> Latvia (${ssrInterpolate($options.countriesCount("Latvia"))}) </option><option value="Luxembourg"> Luxembourg (${ssrInterpolate($options.countriesCount("Luxembourg"))}) </option><option value="Monaco"> Monaco (${ssrInterpolate($options.countriesCount("Monaco"))}) </option><option value="Pays-Bas"> Pays-Bas (${ssrInterpolate($options.countriesCount("Pays-Bas"))}) </option><option value="Nouvelle-Z\xE9lande"> Nouvelle-Z\xE9lande (${ssrInterpolate($options.countriesCount("Nouvelle-Z\xE9lande"))}) </option><option value="Pologne"> Pologne (${ssrInterpolate($options.countriesCount("Pologne"))}) </option><option value="Portugal"> Portugal (${ssrInterpolate($options.countriesCount("Portugal"))}) </option><option value="Roumanie"> Roumanie (${ssrInterpolate($options.countriesCount("Roumanie"))}) </option><option value="Slovaquie"> Slovaquie (${ssrInterpolate($options.countriesCount("Slovaquie"))}) </option><option value="Slov\xE9nie"> Slov\xE9nie (${ssrInterpolate($options.countriesCount("Slov\xE9nie"))}) </option><option value="Espagne"> Espagne (${ssrInterpolate($options.countriesCount("Espagne"))}) </option><option value="Su\xE8de"> Su\xE8de (${ssrInterpolate($options.countriesCount("Su\xE8de"))}) </option><option value="Suisse"> Suisse (${ssrInterpolate($options.countriesCount("Suisse"))}) </option><option value="Royaume-Uni"> Royaume-Uni (${ssrInterpolate($options.countriesCount("Royaume-Uni"))}) </option></optgroup></select></li></ul></div><div class="noResultssvgDiv" style="${ssrRenderStyle($options.sortedAnnonces.length == 0 ? null : { display: "none" })}"><h1>Aucun bien ne correspond \xE0 votre s\xE9lection.</h1></div><div style="${ssrRenderStyle($options.sortedAnnonces ? null : { display: "none" })}" class="containerCards containerCardsAux"><!--[-->`);
    ssrRenderList($options.sortedAnnonces, (annonce, key) => {
      _push(`<div class="box boxAux">`);
      _push(ssrRenderComponent(_component_router_link, {
        target: "_blank",
        style: { "text-decoration": "none" },
        to: "/annonce/?id=" + annonce.id,
        class: "text-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="top"${_scopeId}>`);
            if (annonce.defaultImage) {
              _push2(`<img${ssrRenderAttr(
                "src",
                "uploads/" + annonce.defaultImage.path + "/" + annonce.defaultImage.image
              )}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="bottom"${_scopeId}><h3${_scopeId}>${ssrInterpolate(annonce.title)}</h3><div${_scopeId}><div class="location"${_scopeId}><i style="${ssrRenderStyle({ "margin-right": "7px" })}" class="fas fa-map-marker-alt"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.city)}</span></div></div><div class="advants"${_scopeId}><div${_scopeId}><span${_scopeId}>Nbr de couchages </span><div${_scopeId}><i class="fas fa-bed"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.numberOfBeds)}</span></div></div><div${_scopeId}><span${_scopeId}>Accueillement </span><div${_scopeId}><i class="fas fa-users"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.capacity)}</span></div></div><div${_scopeId}><span${_scopeId}>Surface</span><div${_scopeId}><i class="fas fa-vector-square"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.surface)}<span${_scopeId}>Cm\xB2</span></span></div></div></div><div class="price"${_scopeId}><span${_scopeId}> \u20AC${ssrInterpolate(parseFloat(annonce.price).toFixed(2))} <small style="${ssrRenderStyle({ "font-size": "16px" })}"${_scopeId}>/nuit</small></span></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "end" })}"${_scopeId}><div style="${ssrRenderStyle({ "position": "absolute", "top": "-44px", "left": "15px" })}" class="price"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_star_rating, {
              padding: 3,
              animate: true,
              "star-size": 25,
              "show-rating": false,
              "read-only": false,
              rating: 4
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="typeLogement"${_scopeId}><span${_scopeId}>${ssrInterpolate(annonce.typeLogement)}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "top" }, [
                annonce.defaultImage ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: "uploads/" + annonce.defaultImage.path + "/" + annonce.defaultImage.image
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "bottom" }, [
                createVNode("h3", null, toDisplayString(annonce.title), 1),
                createVNode("div", null, [
                  createVNode("div", { class: "location" }, [
                    createVNode("i", {
                      style: { "margin-right": "7px" },
                      class: "fas fa-map-marker-alt"
                    }),
                    createVNode("span", null, toDisplayString(annonce.city), 1)
                  ])
                ]),
                createVNode("div", { class: "advants" }, [
                  createVNode("div", null, [
                    createVNode("span", null, "Nbr de couchages "),
                    createVNode("div", null, [
                      createVNode("i", { class: "fas fa-bed" }),
                      createVNode("span", null, toDisplayString(annonce.numberOfBeds), 1)
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", null, "Accueillement "),
                    createVNode("div", null, [
                      createVNode("i", { class: "fas fa-users" }),
                      createVNode("span", null, toDisplayString(annonce.capacity), 1)
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", null, "Surface"),
                    createVNode("div", null, [
                      createVNode("i", { class: "fas fa-vector-square" }),
                      createVNode("span", null, [
                        createTextVNode(toDisplayString(annonce.surface), 1),
                        createVNode("span", null, "Cm\xB2")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "price" }, [
                  createVNode("span", null, [
                    createTextVNode(" \u20AC" + toDisplayString(parseFloat(annonce.price).toFixed(2)) + " ", 1),
                    createVNode("small", { style: { "font-size": "16px" } }, "/nuit")
                  ])
                ]),
                createVNode("div", { style: { "display": "flex", "justify-content": "end" } }, [
                  createVNode("div", {
                    style: { "position": "absolute", "top": "-44px", "left": "15px" },
                    class: "price"
                  }, [
                    createVNode(_component_star_rating, {
                      padding: 3,
                      animate: true,
                      "star-size": 25,
                      "show-rating": false,
                      "read-only": false,
                      rating: 4
                    })
                  ])
                ]),
                createVNode("div", { class: "typeLogement" }, [
                  createVNode("span", null, toDisplayString(annonce.typeLogement), 1)
                ])
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div><div class="resultCount"><h3> Affichage de ${ssrInterpolate($options.sortedAnnonces.length)} sur ${ssrInterpolate($data.annonces.length)} r\xE9sultats </h3><button style="${ssrRenderStyle($options.sortedAnnonces.length > 0 && !$data.limitCardsShowen == 1e3 && $data.annonces.length > $options.sortedAnnonces.length ? null : { display: "none" })}" class="btn btn-dark">Voir plus</button></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/annoncesListPage/annoncesSearchResult.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const annoncesListPage = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
  components: {
    StarRating,
    loadingPage
  },
  data() {
    return {
      loading: true,
      token: "",
      favorites: [],
      user: {
        email: "",
        lastname: "",
        firstname: "",
        token: ""
      },
      sortValue: "news",
      countrySelectValue: "",
      countriesArray: [],
      typeLogementArray: [],
      typeLogementCh: "",
      limitCardsShowen: 4,
      typesLogement: []
    };
  },
  computed: {
    sortedAnnonces() {
      if (this.countrySelectValue != "") {
        if (this.typeLogementCh != "") {
          this.limitCardsShowen = 1e3;
        }
        if (this.sortValue == "news") {
          return this.favorites.sort((a, b) => {
            return a.id < b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.country == this.countrySelectValue && item.annonce.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "anciens") {
          return this.favorites.sort((a, b) => {
            return a.id > b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.country == this.countrySelectValue && item.annonce.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceAsc") {
          return this.favorites.sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.annonce.country == this.countrySelectValue && item.annonce.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceDesc") {
          return this.favorites.sort((a, b) => {
            return parseInt(a.price) < parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.annonce.country == this.countrySelectValue && item.annonce.typeLogement.includes(this.typeLogementCh);
          });
        } else {
          return this.favorites.filter((item) => {
            return item.annonce.country == this.countrySelectValue;
          });
        }
      } else {
        this.limitCardsShowen = 1e3;
        if (this.sortValue == "news") {
          return this.favorites.sort((a, b) => {
            return a.id < b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.annonce.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "anciens") {
          return this.favorites.sort((a, b) => {
            return a.id > b.id;
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.annonce.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceAsc") {
          return this.favorites.sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.annonce.typeLogement.includes(this.typeLogementCh);
          });
        } else if (this.sortValue == "priceDesc") {
          return this.favorites.sort((a, b) => {
            return parseInt(a.price) < parseInt(b.price);
          }).filter((item, index) => {
            return index < this.limitCardsShowen && item.annonce.typeLogement.includes(this.typeLogementCh);
          });
        } else {
          return this.favorites.filter((item, index) => {
            return item.annonce.typeLogement.includes(this.typeLogementCh);
          });
        }
      }
    }
  },
  mounted() {
    this.getTypeLogement();
    this.token = localStorage.getItem("token");
    if (localStorage.getItem("token") == "") {
      this.$router.push({ path: "/se-connecter" });
    }
    this.getLikesForUsers();
  },
  methods: {
    getTypeLogement() {
      this.typesLogement = [];
      axios.get("/api/getTypeLogement").then((response2) => {
        response2.data.typesLogement.forEach((element) => {
          if (element.name != "Autre")
            this.typesLogement.push(element);
        });
        response2.data.typesLogement.forEach((element) => {
          if (element.name == "Autre")
            this.typesLogement.push(element);
        });
        this.loading = false;
      }).catch((err) => {
      });
    },
    getLikesForUsers() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let userAux = {
        user_id: localStorage.getItem("userId")
      };
      axios.post("api/getLikesForUsers", userAux, config).then((response2) => {
        response2.data.likes.forEach((element) => {
          console.log("element.annonce : ", element.annonce);
          element.annonce.images.forEach((elementAux) => {
            if (elementAux.default == "true")
              element.annonce.defaultImage = elementAux;
          });
          this.typesLogement.forEach((elementAux) => {
            console.log(" element.annonce.type_logement_id. element.annonce.type_logement_id ::  ", elementAux.id, element.annonce.type_logement_id);
            if (elementAux.id == element.annonce.type_logement_id) {
              element.annonce.typeLogement = elementAux.name;
            }
          });
          this.favorites.push(element);
          this.countriesArray.push(element.annonce.country);
          this.typeLogementArray.push(element.annonce.typeLogement);
        });
        console.log("hahhabannana ::  ", this.favorites);
      });
    },
    showMoreAction() {
      this.limitCardsShowen += 4;
    },
    orderByChanged() {
      this.sortValue = this.sortValue;
    },
    typeLogementChChanged() {
      this.typeLogementCh = this.typeLogementCh;
    },
    typeLogementCount(ch) {
      let typeLogementCount = 0;
      if (ch != "") {
        this.typeLogementArray.forEach((element) => {
          console.log(this.typeLogementArray, ch);
          if (element == ch) {
            typeLogementCount++;
          }
        });
        return typeLogementCount;
      }
      if (ch == "") {
        return this.typeLogementArray.length;
      }
    },
    countriesCount(ch) {
      let countriesCount = 0;
      if (ch != "") {
        this.countriesArray.forEach((element) => {
          if (element == ch) {
            countriesCount++;
          }
        });
        return countriesCount;
      }
      if (ch == "") {
        return this.countriesArray.length;
      }
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loadingPage = resolveComponent("loadingPage");
  const _component_router_link = resolveComponent("router-link");
  const _component_star_rating = resolveComponent("star-rating");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($data.loading) {
    _push(`<div class="loaderDivPage">`);
    if ($data.loading) {
      _push(`<div class="loaderDiv">`);
      _push(ssrRenderComponent(_component_loadingPage, null, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.loading) {
    _push(`<div class="loaderDivPage"><div class="allAnnoncesDiv"><div class="sideBarFilters"></div><div><div class="filtersDiv"><ul class="ulTopSideBar"><li><label for="sortFilter">Cat\xE9gorie : </label><select class="selectSortBy" name="sortFilter" id="sortFilter"><option selected value=""> Tout <small>(${ssrInterpolate($options.typeLogementCount(""))})</small></option><!--[-->`);
    ssrRenderList($data.typesLogement, (typeLogement, key) => {
      _push(`<option${ssrRenderAttr("value", typeLogement.name)}>${ssrInterpolate(typeLogement.name)} <small>(${ssrInterpolate($options.typeLogementCount(typeLogement.name))})</small></option>`);
    });
    _push(`<!--]--></select></li><li><label for="sortFilter">Trier par :</label><select class="selectSortBy" name="sortFilter" id="sortFilter"><option value="priceAsc">Prix : Ordre croissant</option><option value="priceDesc">Prix : Ordre d\xE9croissant</option><option value="comments"> Moyenne des commentaires client </option><option value="news" selected>Nouveaut\xE9s</option><option value="anciens">Anciens</option></select></li><li><label for="countrySelectValue">Localisation : </label><select class="selectSortBy" name="countrySelectValue" id="countrySelectValue"><optgroup label="Pays"><option selected value=""> UE (${ssrInterpolate($options.countriesCount(""))}) </option><option value="France"> France (${ssrInterpolate($options.countriesCount("France"))}) </option><option value="Belgique"> Belgique (${ssrInterpolate($options.countriesCount("Belgique"))}) </option><option value="Bulgarie"> Bulgarie (${ssrInterpolate($options.countriesCount("Bulgarie"))}) </option><option value="Croatie"> Croatie (${ssrInterpolate($options.countriesCount("Croatie"))}) </option><option value="R\xE9publique tch\xE8que"> R\xE9publique tch\xE8que (${ssrInterpolate($options.countriesCount("R\xE9publique tch\xE8que"))}) </option><option value="Danemark"> Danemark (${ssrInterpolate($options.countriesCount("Danemark"))}) </option><option value="Estonie"> Estonie (${ssrInterpolate($options.countriesCount("Estonie"))}) </option><option value="Finlande"> Finlande (${ssrInterpolate($options.countriesCount("Finlande"))}) </option><option value="Allemagne"> Allemagne (${ssrInterpolate($options.countriesCount("Allemagne"))}) </option><option value="Gr\xE8ce"> Gr\xE8ce (${ssrInterpolate($options.countriesCount("Gr\xE8ce"))}) </option><option value="Hongrie"> Hongrie (${ssrInterpolate($options.countriesCount("Hongrie"))}) </option><option value="Islande"> Islande (${ssrInterpolate($options.countriesCount("Islande"))}) </option><option value="Italie"> Italie (${ssrInterpolate($options.countriesCount("Italie"))}) </option><option value="Latvia"> Latvia (${ssrInterpolate($options.countriesCount("Latvia"))}) </option><option value="Luxembourg"> Luxembourg (${ssrInterpolate($options.countriesCount("Luxembourg"))}) </option><option value="Monaco"> Monaco (${ssrInterpolate($options.countriesCount("Monaco"))}) </option><option value="Pays-Bas"> Pays-Bas (${ssrInterpolate($options.countriesCount("Pays-Bas"))}) </option><option value="Nouvelle-Z\xE9lande"> Nouvelle-Z\xE9lande (${ssrInterpolate($options.countriesCount("Nouvelle-Z\xE9lande"))}) </option><option value="Pologne"> Pologne (${ssrInterpolate($options.countriesCount("Pologne"))}) </option><option value="Portugal"> Portugal (${ssrInterpolate($options.countriesCount("Portugal"))}) </option><option value="Roumanie"> Roumanie (${ssrInterpolate($options.countriesCount("Roumanie"))}) </option><option value="Slovaquie"> Slovaquie (${ssrInterpolate($options.countriesCount("Slovaquie"))}) </option><option value="Slov\xE9nie"> Slov\xE9nie (${ssrInterpolate($options.countriesCount("Slov\xE9nie"))}) </option><option value="Espagne"> Espagne (${ssrInterpolate($options.countriesCount("Espagne"))}) </option><option value="Su\xE8de"> Su\xE8de (${ssrInterpolate($options.countriesCount("Su\xE8de"))}) </option><option value="Suisse"> Suisse (${ssrInterpolate($options.countriesCount("Suisse"))}) </option><option value="Royaume-Uni"> Royaume-Uni (${ssrInterpolate($options.countriesCount("Royaume-Uni"))}) </option></optgroup></select></li></ul></div><div class="noResultssvgDiv" style="${ssrRenderStyle($options.sortedAnnonces.length == 0 ? null : { display: "none" })}"><h1>Aucun r\xE9sultat trouv\xE9.</h1></div><div style="${ssrRenderStyle($options.sortedAnnonces ? null : { display: "none" })}" class="containerCards containerCardsAux"><!--[-->`);
    ssrRenderList($options.sortedAnnonces, (annonce, key) => {
      _push(`<div class="box boxAux">`);
      _push(ssrRenderComponent(_component_router_link, {
        target: "_blank",
        style: { "text-decoration": "none" },
        to: "/annonce/?id=" + annonce.annonce.id,
        class: "text-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (annonce.annonce.defaultImage) {
              _push2(`<div class="top"${_scopeId}>`);
              if (annonce.annonce.defaultImage) {
                _push2(`<img${ssrRenderAttr(
                  "src",
                  "uploads/" + annonce.annonce.defaultImage.path + "/" + annonce.annonce.defaultImage.image
                )}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bottom"${_scopeId}><h3${_scopeId}>${ssrInterpolate(annonce.annonce.title)}</h3><div${_scopeId}><div class="location"${_scopeId}><i style="${ssrRenderStyle({ "margin-right": "7px" })}" class="fas fa-map-marker-alt"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.annonce.city)}</span></div></div><div class="advants"${_scopeId}><div${_scopeId}><span${_scopeId}>Nbr de couchages </span><div${_scopeId}><i class="fas fa-bed"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.annonce.numberOfBeds)}</span></div></div><div${_scopeId}><span${_scopeId}>Accueillement </span><div${_scopeId}><i class="fas fa-users"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.annonce.capacity)}</span></div></div><div${_scopeId}><span${_scopeId}>Surface</span><div${_scopeId}><i class="fas fa-vector-square"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(annonce.annonce.surface)}<span${_scopeId}>Cm\xB2</span></span></div></div></div><div class="price"${_scopeId}><span${_scopeId}> \u20AC${ssrInterpolate(parseFloat(annonce.annonce.price).toFixed(2))} <small style="${ssrRenderStyle({ "font-size": "16px" })}"${_scopeId}>/nuit</small></span></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "end" })}"${_scopeId}><div style="${ssrRenderStyle({ "position": "absolute", "top": "-44px", "left": "15px" })}" class="price"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_star_rating, {
              padding: 3,
              animate: true,
              "star-size": 25,
              "show-rating": false,
              "read-only": false,
              rating: 4
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="typeLogement"${_scopeId}><span${_scopeId}>${ssrInterpolate(annonce.annonce.typeLogement)}</span></div></div>`);
          } else {
            return [
              annonce.annonce.defaultImage ? (openBlock(), createBlock("div", {
                key: 0,
                class: "top"
              }, [
                annonce.annonce.defaultImage ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: "uploads/" + annonce.annonce.defaultImage.path + "/" + annonce.annonce.defaultImage.image
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "bottom" }, [
                createVNode("h3", null, toDisplayString(annonce.annonce.title), 1),
                createVNode("div", null, [
                  createVNode("div", { class: "location" }, [
                    createVNode("i", {
                      style: { "margin-right": "7px" },
                      class: "fas fa-map-marker-alt"
                    }),
                    createVNode("span", null, toDisplayString(annonce.annonce.city), 1)
                  ])
                ]),
                createVNode("div", { class: "advants" }, [
                  createVNode("div", null, [
                    createVNode("span", null, "Nbr de couchages "),
                    createVNode("div", null, [
                      createVNode("i", { class: "fas fa-bed" }),
                      createVNode("span", null, toDisplayString(annonce.annonce.numberOfBeds), 1)
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", null, "Accueillement "),
                    createVNode("div", null, [
                      createVNode("i", { class: "fas fa-users" }),
                      createVNode("span", null, toDisplayString(annonce.annonce.capacity), 1)
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", null, "Surface"),
                    createVNode("div", null, [
                      createVNode("i", { class: "fas fa-vector-square" }),
                      createVNode("span", null, [
                        createTextVNode(toDisplayString(annonce.annonce.surface), 1),
                        createVNode("span", null, "Cm\xB2")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "price" }, [
                  createVNode("span", null, [
                    createTextVNode(" \u20AC" + toDisplayString(parseFloat(annonce.annonce.price).toFixed(2)) + " ", 1),
                    createVNode("small", { style: { "font-size": "16px" } }, "/nuit")
                  ])
                ]),
                createVNode("div", { style: { "display": "flex", "justify-content": "end" } }, [
                  createVNode("div", {
                    style: { "position": "absolute", "top": "-44px", "left": "15px" },
                    class: "price"
                  }, [
                    createVNode(_component_star_rating, {
                      padding: 3,
                      animate: true,
                      "star-size": 25,
                      "show-rating": false,
                      "read-only": false,
                      rating: 4
                    })
                  ])
                ]),
                createVNode("div", { class: "typeLogement" }, [
                  createVNode("span", null, toDisplayString(annonce.annonce.typeLogement), 1)
                ])
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div><div class="resultCount"><h3> Affichage de ${ssrInterpolate($options.sortedAnnonces.length)} sur ${ssrInterpolate($data.favorites.length)} r\xE9sultats </h3><button style="${ssrRenderStyle($options.sortedAnnonces.length > 0 && !$data.limitCardsShowen == 1e3 && $data.favorites.length > $options.sortedAnnonces.length ? null : { display: "none" })}" class="btn btn-dark"> Voir plus </button></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/annoncesListPage/favoritesAnnoncesPage.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const favoritesAnnoncesPage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const forgetPassword_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  data() {
    return {
      userInfo: {
        email: ""
      }
    };
  },
  mounted() {
  },
  methods: {
    submitForm() {
      console.log("emallll :: " + this.userInfo.email);
      axios.post("api/forgotPasswordEmailStatus", this.userInfo).then((response2) => {
        if (response2.data.message == "invalid") {
          if (response2.data.error.email[1]) {
            console.log(response2.data.error.email[1]);
            this.error = response2.data.error.email[1];
            Swal.fire({
              icon: "info",
              title: "Le champ email est obligatoire.",
              timer: 5e3,
              confirmButtonColor: "#228de5",
              confirmButtonColor: "#0370c8",
              confirmButtonText: "Compris",
              cancelButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" }
            });
          } else {
            this.error = response2.data.error.email[0];
            console.log(response2.data.error.email[0]);
            Swal.fire({
              icon: "info",
              title: "L'e-mail doit \xEAtre une adresse e-mail valide.",
              timer: 5e3,
              confirmButtonColor: "#228de5",
              confirmButtonText: "Compris",
              cancelButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" }
            });
          }
        } else if (response2.data.message == "not founded") {
          console.log(response2.data.message);
          this.error = response2.data.message;
          Swal.fire({
            icon: "info",
            title: response2.data.text,
            timer: 5e3,
            confirmButtonColor: "#228de5",
            confirmButtonText: "Compris",
            cancelButtonClass: " px-4 py-2 rounded-pill ",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" }
          });
        } else if (response2.data.message == "founded") {
          console.log(response2.data.message);
          this.error = response2.data.message;
          let timerInterval;
          Swal.fire({
            title: "Chargement...",
            timer: 2e3,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            }
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log(response2.data.message);
              localStorage.setItem("resetPasswordEmail", this.userInfo.email);
              localStorage.setItem("passwordChangedSuccessMessage", true);
              this.$router.push("/resetEmailSended");
            }
          });
        }
      });
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "forgotpasswordDiv" }, _attrs))}><h1>Mot de passe oubli\xE9?</h1><h3> Ne vous inqui\xE9tez pas <br> Entrez votre adresse e-mail pour r\xE9initialiser votre mot de passe </h3><form><label for="mail">Entrez simplement votre adresse e-mail ci-dessous et nous vous enverrons un e-mail d&#39;instructions pour la r\xE9cup\xE9ration.</label><input${ssrRenderAttr("value", $data.userInfo.email)} type="email" id="mail" name="mail" placeholder="Email" required><div class="submitButton"><button type="button">R\xE9initialiser</button></div></form></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/connection/forgetPassword/forgetPassword.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const forgetPassword = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const resetEmailSended_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  data() {
    return {
      conRender: 0,
      passwordChanged: false
    };
  },
  mounted() {
    this.conRender = 0;
    if (localStorage.getItem("passwordChangedSuccessMessage") == "true") {
      this.passwordChanged = true;
    } else {
      this.passwordChanged = false;
    }
  },
  methods: {}
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: { "display": "flex", "align-items": "center", "height": "100vh", "min-height": "610px" },
    key: $data.conRender
  }, _attrs))}><div class="funds-success-message-container"><div class="funds-checkmark-text-container"><div class="funds-checkmark-container"><svg class="funds-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="funds-checkmark-circle" cx="26" cy="26" r="25" fill="none"></circle><path class="funds-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path></svg><div class="funds-display-on-ie"><svg class="funds-ie-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="funds-ie-checkmark-circle" cx="26" cy="26" r="25" fill="none"></circle><path class="funds-ie-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path></svg></div></div>`);
  if ($data.passwordChanged) {
    _push(`<h1 class="funds-success-done-text">E-mail envoy\xE9</h1>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.passwordChanged) {
    _push(`<h1 class="funds-success-done-text">Mot de passe modifi\xE9</h1>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="funds-success-message">`);
  if (!$data.passwordChanged) {
    _push(`<h2>Veuillez essayer \xE0 nouveau d&#39;acc\xE9der \xE0 votre compte</h2>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.passwordChanged) {
    _push(`<h2>Vous allez recevoir un e-mail pour cr\xE9er un nouveau mot de passe</h2>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.passwordChanged) {
    _push(`<p>Si vous ne recevez pas cet e-mail, veuillez v\xE9rifier votre spam</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_router_link, { to: "/se-connecter" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button style="${ssrRenderStyle({ "margin": "50px 0px" })}" class="btn btn-dark px-4 py-1"${_scopeId}>Se connecter</button>`);
      } else {
        return [
          createVNode("button", {
            style: { "margin": "50px 0px" },
            class: "btn btn-dark px-4 py-1"
          }, "Se connecter")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/connection/forgetPassword/resetEmailSended.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const resetEmailSended = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const resetPasswordForm_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  data() {
    return {
      showPassword: false,
      user: {
        email: "",
        password: "",
        token: "xx"
      },
      errors: {
        password: ""
      }
    };
  },
  mounted() {
    this.user.email = this.$route.query.email;
    this.user.token = this.$route.query.token;
    axios.post("api/verifyResetToken", this.user).then((response2) => {
      if (response2.data.status == "not found") {
        this.$router.push("/");
      } else if (response2.data.status == "found")
        ;
    });
    if (localStorage.getItem("token").length > 0) {
      this.$router.push("/");
    }
    this.user.email = localStorage.getItem("resetPasswordEmail");
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    }
  },
  methods: {
    UpdatePassword() {
      axios.post("api/resetPassword", this.user).then((response2) => {
        console.log(response2);
        if (response2.data.message == "invalid") {
          this.errors.password = response2.data.error.password[0];
          console.log("this : ", response2.data.error.password);
        } else {
          this.errors.password = "";
          localStorage.setItem("passwordChangedSuccessMessage", false);
          this.$router.push("/resetEmailSended");
        }
      }).catch((err) => {
      });
    },
    hasError(item) {
      if (this.errors[item] != "") {
        return true;
      } else {
        return false;
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mainDiv" }, _attrs))}><div class="cardStyle"><img${ssrRenderAttr("src", "")} id="signupLogo"><div class="titleCardForm"><h2 class="formTitle"> R\xE9initialiser votre mot de passe </h2></div><div class="inputDiv"><label class="inputLabel" for="password">Mot de passe</label>`);
  if (!$data.showPassword) {
    _push(`<input${ssrRenderAttr("value", $data.user.password)} type="password" class="${ssrRenderClass([$options.hasError("password") ? "is-invalid" : "", "form-control mt-2 input"])}">`);
  } else {
    _push(`<input${ssrRenderAttr("value", $data.user.password)} type="text" class="${ssrRenderClass([$options.hasError("password") ? "is-invalid" : "", "form-control mt-2 input"])}">`);
  }
  _push(`<button style="${ssrRenderStyle({ "display": "flex", "justify-content": "end", "margin-top": "8px" })}" class="button"><span class="icon is-small is-right"><i class="${ssrRenderClass([{ "fa-eye-slash": $data.showPassword, "fa-eye": !$data.showPassword }, "fas"])}"></i></span></button></div><div class="inputDiv"><label class="inputLabel" for="confirmPassword">Confirmer mot de passe</label>`);
  if (!$data.showPassword) {
    _push(`<input${ssrRenderAttr("value", $data.user.password_confirmation)} type="password" class="${ssrRenderClass([$options.hasError("password") ? "is-invalid" : "", "form-control mt-2 input"])}">`);
  } else {
    _push(`<input${ssrRenderAttr("value", $data.user.password_confirmation)} type="text" class="${ssrRenderClass([$options.hasError("password") ? "is-invalid" : "", "form-control mt-2 input"])}">`);
  }
  _push(`</div><div style="${ssrRenderStyle($data.errors.password ? null : { display: "none" })}" class="${ssrRenderClass([$data.errors.password ? "" : "mt-3", "inputDiv col-12"])}"><div class="alert text-danger p-0 my-1 alert-transparent">`);
  if ($data.errors.password != "") {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(` Veuillez v\xE9rifier le mot de passe. </div></div><div class="buttonWrapper"><button type="botton" id="submitButton" class="submitButtonAux pure-button pure-button-primary"><span>Continuer</span></button></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/connection/forgetPassword/resetPasswordForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const resetPasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const newClientAccount_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  data() {
    return {
      loading: true
    };
  },
  components: { loadingPage },
  mounted() {
    this.hideSpinner();
  },
  methods: {
    hideSpinner() {
      setTimeout(() => this.loading = false, 2e3);
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loadingPage = resolveComponent("loadingPage");
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="loaderDivPage">`);
  if ($data.loading) {
    _push(`<div class="loaderDiv">`);
    _push(ssrRenderComponent(_component_loadingPage, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.loading) {
    _push(`<div class=""><div class="contentNewAccount"><div class="wrapper-1"><div class="wrapper-2"><h1>Merci !</h1><p>Bienvenu dans notre platforme</p><p>, vous allez recevoir un e-mail de confirmation</p>`);
    _push(ssrRenderComponent(_component_router_link, {
      onClick: _ctx.scrollToTop,
      style: { "text-decoration": "none" },
      to: "/se-connecter",
      class: "text-dark"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="go-home"${_scopeId}> Se connecter </button>`);
        } else {
          return [
            createVNode("button", { class: "go-home" }, " Se connecter ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="footer-like"><p>Vous n&#39;avez pas encore r\xE9\xE7u? <a href="#">Renvoyer \xE0 nouveau</a></p></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/connection/signup/newClientAccount.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const newClientAccount = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const emailVerificationMessage_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  data() {
    return {
      user: {
        email: ""
      }
    };
  },
  mounted() {
    console.log(this.$route.query);
    this.user.email = this.$route.query;
    axios.post("api/emailVerification", this.user).then((response2) => {
      console.log("ress:  ", response2.data.status);
      if (response2.data.status == "done") {
        setTimeout(() => {
          this.$router.push("/se-connecter");
        }, 5e3);
      } else {
        this.$router.push("/se-connecter");
      }
    }).catch((err) => {
      console.log("err  :    ", err);
    });
  },
  methods: {}
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: { "display": "flex", "align-items": "center", "height": "80vh", "min-block-size": "480px" },
    key: _ctx.conRender
  }, _attrs))}><div class="funds-success-message-container"><div class="funds-checkmark-text-container"><div class="funds-checkmark-container"><svg class="funds-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="funds-checkmark-circle" cx="26" cy="26" r="25" fill="none"></circle><path class="funds-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path></svg><div class="funds-display-on-ie"><svg class="funds-ie-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="funds-ie-checkmark-circle" cx="26" cy="26" r="25" fill="none"></circle><path class="funds-ie-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path></svg></div></div><h1 class="funds-success-done-text">Compte v\xE9rifi\xE9 !</h1></div><div class="funds-success-message"><h2>Votre compte a \xE9t\xE9 activ\xE9 avec succ\xE8s </h2><p>Bienvenu chez AtypikHouse!</p></div><div style="${ssrRenderStyle({ "width": "100%", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "height": "200px" })}">`);
  _push(ssrRenderComponent(_component_router_link, {
    style: { "text-decoration": "none" },
    to: "/se-connecter",
    class: "text-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button style="${ssrRenderStyle({ "background-color": "black", "color": "white", "padding": "15px 50px", "border-radius": "47px" })}"${_scopeId}>Se connecter</button>`);
      } else {
        return [
          createVNode("button", { style: { "background-color": "black", "color": "white", "padding": "15px 50px", "border-radius": "47px" } }, "Se connecter")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/connection/signup/emailVerificationMessage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const emailVerificationMessage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const contactFormMailSent_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  data() {
    return {};
  },
  mounted() {
  },
  methods: {}
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bodySuccessMessage" }, _attrs))}><div class="card"><div style="${ssrRenderStyle({ "border-radius": "200px", "height": "200px", "width": "200px", "background": "rgb(215, 232, 247)", "margin": "0 auto" })}"><i class="checkmark">\u2713</i></div><h1>Nous avons bien r\xE9\xE7u votre demande</h1><p>Merci beaucoup de nous avoir contact\xE9, cela signifie beaucoup pour nous, nous vous r\xE9pondrons rapidement. </p><div class="footerBottonDiv">`);
  _push(ssrRenderComponent(_component_router_link, {
    style: { "text-decoration": "none" },
    to: "/",
    class: "text-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button${_scopeId}>www.atypik-house.com</button>`);
      } else {
        return [
          createVNode("button", null, "www.atypik-house.com")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/contact/contactFormMailSent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const contactFormMailSent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const updateAnnonce_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      typeLogementAutre: "",
      annonce: {
        annonce_id: "",
        title: "",
        typeLogement: "",
        address: "",
        compAddress: "",
        city: "",
        postalCode: "",
        country: "France",
        surface: "",
        numberOfBeds: "",
        capacity: "",
        description: "",
        optionsLogement: [],
        servicesLogement: [],
        animaux: "",
        informationsSupp: "",
        images: [],
        form: new FormData(),
        urls: [],
        imagesUrls: [],
        user_id: "",
        price: ""
      },
      annonceErrors: {
        title: "",
        typeLogement: "",
        address: "",
        city: "",
        postalCode: "",
        country: "France",
        surface: "",
        numberOfBeds: "",
        capacity: "",
        description: "",
        animaux: "",
        user_id: "",
        price: ""
      },
      token: "",
      annonceErrorsCheck: false,
      notification: {},
      adminsAndModerateurUsers: [],
      user: {
        role: ""
      },
      notification: {},
      managementAnnonceStep: 1,
      typesLogement: [],
      suppPropreties: [],
      optionsLogementArray: [],
      servicesLogementArray: [],
      servicesLogementArrayAux: [],
      serviceLogementAux: [],
      imagesArrayToDelete: []
    };
  },
  mounted() {
    this.annonce.user_id = localStorage.getItem("userId");
    this.token = localStorage.getItem("token");
    this.user.role = localStorage.getItem("userRole");
    console.log(this.annonce.user_id);
    if (localStorage.getItem("token") != "" && localStorage.getItem("profileInfoUpdatedAlready") == "false") {
      this.$router.push({ path: "/profileAdmin" });
    }
    this.getTypeLogement();
    this.getAnnonce();
  },
  methods: {
    checkSelectedService() {
      var found = false;
      this.servicesLogementArray.forEach((elementAux) => {
        found = false;
        this.annonce.servicesLogement.forEach((element, key) => {
          if (element == elementAux.name) {
            found = true;
            elementAux.checked = true;
          } else if (!found && element != elementAux.name && key == this.annonce.servicesLogement.length - 1) {
            elementAux.checked = false;
          }
        });
      });
    },
    checkSelectedOption() {
      this.optionsLogementArray.forEach((elementAux) => {
        this.annonce.optionsLogement.forEach((element) => {
          console.log("hahahah : ", elementAux.name, element);
          if (element == elementAux.name) {
            elementAux.checked = true;
          }
        });
      });
      var found = false;
      this.optionsLogementArray.forEach((elementAux) => {
        found = false;
        this.annonce.optionsLogement.forEach((element, key) => {
          if (element == elementAux.name) {
            found = true;
            elementAux.checked = true;
          } else if (!found && element != elementAux.name && key == this.annonce.optionsLogement.length - 1) {
            elementAux.checked = false;
          }
        });
      });
    },
    getTypeLogement() {
      this.typesLogement = [];
      axios.get("/api/getTypeLogement").then((response2) => {
        console.log("");
        response2.data.typesLogement.forEach((element) => {
          if (element.name != "Autre")
            this.typesLogement.push(element);
        });
        response2.data.typesLogement.forEach((element) => {
          if (element.name == "Autre")
            this.typesLogement.push(element);
        });
      }).catch((err) => {
      });
    },
    getPropretiesByTypeLogement(id2) {
      this.suppPropreties = [];
      console.log("iddd :   ", id2);
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        type_logement_id: id2
      };
      axios.post("/api/getPropretiesByTypeLogement/", req, config).then((response2) => {
        response2.data.propretiesElements.forEach((element) => {
          this.suppPropreties.push(element);
        });
      });
    },
    getServicesByTypeLogement(id2) {
      this.servicesLogementArray = [];
      this.servicesLogementArrayAux = [];
      console.log("iddd :   ", id2);
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        type_logement_id: id2
      };
      axios.post("/api/getServicesByTypeLogement/", req, config).then((response2) => {
        response2.data.servicesElements.forEach((element) => {
          this.servicesLogementArray.push(element);
          this.servicesLogementArrayAux.push(element);
        });
        this.checkSelectedService();
      });
    },
    getOptionsByTypeLogement(id2) {
      this.optionsLogementArray = [];
      this.optionsLogementArrayAux = [];
      console.log("iddd :   ", id2);
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        type_logement_id: id2
      };
      axios.post("/api/getOptionsByTypeLogement/", req, config).then((response2) => {
        response2.data.optionsElements.forEach((element) => {
          this.optionsLogementArray.push(element);
          this.optionsLogementArrayAux.push(element);
        });
        this.checkSelectedOption();
      });
    },
    updateFormInputs(id2) {
      this.getPropretiesByTypeLogement(id2);
      this.getServicesByTypeLogement(id2);
      this.getOptionsByTypeLogement(id2);
    },
    servicesManagementClick(service) {
      if (service.checked) {
        service.checked = false;
        this.annonce.servicesLogement.forEach((element) => {
          if (element.name == service.name) {
            this.servicesLogementArray.forEach((elAux, key) => {
              if (element.name == elAux) {
                this.servicesLogementArray[key].checked = false;
              }
            });
          }
        });
      } else {
        service.checked = true;
        this.annonce.servicesLogement.forEach((element) => {
          if (element.name == service.name) {
            this.servicesLogementArray.forEach((elAux, key) => {
              if (element.name == elAux) {
                this.servicesLogementArray[key].checked = true;
              }
            });
          }
        });
      }
    },
    optionManagementClick(option) {
      if (option.checked) {
        option.checked = false;
        this.annonce.optionsLogement.forEach((element) => {
          if (element.name == option.name) {
            this.optionsLogementArray.forEach((elAux, key) => {
              if (element.name == elAux) {
                this.optionsLogementArray[key].checked = false;
              }
            });
          }
        });
      } else {
        option.checked = true;
        this.annonce.optionsLogement.forEach((element) => {
          if (element.name == option.name) {
            this.optionsLogementArray.forEach((elAux, key) => {
              if (element.name == elAux) {
                this.optionsLogementArray[key].checked = true;
              }
            });
          }
        });
      }
    },
    deleteImage(x, url) {
      console.log("urlurlurlurl", url.default, " urlurlurlurl ");
      let showDenyButton = false;
      console.log("url.default : ", url);
      if (url.default == "true") {
        showDenyButton = false;
      } else {
        showDenyButton = true;
      }
      Swal.fire({
        icon: "question",
        showDenyButton,
        confirmButtonColor: "rgb(255, 78, 78)",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        denyButtonColor: "#4c8dc2",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        cancelButtonColor: "rgb(31, 31, 31)",
        cancelButtonClass: " px-4 py-2 rounded-pill ",
        showCancelButton: true,
        confirmButtonText: "Supprimer",
        denyButtonText: `Image par d\xE9faut`,
        cancelButtonText: `Fermer`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Supprimer cette photo?",
            showDenyButton: true,
            confirmButtonColor: "rgb(255, 78, 78)",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            denyButtonColor: "rgb(31, 31, 31)",
            denyButtonClass: " px-4 py-2 rounded-pill ",
            showCancelButton: false,
            confirmButtonText: "Supprimer",
            denyButtonText: `Non`
          }).then((result2) => {
            if (result2.isConfirmed) {
              this.annonce.imagesUrls.splice(x, 1);
              this.imagesArrayToDelete.push(url);
            }
          });
        }
        if (result.isDenied) {
          Swal.fire({
            title: "Images par d\xE9faut?",
            showDenyButton: true,
            confirmButtonColor: "#4c8dc2",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            denyButtonColor: "rgb(31, 31, 31)",
            denyButtonClass: " px-4 py-2 rounded-pill ",
            showCancelButton: false,
            confirmButtonText: "Oui",
            denyButtonText: `Non`
          }).then((result2) => {
            if (result2.isConfirmed) {
              this.updateImageByDefaultState(url);
            }
          });
        }
      });
    },
    updateImageByDefaultState(image) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      axios.post("/api/updateImageByDefaultState/", image, config).then((response2) => {
        this.getAnnonce();
      });
    },
    onFilesChange(e) {
      this.annonce.images = [];
      this.annonce.urls = [];
      let file = e.target.files;
      if (!file.length) {
        return false;
      } else {
        for (let i = 0; i < file.length; i++) {
          this.annonce.images.push(file[i]);
          this.annonce.urls.push(URL.createObjectURL(file[i]));
        }
        console.log(this.annonce.images);
      }
    },
    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    getAnnonce() {
      this.images = [];
      let annonceAux = {
        id: this.$route.query.annonce_id
      };
      axios.post("api/getAnnonceById", annonceAux).then((response2) => {
        this.annonce = response2.data.userAnnonce[0];
        this.annonce.imagesUrls = [];
        response2.data.userAnnonce[0].images.forEach((element) => {
          if (element.default == "true") {
            this.images.push(element);
            this.annonce.imagesUrls.push(
              "uploads/" + element.path + "/" + element.image
            );
          }
        });
        response2.data.userAnnonce[0].images.forEach((element) => {
          if (element.default == "false") {
            this.images.push(element);
            this.annonce.imagesUrls.push(
              "uploads/" + element.path + "/" + element.image
            );
          }
        });
        console.log("this.annonce ;;  lendddd  : ", this.annonce.urls);
        console.log("response.data.userAnnonce[0].servicesLogement : ", response2.data.userAnnonce[0].servicesLogement);
        console.log("response.data.userAnnonce[0].servicesLogemJSON.parse(entJSON.parse( : ", JSON.parse(response2.data.userAnnonce[0].servicesLogement));
        this.annonce.servicesLogement = JSON.parse(response2.data.userAnnonce[0].servicesLogement);
        this.annonce.optionsLogement = JSON.parse(response2.data.userAnnonce[0].optionsLogement);
        this.getServicesByTypeLogement(response2.data.userAnnonce[0].type_logement_id);
        this.getPropretiesByTypeLogement(response2.data.userAnnonce[0].type_logement_id);
        this.getOptionsByTypeLogement(response2.data.userAnnonce[0].type_logement_id);
        console.log("imagess  : ", this.annonce);
      });
    },
    deleteImages() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      let req = {
        imagesArray: this.imagesArrayToDelete,
        user_id: this.annonce.user_id,
        annonce_id: this.annonce.annonce_id
      };
      axios.post("api/deleteImagesOnUpdateAnnonce", req, config).then((response2) => {
        console.log(response2.data);
      }).catch((err) => {
        console.log(response.err);
      });
    },
    submitUpdateAnnonceForm() {
      this.annonce.servicesLogement = [];
      this.annonce.optionsLogement = [];
      this.servicesLogementArray.forEach((element) => {
        if (element.checked == true) {
          this.annonce.servicesLogement.push(element.name);
        }
      });
      this.optionsLogementArray.forEach((element) => {
        if (element.checked == true) {
          this.annonce.optionsLogement.push(element.name);
        }
      });
      console.log(this.annonce);
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      };
      axios.post("api/updateAnnonce", this.annonce, config).then((response2) => {
        console.log("response annonce id : ", response2.data.annonce.id);
        console.log("response USER id : ", this.annonce.user_id);
        this.annonce.annonce_id = this.$route.query.annonce_id;
        if (this.imagesArrayToDelete.length > 0) {
          this.deleteImages();
        }
        if (this.annonce.urls) {
          this.addImages();
        }
        this.annonceErrors = {
          title: "",
          typeLogement: "",
          address: "",
          city: "",
          postalCode: "",
          country: "France",
          surface: "",
          numberOfBeds: "",
          capacity: "",
          description: "",
          animaux: "",
          price: ""
        };
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Annonce a \xE9t\xE9 bien modifi\xE9",
          showConfirmButton: false,
          timer: 2e3
        });
      }).catch((err) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
        console.log("err : ", err);
        if (err.response) {
          if (err.response.data.errors) {
            if (err.response.data.errors.price) {
              this.annonceErrors.price = (_a = err.response.data.errors.price[0]) != null ? _a : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.title = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.title) {
              this.annonceErrors.title = (_b = err.response.data.errors.title[0]) != null ? _b : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.title = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.address) {
              this.annonceErrors.address = (_c = err.response.data.errors.address[0]) != null ? _c : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.address = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.typeLogement) {
              this.annonceErrors.typeLogement = (_d = err.response.data.errors.typeLogement[0]) != null ? _d : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.typeLogement = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.city) {
              this.annonceErrors.city = (_e = err.response.data.errors.city[0]) != null ? _e : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.city = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.postalCode) {
              this.annonceErrors.postalCode = (_f = err.response.data.errors.postalCode[0]) != null ? _f : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.postalCode = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.country) {
              this.annonceErrors.country = (_g = err.response.data.errors.country[0]) != null ? _g : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.country = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.surface) {
              this.annonceErrors.surface = (_h = err.response.data.errors.surface[0]) != null ? _h : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.surface = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.numberOfBeds) {
              this.annonceErrors.numberOfBeds = (_i = err.response.data.errors.numberOfBeds[0]) != null ? _i : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.numberOfBeds = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.capacity) {
              this.annonceErrors.capacity = (_j = err.response.data.errors.capacity[0]) != null ? _j : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.capacity = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.description) {
              this.annonceErrors.description = (_k = err.response.data.errors.description[0]) != null ? _k : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.description = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.animaux) {
              this.annonceErrors.animaux = (_l = err.response.data.errors.animaux[0]) != null ? _l : "";
              this.annonceErrorsCheck = true;
            } else {
              this.annonceErrors.animaux = "";
              this.annonceErrorsCheck = false;
            }
            if (err.response.data.errors.user_id) {
              this.annonceErrors.user_id = (_m = err.response.data.errors.user_id[0]) != null ? _m : "";
            } else {
              this.annonceErrors.user_id = "";
            }
          }
        }
      });
      this.sendNotifications();
    },
    sendNotifications() {
      this.notification.from_id = localStorage.getItem("userId");
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      this.user.role = localStorage.getItem("userRole");
      this.user.id = localStorage.getItem("userId");
      let annonce = {
        annonce_id: this.$route.query.annonce_id
      };
      let users = [];
      axios.post("/api/getLikesForAnnonce", annonce).then((response2) => {
        response2.data.likes.forEach((element) => {
          users.push(element.user);
        });
      });
      console.log("this.user.id==annonce.user_id :", this.user.id, this.annonce.user_id);
      if (this.user.id == this.annonce.user_id) {
        this.notification.user_id = this.annonce.user_id;
        this.notification.from_id = this.user.id;
        this.notification.content = "A modifi\xE9 son annonce";
        this.notification.type = "update";
        this.link = "/annonce/?id=" + this.$route.query.annonce_id;
        setTimeout(() => {
          users.forEach((element) => {
            this.notification.from_id = this.user.id;
            this.notification.user_id = element.id;
            this.notification.content = "A modifi\xE9 son annonce";
            this.notification.type = "update";
            this.notification.link = "/annonce/?id=" + this.$route.query.annonce_id;
            axios.post("api/sendNotification", this.notification, config);
            console.log("his.notification   ", element.id, " -- ", this.notification);
          });
        }, 1e3);
      }
    },
    addImages() {
      this.annonce.form = new FormData();
      for (let i = 0; i < this.annonce.images.length; i++) {
        this.annonce.form.append("images[]", this.annonce.images[i]);
      }
      this.annonce.form.append("annonceTitle", this.annonce.title);
      this.annonce.form.append("annonce_id", this.annonce.annonce_id);
      this.annonce.form.append("user_id", this.annonce.user_id);
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "content-type": "multipart/form-data"
        }
      };
      this.token = localStorage.getItem("token");
      axios.post("api/uploadAnnonceImages", this.annonce.form, config).then((response2) => {
        this.annonce.images = [];
      }).catch((error) => {
        console.log(error);
      });
    },
    hasError(item) {
      if (this.annonceErrors[item] != "") {
        return true;
      } else {
        return false;
      }
    },
    onChange(event) {
      var optionText = event.target.value;
      console.log(optionText);
      this.annonce.typeLogement = optionText;
    },
    onlyForCurrency($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.annonce.price.indexOf(".") != -1)) {
        $event.preventDefault();
      }
      if (this.annonce.price != null && this.annonce.price.indexOf(".") > -1 && this.annonce.price.split(".")[1].length > 1) {
        $event.preventDefault();
      }
    },
    addServiceToAnnonce() {
      this.serviceLogementAux.forEach((element) => {
        this.annonce.servicesLogement.push(element);
      });
      document.getElementById("addPropretyFormClose").click();
      this.serviceLogementAux = [];
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "containerFormAnnonce" }, _attrs))}><div class="title">Modifier</div><div class="content"><form><div class="user-details"><div class="input-box"><span class="${ssrRenderClass([$options.hasError("title") ? "text-danger" : "", "details"])}">Titre `);
  if ($options.hasError("title")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input type="text"${ssrRenderAttr("value", $data.annonce.title)} placeholder="Titre de l&#39;annonce" required></div></div><div class="house-details"><div style="${ssrRenderStyle({ "width": "100%" })}" class="input-box"><span class="${ssrRenderClass([$options.hasError("address") ? "text-danger" : "", "details"])}">Adresse `);
  if ($options.hasError("address")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input type="text"${ssrRenderAttr("value", $data.annonce.address)} placeholder="Adresse" required></div><div style="${ssrRenderStyle({ "width": "100%" })}" class="input-box"><span class="details">Compl\xE9ment d&#39;adresse </span><input type="text"${ssrRenderAttr("value", $data.annonce.compAddress)} placeholder="Compl\xE9ment d&#39;adresse"></div><div class="input-box"><span class="${ssrRenderClass([$options.hasError("city") ? "text-danger" : "", "details"])}">Ville `);
  if ($options.hasError("city")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input type="text"${ssrRenderAttr("value", $data.annonce.city)} placeholder="Ville" required></div><div class="input-box"><span class="${ssrRenderClass([$options.hasError("postalCode") ? "text-danger" : "", "details"])}">Code postal `);
  if ($options.hasError("postalCode")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input type="text"${ssrRenderAttr("value", $data.annonce.postalCode)} placeholder="Code postal" required></div><div class="input-box"><span class="details">Pays</span><select style="${ssrRenderStyle({ "background-color": "white" })}"><option value="Belgique">Belgique</option><option value="Bulgarie">Bulgarie</option><option value="Croatie">Croatie</option><option value="R\xE9publique tch\xE8que">R\xE9publique tch\xE8que</option><option value="Danemark">Danemark</option><option value="Estonie">Estonie</option><option value="Finlande">Finlande</option><option value="France" selected>France</option><option value="Allemagne">Allemagne</option><option value="Gr\xE8ce">Gr\xE8ce</option><option value="Hongrie">Hongrie</option><option value="Islande">Islande</option><option value="Italie">Italie</option><option value="Latvia">Latvia</option><option value="Luxembourg">Luxembourg</option><option value="Monaco">Monaco</option><option value="Pays-Bas">Pays-Bas</option><option value="Nouvelle-Z\xE9lande">Nouvelle-Z\xE9lande</option><option value="Pologne">Pologne</option><option value="Portugal">Portugal</option><option value="Roumanie">Roumanie</option><option value="Slovaquie">Slovaquie</option><option value="Slov\xE9nie">Slov\xE9nie</option><option value="Espagne">Espagne</option><option value="Su\xE8de">Su\xE8de</option><option value="Suisse">Suisse</option><option value="Royaume-Uni">Royaume-Uni</option></select></div></div><div class="title2">Description</div><div class="house-details"><div class="input-box"><span class="${ssrRenderClass([$options.hasError("surface") ? "text-danger" : "", "details"])}">Superficie en m\xB2 `);
  if ($options.hasError("surface")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input min="1" type="number"${ssrRenderAttr("value", $data.annonce.surface)} placeholder="Superficie en m\xB2" required style="${ssrRenderStyle({ "text-align": "center", "padding": "0" })}"></div><div class="input-box"><span class="${ssrRenderClass([$options.hasError("numberOfBeds") ? "text-danger" : "", "details"])}">Nombre de couchages `);
  if ($options.hasError("numberOfBeds")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input style="${ssrRenderStyle({ "text-align": "center", "padding": "0" })}" type="number" min="1"${ssrRenderAttr("value", $data.annonce.numberOfBeds)} placeholder="Nombre de couchages" required></div><div class="input-box"><span class="${ssrRenderClass([$options.hasError("capacity") ? "text-danger" : "", "details"])}">Capacit\xE9 d&#39;accueillement `);
  if ($options.hasError("capacity")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input style="${ssrRenderStyle({ "text-align": "center", "padding": "0" })}" type="number" min="1"${ssrRenderAttr("value", $data.annonce.capacity)} placeholder="Capacit\xE9 d&#39;accueillement" required></div><div class="input-box"><span class="${ssrRenderClass([$options.hasError("price") ? "text-danger" : "", "details"])}">Tarif d&#39;une nuit en \u20AC `);
  if ($options.hasError("price")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><input style="${ssrRenderStyle({ "text-align": "center", "padding": "0" })}" type="text" min="1"${ssrRenderAttr("value", $data.annonce.price)} placeholder="Tarif d&#39;une nuit en \u20AC" required></div><!--[-->`);
  ssrRenderList($data.annonce.suppPropretiesAnnonce, (suppProprety, key) => {
    _push(`<div style="${ssrRenderStyle($data.annonce.suppPropretiesAnnonce.length > 0 ? null : { display: "none" })}" class="input-box"><span class="details">${ssrInterpolate(suppProprety.name)}</span><input style="${ssrRenderStyle({ "text-align": "center", "padding": "0" })}" type="text" min="1"${ssrRenderAttr("value", $data.annonce.suppPropretiesAnnonce[key].suppPropretiesAnnonce)}${ssrRenderAttr("placeholder", suppProprety.name)}${ssrIncludeBooleanAttr(suppProprety.required == "Oui") ? " required" : ""}></div>`);
  });
  _push(`<!--]--><div class="textarea-box"><span class="${ssrRenderClass([$options.hasError("description") ? "text-danger" : "", "details"])}">Description g\xE9n\xE9rale `);
  if ($options.hasError("description")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span><textarea type="text" placeholder="..." required>${ssrInterpolate($data.annonce.description)}</textarea></div></div><div class="gender-details"><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "width": "100%" })}"><label style="${ssrRenderStyle({ "padding": "0 35px", "font-size": "20px", "font-weight": "bold" })}">Differents services</label><div id="tasks"><!--[-->`);
  ssrRenderList($data.servicesLogementArray, (service, key) => {
    _push(`<div style="${ssrRenderStyle($data.servicesLogementArray.length > 0 ? null : { display: "none" })}" class="${ssrRenderClass([service.checked ? "taskChecked" : "", "task"])}">`);
    if (service.checked) {
      _push(`<div class="check icon"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="task-name">${ssrInterpolate(service.name)}</span></div>`);
  });
  _push(`<!--]-->`);
  if (!$data.annonce.servicesLogement.length > 0) {
    _push(`<div class="task"><span class="task-name"> Aucun service </span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="task taskAux" style="${ssrRenderStyle({ "justify-content": "center", "border-bottom": "none", "cursor": "default" })}"><span style="${ssrRenderStyle({ "font-size": "25px", "color": "#20c997", "cursor": "pointer" })}" data-bs-toggle="modal" data-bs-target="#addPropretyForm" class="task-name"><i class="fas fa-plus-circle"></i></span></div></div></div></div><div class="gender-details"><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "width": "100%" })}"><label style="${ssrRenderStyle({ "padding": "0 35px", "font-size": "20px", "font-weight": "bold" })}">Differentes options</label><div id="tasks"><!--[-->`);
  ssrRenderList($data.optionsLogementArray, (option, key) => {
    _push(`<div style="${ssrRenderStyle($data.optionsLogementArray.length > 0 ? null : { display: "none" })}" class="${ssrRenderClass([option.checked ? "taskChecked" : "", "task"])}">`);
    if (option.checked) {
      _push(`<div class="check icon"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="task-name">${ssrInterpolate(option.name)}</span></div>`);
  });
  _push(`<!--]-->`);
  if (!$data.annonce.optionsLogement.length > 0) {
    _push(`<div class="task"><span class="task-name"> Aucune option </span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="task taskAux" style="${ssrRenderStyle({ "justify-content": "center", "border-bottom": "none", "cursor": "default" })}"><span style="${ssrRenderStyle({ "font-size": "25px", "color": "#20c997", "cursor": "pointer" })}" data-bs-toggle="modal" data-bs-target="#addPropretyForm" class="task-name"><i class="fas fa-plus-circle"></i></span></div></div></div></div><div class="${ssrRenderClass([$options.hasError("animaux") ? "text-danger" : "", "title2"])}"> Animaux autoris\xE9s ? `);
  if ($options.hasError("animaux")) {
    _push(`<span>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="gender-details"><input type="radio" name="animauxAutorisation"${ssrIncludeBooleanAttr(ssrLooseEqual($data.annonce.animaux, "oui")) ? " checked" : ""} value="oui" id="radioAnimaux1"><input type="radio" name="animauxAutorisation"${ssrIncludeBooleanAttr(ssrLooseEqual($data.annonce.animaux, "non")) ? " checked" : ""} value="non" id="radioAnimaux2"><div class="category"><label style="${ssrRenderStyle({ "margin-right": "20px" })}" for="radioAnimaux1"><span class="dot oneAnimaux"></span><span class="gender">Oui</span></label><label for="radioAnimaux2"><span class="dot twoAnimaux"></span><span class="gender">Non</span></label></div></div><div class="title2">Informations suppl\xE9mentaires</div><div class="house-details"><div class="textarea-box"><textarea type="text" placeholder="..." required>${ssrInterpolate($data.annonce.informationsSupp)}</textarea></div><div class="textarea-box"><span class="details">Images</span>`);
  if ($data.annonce.imagesUrls.length > 0) {
    _push(`<div class="containerImages"><!--[-->`);
    ssrRenderList($data.annonce.imagesUrls, (url, key) => {
      _push(`<div><img class="annonceImages"${ssrRenderAttr("src", url)} alt=""></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="textarea-box"><span class="details">Ajouter des images</span><input multiple type="file" class="form-control imagesInput" accept="image/*">`);
  if ($data.annonce.urls) {
    _push(`<div class="containerImages"><!--[-->`);
    ssrRenderList($data.annonce.urls, (url, key) => {
      _push(`<div><img class="annonceImages"${ssrRenderAttr("src", url)} alt=""></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if ($data.annonceErrorsCheck) {
    _push(`<div class="text-danger fw-bold px-0"> Veuillez v\xE9rifier les informations saisies </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="button"><button type="submit">Modifier</button></div></form></div><div class="modal fade" id="addPropretyForm" tabindex="-1" role="dialog" aria-labelledby="addPropretyFormLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content" style="${ssrRenderStyle({ "border-radius": "50px" })}"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Modal title</h5><button type="button" class="btn-close" id="addPropretyFormClose" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="row rowDivContact" style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}"><div class="contactCardDiv"><div class="contact_inner"><div class="row"><div class="col-md-12"><div class="contact_form_inner"><div class="contact_field contact_fieldAux"><form>`);
  if ($data.managementAnnonceStep == 1) {
    _push(`<h6>Ajouter des nouveaux services</h6>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 2) {
    _push(`<h6>Ajouter des nouvelles options</h6>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 1) {
    _push(`<ul><li><div class="gender-details"><div class="checkboxPropretyForm"><!--[-->`);
    ssrRenderList($data.servicesLogementArray, (serviceLogement, key) => {
      _push(`<input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.serviceLogementAux) ? ssrLooseContain($data.serviceLogementAux, serviceLogement.name) : $data.serviceLogementAux) ? " checked" : ""} name="xxx"${ssrRenderAttr("value", serviceLogement.name)}${ssrRenderAttr("id", "modalDynamicServices" + key)}>`);
    });
    _push(`<!--]--><!--[-->`);
    ssrRenderList($data.servicesLogementArray, (serviceLogement, key) => {
      _push(`<div class="category"><label${ssrRenderAttr("for", "modalDynamicServices" + key)}><span class="${ssrRenderClass(["labeldynamicservices" + key, "dot"])}"></span><span class="gender">${ssrInterpolate(serviceLogement.name)}</span></label></div>`);
    });
    _push(`<!--]--></div></div></li></ul>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 2) {
    _push(`<ul><li><div class="gender-details"><div class="checkboxPropretyForm"><!--[-->`);
    ssrRenderList($data.optionsLogementArray, (optionLogement, key) => {
      _push(`<input type="checkbox" name="xxx"${ssrRenderAttr("value", optionLogement.name)}${ssrRenderAttr("id", "modalDynamicServices" + key)}>`);
    });
    _push(`<!--]--><!--[-->`);
    ssrRenderList($data.optionsLogementArray, (optionLogement, key) => {
      _push(`<div class="category"><label${ssrRenderAttr("for", "modalDynamicServices" + key)}><span class="${ssrRenderClass(["labeldynamicservices" + key, "dot"])}"></span><span class="gender">${ssrInterpolate(optionLogement.name)}</span></label></div>`);
    });
    _push(`<!--]--></div></div></li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="btnDivFormPro">`);
  if ($data.managementAnnonceStep == 1) {
    _push(`<button type="submit" class="contact_form_submit contact_form_submitAux"> Ajouter </button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.managementAnnonceStep == 2) {
    _push(`<button type="submit" class="contact_form_submit contact_form_submitAux"> Ajouter </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form></div></div></div></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/updateAnnoncePage/updateAnnonce.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const updateAnnonce = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const disponibilityAnnoncePage_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: { Datepicker },
  data() {
    const format = (date2) => {
      let dates = [];
      date2.forEach((element) => {
        let day = element.getDate();
        let month = element.getMonth() + 1;
        const year = element.getFullYear();
        if (month < 10) {
          month = `0${month}`;
        }
        if (day < 10) {
          day = `0${day}`;
        }
        dates.push(`${day}/${month}/${year} `);
      });
      return dates;
    };
    const date = ref();
    return {
      date,
      format,
      disabledDates: [],
      user: {
        id: "",
        token: "",
        motif: "",
        annonceId: ""
      },
      loggedIn: false,
      indisponibilities: [],
      indisponibilitiesArray: [],
      annonce: {},
      userAccount: {}
    };
  },
  mounted() {
    if (localStorage.getItem("token") != "") {
      this.user.token = localStorage.getItem("token");
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      this.$router.push({ path: "/se-connecter" });
    }
    this.user.id = localStorage.getItem("userId");
    this.user.annonce_id = this.$route.query.annonce_id;
    this.getIndisponibilities();
    this.getAnnonce();
    this.getUser();
  },
  methods: {
    getDatesBetween(x, y) {
      x = new Date(x);
      y = new Date(y);
      let currentDate = new Date(
        x.getFullYear(),
        x.getMonth(),
        x.getDate()
      );
      while (currentDate <= y) {
        var currentDateAux = currentDate.getFullYear() + "/";
        if (currentDate.getMonth() + 1 < 10) {
          currentDateAux += "0" + (currentDate.getMonth() + 1) + "/";
        } else {
          currentDateAux += currentDate.getMonth() + 1 + "/";
        }
        if (currentDate.getDate() < 10) {
          currentDateAux += "0" + currentDate.getDate();
        } else {
          currentDateAux += currentDate.getDate() + "";
        }
        this.disabledDates.push(currentDateAux);
        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1
        );
      }
    },
    getIndisponibilities() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      let indisponibilitiesRequest = {
        annonce_id: this.user.annonce_id
      };
      let startDate = "";
      let endDate = "";
      axios.post(
        "/api/getIndisponibilitiesForAnnonce",
        indisponibilitiesRequest,
        config
      ).then((response2) => {
        response2.data.indisponibilities.forEach((element) => {
          this.indisponibilitiesArray.push(element);
        });
        console.log("indisponibilitiesArray : ", this.indisponibilitiesArray);
        this.indisponibilitiesArray.forEach((element) => {
          startDate = "";
          endDate = "";
          for (let i = 6; i < element.dateFrom.length; i++) {
            startDate += element.dateFrom[i];
          }
          startDate += "/";
          for (let i = 3; i < 5; i++) {
            startDate += element.dateFrom[i];
          }
          startDate += "/";
          for (let i = 0; i < 2; i++) {
            startDate += element.dateFrom[i];
          }
          for (let i = 6; i < element.dateTo.length; i++) {
            endDate += element.dateTo[i];
          }
          endDate += "/";
          for (let i = 3; i < 5; i++) {
            endDate += element.dateTo[i];
          }
          endDate += "/";
          for (let i = 0; i < 2; i++) {
            endDate += element.dateTo[i];
          }
          this.getDatesBetween(startDate, endDate);
        });
      }).catch((err) => {
      });
    },
    addIndisponibility() {
      console.log("addIndisponibility daateee : ", this.format(this.date));
      this.format(this.date).forEach((element) => {
        this.indisponibilities.push(element);
      });
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      let indisponibilitiesRequest = {
        dateFrom: new Date(this.date[0]),
        dateTo: new Date(this.date[1]),
        owner_id: this.user.id,
        annonce_id: this.user.annonce_id,
        motif: this.user.motif
      };
      axios.post("/api/addIndisponibility", indisponibilitiesRequest, config).then((resppnse) => {
        this.user.motif = "";
        this.getIndisponibilities();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Disponibilit\xE9 mis \xE0 jour",
          showConfirmButton: false,
          timer: 1500,
          footer: false
        });
      }).catch((err) => {
      });
    },
    getAnnonce() {
      let req = {
        id: this.$route.query.annonce_id
      };
      axios.post("api/getAnnonceById", req).then((response2) => {
        this.annonce = response2.data.userAnnonce[0];
      });
    },
    getUser() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      this.userAccount = {
        id: this.user.id
      };
      axios.post("/api/getUser", this.userAccount, config).then((response2) => {
        console.log("response.data.users : ", response2.data.users);
        this.userAccount = response2.data.users[0];
      });
      console.log("thheiis ; ", this.userAccount);
    },
    deleteIndispo() {
      ({
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      });
      axios.delete("/api/deleteIndisponibility").then((response2) => {
        this.getIndisponibilities();
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Datepicker = resolveComponent("Datepicker");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 style="${ssrRenderStyle({ "text-align": "center" })}"> G\xE9rez les disponibilit\xE9s de votre logement </h1><div class="container"><div class="row"><div class="col-sm-12 col-md-12 col-lg-6 col-sm-offset-2 annonceCardInfo"><div class="annonceCardInfoMain"><div class="annonceCardInfoCard">`);
  if ($data.annonce.images) {
    _push(`<img${ssrRenderAttr("src", "/uploads/" + $data.annonce.images[0].path + "/" + $data.annonce.images[0].image)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="annonceCardInfoCard-content"><div class="annonceCardInfoCard-content-row"><div class="annonceCardInfoCard-content-col"><b>#ATK000</b>${ssrInterpolate($data.annonce.id)}</div><div class="annonceCardInfoCard-content-col">${ssrInterpolate($data.annonce.country)}</div></div><div class="annonceCardInfoCard-content-user-info">`);
  if ($data.userAccount.user_avatar) {
    _push(`<img${ssrRenderAttr("src", "/uploads/" + $data.userAccount.user_avatar.path + "/" + $data.userAccount.user_avatar.name)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="annonceCardInfoCard-content-user-contact"><h4>${ssrInterpolate($data.annonce.title)}</h4><p>${ssrInterpolate($data.annonce.address)} <br> ${ssrInterpolate($data.annonce.city)}</p></div></div></div></div></div></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "align-items": "center" })}" class="formCardDispo col-sm-12 col-md-12 col-lg-6 col-sm-offset-2"><div class="pad-bg"><h3 class="text-center">Ajouter une indisponibilit\xE9</h3><div class="form-group"><label for="">Date :</label><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "center" })}">`);
  _push(ssrRenderComponent(_component_Datepicker, {
    range: "",
    "partial-range": false,
    "enable-time-picker": false,
    modelValue: $data.date,
    "onUpdate:modelValue": ($event) => $data.date = $event,
    "min-date": new Date(),
    format: $data.format,
    "disabled-dates": $data.disabledDates,
    light: "",
    "day-names": ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    "cancel-text": "Fermer",
    "select-text": "Choisir",
    locale: "fr"
  }, null, _parent));
  _push(`</div></div><div class="form-group"><label for="">Motif :</label><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "center" })}"><input style="${ssrRenderStyle({ "width": "75%" })}" type="text" placeholder="..."${ssrRenderAttr("value", $data.user.motif)}><button style="${ssrRenderStyle({ "height": "41px", "text-align": "center", "display": "flex", "justify-content": "center", "align-items": "center", "background-color": "#2490cc" })}" class="btn btn-primary btn-lg"> Ajouter </button></div></div></div></div></div></div><div class="disponibilitiesList"><h3> Votre logement sera non disponible durant ces p\xE9riodes</h3><div class="gridTemplate"><!--[-->`);
  ssrRenderList($data.indisponibilitiesArray, (indisponibility, key) => {
    _push(`<div class="box box--list"><div class="box--list__items"><div class="box--list__item"><h2 class="box--list__title">P\xE9riode ${ssrInterpolate(key + 1)}</h2><p class="box--list__description"> du ${ssrInterpolate(indisponibility.dateFrom)} jusqu&#39;au ${ssrInterpolate(indisponibility.dateTo)}</p><p class="box--list__description"><br> Motif : ${ssrInterpolate(indisponibility.motif)}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/ownerConnectedPages/disponibilityAnnoncePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const disponibilityAnnonce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: home },
    { path: "/qui-sommes-nous", component: aboutus },
    { path: "/contact", component: contact },
    { path: "/se-connecter", component: login },
    { path: "/inscription", component: signup },
    { path: "/devenir-hote", component: becomeOwner },
    { path: "/dashboardClient", component: dashboardClient },
    { path: "/dashboardOwner", component: dashboardOwner },
    { path: "/profileAdmin", component: profileAdmin },
    { path: "/dashboardAdmin", component: dashboardAdmin },
    { path: "/ajouter-annonce", component: createAnAnnonce },
    { path: "/dashboardModerateur", component: dashboardModerateur },
    { path: "/annonce", component: annoncePage },
    { path: "/annoncesListPage", component: annoncesListPage, name: "H\xE9bergements" },
    { path: "/forgetPassword", component: forgetPassword },
    { path: "/resetEmailSended", component: resetEmailSended },
    { path: "/resetPasswordForm", component: resetPasswordForm },
    { path: "/newClientAccount", component: newClientAccount },
    { path: "/emailVerificationMessage", component: emailVerificationMessage },
    { path: "/contactFormMailSent", component: contactFormMailSent, name: "contactFormMailSentName" },
    { path: "/updateAnnonce", component: updateAnnonce, name: "updateAnnonce" },
    { path: "/favoritesAnnonces", component: favoritesAnnoncesPage, name: "favoritesAnnoncesPage" },
    { path: "/disponibilityAnnonce", component: disponibilityAnnonce, name: "disponibilityAnnonce" }
  ],
  linkActiveClass: "active"
});
let app = createApp(App);
app.use(router);
app.use("*", async (req, res, next) => {
  const url = req.originalUrl;
  try {
    let template = fs.readFileSync(
      path.resolve(__dirname, "resources/views/welcome.blade.php"),
      "utf-8"
    );
    template = await vite.transformIndexHtml(url, template);
    const { render } = await vite.ssrLoadModule("/src/entry-server.js");
    const appHtml = await render(url);
    const html = template.replace(`<!--ssr-outlet-->`, appHtml);
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (e) {
    vite.ssrFixStacktrace(e);
    next(e);
  }
});
app.mount("#app");
