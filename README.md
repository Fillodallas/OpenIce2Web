# OpenIce2Web

This program facilitates communication between a program written in Java (Open ICE) and a JavaScript server.
The data transmitted by the OpenIce program is displayed by a Webpage served by the server.

Setup Instruction:

0. Install NodeJS (used version: 16.18.0) from https://nodejs.org/en/

1. Setup OpenICE: 

Install Oracle Java 8 ( available for free here: https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html ). **It needs to be Java 8, not a later version.**
Download the latest version of OpenICE from github: https://github.com/mdpnp/mdpnp.git.
Make sure your JAVA_HOME is configured to use the Oracle Java 8 JVM (https://www.thewindowsclub.com/set-java_home-in-windows-10).
Download the file [Substitute]



2. Run the server
  Run the file "DataReceiveV0_4.js" using the command "npm run nodemon" (if you have nodemon pack installed) otherwhise run it through "npm DataReceiveV0_4.js".
  
  

3. Open a terminal, navigate to the OpenICE folder, and run ‘.\gradlew run’. Gradle will download any other dependencies, build the application, and launch it.
4. Connect your Medical Monitor or create a device adapter. Open the "Data Recorder" module and select the parameter you wish to transfer.


[............. COMING SOON ...................]
