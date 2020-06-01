const { MTProto } = require('telegram-mtproto');

const LAYER = 57;
const INIT_CONNECTION = 0x69796de9;

const API_ID = <apiid>;
const API_HASH = '<apihash>';

class TelegramSignUp {
  /**
   * @constructor
   * @arg {number} [api_id=<>] - API ID
   * @arg {string} [api_hash='<>'] - API hash
   * @arg {boolean} [dev_server=false] - Dev server
   */
  constructor (api_id=API_ID, api_hash=API_HASH, dev_server=false) {
    this._apiId = api_id;
    this._apiHash = api_hash;

    // eslint-disable-next-line new-cap
    this._client = MTProto({
      server: {
        dev: dev_server
      },
      api: {
        layer: LAYER,
        initConnection: INIT_CONNECTION,
        api_id
      }
    });
  }

  async sendCode (phone_number) {
    const { phone_code_hash } = await this._client('auth.sendCode', {
      phone_number,
      current_number: false,
      api_id: this._apiId,
      api_hash: this._apiHash
    });

    return phone_code_hash;
  }

  signUp (phone_number, phone_code_hash, phone_code, first_name, last_name) {
    const params = {
      phone_number,
      phone_code_hash,
      phone_code,
      first_name
    };

    if (last_name) params.last_name = last_name;

    return this._client('auth.signUp', params);
  }

  getStorage () {
    return this._client.storage.store;
  }
}

module.exports = TelegramSignUp;
