export interface Pais {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    borders?:     string[];
    cioc?:        string;
    gini?:        { [key: string]: number };
    fifa?:        string;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    XPF?: Aed;
    EUR?: Aed;
    VES?: Aed;
    USD?: Aed;
    XCD?: Aed;
    GIP?: Aed;
    KES?: Aed;
    BRL?: Aed;
    MVR?: Aed;
    CKD?: Aed;
    NZD?: Aed;
    SCR?: Aed;
    XAF?: Aed;
    VUV?: Aed;
    GMD?: Aed;
    GYD?: Aed;
    FKP?: Aed;
    DZD?: Aed;
    MAD?: Aed;
    MRU?: Aed;
    TRY?: Aed;
    PKR?: Aed;
    IRR?: Aed;
    IDR?: Aed;
    AFN?: Aed;
    ALL?: Aed;
    CDF?: Aed;
    XOF?: Aed;
    SDG?: BAM;
    SAR?: Aed;
    KHR?: Aed;
    NPR?: Aed;
    MYR?: Aed;
    RWF?: Aed;
    THB?: Aed;
    JOD?: Aed;
    CHF?: Aed;
    KMF?: Aed;
    GBP?: Aed;
    IMP?: Aed;
    HKD?: Aed;
    JEP?: Aed;
    TJS?: Aed;
    BGN?: Aed;
    EGP?: Aed;
    MWK?: Aed;
    CVE?: Aed;
    MDL?: Aed;
    DKK?: Aed;
    TMT?: Aed;
    BBD?: Aed;
    ERN?: Aed;
    LSL?: Aed;
    ZAR?: Aed;
    TZS?: Aed;
    SOS?: Aed;
    ANG?: Aed;
    DOP?: Aed;
    GNF?: Aed;
    NAD?: Aed;
    SHP?: Aed;
    SBD?: Aed;
    MOP?: Aed;
    ARS?: Aed;
    BAM?: BAM;
    GGP?: Aed;
    DJF?: Aed;
    SYP?: Aed;
    PEN?: Aed;
    AUD?: Aed;
    JMD?: Aed;
    KZT?: Aed;
    SLL?: Aed;
    KRW?: Aed;
    BZD?: Aed;
    PGK?: Aed;
    ISK?: Aed;
    TWD?: Aed;
    JPY?: Aed;
    CNY?: Aed;
    LBP?: Aed;
    LKR?: Aed;
    GTQ?: Aed;
    RSD?: Aed;
    MGA?: Aed;
    SZL?: Aed;
    RON?: Aed;
    ZMW?: Aed;
    ZWL?: Aed;
    TND?: Aed;
    AED?: Aed;
    MNT?: Aed;
    NOK?: Aed;
    UYU?: Aed;
    BSD?: Aed;
    RUB?: Aed;
    YER?: Aed;
    SEK?: Aed;
    LAK?: Aed;
    COP?: Aed;
    CAD?: Aed;
    INR?: Aed;
    MKD?: Aed;
    PYG?: Aed;
    CRC?: Aed;
    UGX?: Aed;
    BOB?: Aed;
    KPW?: Aed;
    MUR?: Aed;
    HNL?: Aed;
    KGS?: Aed;
    CLP?: Aed;
    BMD?: Aed;
    LRD?: Aed;
    LYD?: Aed;
    OMR?: Aed;
    PHP?: Aed;
    PLN?: Aed;
    FOK?: Aed;
    BHD?: Aed;
    BYN?: Aed;
    QAR?: Aed;
    VND?: Aed;
    SGD?: Aed;
    GEL?: Aed;
    BIF?: Aed;
    SSP?: Aed;
    WST?: Aed;
    KWD?: Aed;
    TTD?: Aed;
    TVD?: Aed;
    AOA?: Aed;
    TOP?: Aed;
    MZN?: Aed;
    MMK?: Aed;
    ETB?: Aed;
    AZN?: Aed;
    UZS?: Aed;
    BDT?: Aed;
    AMD?: Aed;
    NGN?: Aed;
    BND?: Aed;
    ILS?: Aed;
    AWG?: Aed;
    NIO?: Aed;
    HTG?: Aed;
    KID?: Aed;
    KYD?: Aed;
    UAH?: Aed;
    MXN?: Aed;
    FJD?: Aed;
    GHS?: Aed;
    SRD?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    BTN?: Aed;
    HUF?: Aed;
    STN?: Aed;
    IQD?: Aed;
    CZK?: Aed;
    BWP?: Aed;
    PAB?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
