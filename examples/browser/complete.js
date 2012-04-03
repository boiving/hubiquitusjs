/*
 * Copyright (c) Novedia Group 2012.
 *
 *     This file is part of Hubiquitus.
 *
 *     Hubiquitus is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Hubiquitus is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Hubiquitus.  If not, see <http://www.gnu.org/licenses/>.
 */

function connect(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    hClient.connect(username, password, hCallback);
}

function disconnect(){
    hClient.disconnect();
}

function publish(){
    var chid = document.getElementById('chid').value;
    var msg = document.getElementById('hMessage').value;
    hClient.publish(chid, msg);
}

function subscribe(){
    var chid = document.getElementById('chid').value;
    hClient.subscribe(chid)
}

function unsubscribe(){
    var chid = document.getElementById('chid').value;
    hClient.unsubscribe(chid)
}

function get_messages(){
    var chid = document.getElementById('chid').value;
    hClient.getMessages(chid)
}

function hCallback(msg){
    console.log(JSON.stringify(msg));
    if(msg.context == 'hStatus' || msg.context == 'result' || msg.context == 'error')
        document.getElementById("status").innerHTML = JSON.stringify(msg);
    else if (msg.context == 'message')
        document.getElementById("fetched").innerHTML = msg.data.message;
}