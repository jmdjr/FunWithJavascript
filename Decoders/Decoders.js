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

    PrepContext: function (context) {
        var key = this.Key().val().toLowerCase();
        var length = message.length;

        if (key == "") {
            this.Crypted().val("No Key found...");
            return;
        }
    },

    Encode: function (context) {
        if (this.state == "encode") {
            var message = context.value.toLowerCase();
            var key = this.Key().val().toLowerCase();
            var length = message.length;

            if (key == "") {
                this.Crypted().val("No Key found...");
                return;
            }

            var encode = "";
            var cypherIndex = 0;
            for (var i = 0; i < message.length; i += 1) {
                var char = message[i];
                var first = this.singleTabula[char];

                if (typeof (first) == "undefined") {
                    encode += char;
                    continue;
                }

                var keypart = this.singleTabula[key[cypherIndex % key.length]];
                var map = first + keypart;
                map = map > 26 ? map - 26 : map;

                cypherIndex += 1;
                encode += this.singleTabula[map];
            }

            this.Crypted().val(encode);
        }
    },

    SetCryption: function(options) {
        $("#selectOrder").val($(options).val());
    },
    
    Decode: function (context) {
        if (this.state == "decode") {
            var message = context.value.toLowerCase();
            var key = this.Key().val().toLowerCase();
            var length = message.length;

            if (key == "") {
                this.Message().val("No Key found...");
                return;
            }

            var decode = "";
            var cypherIndex = 0;
            for (var i = 0; i < message.length; i += 1) {
                var char = message[i];
                var first = this.singleTabula[char];

                if (typeof (first) == "undefined") {
                    decode += char;
                    continue;
                }

                var keypart = this.singleTabula[key[cypherIndex % key.length]];
                var map = first - keypart;
                map = map < 0 ? map + 26 : map;

                cypherIndex += 1;
                decode += this.singleTabula[map];
            }

            this.Message().val(decode);
        }
    },
    UpdateKey: function (context) {
        if (this.state == "key") {

        }
    },
    Cryption: {
        Veigner: {
            Encode: function (message, key) {
                    var key = this.Key().val().toLowerCase();
                    var length = message.length;

                    if (key == "") {
                        this.Crypted().val("No Key found...");
                        return;
                    }

                    var encode = "";
                    var cypherIndex = 0;
                    for (var i = 0; i < message.length; i += 1) {
                        var char = message[i];
                        var first = this.singleTabula[char];

                        if (typeof (first) == "undefined") {
                            encode += char;
                            continue;
                        }

                        var keypart = this.singleTabula[key[cypherIndex % key.length]];
                        var map = first + keypart;
                        map = map > 26 ? map - 26 : map;

                        cypherIndex += 1;
                        encode += this.singleTabula[map];
                    }

                    this.Crypted().val(encode);
            },

            Decode: function (context) {
                if (this.state == "decode") {
                    var message = context.value.toLowerCase();
                    var key = this.Key().val().toLowerCase();
                    var length = message.length;

                    if (key == "") {
                        this.Message().val("No Key found...");
                        return;
                    }

                    var decode = "";
                    var cypherIndex = 0;
                    for (var i = 0; i < message.length; i += 1) {
                        var char = message[i];
                        var first = this.singleTabula[char];

                        if (typeof (first) == "undefined") {
                            decode += char;
                            continue;
                        }

                        var keypart = this.singleTabula[key[cypherIndex % key.length]];
                        var map = first - keypart;
                        map = map < 0 ? map + 26 : map;

                        cypherIndex += 1;
                        decode += this.singleTabula[map];
                    }

                    this.Message().val(decode);
                }
            },
        },
        Ceasar: {
            Encode: function(message) {},
            Decode: function(message) {}
        }
    }
}