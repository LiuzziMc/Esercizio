"use strict";
//Interfacce estrapolate dal modello ER
//Classi
class PnMessageOptions {
    constructor(id, androidIcon, androidIconColor, androidSound, iosSound, message // Relazione con Message
    ) {
        this.id = id;
        this.androidIcon = androidIcon;
        this.androidIconColor = androidIconColor;
        this.androidSound = androidSound;
        this.iosSound = iosSound;
        this.message = message;
    }
}
class PnMessage {
    constructor(id, correlationId, title, body, subtitle, language, sender, sentDate, additionalData, link, image) {
        this.id = id;
        this.correlationId = correlationId;
        this.title = title;
        this.body = body;
        this.subtitle = subtitle;
        this.language = language;
        this.sender = sender;
        this.sentDate = sentDate;
        this.additionalData = additionalData;
        this.link = link;
        this.image = image;
    }
}
class PnMessageDeliver {
    constructor(id, message, // Relazione con Message
    device, // Relazione con Device
    user, // Relazione con User
    sentDate, status, readDate) {
        this.id = id;
        this.message = message;
        this.device = device;
        this.user = user;
        this.sentDate = sentDate;
        this.status = status;
        this.readDate = readDate;
    }
}
class PnUserMetadata {
    constructor(id, user, // Relazione con User
    code, value) {
        this.id = id;
        this.user = user;
        this.code = code;
        this.value = value;
    }
}
class PnOS {
    constructor(id, name, code) {
        this.id = id;
        this.name = name;
        this.code = code;
    }
}
class PnDevice {
    constructor(id, app, // Relazione con App
    os, // Relazione con OS
    registration_date, lastLog, language, enabled, tester, user // Relazione con User
    ) {
        this.id = id;
        this.app = app;
        this.os = os;
        this.registration_date = registration_date;
        this.lastLog = lastLog;
        this.language = language;
        this.enabled = enabled;
        this.tester = tester;
        this.user = user;
    }
}
class PnDeviceMetadata {
    constructor(id, device, // Relazione con Device
    code, value) {
        this.id = id;
        this.device = device;
        this.code = code;
        this.value = value;
    }
}
class PnUser {
    constructor(id, identifier, registrationDate, lastLog, tester, app // Relazione con App
    ) {
        this.id = id;
        this.identifier = identifier;
        this.registrationDate = registrationDate;
        this.lastLog = lastLog;
        this.tester = tester;
        this.app = app;
    }
}
class PnAppConfig {
    constructor(id, app, // Relazione con App
    os, // Relazione con OS
    appPackage, senderService, serverKey, certPath, secret, production) {
        this.id = id;
        this.app = app;
        this.os = os;
        this.appPackage = appPackage;
        this.senderService = senderService;
        this.serverKey = serverKey;
        this.certPath = certPath;
        this.secret = secret;
        this.production = production;
    }
}
class PnApp {
    constructor(id, name, code, description) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
    }
}
