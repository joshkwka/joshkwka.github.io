from flask import Flask, render_template, request, redirect
import csv
app = Flask(__name__)

#Basic Route(s)
@app.route('/')
def my_home():
    return render_template('./index.html')

@app.route('/<string:page_name>')
def html_page(page_name):
    return render_template(page_name)

#Storing data in database
def write_to_file(data):
    with open('database.txt', mode='a') as database:
        name = data['name']
        email = data['email']
        message = data['message']
        file = database.write(f'\n{name},{email},{message}')

def write_to_csv(data):
    with open('database.csv', newline='', mode='a') as database2:
        name = data['name']
        email = data['email']
        message = data['message']
        csv_writer = csv.writer(database2, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([name,email,message])

#Contact Request
@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == 'POST':
        try:
            data = request.form.to_dict()
            write_to_csv(data)
            return redirect('/thankyou.html')
        except:
            return 'did not save to database'
    else:
        return 'something went wrong, try again'

#Redirect to Home Page
@app.route('/submit_form2', methods=['POST', 'GET'])
def submit_form2():
    if request.method == 'POST':
        return redirect('/index.html')
    else:
        return 'something went wrong, try again'

@app.route('/submit_form3', methods=['POST', 'GET'])
def submit_form3():
    if request.method == 'POST':
        return redirect('/index.html#work')
    else:
        return 'something went wrong, try again'