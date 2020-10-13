import os, json, subprocess

# Launch backend server
#os.system("cd back && docker-compose up")
subprocess.Popen("cd back && docker-compose up",shell=True)

# Launch ngrox
os.system("./ngrok http 8000")
#subprocess.Popen("./ngrok http 8000",shell=True)

# Get the public url
stream = os.popen("curl --silent --show-error http://127.0.0.1:4040/api/tunnels")
data = stream.read()
public_url = json.loads(data)["tunnels"][1]['public_url']

# Write the url in the file frontEnd/backend_url.json
with open("frontEnd/backend_url.json",'w') as file :
    file.write(json.dumps({'url' : public_url}))


# Launch frontend server (Expo)
os.system("cd frontEnd && expo start --tunnel")


