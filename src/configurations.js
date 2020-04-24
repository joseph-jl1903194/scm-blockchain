const company = '';

const URL_SERVER = 'http://localhost:5000/api/v1/'; //for live
const ROOT_DIR = '/'; // => /gemsaccounting

const SERVER_ATTR = {
    PAGE_MACHINE: URL_SERVER + 'machines',
    PAGE_LOGIN: URL_SERVER + 'user/login'
}

const RENDER_SOURCE = '#content-display';

export {
    SERVER_ATTR,
    RENDER_SOURCE
};