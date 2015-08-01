require 'sinatra/base'
require './data_mapper_setup'

class TodoWeb < Sinatra::Base
  set :views, proc { File.join(root, 'views') }

  get '/' do
    'Hello TodoWeb!'
    erb :index
  end

  run! if app_file == $0
end
