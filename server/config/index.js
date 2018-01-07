/*
Copyright 2017 Keyhole Software LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

module.exports = {
    port: process.env.PORT || 3001,
    url: process.env.HEROKU_URL || 'http://localhost:3001/' ,
    jwt_secret: process.env.jwt_secret || 'lfanflaefknawelf',
    jwt_expires: process.env.jwt_expires || 3600,
    mongodb: process.env.MONGODB_URI || 'mongodb://heroku_gcs4053b:ld4t5rv5a8u8c64iivqrr374k8@ds131687.mlab.com:31687/heroku_gcs4053b',
    passwordCrypto: process.env.passwordCrypto || "k2312lk3m12l31",
    event_dir: process.env.event_dir || './server/convoevents',
    uploaded_event_dir: './server/services/convo/events',
    template_dir: process.env.template_dir || 'server/convoevents',
    ping_url: process.env.PING_URL || 'http://khs-convo-dev.herokuapp.com'
}