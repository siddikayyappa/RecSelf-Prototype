from constants import *

# Monitors server status
def monitor_server():
    while True:
        if not is_server_running():
            restart_server()
        time.sleep(CHECK_SERVER_INTERVAL)

def is_server_running():
    try:
        response = subprocess.check_output(["curl", "-Is", "http://localhost:5000"])
        return b'200 OK' in response
    except subprocess.CalledProcessError:
        return False

def restart_server():
    print("Restarting Flask server...")
    subprocess.Popen(FLASK_RUN_COMMAND, shell=True)