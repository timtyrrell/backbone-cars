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
    describe("#removeCar", function() {
      beforeEach(function() {
        this.car = new Car();
        this.carView = new CarView({ model: this.car });
      });

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

    });
  });

  describe("bindings", function() {
    beforeEach(function() {
      this.car = new Car();
      this.carSpy = sinon.spy(this.car, 'on');
      this.carView = new CarView({ model: this.car });
      this.carView.template = _.template("");
    });

    it("should 'render' on a model change", function() {
      expect(this.carSpy.calledWith('change', this.carView.render)).toBe(true);
    });

    it("should 'remove' on a model remove", function() {
      expect(this.carSpy.calledWith('remove', this.carView.removeCar)).toBe(true);
    });

  });

  describe("events", function() {
    beforeEach(function() {
      this.car = new Car();
      this.carView = new CarView({ model: this.car });
      this.carView.render();
    });

    xit("should run 'buy' when clicked", function() {
      // expect(this.carView.length).toBe(1);
    });

  });


  describe("rendering", function() {

  });
});