# first setup

from flask_restful import Api
api = Api(app)

# later become this

from flask_restful_swagger_2 import Api
api = Api(app,
    host="localhost:5000",
    schemes=['http'],
   # schemes=['https'],
   # base_path='/dev',
    security_definitions=security,
    security=[{'appKey': []}],
    api_version='0.01',
    api_spec_url='/api/swagger')

# source: vhttps://medium.com/@nijia.lin/%E4%BD%BF%E7%94%A8-serverless-flask-swagger-%E5%9C%A8-aws-%E4%B8%8A%E6%90%AD%E5%BB%BA%E6%89%93%E9%80%A0-open-api-fb2baa0c0319