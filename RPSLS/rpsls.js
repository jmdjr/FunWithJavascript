var Fun = Fun || {}


Fun.RPSLS = {
    init: function() {
        this.spinOpponentHand();

        $(".player-hands").onclick

    },
    Matches: [
        { name: "Rock", value:1, win:12, lose:18 },
        { name: "Paper", value:2, win:17, lose:12 },
        { name: "Scissors", value:4, win:10, lose:17 },
        { name: "Lizard", value:8, win:18, lose:5 },
        { name: "Spock", value:16, win:5, lose:10 },

    ],
    Op: {
        Hands: [
            "<i class='far fa-hand-rock'></i>",
            "<i class='far fa-hand-paper'></i>",
            "<i class='far fa-hand-scissors'></i>",
            "<i class='far fa-hand-lizard'></i>",
            "<i class='far fa-hand-spock'></i>"
        ],
        idleHands: [
            "<i class='white fa fa-hands'></i>",
            "<i class='white fa fa-praying-hands'></i>"
        ],
        currentHand: -1,
        randomHand: function() {
            // so as to not get the same number in a row.
            var index = -1;
            do {
                index = Math.floor(Math.random()*this.Hands.length);
            }
            while(this.currentHand == index);
            
            this.currentHand = index;
            return this.Hands[index];
        },
        currentIdle: 0,
        playIdle: function() {
            var hands = this.currentIdle % this.idleHands.length;
            this.currentIdle += 1;

            return this.idleHands[hands];

        }
    },
    
    handSpinHandle: null,

    spinOpponentHand: function() {
        var $this = this;
        handSpinHandle = setInterval(function() {
            $(".opponent-hand").html($this.Op.playIdle());
        }, 500);
    }
}