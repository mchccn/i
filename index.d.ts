export default class IPv4 {
    #private;
    static classAMin: IPv4;
    static classAMax: IPv4;
    static classBMin: IPv4;
    static classBMax: IPv4;
    static classCMin: IPv4;
    static classCMax: IPv4;
    static classDMin: IPv4;
    static classDMax: IPv4;
    static classEMin: IPv4;
    static classEMax: IPv4;
    constructor(address: string, subnet: number);
    get address(): string;
    set address(address: string);
    get subnet(): number;
    set subnet(subnet: number);
    toBinary(): string;
    toDecimal(): number;
    static isValid(ip: string): boolean;
    static isPrivate(address: string): boolean;
    static not(address: string | IPv4): string;
    static or(a: string, b: string): string;
}
