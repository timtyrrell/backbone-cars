describe("DashboardRouter route testing", function(){
  beforeEach(function(){
    var countryList = new CountryList();
    var makeList = new MakeList();
    var carmodelList = new CarModelList();
    this.filterView = new FilterView({countryCollection: countryList,
                                      makeCollection: makeList,
                                      carmodelCollection: carmodelList});
    this.colorView = new ColorView();
    var carList = new CarList();
    this.carListView = new CarListView({collection:carList});
    this.router = new DashboardRouter({filterView: this.filterView,
                                       colorView: this.colorView,
                                       carView: this.carListView});
  });

  describe("route testing", function() {
    beforeEach(function(){
      this.routerSpy = sinon.spy();

      try {
        Backbone.history.start({silent: true, pushState: true});
      } catch(e) { }

      this.router.navigate("elsewhere");
    });

    afterEach(function(){
      // Reset URL
      this.router.navigate("");
    });

    it('should by default call the "all" route', function() {
      this.router.bind('route:all', this.routerSpy, this);
      this.router.navigate('', {trigger: true});

      expect(this.routerSpy.callCount).toBe(1);
    });

    it('should fire the "show" route', function() {
      this.router.bind('route:show', this.routerSpy, this);
      this.router.navigate('dashboard/Germany', {trigger: true});

      expect(this.routerSpy.callCount).toBe(1);
      expect(this.routerSpy.calledWith("Germany")).toBe(true);
    });

  });

  describe("test routing methods", function() {
    afterEach(function(){
      // Reset URL
      this.router.navigate("");
    });

    it('triggers the "show" route', function () {
      var filterViewFilterSpy = sinon.spy(this.filterView, "setFilter");
      var filterViewRenderSpy = sinon.spy(this.filterView, "render");

      var colorViewColorSpy = sinon.spy(this.colorView, "setColor");
      var colorViewRenderSpy = sinon.spy(this.colorView, "render");

      var carViewFilterSpy = sinon.spy(this.carListView, "setFilters");
      var carViewRenderSpy = sinon.spy(this.carListView, "render");

      this.router.show("Germany");

      expect(filterViewFilterSpy.callCount).toBe(1);
      expect(filterViewFilterSpy.calledWith("Germany", "all", "all")).toBe(true);
      expect(filterViewRenderSpy.callCount).toBe(1);

      expect(colorViewColorSpy.callCount).toBe(1);
      expect(colorViewColorSpy.calledWith("all")).toBe(true);
      expect(colorViewRenderSpy.callCount).toBe(1);

      expect(carViewFilterSpy.callCount).toBe(1);
      expect(carViewFilterSpy.calledWith("Germany", "all", "all")).toBe(true);
      expect(carViewRenderSpy.callCount).toBe(1);
    });
  });

});
