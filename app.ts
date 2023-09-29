import{IPnMessageOptions,IPnMessage,IPnMessageDeliver,IPnUserMetadata,IPnOS,IPnDevice,IPnDeviceMetadata,IPnUser,IPnAppConfig,IPnApp }  from './interfaces';


//Classi

class PnMessageOptions implements IPnMessageOptions {
  constructor(
    public id: number,
    public androidIcon: string,
    public androidIconColor: string,
    public androidSound: string,
    public iosSound: string,
    public message: PnMessage // Relazione con Message
  ) {}
}

class PnMessage implements IPnMessage {
  constructor(
    public id: number,
    public correlationId: string,
    public title: string,
    public body: string,
    public subtitle: string,
    public language: string,
    public sender: string,
    public sentDate: Date,
    public additionalData: Record<string, string>,
    public link: string,
    public image: string
  ) {}
}

class PnMessageDeliver implements IPnMessageDeliver {
  constructor(
    public id: number,
    public message: PnMessage, // Relazione con Message
    public device: PnDevice, // Relazione con Device
    public user: PnUser, // Relazione con User
    public sentDate: Date,
    public status: string,
    public readDate: Date
  ) {}
}

class PnUserMetadata implements IPnUserMetadata {
  constructor(
    public id: number,
    public user: PnUser, // Relazione con User
    public code: string,
    public value: string
  ) {}
}

class PnOS implements IPnOS {
  constructor(public id: number, public name: string, public code: string) {}
}

class PnDevice implements IPnDevice {
  constructor(
    public id: number,
    public app: PnApp, // Relazione con App
    public os: PnOS, // Relazione con OS
    public registration_date: Date,
    public lastLog: Date,
    public language: string,
    public enabled: boolean,
    public tester: boolean,
    public user: PnUser // Relazione con User
  ) {}
}

class PnDeviceMetadata implements IPnDeviceMetadata {
  constructor(
    public id: number,
    public device: string,
    public code: string,
    public value: string
  ) {}
}

class PnUser implements IPnUser {
  constructor(
    public id: number,
    public identifier: string,
    public registrationDate: Date,
    public lastLog: Date,
    public tester: boolean,
    public app: PnApp // Relazione con App
  ) {}
}

class PnAppConfig implements IPnAppConfig {
  constructor(
    public id: number,
    public app: PnApp, // Relazione con App
    public os: PnOS, // Relazione con OS
    public appPackage: string,
    public senderService: string,
    public serverKey: string,
    public certPath: string,
    public secret: string,
    public production: number
  ) {}
}

class PnApp implements IPnApp {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public description: string
  ) {}
}
