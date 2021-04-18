from flask import Flask,request,jsonify
app=Flask(__name__, static_folder='./gui/build', static_url_path='/')
import os


def check(fname, txt):
    with open(fname) as dataf:
        return any(txt in line for line in dataf)

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/search', methods=['get'])
def get_query_string():
    output = ""
    number = request.query_string.decode("utf-8") 
    print(number,"no.")
    x=True
    limit=10
    while x:
        n=len(number)
        if n>=limit:
            x=False
        # if n<=(limit-1):
        #     #output="not number"
        #     output="not valid number number"
    if check('number.txt', number):
        output="You have been pawned! in FACEBOOK data leak"
    else:
        output="You haven't been pawned in FACEBOOK data leak *THIS TIME*"


    return jsonify({"response":output})


if __name__=="__main__":
    app.run(debug=True,port=os.environ.get('PORT', 5000),host="0.0.0.0")


