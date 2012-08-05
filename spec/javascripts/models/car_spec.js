describe('Car', function() {
  var car;
  beforeEach(function(){
    car = new Car({
      title: 'Awesome'
    });
  });

  it("should return the default title", function(){
    expect(car.get('title')).toEqual('Awesome');
  });

  it('should return the urlRoot', function(){
    expect(car.urlRoot).toEqual('/cars');
  });

  it('should return the engine type', function(){
    expect(car.engine("Hemi")).toEqual("Hemi engine");
  });
});
