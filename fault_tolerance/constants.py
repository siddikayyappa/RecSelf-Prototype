import os
import subprocess
import threading
import time
import shutil

from flask import Flask

CHECKPOINT_DIR = "Checkpoints"
CHECKPOINT_INTERVAL = 5
CHECK_SERVER_INTERVAL = 0.1

FLASK_RUN_COMMAND = "python -m flask run"