import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';

class Localization extends Component {
    static getLocalizedString() {
        if (!this.localizedString) {
            this.localizedString = new LocalizedStrings(Localization.localizedStringList);
        }
        return this.localizedString;
    }

    static getAllLanugages() {
        let result = new Map();
        for(let key of Object.keys(Localization.localizedStringList)) {
            result.set(key,Localization.localizedStringList[key]._displayName);
        }
        return result;
    }
};

Localization.localizedStringList = {
    "en": {
        _displayName: "English",
        pageTitle: "Raspberry Pi Web Simulator",
        pageTitleMobile: "Raspberry Pi Simulator",
        buttonRun: "Run",
        buttonStop: "Stop",
        buttonReset: "Reset",
        consoleWelcomeMessage: "Click `Run` button to run the sample code(When sample is running, code is read-only).\nClick `Stop` button to stop the sample code running.\nClick `Reset` to reset the code.We keep your changes to the editor even you refresh the page.",
        consoleSampleStopped: "Sample stopped",
        connectionStringMissing: "Connection string is empty or error, please click 'Help' on the top-right to get help",
        codeEditor: "Code Editor",
        helpButton: "Help",
        helpStep: "Step",
        helpButtonBack: "Back",
        helpButtonNext: "Next",
        helpButtonGotIt: "Got it",
        helpLinkSeeDoc: "See doc",
        helpLinkViewSource: "View source",
        helpTitle1: "Overview of Raspberry Pi Simulator",
        helpTitle2: "Prepare the Mosquitto Server",
        helpTitle3: "Run the sample app on Pi web simulator",
        helpContentAssemblyArea: "Assembly Area",
        helpContentCodingArea: "Coding Area",
        helpContentConsoleArea: "Integrated console window",
        helpContentAssemblyAreaDescription: "You can see your device status",
        helpContentCodingAreaDescription: "An online code editor for you to make an app on Raspberry Pi with Node.js",
        helpContentConsoleAreaDescription: "You can see the output of your app",
        helpContentInThe: "Run the",
        helpContentClick: "command",
        helpContentAdd: "Add",
        helpContentAzurePortal: "Powershell window",
        helpContentClickCapitalize: "Click",
        helpContentPane: "pane",
        helpContent1: "New > Internet of Things > IoT Hub",
        helpContent2: "to provision a new IoT hub",
        helpContent3: "Device Explorer",
        helpContent4: "to add a device to your IoT hub",
        helpContent5: "Select the device you just created and copy the",
        helpContent6: "primary key of the connection string",
        helpContent7: "Replace the placeholder in",
        helpContent8: "Line 15",
        helpContent9: "with the Azure IoT hub",
        helpContent10: "device connection string",
        helpContent11: "button or type \"npm start\" in the console window to run the application",
        helpDocsLink: "https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-raspberry-pi-web-simulator-get-started",
        altRaspberryPiLogo: "Raspberry Pi logo"
    }
};

export default Localization;