const BypassRegex = /^(#|about:|mailto:|blob:)/g;
const DataRegex = /^data:([a-z\/A-Z0-9\-\+]+);?(charset\=[\-A-Za-z0-9]+)?;?(base64)?[;,]*(.*)/g;
const WeirdRegex = /^([\/A-Za-z0-9\-%]+)(http[s]?:\/\/.*)/g

export default class DynamicRegex { ctx; constructor(ctx: any) {this.ctx = ctx;}; BypassRegex: RegExp = BypassRegex; DataRegex: RegExp = DataRegex; WeirdRegex: RegExp = WeirdRegex; };