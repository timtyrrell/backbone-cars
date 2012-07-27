echo "This will set up your folder structure for the demo"
mv backbone-cars carsapp2
rails new carsdemo
cp carsapp/public/* carsdemo/public
cp -r carsapp/db/* carsdemo/db
cp carsapp/app/assets/stylesheets/* carsdemo/app/assets/stylesheets
cp carsapp/app/models/* carsdemo/app/models
cp carsapp/app/controllers/* carsdemo/app/controllers
cp carsapp/app/views/layouts/* carsdemo/app/views/layouts
mkdir carsdemo/app/assets/javascripts/backbone
mkdir carsdemo/app/assets/javascripts/backbone_mixins
mkdir carsdemo/app/assets/javascripts/jquery_plugins
mkdir carsdemo/app/assets/javascripts/lib
mkdir carsdemo/app/assets/javascripts/models
mkdir carsdemo/app/assets/javascripts/collections
mkdir carsdemo/app/assets/javascripts/views
mkdir carsdemo/app/assets/javascripts/templates
mkdir carsdemo/app/assets/javascripts/routers
cp carsapp/app/assets/javascripts/backbone/* carsdemo/app/assets/javascripts/backbone
cp carsapp/app/assets/javascripts/backbone_mixins/* carsdemo/app/assets/javascripts/backbone_mixins
cp carsapp/app/assets/javascripts/jquery_plugins/* carsdemo/app/assets/javascripts/jquery_plugins
cp carsapp/app/assets/javascripts/lib/* carsdemo/app/assets/javascripts/lib
cp carsapp/app/assets/javascripts/application.js carsdemo/app/assets/javascripts/application.js
cp carsapp/Gemfile carsdemo/Gemfile
rm carsdemo/public/index.html
cp carsapp/app/views/cars/step1.html.erb carsdemo/app/views/cars/index.html.erb
echo "Your carsdemo folder is now set up for the demo"

