describe("CarView", function() {
  describe("default values", function() {
    beforeEach(function() {
      this.carView = new CarView({ model: new Car() });
    });

    it("should be tied to a 'div' element", function() {
      expect(this.carView.el.tagName.toLowerCase()).toBe('div');
    });

    it('Should have a class of "car"', function(){
     expect(this.carView.$el).toHaveClass('car');
    });
  });

  describe("methods", function() {
    beforeEach(function() {
      this.car = new Car();
      this.carView = new CarView({ model: this.car });
    });
    describe("#removeCar", function() {
      it("should call 'remove'", function() {
        var carViewSpy = sinon.spy(this.carView, "remove");
        this.carView.removeCar();

        expect(carViewSpy.callCount).toBe(1);
      });

      it("should trigger masonry to reload", function() {
        var carSpy = sinon.spy(this.car, "trigger");
        this.carView.removeCar();

        expect(carSpy.callCount).toBe(1);
        expect(carSpy.calledWith("masonry", "reload")).toBe(true);
      });
    });

    describe("#buy", function() {
      it("should persist the model", function() {
        var carSpy = sinon.spy(this.car, "save");
        this.carView.buy();

        expect(carSpy.callCount).toBe(1);
        expect(carSpy.calledWith("bought", true, {silent:true})).toBe(true);
      });

      it("should trigger masonry to reload", function() {
        var carSpy = sinon.spy(this.car, "trigger");
        this.carView.buy();

        expect(carSpy.callCount).toBe(1);
        expect(carSpy.calledWith("masonry", "reload")).toBe(true);
      });
    });

    describe("rendering", function() {

    });
  });

  describe("bindings", function() {
    beforeEach(function() {
      this.car = new Car();
      this.carSpy = sinon.spy(this.car, 'on');
      this.carView = new CarView({ model: this.car });
    });

    it("should 'render' on a model change", function() {
      expect(this.carSpy.calledWith('change', this.carView.render)).toBe(true);
    });

    it("should 'remove' on a model remove", function() {
      expect(this.carSpy.calledWith('remove', this.carView.removeCar)).toBe(true);
    });

  });

  describe("events", function() {
    var server;
    beforeEach(function() {
      this.car = new Car();
      this.carView = new CarView({ model: this.car });
      this.carView.template = _.template("\
        <div class=\"car\">\
          <img class=\"car-image\" src=\"\" width=\"160\">\
          <p style=\"margin-top:12px;\"><button class=\"btn btn-primary buy\">Buy It!</button></p>\
        </div>");
      this.carView.render();
    });

    it("should run 'buy' when clicked", function() {
      var ajaxSpy = sinon.spy(jQuery, "ajax");
      this.carView.$(".buy").click();

      expect(ajaxSpy.callCount).toBe(1);
    });
  });
});
