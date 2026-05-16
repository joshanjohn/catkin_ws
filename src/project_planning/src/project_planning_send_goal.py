#!/usr/bin/env python

import rospy
import actionlib
from move_base_msgs.msg import MoveBaseAction, MoveBaseGoal
from tf.transformations import quaternion_from_euler


def create_goal(x, y, yaw):
    goal = MoveBaseGoal()
    goal.target_pose.header.frame_id = "map"
    goal.target_pose.header.stamp = rospy.Time.now()

    goal.target_pose.pose.position.x = x
    goal.target_pose.pose.position.y = y
    goal.target_pose.pose.position.z = 0.0

    q = quaternion_from_euler(0.0, 0.0, yaw)
    goal.target_pose.pose.orientation.x = q[0]
    goal.target_pose.pose.orientation.y = q[1]
    goal.target_pose.pose.orientation.z = q[2]
    goal.target_pose.pose.orientation.w = q[3]

    return goal


if __name__ == "__main__":
    rospy.init_node("project_planning_send_goal")

    client = actionlib.SimpleActionClient("move_base", MoveBaseAction)
    rospy.loginfo("Waiting for move_base action server...")
    client.wait_for_server()

    goal = create_goal(1.0, 0.0, 0.0)
    rospy.loginfo("Sending navigation goal...")
    client.send_goal(goal)

    client.wait_for_result()
    result_state = client.get_state()

    if result_state == actionlib.GoalStatus.SUCCEEDED:
        rospy.loginfo("Goal reached successfully.")
    else:
        rospy.logwarn("Goal was not reached. State: %s", result_state)
