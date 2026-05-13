#!/usr/bin/env python

import rospy
from geometry_msgs.msg import Twist
from sensor_msgs.msg import LaserScan
import math

class SimpleMove:

    def __init__(self):
        rospy.init_node('obstacle_avoider')

        self.cmd_pub = rospy.Publisher('/cmd_vel', Twist, queue_size=10)
        rospy.Subscriber('/scan', LaserScan, self.scan_callback)

        self.vel_msg = Twist()
        self.obstacle_detected = False

        self.rate = rospy.Rate(10)
        rospy.on_shutdown(self.shutdown_hook)

    def scan_callback(self, msg):
        # Check front distances (middle of scan)
        front = min(msg.ranges[len(msg.ranges)//3 : 2*len(msg.ranges)//3])

        if front < 0.8:   # threshold distance
            self.obstacle_detected = True
        else:
            self.obstacle_detected = False

    def move_forward(self):
        self.vel_msg.linear.x = 0.6
        self.vel_msg.angular.z = 0.0
        self.cmd_pub.publish(self.vel_msg)

    def stop(self):
        self.vel_msg.linear.x = 0.0
        self.vel_msg.angular.z = 0.0
        self.cmd_pub.publish(self.vel_msg)

    def rotate_90(self):
        angular_speed = 0.5   # rad/s
        angle = math.radians(90)

        duration = angle / angular_speed
        start_time = rospy.Time.now().to_sec()

        self.vel_msg.linear.x = 0.0
        self.vel_msg.angular.z = angular_speed

        while rospy.Time.now().to_sec() - start_time < duration:
            self.cmd_pub.publish(self.vel_msg)
            self.rate.sleep()

        self.stop()

    def run(self):
        while not rospy.is_shutdown():
            if self.obstacle_detected:
                self.stop()
                rospy.sleep(1)
                self.rotate_90()
            else:
                self.move_forward()

            self.rate.sleep()

    def shutdown_hook(self):
        rospy.loginfo("Stopping robot...")
        self.stop()

if __name__ == '__main__':
    try:
        robot = SimpleMove()
        robot.run()
    except rospy.ROSInterruptException:
        pass