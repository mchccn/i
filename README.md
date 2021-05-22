| [a](https://www.npmjs.com/package/@cursorsdottsx/a)
| [b](https://www.npmjs.com/package/@cursorsdottsx/b)
| [c](https://www.npmjs.com/package/@cursorsdottsx/c)
| [d](https://www.npmjs.com/package/@cursorsdottsx/d)
| [e](https://www.npmjs.com/package/@cursorsdottsx/e)
| [f](https://www.npmjs.com/package/@cursorsdottsx/f)
| [g](https://www.npmjs.com/package/@cursorsdottsx/g)
| [h](https://www.npmjs.com/package/@cursorsdottsx/h)
| **i**
| [j](https://www.npmjs.com/package/@cursorsdottsx/j)
| [k](https://www.npmjs.com/package/@cursorsdottsx/k)
| [l](https://www.npmjs.com/package/@cursorsdottsx/l)
| [m](https://www.npmjs.com/package/@cursorsdottsx/m)
| [n](https://www.npmjs.com/package/@cursorsdottsx/n)
| [o](https://www.npmjs.com/package/@cursorsdottsx/o)
| [p](https://www.npmjs.com/package/@cursorsdottsx/p)
| [q](https://www.npmjs.com/package/@cursorsdottsx/q)
| [r](https://www.npmjs.com/package/@cursorsdottsx/r)
| [s](https://www.npmjs.com/package/@cursorsdottsx/s)
| [t](https://www.npmjs.com/package/@cursorsdottsx/t)
| [u](https://www.npmjs.com/package/@cursorsdottsx/u)
| [v](https://www.npmjs.com/package/@cursorsdottsx/v)
| [w](https://www.npmjs.com/package/@cursorsdottsx/w)
| [x](https://www.npmjs.com/package/@cursorsdottsx/x)
| [y](https://www.npmjs.com/package/@cursorsdottsx/y)
| [z](https://www.npmjs.com/package/@cursorsdottsx/z)
|

**I is for IP**

# @cursorsdottsx/i

A few IP address utilities (only v4). More will be added later when I actually understand how IPs work.

Use NPM or Yarn to install:

```bash
npm install @cursorsdottsx/i
```

```bash
yarn add @cursorsdottsx/i
```

Import the utility class:

```js
require("@cursorsdottsx/i");
```

A global class named `IPv4` will be added.

`new IPv4(address, subnet)`

- `address` – IP address
- `subnet` – Subnet mask

Creates a new IPv4 address.

`IPv4.prototype.toBinary()` – Returns the binary representation of the IP address.

`IPv4.prototype.toDecimal()` – Returns the decimal representation of the IP address.

`IPv4.isValid(address)` – Returns true if the IP address is valid.

`IPv4.isPrivate(address)` – Returns true if the IP address is private.

`IPv4.not(a, b)` – Exactly what it sounds like.

`IPv4.or(a, b)` – Exactly what it sounds like.

[npm abc's homepage](https://codepen.io/cursorsdottsx/full/KKWNRaY)
