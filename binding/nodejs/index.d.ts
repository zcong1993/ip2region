export interface Option {
  dbPath: string;
}

export interface Resp {
  city: number;
  region: string;
}

export type CallBackFunc = (err: Error, resp: Resp) => void

class IP2Region {
  constructor(option?: Option)

  static create(dbPath?: string): IP2Region
  static destroy()

  binarySearchSync(ip: string): Resp
  binarySearch(ip: string, cb: CallBackFunc): void

  btreeSearchSync(ip: string): Resp
  btreeSearch(ip: string, cb: CallBackFunc): void

  memorySearchSync(ip: string): Resp
  memorySearch(ip: string, cb: CallBackFunc): void
}

export default IP2Region
