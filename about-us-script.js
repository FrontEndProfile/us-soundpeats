// This allows to expose several variables to the global scope, to be used in scripts
    window.theme = {
      pageType: "page",
      moneyFormat: "${{amount}}",
      moneyWithCurrencyFormat: "${{amount}} USD",
      productImageSize: "natural",
      searchMode: "product,article,page",
      showPageTransition: true,
      showElementStaggering: true,
      showImageZooming: true
    };

    window.routes = {
      rootUrl: "\/",
      rootUrlWithoutSlash: '',
      cartUrl: "\/cart",
      cartAddUrl: "\/cart\/add",
      cartChangeUrl: "\/cart\/change",
      searchUrl: "\/search",
      productRecommendationsUrl: "\/recommendations\/products"
    };

    window.languages = {
      cartAddNote: "Add Order Note",
      cartEditNote: "Edit Order Note",
      productImageLoadingError: "This image could not be loaded. Please try to reload the page.",
      productFormAddToCart: "Add to cart",
      productFormUnavailable: "Unavailable",
      productFormSoldOut: "Out of Stock",
      shippingEstimatorOneResult: "1 option available:",
      shippingEstimatorMoreResults: "{{count}} options available:",
      shippingEstimatorNoResults: "No shipping could be found"
    };

    window.lazySizesConfig = {
      loadHidden: false,
      hFac: 0.5,
      expFactor: 2,
      ricTimeout: 150,
      lazyClass: 'Image--lazyLoad',
      loadingClass: 'Image--lazyLoading',
      loadedClass: 'Image--lazyLoaded'
    };

    document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
    document.documentElement.style.setProperty('--window-height', window.innerHeight + 'px');

    // We do a quick detection of some features (we could use Modernizr but for so little...)
    (function () {
      document.documentElement.className += ((window.CSS && window.CSS.supports('(position: sticky) or (position: -webkit-sticky)')) ? ' supports-sticky' : ' no-supports-sticky');
      document.documentElement.className += (window.matchMedia('(-moz-touch-enabled: 1), (hover: none)')).matches ? ' no-supports-hover' : ' supports-hover';
    }());




    