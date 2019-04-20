#from .middlewares import login_required
from flask import Flask, json, g, request
from app.what.service import Service as What
from app.what.schema import GithubRepoSchema
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

'''
#Example routes
@app.route("/whats", methods=["GET"])
def index():
 return json_response(What(g.user).find_all_whats())


@app.route("/whats", methods=["POST"])
def create():
   github_repo = GithubRepoSchema().load(json.loads(request.data))
   if github_repo.errors:
     return json_response({'error': github_repo.errors}, 422)

   what = What(g.user).create_what_for(github_repo)
   return json_response(what)

@app.route("/what/<int:repo_id>", methods=["PUT"])
def update(repo_id):
   github_repo = GithubRepoSchema().load(json.loads(request.data))
   if github_repo.errors:
     return json_response({'error': github_repo.errors}, 422)

   what_service = What(g.user)
   if what_service.update_what_with(repo_id, github_repo):
     return json_response(github_repo.data)
   else:
     return json_response({'error': 'what not found'}, 404)

@app.route("/what/<int:repo_id>", methods=["DELETE"])
def delete(repo_id):
 what_service = What(g.user)
 if what_service.delete_what_for(repo_id):
   return json_response({})
 else:
   return json_response({'error': 'what not found'}, 404)
'''


def json_response(payload, status=200):
 return (json.dumps(payload), status, {'content-type': 'application/json'})
