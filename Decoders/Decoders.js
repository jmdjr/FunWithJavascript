var Fun = Fun || {}


Fun.Decoders = {
    state: "",
    singleTabula: "abcdefghijklmnopqrstuvwxyz",

    init: function () {
        this.state = "";
        this.singleTabula = [...this.singleTabula];

        var i = 0;
        var length = this.singleTabula.length;

        for (var i = 0; i < length; i += 1) {
            var letter = this.singleTabula[i];
            this.singleTabula[letter] = i;
        }

        console.log(this.singleTabula);
    },

    Message: function () { return $("#message"); },
    Key: function () { return $("#key"); },
    Crypted: function () { return $("#crypted"); },

    SetState: function (state) {
        this.state = state;
    },

    Encode: function () {
        if (this.state == "encode") {
            var key = this.Key().val;

            if (key == "") {
                this.Crypted().val("No Key found...");
                return;
            }
            var encode = this.Cryption.Veigner.Encode(this.Message().val, key);
            this.Crypted().val(encode);
        }
    },

    SetCryption: function(options) {
        debugger;
    },
    
    Decode: function () {
        if (this.state == "decode") {

            if (key == "") {
                this.Message().val("No Key found...");
                return;
            }

            var decode = this.Cryption.Veigner.Decode(this.Crypted().val, this.Key().val);
            this.Message().val(decode);
        }
    },
    UpdateKey: function (context) {
        // whichever state we are in, that route will be taken.
        this.encode(context);
        this.decode(context);
    },
    Cryption: {
        Veigner: {
            Encode: function (message, key) {

                    var length = message.length;
                    var encode = "";
                    var cypherIndex = 0;

                    for (var i = 0; i < length; i += 1) {
                        var char = message[i];
                        var first = Fun.Decoders.singleTabula[char];

                        if (typeof (first) == "undefined") {
                            encode += char;
                            continue;
                        }

                        var keypart = Fun.Decoders.singleTabula[key[cypherIndex % key.length]];
                        var map = first + keypart;
                        map = map > 26 ? map - 26 : map;

                        cypherIndex += 1;
                        encode += Fun.Decoders.singleTabula[map];
                    }

                    return encode;
            },

            Decode: function (message, key) {

                    var length = message.length;
                    var decode = "";
                    var cypherIndex = 0;

                    for (var i = 0; i < length; i += 1) {
                        var char = message[i];
                        var first = Fun.Decoders.singleTabula[char];

                        if (typeof (first) == "undefined") {
                            decode += char;
                            continue;
                        }

                        var keypart = Fun.Decoders.singleTabula[key[cypherIndex % key.length]];
                        var map = first - keypart;
                        map = map < 0 ? map + 26 : map;

                        cypherIndex += 1;
                        decode += Fun.Decoders.singleTabula[map];
                    }

                    return decode;
            },
        },
        Ceasar: {
            Encode: function(message, key) {

                var length = message.length;
                var encode = "";

                for (var i = 0; i < length; i += 1) {
                    var char = message[i];
                    var charcode = Fun.Decoders.singleTabula[char];

                    if (typeof (first) == "undefined") {
                        encode += char;
                        continue;
                    }
                    
                    charcode = (charcode + key) % 26;
                    encode += Fun.Decoders.singleTabula[charcode];
                }

                return encode;
            },

            Decode: function(message, key) {

            }
        }
    }
}