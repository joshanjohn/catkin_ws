### Git Setup on Contruct 
1. make sure you configure git on condtruct ros terminal using: 
   ```
   git config --global user.name "<Your Name>"
   git config --global user.email "<youremail@example.com>"
   ```

2. generate a ssh key on construct terminal, using: 
   ```
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   
3. locate the public key on construct terminal using below command and copy that. 
   ```
   cat ~/.ssh/id_ed25519.pub
   ```
   
4. Open github settings > <strong> SSH </strong> and  <strong> GPG Keys </strong>  and add public key and give a title. then try clone the repo. 
   
<img width="688" height="797" alt="Screenshot 2026-04-29 at 18 39 42" src="https://github.com/user-attachments/assets/e89c9786-587a-4e1d-9e7e-52138500f09e" />



<hr>


### Create package 
NOTE: Make sure all packages are inside `catkin_ws/src` folder. 

command to make project_mapping package 
````
catkin_create_pkg project_mapping rospy
````

command to make project_mapping package 
````
catkin_create_pkg project_localization rospy
````

command to make project_mapping package 
````
catkin_create_pkg project_planning rospy
````

### Simple Collaboration rules 
- Always create a seperate branch your own localy
- After making changes make sure pull latest code and fix conflict.
- publish the branch to remote and raise a PR. 
- Add each other as reviewer.
- (optional) use proper fix tage or issue number to automatically close the issues. 
