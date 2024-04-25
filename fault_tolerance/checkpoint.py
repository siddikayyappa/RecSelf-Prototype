from constants import *
from recovery import monitor_server

app = Flask(__name__)

# save checkpoints
def checkpoint_server():
    if not os.path.exists(CHECKPOINT_DIR):
        os.makedirs(CHECKPOINT_DIR)
    
    subprocess.run(["rsync", "-a", ".", f"{CHECKPOINT_DIR}/"])
    threading.Timer(CHECKPOINT_INTERVAL, checkpoint_server).start()

def load_checkpoint():
    if os.path.exists(CHECKPOINT_DIR):
        shutil.rmtree(".")
        shutil.copytree(CHECKPOINT_DIR, ".")

if __name__ == "__main__":
    threading.Timer(CHECKPOINT_INTERVAL, checkpoint_server).start()

    # Start monitoring thread
    threading.Thread(target=monitor_server, daemon=True).start()
    subprocess.Popen(FLASK_RUN_COMMAND, shell=True)

    # Wait for keyboard interrupt
    try:
        while True:
            time.sleep(0.1)
    except KeyboardInterrupt:
        pass
