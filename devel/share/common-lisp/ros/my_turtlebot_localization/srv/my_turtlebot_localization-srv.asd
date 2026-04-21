
(cl:in-package :asdf)

(defsystem "my_turtlebot_localization-srv"
  :depends-on (:roslisp-msg-protocol :roslisp-utils )
  :components ((:file "_package")
    (:file "MyServiceMessage" :depends-on ("_package_MyServiceMessage"))
    (:file "_package_MyServiceMessage" :depends-on ("_package"))
  ))