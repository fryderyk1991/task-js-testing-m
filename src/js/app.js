import GitHubSDK from './GitHubSDK';
import {secret} from './secretToken'
import './../css/style.css';
document.addEventListener('DOMContentLoaded', init)

function init () {
    const gh = new GitHubSDK('fryderyk1991', secret);

    // const user = gh.getUser('fryderyk1991');
    const colabo = gh.sendInvitation('task-js-basics', 'fryderyk1991');
}