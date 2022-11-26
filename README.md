# OpenIce2Web

This program facilitates communication between a program written in Java (Open ICE) and a JavaScript server.
The data transmitted by the OpenIce program is displayed by a Webpage served by the server.

Setup Instruction:

0. Install NodeJS (used version: 16.18.0, later versions are OK) from https://nodejs.org/en/

1. Install OpenICE: 
   Install Oracle Java 8 ( available for free here: https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html ). **It needs to be Java      8, not a later version.**
   Download the latest version of OpenICE from github: https://github.com/mdpnp/mdpnp.git.
   Make sure your JAVA_HOME is configured to use the Oracle Java 8 JVM (https://www.thewindowsclub.com/set-java_home-in-windows-10).
   Download the file [Substitute]



2. Install the Dependencies:
   If you are using VS Code select NodeJS as debugger (Ctrl + P). Open the terminal, go to the **folder containing the JS file** and run the following commands:
   ```
    npm init -y
    npm install ws 
    npm install express
    npm install socket.io
    ```
3. Run the server:
    ```
    node DataReceiveV0_4.js
    ```
    or the command
    ```
    npm run nodemon
    ```


4. Download the modified OpenICE files and replace the original in the appropriate directory [........ COMING SOON...........]
5. Open a terminal, navigate to the OpenICE folder, and run ‘.\gradlew run’. Gradle will download any other dependencies, build the application, and launch it.
6. Connect your Medical Monitor or create a device adapter. Open the "Data Recorder" module and select the parameter you wish to transfer.



