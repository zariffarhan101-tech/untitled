import time
import board
import pwmio
    from adafruit_motor import servo

# Port S1 pada Motion 2350 Pro adalah pin GP20
pwm = pwmio.PWMOut(board.GP20, duty_cycle = 2 ** 15, frequency = 50)

# Cipta objek servo
my_servo = servo.Servo(pwm)

while True:
    # Gerak ke 0 darjah
my_servo.angle = 0
print("S1: 0 darjah")
time.sleep(1)
    
    # Gerak ke 90 darjah
my_servo.angle = 90
print("S1: 90 darjah")
time.sleep(1)
    
    # Gerak ke 180 darjah
my_servo.angle = 180
print("S1: 180 darjah")
time.sleep(1)