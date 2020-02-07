var Fun = Fun || {}


Fun.RPSLS = {
    init: function() {
        this.spinOpponentHand();
    },
    Op: {
        Hands: [
            "<div class='far fa-hand-rock'></div>",
            "<div class='far fa-hand-paper'></div>",
            "<div class='far fa-hand-scissors'></div>",
            "<div class='far fa-hand-lizard'></div>",
            "<div class='far fa-hand-spock'></div>"
        ],
        randomHand: function() {
            return this.Hands[Math.floor(Math.random()*this.Hands.length)];
        }
    },

    spinOpponentHand: function() {
        $(".opponent-hand").html(this.Op.randomHand());
    }
}