//Interfacce estrapolate dal modello ER

export interface IPnMessageOptions {
    androidIcon: string;
    androidIconColor: string;
    androidSound: string;
    iosSound: string;
  }
  
  export interface IPnMessage {
    title: string;
    body: string;
    subtitle: string;
    language: string;
    sender: string;
    sentDate: Date;
    additionalData: Record<string, string>;
    link: string;
    image: string;
  }
  
  export interface IPnMessageDeliver {
    sentDate: Date;
    status: string;
    readDate: Date;
  } 
  export interface IPnUserMetadata {
    code: string;
    value: string;
  }
  
  export interface IPnOS {
    name: string;
    code: string;
  }
  
  export interface IPnDevice {
    registration_date: Date;
    lastLog: Date;
    language: string;
    enabled: boolean;
    tester: boolean;
  }
  
  export interface IPnDeviceMetadata {
    code: string;
    value: string;
  }
  
  export interface IPnUser {
    identifier: string;
    registrationDate: Date;
    lastLog: Date;
    tester: boolean;
  }
  
  export interface IPnAppConfig {
    appPackage: string;
    senderService: string;
    serverKey: string;
    certPath: string;
    secret: string;
    production: number;
  }
  
  export interface IPnApp {
    name: string;
    code: string;
    description: string;
  }
  