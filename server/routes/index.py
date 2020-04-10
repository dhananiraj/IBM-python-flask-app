from server import app
from flask import render_template, request, json, send_from_directory
from server.functions.filemanager import *
# api 

@app.route('/query',methods=["POST","GET"])
def query():
    query_string = request.args.get('data',None)
    if query_string == None:
        query_string = request.get_json()['data']
    # print(query_string)
    response = {}
    if query_string == None:
        response['error'] = "No query string inside request!"
    else:
        unprocessed_data = readfile()
        data = {}
        if query_string == "":
            data = unprocessed_data
        else:
            for k,v in unprocessed_data.items():
                if query_string in k:
                    data[k] = v
        response['items'] = data
    return json.jsonify(response) 

@app.route('/delete',methods=['POST','GET'])
def delete_item():
    query_string = request.args.get('item',None)
    if query_string == None:
        query_string = request.get_json()['item']
    # print(query_string)
    response = {}
    if query_string == None:
        response['error'] = "No query string inside request!"
    else:
        unprocessed_data = readfile()
        data = {}
        if query_string == "":
            data = unprocessed_data
        else:
            for k,v in unprocessed_data.items():
                if query_string != k:
                    data[k] = v
            writefile(data)
        response['items'] = data
    return json.jsonify(response)

@app.route('/update',methods=['POST','GET'])
def update_item():
    item = request.args.get('item',None)
    if item == None:
        item = request.get_json()['item']
    desc = request.args.get('description',None)
    if desc == None:
        desc = request.get_json()['description']
    print(item,desc)
    response = {}
    if item == None or desc == None:
        response['error'] = "Invalid Data Sent!"
    else:
        unprocessed_data = readfile()
        data = {}
        if unprocessed_data.get(item,None) == desc:
            data = unprocessed_data
        else:
            unprocessed_data[item] = desc
            data = unprocessed_data
            writefile(data)
        response['items'] = data
    return json.jsonify(response)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


# @app.route('/')
# def index():
#     return app.send_static_file('index.html')

# @app.errorhandler(404)
# @app.route("/error404")
# def page_not_found(error):
#     return app.send_static_file('404.html')

# @app.errorhandler(500)
# @app.route("/error500")
# def requests_error(error):
#     return app.send_static_file('500.html')
