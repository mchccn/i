export default class IPv4 {
    #address: string;
    #subnet: number;

    static classAMin = new IPv4("0.0.0.0", 8);
    static classAMax = new IPv4("127.255.255.255", 8);
    static classBMin = new IPv4("128.0.0.0", 16);
    static classBMax = new IPv4("191.255.255.255", 16);
    static classCMin = new IPv4("192.0.0.0", 24);
    static classCMax = new IPv4("223.255.255.255", 24);
    static classDMin = new IPv4("224.0.0.0", 0);
    static classDMax = new IPv4("239.255.255.255", 0);
    static classEMin = new IPv4("240.0.0.0", 0);
    static classEMax = new IPv4("255.255.255.254", 0);

    constructor(address: string, subnet: number) {
        if (!IPv4.isValid(address)) throw new Error("Invalid IP address.");

        //@ts-ignore
        this.#address = address;
        //@ts-ignore
        this.#subnet =
            typeof subnet === "number"
                ? subnet
                : this.toDecimal() < IPv4.classAMax.toDecimal()
                ? 8
                : this.toDecimal() < IPv4.classBMax.toDecimal()
                ? 16
                : this.toDecimal() < IPv4.classBMax.toDecimal()
                ? 24
                : undefined;
    }

    get address() {
        return this.#address;
    }

    set address(address) {
        if (!IPv4.isValid(address)) throw new Error("Invalid IP address.");

        this.#address = address;
    }

    get subnet() {
        return this.#subnet;
    }

    set subnet(subnet) {
        if (subnet < 0 || subnet > 32 || !Number.isInteger(subnet)) throw new Error("Invalid IP subnet prefix length.");

        this.#subnet = subnet;
    }

    toBinary() {
        return this.address
            .split(".")
            .map((o) => parseInt(o).toString(2).padStart(8, "0"))
            .join(".");
    }

    toDecimal() {
        return parseInt(this.toBinary().replace(/\./g, ""), 2);
    }

    static isValid(ip: string) {
        if (typeof ip !== "string") return false;

        const octets = ip.split(".");

        if (octets.length !== 4) return false;

        return octets.every((o) => /^\d+$/.test(o) && parseInt(o) >= 0 && parseInt(o) <= 255);
    }

    static isPrivate(address: string) {
        if (!IPv4.isValid(address)) throw new Error("Invalid IP address.");

        const parts = address.split(".");

        return parts[0] === "10" || (parts[0] === "172" && parseInt(parts[1], 10) >= 16 && parseInt(parts[1], 10) <= 31) || (parts[0] === "192" && parts[1] === "168");
    }

    static not(address: string | IPv4) {
        if (!IPv4.isValid(address as string) && !(address instanceof IPv4)) throw new Error("Invalid IP address.");

        return (address instanceof IPv4 ? address.address : address)
            .split(".")
            .map((o) => Math.abs(parseInt(o) - 255))
            .join(".");
    }

    static or(a: string, b: string) {
        if (!IPv4.isValid(a)) throw new Error("Invalid IP address.");
        if (!IPv4.isValid(b)) throw new Error("Invalid IP address.");

        const temp = b.split(".");

        return a
            .split(".")
            .map((o, i) => parseInt(o) | parseInt(temp[i]))
            .join(".");
    }
}
