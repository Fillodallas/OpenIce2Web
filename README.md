# OpenIce2Web

This program facilitates communication between a program written in Java (Open ICE) and a JavaScript server.
The data transmitted by the OpenIce program is displayed by a Webpage served by the server.

## Setup Instruction:


### OpenIce Setup
0. Install OpenICE: 
   Install Oracle Java 8 ( available for free here: https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html ). **It needs to be Java      8, not a later version.**
   Download the latest version of OpenICE from github: https://github.com/mdpnp/mdpnp.git.
   Make sure your JAVA_HOME is configured to use the Oracle Java 8 JVM (https://www.thewindowsclub.com/set-java_home-in-windows-10).

1. Replace OpenICE modules:
    - REPLACE **DataCollectorApp.java** in the installation folder: ~\mdpnp-master\interop-lab\demo-apps\src\main\java\org\mdpnp\apps\testapp\export\DataCollectorApp.java
    - REPLACE **SimMultiparameter.java** in the installation folder: ~\mdpnp-master\interop-lab\demo-devices\src\main\java\org\mdpnp\devices\simulation\multi\SimMultiparameter.java
    - ADD **Constants.java** in the installation folder: ~\mdpnp-master\mdpnp-masterV00.03\interop-lab\purejavacomm\src\main\java\purejavacomm\

2. Modify dependencies: Open the mdpnp-master file with IntelliJ and modify the Project Structure.
   - Open **Project Structure** (Ctrl + Alt + Maiusc+ S) or (File --> Project Structure..)
   - In Modules section select the folder: demo-devices\main and add a Module Dependency
      <details>
         <summary>Show Image</summary>
  
         ![ProjecStructure_Upload](https://user-images.githubusercontent.com/92895058/208892538-fe7d0480-6844-44b2-b85f-28dc5d008a87.png)
 
      </details>
   - Select **mdpnp-masterV00.03.interop-lab.demo-devices.main**. Apply and Save.
      <details>
         <summary>Show Image</summary>
  
         ![ProjecStructure2_main](https://user-images.githubusercontent.com/92895058/208892803-aaaa00b4-6dd4-4c9e-84d2-e324ddf95b57.png)
 
      </details>

   
### NodeJS - Server setup

1. Install NodeJS (used version: 16.18.0, later versions are OK) from https://nodejs.org/en/
2. Install the Dependencies:
   If you are using VS Code select NodeJS as debugger. Open the terminal, go to the **folder containing the JS file** and run the following commands:
    ```
    npm init -y
    npm install
    ```
    <!--
    If it does not work run this ==> but npm install should do the trick!!
    npm install ws 
    npm install http 
    npm install express
    npm install socket.io
    npm install ejs
    npm install path
    
    -->

3. Run the server:
    ```
    node app.js
    ```
    or the command
    ```
    npm run nodemon
    ```


## Demo:

1. Open a terminal, navigate to the OpenICE folder, and run ‘.\gradlew run’. Gradle will download any other dependencies, build the application, and launch it.
2. Connect your Medical Monitor or create a device adapter. Open the "Data Recorder" module and select the parameter you wish to transfer.



https://user-images.githubusercontent.com/92895058/207165529-a35aec5d-c2c0-455c-bbcd-33a713c9f3f9.mp4
