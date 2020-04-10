from flask import json

def readfile():
    try :
        with open('./server/datafiles/data.json','r') as f:
            return json.load(f)
    except :
        print('something went wrong in reading the file.')

def writefile(data):
    try :
        with open('./server/datafiles/data.json','w') as f:
            return json.dump(data,f)
    except :
        print('something went wrong in reading the file.')