from flask import Flask, render_template, redirect, request

app = Flask(__name__)

# Redirect HTTP to HTTPS
@app.before_request
def redirect_to_https():
    if not request.is_secure and not request.headers.get('X-Forwarded-Proto') == 'https':
        url = request.url.replace("http://", "https://", 1)
        return redirect(url, code=301)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
