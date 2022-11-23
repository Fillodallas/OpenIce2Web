# OpenIce2Web

This program facilitates communication between a program written in Java (Open ICE) and a JavaScript server.
The data transmitted by the OpenIce program is displayed by a Webpage served by the server.

Setup Instruction:

1. Setup OpenICE: 

Install Oracle Java 8 ( available for free here: https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html ). It needs to be Java 8, not a later version. 
Download the latest version of OpenICE from our github: https://github.com/mdpnp/mdpnp.git.
Make sure your JAVA_HOME is configured to use the Oracle Java 8 JVM.
Download th file [SUbstitute]



2. Run the server
  Run the file "DataReceiveV0_4.js" using the command npm run nodemon.
  
  

3. Open a terminal, navigate to the OpenICE, and run ‘gradlew run’. Gradle will download any other dependencies, build the application, and launch it.
4. Connect your Medical Monitor or create a device adapter. Open the "Data Recorder" module and select the parameter you whis to transfer.


[............. COMING SOON ...................]
