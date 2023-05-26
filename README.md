

 # <p align="center">VIRTUALHOST | DOMAIN</p>

<p align="center">
Ansible scripts to generate a domaine name 
</p>

<div style="background-color:  ;
            padding-inline:20vw;
            padding-bottom: 20px;">
<br> 

## Features


## System requirements
> Before using this project, make sure you have the following:

- You need to install Apache 
 ```sh
  $ sudo apt  install apache2

 ```
   ## After install ansible
 ```sh
  $ sudo apt install ansible
```

   
-Verify your ansible version  
  ```sh
  $ ansible --version
   ```
- After your installation of apache2 you need to enable your site (see the script ) .



## Use
```sh
git clone https://github.com/MihajaFi/ScriptApache.git
```

## Project Structure

Briefly explain the project structure and the role of each key file or directory:

- `templates/`: This directory contains the template files for the Virtual Host configuration. You can find the `virtualhost.conf.j2` file, which is a template used to generate the Virtual Host configuration files with the corresponding domain names.

- `hosts`: This file contains the list of hosts where the Ansible scripts will be executed. You need to edit this file and add the IP address of your server where you want to generate the Virtual Hosts.

- `playbook.yml`: The main Ansible playbook that defines the tasks to be executed for generating and configuring the Virtual Hosts. This file contains different steps, such as creating directories for the Virtual Hosts, copying the configuration files, and enabling the Virtual Hosts.

- Other files: You can include additional relevant files in your project, such as supplementary installation scripts, custom configuration files, etc. Make sure to provide a clear explanation of the role of each additional file you include in your project.







 
</div>