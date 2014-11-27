require 'dotenv'

Dotenv.load

use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"

map "/" do
  run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
end

if ENV['RACK_ENV']

  puts '>> running in ' + ENV['RACK_ENV']

  map "/tests" do
    run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/tests.html', File::RDONLY)
    ]
  }
  end
end
